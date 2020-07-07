import React, { useContext } from 'react'
//Import context
import { NotificactionContext } from '../context/NotificationContextProvider.js'

const Notifications = () => {
	const { notifications, notificationDelete } = useContext(NotificactionContext)

	return (
		notifications.length > 0 && (
			<>
				{notifications.map((notification) => (
					<div className="notification-item shadow" key={notification.id}>
						<b>{notification.type}</b>
						<p>{notification.description}</p>
						<button onClick={() => notificationDelete(notification.id)}>
							Close
						</button>
					</div>
				))}
			</>
		)
	)
}

export default Notifications
