export function dateFormat(value) {
  const date = new Date(value);
  const year = date.toLocaleString('default', {year: 'numeric'});
  const month = date.toLocaleString('default', {month: 'long'});
  const day = date.toLocaleString('default', {day: '2-digit'});
  return month + ' ' + day + ', ' + year;
}
