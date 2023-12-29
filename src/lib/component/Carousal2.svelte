<script lang="ts">
	import { fade } from 'svelte/transition';
	import { Img } from 'flowbite-svelte';
	const images = [
		'https://wqz50k0spm0gyalr.public.blob.vercel-storage.com/pic1-HXbEj2b27fe27ZWisKCBVKsuahm9zo.png',
		'https://wqz50k0spm0gyalr.public.blob.vercel-storage.com/pic2-zHOvTA5yt5xxYte3mEtElM85RjUlXy.png',
		'https://wqz50k0spm0gyalr.public.blob.vercel-storage.com/pic3-sCYKbXlTpOwJRP0yX20WHnmhXz8G0F.png',
		'https://wqz50k0spm0gyalr.public.blob.vercel-storage.com/pic4-OzLZcCKm2uSMDxu5urN6LcMuVOf9Lh.png'
	];
	import { onMount } from 'svelte';
	onMount(() => {
		const interval = setInterval(updateIndex, 5000);
		return () => clearInterval(interval);
	});

	let currentIndex = 0;

	const updateIndex = () => {
		currentIndex = (currentIndex + 1) % images.length;
	};
</script>

<div class=" relative h-auto w-full overflow-hidden">
	{#each images as image, index}
		<li
			class:hidden={index !== currentIndex}
			in:fade={{ duration: 300 }}
			out:fade={{ duration: 300 }}
		>
			<Img src={image} alt={`Image ${index}`} />
		</li>
	{/each}
</div>
