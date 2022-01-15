import { InjectionKey } from 'vue'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {Commit, createStore, Store, useStore as baseUseStore} from 'vuex'
import {HuskythonEvent} from "@/types/HuskythonEvent";
import LoadState from "@/types/LoadState";
import {GetHuskythonEvents, GetParticipantById} from "@/scripts/Api";
import {DateTime} from "luxon";
import {Participant} from "@/types/Participant";
import {GetQuickAccessProfileId, RemoveQuickAccessProfileId, SetQuickAccessProfileId} from "@/scripts/Settings";

export interface SettingState {
  loadState: number,
  quickAccessProfile: Participant | undefined
}

export interface EventState {
  loadState: number,
  allEvents: Array<HuskythonEvent>,
  upcomingEvents: Array<HuskythonEvent>
}

export interface State {
  eventState: EventState,
  settingState: SettingState
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    eventState: {
      loadState: LoadState.INIT,
      allEvents: [] as Array<HuskythonEvent>,
      upcomingEvents: [] as Array<HuskythonEvent>
    },
    settingState: {
      loadState: LoadState.INIT,
      quickAccessProfile: undefined
    }
  },
  getters: {
    eventLoadState(state: State) {
      return state.eventState.loadState;
    },
    allEvents(state: State) {
      return state.eventState.allEvents;
    },
    upcomingEvents(state: State) {
      return state.eventState.upcomingEvents;
    },
    quickAccessProfile(state: State) {
      return state.settingState.quickAccessProfile;
    }
  },
  actions: {
    async fetchEvents({ commit }: { commit: Commit }) {
      commit('setEventLoadState', LoadState.LOADING);
      const data = await GetHuskythonEvents();
      if (data === undefined) {
        commit('setEventLoadState', LoadState.ERROR);
        return;
      }

      commit('saveAllEvents', data);

      const upcomingEvents = data.filter((event) => event.start > DateTime.now() || (event.start <= DateTime.now() && event.end > DateTime.now()));
      commit('saveUpcomingEvents', upcomingEvents);
      commit('setEventLoadState', LoadState.LOADED);
    },
    async loadQuickAccessProfile({ commit }: { commit: Commit }) {
      commit('setSettingsLoadState', LoadState.LOADING);

      const id = await GetQuickAccessProfileId();
      if (id === undefined) {
        commit('setSettingsLoadState', LoadState.LOADED);
        return;
      }

      const participant = await GetParticipantById(id);
      if (participant === undefined) {
        commit('setSettingsLoadState', LoadState.ERROR);
        return;
      }

      commit('setQuickAccessProfile', participant);
      commit('setSettingsLoadState', LoadState.LOADED);
    },
    async setQuickAccessProfile({ commit }: { commit: Commit }, payload: Participant)
    {
      await SetQuickAccessProfileId(payload.participantID.toString());
      commit('setQuickAccessProfile', payload);
      commit('setSettingsLoadState', LoadState.LOADED);
    },
    async removeQuickAccessProfile({ commit }: { commit: Commit })
    {
      await RemoveQuickAccessProfileId();
      commit('setQuickAccessProfile', undefined);
      commit('setSettingsLoadState', LoadState.LOADED);
    }
  },
  mutations: {
    saveAllEvents(state: any, payload: any){
      state.eventState.allEvents = payload;
    },
    saveUpcomingEvents(state: any, payload: any){
      state.eventState.upcomingEvents = payload;
    },
    setEventLoadState (state: any, payload: any) {
      state.eventState.loadState = payload;
    },
    setSettingsLoadState (state: any, payload: any) {
      state.settingState.loadState = payload;
    },
    setQuickAccessProfile (state: any, payload: Participant) {
      state.settingState.quickAccessProfile = payload;
    }
  }
});

export function useStore () {
  return baseUseStore(key)
}