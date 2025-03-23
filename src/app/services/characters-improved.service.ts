import { Injectable, signal } from '@angular/core';
import { CharacterImproved } from '../models/characters-improved.model';
import { catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharactersImprovedService {
  state = signal({
    characters: new Map<number, CharacterImproved>(),
    loading: true,
  });

  constructor() {
    this.getCharactersImproved();
  }

  getFormmattedCharactersImproved(): CharacterImproved[] {
    return Array.from(this.state().characters.values());
  }

  getCharacterImprovedById(id: number): CharacterImproved | undefined {
    return this.state().characters.get(id);
  }

  getCharactersImproved(): void {
    const mockCharacters: CharacterImproved[] = [
      {
        id: 1,
        name: 'Rick Sanchez',
        status: 'Alive',
        species: 'Human',
        type: '',
      },
      {
        id: 2,
        name: 'Morty Smith',
        status: 'Alive',
        species: 'Human',
        type: '',
      },
      {
        id: 3,
        name: 'Summer Smith',
        status: 'Alive',
        species: 'Human',
        type: '',
      },
    ];

    of(mockCharacters)
      .pipe(
        catchError((error) => {
          console.error('Error fetching characters', error);
          return of([]);
        })
      )
      .subscribe((result: CharacterImproved[]) => {
        result.forEach((character) =>
          this.state().characters.set(character.id, character)
        );
        this.state.set({ characters: this.state().characters, loading: false });
      });
  }

  updateCharacterImproved(character: CharacterImproved): void {
    const updatedCharacter = { ...character };

    of(updatedCharacter).subscribe((result: CharacterImproved) => {
      this.state.update((state) => {
        state.characters.set(result.id, result);
        return { characters: state.characters, loading: false };
      });
    });
  }

  deleteCharacterImproved(id: number): void {
    of({ status: 200 }).subscribe(() => {
      this.state.update((state) => {
        state.characters.delete(id);
        return { characters: state.characters, loading: false };
      });
    });
  }
}
