export type TypeCEP = {
	cep: string;
	logradouro: string;
	complemento: string;
	unidade: string;
	bairro: string;
	localidade: string;
	uf: string;
	estado: string;
};

export async function getCEP(cep: string): Promise<TypeCEP | undefined> {
	cep = cep.replace(/\D/g, "");
	console.log("CEP: ", cep);

	if (cep.length !== 8) {
		console.log("CEP inválido");
		return;
	}

	const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

	if (!response.ok) {
		return;
	}

	return await response.json();
}
