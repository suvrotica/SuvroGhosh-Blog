<script>
	// @ts-nocheck
	export let data;

	import { a_style } from '$lib/global';
</script>

<h1 class="first-letter:text-blue-500">
	<span class="m-0 p-0"
		>{data.tagTitle.substring(0, 1).toUpperCase()}{data.tagTitle.substring(1)}</span
	>
</h1>
<hr />
{#each data?.posts as post}
	<a href={`/slug-${encodeURIComponent(post.slug)}`} class={a_style}>
		{post.title}
	</a>
{/each}
