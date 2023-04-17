<script lang="ts">
	import type { Campaign } from '$lib/store';
	import { Section as OrdelSection } from '$lib/cdk';
	import Chart from 'svelte-frappe-charts';

	export let campaign: Campaign;

	const votes = [425, 400, 398, 387, 340, 322, 301, 294, 290, 240];
	const presentations = [14, 32, 40, 42, 56, 101, 95, 88, 88, 98];
	const totalVotes = votes.reduce((sum, a) => sum + a, 0);
	const data = {
		labels: ['n°8', 'n°9', 'n°1', 'n°7', 'n°12', 'n°11', 'n°1', 'n°5', 'n°4', 'n°3'],
		datasets: [
			{
				name: 'Votes',
				chartType: 'bar',
				values: votes
			},
			{
				name: 'Presentations',
				chartType: 'bar',
				values: presentations
			}
		]
	};
</script>

<OrdelSection title="Ranking" subtitle="{totalVotes} votes">
	<Chart
		{data}
		type="bar"
		height={300}
		colors={['#21005D', '#e2c6f3']}
		barOptions={{
			stacked: true,
			spaceRatio: 0.1
		}}
	/>
</OrdelSection>
