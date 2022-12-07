export interface About {
	title: string;
	description: string;
	profilePicture: string;
	educationSections: EductionSection[];
}

export interface EductionSection {
	subject: string;
	degree: string;
	school: string;
	startDate: string;
	endDate: string;
}
