import Image from "next/image";
import { Square } from "./Sqaure";


export default async function MyPatient() {

  return (

    <main className="p-10 flex  items-center justify-center bg-cover">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Card do Perfil */}
        <Square className="flex flex-col items-center text-center">
          {/* <Image
            className="rounded-full w-24 h-24 mb-4"
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.freepik.com%2Ffotos%2Fpessoas&psig=AOvVaw2l-Bgh-HUpuNg6a2yKgxqO&ust=1726927937051000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKDk3oPa0YgDFQAAAAAdAAAAABAE" // Imagem do perfil
            width={100}
            height={100}
            alt="Profile"
          /> */}
          <img className="rounded-full w-24 h-24 mb-4"
            src="http://res.cloudinary.com/djlmqetmd/image/upload/v1726842410/nlzeqgi3igz2nk33mmpa.jpg" />
          <h2 className="text-xl font-semibold">Roberto Santos</h2>
          <a href="#" className="text-blue-600 underline text-sm mt-2">
            Visualizar Documentos
          </a>
        </Square>

        {/* Informações do Paciente */}
        <Square>
          <h3 className="text-lg font-semibold text-blue-500 mb-4">
            Informações do paciente:
          </h3>
          <p>Nascimento: 31/12/2000</p>
          <p>CPF: 000.000.000-00</p>
          <p>RG: 000000000</p>
          <p>Tel: (00) 00000 - 0000</p>
          <p className="mt-4">Tags de comorbidade...</p>
        </Square>

        {/* Informações dos Responsáveis */}
        <Square>
          <h3 className="text-lg font-semibold text-blue-500 mb-4">
            Informações do responsável 1:
          </h3>
          <p>Nome: Roberta Mãe</p>
          <p>CPF: 000.000.000-00</p>
          <p>RG: 000000000</p>
          <p>Tel: (00) 00000 - 0000</p>
        </Square>

        <Square>
          <h3 className="text-lg font-semibold text-blue-500 mb-4">
            Informações do responsável 2:
          </h3>
          <p>Nome: Roberto Pai</p>
          <p>CPF: 000.000.000-00</p>
          <p>RG: 000000000</p>
          <p>Tel: (00) 00000 - 0000</p>
        </Square>

        {/* Escola */}
        <Square className="md:col-span-2">
          <h3 className="text-lg font-semibold text-blue-500 mb-4">Escola:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex-col space-y-3">
              <p>Nome: Escola Escola</p>
              <p>Tel: (00) 00000-0000</p>
              <p>CEP: 99999-999</p>
              <p>Complemento: Depois do ovo</p>
            </div>
            <div className="flex-col space-y-3">
              <p>Bairro: Bairro dos Bobos</p>
              <p>Cidade: Cidade dos Bobos, Estado</p>
              <p>Rua: rua dos bobos, número</p>
              <p>CNPJ:000.000.000/0000-00</p>
            </div>
          </div>
        </Square>

        {/* Medicamento */}
        <Square>
          <h3 className="text-lg font-semibold text-blue-500 mb-4">
            Medicamento Nome:
          </h3>
          <p>Dosagem: 5mg</p>
          <p>Frequência: 8:00 / 20:00</p>
          <p>Data de início: dd/mm/aaaa</p>
          <p>Observação: Apenas nos dias de verão</p>
        </Square>

        <Square>
          <h3 className="text-lg font-semibold text-blue-500 mb-4">
            Medicamento Nome 2:
          </h3>
          <p>Dosagem: 5mg</p>
          <p>Frequência: 8:00 / 20:00</p>
          <p>Data de início: dd/mm/aaaa</p>
          <p>Observação: Apenas nos dias de verão</p>
        </Square>

        {/* Endereço */}
        <Square className="md:col-span-2">
          <h3 className="text-lg font-semibold text-blue-500 mb-4">Endereço:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex-col space-y-3">
              <p>CEP: 00000-000</p>
              <p>Rua: Rua dos Bobos, número 0</p>
              <p>número: 0</p>
              <p>Complemento: Depois do ovo</p>
            </div>
            <div className="flex-col space-y-3">
              <p>Bairro: Bairro dos babos</p>
              <p>Cidade: Cidade dos Bobos, Estado: Bahia</p>
              <p>Estado: Bahia</p>
            </div>
          </div>
        </Square>

        {/* Arquivos */}
        <Square>
          <h3 className="text-lg font-semibold text-blue-500 mb-4">
            Arquivos de acompanhamentos anteriores:
          </h3>
          <ul>
            <li>
              <a href="#" className="flex justify-between text-blue-600">
                Sessão_Roberto.pdf
                <span className="material-icons">download</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex justify-between text-blue-600">
                Sessão_Roberto.pdf
                <span className="material-icons">download</span>
              </a>
            </li>
          </ul>
        </Square>

        {/* Histórico de Sessões */}
        <Square className="flex flex-col items-center justify-center">
          <h3 className="text-lg font-semibold text-blue-500 mb-4">
            Histórico de Sessões
          </h3>
          <a
            href="#"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Ver Histórico de Sessões
          </a>
        </Square>
      </div>
    </main>
  );
}