<script>
	import Logo from './Logo.svelte';
</script>

<footer class="bg-white p-4 sm:p-6 dark:bg-neutral-800">
	<div class="mx-auto max-w-screen-xl">
		<div class="md:flex md:justify-between">
			<div class="mb-6 md:mb-0">
				<Logo />
				<!-- Your blog's logo -->
			</div>
			<div class="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
				<!-- Update these sections as per your blog's content -->
				<div>
					<h2 class="mb-6 text-sm font-semibold uppercase text-neutral-900 dark:text-white">
						Blog Categories
					</h2>
					<ul class="text-neutral-600 dark:text-neutral-400">
						<li class="mb-4">
							<a href="/tag-Web%20Development" class="hover:underline">Web Dev</a>
						</li>
						<li>
							<a href="/https://www.suvroghosh.blog/tag-Philosophy" class="hover:underline"
								>Philosophy</a
							>
						</li>
					</ul>
				</div>
				<div>
					<h2 class="mb-6 text-sm font-semibold uppercase text-neutral-900 dark:text-white">
						Stay Connected
					</h2>
					<ul class="text-neutral-600 dark:text-neutral-400">
						<li class="mb-4">
							<a href="https://twitter.com/yourhandle" class="hover:underline">Twitter</a>
						</li>
						<li>
							<a href="https://instagram.com/yourhandle" class="hover:underline">Instagram</a>
						</li>
					</ul>
				</div>
				<div>
					<h2 class="mb-6 text-sm font-semibold uppercase text-neutral-900 dark:text-white">
						Useful Links
					</h2>
					<ul class="text-neutral-600 dark:text-neutral-400">
						<li class="mb-4">
							<a href="/about" class="hover:underline">About Me</a>
						</li>
						<li>
							<a href="/contact" class="hover:underline">Contact</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<hr class="my-6 border-neutral-200 sm:mx-auto lg:my-8 dark:border-neutral-700" />
		<div class="sm:flex sm:items-center sm:justify-between">
			<span class="text-sm text-neutral-500 sm:text-center dark:text-neutral-400">
				💩
				{new Date().toLocaleDateString(undefined, { month: 'long', year: 'numeric' }) + ' '}Suvro
				the Ghosh who Shits
			</span>
			<div class="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
				<!-- Update these with your social media or relevant links -->
				<a
					href="https://twitter.com/yourhandle"
					class="text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
				>
					<!-- Twitter Icon -->
				</a>
				<a
					href="https://facebook.com/yourpage"
					class="text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
				>
					<!-- Facebook Icon -->
				</a>
				<a
					href="https://instagram.com/yourhandle"
					class="text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
				>
					<!-- Instagram Icon -->
				</a>
				<a
					href="https://linkedin.com/in/yourprofile"
					class="text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
				>
					<!-- LinkedIn Icon -->
				</a>
			</div>
		</div>
	</div>
</footer>
