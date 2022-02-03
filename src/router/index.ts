import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Members from "@/views/members/Members.vue";
import MemberAnalytics from "@/views/members/MembersAnalytics.vue";
import MemberDetails from "@/views/members/MemberDetails.vue";
import NotFound from "@/views/NotFound.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/members",
    name: "Members",
    component: Members,
  },
  {
    path: "/members/analityics",
    name: "MemberAnalytics",
    component: MemberAnalytics,
  },
  {
    path: "/members/:email",
    name: "MemberDetails",
    component: MemberDetails,
    props: true,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
