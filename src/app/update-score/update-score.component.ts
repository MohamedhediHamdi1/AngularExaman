import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-score',
  templateUrl: './update-score.component.html',
  styleUrls: ['./update-score.component.scss']
})
export class UpdateScoreComponent {
  constructor(private router:ActivatedRoute){}
@Input() id!:String
score1=0
score2=0
update(): void {
  const id=this.router.snapshot.paramMap.get('id');
 
}
}
