import { Component, computed, inject } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormChildComponent } from './form-child/form-child.component';
import { toSignal } from '@angular/core/rxjs-interop';

export interface ItemForm {
  id: FormControl<number>;
  name: FormControl<string>;
  value: FormControl<number>;
}
export type CustomFormGroup = FormGroup<ItemForm>;

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [ReactiveFormsModule, FormChildComponent],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss',
})
export class FormsComponent {
  private _fb: NonNullableFormBuilder = inject(NonNullableFormBuilder);

  form: FormGroup<{ items: FormArray<CustomFormGroup> }> = this._fb.group({
    items: this._fb.array<CustomFormGroup>([]),
  });

  get items() {
    return this.form.controls.items as FormArray<CustomFormGroup>;
  }

  itemChanges = toSignal(this.form.valueChanges);

  totalValue = computed(() => {
    return this.itemChanges()?.items?.reduce(
      (total, item) => total + (Number(item.value) || 0),
      0
    );
  });

  addIem(): void {
    const id = this.items.length + 1;
    const itemForm = this._fb.group<ItemForm>({
      id: this._fb.control(id),
      name: this._fb.control('', { validators: [Validators.required] }),
      value: this._fb.control(0, { validators: [Validators.required] }),
    });
    this.form.controls.items.push(itemForm);
  }
}
