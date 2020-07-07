import React, { useContext } from 'react'
//Import API functions
import getCurrencyPrice from '../API/getCurrencyPrice'
//Import context
import { PricesContext } from '../context/PricesContextProvider'

const CryptoInfo = () => {
	const { bitcoinPrice, bitcoinPriceSet } = useContext(PricesContext)

	//This functions gets the bitcoin price fetching it with the API helper getCurrencyPrice
	const getBitcoinPrice = async () => {
		console.log('Getting bitcoin price...')
		const price = await getCurrencyPrice('bitcoin')
		bitcoinPriceSet(price.bitcoin.usd)
		console.log(price.bitcoin.usd)
	}

	// The bitcoinPrice state is initialized as -1 in the context.
	// If bitcoinPrice value is -1, you should call getBitcoin price to update it
	if (bitcoinPrice === -1) {
		getBitcoinPrice()
	}

	// bitcoinPrice is updated every 5 seconds
	setInterval(() => {
		getBitcoinPrice()
	}, 5000)

	return (
		<div>
			<h1 className="uppercase">Bitcoin information</h1>
			<h2 className="capitalize">price</h2>
			<span className="currency-price">U$D {bitcoinPrice}</span>
		</div>
	)
}

export default CryptoInfo
