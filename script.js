function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('from').value;
    const toCurrency = document.getElementById('to').value;

    fetch(`https://open.er-api.com/v6/latest/${fromCurrency}`)
      .then(response => response.json())
      .then(data => {
        const exchangeRate = data.rates[toCurrency];
        const convertedAmount = amount * exchangeRate;
        document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
      })
      .catch(error => console.error('Error:', error));
  }