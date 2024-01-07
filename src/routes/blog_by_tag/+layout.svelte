<script>
	// Assuming the prop 'data' is passed to this Svelte component
	// and it contains the restructured data you mentioned
	export let data;
	const tagsWithPosts = data.tagsWithPosts; // The array of tags with their respective posts
	// console.log(tagsWithPosts); // Check the console to see the structure of the data
	import { sectionStyle, pStyle, h4Style, h6Style } from '$lib/global';
</script>

<slot />
<section class={sectionStyle}>
	<!-- Iterate over each tag group -->
	{#each tagsWithPosts as tagGroup}
		<section>
			<h4 class={h4Style}>{tagGroup.tag}</h4>
			<!-- Iterate over each post within this tag group -->
			{#each tagGroup.posts as post}
				<article>
					<h6 class={h6Style}>{post.title}</h6>
					<!-- Display other details of the post -->
					<!-- You can access other properties of post like post.content, post.author, etc. -->
				</article>
			{/each}
		</section>
	{/each}
</section>
