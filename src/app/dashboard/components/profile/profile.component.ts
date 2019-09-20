import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FootballService } from '@shared/football.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile: any = {};

  constructor(
    private footballService: FootballService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const params = this.route.snapshot.params;
    const { name: playerName } = params;


    this.footballService.getPlayerProfile(playerName).pipe( take(1) ).subscribe((players) => {
      this.profile = players[0];
    });


  }

}
