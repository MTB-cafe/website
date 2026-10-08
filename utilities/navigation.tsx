import * as Rynth from 'rynth';

import * as G from '#~/components.tsx';

export type Crumb = {
	path: string,
	name: string,
};

export function generateNavigation(crumbs: Array<Crumb>, title: string): Rynth.Component {
	const navigationStyle = new CSSStyleSheet({});
	const crumbStyle = new CSSStyleSheet();

	navigationStyle.replaceSync(`
		:host {
			display: inline;

			gap: 10px;
		}
	`);
	
	crumbStyle.replaceSync(`
		:host {
			text-decoration: none;

			&::after {
				content: " > ";
			}
		}
	`);

	return <G.Navigation style={navigationStyle}>
		{
			crumbs.map((crumb) => {
				return <G.Link style={crumbStyle} reference={crumb.path}>{crumb.name}</G.Link>;
			})
				.concat(<G.Text class='title'>{title}</G.Text>)
		}
	</G.Navigation>;
};