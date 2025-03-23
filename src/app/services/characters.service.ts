import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Character, CharacterResponse } from '../models/characters.model';
import { characterAdapter } from '../adapters/character-adapter';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private apiUrl = 'https://rickandmortyapi.com/api/character';
  private http = inject(HttpClient);

  getCharacters(): Observable<Character[]> {
    return this.http
      .get<CharacterResponse>(this.apiUrl)
      .pipe(map((response: CharacterResponse) => characterAdapter(response)));
  }

  updateCharacter(character: Character): Observable<Character> {
    return this.http.put<Character>(
      `${this.apiUrl}/${character.id}`,
      character
    );
  }

  deleteCharacter(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
