import React, { useState, useContext } from 'react'
//Import context
import { AlertsContext } from '../context/AlertsContextProvider.js'

const AlertCreator = () => {
	const { alert, addAlert } = useContext(AlertsContext)
	const [alertPrices, setAlertPrices] = useState({
		lowerPrice: '',
		higherPrice: ''
	})
	const [error, setError] = useState({ state: false, msg: '' })

	const clearInput = (e) => {
		//Clears input when the user focuses on the input
		setAlertPrices({ ...alertPrices, [e.target.name]: '' })
		setError({ state: false, msg: '' })
	}

	const handleChange = (e) => {
		setAlertPrices({ ...alertPrices, [e.target.name]: e.target.value })
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (alertPrices.lowerPrice === '' || alertPrices.higherPrice === '') {
			setError({ state: true, msg: 'Select alert prices...' })
		} else {
			addAlert(alertPrices)
		}
	}

	return (
		alert.lowerPrice === -1 && (
			//If the user has set an alert, the value of alert.lowerPrice will not be -1
			<div>
				<h3 className="capitalize">create alert</h3>
				<p className="error">{error.state === true && error.msg}</p>

				<form>
					<input
						value={alertPrices.lowerPrice}
						name="lowerPrice"
						type="number"
						onFocus={clearInput}
						onChange={handleChange}
						placeholder="Lower price"
					/>
					<br />
					<input
						value={alertPrices.higherPrice}
						name="higherPrice"
						type="number"
						onFocus={clearInput}
						onChange={handleChange}
						placeholder="Higher price"
					/>
					<br />
					<button onClick={handleSubmit}>Add</button>
				</form>
			</div>
		)
	)
}

export default AlertCreator
