<script lang="ts">
	import type { ProductCreatorMetadataType } from '@app/lib/ProductData';

	const LabelText: Record<ProductCreatorMetadataType, string> = {
		CreatedBy: 'Created by',
		ScenarioBy: 'Scenario by',
		IllustBy: 'Illust by',
		VoiceBy: 'Voice by',
		MusicBy: 'Music by',
		OtherBy: 'Other by'
	};

	export let type: ProductCreatorMetadataType;
	export let names: string[];

	$: label = LabelText[type];
</script>

<div class="flex flex-row items-center justify-start text-base">
	<span class="inline-block w-[96px] text-3/5">{label}</span>
	{#each names as name, index}
		<span class="ml-2">{name}</span>
		{#if index < names.length - 1}
			<span>,</span>
		{/if}
	{/each}
</div>
