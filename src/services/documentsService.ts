import { cookies } from "next/headers";
import { getPatientsData } from "./patientsService";
import { Document } from "@/models/Entities/Document";
import { DocumentColumns } from "@/app/(pages)/documents/columns";

export async function getData() {
	"use server";
	const jwt = cookies().get("Authorization")?.value!;
	if (jwt) {
		const patients = await getPatientsData();
		if (!patients) {
			return;
		}
		let response: DocumentColumns[] = [];
		await Promise.all([patients.forEach(async (patient: { id: string; name: string }) => {
			let data = await fetch(
				process.env.BACKEND_URL + "/documents/patients/" + patient.id,
				{
					method: "GET",
					next: { revalidate: 30 },
					headers: {
						Authorization: jwt
					}
				}
			);
			let documents = await data.json();
			documents?.forEach((value: Document) => {
				const res: DocumentColumns = {
					_id: value._id._id,
					_title: value._title,
					_docLink: value._docLink,
					_name: patient.name,
					_createDate: new Date().toDateString()
				}
				response.push(res);
			})
		})]);
		return response;
	}
}
