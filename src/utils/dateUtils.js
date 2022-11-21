export function dateFormat(value) {
  const date = new Date(value);
  const year = date.toLocaleString('default', {year: 'numeric'});
  const month = date.toLocaleString('default', {month: 'long'});
  const day = date.toLocaleString('default', {day: '2-digit'});
  return month + ' ' + day + ', ' + year;
}

export function getHoursDiff(startDate, endDate) {
  const diff = Math.abs(endDate - startDate);
  const minutes = Math.floor(diff / 1000 / 60);
  const hours = Math.floor(minutes / 60);
  const rest = minutes - hours * 60;
  return hours + ':' + rest;
}

export function getMinutesDiff(startDate, endDate) {
  const diff = Math.abs(endDate - startDate);
  return Math.floor(diff / 1000 / 60);
}
