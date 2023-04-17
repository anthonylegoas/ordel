<script lang="ts">
	import { BannerBis, Link } from '$lib/cdk';
	import { OrdelTeam } from '$lib/components';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="Ordel - about" />
</svelte:head>

<h1>About Ordel</h1>
<div class="section-1">
	<BannerBis />
	<section>
		<h2>Helping decisions in a complex world</h2>
		<p>
			Ordel will not make simple decisions for you in a complex world. Only human beings are able to
			do that and it takes much more than algorithms to make good ones. But hopefully Ordel can help
			instruct part of your decisions: the ones that partly rely on a bit of tidiness and order.
		</p>
		<p>
			When everything is a mess, a good place to start to figure things out is to try and sort them.
			This won’t be enough but it’s a start. What Ordel gives you is a tool to do that on your own
			or collectively if you want to add some collective intelligence to the process.
		</p>
	</section>
	<section>
		<h2>Democracy to order, your final cut to decide</h2>
		<p>
			Ordel is also a good tool to support democracy because it offers different kinds of ballots
			and sorting algorithms. Read more in the Frequently Asked Questions about Ordel.
		</p>
	</section>
	<Link href="/blog">Read some uses cases on the blog</Link>
</div>

<h1>We are Ordel</h1>
<OrdelTeam />

<style>
	div.section-1 {
		border-radius: 5px;
		background-color: white;
		padding: 25px;
		color: var(--mdc-theme-primary);
		display: flex;
		flex-direction: column;
	}

	section {
		margin: 5px 0;
	}

	h1 {
		text-align: center;
		color: var(--mdc-theme-primary);
		font-family: 'Source Serif Pro';
		font-style: normal;
		font-weight: 900;
		font-size: 57px;
		line-height: 64px;
		margin: 25px 0;
	}

	h2 {
		margin-bottom: 0;
	}
</style>
