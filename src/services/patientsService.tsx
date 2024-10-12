import { revalidatePath } from "next/cache";

export async function getData() {
	'use server'
	const response = await fetch(
		process.env.BACKEND_URL + "/patients/psychologist", {method: 'GET', next:{ revalidate: 30}, headers: {Authorization: `Bearer ${process.env.token}`}});
	return  await response.json();
}
