import { revalidatePath } from "next/cache";

export async function getData() {
	'use server'
	const response = await fetch(
		process.env.BACKEND_URL + "/patients/psychologist", {method: 'GET', next:{ revalidate: 30}});
	return  await response.json();
}
