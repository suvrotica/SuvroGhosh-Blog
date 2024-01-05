export const emojis: { [key: number]: string } = {
	// Informational responses
	100: 'ℹ️', // Continue
	101: '🔄', // Switching Protocols

	// Successful responses
	200: '✅', // OK
	201: '🆕', // Created
	202: '👍', // Accepted
	204: '🚫', // No Content

	// Redirection messages
	301: '🔀', // Moved Permanently
	302: '➡️', // Found
	307: '🔁', // Temporary Redirect

	// Client error responses
	400: '🚫', // Bad Request
	401: '🔒', // Unauthorized
	403: '⛔', // Forbidden
	404: '❓', // Not Found
	408: '⏳', // Request Timeout
	418: '🫖', // I'm a teapot
	420: '🫠', // Enhance Your Calm (Twitter)
	429: '🚦', // Too Many Requests

	// Server error responses
	500: '💥', // Internal Server Error
	501: '❗', // Not Implemented
	502: '🚧', // Bad Gateway
	503: '🔧', // Service Unavailable
	504: '⏱️' // Gateway Timeout
};
