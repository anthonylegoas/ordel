<script lang="ts">
	import { Row, Section } from '@smui/top-app-bar';
	import Button, { Label } from '@smui/button';

	import Switch from '@smui/switch';
	import FormField from '@smui/form-field';

	let checked1 = true;
	let checked2 = false;
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
<Section>
	<Row>
		<FormField>
			<Switch bind:checked={checked1} />
			<span slot="label">Show expired campaiges</span>
		</FormField>
		<FormField>
			<Switch bind:checked={checked2} />
			<span slot="label">Show archived campaigns</span>
		</FormField>
	</Row>
</Section>
