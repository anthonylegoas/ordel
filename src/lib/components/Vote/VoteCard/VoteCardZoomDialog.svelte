<script lang="ts">
	import Dialog, { Header, Title, Content, Actions } from '@smui/dialog';
	import IconButton from '@smui/icon-button';
	import { Image } from '@smui/image-list';
	import { createEventDispatcher } from 'svelte';

	export let imageUrl: string;
	export let open: boolean = false;
	export let proposalIndex: number;

	const dispatch = createEventDispatcher();
	const closeHandler = () => dispatch('closeModal');
	$: title = `Proposal n°${proposalIndex}`;
</script>

<Dialog
	bind:open
	fullscreen
	aria-labelledby="fullscreen-title"
	aria-describedby="fullscreen-content"
	on:SMUIDialog:closed={closeHandler}
>
	<Header>
		<Title id="fullscreen-title">{title}</Title>
		<IconButton action="close" class="material-icons">close</IconButton>
	</Header>
	<Content id="fullscreen-content">
		<Image src={imageUrl} alt="Zoomed proposal" />
	</Content>
</Dialog>
