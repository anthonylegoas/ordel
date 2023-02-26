<script lang="ts">
	import { Row, Section } from '@smui/top-app-bar';
	import Button, { Label } from '@smui/button';

	import Switch from '@smui/switch';
	import FormField from '@smui/form-field';
	import ImageList, { ImageAspectContainer, Image, Supporting } from '@smui/image-list';
	import List, { Item } from '@smui/list';

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

<Row>
	<Section>
		<h1>My campaigns</h1>
	</Section>
	<Section align="end" toolbar>
		<Button
			on:click={() => null}
			color="secondary"
			variant="unelevated"
			class="button-shaped-round"
		>
			<Label>New campaign</Label>
		</Button>
	</Section>
</Row>
<Section>
	<Row>
		<FormField>
			<Switch bind:checked={$showExpiredCampaigns} />
			<span slot="label">Show expired campaiges</span>
		</FormField>
		<FormField>
			<Switch bind:checked={$showArchivedCampaigns} />
			<span slot="label">Show archived campaigns</span>
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
						<p class="link">{campaign.objects}</p>
					</div>
				</Item>
			{/each}
		</List>
	</div>
	<div class="campaign-detail">
		<h2>{$selectedCampaign.name}</h2>
		<p>{$selectedCampaign.description}</p>
		<ImageList class="my-image-list-standard">
			{#each $selectedCampaign.objects as _unused, i}
				<Item>
					<ImageAspectContainer>
						<Image src="https://place-hold.it/190x238?text=4x5&fontsize=23" alt="Image {i + 1}" />
					</ImageAspectContainer>
					<Supporting>
						<Label>{i + 1} votes</Label>
					</Supporting>
				</Item>
			{/each}
		</ImageList>
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

	.nb-objects,
	.link {
		font-size: 0.75rem;
	}

	.link {
		color: var(--mdc-theme-primary);
	}
</style>
