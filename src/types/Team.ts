export interface Team {
    name: string;
    teamID: number;
    avatarImageURL: string;
    capitanDisplayName: string;
    numParticipants: number;
    fundraisingGoal: number;
    sumDonations: number;
    numDonations: number;
    numAwardedBadges: number;
    sumPledges: number;
    createdDateUTC: string;
    eventID: number;
    eventName: string;
    links: {
        donate: string;
        page: string;
    };
}
