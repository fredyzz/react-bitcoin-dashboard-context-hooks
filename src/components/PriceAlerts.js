import React, { useContext, useEffect } from 'react'
//Import context
import { AlertsContext } from '../context/AlertsContextProvider.js'
import { NotificactionContext } from '../context/NotificationContextProvider.js.js'
import { PricesContext } from '../context/PricesContextProvider'

const PriceAlerts = () => {
	const { isActive, alert, deleteAlert, toggleAlertState } = useContext(
		AlertsContext
	)
	const { notificationAdd } = useContext(NotificactionContext)
	const { bitcoinPrice } = useContext(PricesContext)

	// Every time bitcoinPrice changes, useEffect will check if an alert is active
	// 	and if the alert values were reached
	useEffect(() => {
		if (bitcoinPrice > 0 && isActive === true) {
			if (bitcoinPrice < alert.lowerPrice) {
				notificationAdd({
					type: 'Low Price Alert!',
					description: `alert price: ${alert.lowerPrice} - actual price: ${bitcoinPrice}`
				})
			}
			if (bitcoinPrice > alert.higherPrice) {
				notificationAdd({
					type: 'High Price Alert!',
					description: `alert price: ${alert.higherPrice} - actual price: ${bitcoinPrice}`
				})
			}
			toggleAlertState()
		}
	}, [bitcoinPrice])

	return (
		<div>
			{alert.lowerPrice !== -1 && (
				<>
					<h2>Price alerts</h2>
					<h4>Bitcoin alert - {isActive ? 'Active' : 'No active'}</h4>
					<p>{`Lower price: U$D ${alert.lowerPrice} - Higher Price: U$D ${alert.higherPrice} `}</p>

					<button onClick={toggleAlertState}>
						{isActive ? 'Disable' : 'Activate'}
					</button>
					<button onClick={deleteAlert}>Delete</button>
				</>
			)}
		</div>
	)
}

export default PriceAlerts
