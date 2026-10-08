import { Component, } from 'rynth';

/**
 * A simple *Pico* example.
 * This demo shows just how easy *Glacier* really is!
 * 
 * @returns {Component}.
 */
export function usePico(color: string = 'jade'): Component {
	return new Component({
		href: `https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.fluid.classless.${color}.min.css`,
		rel: 'stylesheet',
		children: [],
	}, Symbol('link'));
};