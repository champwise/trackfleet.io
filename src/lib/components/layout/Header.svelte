<script>
	import Link from './Link.svelte';
	import Logo from './Logo.svelte';



</script>

<header>
	<div class="container px-6">
		<nav class="flex items-center justify-between">
			<div class="flex justify-start ">
				<Logo />
			</div>
			<ul class=" flex justify-between space-x-3 text-lg">
				<Link>sdfjlkg</Link>
				<Link>hgjfhfghjfgjh</Link>
				<Link>fgjhfgjhfgjhfgjhfh</Link>
				<Link>fghjfgjhfgjhfgjhfgjhfgjh</Link>
		</nav>
	</div>
</header>

<style>
	header {
		background-color: var(--accent);
	}

	ul {
		color: var(--white);
	}
</style>
