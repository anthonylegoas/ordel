<script lang="ts">
	import Card, { PrimaryAction, Media, Actions, ActionIcons } from '@smui/card';
	import IconButton from '@smui/icon-button';
	import Button, { Label } from '@smui/button';
	import { createEventDispatcher } from 'svelte';
	import type { CampaignObject } from '$lib/store';

	export let proposal: CampaignObject;

	const dispatch = createEventDispatcher();
	const cardSelectedHandler = () => dispatch('proposalVoted', { proposal });
</script>

<Card style="min-width: 42%; padding: 18px 18px 0px 18px;">
	<PrimaryAction on:click={cardSelectedHandler} class="voteImg">
		<Media
			class="card-media-16x9"
			aspectRatio="16x9"
			style={`background-image: url(${proposal.imageUrl});`}
		/>
		<div class="voteBtn">
			<Button on:click={() => null} variant="unelevated" class="button-shaped-round">
				<Label>Choose this one</Label>
			</Button>
		</div>
	</PrimaryAction>
	<Actions>
		<ActionIcons>
			<IconButton class="material-icons" on:click={() => null} title="Zoom"
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
