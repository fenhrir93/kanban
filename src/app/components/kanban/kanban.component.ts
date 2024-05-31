import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { ColumnComponent } from './column/column.component';
import { MatButtonModule } from '@angular/material/button';
import { ColumnHttpService } from './column/column.http.service';
@Component({
  selector: 'app-kanban',
  standalone: true,
  imports: [MatCardModule, ColumnComponent, MatButtonModule],
  templateUrl: './kanban.component.html',
  styleUrl: './kanban.component.scss',
  providers: [ColumnHttpService],
})
export class KanbanComponent {
  columnHttpService = inject(ColumnHttpService);
}
