<template>
  <div>
    <h3>Profile</h3>
    <div class="card" v-if="editStatus == false">
      <img :src="employee.avatar" />
      <p>First name: {{employee.name}}</p>
      <p>Company: {{employee.company}}</p>
      <p>Email: {{employee.email}}</p>
      <p>Contact Number: {{employee.contact}}</p>
      <p>Designation: {{employee.designation}}</p>
      <button @click='editing()'>Edit</button>
      <button @click='deleteEmployee()'>Delete</button>
      <div class="modal" v-show='modal'>
        <p>Are you sure you want to delete this employee record?</p>
        <button @click="$emit('delete:info', employee.id)">Yes</button>
        <router-link to="/EmployeeInfo"><button>Cancel</button></router-link>
      </div>
    </div>
    <form class="card" @submit.prevent="handleSubmit" v-else>
        <h1>Edit</h1>
        <div class="form-info">
        <label for="fullname">Full name</label>
        <input type="text" name="fullname" v-model="employee.name" value="employee.name"/>
        <label for="company">Company Name</label>
        <input type="text" name="company" v-model="employee.company" value="employee.company"/>
        <label for="email">Email Address</label>
        <input type="email" name="email" v-model="employee.email" value="employee.email"/>
        <label for="contact">Contact Number</label>
        <input type="tel" name="contact" v-model="employee.contact" value="employee.contact"/>
        <label for="designation">Designation</label>
        <select v-model="employee.designation" value="employee.designation">
          <option disabled value="">Please select one</option>
          <option>Software Developer</option>
          <option>Senior Software Developer</option>
          <option>Quality Assurance</option>
          <option>Technical Lead</option>
          <option>Manager</option>
        </select>
        </div>
        <button>Save</button>
    </form>
  </div>
</template>

<script>

export default {
  name: 'Profile',
  props: ['employees'],
  data() {
    return {
      editStatus: false,
      modal: false,
      employee: this.employees[this.$route.params.id-1]
    }
  },
  methods: {
    editing() {
      this.editStatus= true
    },
    handleSubmit(){
    this.$emit('edit:employee', this.employee)
    this.$router.push("/EmployeeInfo")
    },
    deleteEmployee(){
      this.modal = true
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
img{
width: 100px;
}
.form-info{
  display: flex;
  flex-direction: column;
}
</style>
