<script lang="ts">
	import '../app.pcss';
	import NavigationBar from '$lib/component/Navigation.svelte';
</script>

<main>
	<NavigationBar />

	<slot />
</main>
