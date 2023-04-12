<script lang="ts">
	import { Row, Section } from '@smui/top-app-bar';
	import Button, { Label } from '@smui/button';
	import { CampaignsList } from '$lib/components';
</script>

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
