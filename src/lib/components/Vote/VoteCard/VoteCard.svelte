<script lang="ts">
	import Card, { PrimaryAction, Media, Actions, ActionIcons } from '@smui/card';
	import IconButton from '@smui/icon-button';
	import Button, { Label } from '@smui/button';
	import VoteCardZoomDialog from './VoteCardZoomDialog.svelte';
	import { createEventDispatcher } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import type { CampaignObject } from '$lib/store';

	export let proposal: CampaignObject;
	export let proposalIndex: number;
	let zoomDialogOpened = false;

	let selected = false;
	const dispatch = createEventDispatcher();
	const cardSelectedHandler = () => {
		selected = true;
		setTimeout(() => {
			selected = false;
		}, duration);
		dispatch('proposalVoted', { proposal });
	};
	const cardActionsZoomHandler = () => (zoomDialogOpened = true);
	const closeModalHandler = () => (zoomDialogOpened = false);
	const duration = 450;
	$: move = selected ? (proposalIndex === 1 ? -200 : 200) : 0;
</script>

<div
	style="min-width: 42%; padding: 18px 18px 0px 18px;"
	in:fade={{ duration }}
	out:fly={{ duration, x: move }}
>
	<Card style="padding: 18px 18px 0px 18px;">
		<PrimaryAction on:click={cardSelectedHandler} class="voteImg">
			<Media
				class="card-media-16x9"
				aspectRatio="16x9"
				style={`background-image: url(${proposal.imageUrl});`}
			/>
			<div class="voteBtn">
				<Button on:click={cardSelectedHandler} variant="unelevated" class="button-shaped-round">
					<Label>Choose this one</Label>
				</Button>
			</div>
		</PrimaryAction>
		<Actions>
			<ActionIcons>
				<IconButton class="material-icons" on:click={cardActionsZoomHandler} title="Zoom"
					><span class="material-symbols-outlined"> zoom_out_map </span></IconButton
				>
			</ActionIcons>
		</Actions>
	</Card>
</div>

<VoteCardZoomDialog
	imageUrl={proposal.imageUrl}
	open={zoomDialogOpened}
	{proposalIndex}
	on:closeModal={closeModalHandler}
/>

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
