import { Component, OnInit } from '@angular/core';
import { PriereService } from 'src/app/services/priere.service';

@Component({
  selector: 'app-priere',
  templateUrl: './priere.page.html',
  styleUrls: ['./priere.page.scss'],
})
export class PrierePage implements OnInit {
public city:string;
public date :any ;
  constructor(private priereServ: PriereService) { }

  ngOnInit() {
  }

  priereInfo()
  {
    const datetime='dateTime';
  this.date = this.priereServ.getPriereInfo(this.city)
  .subscribe(data => {
  this.date = data;
  console.log(data);
  }, error => {
  console.log(error);
  });

}
}
