import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, inject } from '@angular/core';

@Injectable()
export class ColumnHttpService {
  private http = inject(HttpClient);

  getColumns() {}

  addColumn() {}

  updateColumn() {}

  deleteColumn() {}
}
