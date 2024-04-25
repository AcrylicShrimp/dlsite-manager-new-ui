<script lang="ts">
	type ButtonType = 'primary' | 'secondary' | 'text';

	const Css: Record<ButtonType, string> = {
		primary:
			'border border-point/10 hover:border-point/35 bg-point/50 hover:bg-point/70 active:bg-point rounded shadow',
		secondary:
			'border border-2/5/20 hover:border-2/5/50 bg-2/5/70 hover:bg-2/5 active:bg-3/5 rounded shadow',
		text: 'hover:bg-1/5 active:bg-2/5 rounded'
	};

	export let type: ButtonType = 'secondary';
</script>

<button class={`min-w-20 h-8 px-3 transition-colors duration-200 ${Css[type]}`}><slot /></button>
