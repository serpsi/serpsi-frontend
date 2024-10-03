export const enum dayTypes {
	Sunday = "Dom.",
	Monday = "Seg.",
	Tuesday = "Ter.",
	Wednesday = "Qua.",
	Thursday = "Qui.",
	Friday = "Sex.",
	Saturday = "Sab."
}

export type AvaliableTime = {
	key: number;
	startTime: string;
	endTime: string;
};
export type Agenda = {
	key: number;
	dayType: string;
	avaliableTimes: AvaliableTime[];
};

export type ScheduleAgendas = {
	meetValue: number;
	duration: number;
	agendas: Agenda[];
};
