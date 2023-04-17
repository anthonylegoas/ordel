<script lang="ts">
	import { Row, Section } from '@smui/top-app-bar';
	import Button, { Label } from '@smui/button';
	import { CampaignsList } from '$lib/components';
</script>

<svelte:head>
	<title>My campaigns</title>
	<meta name="description" content="Ordel - my campaigns" />
</svelte:head>

<Row>
	<Section>
		<h1>My campaigns</h1>
	</Section>
	<Section align="end" toolbar>
		<Button
			on:click={() => null}
			color="secondary"
			variant="unelevated"
			class="button-shaped-round"
		>
			<Label>New campaign</Label>
		</Button>
	</Section>
</Row>
<CampaignsList />
