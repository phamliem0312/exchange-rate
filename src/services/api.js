async function fetchData(endpoint, $data, $method = 'GET') {
    let url = '/exchange-rate-web/site/api/v1/' + endpoint;
    const options = {
        method: $method,
        headers: {
            'Content-Type': 'application/json',
        },
    };

    if ($method === 'GET' && $data) {
        const queryString = new URLSearchParams($data).toString();
        url += '?' + queryString;
    }

    if ($method === 'POST' || $method === 'PUT') {
        options.body = JSON.stringify($data);
    }

    const response = await fetch(url, options);
    
    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`);
    }

    return await response.json();

}

export async function convertAmount(fromCurrency, amount, bankCode) {
    const endpoint = 'ExchangeRate/convertExchangeRate';
    const data = {
        fromCurrency: fromCurrency,
        bankCode: bankCode,
        amount: amount,
    }
    return await fetchData(endpoint, data);
}

export async function getBestExchangeRate(fromCurrency, toCurrency) {
    const endpoint = 'ExchangeRate/bestExchangeRate';
    const data = {
        fromCurrency: fromCurrency,
        toCurrency: toCurrency,
    }
    return await fetchData(endpoint, data);
}