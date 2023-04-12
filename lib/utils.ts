export function getFormattedDate(source): string {
  const date = new Date(source);
  const formatter = new Intl.DateTimeFormat('ru', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const splicedSymbol = formatter.format(date).slice(0, -2)
  
  return splicedSymbol;
}
