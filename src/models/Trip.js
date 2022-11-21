import { dateFormat } from "../utils/dateUtils";

export class Trip {
  constructor(json) {
    this.date = json.date;
    this.averageSpeedInMph = json.averageSpeedInMph;
    this.tripDetails = Array.from(json.tripDetails).map(value => new Stops(value));
  }

  formattedSpeed(){
    return `${this.averageSpeedInMph}MPH`;
  }

  formattedDate(){
    return dateFormat(this.date);
  }

  formattedDuration(){
    return '2:55h';
  }


}

class Stops {
  constructor(json) {
    this.id = json.id;
    this.name = json.name;
    this.arrivedTime = json.arrivedTime;
    this.departedTime = json.departedTime;
  }
}
