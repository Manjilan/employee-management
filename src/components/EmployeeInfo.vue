<template>
  <div>
    <header class="employee-list">
    <div class="col-1">
      <h3>Employee Name</h3>
    </div>
    <div class="col-2">
      <h3>Company Name</h3>
    </div>
    </header>
    <p v-if="employees.length < 1">
      Employee Record is Empty
    </p>
    <div v-else class="row" v-for="employee in employees" :key="employee.id">
    <div class="col-1">
      <p>{{employee.name}}</p>
    </div>
    <div class="col-2">
      <p>{{employee.company}}</p>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmployeeInfo',
  props: [
  'employees'
  ],
  data(){
  return{
    search: ""
  }
  },
  methods:{
    searchByDetail(text){
      this.employees.filter(employee=> employee.name == text || employee.email==text ? employee : "No Results Found")
    }
  }
}
</script>

<style scoped>
.employee-list, .row{
  display: flex;
  justify-content: center;
  border: 1px solid black;
}
.employee-list div{
  margin: 0 3%;
}
.col-1, .col-2{
  width: 50%;
  text-align: center;
}
</style>
