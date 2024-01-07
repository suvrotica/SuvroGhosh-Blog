<script>
	// @ts-nocheck
	export let data;

	import { h1Style, a_style } from '$lib/global';
</script>

<h1 class={h1Style}>Posts Tagged: "{data?.tagTitle}"</h1>
{#each data?.posts as post}
	<a href={`/slug-${encodeURIComponent(post.slug)}`} class={a_style}>
		{post.title}
	</a>
{/each}
