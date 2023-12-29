<script>
	import { Card, Button, Toggle } from 'flowbite-svelte';
	import { ArrowRightOutline } from 'flowbite-svelte-icons';
	import Carousal2 from './Carousal2.svelte';
	import { text_bg_color_style, a_style } from '$lib/global';
	let vCard = false;
</script>

<div>
	<Card reverse={vCard} class={text_bg_color_style}>
		<div class="max-h-96 max-w-sm overflow-hidden">
			<Carousal2 />
		</div>
		<h5 class="mb-2 text-2xl font-bold tracking-tight {text_bg_color_style}">
			Noteworthy technology acquisitions 2021
		</h5>
		<p class="mb-3 leading-tight{text_bg_color_style}">
			Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
			chronological order.
		</p>
		<a href="/" class={a_style}> Read More </a>
	</Card>
</div>
