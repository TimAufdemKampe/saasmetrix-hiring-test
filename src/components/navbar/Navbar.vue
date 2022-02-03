<template>
  <div class="navWrapper">
    <div id="menu" :class="{ active: isActive }">
      <el-menu mode="horizontal" :router="true">
        <el-menu-item id="logo">
          <logo />
        </el-menu-item>
        <el-menu-item index="/members" :route="{ name: 'Members' }">
          Benutzer Übersicht
        </el-menu-item>
        <el-menu-item
          index="/members/analytics"
          :route="{ name: 'MemberAnalytics' }"
        >
          Benutzer Analytics
        </el-menu-item>
        <el-menu-item index="/payments">Zahlungen</el-menu-item>
        <el-menu-item index="/contact">Buchungen</el-menu-item>
      </el-menu>
    </div>
    <div id="toggle" @click="select()">
      <div class="span" id="top" :class="{ active: isActive }"></div>
      <div class="span" id="middle" :class="{ active: isActive }"></div>
      <div class="span" id="bottom" :class="{ active: isActive }"></div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Logo from "@/components/navbar/Logo.vue";

export default defineComponent({
  components: {
    Logo,
  },
  data() {
    return {
      activeIndex: "/hello",
      isActive: false,
    };
  },
  methods: {
    select: function () {
      this.isActive = !this.isActive;
    },
  },
});
</script>

<style>
.navWrapper {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 99;
}

#toggle {
  position: absolute;
  right: 20px;
  top: 14px;
  z-index: 999;
  width: 40px;
  height: 40px;
  cursor: pointer;
  float: right;
  transition: all 0.3s ease-out;
  visibility: hidden;
  opacity: 0;
}

#toggle .span {
  border-radius: 10px;
  background: #0e5fc2;
  transition: all 0.3s ease-out;
  backface-visibility: hidden;
}

#top.span.active {
  transform: rotate(45deg) translateX(3px) translateY(5px);
}

#middle.span.active {
  opacity: 0;
}

#bottom.span.active {
  transform: rotate(-45deg) translateX(8px) translateY(-10px);
}

@media only screen and (max-width: 768px) {
  #toggle {
    visibility: visible;
    opacity: 1;
    margin-top: 6px;
  }

  #toggle .span {
    height: 4px;
    margin: 5px 0;
    transition: all 0.3s ease-out;
    backface-visibility: visible;
    visibility: visible;
    opacity: 1;
  }

  #menu.active {
    margin: 70px 0;
    visibility: visible;
    opacity: 0.98;
    transition: all 0.5s ease-out;

    @include sm-menu;
  }
}

@mixin sm-menu {
  .el-menu--horizontal .el-menu-item {
    text-align: center;
    float: none;
    display: block;
    height: 100%;
    width: 100%;
    border-top: 1px solid #eaeaeb;
    font-size: 18px;
  }
}
</style>
