import { cookies } from "next/headers";

export async function getPatientsData() {
	"use server";
	const jwt = cookies().get("Authorization")?.value!;
	if (jwt) {
		const sub = cookies().get("sub")?.value!;
		const response = await fetch(
			process.env.BACKEND_URL + "/patients/psychologist/" + sub,
			{
				method: "GET",
				next: { revalidate: 30 },
				headers: {
					Authorization: jwt
				}
			}
		);
		return await response.json();
	}
}
