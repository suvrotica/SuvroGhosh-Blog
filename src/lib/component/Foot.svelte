<script>
	import Logo from './Logo.svelte';
</script>

<footer class="flex flex-row items-center justify-between">
	<Logo />
	<span class="pr-2 text-xs text-neutral-500 sm:text-center md:text-sm dark:text-neutral-400">
		💩
		{new Date().toLocaleDateString(undefined, { month: 'long', year: 'numeric' }) + ' '}Suvro the
		Ghosh who Shits
	</span>
</footer>
