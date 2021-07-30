import {ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {templateJitUrl} from '@angular/compiler';
import { MessagerieService } from './Services/messagerie.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-messagerie',
  templateUrl: './messagerie.component.html',
  styleUrls: ['./messagerie.component.css']
})
export class MessagerieComponent implements OnInit {

  username = '';
  messages = [];
  users = [];
  message = '';

  idDiscussion: number = null;
  isInversed: boolean = false;
  UserId = localStorage.getItem('idUser');
  UserDiscussion = null;
  RechargerMessages = false;

  constructor(private http: HttpClient, private MessagerieService: MessagerieService) {
  }
  ngOnInit(): void {
    this.getUsers();
    // listener to catch request in mercure server ( it must has Topic = Messenger)
    let url = new URL('http://localhost:3000/hub');
    url.searchParams.append('topic', 'Messenger');
    const eventSource = new EventSource(<any>url);
    // when there is a new message ,all the messages will be refreshed
    eventSource.onmessage = e => {
      this.RechargerMessages = true;
    };

    //this timer declanched every 1s , in case of new message (RechargerMessages = true;) , getMessages(à) is executed.
    timer(1000, 1000).subscribe(t => {
      if(this.RechargerMessages) {
        this.RechargerMessages = false;
        this.getMessages();
      }
    });
  }
  ChargerDiscussion(User) {
    this.username = User.username;
    this.messages = [];
    this.UserDiscussion = User.id;
    this.TestExistanceDiscussion(this.UserId, this.UserDiscussion);
  }
  getUsers() {
    this.MessagerieService.getUsers().subscribe((Response) => {
      this.users = Response['hydra:member'];
    });
  }
  submit(): void {
    //this.messages.push(this.message);
    this.SubmitMessage();
  }
  getMessages() {
    this.MessagerieService.getMessages(this.idDiscussion).subscribe(
      (Response) => {
      this.messages = Response['messages'];

    });
  }
  TestExistanceDiscussion(firstUser, secondUser): any   {
    this.MessagerieService.TestExistanceDiscussion(firstUser,secondUser).subscribe((Response) => {
      if (Response['hydra:totalItems'] == 0) {
        if (this.isInversed === false) {
          this.isInversed = true;
          this.TestExistanceDiscussion(secondUser, firstUser);
        }else {
          this.CreateDiscussion();
        }
      }else {
        this.idDiscussion = Response['hydra:member'][0]['id'];
        this.messages = Response['hydra:member'][0]['messages'];
      }
    });
  }
  CreateDiscussion() {
    this.MessagerieService.CreateDiscussion(this.UserId, this.UserDiscussion).subscribe(
      (Response) => {
      this.idDiscussion = Response['id'];
    });
  }

  SubmitMessage() {
    this.MessagerieService.SubmitMessage(this.message,this.UserId,this.idDiscussion).subscribe(
      (Response) => {
      //after sending message , appel mercure in order to refresh messages
      this.AppelMercure();
      this.message = null;
    });
  }

  //mercure est un serveur port 3000
  AppelMercure() {
    this.MessagerieService.AppelMercure().subscribe(
      (Res) => {

      });
  }
}
