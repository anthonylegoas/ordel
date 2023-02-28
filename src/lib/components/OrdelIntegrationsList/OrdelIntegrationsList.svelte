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
			logoUrl:
				'https://img1.freepng.fr/20180526/ckp/kisspng-google-drive-google-logo-google-docs-5b09a332de26e8.4322140515273582589099.jpg'
		},
		{
			id: 'lfkrskfgl',
			name: 'Google Drive',
			logoUrl:
				'https://img1.freepng.fr/20180526/ckp/kisspng-google-drive-google-logo-google-docs-5b09a332de26e8.4322140515273582589099.jpg'
		},
		{
			id: 'lfkrskfgl',
			name: 'Google Drive',
			logoUrl:
				'https://img1.freepng.fr/20180526/ckp/kisspng-google-drive-google-logo-google-docs-5b09a332de26e8.4322140515273582589099.jpg'
		},
		{
			id: 'lfkrskfgl',
			name: 'Google Drive',
			logoUrl:
				'https://img1.freepng.fr/20180526/ckp/kisspng-google-drive-google-logo-google-docs-5b09a332de26e8.4322140515273582589099.jpg'
		},
		{
			id: 'lfkrskfgl',
			name: 'Trello',
			logoUrl:
				'https://img1.freepng.fr/20180526/ckp/kisspng-google-drive-google-logo-google-docs-5b09a332de26e8.4322140515273582589099.jpg'
		},
		{
			id: 'lfkrskfgl',
			name: 'Gitlab',
			logoUrl:
				'https://img1.freepng.fr/20180526/ckp/kisspng-google-drive-google-logo-google-docs-5b09a332de26e8.4322140515273582589099.jpg'
		},
		{
			id: 'lfkrskfgl',
			name: 'Dropbox',
			logoUrl:
				'https://img1.freepng.fr/20180526/ckp/kisspng-google-drive-google-logo-google-docs-5b09a332de26e8.4322140515273582589099.jpg'
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
		height: 32px;
		width: 32px;
		padding: 0 6px;
	}

	ul {
		display: block;
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
