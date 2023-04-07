import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ url, params, fetch }) => {
	const response = await fetch(`/explore/${params.slug}.json`);
	const { sections, data, header, type } = await response.json();
	const path = url.pathname;
	// console.log(routeId, params, path, sections, header, type);
	return {
		sections,
		header,
		data,
		type,
		path,
	};
};
