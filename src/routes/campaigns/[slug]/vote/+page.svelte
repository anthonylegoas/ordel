<script lang="ts">
	import type { PageData } from '../$types';
	import { Vote } from '$lib/components';
	import { campaignsStore } from '$lib/store';
	type CampaignPageData = { campaignId: string } & PageData;

	export let data: CampaignPageData;
	const { campaigns } = campaignsStore;
	const campaign = data.campaignId ? $campaigns.find((v) => v.id === data.campaignId) : null;
</script>

<section>
	{#if campaign}
		<h1 class="name">{campaign.name}</h1>
		<p class="description">{campaign.description}</p>
		<Vote {campaign} />
		<p>Click on the proposal you wish to retain</p>
		<!-- <p>Click on the proposal you wish to retain (or use its keyboard shortcut)</p> -->
	{/if}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.name {
		margin: 12px 0 6px 0;
	}

	.name,
	.description {
		text-align: left;
	}
</style>
