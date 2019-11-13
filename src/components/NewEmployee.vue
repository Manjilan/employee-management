<template>
  <form class="card" @submit.prevent="handleSubmit">
      <h1>Create an employee record</h1>
      <div class="form-info">
      <label for="fullname">Full name</label>
      <input type="text" name="fullname" v-model="employee.name"/>
      <label for="company">Company Name</label>
      <input type="text" name="company" v-model="employee.company"/>
      <label for="email">Email Address</label>
      <input type="email" name="email" v-model="employee.email"/>
      <label for="contact">Contact Number</label>
      <input type="tel" name="contact" v-model="employee.contact"/>
      <label for="designation">Designation</label>
      <select v-model="employee.designation">
        <option disabled value="">Please select one</option>
        <option>Software Developer</option>
        <option>Senior Software Developer</option>
        <option>Quality Assurance</option>
        <option>Technical Lead</option>
        <option>Manager</option>
      </select>
      <label for="avatar">Avatar</label>
      <div class="avatar">
      <input type="radio" v-model="employee.avatar" value="https://image.flaticon.com/icons/svg/2132/2132422.svg"><img src="https://image.flaticon.com/icons/svg/2132/2132422.svg"/>
      <input type="radio" v-model="employee.avatar" value="https://image.flaticon.com/icons/svg/2132/2132543.svg"><img src="https://image.flaticon.com/icons/svg/2132/2132543.svg"/>
      <input type="radio" v-model="employee.avatar" value="https://image.flaticon.com/icons/svg/2038/2038783.svg"><img src="https://image.flaticon.com/icons/svg/2038/2038783.svg"/>
      <input type="radio" v-model="employee.avatar" value="https://image.flaticon.com/icons/svg/2132/2132536.svg"><img src="https://image.flaticon.com/icons/svg/2132/2132536.svg"/>
      </div>
      </div>
      <button>Save</button>
  </form>
</template>

<script>

export default {
  name: 'NewEmployee',
  props: ['employees'],
  data () {
    return {
      employee: {
        name: "",
        company: "",
        email: "",
        contact: "",
        designation: "",
        avatar: "",
        id: this.employees.length+1
      }
    }
  },
  methods: {
    handleSubmit(){
      this.$emit('new:employee', this.employee)
      this.$router.push("/EmployeeInfo")
    }
  }
}
</script>

<style scoped>
.card{
  width: 50%;
  box-shadow: 2px 10px 20px rgba(0,0,0,0.20), 0 6px 6px rgba(0,0,0,0.25);
  margin: 0 auto;
  padding: 2%;
}
.form-info{
  display: flex;
  flex-direction: column;
  align-items: center;
}
input{
  width: 40%;
}
.avatar{
  display: flex;
  align-items: center;
}
img{
  width: 50px;
}
.avatar input{
  width: 20px;
  margin: 0 2%;
}
label{
  margin: 1%;
}
</style>
