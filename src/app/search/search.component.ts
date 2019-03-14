import {Component, OnInit, Input} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {SearchserviceService} from '../searchservice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchform = new FormGroup({
    search: new FormControl('')
  });

  public searchsend: any = null;

  constructor(
    private searchservice: SearchserviceService,
    private router: Router) {
  }

  gosearch() {
    this.searchsend = this.searchform.controls.search.value;
    if (this.searchsend.length == 0) return;
    this.searchservice.searchSend(this.searchsend);
    this.router.navigate(['/searchresult']);
  }

  ngOnInit() {
  }

}
