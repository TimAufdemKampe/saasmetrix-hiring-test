<template>
  <el-row :gutter="20">
    <el-col :span="6">
      <h1>Benutzer Details</h1>
    </el-col>
    <el-col :span="6" style="margin: auto 0">
      <el-button @click="$router.push({ name: 'Members' })"
        >Zurück zur Übersicht</el-button
      >
    </el-col>
  </el-row>
  <div v-if="!loading && member">
    <h1>{{ member.email }}</h1>
  </div>
  <div v-else-if="loading">
    <div class="center-text">
      <h1>Benutzerdaten werden geladen...</h1>
    </div>
  </div>
  <div v-else>
    <div class="center-text">
      <h1>Kein Benutzer gefunden</h1>
      <h4>
        Es konnte leider kein Benutzer mit der Email Adresse gefunden werden.
      </h4>
    </div>
  </div>
</template>

<script>
import { api } from "@/api";

export default {
  name: "MemberDetails",
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data() {
    return {
      loading: false,
      email: this.$route.params.email,
      member: null,
    };
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async created() {
    this.loading = true;
    const response = await api.getMembers();
    console.log("response", response);
    console.log("props", this.email);
    const member = response.data.results.filter((member) => {
      return member.email === this.email;
    });
    console.log(member[0]);
    this.loading = false;
    this.member = member[0];
  },
};
</script>

<style>
.center-text {
  text-align: center;
  padding-top: 50px;
  margin: auto;
  width: 50%;
  height: 100vh;
}
</style>
