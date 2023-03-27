import type { PageServerLoad } from './$types';
import { findPetsByStatus } from '$lib/api';

export const load = (async ({ fetch }) => {
	const request = findPetsByStatus({ status: 'available' }, fetch);
	const resp = await request.onData;
	if (resp.ok) {
		return { pets: resp.data, error: false };
	} else {
		return { pets: [], error: true };
	}
}) satisfies PageServerLoad;
