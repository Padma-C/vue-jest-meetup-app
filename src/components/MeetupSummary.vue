<template>
  <div data-testid="summary-page">
    <div class="meetup-info">
      <h2>
        {{ meetup.title }}
      </h2>

      <img v-if="meetup.title == 'Women In Tech'" src="@/assets/WIT.jpg" />
      <img
        v-if="meetup.title == 'Developers Unite'"
        src="@/assets/Hisingen.jpg"
      />
      <img v-if="meetup.title == 'UX Meetup'" src="@/assets/UX-meetup.jpg" />
      <img
        v-if="meetup.title == 'Frontend Javascript'"
        src="@/assets/Frontend.jpg"
      />
      <img
        v-if="meetup.title == 'Fika and Programming'"
        src="@/assets/Coffee.jpg"
      />

      <h3 class="meetup-date">{{ meetup.date }}</h3>
      <div class="meetup-description">{{ meetup.description }}</div>
      <h4 class="meetup-location">{{ meetup.location }}</h4>

      <div class="profile-total" v-if="meetup_total">
        <h4>Number of seats booked {{ meetup_total }}</h4>
      </div>

      <div class="buttons">
        <button data-testid="cancel" class="cancel" @click.prevent="Cancel()">
          Cancel
        </button>
        <button
          data-testid="register"
          class="register"
          @click.prevent="Register()"
        >
          Register
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../state/store";
export default {
  props: {
    meetup: Object,
    active: Object,
  },

  computed: {
    description() {
      return this.meetup.description.substring(0, 150);
    },
    meetup_total() {
      return store.getters.meetupQuantity(this.meetup);
    },
  },

  methods: {
    Register() {
      store.commit("Register", this.meetup);
    },
    Cancel() {
      store.commit("Cancel", this.meetup);
    },
  },
};
</script>

<style scoped>
img {
  height: 250px;
  width: 250px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 1%;
  object-fit: cover;
}

.meetup-info {
  width: 80%;
  margin: 10%;
  padding: 10px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 0 5px #4c5270;
}

.meetup-date {
  color: #4c5270;
}

.meetup-description {
  margin: 3%;
  font-size: 0.85rem;
}

.meetup-location {
  margin: 4%;
  color: #4c5270;
}

.view-meetup-button {
  background: #04d4f0;
  width: 150px;
  border: none;
  padding: 10px;
  border-radius: 5px;
  margin: 0 10px 50px 5px;
  cursor: pointer;
}

.view-meetup-button:hover {
  background-color: #fbe698;
}

.register,
.cancel {
  background: #6dece0;
  width: 150px;
  border: none;
  padding: 10px;
  border-radius: 5px;
  margin: 0 5px 30px 5px;
  cursor: pointer;
}

.register:hover,
.cancel:hover {
  background: #fbe698;
}

@media (min-width: 450px) {
  .meetup-info {
    width: 400px;
    margin: 15px;
  }
}
</style>



