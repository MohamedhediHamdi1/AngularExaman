import { Equipe } from "./equipe"
import { Score } from "./score"

export class Match{
    id! : String
    date!: string
    heure! : string
    lieu! : string
    equipeA! : Equipe
    equipeB! : Equipe
    score! : Score
}