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

export interface Donation {
    displayName: string;
    message: string;
    amount: number;
    avatarImageURL: string;
    participantID: number;
    teamID: number;
    eventID: number;
    donorID: string;
    donationID: string;
    recipientName: string;
    links: {
        recipient: string;
    };
    createdDateUTC: string;
}

