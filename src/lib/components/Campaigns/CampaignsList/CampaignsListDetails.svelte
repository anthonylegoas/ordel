<script lang="ts">
	import type { Campaign } from '$lib/store';
	import { Section as OrdelSection } from '$lib/cdk';
	import { CampaignStatsParticipation } from './CampaignsStats';

	export let campaign: Campaign;
</script>

<div class="campaign-detail">
	<h2>{campaign.name}</h2>
	<p>{campaign.description}</p>
	<CampaignStatsParticipation {campaign} />
	<OrdelSection title="Rankings" subtitle="700+ votes">
		<p>to do</p>
	</OrdelSection>
	<OrdelSection title="Objects" subtitle="{campaign.objects.length} objects">
		<ul>
			{#each campaign.objects as obj}
				<li>
					<img src={obj.imageUrl} alt="" style="width: 150px; height: 150px;" />
				</li>
			{/each}
		</ul>
	</OrdelSection>
</div>

<style>
	.campaign-detail {
		background-color: white;
		padding: 1rem;
		width: 60%;
	}

	ul {
		list-style: none;
		display: flex;
		flex-wrap: wrap;
		max-width: 100%;
		padding: 0;
	}

	li {
		margin: 5px;
	}
</style>
