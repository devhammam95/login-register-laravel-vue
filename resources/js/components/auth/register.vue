<template>
    <div class="form-group register-form" >
        <p class="lead text-center color-red">Register Page</p>
        <p class="lead text-center color-test-css">Join Us Now !</p>
        <form class="form" @submit.prevent="register" >
            <div class="form-group">
                 <input type="text" class="form-control"  v-model="registerForm.fullName" placeholder="Write your full name">
                <span class="text-danger"  v-if="errors.fullName" v-text="errors.fullName[0]"></span>
            </div>
            <div class="form-group">
                <input  type="text" class="form-control" v-model="registerForm.userName" placeholder="Write user-name">
                <span class="text-danger"  v-if="errors.userName" v-text="errors.userName[0]"></span>
            </div>
            <div class="form-group">
                <input type="email" class="form-control" v-model="registerForm.email" placeholder="Write your email">
                <span class="text-danger"  v-if="errors.email" v-text="errors.email[0]"></span>
            </div>
            <div class="form-group">
                <input type="password" class="form-control" v-model="registerForm.password" placeholder="Write a password">
                <span class="text-danger"  v-if="errors.password" v-text="errors.password[0]"></span>
            </div>
            <div class="form-group">
                <input type="password" class="form-control" v-model="registerForm.password_confirmation" placeholder="Confirm the password">
                <span class="text-danger"  v-if="errors.password_confirmation" v-text="errors.password_confirmation[0]"></span>
            </div>
            <div class="form-group text-center">
            <input :disabled="registerForm.isProcessing" type="submit" class="btn btn-default btn-success register-btn" value="register now !">
            </div>
        </form>
    </div>
</template>

<script>
    import  testFunc from '../assets/js/script'
    import { post } from '../helpers/api'
    export default {
        name: "register",
        mounted(){
          console.log('register page mounted')
        },
        data(){
             return{
                  registerForm:{
                      fullName : '',
                      email    : '',
                      userName : '',
                      password : '',
                      password_confirmation:'',
                      isProcessing:false,
                  },
                 errors:{},
             }
        },
        methods:{
            register:function(){
              this.registerForm.isProcessing = true;
              const thisRouter = this.$router;
              post('/api/user/register',this.registerForm).then((res)=>{
                  const data = res.data;
                  if (!data.status){
                      this.$toastr.e('Check your inputs,plz!');
                      this.registerForm.isProcessing = false;
                      this.errors = data.errors;
                      return;  // stop here
                  }
                  // if success?? go on -->
                  this.$toastr.s('successfully register');
                  setTimeout(function () {
                      thisRouter.push('/login');
                  },2000);

              }).catch((err)=> {
                  this.$toastr.e('There is problem try again,plz!','Error');
              });
            }
        }
    }
</script>
<style scoped >
  .color-red{color: red;}
  .register-form{
      width: 33%;
      margin: 0px auto;
  }
  .register-form .register-btn{
      width: 100%;
  }
     /*load this  stylesheet file */
    @import "../assets/css/test.css";
</style>

