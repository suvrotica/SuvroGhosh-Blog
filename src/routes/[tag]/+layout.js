export async function load({ params, fetch }) {
	// Extracting the tag from the URL parameters
	const { tag } = params;
	// console.log('tag:', tag);
	// Constructing the API endpoint URL
	// Use a fully qualified URL import.meta.env.BASE_URL
	const baseUrl = import.meta.env.BASE_URL || ''; // Ensure this is set in your project's environment configuration
	// console.log('baseUrl:', baseUrl);
	// console.log('encodeURIComponent(tag):', encodeURIComponent(tag));
	const url = `${baseUrl}api/blog_by_tag/${encodeURIComponent(tag)}`;
	// console.log('url:', url);

	// Fetching data from the API
	const response = await fetch(url);

	// Check if the fetch was successful
	if (!response.ok) {
		// Handle the error scenario
		return {
			status: response.status,
			error: new Error('Could not fetch posts for the tag')
		};
	}

	// Parsing the response body as JSON
	const tagData = await response.json();
	// console.log('tagData:', tagData);
	// console.log('tagData.rows:', tagData.rows);
	// console.log('tagData.rows[0]:', tagData.rows[0]);

	// Returning the data to the page component
	return {
		tagData
	};
}
