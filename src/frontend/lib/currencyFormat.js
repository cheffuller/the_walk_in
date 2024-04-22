const defaultOptions = {
  significantDigits: 2,
  thousandsSeparator: ',',
  decimalSeparator: '.',
  symbol: '$',
};

export const currencyFormat = (value, options) => {
  if (typeof value !== 'number') {
    const newValue = Number(value)
    value = newValue
  }
  options = { ...defaultOptions, ...options };
  value = value.toFixed(options.significantDigits);

  const [currency, decimal] = value.split('.');

  return `${options.symbol}${currency.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    options.thousandsSeparator
  )}${options.decimalSeparator}${decimal}`;
};