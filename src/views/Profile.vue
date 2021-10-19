<template>
  <div data-testid="profile-page">
    <div class="profile-card">
      <div class="main-heading">
        <h2>Your meetups</h2>
        <hr />
        <p
          data-testid="profile-heading"
          class="profile-heading"
          id="profile-heading"
        >
          <ProfileAccount v-for="item in items" :key="item.id" :item="item" />
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileAccount from "../components/ProfileAccount.vue";
import store from "../state/store";

export default {
  props: ["item"],
  components: {
    ProfileAccount,
  },
  computed: {
    items() {
      return store.getters.profileItems;
    },
  },
};
</script>

<style scoped>
.main-heading {
  margin: 5%;
}

.profile-card {
  margin: 12%;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  width: 80%;
  background-color: #ffffff;
  box-shadow: 0 0 5px #4c5270;
}
</style>