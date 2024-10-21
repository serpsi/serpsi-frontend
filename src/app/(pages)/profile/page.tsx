"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import moment from 'moment';
import { useRouter } from 'next/router';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Square, SquareHeader } from '../patients/[id]/Square';
import { ChevronLeftIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import psiImage from '/public/img/avatar.svg';
import { PencilAltIcon } from '@heroicons/react/outline';
import { Phone } from '../../../models/vos/Phone';
import InputMask from "react-input-mask-next";
import { getProfileData } from '@/services/profileService';


const profileSchema = z.object({
  person: z.object({
    _name: z.string().min(1, 'Nome é obrigatório'),
    _birthDate: z
      .string()
      .min(1, 'Data de nascimento é obrigatória')
      .refine((val) => moment.utc(val, 'YYYY-MM-DD', true).isValid(), {
        message: 'Data de nascimento inválida',
      }),
    _cpf: z.string().min(1, 'CPF é obrigatório'),
    _rg: z.string().min(1, 'RG é obrigatório'),
    _phone: z.string().regex(/^\(\d{2}\) \d{5}-\d{4}$/, 'Telefone inválido'),
    _profilePicture: z.string(),
  }),
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

function formatPhone(phoneObj: Phone): string {
  const ddd = phoneObj._ddd.replace('+', '');
  const number = phoneObj._number.padStart(9, '9');
  return `(${ddd}) ${number.slice(0, 5)}-${number.slice(5)}`;
}

function formatCEP(cep: string): string {
  const cepNumbers = cep.replace(/\D/g, '').padStart(8, '0');
  return `${cepNumbers.slice(0, 5)}-${cepNumbers.slice(5)}`;
}


export default function Profile() {
  const [defaultProfileData, setDefaultProfileData] = useState<ProfileData>({
    person: {
      _name: '',
      _birthDate: '',
      _cpf: '',
      _rg: '',
      _phone: '',
      _profilePicture: '',
    },
    crp: '',
    address: {
      cep: '',
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      state: '',
    },
  });
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const methods = useForm<ProfileData>({
    resolver: zodResolver(profileSchema),
    defaultValues: defaultProfileData,
    mode: 'onChange'
  });

  useEffect(() => {
    async function getProfile() {
      const value = await getProfileData();
      const formattedData: ProfileData = {
        person: {
          _name: value.user.person._name || '',
          _birthDate: moment.utc(value.user.person._birthdate).format('YYYY-MM-DD') || '',
          _cpf: value.user.person._cpf._cpf || '',
          _rg: value.user.person._rg || '',
          _phone: formatPhone(value.user.person._phone) || '',
          _profilePicture: value.user.person._profilePicture || ''
        },
        crp: value._crp._crp || '',
        address: {
          cep: formatCEP(value.user.person.address._zipCode) || '',
          street: value.user.person.address._street || '',
          number: value.user.person.address._homeNumber.toString() || '',
          complement: value.user.person.address._complement || '',
          neighborhood: value.user.person.address._district || '',
          city: value.user.person.address._city || '',
          state: value.user.person.address._state || '',
        },
      };
      setDefaultProfileData(formattedData);
      methods.reset(formattedData);
    }

    getProfile();
  }, [methods]);

  // useEffect(() => {
  //   methods.reset(defaultProfileData);
  // }, [defaultProfileData, methods]);

  const { register, handleSubmit, formState } = methods;
  const { errors } = formState;

  const onSubmit: SubmitHandler<ProfileData> = (data) => {
    const { person, address, crp } = data;
    const phoneParts = person._phone.split(/[\(\)]/);

    const phoneData: Phone = {
      _ddi: '+55',
      _ddd: phoneParts[1],
      _number: phoneParts[2]
    }
    const { _cpf, _rg, ...personData } = person;
    const sendData = {
      person: personData,
      address: address,
      phone: phoneData
    }

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
            <span className="text-gray-900">{defaultProfileData.person._name}</span>
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
                  src={defaultProfileData.person._profilePicture || psiImage}
                  alt="Profile"
                  width={100}
                  height={100}
                />
                {isEditing ? (
                  <>
                    <input
                      type="text"
                      {...register('person._name')}
                      className="w-full rounded-xl border border-primary-500 bg-vidro p-2 text-primary-800 focus:outline focus:outline-primary-800" />
                    <a className='text-primary-500' href='/changePass/'>Atualizar senha</a>
                  </>
                ) : (
                  <h2 className="text-xl text-gray-900">{methods.getValues('person._name')}</h2>
                )}
                {errors.person?._name && (
                  <p className="text-red-500 text-sm">{errors.person._name.message}</p>
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
                        type="date"
                        {...register('person._birthDate')}
                        defaultValue={methods.getValues('person._birthDate')}
                        className="w-full rounded-xl border border-primary-500 bg-vidro p-2 text-primary-800 focus:outline focus:outline-primary-800"
                      />
                      {errors.person?._birthDate && (
                        <p className="text-red-500 text-sm">{errors.person._birthDate.message}</p>
                      )}
                    </div>

                    <div className="mb-2">
                      <label className="block text-gray-700">CPF:</label>
                      <input

                        type="text"
                        disabled={true}
                        {...register('person._cpf')}
                        className="w-full rounded-xl border border-primary-500 bg-gray-500 p-2 text-primary-800 focus:outline focus:outline-primary-800"
                      />
                      {errors.person?._cpf && (
                        <p className="text-red-500 text-sm">{errors.person._cpf.message}</p>
                      )}
                      <label className="block text-gray-700">RG:</label>
                      <input
                        type="text"
                        disabled={true}
                        {...register('person._rg')}
                        className="w-full rounded-xl border border-primary-500 bg-gray-500 p-2 text-primary-800 focus:outline focus:outline-primary-800"
                      />
                      {errors.person?._rg && (
                        <p className="text-red-500 text-sm">{errors.person._rg.message}</p>
                      )}

                      <label className="block text-gray-700">Tel:</label>
                      <InputMask
                        mask={"(99) 99999-9999"}
                        type="text"
                        {...register('person._phone')}
                        className="w-full rounded-xl border border-primary-500 bg-vidro p-2 text-primary-800 focus:outline focus:outline-primary-800"
                      />
                      {errors.person?._phone && (
                        <p className="text-red-500 text-sm">{errors.person._phone.message}</p>
                      )}
                      <label className="block text-gray-700">CRP:</label>
                      <input
                        type="text"
                        disabled={true}
                        {...register('crp')}
                        className="w-full rounded-xl border border-primary-500 bg-gray-500 p-2 text-primary-800 focus:outline focus:outline-primary-800"
                      />
                      {errors.crp && (
                        <p className="text-red-500 text-sm">{errors.crp.message}</p>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <p>
                      Nascimento:{' '}
                      {moment
                        .utc(methods.getValues('person._birthDate'), 'YYYY-MM-DD')
                        .format('DD/MM/YYYY')}
                    </p>

                    <p>CPF: {methods.getValues('person._cpf')}</p>
                    <p>RG: {methods.getValues('person._rg')}</p>
                    <p>Tel: {methods.getValues('person._phone')}</p>
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
                          <InputMask
                            type="text"
                            mask={"99999-999"}
                            {...register('address.cep')}
                            className="w-full rounded-xl border border-primary-500 bg-vidro p-2 text-primary-800 focus:outline focus:outline-primary-800"
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
                            className="w-full rounded-xl border border-primary-500 bg-vidro p-2 text-primary-800 focus:outline focus:outline-primary-800"
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
                            className="w-full rounded-xl border border-primary-500 bg-vidro p-2 text-primary-800 focus:outline focus:outline-primary-800"
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
                            className="w-full rounded-xl border border-primary-500 bg-vidro p-2 text-primary-800 focus:outline focus:outline-primary-800"
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
                            className="w-full rounded-xl border border-primary-500 bg-vidro p-2 text-primary-800 focus:outline focus:outline-primary-800"
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
                            className="w-full rounded-xl border border-primary-500 bg-vidro p-2 text-primary-800 focus:outline focus:outline-primary-800"
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
                            className="w-full rounded-xl border border-primary-500 bg-vidro p-2 text-primary-800 focus:outline focus:outline-primary-800"
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
