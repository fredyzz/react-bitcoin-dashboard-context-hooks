const BASE_URL = 'https://api.coingecko.com/api/v3/simple/price?ids='
const VS_CURRENCY = '&vs_currencies=usd'

const getCurrencyPrice = async (currency) => {
	try {
		const response = await fetch(BASE_URL + currency + VS_CURRENCY)
		const jsonResponse = await response.json()
		return jsonResponse
	} catch (error) {
		console.log(error)
	}
}

export default getCurrencyPrice
