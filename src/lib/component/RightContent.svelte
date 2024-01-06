<script>
	import {
		sectionStyle,
		divContainerStyle,
		divContentStyle,
		divCarouselStyle,
		imgStyle,
		h1Style,
		pStyle,
		a_style
	} from '$lib/global';
	import Carousal from './Carousal.svelte';
	import LeftContent from './LeftContent.svelte';
	import SummaryCard from './SummaryCard.svelte';
</script>

<section class={sectionStyle}>
	<div class={imgStyle}>
		<Carousal />
	</div>
	<h1 class={h1Style}>A Quixotic Blog</h1>
	<p class={pStyle}>
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate cupiditate cum vero
		corporis, maiores pariatur amet, laudantium porro ullam aperiam sint deserunt rerum quidem
		laboriosam accusamus, itaque iusto! Earum laborum incidunt ea similique quisquam inventore
		consequuntur deserunt quos saepe cupiditate tenetur maiores doloribus voluptatum totam suscipit
		voluptas numquam soluta harum nesciunt magni placeat porro consectetur, atque corporis.
		Corporis, dignissimos doloribus error unde incidunt tempore. Dicta possimus facere sit atque
		tempora voluptas veniam accusantium quae, quam fugit in explicabo. Praesentium velit quo
		molestias. Tempore, fugit voluptatum dolores necessitatibus exercitationem incidunt laudantium
		quibusdam, voluptatem deserunt soluta iusto vero aspernatur nihil rem voluptas dicta quidem aut
		esse blanditiis obcaecati voluptates? Ipsam, ex eaque commodi rerum fugit non neque et
		necessitatibus placeat, laboriosam quis eveniet libero magni soluta tenetur. Ut minus cupiditate
		sequi voluptas. Ducimus vel et officiis doloribus non, dignissimos rerum repudiandae nobis odio,
		asperiores nisi eius debitis ullam soluta possimus quos ad rem totam fuga ab corrupti porro
		repellat. Quis quaerat, quo incidunt iste dignissimos aspernatur sed id culpa dolores
		perspiciatis sapiente officiis minima delectus optio minus non necessitatibus. Minus placeat,
		voluptatibus perferendis velit dignissimos suscipit voluptas. Obcaecati saepe, facilis tenetur
		minus quisquam, asperiores in numquam quibusdam harum maxime recusandae deserunt similique?
	</p>
</section>

