import { Component, OnInit } from '@angular/core';
import { ArtsService } from "../../arts.service";

@Component({
  selector: 'app-autorcart',
  templateUrl: './autorcart.component.html',
  providers:[ArtsService]
})
export class AutorcartComponent implements OnInit {

  constructor(private ArtsService: ArtsService) {

      //   this.route.params.subscribe( params => {
      //
      //   // var IdCat = +params['cat'];
      //   // console.log(IdCat + ' - id cat');
      //
      //   // var obs20 = this.ArtsService.GetArtCategory();
      //   // obs20.subscribe( g => {
      //   //   this.ArtPagenew = g;
      //   //     console.log(g);
      //   // }
      //
      // }
    console.log (this);
  }




  ngOnInit(){
  }

}
