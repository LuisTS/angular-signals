import { Component, computed, inject, Signal } from '@angular/core';
import { CharactersImprovedService } from '../../services/characters-improved.service';
import { CharacterImproved } from '../../models/characters-improved.model';

@Component({
  selector: 'app-characters-improved',
  standalone: true,
  templateUrl: './characters-improved.component.html',
  styleUrl: './characters-improved.component.scss',
})
export class CharactersImprovedComponent {
  charactersImprovedService: CharactersImprovedService = inject(
    CharactersImprovedService
  );
  characters: Signal<CharacterImproved[] | undefined> = computed(() =>
    this.charactersImprovedService.getFormmattedCharactersImproved()
  );
}
