import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";

let myCricketCoach=new CricketCoach();
let myGolfCoach=new GolfCoach();

//let declare an array of coaches
let theCoaches: Coach[]=[];

//add coaches to array
theCoaches.push(myCricketCoach);
theCoaches.push(myGolfCoach);

for(let tempCoach of theCoaches){
    console.log(tempCoach.getDailyWorkOut());
}
