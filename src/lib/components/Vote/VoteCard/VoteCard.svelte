<script lang="ts">
	import Card, { Content, PrimaryAction, Media, Actions, ActionIcons } from '@smui/card';
	import IconButton from '@smui/icon-button';
	import Button, { Label } from '@smui/button';

	export let imageUrl: string;
	export let title: string;

	let clicked = 0;
</script>

<Card style="min-width: 42%;">
	<PrimaryAction on:click={() => clicked++} class="voteImg">
		<Media
			class="card-media-16x9"
			aspectRatio="16x9"
			style={`background-image: url(${imageUrl});`}
		/>
		<Content class="mdc-typography--body2">{title}</Content>
		<div class="voteBtn">
			<Button on:click={() => null} variant="unelevated" class="button-shaped-round">
				<Label>Choose this one</Label>
			</Button>
		</div>
	</PrimaryAction>
	<Actions>
		<ActionIcons>
			<IconButton class="material-icons" on:click={() => clicked++} title="Zoom"
				><span class="material-symbols-outlined"> zoom_out_map </span></IconButton
			>
		</ActionIcons>
	</Actions>
</Card>

<style>
	.voteBtn {
		display: none;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	:global(.voteImg:hover > .voteBtn) {
		display: block;
	}
</style>
