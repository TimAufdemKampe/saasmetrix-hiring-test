<template>
  <h1>Benutzer Übersicht</h1>
  <div v-if="!loading && members">
    <el-row :gutter="20">
      <el-col :span="4">
        <h4>Tabelle durchsuchen</h4>
      </el-col>
      <el-col :span="6" style="margin: auto 0">
        <div style="width: 300px">
          <el-input
            v-model="table.search"
            placeholder="Suche nach Email Adresse"
          />
        </div>
      </el-col>
    </el-row>
    <el-table :data="filteredTableData" style="width: 100%">
      <el-table-column fixed prop="id.value" label="Id" />
      <el-table-column prop="name.first" label="Vorname" />
      <el-table-column prop="name.last" label="Nachname" />
      <el-table-column prop="email" label="Email" />
      <el-table-column prop="gender" label="Geschlecht" />
      <el-table-column fixed="right" label="Operations" width="120">
        <template #default="scope">
          <router-link
            :to="{
              name: 'MemberDetails',
              params: {
                email: scope.row.email,
              },
            }"
            class="no-text-decoration"
          >
            <el-button type="text" size="small">Details</el-button>
          </router-link>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      small
      background
      layout="prev, pager, next"
      :page-size="this.table.size"
      :total="
        this.table.search ? this.filteredTableData.length : this.members.length
      "
      class="pagination"
      @current-change="setPage"
    />
  </div>
  <div v-else-if="loading">
    <div class="center-text">
      <h1>Benutzer werden geladen...</h1>
    </div>
  </div>
  <div v-else>
    <div class="center-text">
      <h1>Keine Benutzer gefunden</h1>
      <h4>Es konnte leider keine Benutzer geladen werden.</h4>
    </div>
  </div>
</template>

<script lang="ts">
import { api } from "@/api";
import { defineComponent } from "vue";

type State = {
  loading: boolean;
  members: any[] | null;
  table: {
    search: string | undefined;
    page: number;
    size: number;
  };
};

export default defineComponent({
  data(): State {
    return {
      loading: false,
      members: null,
      table: {
        search: undefined,
        page: 1,
        size: 20,
      },
    };
  },
  async created(): Promise<void> {
    this.loading = true;
    const response = await api.getMembers();
    this.members = response.data.results;
    this.loading = false;
  },
  computed: {
    filteredTableData(): any[] {
      if (this.members) {
        return this.members
          .filter((member) => {
            if (!this.table.search) return true;
            return (
              member.email
                .toLowerCase()
                .indexOf(this.table.search.toLowerCase()) > -1
            );
          })
          .slice(
            this.table.size * this.table.page - this.table.size,
            this.table.size * this.table.page
          );
      } else return [];
    },
  },
  methods: {
    setPage(pageIndex: number): void {
      this.table.page = pageIndex;
    },
  },
});
</script>

<style>
.no-text-decoration {
  text-decoration: none;
}
.pagination {
  margin-top: 30px;
}
</style>
