import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class FootballService {

  constructor(public http: HttpClient) { }

  // private fullUrl = `https://apiv2.apifootball.com/?action=get_teams&league_id=148&APIkey=`;
  private baseURL = 'https://apiv2.apifootball.com/?';
  private apiKey =  environment.apiKey;

  getTeams() {
    const action = 'get_teams';
    const league = 'league_id=148';
    const url = `${this.baseURL}action=${action}&${league}&APIkey=${this.apiKey}`;

    return this.http.get(url).pipe( take(1) );
  }

  getPlayers(teamID) {
    const action = 'get_teams';
    const team = `team_id=${teamID}`;
    const url = `${this.baseURL}action=${action}&${team}&APIkey=${this.apiKey}`;

    return this.http.get(url).pipe( take(1) );
  }

  getPlayerProfile(playerName) {
    const action = 'get_players';
    const player = `player_name=${playerName}`;
    const url = `${this.baseURL}action=${action}&${player}&APIkey=${this.apiKey}`;

    return this.http.get(url).pipe( take(1) );
  }

  getFixtures(leagueId) {
    const action = 'get_events';
    const timeline = 'from=2019-01-01&to=2019-04-01';
    const league = `league_id=${leagueId}`;
    const url = `${this.baseURL}action=${action}&${timeline}&${league}&APIkey=${this.apiKey}`;
    console.log(url);
    return this.http.get(url);
  }

}
