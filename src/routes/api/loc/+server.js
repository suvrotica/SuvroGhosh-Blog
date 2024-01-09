import { json } from '@sveltejs/kit';

// @ts-ignore
export async function GET({ request }) {
	// Retrieving the client's IP address and city from the request headers
	const ip = request.headers.get('x-forwarded-for') || 'unknown';
	const city = request.headers.get('x-vercel-ip-city') || 'unknown';

	// Returning the IP address and city
	return json({ ip, city });
}
