<script lang="ts">
	import { Row, Section, Title } from '@smui/top-app-bar';
	import Button, { Label } from '@smui/button';
	import { Icon } from '@smui/icon-button';
	import { Logo } from '$lib/cdk';

	$: loggedIn = false;

	const logIn = () => (loggedIn = true);
</script>

<header>
	<Row>
		<Section class="logo">
			<a href="/">
				<Logo />
				<Title>Ordel</Title>
			</a>
		</Section>
		<Section align="end" toolbar>
			<div class="space-around">
				{#if loggedIn}
					<Button on:click={() => null} variant="unelevated" class="button-shaped-round">
						<Icon class="material-icons">account_circle</Icon>
						<Label>Karine</Label>
					</Button>
				{:else}
					<Button on:click={logIn} class="button-shaped-round">
						<Label>Log in</Label>
					</Button>
					<Button
						color="secondary"
						on:click={logIn}
						variant="unelevated"
						class="button-shaped-round"
					>
						<Label>Sign up</Label>
					</Button>
				{/if}
			</div>
		</Section>
	</Row>
</header>

<style>
	header {
		padding: 0.25rem 1rem;
	}

	:global(.space-around > button) {
		margin: 0 0.25rem;
	}

	:global(.mdc-top-app-bar__title) {
		padding-left: 0;
		font-size: 1.75rem;
		padding-bottom: 5px;
	}

	a {
		display: flex;
		align-items: center;
		text-decoration: none;
		color: inherit;
	}
</style>
