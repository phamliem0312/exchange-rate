export function getCurrencyList(type = 'all') {
    const currencyList = [
        { code: 'USD', name: 'United States', flag: 'https://flagcdn.com/us.svg' },
        { code: 'EUR', name: 'European Union', flag: 'https://flagcdn.com/eu.svg' },
        { code: 'GBP', name: 'United Kingdom', flag: 'https://flagcdn.com/gb.svg' },
        { code: 'JPY', name: 'Japan', flag: 'https://flagcdn.com/jp.svg' },
        { code: 'AUD', name: 'Australia', flag: 'https://flagcdn.com/au.svg' },
        { code: 'NZD', name: 'New Zealand', flag: 'https://flagcdn.com/nz.svg' },
        { code: 'SGD', name: 'Singapore', flag: 'https://flagcdn.com/sg.svg' },
        { code: 'THB', name: 'Thailand', flag: 'https://flagcdn.com/th.svg' },
        { code: 'CAD', name: 'Canada', flag: 'https://flagcdn.com/ca.svg' },
        { code: 'CHF', name: 'Switzerland', flag: 'https://flagcdn.com/ch.svg' },
        { code: 'HKD', name: 'Hong Kong', flag: 'https://flagcdn.com/hk.svg' },
        { code: 'CNY', name: 'China', flag: 'https://flagcdn.com/cn.svg' },
        { code: 'KRW', name: 'South Korea', flag: 'https://flagcdn.com/kr.svg' }
    ];
    
    if (type === 'all') {
        return currencyList;
    }

    if (currencyList.findIndex(currency => currency.code === type) !== -1) {
        return currencyList.filter(currency => currency.code === type);
    }

    return [
        { code: 'VND', name: 'Viet Nam', flag: 'https://flagcdn.com/vn.svg' },
    ];
}