<script lang="ts">
	import { Row, Section, Title } from '@smui/top-app-bar';
	import Button, { Label } from '@smui/button';
	import IconButton from '@smui/icon-button';

	$: loggedIn = false;
</script>

<Row>
	<Section>
		<Title class="title">TUX</Title>
	</Section>
	<Section align="end" toolbar>
		{#if loggedIn}
			<IconButton class="material-icons" aria-label="Bookmark this page">bookmark</IconButton>
		{:else}
			<Button on:click={() => null} class="button-shaped-round" color="secondary">
				<Label>Log in</Label>
			</Button>
			<Button on:click={() => null} variant="raised" class="button-shaped-round">
				<Label>Sign up</Label>
			</Button>
		{/if}
	</Section>
</Row>

<style>
	:global(.title) {
		color: var(--mdc-theme-primary);
	}
</style>
