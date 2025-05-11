export function formatNumber(number) {
    if (isNaN(number)) {
        return '';
    }

    return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(number);
}

export function parseFormattedNumber(str) {
  return parseFloat(str.replace(/,/g, ''));
}