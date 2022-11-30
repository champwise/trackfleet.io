<script>
  import { onMount } from "svelte";

  let element;
  
  onMount(() => {
	let intitialWidth = element.clientWidth;
	let trackWidth = parseFloat(getComputedStyle(element).fontSize) * .9;
	let newWidth = intitialWidth + (trackWidth - (intitialWidth % trackWidth));
	element.style.width = newWidth + 'px';
	console.log(intitialWidth);
	console.log(newWidth);
	console.log(element.clientWidth);

  });
</script>

<li bind:this = {element}>
	<a href="/"><slot/></a>
</li>

<style>
	li {
		position: relative;
		display: block;
		overflow-x: clip;
		text-align: center;
	}

	li a::before {
		content: '';
		position: absolute;
		bottom: -0.5ch;
		left: -100%;
		width: 100%;
		height: 100%;
		transition: transform .7s cubic-bezier(0.19, 1, 0.22, 1);
		background-image: url(/images/track.svg);
		background-size: .9em;
		background-position: left bottom;
		background-repeat: repeat no-repeat;
	}

	li a:hover::before,
	li a:focus::before {
		content: '';
		transition: transform 0.7s cubic-bezier(0.19, 1, 0.22, 1);
		transform: translateX(100%);
		transform-origin: left;
	}
</style>
