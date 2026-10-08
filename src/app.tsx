import * as G from '@glacier/glacier/components';
import * as UI from '@glacier/glacier/ui';

import { App, } from '@glacier/glacier/app';

import { Header, } from '#~/components/header.tsx';
import { Footer, } from '#~/components/footer.tsx';
import { Landing, } from '#~/components/landing.tsx';
import { Card, } from '#~/components/card.tsx';

import styleText from '#~/global.css' with { type: 'text'};

// TODO: i18n.
import indexMD from '#i18n/English/index.md' with { type: 'text', };

// TODO: Add router.

export const app: App = App.create(
	<>
		<G.Head>
			<G.Meta name="title">MTB.cafe</G.Meta>

			<G.Style>{styleText}</G.Style>
		</G.Head>
		<G.Body>
			<Header id='header'/>
			<G.Div id='content'>
				<Landing id='landing'/>
				
				<UI.Mint slots={{}}>
					{indexMD}
				</UI.Mint>
			</G.Div>
			<Footer id='footer'/>
		</G.Body>
	</>
);