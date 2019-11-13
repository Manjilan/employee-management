<template>
  <div id="app">
    <router-link to="/"><h1>Employee Management System</h1></router-link>
    <router-view :employees="employees" @new:employee="newEmployee" @delete:info="deleteEmployeeInfo"/>
  </div>
</template>

<script>

export default {
  name: 'app',
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
      company: "Infrrd",
      designation: "Software Developer",
      email: "nakarmi@manjila.com",
      contact: 5105993435,
      avatar: "https://image.flaticon.com/icons/svg/2132/2132543.svg"
      }
      ],
      add: false
    }
  },
  methods: {
    newEmployee(employee){
      employee.id= this.employees.length;
      this.employees=[...this.employees, employee]
    },
    deleteEmployeeInfo(id){
      this.employees = this.employees.filter(employee => employee.id !== id)
      this.$router.push("/EmployeeInfo")
    },
    editEmployeeInfo(id, updatedInfo){
      this.employees = this.employees.filter(employee => {
          employee.id !== id ? updatedInfo : employee
        })
        this.$router.push("/EmployeeInfo")
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
a{
  text-decoration: none;
  color: black;
}
</style>
