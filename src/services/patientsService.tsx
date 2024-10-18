import { cookies } from "next/headers";

export async function getData() {
	"use server";
	const jwt = cookies().get("Authorization")?.value!;
	if (jwt) {
		const sub = cookies().get("sub")?.value!;
		const response = await fetch(
			process.env.BACKEND_URL + "/patients/psychologist/8487fcd2-542a-4abc-8b41-e016fa58bdde",
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
