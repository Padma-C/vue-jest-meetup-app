<template>
  <div data-testid="home-page">
    <div class="meetup-cards">
      <MeetupSummary
        v-for="(item, i) in items"
        :key="i"
        :meetup="item"
        v-on:view-meetup="viewMeetup($event)"
      />
    </div>
  </div>
</template>

<script>
import items from "../data/items.js";
import MeetupSummary from "../components/MeetupSummary.vue";

export default {
  name: "Home",
  components: {
    MeetupSummary,
  },
  data() {
    return {
      items: items,
      meetup: null,
    };
  },
  methods: {
    viewMeetup(meetup) {
      this.meetup = meetup;
    },
  },
};
</script>

<style>
.meetup-cards {
  margin-top: 12%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>