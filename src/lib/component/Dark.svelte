<script>
	import { DarkMode } from 'flowbite-svelte';

	let btnClass =
		'text-white dark:text-gray-400 bg-gray-100 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-xl p-4';
</script>

<DarkMode {btnClass} />
