import { componentFunction, } from '@glacier/glacier';

import * as G from '@glacier/glacier/components';

export const Header = componentFunction((config) => {
	return <G.Header {...config}>
		{/* Make the `URL` relative. */}
		<G.Link class='x-title' reference={new URL('/', globalThis.window.location.href)}>MTB.cafe</G.Link>
	</G.Header>
});
