<script lang="ts">
	import { page } from '$app/stores';
	import { emojis } from '$lib/global';
</script>

<section class="bg-white dark:bg-neutral-900">
	<div class="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
		<div class="mx-auto max-w-screen-sm text-center">
			<h1
				class="mb-4 text-7xl font-extrabold tracking-tight text-neutral-600 lg:text-9xl dark:text-neutral-500"
			>
				{$page.url.pathname}
			</h1>
			<div>
				<p class="mb-4 text-8xl font-bold tracking-tight text-neutral-900 dark:text-white">
					{emojis[$page.status] ?? emojis[500]}
				</p>
				<p
					class="mb-4 text-2xl font-bold tracking-tight text-neutral-900 md:text-4xl dark:text-white"
				>
					{$page.status}
					({$page.error?.message})
				</p>

				<a
					href="/"
					class="my-4 inline-flex rounded-lg bg-neutral-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-neutral-800 focus:outline-none focus:ring-4 focus:ring-neutral-300 dark:focus:ring-neutral-900"
				>
					Back to Homepage
				</a>
			</div>
		</div>
	</div>
</section>
