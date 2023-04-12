<script lang="ts">
	import { Row, Section } from '@smui/top-app-bar';
	import Switch from '@smui/switch';
	import FormField from '@smui/form-field';
	import List, { Item } from '@smui/list';
	import { Link } from '$lib/cdk';
	import { campaignsStore } from '$lib/store';
	import CampaignsListDetails from './CampaignsListDetails.svelte';

	const {
		campaigns,
		selectedCampaign,
		selectCampaign,
		showArchivedCampaigns,
		showExpiredCampaigns
	} = campaignsStore;

	let selectionIndex: number | undefined = undefined;
</script>

<Section>
	<Row>
		<FormField>
			<Switch bind:checked={$showExpiredCampaigns} />
			<span slot="label">Show expired</span>
		</FormField>
		<FormField>
			<Switch bind:checked={$showArchivedCampaigns} />
			<span slot="label">Show archived</span>
		</FormField>
	</Row>
</Section>
<section>
	<div class="campaign-list">
		<List class="demo-list" singleSelection bind:selectedIndex={selectionIndex}>
			{#each $campaigns as campaign}
				<Item
					on:SMUI:action={() => selectCampaign(campaign)}
					selected={$selectedCampaign.name === campaign.name}
					style="height:auto"
				>
					<div class="campaign-list-infos">
						<p class="nb-objects">{campaign.objects.length} objects</p>
						<p>{campaign.name}</p>
						<Link href={`/campaigns/${campaign.id}`}
							>ordel-ten.vercel.app/campaigns/{campaign.id}</Link
						>
					</div>
				</Item>
			{/each}
		</List>
	</div>
	<CampaignsListDetails campaign={$selectedCampaign} />
</section>

<style>
	section {
		display: flex;
		flex-direction: row;
		width: 100%;
	}

	.campaign-list {
		background-color: white;
		width: 40%;
	}

	.campaign-list-infos {
		display: flex;
		flex-direction: column;
	}

	.campaign-list-infos > p {
		padding: 0;
		margin: 0;
	}

	.nb-objects {
		font-size: 0.75rem;
	}
</style>
