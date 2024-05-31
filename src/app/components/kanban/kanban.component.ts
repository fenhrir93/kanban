import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ColumnHttpService } from './column/column.http.service';
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { CreateColumnComponent } from '../modals/create-column/create-column.component';
import { ColumnComponent } from '@components/kanban/column/column.component';
@Component({
  selector: 'app-kanban',
  standalone: true,
  imports: [MatCardModule, ColumnComponent, MatButtonModule],
  templateUrl: './kanban.component.html',
  styleUrl: './kanban.component.scss',
  providers: [ColumnHttpService, MatButtonModule, MatDialogModule],
})
export class KanbanComponent {
  columnHttpService = inject(ColumnHttpService);
  dialog = inject(MatDialog);
  onAddColumn() {
    this.dialog.open(CreateColumnComponent);
  }
}
