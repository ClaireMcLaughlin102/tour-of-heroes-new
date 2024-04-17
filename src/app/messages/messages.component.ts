import { Component, Inject } from '@angular/core';
import { MessageService } from '../message.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent {
  constructor(@Inject(MessageService) public messageService: MessageService) {}
}

