<script lang="ts">
	import { Row, Section } from '@smui/top-app-bar';
	import Switch from '@smui/switch';
	import FormField from '@smui/form-field';
	import List, { Item } from '@smui/list';
	import { Link, Section as OrdelSection } from '$lib/cdk';
	import { campaignsStore } from '$lib/store';

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
	<div class="campaign-detail">
		<h2>{$selectedCampaign.name}</h2>
		<p>{$selectedCampaign.description}</p>
		<OrdelSection title="Participation" subtitle="1500+ displays">
			<p>to do</p>
		</OrdelSection>
		<OrdelSection title="Rankings" subtitle="700+ votes">
			<p>to do</p>
		</OrdelSection>
		<OrdelSection title="Objects" subtitle="{$selectedCampaign.objects.length} objects">
			<ul>
				{#each $selectedCampaign.objects as obj}
					<li>
						<img src={obj.imageUrl} alt="" style="width: 150px; height: 150px;" />
					</li>
				{/each}
			</ul>
		</OrdelSection>
	</div>
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

	.campaign-detail {
		background-color: white;
		padding: 1rem;
		width: 60%;
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
