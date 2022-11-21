import {dateFormat} from '../utils/dateUtils';

export class Trip {
  constructor(json) {
    this.date = json.date;
    this.averageSpeedInMph = json.averageSpeedInMph;
    this.tripDetails = Array.from(json.tripDetails).map(
      value => new Stops(value),
    );
  }

  formattedSpeed() {
    return `${this.averageSpeedInMph}MPH`;
  }

  formattedDate() {
    return dateFormat(this.date);
  }

  formattedDuration() {
    const departedTimeDate = Date.parse(
      this.date + ' ' + this.tripDetails[0].departedTime,
    );
    const arrivedTimeDate = Date.parse(
      this.date +
        ' ' +
        this.tripDetails[this.tripDetails.length - 1].arrivedTime,
    );

    return this.getHoursDiff(departedTimeDate, arrivedTimeDate) + 'H';
  }

  getHoursDiff(startDate, endDate) {
    const diff = Math.abs(endDate - startDate);
    const minutes = Math.floor(diff / 1000 / 60);
    const hours = Math.floor(minutes / 60);
    const rest = minutes - hours * 60;
    return hours + ':' + rest;
  }
}

class Stops {
  constructor(json) {
    this.id = json.id;
    this.name = json.name;
    this.arrivedTime = json.arrivedTime;
    this.departedTime = json.departedTime;
  }

  concatDepartedArrived() {
    const list = [];
    if (this.arrivedTime != null) {
      list.push('Arrived ' + this.arrivedTime);
    }
    if (this.departedTime != null) {
      list.push('Departed ' + this.departedTime);
    }
    return list.join(' | ');
  }
}
