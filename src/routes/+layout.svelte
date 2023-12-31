<script lang="ts">
	import '../app.pcss';
	import Footer from '$lib/component/Footer.svelte';
	import { title, description } from '$lib/global';
	import Header from '$lib/component/Header.svelte';
	
</script>

<svelte:head>
	<link rel="icon" href="https://fav.farm/💩" />

	<title>{title}</title>
	<meta name="description" content={description} />
</svelte:head>

<main>
	<Header />

	<slot />
	<Footer />
</main>

