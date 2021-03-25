import { ClassSchedule } from '../entities';

export const makeObjScheduleItems = (
	schedule: {
		week_day: number;
		from: number;
		to: number;
	}[],
	subjectId: string
) =>
	schedule.map((scheduleItem) => {
		return new ClassSchedule({
			...scheduleItem,
			subjectId: subjectId
		});
	});
