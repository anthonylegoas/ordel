<script lang="ts">
	export let href: string;
	export let primary: boolean = false;
</script>

<a
	{href}
	class="button-shaped-round mdc-button mdc-top-app-bar__action-item mdc-ripple-upgraded"
	class:mdc-button--unelevated={primary}
>
	<div class="mdc-button__ripple" />
	<span class="mdc-button__label"> <slot /></span></a
>
