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
