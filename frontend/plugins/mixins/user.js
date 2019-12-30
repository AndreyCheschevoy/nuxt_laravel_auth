import Vue from "vue";
import { mapGetters } from "vuex";

const User = {
  install(Vue, options) {
    Vue.mixin({
      computed: {
        ...mapGetters({
          // path to store/auth/authenticated
          user: "user",
          authenticated: "authenticated"
        })
      }
    });
  }
};

Vue.use(User);