<h1 class={h1Style}>Related Posts</h1>
<div class="m-2 grid grid-cols-3 gap-1">
	<SummaryCard
		content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate cupiditate cum vero
		corporis, maiores pariatur amet, laudantium porro ullam aperiam sint deserunt rerum quidem
		laboriosam accusamus, itaque iusto! Earum laborum incidunt ea similique quisquam inventore
		consequuntur deserunt quos saepe cupiditate tenetur maiores doloribus voluptatum totam suscipit
		voluptas numquam soluta harum nesciunt magni placeat porro consectetur, atque corporis.
		Corporis, dignissimos doloribus error unde incidunt tempore. Dicta possimus facere sit atque
		tempora voluptas veniam accusantium quae, quam fugit in explicabo. Praesentium velit quo
		molestias. Tempore, fugit voluptatum dolores necessitatibus exercitationem incidunt laudantium
		quibusdam, voluptatem deserunt soluta iusto vero aspernatur nihil rem voluptas dicta quidem aut
		esse blanditiis obcaecati voluptates? Ipsam, ex eaque commodi rerum fugit non neque et
		necessitatibus placeat, laboriosam quis eveniet libero magni soluta tenetur. Ut minus cupiditate
		sequi voluptas. Ducimus vel et officiis doloribus non, dignissimos rerum repudiandae nobis odio,
		asperiores nisi eius debitis ullam soluta possimus quos ad rem totam fuga ab corrupti porro
		repellat. Quis quaerat, quo incidunt iste dignissimos aspernatur sed id culpa dolores
		perspiciatis sapiente officiis minima delectus optio minus non necessitatibus. Minus placeat,
		voluptatibus perferendis velit dignissimos suscipit voluptas. Obcaecati saepe, facilis tenetur
		minus quisquam, asperiores in numquam quibusdam harum maxime recusandae deserunt similique?"
	/>
	<SummaryCard
		content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate cupiditate cum vero
		corporis, maiores pariatur amet, laudantium porro ullam aperiam sint deserunt rerum quidem
		laboriosam accusamus, itaque iusto! Earum laborum incidunt ea similique quisquam inventore
		consequuntur deserunt quos saepe cupiditate tenetur maiores doloribus voluptatum totam suscipit
		voluptas numquam soluta harum nesciunt magni placeat porro consectetur, atque corporis.
		Corporis, dignissimos doloribus error unde incidunt tempore. Dicta possimus facere sit atque
		tempora voluptas veniam accusantium quae, quam fugit in explicabo. Praesentium velit quo
		molestias. Tempore, fugit voluptatum dolores necessitatibus exercitationem incidunt laudantium
		quibusdam, voluptatem deserunt soluta iusto vero aspernatur nihil rem voluptas dicta quidem aut
		esse blanditiis obcaecati voluptates? Ipsam, ex eaque commodi rerum fugit non neque et
		necessitatibus placeat, laboriosam quis eveniet libero magni soluta tenetur. Ut minus cupiditate
		sequi voluptas. Ducimus vel et officiis doloribus non, dignissimos rerum repudiandae nobis odio,
		asperiores nisi eius debitis ullam soluta possimus quos ad rem totam fuga ab corrupti porro
		repellat. Quis quaerat, quo incidunt iste dignissimos aspernatur sed id culpa dolores
		perspiciatis sapiente officiis minima delectus optio minus non necessitatibus. Minus placeat,
		voluptatibus perferendis velit dignissimos suscipit voluptas. Obcaecati saepe, facilis tenetur
		minus quisquam, asperiores in numquam quibusdam harum maxime recusandae deserunt similique?"
	/>
	<SummaryCard
		content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate cupiditate cum vero
		corporis, maiores pariatur amet, laudantium porro ullam aperiam sint deserunt rerum quidem
		laboriosam accusamus, itaque iusto! Earum laborum incidunt ea similique quisquam inventore
		consequuntur deserunt quos saepe cupiditate tenetur maiores doloribus voluptatum totam suscipit
		voluptas numquam soluta harum nesciunt magni placeat porro consectetur, atque corporis.
		Corporis, dignissimos doloribus error unde incidunt tempore. Dicta possimus facere sit atque
		tempora voluptas veniam accusantium quae, quam fugit in explicabo. Praesentium velit quo
		molestias. Tempore, fugit voluptatum dolores necessitatibus exercitationem incidunt laudantium
		quibusdam, voluptatem deserunt soluta iusto vero aspernatur nihil rem voluptas dicta quidem aut
		esse blanditiis obcaecati voluptates? Ipsam, ex eaque commodi rerum fugit non neque et
		necessitatibus placeat, laboriosam quis eveniet libero magni soluta tenetur. Ut minus cupiditate
		sequi voluptas. Ducimus vel et officiis doloribus non, dignissimos rerum repudiandae nobis odio,
		asperiores nisi eius debitis ullam soluta possimus quos ad rem totam fuga ab corrupti porro
		repellat. Quis quaerat, quo incidunt iste dignissimos aspernatur sed id culpa dolores
		perspiciatis sapiente officiis minima delectus optio minus non necessitatibus. Minus placeat,
		voluptatibus perferendis velit dignissimos suscipit voluptas. Obcaecati saepe, facilis tenetur
		minus quisquam, asperiores in numquam quibusdam harum maxime recusandae deserunt similique?"
	/>
</div>
