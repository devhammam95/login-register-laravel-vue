<template>
    <div class="form-group login-form" >
        <p class="lead text-center color-red">Login Page</p>
        <form class="form" @submit.prevent="login" >
            <div class="form-group">
                <input  type="email"  autocomplete="email"  class="form-control" v-model="loginForm.email" placeholder="Write email">
                <span class="text-danger" v-if="this.errors.email" v-text="this.errors.email[0]"></span>
            </div>
            <div class="form-group">
                <input type="password" autocomplete="password" class="form-control" v-model="loginForm.password" placeholder="Write a password">
                <span class="text-danger"   v-if="this.errors.password" v-text="this.errors.password[0]"></span>
            </div>
            <div class="form-group text-center">
                <input  type="submit" class="btn btn-default btn-success login-btn" value="login">
                <div class="form-control-sm">
                    <p class="text-info text-left"><router-link :to="{name:'forget-password'}">Forget-password?</router-link></p>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    import { post } from '../helpers/api';
    import auth  from '../helpers/auth';
    export default {
        name: "login",
        data(){
            return {
               loginForm:{
                   email    :'',
                   password :''
               },
                errors:{}
            }
        },
        methods:{
            login(){
                 post('/api/user/login',this.loginForm).then((res)=>{
                     const data = res.data;
                  if (!data.status){
                      this.$toastr.e(data.msg);
                      this.errors = data.errors;
                      return;
                  }else{
                      //console.log('worked2sd',data.token);
                      auth.set(data.token,data.userId);
                      console.log('worked2');
                      this.$router.push({name:'home'});
                      console.log('worked3');
                  }

                 }).catch((err)=>{
                     this.$toastr.e('There is problem try again,plz!')
                 });
            }
        }
    }
</script>

<style scoped>
    .login-form{
        width: 33%;
        margin: 14% auto;
    }
    .login-form .login-btn{
        width: 100%;
    }
</style>
