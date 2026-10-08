import * as Rynth from '@rynth/rynth';

import { componentFunction, } from '@glacier/glacier';

import * as G from '@glacier/glacier/components';

import type { CommonConfig, } from '@glacier/glacier';

export type EpicTextConfig = {
	text: [string, string[]],
} & CommonConfig;

export const EpicText = componentFunction<EpicTextConfig>((config) => {
	// TODO: Handle incorrect types with *Glacier*.

	const startString = config.text[0];

	const descriptor = Rynth.signal(['']);
	let descriptorIndex = -1;

	const typewriterIndex = Rynth.signal(0);

	let direction = 1;

	const nextDescriptor = () => {
		descriptor.value = (config.text[1][++ descriptorIndex] ?? config.text[1][descriptorIndex = 0]).split('').concat(' '.repeat(5).split(''));
		typewriterIndex.value = -1;
		direction = 1;
	};
	
	// TODO: Replace with *Glacier* functionality.
	setInterval(nextDescriptor, 4000);

	nextDescriptor();


	const typewriterText = typewriterIndex.map((index) => {
		return descriptor.value.slice(0, index).join('');
	});

	setInterval(() => {
		if (typewriterIndex.value == descriptor.value.length) {
			direction = -1;
		};
		if (typewriterIndex.value != 0 || direction != -1) {
			typewriterIndex.value += direction;
		};
	}, 100);

	return <G.Span class='epic-text'>
		<G.Text>{startString}</G.Text>
		<G.Text class='x-description'>{typewriterText}</G.Text>
	</G.Span>;
});