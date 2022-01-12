import { Component, OnInit } from '@angular/core';
import {EndroitsService} from'../../services/endroits.service';
import {Endroit} from '../../model/endroit.model';
import {Router} from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-endroits',
  templateUrl: './endroits.page.html',
  styleUrls: ['./endroits.page.scss'],
})
export class EndroitsPage implements OnInit {
  public locations :Array<Endroit>;

  constructor(private locationService: EndroitsService , private router:Router , private alertCtrlr : AlertController) { }

  ngOnInit() {
   
  }


  onNewLocation()
  {
    this.router.navigateByUrl('/menu/endroit-nouveau');
  }

  ionViewWillEnter()
  {
    this.onGetLocations();
  }
  private onGetLocations(){
    this.locationService.getLocations().then(data =>
      {
        this.locations = data ;
      });
  }
  async onRemove(p:Endroit)
  {
    const alert = await this.alertCtrlr.create({
      header : 'suppression' ,
      message : 'Etes vous sure de vouloir supprimer ?',
      subHeader: 'Confirmation',
      buttons :[
        {
          text : 'oui' ,
          handler: () =>
          {this.removeLocation(p);}
        }
      ,
      {
        text : 'non' ,
        handler: () =>
        {}
      }
    ]

    });
    await alert.present();
  }

  private removeLocation(p: Endroit)
  {
    const index = this.locations.indexOf(p);
    this.locations.splice(index, 1);
    this.locationService.updateLocations(this.locations);
  }

  onDetailLocation(p : Endroit)
  {
    this.locationService.currentLocation = p;
    this.router.navigateByUrl('/menu/endroit-details');
  }

  }
