import { MutationTree, ActionTree } from 'vuex';
import { RootState } from '../store';

// 定义类型，描述 homeStore
export interface IHomeState {
  title: string;
}

export enum TYPES {
  SET_TITLE = 'SET_TITLE',
}

const state: IHomeState = {
    title: 'Vuex state',
};

const mutations: MutationTree<IHomeState> = {
  [TYPES.SET_TITLE](s, newTitle: string) {
    s.title = newTitle;
  },
};

const actions: ActionTree<IHomeState, RootState> = {
  setTitle({ commit }, ele) {
    commit(TYPES.SET_TITLE, ele);
  },
};

export const homeStore = {
  namespaced: true,
  state,
  mutations,
  actions,
};