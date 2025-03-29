import { Component, input } from '@angular/core';
import { ItemForm } from '../forms.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CustomInputComponent } from '../custom-input/custom-input.component';

@Component({
  selector: 'app-form-child',
  standalone: true,
  imports: [ReactiveFormsModule, CustomInputComponent],
  templateUrl: './form-child.component.html',
  styleUrl: './form-child.component.scss',
})
export class FormChildComponent {
  formGroup = input.required<FormGroup<ItemForm>>();
}
