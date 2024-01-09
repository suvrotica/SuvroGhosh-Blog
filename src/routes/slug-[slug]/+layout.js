export async function load({ params, fetch }) {
	// Extracting the slug from the URL parameters
	const { slug } = params;
	// console.log('slug:', slug);
	// Constructing the API endpoint URL
	// Use a fully qualified URL import.meta.env.BASE_URL
	const baseUrl = import.meta.env.BASE_URL || ''; // Ensure this is set in your project's environment configuration
	// console.log('baseUrl:', baseUrl);
	// console.log('encodeURIComponent(slug):', encodeURIComponent(slug));
	const url = `${baseUrl}api/post/${encodeURIComponent(slug)}`;
	// console.log('url:', url);

	// Fetching data from API
	const response = await fetch(url);

	// Check if the fetch was successful
	if (!response.ok) {
		// Handle the error scenario
		return {
			status: response.status,
			error: new Error('Could not fetch posts for the slug')
		};
	}

	// Parsing the response body as JSON
	const slugData = await response.json();
	// console.log('slugData:', slugData);
	// console.log('+layout.js slugData.post:', slugData.post);

	// Returning the data to the page component
	return {
		slugData
	};
}
