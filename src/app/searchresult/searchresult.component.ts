import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import { SearchserviceService } from '../searchservice.service';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.scss']
})
export class SearchresultComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private searchservice: SearchserviceService,
    ) {}


  ngOnInit() {}

}
