import { componentFunction, } from '@glacier/glacier';

import * as G from '@glacier/glacier/components';

import { EpicText, } from '#~/components/epic-text.tsx';

export const Landing = componentFunction((_config) => {
	// TODO: i18n.
	return <G.Div class='hero'>
		{/* Hero */}
		<EpicText text={[
			"Mountain Biking is ",
			[
				"for everyone",
				"a lifestyle",
				"fun",
				"a way of living",
			],
		]}></EpicText>
	</G.Div>;
});