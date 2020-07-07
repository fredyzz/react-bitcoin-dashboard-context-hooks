import React, { useState } from 'react'

// ----- Creating context -----
export const PricesContext = React.createContext()

// ----- Creating Context Provider -----

export const PricesContextProvider = (props) => {
	const [bitcoinPrice, setBitcoinPrice] = useState(-1)

	const bitcoinPriceSet = (bPrice) => setBitcoinPrice(bPrice)

	const initialState = {
		bitcoinPrice,
		bitcoinPriceSet
	}

	return (
		<PricesContext.Provider value={initialState}>
			{props.children}
		</PricesContext.Provider>
	)
}
