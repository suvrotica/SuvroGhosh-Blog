<script lang="ts">
	import { page } from '$app/stores';
</script>

<section class="bg-white dark:bg-neutral-900">
	<div class="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
		<div class="mx-auto max-w-screen-sm text-center">
			<h1
				class="mb-4 text-7xl font-extrabold tracking-tight text-neutral-600 lg:text-9xl dark:text-neutral-500"
			>
				<h1>{$page.url.pathname}</h1>
			</h1>
			<h2
				class="mb-4 text-2xl font-bold tracking-tight text-neutral-900 md:text-4xl dark:text-white"
			>
				{$page.status}
			</h2>
			<h3
				class="text-1xl mb-4 font-bold tracking-tight text-neutral-900 md:text-4xl dark:text-white"
			>
				{$page.error?.message}
			</h3>
			<p
				class="mb-4 text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl dark:text-white"
			>
				Missing Page
			</p>
			<p class="mb-4 text-lg font-light text-neutral-500 dark:text-neutral-400">
				Sorry, we can't find that page. You'll find lots to explore on the home page.
			</p>
			<a
				href="/"
				class="my-4 inline-flex rounded-lg bg-neutral-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-neutral-800 focus:outline-none focus:ring-4 focus:ring-neutral-300 dark:focus:ring-neutral-900"
				>Back to Homepage</a
			>
		</div>
	</div>
</section>
