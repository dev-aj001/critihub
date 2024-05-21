import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	if (params.slug === '1') {
		return {
			title: 'Pelicula1',
			content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
		};
	}
    if (params.slug === '2') {
		return {
			title: 'Pelicula2',
			content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
		};
	}

	error(404, 'Not found');
}