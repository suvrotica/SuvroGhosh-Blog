<script>
	import { sectionStyle, pStyle, imgStyle, h6Style, h1Style } from '$lib/global';

	export let content = ''; // Prop to receive the content string
</script>

<section class={sectionStyle}>
	<img
		class={imgStyle}
		src="https://wqz50k0spm0gyalr.public.blob.vercel-storage.com/6684ce33-a0b2-4e90-9617-57685f0f66d8-pxbfqBNH8FKkpohiJPpSTY8PwqFirL.webp"
		alt="flower"
	/>
	<h6 class={`${h6Style} hidden md:inline`}>A Quixotic Blog</h6>
	<p class={`${pStyle} text-sm sm:text-xs`}>
		{content.slice(0, 200)}{content.length > 200 ? '...' : ''}
	</p>
</section>
