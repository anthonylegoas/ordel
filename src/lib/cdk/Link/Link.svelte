<script lang="ts">
	export let href: string;
</script>

<a {href} class="button-shaped-round mdc-button mdc-top-app-bar__action-item mdc-ripple-upgraded">
	<div class="mdc-button__ripple" />
	<span class="mdc-button__label"> <slot /></span></a
>
