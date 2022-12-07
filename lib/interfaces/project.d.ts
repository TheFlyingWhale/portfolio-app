import { MetaData } from "./metaData";

export interface IndexProject {
	title: string;
	subtitle: string;
	description: string;
	imageUrl: string;
	slug: Slug;
}

export interface Project extends MetaData {
	//Meta
	order?: number;
	active?: boolean;
	slug?: string;
	//Surface
	title: string;
	subtitle: string;
	description: string;
	//Content
	hero: Hero;
	pageSections: (
		| ImageSection
		| ImageCollectionSection
		| TextElement
		| TextCollectionSection
	)[];
}

interface ImageSection extends PageSectionMeta {
	title: string;
	includeTitle: boolean;
	subtitle: string;
	text: string;
	imageUrl: string;
	caption: string;
	displayCaption: boolean;
	withBorderRadius: boolean;
	withShadow: boolean;
	align: string;
	height: number | undefined;
	width: number | undefined;
}

interface ImageCollectionSection extends PageSectionMeta {
	collection: ImageSection[];
}

interface TextSection extends PageSectionMeta {
	title: string;
	includeTitle: boolean;
	subtitle: string;
	body: string;
	align: string;
}

interface TextCollectionSection extends PageSectionMeta {
	collection: TextElement[];
}

interface PageSectionMeta {
	_key?: string;
	_type:
		| "textElement"
		| "imageElement"
		| "textCollection"
		| "imageCollection";
}

interface CoverImage {
	_type: string;
	asset: Asset;
}

interface Asset {
	_type: string;
	_ref: string;
}

interface Slug {
	current: string;
	_type: string;
}

interface Hero {
	header: string;
	subheader: string;
	text: string;
	image: ImageSection;
}
