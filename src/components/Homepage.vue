<template>
  <div>
    <h1>Employee Management System</h1>
    <EmployeeInfo :employees="employees" v-show="true"/>
  </div>
</template>

<script>
import EmployeeInfo from "@/components/EmployeeInfo.vue"

export default {
  name: 'Homepage',
  components: {
    EmployeeInfo,
  },
  props: {
    employees: Array
  }
}
</script>

<style scoped>

</style>
