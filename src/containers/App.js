import React, { useContext } from 'react'
//Import styles
import '../styles/App.css'
//Import componentes
import CryptoInfo from '../components/CryptoInfo'
import PriceAlerts from '../components/PriceAlerts'
import Notifications from '../components/Notifications'
import AlertCreator from '../components/AlertCreator'
//Import context providers
import { AlertsContextProvider } from '../context/AlertsContextProvider'
//Import context
import { NotificactionContext } from '../context/NotificationContextProvider.js'

const App = () => {
	const { notifications } = useContext(NotificactionContext)

	return (
		<div className="App">
			<div className="wrapper shadow">
				<div className="wrapper-item">
					<CryptoInfo />
				</div>
				<div className="wrapper-item">
					<AlertsContextProvider>
						<AlertCreator />
						<PriceAlerts />
					</AlertsContextProvider>
				</div>
			</div>

			<div className="wrapper-notification">
				{notifications.length > 0 && <Notifications />}
			</div>
		</div>
	)
}

export default App
