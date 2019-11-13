<template>
  <div>
    <div class="menu">
      <router-link :to="{name: 'NewEmployee'}"><div class="cards"><img src="https://image.flaticon.com/icons/svg/1160/1160836.svg"/>Add Employee</div></router-link>
      <router-link :to="{name :'EmployeeInfo'}"><div class="cards"><img src="https://image.flaticon.com/icons/svg/1395/1395809.svg"/>Employee Records</div></router-link>
      <router-link :to="{name :'Search'}"><div class="cards"><img src="https://image.flaticon.com/icons/svg/1395/1395809.svg"/>Search Records</div></router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Homepage',
  props: {
    employees: Array
  },
  data(){
    return {
      employeeRecordStatus: false
    }
  }
}
</script>

<style scoped>
.menu, .cards{
  display: flex;
}
.cards{
  width: 200px;
  height: 200px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  box-shadow: 2px 6px 8px gray;
}
.menu{
width: 40%;
justify-content: space-around;
margin: 5% auto;
}
img{
width: 50px;
}
</style>
