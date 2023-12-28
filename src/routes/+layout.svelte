<script lang="ts">
	import '../app.pcss';
	import NavigationBar from '$lib/component/Navigation.svelte';
	import Footer from '$lib/component/Footer.svelte';
	const title = 'Suvro Ghosh Blog | Satire | Technology Insights & Expert Opinions';

	const description =
		"Join Suvro Ghosh's journey through the evolving landscape of technology. This blog offers a blend of detailed tech tutorials, industry trend analyses, and personal stories, providing a unique view from a tech expert's lens. Stay ahead of the curve with insights into the latest developments and thoughtful perspectives on tech's impact in everyday life. Perfect for tech enthusiasts, professionals, and learners alike.";
</script>

<svelte:head>
	<link rel="icon" href="https://fav.farm/💩" />

	<title>{title}</title>
	<meta name="description" content={description} />
</svelte:head>

<main>
	<NavigationBar />

	<slot />
	<Footer />
</main>
