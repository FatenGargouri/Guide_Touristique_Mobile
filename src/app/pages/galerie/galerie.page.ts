import { Component, OnInit } from '@angular/core';
import {GalerieService} from '../../services/galerie.service';


@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.page.html',
  styleUrls: ['./galerie.page.scss'],
})
export class GaleriePage implements OnInit {
  public motCle : string;
  public PageActuelle = 1;
  public ImagesParPage =  10;
  public dataImages = [] as any;
  public totalPages: number;

  constructor(private galServ: GalerieService) { }

  ngOnInit() {
  }
  chargerImages()
  {
    this.resetImages();
    this.chargerImagesSuivantes();
  }

  chargerImagesSuivantes()
  {
    const hits = 'hits';
    const totalHits = 'totalHits';
    this.resetImages();
    this.galServ.getImages(this.motCle , this.PageActuelle , this.ImagesParPage)
    .subscribe(data => {
      data[hits].forEach(image => {
        this.dataImages.push(image);
      });
      this.totalPages = data[totalHits] / this.ImagesParPage;
    }, error =>
    {
      console.log(error);
    });
  }

  resetImages()
  {
    this.dataImages = [];
  }

  pageSuivante(event)
  {
    console.log(this.totalPages);
    if(this.PageActuelle < this.totalPages)
    {
      console.log(this.PageActuelle);
      this.PageActuelle++;
      this.chargerImagesSuivantes();
      event.target.complete();
    }else{
      event.target.disabled = true;
    }
    }
  }


