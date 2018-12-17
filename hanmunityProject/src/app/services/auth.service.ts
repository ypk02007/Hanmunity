import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http:Http) { }

  registerUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/register', user, {headers: headers})
      .pipe(map(res => res.json()));
  }
  findUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/find', user, {headers: headers})
      .pipe(map(res => res.json()));
  }

  authenticateUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/authenticate', user, {headers: headers})
      .pipe(map(res => res.json()));
  }

  getProfile() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/users/profile', {headers: headers})
      .pipe(map(res => res.json()));
  }

  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  writeStudy(study) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/board/writeStudy', study, {headers: headers})
      .pipe(map(res => res.json()));
  }

  writeQuestion(question) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/board/writeQuestion', question, {headers: headers})
      .pipe(map(res => res.json()));
  }

  writePetition(petition) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/board/writePetition', petition, {headers: headers})
      .pipe(map(res => res.json()));
  }

  upPetition(clicked) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/board/upPetition', clicked, {headers: headers})
      .pipe(map(res => res.json()));
  }

  writeComment(comment) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/board/writeComment', comment, {headers: headers})
      .pipe(map(res => res.json()));
  }

  writeTogether(together) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/messenger/writeTogether', together, {headers: headers})
      .pipe(map(res => res.json()));
  }

  sendMessage(send) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/messenger/writeMessage', send, {headers: headers})
      .pipe(map(res => res.json()));
  }

  getStudy() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/board/studyList', {headers: headers})
      .pipe(map(res => res.json()));
  }

  getQuestion() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/board/questionList', {headers: headers})
      .pipe(map(res => res.json()));
  }

  getMessage(search) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/messenger/messageList', search, {headers: headers})
      .pipe(map(res => res.json()));
  }

  search(search) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/board/search', search, {headers: headers})
      .pipe(map(res => res.json()));
  }

  getPetition() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/board/petitionList', {headers: headers})
      .pipe(map(res => res.json()));
  }

  getPetitionClick(search) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/board/petitionClickList', search, {headers: headers})
      .pipe(map(res => res.json()));
  }

  checkPetitionClick(search) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/board/petitionClickCheck', search, {headers: headers})
      .pipe(map(res => res.json()));
  }

  getComment(search) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/board/commentList', search, {headers: headers})
      .pipe(map(res => res.json()));
  }

  getTogether() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/messenger/togetherList', {headers: headers})
      .pipe(map(res => res.json()));
  }

  deleteComment(search) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/board/deleteComment', search, {headers: headers})
      .pipe(map(res => res.json()));
  }

  deleteStudy(search) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/board/deleteStudy', search, {headers: headers})
      .pipe(map(res => res.json()));
  }

  deleteQuestion(search) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/board/deleteQuestion', search, {headers: headers})
      .pipe(map(res => res.json()));
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

   loggedIn() {
    return tokenNotExpired('id_token');
   }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}