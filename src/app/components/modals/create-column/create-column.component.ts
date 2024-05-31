import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Column } from '../../../models/Column.interface';
@Component({
  selector: 'app-create-column',
  standalone: true,
  imports: [
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './create-column.component.html',
  styleUrl: './create-column.component.scss',
  providers: [],
})
export class CreateColumnComponent {
  dialog = inject(MatDialog);
  fB = inject(FormBuilder);
  formGroup = this.fB.group({
    id: [null],
    title: ['', [Validators.required, Validators.minLength(3)]],
    description: [null, [Validators.minLength(10)]],
  });

  onSubmit() {}
}
