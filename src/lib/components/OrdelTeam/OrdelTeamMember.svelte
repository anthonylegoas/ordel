<script lang="ts">
	export let description: string[];
	export let name: string;
	export let photoUrl: string;
	export let twitter: string;
	export let linkedin: string;
</script>

<article>
	<div class="photo">
		<img alt={name} src={photoUrl} />
	</div>
	<div class="desc">
		<h2>{name}</h2>
		{#each description as desc}
			<p>{desc}</p>
		{/each}
		<section>
			<ul>
				<li>
					<a href={twitter} target="_blank" rel="noreferrer"
						><img
							alt="Voir le profil Twitter de {name}"
							class="social"
							src="/logos/twitter.jpeg"
						/></a
					>
				</li>
				<li>
					<a href={linkedin} target="_blank" rel="noreferrer"
						><img
							alt="Voir le profil LinkedIn de {name}"
							class="social"
							src="/logos/linkedin.png"
						/></a
					>
				</li>
			</ul>
		</section>
	</div>
</article>

<style>
	img {
		height: 120px;
		width: 120px;
		margin-right: 25px;
		border-radius: 50%;
	}

	img.social {
		height: 30px;
		width: 30px;
		margin: 0 5px;
	}

	ul {
		list-style: none;
		display: flex;
		justify-content: flex-end;
	}

	article {
		display: flex;
		border-radius: 5px;
		background-color: white;
		padding: 25px;
		color: var(--mdc-theme-primary);
		width: 450px;
		margin: 25px;
	}

	h2 {
		font-family: 'Source Serif Pro';
		margin-bottom: 0;
	}
</style>
