import React, { useState } from 'react'

// ----- Creating context -----
export const AlertsContext = React.createContext()

// ----- Creating Context Provider -----

export const AlertsContextProvider = (props) => {
	const [isActive, setIsActive] = useState(false)
	const [alert, setAlert] = useState({
		lowerPrice: -1,
		higherPrice: -1
	})

	const addAlert = (alert) => {
		setAlert(alert)
		setIsActive(true)
	}

	const deleteAlert = () => {
		setAlert({
			lowerPrice: -1,
			higherPrice: -1
		})
	}

	const toggleAlertState = () => {
		setIsActive(!isActive)
	}

	const initialState = {
		isActive,
		alert,
		addAlert: addAlert,
		deleteAlert: deleteAlert,
		toggleAlertState: toggleAlertState
	}

	return (
		<AlertsContext.Provider value={initialState}>
			{props.children}
		</AlertsContext.Provider>
	)
}
