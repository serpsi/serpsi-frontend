"use server";
import { cookies } from "next/headers";

export async function getPatientsData() {
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

export async function createPatient(formData: Record<string, any>) {
	const jwt = cookies().get("Authorization")?.value;

	if (!jwt) {
		throw new Error(
			"Token de autenticação não encontrado. Por favor, faça login novamente."
		);
	}

	const response = await fetch(process.env.BACKEND_URL + "/patients", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: jwt
		},
		body: JSON.stringify(formData)
	});

	if (!response.ok) {
		const errorData = await response.json();
		throw new Error(errorData.message || "Erro ao criar o paciente.");
	}

	return await response.json();
}
