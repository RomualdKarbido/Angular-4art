import { Component, OnInit } from '@angular/core';
import { ArtsService } from "../../arts.service";
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autorcart',
  templateUrl: './autorcart.component.html',
  providers:[ArtsService]
})



export class AutorcartComponent implements OnInit {


  public Catmass:any = {};
  public mediaImg:any = '';

  constructor(private ArtsService: ArtsService, private route: ActivatedRoute, private router: Router) {

        this.route.params.subscribe( params => {
        var IdCat:any = +params['cat'];
        // console.log(IdCat + ' - id cat');

        var obs20:any = this.ArtsService.GetArtGalleryInfo(IdCat);
        obs20.subscribe(g => {
            this.Catmass = g;
            // console.log(this.Catmass);
        });
        var obs21:any = this.ArtsService.GetArtGalleryCatImg(IdCat);
        obs21.subscribe(t => {
            this.mediaImg =t[0].source_url;
            console.log(this.mediaImg);
        });


      });

  }




  ngOnInit(){
  }

}
