import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable()
export class HttpService {
  private http = inject(HttpClient);

  getTodos() {}

  addTodo() {}

  updateTodo() {}

  deleteTodo() {}
}
