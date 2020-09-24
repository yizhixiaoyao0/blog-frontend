import GeneralAPI from "@/api/general";
import Axios from "axios";
const configuration = {
  state: {
    githubUsername: "",
    strUsername: "",
    blogTitle: "",
    blogDescribe: "",
    htmlTitle: "",
    fontColor: "",
    useBackgroundImage: false,
    backgroundColorLeft: "",
    backgroundColorRight: "",
    audioUrl: "",
    mini: false,
    audioAutoPlay: false,
    webSites: [],
  },
  mutations: {
    SET_CONFIGURATION: (state, configuration) => {
      state.githubUsername =
        configuration["githubUsername"] ||
        state.githubUsername ||
        "GitHub-yizhixiaoyao";

      state.strUsername = configuration["strUsername"] || "yizhixiaoyao0";

      state.blogTitle = configuration["blogTitle"] || state.githubUsername;

      state.blogDescribe =
        configuration["blogDescribe"] ||
        `欢迎来到${state.githubUsername}的个人博客。`;

      state.htmlTitle =
        configuration["htmlTitle"] || `${state.githubUsername}的博客`;

      state.fontColor = configuration["fontColor"] || "#ffffff";

      state.useBackgroundImage = configuration["useBackgroundImage"] || false;

      state.backgroundColorLeft =
        configuration["backgroundColorLeft"] || "#155799";

      state.backgroundColorRight =
        configuration["backgroundColorRight"] || "#159957";

      //http://sc1.111ttt.cn:8282/2018/1/03m/13/396131232171.m4a?tflag=1519095601&pin=6cd414115fdb9a950d827487b16b5f97#.mp3
      state.audioUrl = configuration["audioUrl"] || "";

      state.mini = configuration["mini"] || false;

      state.audioAutoPlay = configuration["audioAutoPlay"] || false;

      state.webSites = configuration["webSites"] || [];
    },
  },

  actions: {
    InitConfig({ commit }) {
      GeneralAPI.getGeneral().then((data) => {
        commit("SET_CONFIGURATION", data.data);
      });
    },
    Init({ commit }) {
      // Axios({
      //   url: '/configuration.json'
      // }).then((data) => {
      //   commit('SET_CONFIGURATION', data.data)
      // })
      let xmlhttp;
      if (typeof window !== "undefined") {
        if (window.XMLHttpRequest) {
          xmlhttp = new XMLHttpRequest();
        } else {
          xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.open("GET", "/configuration.json", false);
        xmlhttp.send();
        let configuration = JSON.parse(xmlhttp.responseText);
        commit("SET_CONFIGURATION", configuration);
      }
    },
  },
};

export default configuration;
