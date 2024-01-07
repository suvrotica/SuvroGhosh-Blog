<script lang="ts">
	// Svelte script tag with TypeScript language enabled.

	// Importing `data` which is passed as a prop to this component.
	// This data is expected to be the result of the `load` function from '+layout.js'.
	export let data;

	// Accessing the `rows` array from `resData` within `data`.
	// The `posts` constant is now an array of post objects,
	// each representing a blog post with properties like title, image_url, etc.
	const posts = data.resData.rows;
</script>

<slot />
<!-- The <slot /> tag is used to define a place where content can be inserted.
     In the context of this component, it allows any child content to be rendered here. -->
{#each posts as post}
	<!-- Svelte's each block is used for iterating over arrays.
         Here, it iterates over each `post` in the `posts` array. -->
	<div>
		<!-- Displaying the title of each post. `post.title` accesses the title property of the current post object. -->
		<h2>{post.title}</h2>
		<!-- More details of the post can be added here. -->
	</div>
{/each}
