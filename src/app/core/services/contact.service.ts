import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserMessage } from '../models/message';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}

  sendMessage(form: UserMessage) {
    return this.http.post('contact', form);
  }
}
