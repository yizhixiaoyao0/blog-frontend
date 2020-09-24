// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import "mavon-editor/dist/markdown/github-markdown.min.css";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import store from "~/store/index";
import util from "./utils/util";

export default function(Vue, { router, head, isClient, appOptions }) {
  Vue.mixin({
    data() {
      return {
        GRIDSOME_API_URL: process.env.GRIDSOME_API_URL,
      };
    },
  });
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  Vue.use(ElementUI);
  Vue.use(mavonEditor);

  appOptions.store = store;

  Vue.prototype.$markdown = function(value) {
    return mavonEditor.markdownIt.render(value);
  };

  Vue.prototype.$reload = function(context) {
    let NewPage = "/empty";
    context.$router.push(NewPage);
    context.$nextTick(() => context.$router.go(-1));
  };

  Vue.prototype.$util = util;

  Vue.config.productionTip = false;
}
