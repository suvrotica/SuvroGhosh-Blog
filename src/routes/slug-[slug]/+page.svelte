<script>
	// @ts-nocheck
	import { h1Style, h4Style, pStyle, imgStyle, preStyle } from '$lib/global';
	import { marked } from 'marked';

	// @ts-ignore
	import Prism from 'prismjs';
	import 'prismjs/themes/prism-okaidia.css';
	import { onMount } from 'svelte';
	onMount(() => Prism.highlightAll());
	export let data;
	const itemPost = data.slugData.post;
	import {
		replace42brWithBreak,
		replaceBqWithDiv,
		replace42ytWithIframe,
		replace42picWithFigure,
		replace42picWithFigureL,
		replace42picWithFigureR,
		replace4bWithBreak,
		replace42tableWithHTMLTable,
		replace42cWithHighlight,
		replaceNewLineWithBreak,
		replace42lblWithLabel
	} from '$lib/utility-functions';

	let newBlogContent = itemPost.content;
	newBlogContent = replace42cWithHighlight(newBlogContent);
	newBlogContent = replaceNewLineWithBreak(newBlogContent);
	newBlogContent = replaceBqWithDiv(newBlogContent);
	newBlogContent = replace42ytWithIframe(newBlogContent);
	newBlogContent = replace42picWithFigureR(newBlogContent);
	newBlogContent = replace42picWithFigureL(newBlogContent);
	newBlogContent = replace42picWithFigure(newBlogContent);
	newBlogContent = replace42brWithBreak(newBlogContent);
	newBlogContent = replace4bWithBreak(newBlogContent);
	newBlogContent = replace42tableWithHTMLTable(newBlogContent);
	newBlogContent = replace42lblWithLabel(newBlogContent);
	newBlogContent = marked(newBlogContent);
</script>

<section class={pStyle}>
	{#if itemPost.image_url}
		<img src={itemPost.image_url} alt={itemPost.title} class={imgStyle} />
	{/if}

	<article>
		<h1 class={h1Style}>{itemPost.title}</h1>
		<p class={h4Style}>{new Date(itemPost.created_at).toLocaleDateString()}</p>
		<div class="markdown-content">
			{@html newBlogContent}
		</div>
	</article>
</section>
