import { Component } from '@angular/core';
import { Equipe } from '../model/equipe';
import { ConsummerService } from '../services/consummer.service';
import { Match } from '../model/match';
import { Score } from '../model/score';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent {

date!:Date
time=""
lieu=""
equipeA!:String
equipeB!:String
equipeAa!:Equipe
equipeBb!:Equipe
dateeroor=false
equipeerror=false
constructor(private cons:ConsummerService){}

equipes:String[]=[];
ngOnInit(){
this.cons.getEquipes().subscribe(data=>{
  data.forEach(equipe =>{
    this.equipes.push(equipe.nom)
  })
});
}


add() {
  this.equipeerror=false
  this.dateeroor=false
  console.log(this.equipeA)
  const newdate=new Date();
  if(this.checkDate()){
    this.dateeroor=true
    return;
  }
  if(this.equipeA==this.equipeB){
    this.equipeerror=true
    return;
  }


  this.cons.getEquipeByName(this.equipeA).subscribe(data=>{
    this.equipeAa=data
    console.log(this.equipeAa)
  });
  this.cons.getEquipeByName(this.equipeB).subscribe(data=>{
    this.equipeBb=data
    console.log(this.equipeBb)

    const newMatch = new Match();
  newMatch.id="1";
  newMatch.date = this.date.toString();
  newMatch.heure=this.time;
  newMatch.lieu=this.lieu;
  newMatch.equipeA=this.equipeAa;
  newMatch.equipeB=this.equipeBb;
  const newScore = new Score();
  newScore.equipeA=0
  newScore.equipeB=0
  newMatch.score=newScore

  this.cons.add("",newMatch).subscribe()

  }); 
  
  
}

checkDate():boolean {
  if (this.date) {
    const selectedDate = new Date(this.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set time to midnight for accurate comparison
    return  selectedDate < today;
  } else {
     return false;
  }
}
}
