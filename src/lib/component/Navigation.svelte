<script>
	import Logo from './Logo.svelte';
	import Dark from './Dark.svelte';
</script>

<header>
	<nav class="border-neutral-200 bg-white px-4 py-2.5 lg:px-6 dark:bg-neutral-900">
		<div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
			<Logo />
			<div class="flex items-center lg:order-2">
				<a
					href="./"
					class="mr-2 rounded-lg px-4 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-50 focus:outline-none focus:ring-4 focus:ring-neutral-300 lg:px-5 lg:py-2.5 dark:text-white dark:hover:bg-neutral-700 dark:focus:ring-neutral-800"
					>Home</a
				>
				<a
					href="./"
					class="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mr-2 rounded-lg px-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring-4 lg:px-5 lg:py-2.5"
					>Blog</a
				>
				<Dark />
			</div>
		</div>
	</nav>
</header>
