import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
 
export function load({ params }) {
    console.log(params.slug);
    return {
        title: 'Hello world!',
        content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
    };
}