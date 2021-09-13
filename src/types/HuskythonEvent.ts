import {DateTime} from "luxon";

export interface HuskythonEvent {
    id: string;
    summary: string;
    start: DateTime;
    end: DateTime;
    allDay: boolean;
    timezone: string;
    location: string | null;
    link: string | null;
}
