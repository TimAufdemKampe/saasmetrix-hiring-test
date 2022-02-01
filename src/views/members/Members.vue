<template>
  <h1>Members</h1>
  <el-table :data="pagedTableData" style="width: 100%">
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
          <el-button type="text" size="small">Detail</el-button>
        </router-link>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
    small
    background
    layout="prev, pager, next"
    :page-size="this.table.size"
    :total="this.members.length"
    class="pagination"
    @current-change="setPage"
  />
</template>

<script>
import { api } from "@/api";

export default {
  data() {
    return {
      members: null,
      table: {
        page: 1,
        size: 20,
      },
    };
  },
  async created(): void {
    const response = await api.getMembers();
    console.log(response.data.results);
    this.members = response.data.results;
  },
  computed: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    pagedTableData() {
      return this.members.slice(
        this.table.size * this.table.page - this.table.size,
        this.table.size * this.table.page
      );
    },
  },
  methods: {
    setPage(pageIndex: number): void {
      this.table.page = pageIndex;
    },
  },
};
</script>

<style>
.no-text-decoration {
  text-decoration: none;
}
.pagination {
  margin-top: 30px;
}
</style>
