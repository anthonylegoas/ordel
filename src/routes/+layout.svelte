<script lang="ts">
	import Header from './Header.svelte';
	import './styles.css';
</script>

<Header />

<main>
	<slot />
</main>

<style>
	/* Hide everything above this component. */
	:global(#smui-app),
	:global(body),
	:global(html) {
		display: block !important;
		height: auto !important;
		width: auto !important;
		position: static !important;
	}
</style>
