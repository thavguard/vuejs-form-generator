import { createStore } from 'vuex';

export interface UserProfile {
  name: string;
  email: string;
  subscribe: boolean;
}

export interface RootState {
  profile: UserProfile;
}

export default createStore<RootState>({
  state: {
    profile: {
      name: 'Иван Иванов',
      email: 'ivan@example.com',
      subscribe: true
    }
  },
  mutations: {
    updateProfile(state, profile: UserProfile) {
      state.profile = profile;
    }
  },
  actions: {
    saveProfile({ commit }, profile: UserProfile) {
      commit('updateProfile', profile);
    }
  },
  getters: {
    profile: (state) => state.profile
  }
});
