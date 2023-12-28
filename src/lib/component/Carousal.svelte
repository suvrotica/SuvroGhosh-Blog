<script lang="ts">
	import { fade } from 'svelte/transition';

	const images = [
		'https://wqz50k0spm0gyalr.public.blob.vercel-storage.com/pic1-HXbEj2b27fe27ZWisKCBVKsuahm9zo.png',
		'https://wqz50k0spm0gyalr.public.blob.vercel-storage.com/pic2-zHOvTA5yt5xxYte3mEtElM85RjUlXy.png',
		'https://wqz50k0spm0gyalr.public.blob.vercel-storage.com/pic3-sCYKbXlTpOwJRP0yX20WHnmhXz8G0F.png'
	];
	import { onMount } from 'svelte';
	onMount(() => {
		const interval = setInterval(updateIndex, 5000);
		return () => clearInterval(interval);
	});

	let currentIndex = 0;

	// Logic to update currentIndex for the carousel
	const updateIndex = () => {
		currentIndex = (currentIndex + 1) % images.length;
	};
</script>

<div class="carousel-container relative w-full">
	<!-- Adjust width and height as needed -->
	{#each images as image, index}
		<img
			src={image}
			alt={`Image ${index}`}
			class="carousel-image"
			class:hidden={index !== currentIndex}
			in:fade={{ duration: 300 }}
			out:fade={{ duration: 300 }}
		/>
	{/each}
</div>

<style>
	.carousel-image {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>
