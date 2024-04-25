<script lang="ts">
	import {
		ProductAge,
		ProductType,
		type ProductData,
		ProductCreatorMetadataType
	} from '@app/lib/ProductData';
	import ProductList from '@comp/main/ProductList.svelte';

	const data: ProductData[] = [
		{
			id: 'VJ013198',
			name: {
				japanese:
					'\u307E\u3044\u3066\u3064 Last Run!! Vocal Complete Album\uFF0Bbgm arrange collection'
			},
			age: ProductAge.All,
			type: ProductType.Music,
			maker: {
				id: 'VG02511',
				name: {
					japanese: 'Lose'
				}
			},
			icon: {
				main: 'https://img.dlsite.jp/modpub/images2/work/professional/VJ014000/VJ013198_img_main.jpg',
				small:
					'https://img.dlsite.jp/modpub/images2/work/professional/VJ014000/VJ013198_img_sam.jpg'
			},
			creatorMetadata: [
				{
					type: ProductCreatorMetadataType.ScenarioBy,
					name: '\u9032\u884C\u8C79'
				},
				{
					type: ProductCreatorMetadataType.CreatedBy,
					name: 'cura'
				},
				{
					type: ProductCreatorMetadataType.CreatedBy,
					name: 'cura'
				},
				{
					type: ProductCreatorMetadataType.CreatedBy,
					name: 'cura'
				}
			],
			series: {
				id: 'SRI0000026275',
				name: '\u8D85\u56C1\u304D\uFF01'
			},
			registeredAt: '2020-11-29 00:00:00',
			upgradedAt: undefined,
			purchasedAt: '2020-11-04T14:05:48.000000Z'
		}
	];
</script>

<h1 class="text-xl mb-4">Product List</h1>
<ProductList {data} />
