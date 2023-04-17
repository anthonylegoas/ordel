<script lang="ts">
	import { Link } from '$lib/cdk';

	const pinnedBlogPost = {
		id: 1,
		title: 'Most Famous Sorting Algorithms in History',
		content:
			'Almost any list that comes out of a computer is sorted into some sort of order, and there are many more sorted lists inside computers that the user doesn’t see. Many clever algorithms have been devised for putting values into order efficiently. It turns out algorithms have a long and illustrious history stretching back as far as ancient Mesopotamian times. But which of these complex calculation processes could be considered some of the most important?Meet the most famous'
	};
	const blogPosts = [
		{
			id: 2,
			title: 'Discover Condorcet’s scrutin',
			content:
				'Commodo non nisi magna exercitation ea velit ipsum cupidatat sint occaecat eiusmod deserunt mollit deserunt...'
		},
		{
			id: 3,
			title: 'Nulla cillum exercitation aliquip',
			content:
				'Velit laboris est sint eu aute ex excepteur et duis ad ex. Incididunt mollit commodo fugiat et exercitation cillum consectetur aliquip officia nulla...'
		},
		{
			id: 4,
			title: 'Eiusmod consectetur deserunt',
			content:
				'Nostrud occaecat occaecat culpa irure anim velit nulla mollit incididunt consectetur deserunt. Nostrud ea enim sint eu voluptate nisi...'
		}
	];
</script>

<svelte:head>
	<title>Blog</title>
	<meta name="description" content="Ordel - blog" />
</svelte:head>

<h1>So you wanna sort your sh*t out</h1>

<div class="layout">
	<article class="main">
		<img alt="" src="/blog-post.png" />
		<h2>{pinnedBlogPost.title}</h2>
		<p>{pinnedBlogPost.content}</p>
		<Link href="/blog/{pinnedBlogPost.id}">Read full post</Link>
	</article>
	<div class="others">
		{#each blogPosts as post}
			<article class="other">
				<h2>{post.title}</h2>
				<p>{post.content}</p>
				<Link href="/blog/{post.id}">Read full post</Link>
			</article>
		{/each}
	</div>
</div>

<style>
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

	div.layout {
		background-color: white;
		border-radius: 5px;
		display: flex;
		padding: 25px;
		color: var(--mdc-theme-primary);
	}

	div.others {
		display: flex;
		flex-direction: column;
		width: 30%;
		margin-left: 15px;
	}

	article.main {
		width: 70%;
	}

	article {
		border-top: 10px solid var(--mdc-theme-secondary);
	}
</style>
