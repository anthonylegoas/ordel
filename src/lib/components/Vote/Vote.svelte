<script lang="ts">
	import VoteCard from './VoteCard/VoteCard.svelte';
	import type { Campaign, CampaignObject } from '$lib/store';
	import { pick2RandomProposals } from '$lib/hooks/voting';
	import { onMount } from 'svelte';

	export let campaign: Campaign;

	let proposals: CampaignObject[] = [];
	const votes = campaign.objects.reduce(
		(accumulator, currentValue) => ({ ...accumulator, [currentValue.id]: 0 }),
		{} as { [key: string]: number }
	);
	const pick2Proposals = () => (proposals = pick2RandomProposals(campaign.objects));
	const proposalVotedHandler = (event: CustomEvent) => {
		const votedProposal = event.detail.proposal;
		votes[votedProposal.id]++;
		pick2Proposals();
		console.log(votes);
	};

	onMount(() => pick2Proposals());
</script>

<div>
	{#each proposals as proposal, i}
		<VoteCard on:proposalVoted={proposalVotedHandler} {proposal} proposalIndex={i + 1} />
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
