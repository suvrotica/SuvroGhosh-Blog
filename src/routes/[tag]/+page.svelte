<script>
	export let data;
	console.log(data);
	console.log(data.tagData);
	console.log(data.tagData.rows);
	// Assuming data.tagData contains the structure { rows: [{ tag, posts }] }
	const tagsWithPosts = data.tagData.rows;
	console.log(tagsWithPosts);
</script>

{#each tagsWithPosts as tagGroup}
	<section>
		<h2>Posts Tagged: "{tagGroup.tag}"</h2>
		<div>
			{#each tagGroup.posts as post}
				<article>
					<h3>{post.title}</h3>
					<!-- You can add more details here, like post content, images, etc. -->
					<!-- To display a summary of the post, you might need to truncate the content -->
					<!-- Example: <p>{post.content.substring(0, 100)}...</p> -->
				</article>
			{/each}
		</div>
	</section>
{/each}
