<script lang="ts">
	import {
		localize,
		ProductCreatorMetadataType,
		type ProductCreatorMetadata,
		type ProductData
	} from '@app/lib/ProductData';
	import ProductAge from './ProductAge.svelte';
	import ProductType from './ProductType.svelte';
	import ProductMaker from './ProductMaker.svelte';
	import ProductCreator from './ProductCreator.svelte';
	import Button from '../Button.svelte';

	export let data: ProductData;

	$: createdBy = extractCreatorMetadataByType(
		data.creatorMetadata,
		ProductCreatorMetadataType.CreatedBy
	);
	$: scenarioBy = extractCreatorMetadataByType(
		data.creatorMetadata,
		ProductCreatorMetadataType.ScenarioBy
	);
	$: illustBy = extractCreatorMetadataByType(
		data.creatorMetadata,
		ProductCreatorMetadataType.IllustBy
	);
	$: voiceBy = extractCreatorMetadataByType(
		data.creatorMetadata,
		ProductCreatorMetadataType.VoiceBy
	);
	$: musicBy = extractCreatorMetadataByType(
		data.creatorMetadata,
		ProductCreatorMetadataType.MusicBy
	);
	$: otherBy = extractCreatorMetadataByType(
		data.creatorMetadata,
		ProductCreatorMetadataType.OtherBy
	);

	function extractCreatorMetadataByType(
		metadata: ProductCreatorMetadata[],
		type: ProductCreatorMetadataType
	): string[] {
		return metadata.filter((meta) => meta.type === type).map((meta) => meta.name);
	}
</script>

<div class="flex flex-row items-stretch justify-start">
	<img
		src={data.icon.main}
		width="128"
		height="96"
		alt={`thumbnail of ${localize(data.name)}`}
		class="w-[128px] h-[96px] object-cover rounded"
	/>
	<div class="flex-1 flex flex-col items-start justify-start w-full min-w-0 ml-2">
		<div class="flex flex-row items-start justify-start">
			<ProductAge age={data.age} />
			<span class="inline-block flex-none w-2" />
			<ProductType type={data.type} />
		</div>
		<p
			class="text-lg mt-2 min-w-0 max-w-full text-ellipsis overflow-hidden whitespace-nowrap"
			title={localize(data.name)}
		>
			{localize(data.name)}
		</p>
		<ProductMaker maker={localize(data.maker.name)} />
		<div class="flex flex-row items-center justify-end w-full mt-2">
			<Button type="text">Visit Page</Button>
			<span class="flex-none w-2" />
			<Button type="primary">Download</Button>
		</div>
		<!-- {#if createdBy.length}
			<ProductCreator type={ProductCreatorMetadataType.CreatedBy} names={createdBy} />
		{/if}
		{#if scenarioBy.length}
			<ProductCreator type={ProductCreatorMetadataType.ScenarioBy} names={scenarioBy} />
		{/if}
		{#if illustBy.length}
			<ProductCreator type={ProductCreatorMetadataType.IllustBy} names={illustBy} />
		{/if}
		{#if voiceBy.length}
			<ProductCreator type={ProductCreatorMetadataType.VoiceBy} names={voiceBy} />
		{/if}
		{#if musicBy.length}
			<ProductCreator type={ProductCreatorMetadataType.MusicBy} names={musicBy} />
		{/if}
		{#if otherBy.length}
			<ProductCreator type={ProductCreatorMetadataType.OtherBy} names={otherBy} />
		{/if} -->
		<p></p>
	</div>
</div>
