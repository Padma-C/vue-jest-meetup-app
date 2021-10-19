<template>
  <h3>{{ item.title }}</h3>
  <h4>Number of seats booked: {{ item.quantity }}</h4>
  <div class="description">{{ item.description }}</div>

  <div class="rating">
    <star-rating :rating="3" @update:rating="rating = $event"></star-rating>
    <hr />
  </div>
</template>

<script>
import StarRating from "vue-star-rating";

export default {
  props: ["item"],
  components: {
    StarRating,
  },
  methods: {
    showCurrentRating(rating) {
      this.currentSelectedRating =
        rating === 0
          ? this.currentSelectedRating
          : "Click to select " + rating + " stars";
    },
    setCurrentSelectedRating(rating) {
      this.currentSelectedRating = "You have Selected: " + rating + " stars";
    },
  },
  computed: {
    mouseOverRatingText() {
      return this.mouseOverRating
        ? "Click to select " + this.mouseOverRating + " stars"
        : "No Rating";
    },
  },
  data() {
    return {
      mouseOverRating: null,
    };
  },
};
</script>

<style scoped>
.rating {
  margin: 3%;
}

hr {
  margin: 3%;
  border: 0.5px dashed #787a81;
}
</style>