<script>
	import Carousel from '$lib/component/Carousal.svelte';
	import {
		sectionStyle,
		divContainerStyle,
		divContentStyle,
		h1_style,
		p_style,
		a_style
	} from '$lib/global';

	import { Gallery } from 'flowbite-svelte';
	const image1 = {
		alt: 'erbology',
		src: 'https://wqz50k0spm0gyalr.public.blob.vercel-storage.com/6684ce33-a0b2-4e90-9617-57685f0f66d8-pxbfqBNH8FKkpohiJPpSTY8PwqFirL.webp'
	};
	const images2 = [
		{ alt: 'shoes', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg' },
		{ alt: 'small bag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg' },
		{ alt: 'plants', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg' },
		{ alt: 'watch', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg' },
		{ alt: 'shoe', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg' }
	];
</script>

<div>
	<img
		class="p-auto float-none m-2 rounded-xl md:float-right md:w-1/3"
		src="https://wqz50k0spm0gyalr.public.blob.vercel-storage.com/6684ce33-a0b2-4e90-9617-57685f0f66d8-pxbfqBNH8FKkpohiJPpSTY8PwqFirL.webp"
		alt="flower"
	/>
	<p class={p_style}>
		Although flippant, this blog is a scratchpad of thoughts, a much-sought-after extension of my
		embarrassing tangle of nerves, unrelated fancies and figments strewn around and rattling loose
		in it, collectibles from the waste basket scraps that should have seen a shredder, or, somewhat
		more crudely, everything about anything. I'm not a prisoner to the usual boundaries that limit
		most people, and I wanted a place where the diarist in me could jot down the wanderings of his
		profligately traveling mind and not feel unwelcome. I presume I would leave the world richer in
		nonsense than anything of substance. But here I explore, when I still can, the vast and
		forbidden realms of human feats and foibles, fucks and farts, feces and fraternities. So whether
		you're a seasoned simulationist or a curious commoner, an android or an amateur, a ponderer or a
		pragmatist, join me in the infinite mosaic of collective nonsense we can explore.
	</p>
	<p class={p_style}>
		Although flippant, this blog is a scratchpad of thoughts, a much-sought-after extension of my
		embarrassing tangle of nerves, unrelated fancies and figments strewn around and rattling loose
		in it, collectibles from the waste basket scraps that should have seen a shredder, or, somewhat
		more crudely, everything about anything. I'm not a prisoner to the usual boundaries that limit
		most people, and I wanted a place where the diarist in me could jot down the wanderings of his
		profligately traveling mind and not feel unwelcome. I presume I would leave the world richer in
		nonsense than anything of substance. But here I explore, when I still can, the vast and
		forbidden realms of human feats and foibles, fucks and farts, feces and fraternities. So whether
		you're a seasoned simulationist or a curious commoner, an android or an amateur, a ponderer or a
		pragmatist, join me in the infinite mosaic of collective nonsense we can explore.
	</p>
</div>
