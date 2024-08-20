<script>
	// @ts-nocheck
	export let data;
	// Add this function to safely capitalize the tag title
    function capitalizeTag(tag) {
        if (tag && typeof tag === 'string') {
            return tag.charAt(0).toUpperCase() + tag.slice(1);
        }
        return '';
    }

	import { a_style } from '$lib/global';
</script>

<h1 class="first-letter:text-blue-500">
    <span class="m-0 p-0">{capitalizeTag(data?.tagTitle)}</span>
</h1>
<hr />
{#each data?.posts ?? [] as post}
    <a href={`/slug-${encodeURIComponent(post.slug)}`} class={a_style}>
        {post.title}
    </a>
{/each}