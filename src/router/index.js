import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Details from '@/views/passenger/passengerDetails.vue'
import layout from '@/views/passenger/layout.vue'
import airline from '@/views/passenger/airline.vue'
import notFound from '@/views/NotFound.vue'
import Nprogress from 'nprogress'
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
  },
  {
    path:'/404/:resource',
    name:'404resource',
    component:notFound,
    props:true
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to,form,savedPosition){
    if(savedPosition){
      return savedPosition
    }
    return {top:0}
  }

});
router.beforeEach(()=>{
  Nprogress.start()
})
router.afterEach(()=>{
  Nprogress.done()
})

export default router;
