export interface ProductData {
	id: string;
	name: LocalizedString;
	age: ProductAge;
	type: ProductType;
	maker: ProductMaker;
	icon: ProductIcon;
	creatorMetadata: ProductCreatorMetadata[];
	series?: ProductSeries;
	registeredAt?: string;
	upgradedAt?: string;
	purchasedAt: string;
}

export enum ProductAge {
	All = 'All',
	R15 = 'R15',
	R18 = 'R18',
	Unknown = 'Unknown'
}

export enum ProductType {
	Adult = 'Adult',
	Doujinsji = 'Doujinsji',
	Software = 'Software',
	Game = 'Game',
	Action = 'Action',
	Adventure = 'Adventure',
	AudioMaterial = 'AudioMaterial',
	Comic = 'Comic',
	DigitalNovel = 'DigitalNovel',
	Other = 'Other',
	OtherGame = 'OtherGame',
	Illust = 'Illust',
	ImageMaterial = 'ImageMaterial',
	Manga = 'Manga',
	Anime = 'Anime',
	Music = 'Music',
	Novel = 'Novel',
	Puzzle = 'Puzzle',
	Quiz = 'Quiz',
	RolePlaying = 'RolePlaying',
	Gekiga = 'Gekiga',
	Simulation = 'Simulation',
	Voice = 'Voice',
	Shooter = 'Shooter',
	Tabletop = 'Tabletop',
	Utility = 'Utility',
	Typing = 'Typing',
	SexualNovel = 'SexualNovel',
	VoiceComic = 'VoiceComic',
	Unknown = 'Unknown'
}

export interface ProductMaker {
	id: string;
	name: LocalizedString;
}

export interface ProductIcon {
	main: string;
	small: string;
}

export interface ProductCreatorMetadata {
	type: ProductCreatorMetadataType;
	name: string;
}

export enum ProductCreatorMetadataType {
	CreatedBy = 'CreatedBy', // 저자
	ScenarioBy = 'ScenarioBy', // 시나리오
	IllustBy = 'IllustBy', // 일러스트
	VoiceBy = 'VoiceBy', // 성우
	MusicBy = 'MusicBy', // 음악
	OtherBy = 'OtherBy' // 기타
}

export interface ProductSeries {
	id: string;
	name: string;
}

export interface LocalizedString {
	japanese?: string;
	english?: string;
	korean?: string;
	taiwanese?: string;
	chinese?: string;
}

export function localize(localized: LocalizedString, lang?: keyof LocalizedString): string {
	if (lang) {
		const str = localized[lang];
		if (str) return str;
	}

	return localized.japanese ?? '';
}
