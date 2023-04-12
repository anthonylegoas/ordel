<script lang="ts">
	import type { Campaign } from '$lib/store';
	import { Section as OrdelSection } from '$lib/cdk';

	export let campaign: Campaign;
</script>

<OrdelSection title="Objects" subtitle="{campaign.objects.length} objects">
	<ul>
		{#each campaign.objects as obj}
			<li>
				<img src={obj.imageUrl} alt="" style="width: 150px; height: 150px;" />
			</li>
		{/each}
	</ul>
</OrdelSection>

<style>
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
