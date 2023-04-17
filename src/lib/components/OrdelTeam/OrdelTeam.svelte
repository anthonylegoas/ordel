<script lang="ts">
	import OrdelTeamMember from './OrdelTeamMember.svelte';
	const data = [
		{
			name: 'Karine',
			photoUrl:
				'https://media.licdn.com/dms/image/C4D03AQFIMTgnTY2-pA/profile-displayphoto-shrink_800_800/0/1586560348362?e=2147483647&v=beta&t=iAsKcqUdYfso_tXrGLZgtIJwak6baDfE9zPgeRasObA',
			description: [
				'Her smartphone apps are sorted by color, her books by size and author. She devotes much of her work to defining, sorting and connecting things (the lost art of taxonomy).',
				'She had that crazy Ordel idea and is responsible for what is not code in the product.'
			],
			twitter: 'https://twitter.com/karinesabatier',
			linkedin: 'https://www.linkedin.com/in/karinesabatier/'
		},
		{
			name: 'Anthony',
			photoUrl: 'https://pbs.twimg.com/profile_images/1450531662232793091/SWqZfLTp_400x400.jpg',
			description: [
				'Every single line of code in Ordel is his and has been crafted with love (and Svelte), to keep it simple and fast.',
				'As he describes himself as "a bit" rigorous, it was only natural for Anthony to participate in this beautiful enterprise of tidying up the world a bit.'
			],
			twitter: 'https://twitter.com/anthony_legoas',
			linkedin: 'https://www.linkedin.com/in/anthonylegoas/'
		}
	];
</script>

<div>
	{#each data as member}
		<OrdelTeamMember {...member} />
	{/each}
</div>

<style>
	div {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}
</style>
