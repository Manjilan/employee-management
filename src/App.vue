<template>
  <div id="app">
    <Homepage :employees="employees" />
    <button @click="editform">Add new employee</button>
    <NewEmployee @new:employee="newEmployee" v-show="this.add"/>
    <Profile :employee="employees[0]" @delete:info="deleteEmployeeInfo" v-show="true" @edit:info="editEmployeeInfo"/>
  </div>
</template>

<script>
import Homepage from '@/components/Homepage.vue'
import NewEmployee from '@/components/NewEmployee.vue'
import Profile from '@/components/Profile.vue'

export default {
  name: 'app',
  components: { Homepage, NewEmployee, Profile },
  data(){
    return {
      employees: [
      {
      id: 1,
      name: "Manjila Nakarmi",
      company: "CopyThat",
      designation: "Software Developer",
      email: "nakarmi@manjila.com",
      contact: 5105993435,
      avatar: "https://image.flaticon.com/icons/svg/2132/2132543.svg"
      },
      {
      id: 2,
      name: "Mathew Walker",
      company: "Infrrd"
      }
      ],
      add: false
    }
  },
  methods: {
    newEmployee(employee){
      employee.id= this.employees.indexOf(employee)+1;
      this.employees=[...this.employees, employee]
    },
    deleteEmployeeInfo(id){
      this.employees = this.employees.filter(employee => employee.id !== id)
    },
    editEmployeeInfo(id, updatedInfo){
      this.employees = this.employees.filter(employee => {
          employee.id !== id ? updatedInfo : employee
        })
    },
    editform(){
      this.add = true
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
