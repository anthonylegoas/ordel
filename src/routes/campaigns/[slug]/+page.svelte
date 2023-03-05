<script lang="ts">
	import type { PageData } from '../$types';
	import { campaignsStore } from '$lib/store';
	import { Banner, Link } from '$lib/cdk';

	type CampaignPageData = { campaignId: string } & PageData;

	export let data: CampaignPageData;
	const { campaigns } = campaignsStore;
	const campaign = data.campaignId ? $campaigns.find((v) => v.id === data.campaignId) : null;
</script>

<section>
	{#if campaign}
		<h1 class="name">You are invited to vote on <b>{campaign.name}</b></h1>
		<p class="description">{campaign.description}</p>
		<div>
			<Banner />
			<Link href={`/campaigns/${data.campaignId}/vote`} primary>Start voting</Link>
			<p>Click on the proposal you wish to retain (or use its keyboard shortcut)</p>
		</div>
	{:else}
		<h1>Campaign not found.</h1>
	{/if}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	div {
		align-self: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 24px 0;
	}

	.name {
		font-weight: 400;
		margin: 12px 0 6px 0;
	}

	.name,
	.description {
		text-align: left;
	}
</style>
