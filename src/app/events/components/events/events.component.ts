import { Component, OnInit } from '@angular/core';
import { FootballService } from '@shared/football.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  fixtures = [];
  league = '';

  constructor(
    private footballService: FootballService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    // get league and then fixtures
    this.getLeague().pipe(
      switchMap((league) => {
        this.league = league;
        return this.footballService.getFixtures(league);
      })
    ).pipe( take(1) ).subscribe((fixtures) => {
      Array.isArray(fixtures) ? this.fixtures = fixtures : console.log('no fixtures', fixtures);
    });

  }

  getLeague(): Observable<string> {
    return this.route.queryParamMap.pipe(
      map( (params) => params.get('league') )
    );
  }

}
