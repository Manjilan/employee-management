<template>
  <div class="container">
    <header class="employee-list row">
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
    <div v-else v-for="employee in employees" :key="employee.id">
    <router-link :to="{name: 'Profile', params: {id: employee.id}}" :employee='employee' class="row" @new:employee="newEmployee">
    <div class="col-1">
      <p>{{employee.name}}</p>
    </div>
    <div class="col-2">
      <p>{{employee.company}}</p>
    </div>
    </router-link>
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
}
.employee-list div{
  margin: 0;
}
.container{
border: 1px solid black;
}
.col-1, .col-2{
  width: 50%;
  text-align: center;
}
.row{
  border-bottom: 1px solid black;
}
.col-1{
  border-right: 1px solid black;
}

</style>
