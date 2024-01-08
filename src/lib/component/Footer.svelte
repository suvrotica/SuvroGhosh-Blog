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
						Categories
					</h2>
					<ul class="text-neutral-600 dark:text-neutral-400">
						<li class="mb-1">
							<a href="/tag-Web%20Development" class="hover:underline">Web Dev</a>
						</li>
						<li class="mb-1">
							<a href="/tag-AI" class="hover:underline">AI</a>
						</li>
						<li class="mb-1">
							<a href="/tag-Philosophy" class="hover:underline">Philosophy</a>
						</li>
					</ul>
				</div>
				<div>
					<h2 class="mb-6 text-sm font-semibold uppercase text-neutral-900 dark:text-white">
						Unsorted
					</h2>
					<ul class="text-neutral-600 dark:text-neutral-400">
						<li class="mb-1">
							<a href="/tag-Essay" class="hover:underline">Essay</a>
						</li>
						<li class="mb-1">
							<a href="/tag-Image" class="hover:underline">Image</a>
						</li>
						<li class="mb-1">
							<a href="/tag-Limerick" class="hover:underline">Limerick</a>
						</li>
					</ul>
				</div>
				<div>
					<h2 class="mb-6 text-sm font-semibold uppercase text-neutral-900 dark:text-white">
						Useful
					</h2>
					<ul class="text-neutral-600 dark:text-neutral-400">
						<li class="mb-1">
							<a href="/tag-Blog" class="hover:underline">About this blog</a>
						</li>
						<li class="mb-1">
							<a href="/tag-Business" class="hover:underline">Business</a>
						</li>
						<li class="mb-1">
							<a href="/tag-Bioscience" class="hover:underline">Bioscience</a>
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
