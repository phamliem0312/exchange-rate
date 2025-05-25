export function formatNumber(n) {
    const hasDecimal = n % 1 !== 0;

    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: hasDecimal ? 2 : 0,
      maximumFractionDigits: 2
    }).format(n);
}

export function parseFormattedNumber(str) {
  return parseFloat(str.replace(/,/g, ''));
}