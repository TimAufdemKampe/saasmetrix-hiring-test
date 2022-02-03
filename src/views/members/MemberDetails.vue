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
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card class="box-card">
          <div class="card-header">
            <h2>Username: {{ this.member.login.username }}</h2>
          </div>
          <el-row>
            <el-col :span="12">
              <MemberDetailInfoLine
                name="Name"
                :text="this.member.name.first + ' ' + this.member.name.last"
              />
              <MemberDetailInfoLine
                name="Geschlecht"
                :text="this.member.gender.german"
              />
              <MemberDetailInfoLine
                name="Registriert ab"
                :text="
                  new Date(this.member.registered.date).toLocaleDateString()
                "
              />
              <MemberDetailInfoLine
                name="Geboren am"
                :text="
                  new Date(this.member.registered.date).toLocaleDateString()
                "
              />
              <MemberDetailInfoLine
                name="Telefonnummer"
                :text="this.member.phone"
              />
              <MemberDetailInfoLine
                name="Handynummer"
                :text="this.member.cell"
              />
              <Divider />
              <h2 style="margin-bottom: 3px; margin-top: 18px">Adresse:</h2>
              <MemberDetailInfoLine
                name="Straße"
                :text="
                  this.member.location.street.name +
                  ' ' +
                  this.member.location.street.number
                "
              />
              <MemberDetailInfoLine
                name="Stadt"
                :text="this.member.location.city"
              />
              <MemberDetailInfoLine
                name="Bundesland"
                :text="this.member.location.state"
              />
              <MemberDetailInfoLine
                name="Postleitzahl"
                :text="this.member.location.postcode"
              />
            </el-col>
            <el-col :span="12">
              <img
                :src="this.member.picture.large"
                alt="avatar"
                style="width: 300px"
              />
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col :span="12">
        <MemberDetailMap
          :lat="Number.parseInt(this.member.location.coordinates.latitude)"
          :lng="Number.parseInt(this.member.location.coordinates.longitude)"
        />
      </el-col>
    </el-row>
  </div>
  <div v-else-if="loading">
    <div class="header-center">
      <h1>Benutzerdaten werden geladen...</h1>
    </div>
  </div>
  <div v-else>
    <div class="header-center">
      <h1>Kein Benutzer gefunden</h1>
      <h4>
        Es konnte leider kein Benutzer mit der Email Adresse gefunden werden.
      </h4>
    </div>
  </div>
</template>

<script lang="ts">
import { api } from "@/api";
import MemberDetailInfoLine from "@/components/memberDetail/MemberDetailInfoLine.vue";
import MemberDetailMap from "@/components/memberDetail/MemberDetailMap.vue";
import Divider from "@/components/Divider.vue";
import { Member } from "@/types/member.type";
import { defineComponent } from "vue";

type State = {
  loading: boolean;
  email: string | string[];
  member: Member | null;
};

export default defineComponent({
  name: "MemberDetails",
  components: { MemberDetailInfoLine, MemberDetailMap, Divider },
  data(): State {
    return {
      loading: false,
      email: this.$route.params.email,
      member: null,
    };
  },
  async created() {
    this.loading = true;
    const response = await api.getMembers();
    const member: Member[] = response.data.results
      .map((tempMember: Member) => {
        if (typeof tempMember.gender === "string")
          return {
            ...tempMember,
            gender: {
              default: tempMember.gender,
              german: tempMember.gender === "male" ? "Männlich" : "Weiblich",
            },
          };
      })
      .filter((tempMember: Member) => {
        return tempMember.email === this.email;
      });
    this.loading = false;
    this.member = member[0];
  },
});
</script>

<style>
.header-center {
  text-align: center;
  padding-top: 50px;
  margin: auto;
  width: 50%;
  height: 100vh;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
