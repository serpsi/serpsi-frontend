import { z } from "zod";

// Validations Regex
const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
const cepRegex = /^\d{5}-\d{3}$/;
const phoneRegex = /^\(\d{2}\) \d{4,5}-\d{4}$/;
const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;

const fileListType =
	typeof window !== "undefined" && typeof FileList !== "undefined"
		? z.instanceof(FileList)
		: z.any();

export const createPatientFormSchema = z
	.object({
		// PatientPictureSection
		profilePicture: fileListType.optional(),

		// PatientInfoSection
		person: z.object({
			name: z.string().min(1, "Nome é um campo obrigatório."),
			rg: z.string().min(1, "RG é um campo obrigatório."),
			birthdate: z
				.preprocess((val) => {
					return val === "" ? undefined : val;
				}, z.coerce.date().optional())
				.refine((val) => val !== undefined, {
					message: "Data de nascimento é obrigatória."
				}),
			phone: z
				.string()
				.regex(
					phoneRegex,
					"O telefone deve seguir o padrão (00) 00000-0000."
				),
			cpf: z
				.string()
				.regex(cpfRegex, "O CPF deve seguir o padrão 000.000.000-00.")
		}),

		// AddressInfoSection
		address: z.object({
			state: z
				.string()
				.min(2, "Estado é um campo obrigatório.")
				.max(2, "Estado deve ter exatamente 2 caracteres.")
				.transform((val) => val.toUpperCase()),
			zipCode: z
				.string()
				.regex(cepRegex, "O CEP deve seguir o padrão 00000-000."),
			street: z.string().min(1, "Rua é um campo obrigatório."),
			district: z.string().min(1, "Bairro é um campo obrigatório."),
			city: z.string().min(1, "Cidade é um campo obrigatório."),
			homeNumber: z
				.string()
				.min(1, "Número residencial é um campo obrigatório."),
			complement: z.string().optional()
		}),

		// ParentsInfoSection
		parents: z.array(
			z.object({
				name: z.string().min(1, "Nome é um campo obrigatório."),
				rg: z.string().min(1, "RG é um campo obrigatório."),
				birthdate: z
					.preprocess((val) => {
						return val === "" ? undefined : val;
					}, z.coerce.date().optional())
					.refine((val) => val !== undefined, {
						message: "Data de nascimento é obrigatória."
					}),
				phone: z
					.string()
					.regex(
						phoneRegex,
						"O telefone deve seguir o padrão (00) 00000-0000."
					),
				cpf: z
					.string()
					.regex(
						cpfRegex,
						"O CPF deve seguir o padrão 000.000.000-00."
					)
			})
		),

		// SchoolInfoSection
		school: z.object({
			name: z.string().min(1, "Nome é um campo obrigatório."),
			cnpj: z
				.string()
				.regex(
					cnpjRegex,
					"O CNPJ deve seguir o padrão 00.000.000/0000-00."
				),
			phone: z
				.string()
				.regex(
					phoneRegex,
					"O telefone deve seguir o padrão (00) 00000-0000."
				),
			state: z.string().min(2, "Estado é um campo obrigatório."),
			zipCode: z
				.string()
				.regex(cepRegex, "O CEP deve seguir o padrão 00000-000."),
			street: z.string().min(1, "Rua é um campo obrigatório."),
			district: z.string().min(1, "Bairro é um campo obrigatório."),
			city: z.string().min(1, "Cidade é um campo obrigatório."),
			schoolNumber: z
				.string()
				.min(1, "Número da escola é um campo obrigatório."),
			complement: z.string().optional()
		}),

		// ExtraInfoSection
		comorbidities: z.string().optional(),
		previousDocuments: fileListType.optional(),
		paymentPlan: z.string().min(1, "Plano de pagamento é obrigatório"),
		checkMedicines: z.boolean(),
		medicines: z
			.array(
				z.object({
					name: z
						.string()
						.min(1, "Nome do medicamento é obrigatório"),
					dosage: z.coerce
						.number()
						.positive("A dosagem deve ser maior que zero"),
					dosageUnity: z
						.string()
						.min(1, "Unidade de dosagem é obrigatória"),
					frequency: z.coerce
						.number()
						.positive("A frequência deve ser maior que zero"),
					firstTimeOfTheDay: z
						.string()
						.min(1, "Horário é obrigatório"),
					startDate: z
						.preprocess((val) => {
							return val === "" ? undefined : val;
						}, z.coerce.date().optional())
						.refine((val) => val !== undefined, {
							message: "Data é um campo obrigatório."
						}),
					observation: z.string().optional()
				})
			)
			.optional()
	})
	.refine(
		(data) =>
			!data.checkMedicines ||
			(data.medicines && data.medicines.length > 0),
		{
			message: "Preencha os campos de medicamento.",
			path: ["medicines"]
		}
	);

