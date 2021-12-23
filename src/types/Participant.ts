export interface Participant {
    participantID: number;
    displayName: string;
    avatarImageURL: string;
    fundraisingGoal: number;
    sumDonations: number;
    numDonations: number;
    sumPledges: number;
    numIncentives: number;
    numAwardedBadges: number;
    numMilestones: number;
    teamID: number;
    teamName: string;
    isTeamCaptain: boolean;
    links: {
        donate: string;
        page: string;
        facebookFundraiser: string;
    };
    eventID: number;
    eventName: string;
    createdDateUTC: string;
}
