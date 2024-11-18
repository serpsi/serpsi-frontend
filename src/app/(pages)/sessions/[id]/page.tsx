import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { Square, SquareHeader } from "../../patients/[id]/Square";
import Link from "next/link";
import psiImage from '/public/img/avatar.svg';
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ListComponent } from "../../patients/[id]/listComponent";
import { InputText } from "@/components/form/InputText";

const data = [
  {
    id: '0',
    docLink: 'teste.com',
    title: 'Sessão Roberto.pdf'
  },
  {
    id: '0',
    docLink: 'teste2.com',
    title: 'Sessão Roberto2.pdf'
  },
]
export default async function SpecificSessions() {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-[max-content_1fr] gap-x-4 gap-4">

        {/* Sessão do paciente com a foto e botões */}
        <Square variant="WithImage" className="md:col-span-1">
          <div className="flex flex-col items-center">

            {/* <SquareHeader titulo="Roberto Santos" /> */}
            <Image
              className="mb-4 h-24 w-24 rounded-full"
              src={psiImage}
              alt="Profile"
              width={100}
              height={100}
            />
            <span className="text-gray-900 mb-2 text-lg">Roberto Santos</span>
            <div className="flex flex-col gap-2 md:flex-row md:space-x-14 md:justify-center">
              <button className="flex-1 bg-primary-600 text-white py-2 
                hover: px-4 rounded hover:bg-primary-600/70">
                Confirmar<br />Sessão
              </button>

              <button className=" flex-1 rounded bg-transparent  text-primary-600 
            p-2 border border-primary-600 hover:bg-primary-100/70 hover:text-primary-600">
                Cancelar<br />Sessão
              </button>
            </div>
          </div>
        </Square>

        {/* Informações do paciente */}
        <Square >
          <SquareHeader titulo="Informações do paciente:" />
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 overflow-x-auto">
            <p>Nascimento: 31/12/2000</p>
            <p>Responsável: Roberta Mãe</p>
            <p>CPF: 000.000.000-00</p>
            <p>CPF Responsável: 000.000.000-00</p>
            <p>Tel: (00) 00000 - 0000</p>
            <p>Tel Responsável: (00) 00000 - 0000</p>
          </div>
        </Square>

        {/* Forma de pagamento e valor */}
        <Square className="md:col-span-1 p-4">
          <div className="flex flex-col space-y-2">
            <div className="flex flex-col">
              <label
                className="text-gray-900 mb-2"
                htmlFor="forma-pagamento">
                Forma de pagamento:
              </label>
              <select className="border rounded p-2 w-full 
            border-r-8 border-transparent  outline outline-primary-400 ">
                <option>Pendente</option>
                <option>Pago</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label
                className="text-gray-900 mb-2"
                htmlFor="valor-sessao">
                Valor da sessão:
              </label>
              <input
                id="valor-sessao"
                type="text"
                value="R$ 100,00"
                className="border border-gray-300 rounded p-2 w-full bg-gray-100 text-gray-500"
                disabled
              />
            </div>
          </div>
        </Square>


        {/* Relato da sessão */}
        <Square variant="ThreeRows" className="md:col-span-3">
          <SquareHeader titulo="Relato da sessão:" />
          <textarea
            className="border border-primary-200 rounded p-2 w-full h-[30vh] md:h-[40vh] 
              text-primary-300 placeholder-primary-300"
            placeholder="Text"
          ></textarea>
          <div className="flex justify-end">
            <Button className="bg-primary-600 text-white py-2 px-8 rounded hover:bg-primary-600/70">
              Salvar
            </Button>
          </div>
        </Square>
        {/* Arquivos da sessão */}
        <Square className="md:col-span-1">
          <SquareHeader titulo="Arquivos desta sessão:" />
          <ul>
            {data.length > 0 ? (
              data.map((followUp, index) => (
                <ListComponent
                  link={followUp.docLink}
                  content={followUp.title}
                  id={followUp.id}
                  key={followUp.id}
                  variant={
                    index === 0 ? "IsFirst" : "NotFirst"
                  }
                />
              ))
            ) : (
              <p className="text-center">
                Nenhum Acompanhamento anterior
              </p>
            )}
          </ul>

          <div className="flex justify-end mt-2">
            <label htmlFor="arquivos" className="
            rounded-md cursor-pointer bg-transparent text-primary-600 
            p-2 border border-primary-600 hover:bg-primary-100/70 hover:text-primary-600">
              Adicionar Arquivos
            </label>
            <input
              type="file"
              id="arquivos"
              accept="application/pdf"
              className="hidden"
              multiple={true}
            />
          </div>
        </Square>

        {/* Botão para ver histórico de sessões */}
        <Square className="md:col-span-1 flex items-center justify-center">
          <button className="bg-primary-600 text-white py-2 px-4 rounded w-full">
            Ver Histórico de Sessões
          </button>
        </Square>

      </div>
    </div>
  );
}