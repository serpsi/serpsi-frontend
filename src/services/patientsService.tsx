"use server";
import { cookies } from "next/headers";

export async function getPatientsData(isNewSession: boolean  = false) {
	const jwt = cookies().get("Authorization")?.value!;
	if (jwt) {
		const url = isNewSession ? "/patients/addmeeting" : "/patients/psychologist/";
		const response = await fetch(
			process.env.BACKEND_URL + url,
			{
				method: "GET",
				headers: {
					Authorization: jwt
				},
				cache: "no-store"
			}
		);
		return await response.json();
	}
}

export async function createPatient(formData: FormData) {
	const jwt = cookies().get("Authorization")?.value;
	const id = cookies().get("sub")?.value;

	const patientData = formData.get("patientData");

	if (patientData) {
		const patientDataObj = JSON.parse(patientData.toString());

		patientDataObj.psychologistId = id;

		// Atualize o patientData no FormData com o JSON atualizado
		formData.set("patientData", JSON.stringify(patientDataObj));
	}

	if (!jwt) {
		throw new Error(
			"Token de autenticação não encontrado. Por favor, faça login novamente."
		);
	}

	const response = await fetch(process.env.BACKEND_URL + "/patients", {
		method: "POST",
		headers: {
			Authorization: jwt
		},
		body: formData
	});

	if (!response.ok) {
		const errorData = await response.json();
		throw new Error(errorData.message || "Erro ao criar o paciente.");
	}

	return await response.json();
}
