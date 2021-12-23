import axios from "axios";
import {Participant} from "@/types/Participant";
import {Team} from "@/types/Team";
import {HuskythonEvent} from "@/types/HuskythonEvent";
import {DateTime} from "luxon";
import {Donation} from "@/types/Donation";

const API_URL = "https://huskython-api.azurewebsites.net/api";

export async function GetHuskythonEvents(): Promise<HuskythonEvent[] | undefined> {
    try {
        const response = await axios.get(`${API_URL}/events`, {timeout: 5000});

        return response.data.map((rawEvent: any): HuskythonEvent => ({
            id: rawEvent.id,
            summary: rawEvent.summary,
            start: DateTime.fromISO(rawEvent.start),
            end: DateTime.fromISO(rawEvent.end),
            allDay: rawEvent.allDay,
            timezone: rawEvent.timezone,
            location: rawEvent.location,
            link: rawEvent.link
        }));
    } catch (e) {
        console.log(e);
        return undefined;
    }
}

export async function GetUpcomingEvents(): Promise<HuskythonEvent[] | undefined> {
    const allEvents = await GetHuskythonEvents();
    if (allEvents === undefined) return undefined;

    return allEvents.filter((event) => event.start > DateTime.now() || (event.start <= DateTime.now() && event.end > DateTime.now()));
}

export async function SearchForParticipant(query: string): Promise<Participant[] | undefined> {
    try {
        const response = await axios.get(`${API_URL}/participants/search?q=${query}`, {timeout: 5000});

        return response.data;
    } catch (e) {
        console.log(e);
        return undefined;
    }
}

export async function GetParticipantLeaderboard(): Promise<Participant[] | undefined> {
    try {
        const response = await axios.get(`${API_URL}/participants/leaderboard`, {timeout: 5000});

        return response.data;
    } catch (e) {
        console.log(e);
        return undefined;
    }
}

export async function GetParticipantById(id: string): Promise<Participant | undefined> {
    try {
        const response = await axios.get(`${API_URL}/participants/${id}`, {timeout: 5000});

        return response.data;
    } catch (e) {
        console.log(e);
        return undefined;
    }
}

export async function GetParticipantDonations(id: string): Promise<Donation[] | undefined> {
    try {
        const response = await axios.get(`${API_URL}/participants/${id}/donations`, {timeout: 5000});

        return response.data;
    } catch (e) {
        console.log(e);
        return undefined;
    }
}

export async function SearchForTeam(query: string): Promise<Team[] | undefined> {
    try {
        const response = await axios.get(`${API_URL}/teams/search?q=${query}`, {timeout: 5000});

        return response.data;
    } catch (e) {
        console.log(e);
        return undefined;
    }
}

export async function GetTeamLeaderboard(): Promise<Team[] | undefined> {
    try {
        const response = await axios.get(`${API_URL}/teams/leaderboard`, {timeout: 5000});

        return response.data;
    } catch (e) {
        console.log(e);
        return undefined;
    }
}

export async function GetTeamById(id: string): Promise<Team | undefined> {
    try {
        const response = await axios.get(`${API_URL}/teams/${id}`, {timeout: 5000});

        return response.data;
    } catch (e) {
        console.log(e);
        return undefined;
    }
}

export async function GetTeamParticipants(id: string): Promise<Participant[] | undefined> {
    try {
        const response = await axios.get(`${API_URL}/teams/${id}/participants`, {timeout: 5000});

        return response.data;
    } catch (e) {
        console.log(e);
        return undefined;
    }
}
