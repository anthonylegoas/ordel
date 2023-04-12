<script lang="ts">
	import { Icon } from '@smui/icon-button';

	export let title: string;
	export let subtitle: string;
</script>

<section>
	<header>
		<div class="left">
			<h3>{title}</h3>

			<h4><Icon class="material-icons">bar_chart</Icon><span>{subtitle}</span></h4>
		</div>
		<div class="right" />
	</header>
	<slot />
</section>

<style>
	section {
		border: 1px solid var(--mdc-theme-primary);
		border-radius: 25px;
		padding: 0;
		margin: 20px 15px;
		padding: 20px 15px;
	}

	header {
		padding: 5px 0;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	.left {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
	}

	.left > h3,
	h4 {
		margin: 0;
		color: var(--mdc-theme-primary);
	}

	h4 {
		display: flex;
		align-items: center;
	}

	span {
		padding-left: 5px;
	}
</style>
