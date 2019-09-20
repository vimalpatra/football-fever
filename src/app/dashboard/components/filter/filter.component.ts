import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Input() set sort(value: string) {
    this.sortValue = value;
    this.sortResults();
  }

  @Output() filter = new EventEmitter();

  @Input('players') players;


  sortValue = '';
  filteredPlayers = [];

  constructor() { }

  ngOnInit() {
  }



  inputSearch(query: string) {
    this.search(query);
    // raise change event
    this.filter.emit(this.filteredPlayers);
  }

  filterResults(filterBy) {
    console.log(filterBy);
    this.filterByMatchesPlayed(filterBy);

    // raise change event
    this.filter.emit(this.filteredPlayers);
  }

  sortResults() {
    this.sortBy(this.sortValue);

    // raise change event
    this.filter.emit(this.filteredPlayers);
  }





  private search(query: string) {
    this.filteredPlayers = !(query) ? this.players :
      this.players.filter((p) => {
          return p.player_name.toLowerCase().includes(query.toLowerCase()) || p.player_country.toLowerCase().includes(query.toLowerCase())
        });
  }

  private filterByMatchesPlayed(matchPlayedQuant) {
    // set filteredPlayers to players
    this.filteredPlayers = this.players;

    if (!matchPlayedQuant) return;

    if (matchPlayedQuant === 'lt2') {
      this.filteredPlayers = this.players.filter((p) => {
          return p.player_match_played <= 2;
      });
    } else if (matchPlayedQuant === 'gt2') {
      this.filteredPlayers = this.players.filter((p) => {
        return p.player_match_played > 2;
      });
    }

  }

  private sortBy(sort: string) {
    // set filteredPlayers to players
    this.filteredPlayers = this.players;

    if (!sort) return;

    switch (sort) {
      case 'name':
        this.sortingFunc(this.filteredPlayers, 'player_name');
        break;

      case '_name':
        this.sortingFunc(this.filteredPlayers, 'player_name').reverse();
        break;

      case 'goals':
        this.sortingFunc(this.filteredPlayers, 'player_goals');
        break;

      case '_goals':
        this.sortingFunc(this.filteredPlayers, 'player_goals').reverse();
        break;

      case 'age':
        this.sortingFunc(this.filteredPlayers, 'player_age');
        break;

      case '_age':
        this.sortingFunc(this.filteredPlayers, 'player_age').reverse();
        break;

    }

  }

  private sortingFunc(arr, query) {
    return arr.sort((a, b) => a[query].localeCompare(b[query]));
  }




}
