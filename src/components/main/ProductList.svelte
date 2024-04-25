<script lang="ts">
	import type { ProductData } from '@app/lib/ProductData';
	import Product from './Product.svelte';

	export let data: ProductData[];
</script>

<section>
	{#each data as data}
		<Product {data} />
	{:else}
		<p>No products found.</p>
	{/each}
</section>
