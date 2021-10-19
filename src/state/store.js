import { createStore } from 'vuex';

function updateLocalStorage(profile) {
  localStorage.setItem('profile', JSON.stringify(profile));
}

export default createStore({
  name: 'quantity',
  data() {
    return {
      quantity: 0,
    };
  },
  state: {
    profile: [],
  },
  mutations: {
    Register(state, meetup) {
      let item = state.profile.find((i) => i.id === meetup.id);

      if (item) {
        item.quantity++;
      } else {
        state.profile.push({ ...meetup, quantity: 1 });
      }
      updateLocalStorage(state.profile);
    },
    Cancel(state, meetup) {
      let item = state.profile.find((i) => i.id === meetup.id);

      if (item) {
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          state.profile = state.profile.filter((i) => i.id !== meetup.id);
        }
      }
      updateLocalStorage(state.profile);
    },
    updateProfileFromLocalStorage(state) {
      const profile = localStorage.getItem('profile');
      if (profile) {
        state.profile = JSON.parse(profile);
      }
    },
  },
  getters: {
    meetupQuantity: (state) => (meetup) => {
      const item = state.profile.find((i) => i.id === meetup.id);

      if (item) return item.quantity;
      else return null;
    },
    profileItems: (state) => {
      return state.profile;
    },
  },
});
