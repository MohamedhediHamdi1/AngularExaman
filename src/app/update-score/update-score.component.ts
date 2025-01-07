import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsummerService } from '../services/consummer.service';

@Component({
  selector: 'app-update-score',
  templateUrl: './update-score.component.html',
  styleUrls: ['./update-score.component.scss']
})
export class UpdateScoreComponent {
  constructor(private router:ActivatedRoute,private cons:ConsummerService){}
@Input() id!:String
score1=0
score2=0
update(): void {
  const id=this.router.snapshot.paramMap.get('id');
 this.cons.getMatchById(parseInt(id!)).subscribe(data=>{
  console.log(data)
  data.score.equipeA=this.score1
  data.score.equipeB=this.score2
  this.cons.updateMatch(data).subscribe(data=>console.log(data))
 })
}
}
