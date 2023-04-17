<script lang="ts">
	import type { Campaign } from '$lib/store';
	import { Section as OrdelSection } from '$lib/cdk';
	import Chart from 'svelte-frappe-charts';

	export let campaign: Campaign;

	const getLast10Days = () => {
		const result = [];
		for (let i = 0; i < 10; i++) {
			let d = new Date();
			d.setDate(d.getDate() - i);
			result.push(d.toLocaleDateString('en-US'));
		}
		return result;
	};

	const voteHistory = [425, 240, 130, 235, 80, 352, 170, 224, 380, 200];
	const totalVotesLast10Days = voteHistory.reduce((sum, a) => sum + a, 0);

	const data = {
		labels: getLast10Days(),
		datasets: [
			{
				name: 'Votes',
				chartType: 'line',
				values: voteHistory
			}
		]
	};
</script>

<OrdelSection title="Participation" subtitle="{totalVotesLast10Days} votes last 10 days">
	<Chart
		{data}
		type="bar"
		height={180}
		colors={['#21005D']}
		barOptions={{
			stacked: true,
			spaceRatio: 0.1
		}}
	/>
</OrdelSection>
