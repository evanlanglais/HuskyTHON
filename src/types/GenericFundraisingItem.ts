import {Participant} from "@/types/Participant";
import {Team} from "@/types/Team";

export interface GenericFundraisingItem {
    id: number;
    name: string;
    avatarImageURL: string;
    raised: number;
    link: string;
}

export function FromParticipant(participant: Participant): GenericFundraisingItem {
    return {
        id: participant.participantID,
        name: participant.displayName,
        avatarImageURL: participant.avatarImageURL,
        raised: participant.sumDonations,
        link: `/participant/${participant.participantID}`
    }
}

export function FromTeam(team: Team): GenericFundraisingItem {
    return {
        id: team.teamID,
        name: team.name,
        avatarImageURL: team.avatarImageURL,
        raised: team.sumDonations,
        link: `/team/${team.teamID}`
    }
}
