export async function getData() {
	'use server'
	const response = await fetch(
		process.env.BACKEND_URL + "/patients/psychologist", {method: 'GET'});
	return response.json();
}
