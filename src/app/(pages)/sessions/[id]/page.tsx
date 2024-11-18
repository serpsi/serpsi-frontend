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

            <SquareHeader titulo="Roberto Santos" />
            <Image
              className="mb-4 h-24 w-24 rounded-full"
              src={psiImage}
              alt="Profile"
              width={100}
              height={100}
            />
            <div className="flex space-x-2">
              <Button className="bg-primary-600 text-white py-2 px-4 rounded">
                Confirmar Sessão
              </Button>
              <Button className="bg-primary-600 text-white py-2 px-4 rounded">
                Cancelar Sessão
              </Button>
            </div>
          </div>
        </Square>

        {/* Informações do paciente */}
        <Square className="md:col-span-2">
          <SquareHeader titulo="Informações do paciente:" />
          <div className="grid grid-cols-2 gap-2">
            <p>Nascimento: 31/12/2000</p>
            <p>Responsável: Roberta Mãe</p>
            <p>CPF: 000.000.000-00</p>
            <p>CPF Responsável: 000.000.000-00</p>
            <p>Tel: (00) 00000 - 0000</p>
            <p>Tel Responsável: (00) 00000 - 0000</p>
          </div>
        </Square>

        {/* Forma de pagamento e valor */}
        <Square className="md:col-span-1">
          <SquareHeader titulo="Forma de pagamento:" />
          <select className="border rounded p-2 w-full 
            border-r-8 border-transparent  outline outline-primary-400 ">
            <option>Pendente</option>
            <option>Pago</option>
          </select>
          <input
            type="text"
            value="R$ 100,00"
            className="border border-gray-300 rounded p-2 w-full mt-4"
            disabled
          />
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
            <Button className="bg-primary-600 text-white py-2 px-4 rounded">
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
            <label htmlFor="foto-paciente" className="
            rounded-md cursor-pointer bg-transparent text-primary-600 
            p-2 border border-primary-600 hover:bg-primary-100/70 hover:text-primary-600">
              Adicionar Arquivos
            </label>
            <input
              type="file"
              id="foto-paciente"
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