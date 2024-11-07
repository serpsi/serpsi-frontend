export function formatPhone(phone: {
	_ddi: string;
	_ddd: string;
	_number: string;
}) {
	return `${phone._ddi} (${phone._ddd}) ${phone._number}`;
}