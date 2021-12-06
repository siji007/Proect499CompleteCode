<template>
  <div id="content">
    <div id="card" class="card shadow-lg mr-auto ml-auto mt-12" width="400px">
    <div class="card-title">
      <h1 class="text-center mt-3">Login</h1>
    </div>
    <div class="card-body">
      <form @submit.prevent="submit">
      <div class="form-group">
        <label class="text-lg">Email</label>
        <input 
        @blur="$v.email.$touch()"
        v-model="email" class="form-control" type="email" placeholder="Enter your email">
        <div v-if="$v.email.$error">
          <p class="p-1 text-danger" v-if="!$v.email.email"><i class="fas fa-exclamation-circle"></i>Please enter a valid email</p>
          <p class="p-1 text-danger" v-if="!$v.email.required"><i class="fas fa-exclamation-circle"></i>Email is required</p>
        </div>         
      </div>
      <div class="form-group">
        <label class="text-lg">Password</label>
        <div class="d-flex">
        <input
        @blur="$v.password.$touch()"
        v-model="password"
        style="outline:none;"
        class="form-control " :type="showPassword ? 'text' : 'password'"
        placeholder="Enter your password">
        <!-- <button class="" @click="showPassword = !showPassword"><i :class="showPassword ? 'fas fa-eye': 'fas fa-low-vision appearance-none'"> </i></button> -->
        </div>
        <div v-if="$v.password.$error">
          <p class="p-1 text-danger" v-if="!$v.password.alphaNum">Password must contain Numbers,small and capital letters.</p>
          <p class="p-1 text-danger" v-if="!$v.password.required">Password is required!</p>
        </div>
      </div>
      
      <div class="ml-auto mr-auto mt-4 flex justify-content-center">
        <router-link to="/dashboard">
          <button :disabled="$v.$invalid" class="btn btn-success border-r-2" type="submit">Submit</button>
        </router-link>
      </div>
      <p v-if="$v.$anyError" class="text-danger text-center"><i class="fas fa-exclamation-circle"></i>Please fill out the required fields</p>
      </form>
    </div>  
    </div>

  </div>
</template>
<script>

import {required,email,alphaNum} from 'vuelidate/lib/validators'
export default {
  name: 'App',
  data(){
    return{
    
    email:null,
    
    showPassword:false,
    password:null
   }
  },

  validations:{
    email: {
      required,
      email
    },
    password:{
      required,
      alphaNum
    }
  },
  methods:{
      submit(){
        this.$v.$touch()  //this will set the dirty flag to true in every field
        if(!this.$v.$invalid){ //then if our form is invalid our form will get submitted
          console.log('Form Submitted:', this.email);
        }
    },
    // passwordShow(){
    //     this.showPassword = !this.showPassword;
    // }
  }
}
</script>
<style scoped>
body{
  background-color: rgba(8, 2, 43, 0.927);
}
  #card{
  width: 500px;
}
body{
  background-color: black;
}
input{
  /* outline:none; */
  outline-style: none;
}
@media (max-width:900px){
  #card{
    width: 330px;
  }
}
</style>