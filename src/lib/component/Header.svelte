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
			<a href="/home" class={`${a_style}`}>About</a>
		</li>
		<li>
			<a href="/blog" class={`${a_style}`}>Contact</a>
		</li>
	</ul>
	<!-- Theme Toggle Button -->

	<DarkMode {btnClass} />
</nav>
