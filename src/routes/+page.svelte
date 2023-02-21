<script lang="ts">
	import Button, { Label } from '@smui/button';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="TUX - blabla" />
</svelte:head>

<section>
	<p>Home page</p>
	<Button on:click={() => null}>
		<Label>Default</Label>
	</Button>
	<Button on:click={() => null} color="secondary">
		<Label>Default</Label>
	</Button>
</section>

<style>
	section {
		padding: 4rem;
	}
</style>
