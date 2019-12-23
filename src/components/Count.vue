<template>
  <div>
    <p>{{$store.state.count}}---{{countType}}</p>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <button @click="incrementEven">偶数+1</button>
    <button @click="incrementAsync">async ++</button>
    <button @click="closeAsync">close async</button>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      timer: null
    };
  },
  computed: {
    // countType() {
    //   return this.$store.getters.count % 2 ? "奇数" : "偶数";
    // }
    ...mapGetters(["countType"])
  },
  components: {},
  methods: {
    ...mapActions([
      "increment",
      "decrement",
      "incrementEven",
      "incrementAsync"
    ]),
    // increment() {
    //   this.$store.dispatch("increment"); //触发store中对应的action调用
    // },
    // decreament() {
    //   this.$store.dispatch("decrement");
    // },
    // incrementEven() {
    //   this.$store.dispatch("incrementEven");
    // },
    // incrementAsync() {
    //   this.$store.dispatch("incrementAsync");
    // },
    closeAsync() {
      clearInterval(this.$store.state.timer);
      this.$store.state.timer = null;
    }
  }
};
</script>

<style scope>
</style>
