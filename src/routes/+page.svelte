<script lang="ts">
	import { Banner } from '$lib/cdk';
	import { OrdelInstructions } from '$lib/components';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="TUX - blabla" />
</svelte:head>

<section>
	<h1>New World Ordel</h1>
	<h2>It's now easier to order things. All kinds of things.</h2>
	<Banner />
	<OrdelInstructions />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 4rem;
		padding: 24px 0px;
		gap: 20px;
	}

	h1 {
		font-family: 'Source Serif Pro';
		font-style: normal;
		font-weight: 900;
		font-size: 57px;
		line-height: 64px;
		margin: 0;
	}
</style>
