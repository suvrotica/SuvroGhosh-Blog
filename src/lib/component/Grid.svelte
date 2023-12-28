<div class="grid-container">
	<div class="header">header</div>
	<div class="sidebar">sidebar</div>
	<div class="content-1">Content-1</div>
	<div class="content-2">Content-2</div>
	<div class="content-3">Content-3</div>
	<div class="footer">footer</div>
</div>

<style>
	.grid-container {
		display: grid;
		width: 100%;
		height: 600px;
		grid-template-columns: 200px 1fr 1fr;
		grid-template-rows: 80px 1fr 1fr 100px;
		grid-gap: 1rem;
		grid-template-areas:
			'header header header'
			'sidebar content-1 content-1'
			'sidebar content-2 content-3'
			'footer footer footer';
	}

	.header {
		grid-area: header;
		background-color: antiquewhite;
	}

	.sidebar {
		grid-area: sidebar;
		background-color: burlywood;
	}

	.content-1 {
		grid-area: content-1;
		background-color: blueviolet;
	}

	.content-2 {
		grid-area: content-2;
		background-color: blueviolet;
	}

	.content-3 {
		grid-area: content-3;
		background-color: blueviolet;
	}

	.footer {
		grid-area: footer;
		background-color: cadetblue;
	}
</style>
