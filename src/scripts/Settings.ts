import {Storage} from "@capacitor/storage";

const QUICK_ACCESS_PROFILE_ID_NAME = "quick_access_profile_id";

export async function GetQuickAccessProfileId(): Promise<string | undefined> {
    try {
        const id = await Storage.get({key: QUICK_ACCESS_PROFILE_ID_NAME});
        if (id.value) {
            return id.value;
        }
    } catch (e) {
        console.log(`Unable to get ${QUICK_ACCESS_PROFILE_ID_NAME} - ${e}`);
    }

    return undefined;
}

export async function SetQuickAccessProfileId(id: string) {
    try {
        await Storage.set({key: QUICK_ACCESS_PROFILE_ID_NAME, value: id});
    } catch (e) {
        console.log(`Unable to set ${QUICK_ACCESS_PROFILE_ID_NAME} - ${e}`);
    }
}

export async function RemoveQuickAccessProfileId() {
    try {
        await Storage.remove({key: QUICK_ACCESS_PROFILE_ID_NAME});
    } catch (e) {
        console.log(e);
    }
}
