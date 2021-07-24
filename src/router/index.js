import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Details from '@/views/passenger/passengerDetails.vue'
import layout from '@/views/passenger/layout.vue'
import airline from '@/views/passenger/airline.vue'
import notFound from '@/views/NotFound.vue'
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path:"/passenger/:_id",
    props:true,
    name:"passengerLayout",
    component:layout,
    children:[{
      path:'',
      name:'passengerDetails',
      component:Details
    },
    {
      path:'airline',
      name:'passengerAirline',
      props:true,
      component:airline
    }
  ]
  },
  {
    path:'/:catchAll(.*)',
    name:'NotFound',
    component:notFound
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
