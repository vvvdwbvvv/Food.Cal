import Vue from 'vue'
import VueRouter from 'vue-router'
import CalendarView from '../views/CalendarView.vue'
import MonthView from '../components/MonthView.vue'

Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      name: 'CalendarView',
      component: CalendarView,
      children: [
        {
          path: '', 
          name: 'MonthView',
          component: MonthView
        }
      ]
    }
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router