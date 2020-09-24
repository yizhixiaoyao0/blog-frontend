<template>
  <div>
    <el-card shadow="never">
      <el-menu :default-active="active" @select="onSelect">
        <template v-for="item in menuList">
          <el-menu-item
            v-if="
              item &&
                item.type == 'user' &&
                (token || !item.LoginRequired) &&
                (!mini || !item.mini)
            "
            :index="item.path"
          >
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </el-card>

  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      active: "",
      parentUrl: "",
      menuList: [{
        type: "user",
        path: '/user/new',
        icon: 'el-icon-star-off',
        title: '最新动态',
      }, {
        type: 'user',
        path: '/user/social',
        icon: 'el-icon-mobile-phone',
        title: '社交圈',
      }, {
        type: 'user',
        path: '/user/blog',
        icon: 'el-icon-edit-outline',
        title: '博客列表',
      }, {
        type: 'user',
        path: '/user/project',
        icon: 'el-icon-service',
        title: '开源项目',
      }, {
        type: 'user',
        path: '/user/helper',
        icon: 'el-icon-printer',
        title: '使用帮助',
        mini: true
      }],
    };
  },
  computed: {
    ...mapGetters(["token", "githubUsername", "mini"]),
    constantRouterMap() {
      console.log(this.$router.options.routes, "this.$route");
      return this.$router.options.routes;
    },
  },
  mounted() {
    let arr = this.$route.path.split("/");
    this.active = "/" + arr[1] + "/" + arr[2];
  },
  methods: {
    onSelect(index) {
      this.$router.push(index);
    },
  },
};
</script>
