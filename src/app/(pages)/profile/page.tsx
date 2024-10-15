"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Square, SquareHeader } from '../patients/[id]/Square';
import { ChevronLeftIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import psiImage from '/public/img/avatar.svg';
import { PencilAltIcon } from '@heroicons/react/outline';

const profileSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  birthDate: z.string().min(1, 'Data de nascimento é obrigatória'),
  cpf: z.string().min(1, 'CPF é obrigatório'),
  rg: z.string().min(1, 'RG é obrigatório'),
  phone: z.string().min(1, 'Telefone é obrigatório'),
  crp: z.string().min(1, 'CRP é obrigatório'),
  address: z.object({
    cep: z.string().regex(/^\d{5}-\d{3}$/, 'CEP inválido'),
    street: z.string().min(1, 'Rua é obrigatória'),
    number: z.string().min(1, 'Número é obrigatório'),
    complement: z.string().min(1, 'Complemneto é obrigatório'),
    neighborhood: z.string().min(1, 'Bairro é obrigatório'),
    city: z.string().min(1, 'Cidade é obrigatória'),
    state: z.string().min(1, 'Estado é obrigatório'),
  }),
});

type ProfileData = z.infer<typeof profileSchema>;

export default function Profile() {
  const [defaultProfileData, setDefaultProfileData] = useState<ProfileData>({
    name: 'Iara de Lima Oliveira',
    birthDate: '31/12/2000',
    cpf: '000.000.000-00',
    rg: '000000000',
    phone: '(00) 00000 - 0000',
    crp: '00/00000',
    address: {
      cep: '00000-000',
      street: 'Rua dos Bobos',
      number: '0',
      complement: 'Depois do ovo',
      neighborhood: 'Bairro dos babos',
      city: 'Cidade dos Bobos',
      state: 'Bahia',
    },
  });
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const methods = useForm<ProfileData>({
    resolver: zodResolver(profileSchema),
    defaultValues: defaultProfileData,
    mode: 'onChange'
  });

  useEffect(() => {
    methods.reset(defaultProfileData);
  }, [defaultProfileData, methods]);

  const { register, handleSubmit, formState } = methods;
  const { errors } = formState;

  const onSubmit: SubmitHandler<ProfileData> = (data) => {

    console.log('Dados salvos:', data);
    setDefaultProfileData(data);
    setIsEditing(false);
  };

  return (
    <FormProvider {...methods}>
      <main className="flex flex-col items-center justify-center bg-cover px-10 py-5">
        <div className="mb-2 flex w-full">
          <Link href={"/patients"} className="flex">
            <ChevronLeftIcon
              width={24}
              height={24}
              className="text-gray-500"
            />
            &nbsp;
            <span className="text-gray-900">Iara de Lima Oliveira</span>
          </Link>
        </div>

        <div className="w-[60vw]">
          {!isEditing &&
            <div
            className="flex justify-end space-x-3 items-center cursor-pointer"
            onClick={() => setIsEditing(!isEditing)}
          >
            <span className="text-primary-600">
              Editar perfil
            </span>
            <PencilAltIcon className="text-primary-400" width={24} height={24} />
          </div>
          }
         
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {/* Card do Perfil */}
              <Square variant="WithImage">
                <Image
                  className="mb-4 h-24 w-24 rounded-full"
                  src={psiImage}
                  width={100}
                  height={100}
                  alt="Profile"
                />
                {isEditing ? (
                  <input
                    type="text"
                    {...register('name')}
                    className="text-xl text-gray-900 border border-gray-300 rounded px-2 py-1"
                  />
                ) : (
                  <h2 className="text-xl text-gray-900">{methods.getValues('name')}</h2>
                )}
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </Square>

              {/* Informações do Paciente */}
              <Square>
                <SquareHeader titulo="Informações do paciente" />
                {isEditing ? (
                  <>
                    <div className="mb-2">
                      <label className="block text-gray-700">Nascimento:</label>
                      <input
                        type="text"
                        {...register('birthDate')}
                        className="w-full border border-gray-300 rounded px-2 py-1"
                      />
                      {errors.birthDate && (
                        <p className="text-red-500 text-sm">{errors.birthDate.message}</p>
                      )}
                    </div>
                    {/* Repita para os demais campos (cpf, rg, phone, crp) */}
                    <div className="mb-2">
                      <label className="block text-gray-700">CPF:</label>
                      <input
                        type="text"
                        {...register('cpf')}
                        className="w-full border border-gray-300 rounded px-2 py-1"
                      />
                      {errors.cpf && (
                        <p className="text-red-500 text-sm">{errors.cpf.message}</p>
                      )}
                      <label className="block text-gray-700">RG:</label>
                      <input
                        type="text"
                        {...register('rg')}
                        className="w-full border border-gray-300 rounded px-2 py-1"
                      />
                      {errors.rg && (
                        <p className="text-red-500 text-sm">{errors.rg.message}</p>
                      )}

                      <label className="block text-gray-700">Tel:</label>
                      <input
                        type="text"
                        {...register('phone')}
                        className="w-full border border-gray-300 rounded px-2 py-1"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm">{errors.phone.message}</p>
                      )}
                      <label className="block text-gray-700">CRP:</label>
                      <input
                        type="text"
                        {...register('crp')}
                        className="w-full border border-gray-300 rounded px-2 py-1"
                      />
                      {errors.crp && (
                        <p className="text-red-500 text-sm">{errors.crp.message}</p>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <p>Nascimento: {methods.getValues('birthDate')}</p>
                    <p>CPF: {methods.getValues('cpf')}</p>
                    <p>RG: {methods.getValues('rg')}</p>
                    <p>Tel: {methods.getValues('phone')}</p>
                    <p>CRP: {methods.getValues('crp')}</p>
                  </>
                )}
              </Square>

              {/* Endereço */}
              <Square variant="DoubleColumn">
                <SquareHeader titulo="Endereço" />
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="flex-col space-y-3">
                    {isEditing ? (
                      <>
                        <div>
                          <label className="block text-gray-700">CEP:</label>
                          <input
                            type="text"
                            {...register('address.cep')}
                            className="w-full border border-gray-300 rounded px-2 py-1"
                          />
                          {errors.address?.cep && (
                            <p className="text-red-500 text-sm">
                              {errors.address.cep.message}
                            </p>
                          )}
                          <label className="block text-gray-700">Rua:</label>
                          <input
                            type="text"
                            {...register('address.street')}
                            className="w-full border border-gray-300 rounded px-2 py-1"
                          />
                          {errors.address?.street && (
                            <p className="text-red-500 text-sm">
                              {errors.address.street.message}
                            </p>
                          )}
                          <label className="block text-gray-700">Número:</label>
                          <input
                            type="string"
                            {...register('address.number')}
                            className="w-full border border-gray-300 rounded px-2 py-1"
                          />
                          {errors.address?.number && (
                            <p className="text-red-500 text-sm">
                              {errors.address.number.message}
                            </p>
                          )}
                          <label className="block text-gray-700">Complemento:</label>
                          <input
                            type="string"
                            {...register('address.complement')}
                            className="w-full border border-gray-300 rounded px-2 py-1"
                          />
                          {errors.address?.complement && (
                            <p className="text-red-500 text-sm">
                              {errors.address.complement.message}
                            </p>
                          )}
                        </div>

                      </>
                    ) : (
                      <>
                        <p>CEP: {methods.getValues('address.cep')}</p>
                        <p>Rua: {methods.getValues('address.street')}</p>
                        <p>Número: {methods.getValues('address.number')}</p>
                        <p>Complemento: {methods.getValues('address.complement')}</p>
                      </>
                    )}
                  </div>
                  <div className="flex-col space-y-3">
                    {isEditing ? (
                      <>
                        <div>
                          <label className="block text-gray-700">Bairro:</label>
                          <input
                            type="text"
                            {...register('address.neighborhood')}
                            className="w-full border border-gray-300 rounded px-2 py-1"
                          />
                          {errors.address?.neighborhood && (
                            <p className="text-red-500 text-sm">
                              {errors.address.neighborhood.message}
                            </p>
                          )}
                          <label className="block text-gray-700">Cidade:</label>
                          <input
                            type="text"
                            {...register('address.city')}
                            className="w-full border border-gray-300 rounded px-2 py-1"
                          />
                          {errors.address?.city && (
                            <p className="text-red-500 text-sm">
                              {errors.address.city.message}
                            </p>
                          )}
                          <label className="block text-gray-700">Estado:</label>
                          <input
                            type="text"
                            {...register('address.state')}
                            className="w-full border border-gray-300 rounded px-2 py-1"
                          />
                          {errors.address?.state && (
                            <p className="text-red-500 text-sm">
                              {errors.address.state.message}
                            </p>
                          )}
                        </div>

                      </>
                    ) : (
                      <>
                        <p>Bairro: {methods.getValues('address.neighborhood')}</p>
                        <p>Cidade: {methods.getValues('address.city')}</p>
                        <p>Estado: {methods.getValues('address.state')}</p>
                      </>
                    )}
                  </div>
                </div>
              </Square>
            </div>
            {isEditing && (
              <div className='flex gap-3'>

                <button
                  onClick={() => {
                    setIsEditing(false);
                    methods.reset(defaultProfileData)
                  }}
                  className="mt-4 bg-red-600 text-white px-4 py-2 rounded"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="mt-4 bg-primary-600 text-white px-4 py-2 rounded"
                >
                  Salvar
                </button>
              </div>
            )}
          </form>
        </div>
      </main>
    </FormProvider>
  );
}
