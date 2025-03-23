import { Component, inject, Signal } from '@angular/core';
import { Character } from '../../models/characters.model';
import { CharactersService } from '../../services/characters.service';
import { JsonPipe, NgIf } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-characters',
  standalone: true,
  providers: [CharactersService],
  imports: [NgIf, JsonPipe],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss',
})
export class CharactersComponent {
  characterService = inject(CharactersService);
  characters: Signal<Character[] | undefined> = toSignal(
    this.characterService.getCharacters()
  );
}
