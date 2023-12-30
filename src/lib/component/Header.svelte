<script lang="ts">
	import {
		title,
		navStyle,
		ulStyle,
		liStyle,
		buttonStyle,
		linkStyle,
		a_style,
		mode_style,
		btnClass
	} from '$lib/global';
	import Logo from './Logo.svelte';
	import { DarkMode } from 'flowbite-svelte';
</script>

<nav class={navStyle}>
	<!-- Logo and Title on one line on mobile -->
	<Logo />
	<!-- Navigation -->
	<ul class={ulStyle}>
		<li>
			<a href="/" class={`${a_style}`}>Home</a>
		</li>
		<li>
			<a href="/blog" class={`${a_style}`}>Blog</a>
		</li>
	</ul>
	<!-- Theme Toggle Button -->

	<DarkMode {btnClass} />
</nav>
