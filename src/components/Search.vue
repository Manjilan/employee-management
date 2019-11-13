<template>
  <div>
  <form @submit.prevent='searchResult'>
  <input type="text" placeholder="Search with name or email" v-model="searchField" />
  <button><img src="https://image.flaticon.com/icons/svg/875/875623.svg"/>Search</button>
  </form>
  <EmployeeInfo :employees='result'/>
  </div>
</template>

<script>
import EmployeeInfo from '@/components/EmployeeInfo.vue'
export default {
  name: 'Search',
  components: {EmployeeInfo},
  props: ['employees'],
  data(){
    return{
      searchField: "",
      result : this.employees
    }
  },
  methods: {
    searchResult(){
      let response = this.employees.filter(employee => employee.name.toLowerCase().includes(this.searchField.toLowerCase())|| employee.email.includes(this.searchField))
      this.result = response
    }
  }
}
</script>

<style scoped>
input, button{
  margin: 2%;
  width: 200px;
  padding: 0.5%;
  border-radius: 20px;
}
img{
  width: 20%;
}
button{
  align-items: center;
}
button, form{
  display: flex;
  justify-content: center;
}
</style>
