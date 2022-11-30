<script>
    import "../app.css";
/* 	import '$styles/reset.css'; */
	import '$styles/root.css';
	/* import '$styles/globals.css'; */

    import Header from '$layout/Header.svelte';
	import Footer from '$components/layout/Footer.svelte';
  </script>
  
  <Header/>
  <div class="container">
      <slot />
  </div>