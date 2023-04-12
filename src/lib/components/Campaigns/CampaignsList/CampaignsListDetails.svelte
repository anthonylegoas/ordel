<script lang="ts">
	import type { Campaign } from '$lib/store';
	import {
		CampaignStatsObjects,
		CampaignStatsParticipation,
		CampaignStatsRanking
	} from './CampaignsStats';

	export let campaign: Campaign;
</script>

<div class="campaign-detail">
	<h2>{campaign.name}</h2>
	<p>{campaign.description}</p>
	<CampaignStatsParticipation {campaign} />
	<CampaignStatsRanking {campaign} />
	<CampaignStatsObjects {campaign} />
</div>

<style>
	.campaign-detail {
		background-color: white;
		padding: 1rem;
		width: 60%;
	}
</style>
