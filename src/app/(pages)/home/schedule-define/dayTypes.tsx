export const enum dayTypes {
	Sunday = "Dom.",
	Monday = "Seg.",
	Tuesday = "Ter.",
	Wednesday = "Qua.",
	Thursday = "Qui.",
	Friday = "Sex.",
	Saturday = "Sab."
}

export enum dayTypesResolve {
	Sunday = "DOMINGO",
	Monday = "SEGUNDA",
	Tuesday = "TERÇA",
	Wednesday = "QUARTA",
	Thursday = "QUINTA",
	Friday = "SEXTA",
	Saturday = "SABADO"
}

export type AvaliableTime = {
	key: number;
	_startTime: string;
	_endTime: string;
};
export type Agenda = {
	key: number;
	_day: string;
	_avaliableTimes: AvaliableTime[];
};

export type ScheduleAgendas = {
	psychologistId: string;
	_meetValue: number;
	_duration: number;
	agendas: Agenda[];
};
