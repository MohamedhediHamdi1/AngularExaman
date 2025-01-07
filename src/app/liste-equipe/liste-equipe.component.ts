import { Component } from '@angular/core';
import { ConsummerService } from '../services/consummer.service';
import { Equipe } from '../model/equipe';

@Component({
  selector: 'app-liste-equipe',
  templateUrl: './liste-equipe.component.html',
  styleUrls: ['./liste-equipe.component.scss']
})
export class ListeEquipeComponent {
constructor(private cons:ConsummerService){}

equipes:Equipe[]=[];
ngOnInit(){
this.cons.getEquipes().subscribe(data=>this.equipes=data);
}
}
