<script lang="ts">
	import VoteCard from './VoteCard/VoteCard.svelte';
	import type { Campaign } from '$lib/store';

	export let campaign: Campaign;
	const proposals = campaign.objects;
</script>

<div>
	{#each proposals as proposal, i}
		<VoteCard imageUrl={proposal.imageUrl} title={`Proposal ${i + 1}`} />
	{/each}
</div>

<style>
	div {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		width: 100%;
	}
</style>
