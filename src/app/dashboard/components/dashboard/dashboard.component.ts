import { FootballService } from '@shared/football.service';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  teams: any;

  constructor(private footballService: FootballService) { }

  ngOnInit() {
    this.footballService.getTeams().pipe( take(1) ).subscribe((teams) => {
      this.teams = teams;

      localStorage.setItem('teams', this.teams);
    });

  }

}