export type CreatePatientForm = z.infer<typeof createPatientFormSchema>;

export function formatPatientData(
	formData: CreatePatientForm,
	asFormData: boolean = false
) {
	const formattedData = {
		profilePicture: formData.profilePicture,
		document: formData.previousDocuments,
		paymentPlan: formData.paymentPlan,
		psychologistId: "1a6aecba-45d0-44c5-a47d-55b5aaeba93a",
		person: {
			name: formData.person.name,
			rg: formData.person.rg,
			birthdate: formData.person.birthdate?.toISOString().split("T")[0],
			phone: {
				ddi: "+55",
				ddd: formData.person.phone.slice(1, 3),
				number: formData.person.phone.slice(4).replace("-", "")
			},
			cpf: {
				cpf: formData.person.cpf
			},
			address: {
				state: formData.address.state,
				zipCode: formData.address.zipCode.replace("-", ""),
				street: formData.address.street,
				district: formData.address.district,
				city: formData.address.city,
				homeNumber: parseInt(formData.address.homeNumber, 10),
				complement: formData.address.complement || ""
			}
		},
		parents: formData.parents.map((parent) => ({
			name: parent.name,
			rg: parent.rg,
			birthdate: parent.birthdate?.toISOString().split("T")[0],
			phone: {
				ddi: "+55",
				ddd: parent.phone.slice(1, 3),
				number: parent.phone.slice(4).replace("-", "")
			},
			cpf: {
				cpf: parent.cpf
			}
		})),
		school: {
			name: formData.school.name,
			CNPJ: formData.school.cnpj,
			address: {
				state: formData.school.state,
				zipCode: formData.school.zipCode.replace("-", ""),
				street: formData.school.street,
				district: formData.school.district,
				city: formData.school.city,
				homeNumber: parseInt(formData.school.schoolNumber, 10),
				complement: formData.school.complement || ""
			},
			phone: {
				ddi: "+55",
				ddd: formData.school.phone.slice(1, 3),
				number: formData.school.phone.slice(4).replace("-", "")
			}
		},
		comorbidities: formData.comorbidities
			? formData.comorbidities.split(",").map((name) => {
					return {
						name: name.trim()
					};
				})
			: [],
		medicines:
			formData.medicines?.map((medicine) => ({
				medicine: {
					name: medicine.name
				},
				dosage: medicine.dosage,
				dosageUnity: medicine.dosageUnity,
				frequency: medicine.frequency,
				firstTimeOfTheDay: convertTimeToISO(medicine.firstTimeOfTheDay),
				startDate: new Date(medicine.startDate).toISOString(),
				observation: medicine.observation || ""
			})) || []
	};

	if (!asFormData) {
		return formattedData;
	}

	const formDataObj = new FormData();

	for (const key in formattedData) {
		const value = (formattedData as any)[key];
		if (value instanceof Blob) {
			formDataObj.append(key, value);
		} else {
			formDataObj.append(key, JSON.stringify(value));
		}
	}

	return formDataObj;
}

function convertTimeToISO(time: string): string | null {
	const today = new Date();

	const [hours, minutes] = time.split(":").map(Number);

	today.setHours(hours, minutes, 0, 0);

	return today.toISOString();
}
