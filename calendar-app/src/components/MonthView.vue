<template>
  <div class="month-view">
    <h2>{{ currentMonth }}</h2>
    <div class="week-day-labels">
      <span v-for="day in weekDays" :key="day">{{ day }}</span>
    </div>
    <div class="calendar-grid">
      <div v-for="day in calendarDays" :key="day.date" class="calendar-day">
        {{ day.date.getDate() }}
      </div>
    </div>
  </div>
</template>

<script>
import { format, startOfMonth, endOfMonth, eachDayOfInterval, startOfWeek, endOfWeek } from 'date-fns'

export default {
  name: 'MonthView',
  data() {
    return {
      weekDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      
      currentDate: new Date()
    }
  },
  computed: {
    calendarDays() {
      const start = startOfWeek(startOfMonth(this.currentDate), { weekStartsOn: 1 })
      const end = endOfWeek(endOfMonth(this.currentDate), { weekStartsOn: 1 })
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      
      return eachDayOfInterval({ start, end })
    },
    currentMonth() {
    return format(this.currentDate, 'MMMM yyyy')
    }
  }
}
</script>

<style scoped>

</style>