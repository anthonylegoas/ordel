<script>
	import Paper, { Content } from '@smui/paper';
	import OrdelIntegrationsList from '../OrdelIntegrationsList/OrdelIntegrationsList.svelte';
</script>

<Paper variant="unelevated">
	<Content class="paper-content-instructions">
		<ol>
			<li><b>Connectez Ordel</b> à une source d'objects à trier</li>
			<li><b>Créez une campagne</b> de vote avec vos critères</li>
			<li><b>Diffusez</b> et laissez vos utilisateurs ordonner</li>
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
