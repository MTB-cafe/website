import * as Rynth from 'rynth';

import { componentFunction, } from '@glacier/glacier';
import * as G from '@glacier/glacier/components';

export const Card = componentFunction((config) => {
	return <G.Div class='card-container'>
		<G.Div class='card'>
			{config.children}
		</G.Div>
	</G.Div>;
});