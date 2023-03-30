import DashBoard from "src/pages/DashBoard.vue";

const routes = [
  {
    path: "/",
    component: DashBoard,
  },
  {
    path: "/typo",
    component: () => import("../components/TypoGraphy.vue"),
  },
  {
    path: "/tables",
    component: () => import("../components/TablesComponent.vue"),
  },
  {
    path: "/maps",
    component: () => import("../components/GoogleMaps.vue"),
  },
];

export default routes;
