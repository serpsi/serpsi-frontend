"use client";
import React from "react";
import { ScheduleDefiner } from "./scheduleDefiner";
import { FormProvider, useForm } from "react-hook-form";
import {
	Agenda,
	AvaliableTime,
	dayTypes,
	dayTypesResolve,
	ScheduleAgendas
} from "./dayTypes";
import { Button } from "@/components/ui/button";
import psiImage from "/public/img/psi_calendar.svg";
import Image from "next/image";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Toaster, toast } from "sonner";

export default function ScheduleDefinePage() {
	const horarioRegex = /^([0-1][0-9]|2[0-3]):[0-5][0-9]$/;
	const scheduleSchema = z.object({
		psychologistId: z.string(),
		_meetValue: z.number().positive("O valor deve ser maior que 0"),
		_duration: z.number().positive("a duração deve ser maior que 0"),
		agendas: z.array(
			z.object({
				_day: z.nativeEnum(dayTypesResolve, {
					required_error: "necessitas passar um dia"
				}),
				_avaliableTimes: z.array(
					z.object({
						_startTime: z
							.string()
							.min(1, "horário inicial é obrigatório")
							.regex(horarioRegex, "horário não permitido"),
						_endTime: z
							.string()
							.min(1, "horário final é obrigatório")
							.regex(horarioRegex, "horário não permitido")
					})
				)
			})
		)
	});
	const methods = useForm<ScheduleAgendas>({
		resolver: zodResolver(scheduleSchema),
		defaultValues: {
			psychologistId: "",
			_meetValue: 120.5,
			_duration: 50,
			agendas: [
				{
					key: 1,
					_day: dayTypesResolve.Monday,
					_avaliableTimes: [
						{
							key: 1,
							_startTime: "08:00",
							_endTime: "18:00"
						}
					]
				},
				{
					key: 2,
					_day: dayTypesResolve.Tuesday,
					_avaliableTimes: [
						{
							key: 2,
							_startTime: "08:00",
							_endTime: "18:00"
						}
					]
				},
				{
					key: 3,
					_day: dayTypesResolve.Wednesday,
					_avaliableTimes: [
						{
							key: 3,
							_startTime: "08:00",
							_endTime: "18:00"
						}
					]
				},
				{
					key: 4,
					_day: dayTypesResolve.Thursday,
					_avaliableTimes: [
						{
							key: 4,
							_startTime: "08:00",
							_endTime: "18:00"
						}
					]
				},
				{
					key: 5,
					_day: dayTypesResolve.Friday,
					_avaliableTimes: [
						{
							key: 5,
							_startTime: "08:00",
							_endTime: "18:00"
						}
					]
				}
			]
		}
	});
	const validateData = (
		agendas: Agenda[]
	): { validate: boolean; message?: string } => {
		for (let agenda of agendas) {
			let times: AvaliableTime[] = [];
			for (let time of agenda._avaliableTimes) {
				if (time._endTime <= time._startTime) {
					return {
						validate: false,
						message:
							"Os horários finais têm que ser maiores que os horários iniciais"
					};
				}
				if (times.length > 0) {
					if (time._startTime <= times[times.length - 1]._endTime) {
						return {
							validate: false,
							message: `Os horários da ${agenda._day} conflitam`
						};
					}
				}
				times.push(time);
			}
		}
		return { validate: true };
	};
	const onSubmit = (data: ScheduleAgendas) => {
		const validation = validateData(data.agendas);
		if (!validation.validate) {
			toast.warning(validation.message);
			return;
		}
		toast.success("Lista de horários atualizados com sucesso");
	};
	return (
		<main className="mx-10 my-5 flex items-start justify-around">
			<section className="w-fit text-black">
				<FormProvider {...methods}>
					<form
						onSubmit={methods.handleSubmit(onSubmit, () =>
							toast.warning("Algo deu errado")
						)}
					>
						<ScheduleDefiner />
						<div className="mt-3 flex justify-around">
							<Button
								type="reset"
								variant="ghost"
								className="text-primary-600 hover:bg-primary-100/70 hover:text-primary-600"
							>
								Descartar
							</Button>
							<Button
								type="submit"
								className="bg-primary-600 hover:bg-primary-800"
							>
								Salvar horários
							</Button>
						</div>
					</form>
				</FormProvider>
			</section>
			<aside className="hidden lg:block">
				<Image
					src={psiImage}
					alt="psicóloga arrumando um calendário"
					className="h-auto w-[400px]"
				/>
			</aside>
		</main>
	);
}
