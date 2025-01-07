import { Component } from '@angular/core';
import { ConsummerService } from '../services/consummer.service';
import { Match } from '../model/match';

@Component({
  selector: 'app-liste-matchs',
  templateUrl: './liste-matchs.component.html',
  styleUrls: ['./liste-matchs.component.scss']
})
export class ListeMatchsComponent {
constructor(private cons:ConsummerService){}

matches:Match[]=[];
showUpdate=false

ngOnInit(){
this.cons.getmatches().subscribe(data=>this.matches=data);
}
}
