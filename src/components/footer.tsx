import { componentFunction, } from '@glacier/glacier';

import * as G from '@glacier/glacier/components';

export const Footer = componentFunction((config) => {
	return <G.Footer {...config}>
		MTB.CAFE

		<G.BlockQuote>
			OPEN-SOURCE MOUNTAIN BIKING APP. FREE FOREVER.
		</G.BlockQuote>
	</G.Footer>
});
