import * as Rynth from 'rynth';

import { app, } from '#~/app.tsx';

// Apply plugins here.

// Replace the current document with the rendered app.
globalThis.document.documentElement.replaceWith(app.render().documentElement);