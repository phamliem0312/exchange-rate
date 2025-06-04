export function formatNumber(n, currency = 'USD') {
    const hasDecimal = n % 1 !== 0;

    if (currency === 'VND') {
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(n);
    }

    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: hasDecimal ? 2 : 0,
      maximumFractionDigits: 2
    }).format(n);
}

export function parseFormattedNumber(str) {
  return parseFloat(str.replace(/,/g, ''));
}