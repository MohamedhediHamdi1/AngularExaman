import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipe } from '../model/equipe';
import { Match } from '../model/match';

@Injectable({
  providedIn: 'root'
})
export class ConsummerService {

  private apiUrl = 'http://localhost:3000/equipes'; // URL for the JSON server
  private apiUrl2 = 'http://localhost:3000/matches'; // URL for the JSON server

  constructor(private http: HttpClient) {}

  

  getEquipes(): Observable<Equipe[]> {
    return this.http.get<Equipe[]>(this.apiUrl);
  }

  add<T>(endpoint: string, body: any): Observable<T> {
    return this.http.post<T>(`${this.apiUrl2}${endpoint}`, body);
  }

  getEquipeByName(nom: String): Observable<Equipe> {
    return this.http.get<Equipe>(`${this.apiUrl}/${1}`); 
  }

  getmatches(): Observable<Match[]> {
    return this.http.get<Match[]>(this.apiUrl2);
  }

  getMatchById(id: number): Observable<Equipe> {
    return this.http.get<Equipe>(`${this.apiUrl}/${id}`); // Fetch menu by ID
  }

  updateMatch(menu: Match): Observable<Match> {
    return this.http.put<Match>(`${this.apiUrl2}/${menu.id}`, menu); // Use PUT to update the menu
  }
}
