"use client";
import React from "react";
import { ScheduleDefiner } from "./scheduleDefiner";
import { FormProvider, useForm } from "react-hook-form";
import { dayTypes, ScheduleAgendas } from "./dayTypes";
import { Button } from "@/components/ui/button";

import Image from "next/image";

export default function ScheduleDefinePage() {
	const methods = useForm<ScheduleAgendas>({
		defaultValues: {
			meetValue: 120,
			duration: 50,
			agendas: [
				{
					key: 1,
					dayType: dayTypes.Monday,
					avaliableTimes: [
						{
							key: 1,
							startTime: "8:00",
							endTime: "18:00"
						}
					]
				},
				{
					key: 2,
					dayType: dayTypes.Tuesday,
					avaliableTimes: [
						{
							key: 2,
							startTime: "8:00",
							endTime: "18:00"
						}
					]
				},
				{
					key: 3,
					dayType: dayTypes.Wednesday,
					avaliableTimes: [
						{
							key: 3,
							startTime: "8:00",
							endTime: "18:00"
						}
					]
				},
				{
					key: 4,
					dayType: dayTypes.Thursday,
					avaliableTimes: [
						{
							key: 4,
							startTime: "8:00",
							endTime: "18:00"
						}
					]
				},
				{
					key: 5,
					dayType: dayTypes.Friday,
					avaliableTimes: [
						{
							key: 5,
							startTime: "8:00",
							endTime: "18:00"
						}
					]
				}
			]
		}
	});
	return (
		<main className="flex items-start justify-around mx-10 my-5">
			<section className="w-fit text-black">
				<FormProvider {...methods}>
					<form
						onSubmit={methods.handleSubmit(
							() => console.log(methods.getValues()),
							(erro) => console.log(erro)
						)}
						onReset={() => console.log("reset")}
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
				<Image src="/img/psi_calendar.svg" width={400} height="1" alt="psicóloga arrumando um calendário" />
			</aside>
		</main>
	);
}
