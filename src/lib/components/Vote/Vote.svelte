<script lang="ts">
	import CircularProgress from '@smui/circular-progress';
	import VoteCard from './VoteCard/VoteCard.svelte';
	import type { Campaign, CampaignObject } from '$lib/store';
	import { pick2RandomProposals } from '$lib/hooks/voting';
	import { onMount } from 'svelte';

	export let campaign: Campaign;

	const nbProposals = campaign.objects.length * 2;
	let nbCurrentProposals = 0;

	let proposalsLoading: boolean = true;
	let proposals: CampaignObject[] = [];
	const votes = campaign.objects.reduce(
		(accumulator, currentValue) => ({ ...accumulator, [currentValue.id]: 0 }),
		{} as { [key: string]: number }
	);
	const pick2Proposals = () => {
		proposalsLoading = true;
		proposals = pick2RandomProposals(campaign.objects);
		// better UX with latency here
		setTimeout(() => (proposalsLoading = false), 500);
	};
	const proposalVotedHandler = (event: CustomEvent) => {
		const votedProposal = event.detail.proposal;
		votes[votedProposal.id]++;
		pick2Proposals();
		nbCurrentProposals++;
	};

	onMount(() => pick2Proposals());
</script>

<div style="min-height: 50vh;">
	{#if proposalsLoading}
		<div style="position: absolute; display: flex; justify-content: center; margin: 100px 0;">
			<CircularProgress style="height: 64px; width: 64px;" indeterminate />
		</div>
	{:else if nbCurrentProposals >= nbProposals}
		<p>🎉 Job's done 💪</p>
		<p>Thanks for your participation.</p>
	{:else}
		{#each proposals as proposal, i}
			<VoteCard on:proposalVoted={proposalVotedHandler} {proposal} proposalIndex={i + 1} />
		{/each}
	{/if}
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
