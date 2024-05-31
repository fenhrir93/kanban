import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ItemComponent } from './item/item.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-column',
  standalone: true,
  imports: [MatCardModule, ItemComponent, MatIconModule, MatButtonModule],
  templateUrl: './column.component.html',
  styleUrl: './column.component.scss',
})
export class ColumnComponent {}
