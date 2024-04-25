<script lang="ts">
	import type { ProductAge } from '@app/lib/ProductData';

	const BgCssAge: Record<ProductAge, string> = {
		All: 'bg-[#22910c]',
		R15: 'bg-[#b38510]',
		R18: 'bg-[#bf2a13]',
		Unknown: 'bg-[#525252]'
	};

	export let age: ProductAge;
</script>

<span
	class={`text-sm w-8 h-[1.5em] flex flex-row items-center justify-center ${
		BgCssAge[age] ?? BgCssAge.Unknown
	} rounded`}>{age}</span
>
