<script>
	import { Card, Button, Toggle } from 'flowbite-svelte';
	import { ArrowRightOutline } from 'flowbite-svelte-icons';
	import Carousal2 from './Carousal2.svelte';
	let vCard = false;
</script>

<div>
	<Card reverse={vCard} class="mb-4">
		<div class="max-h-96 max-w-sm overflow-hidden">
			<Carousal2 />
		</div>
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
			Noteworthy technology acquisitions 2021
		</h5>
		<p class="mb-3 font-normal leading-tight text-gray-700 dark:text-gray-400">
			Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
			chronological order.
		</p>
		<Button>
			Read more <ArrowRightOutline class="ms-2 h-3.5 w-3.5 text-white" />
		</Button>
	</Card>
	<Toggle bind:checked={vCard} class="italic dark:text-gray-500">Reverse</Toggle>
</div>
