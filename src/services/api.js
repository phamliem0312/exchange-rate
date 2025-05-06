export async function fetchExchangeRate(amount, sourceCurrencyCode, targetCurrencyCode) {
    return {
        data: {
            rate: 1.2,
            amount: 1.2 * amount,
        },
        status: 200,
        success: true,
    }
  
    const apiUrl = `https://api.example.com/exchange-rate?source=${sourceCurrencyCode}&target=${targetCurrencyCode}&amount=${amount}`;
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`);
    }
  
    return await response.json();
}