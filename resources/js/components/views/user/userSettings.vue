<template>
    <div class="settings-form">
        <form class="form" @submit.prevent="updateUserSettings" >
            <div class="form-group">
                <input type="text" class="form-control"  v-model="userSettingsForm.fullName" placeholder="Write your full name">
                <span class="text-danger"  v-if="errors.fullName" v-text="errors.fullName[0]"></span>
            </div>
            <div class="form-group">
                <input  type="text" class="form-control" v-model="userSettingsForm.userName" placeholder="Write user-name">
                <span class="text-danger"  v-if="errors.userName" v-text="errors.userName[0]"></span>
            </div>
            <div class="form-group">
                <input type="email" class="form-control" v-model="userSettingsForm.email" placeholder="Write your email">
                <span class="text-danger"  v-if="errors.email" v-text="errors.email[0]"></span>
            </div>
           <!-- <div class="form-group ">
                <p class="text-danger">want to change password?</p>
            <div class="form-group">
                <input type="password" class="form-control" v-model="userSettingsForm.currentPassword" placeholder="Write your current password">
                <span class="text-danger"  v-if="errors.currentPassword" v-text="errors.currentPassword[0]"></span>
            </div>
            <div class="form-group">
                <input type="password" class="form-control" v-model="userSettingsForm.password" placeholder="Write your new  password">
                <span class="text-danger"  v-if="errors.password" v-text="errors.password[0]"></span>
            </div>
            <div class="form-group">
                <input type="password" class="form-control" v-model="userSettingsForm.password_confirmation" placeholder="Confirm the password">
                <span class="text-danger"  v-if="errors.password_confirmation" v-text="errors.password_confirmation[0]"></span>
            </div>
            </div>-->

          <!--  <div class="form-group text-center">
                <input :disabled="userSettingsForm.isProcessing" type="submit" class="btn btn-default btn-success register-btn" value="register now !">
            </div>-->
        </form>    </div>
</template>

<script>
    import { get,post } from '../../helpers/api';
    import auth from '../../helpers/auth';
    export default {
        name: "userSettings",
        data(){
            return{
                userSettingsForm:{
                    fullName  : '',
                    userName  : '',
                    email     : '',
                /*    currentPassword : '',
                    password        : '',
                    password_confirmation:'',*/
                },
                errors:{}
            }
        },
        mounted(){
           get('api/user/edit/settings',auth.state).then((res)=>{
               var userData = res.data.user;
               var userForm = this.userSettingsForm;

               userForm.fullName = userData.fullName;
               userForm.userName = userData.userName;
               userForm.email    = userData.email;

           }).catch((err)=>{
             //  this.$router.push({name:'login'}); //token problem
                 this.$toastr.e('There is problem,try again!');
           });
        },
        methods:{
            /*updateUserSettings(){
           post('api/user/update/settings',this.userSettingsForm).then((res)=>{
               const data = res.data;
               if (data.status==true || data.status==false){
                   this.$toastr.s(data.msg)
               }
           }).catch((err)=>{
               this.$toastr.e('There is problem,try again!');
           });
            }*/
        },
        computed:{

        }
    }
</script>

<style scoped>
    .settings-form{
        width: 33%;
        margin: 0px auto;
    }
    .settings-form .register-btn{
        width: 100%;
    }
</style>
