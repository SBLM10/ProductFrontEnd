import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

//services permettant la  communication back/front
//token est envoyé à chaque requette pour assurer la séurité
export class MessagerieService {

  constructor(private http: HttpClient) { }

  getUsers() {
    let headers =  new HttpHeaders();
    headers = headers.set('Authorization', localStorage.getItem('token'));
    return this.http.get('http://localhost:8000/api/users', {headers: headers});
  }
  getMessages(idDiscussion) {
    let headers =  new HttpHeaders();
    headers = headers.set('Authorization', localStorage.getItem('token'));
    return this.http.get('http://localhost:8000/api/discussions/' + idDiscussion, {headers: headers});
  }
  TestExistanceDiscussion(firstUser, secondUser): any   {
    let headers =  new HttpHeaders();
    headers = headers.set('Authorization', localStorage.getItem('token'));
    return this.http.get('http://localhost:8000/api/discussions', {
      params: new HttpParams().set('firstUser.id', firstUser).set('secondUser.id', secondUser),
      headers: headers
    });
  }
  CreateDiscussion(firstUser, secondUser) {
    let headers =  new HttpHeaders();
    headers = headers.set('Authorization', localStorage.getItem('token'));
    return this.http.post('http://localhost:8000/api/discussions', {
      firstUser: '/api/users/' + firstUser,
      secondUser: '/api/users/' + secondUser
    },{ headers: headers});
  }
  SubmitMessage(Message, User, Discussion) {
    let headers =  new HttpHeaders();
    headers = headers.set('Authorization', localStorage.getItem('token'));
    return this.http.post('http://localhost:8000/api/messages', {
      date: new Date(),
      text: Message,
      idDiscussion: '/api/discussions/' + Discussion,
      User: '/api/users/' + User
    },{ headers: headers})
  }
  //mercure est un serveur port 3000
  AppelMercure() {
    let headers =  new HttpHeaders();
    headers = headers.set('Authorization','Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXJjdXJlIjp7InB1Ymxpc2giOltdfX0.rQB2YPCYz8NX2V1k_a9G3E_AQ6i_1JidlOrOEhUtJaw');
    headers = headers.set('Content-Type','application/x-www-form-urlencoded');
    let body = new URLSearchParams();
    body.set('topic', 'Messenger');
    body.set('data', 'Messenger');
    return this.http.post('http://localhost:3000/hub',body.toString(), { headers: headers});
  }
}
