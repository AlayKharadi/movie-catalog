import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  public searchBar: string = '';
  public faSearch = faSearch;
  @Output('getResults') getResults = new EventEmitter();

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  updateSearchBar($event: any) {
    this.searchBar = $event.target.value
  }

  searchMovie() {
    if (this.searchBar.trim() !== '') {
      this.apiService.getMovie(this.searchBar)
        .subscribe(data => {
          if(data.response === true) {
            this.getResults.emit(data.message)
          } else {
            console.log(data.message)
            window.alert("Movie does not Exist in database.")
          }
        });
    }
  }

}
