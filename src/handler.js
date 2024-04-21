// handler.js

import Resolver from '@forge/resolver';

const resolver = new Resolver();


resolver.define('fetchTodos', async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        if (!response.ok) {
            throw new Error('Failed to fetch todos');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching todos:', error);
        return [];
    }
});

export const handler = resolver.getDefinitions();
