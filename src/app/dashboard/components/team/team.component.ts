import { ActivatedRoute } from '@angular/router';
import { FootballService } from '@shared/football.service';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  players = [];
  filteredPlayers = [];
  playersLength = 0;
  sort = '';

  constructor(
    private footballService: FootballService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const params = this.route.snapshot.params;
    const { id: teamID } = params;


    this.footballService.getPlayers(teamID).pipe( take(1) ).subscribe((team) => {
      this.players = this.filteredPlayers = team[0].players;
      this.playersLength = this.filteredPlayers.length;
    });

  }

  onFilter(players) {
    this.filteredPlayers = players || [];
    this.playersLength = this.filteredPlayers.length;
  }

  setSort(value) {
    (this.sort === value) ? this.sort = '_' + value : this.sort = value;
    console.log('sort set', this.sort);
  }

}
