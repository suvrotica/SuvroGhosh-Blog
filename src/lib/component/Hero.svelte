<script>
	import Carousal from './Carousal.svelte';
</script>

<section class="bg-white dark:bg-neutral-900">
	<div class="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
		<div class="mr-auto place-self-center lg:col-span-7">
			<h1
				class="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white"
			>
				Welcome to My Personal Blog
			</h1>
			<p
				class="mb-6 max-w-2xl font-light text-neutral-500 md:text-lg lg:mb-8 lg:text-xl dark:text-neutral-400"
			>
				I couldn't just flippantly, verbosely and ineloquently describe this blog as a scratchpad of
				thoughts, a much sought-after extension of my embarrassing tangle of nerves, unrelated
				fancies and figments strewn around and rattling loose in it, collectibles from the waste
				basket scraps that should have seen a shredder, or, somewhat more crudely, everything about
				anything. But these are exactly what I always wanted my blog to be. I'm not a prisoner to
				the usual boundaries that limit most people, and I wanted a place where a weirdo like me
				could find a way to read about the weird wanderings of a profligate traveling mind and not
				feel weird.
			</p>
			<a
				href="/latest-post"
				class="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 mr-3 inline-flex items-center justify-center rounded-lg px-5 py-3 text-center text-base font-medium text-white focus:ring-4"
			>
				Read Latest Post
				<!-- Icon or SVG -->
			</a>
			<a
				href="/about-me"
				class="inline-flex items-center justify-center rounded-lg border border-neutral-300 px-5 py-3 text-center text-base font-medium text-neutral-900 hover:bg-neutral-100 focus:ring-4 focus:ring-neutral-100 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:ring-neutral-800"
			>
				Learn More About Me
			</a>
		</div>
		<div class="hidden lg:col-span-5 lg:mt-0 lg:flex">
			<Carousal />
		</div>
	</div>
</section>
