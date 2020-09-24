<template>
  <Layouts>
    <router-view />
  </Layouts>
</template>

<script>
import { mapGetters } from "vuex";
import Layouts from "./layouts/Default.vue";
export default {
  name: "App",
  components: {
    Layouts,
  },
  computed: {
    ...mapGetters(["githubUsername", "htmlTitle"]),
    general() {
      return this.$page.general.edges[0].node;
    },
  },
  created() {
    this.$store.dispatch("Init");
    this.$store.dispatch("InitConfig");
    this.$store.dispatch("GetInfo");
    if (process.client) {
      this.$setTitle(this.$route.meta.title);
      let windowSize = this.$util.getWindowSize();
      let pathArr = this.$route.path.split("/");
      if (pathArr[1] == "user" && windowSize.height > windowSize.width * 1.2) {
        this.$router.push("/mobile/user/blog");
      }
      if (
        pathArr[1] == "mobile" &&
        windowSize.height <= windowSize.width * 1.2
      ) {
        this.$router.push("/");
      }
    }
  },
};
</script>
