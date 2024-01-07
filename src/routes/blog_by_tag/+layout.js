// +layout.js
/**
 * The `load` function is an asynchronous function that is used to fetch data
 * before the component is rendered. This function is specific to SvelteKit's
 * way of preloading data on the server-side.
 *
 * This includes `fetch` for making HTTP requests and `params` for any URL parameters.
 * returns An object with the fetched data or an error object if the fetch fails.
 */
export async function load({ fetch, params }) {
	// Fetch data from your API endpoint
	// Here, `fetch` is used to make an HTTP request to the 'api/blog' endpoint.
	// This endpoint is assumed to return blog data in JSON format.
	const res = await fetch('api/blog_by_tag');

	// Convert the response to JSON format
	// It is assumed that the response is in JSON format, hence `res.json()` is used.
	const resData = await res.json();
	// console.log('Original resData:', resData);

	// Restructuring resData to be the array of tags with posts
	const tagsWithPosts = resData.rows;
	// console.log('Restructured Data:', tagsWithPosts);

	// Check if the fetch was successful
	// The `ok` property of the response is used to determine if the HTTP request was successful.
	// If not successful, return an error object with the HTTP status and a custom error message.
	if (!res.ok) {
		return {
			status: res.status,
			error: new Error('Could not fetch posts')
		};
	}

	// Return the data to the layout component
	// The fetched data (`resData`) is returned so it can be used in the layout component.
	// This data will be available as a prop in the layout component.
	return {
		tagsWithPosts
	};
}
