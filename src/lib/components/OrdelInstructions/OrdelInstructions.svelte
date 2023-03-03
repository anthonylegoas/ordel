<script>
	import Paper, { Content } from '@smui/paper';
	import OrdelIntegrationsList from '../OrdelIntegrationsList/OrdelIntegrationsList.svelte';
</script>

<Paper variant="unelevated">
	<Content class="paper-content-instructions">
		<ol>
			<li><b>Connect Ordel</b> to a data source</li>
			<li><b>Create a voting campaign</b> with your order criteria as prompt</li>
			<li><b>Spread the word</b> and let people order your stuff</li>
		</ol>
		<OrdelIntegrationsList />
	</Content>
</Paper>

<style>
	:global(.paper-content-instructions) {
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 100%;
	}
</style>
