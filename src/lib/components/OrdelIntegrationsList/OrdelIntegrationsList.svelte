<script lang="ts">
	// @todo link to a store
	interface Integration {
		id: string;
		name: string;
		logoUrl: string;
	}

	const integrations: Integration[] = [
		{
			id: 'lfkrskfgl',
			name: 'Google Drive',
			logoUrl: '/logos/g-drive.png'
		},
		{
			id: 'apozierit',
			name: 'Asana',
			logoUrl: '/logos/asana.png'
		},
		{
			id: 'mlkflzzo',
			name: 'Dribbble',
			logoUrl: '/logos/dribbble.png'
		},
		{
			id: 'lfmkfggfpzl',
			name: 'Gitlab',
			logoUrl: '/logos/gitlab.png'
		},
		{
			id: 'okvlkfssq',
			name: 'Notion',
			logoUrl: '/logos/notion.png'
		},
		{
			id: 'vsdqcvuis',
			name: 'Trello',
			logoUrl: '/logos/trello.png'
		},
		{
			id: 'pfosdlvzaa',
			name: 'Twitter',
			logoUrl: '/logos/twitter.png'
		}
	];
</script>

<ul>
	{#each integrations as integration}
		<li>
			<img src={integration.logoUrl} alt="" /><span>{integration.name}</span>
		</li>
	{/each}
</ul>

<style>
	img {
		height: auto;
		width: 24px;
		padding: 0 6px;
	}

	ul {
		display: block;
		padding: 0 12px;
		list-style: none;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		max-width: 100%;
	}

	li {
		display: flex;
		align-items: center;
		margin: 12px;
	}

	ul > * + * {
		margin-left: 20px;
	}
</style>
