import { Coach } from "./Coach";

export class CricketCoach implements Coach{
    getDailyWorkOut(): string {
     return "Practise your spin bowling technique";
    }
    
}