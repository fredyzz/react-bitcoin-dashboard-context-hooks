import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import * as serviceWorker from './serviceWorker'
//Import context
import { NotificactionContextProvider } from './context/NotificationContextProvider.js'
import { PricesContextProvider } from './context/PricesContextProvider.js'

ReactDOM.render(
	<React.StrictMode>
		<NotificactionContextProvider>
			<PricesContextProvider>
				<App />
			</PricesContextProvider>
		</NotificactionContextProvider>
	</React.StrictMode>,
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
