import { Patient } from "@/models";
import moment from "moment";
export async function getData(id: string): Promise<Patient> {
	'use server'
	const response = await fetch(process.env.BACKEND_URL + "/patients/" + id);
	return response.json();
}

export function formatPhone(phone: {
	_ddi: string;
	_ddd: string;
	_number: string;
}) {
	return `${phone._ddi} (${phone._ddd}) ${phone._number}`;
}

export function formatMedicineSchedule(schedules: Date[]) {
	return schedules.map((schedule, index) => {
		return `${moment(schedule).format("HH:mm")} ${index !== schedules.length - 1 ? " / " : ""}`;
	});
}

export function formatDateToddmmYYYY(date: Date) {
	return moment(date).format("DD/MM/YYYY");
}
