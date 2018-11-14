export function dateToLocaleString(date) {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  return (new Date(date)).toLocaleString('en-US', options);
}
