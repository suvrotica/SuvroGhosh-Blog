<script>
	import { h1Style, h4Style, pStyle, imgStyle, preStyle } from '$lib/global';

	export let data;
	const itemPost = data.slugData.post;
</script>

<section class={pStyle}>
	{#if itemPost.image_url}
		<img src={itemPost.image_url} alt={itemPost.title} class={imgStyle} />
	{/if}

	<article>
		<h1 class={h1Style}>{itemPost.title}</h1>
		<p class={h4Style}>{new Date(itemPost.created_at).toLocaleDateString()}</p>
		<div class={preStyle}>
			{@html itemPost.content.replace(/\r\n/g, '<br>')}
		</div>
	</article>
</section>
