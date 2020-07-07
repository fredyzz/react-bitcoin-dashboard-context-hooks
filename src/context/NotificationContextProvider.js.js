import React, { useState } from 'react'

// ----- Creating context -----
export const NotificactionContext = React.createContext()

// ----- Creating Context Provider -----

export const NotificactionContextProvider = (props) => {
	const [notifications, setNotification] = useState([])
	const [notificationId, setNotificationId] = useState(0)

	const notificationAdd = (notification) => {
		let updatedNotifications = [...notifications]
		if (updatedNotifications.length > 2) {
			updatedNotifications.splice(0, 1)
		}
		setNotification([
			...updatedNotifications,
			{ ...notification, id: notificationId }
		])
		setNotificationId(notificationId + 1)
	}

	const notificationDelete = (id) => {
		let filteredNotification = notifications.filter(
			(notification) => notification.id !== id
		)
		setNotification(filteredNotification)
	}

	const initialState = {
		notifications,
		notificationAdd,
		notificationDelete
	}

	return (
		<NotificactionContext.Provider value={initialState}>
			{props.children}
		</NotificactionContext.Provider>
	)
}
