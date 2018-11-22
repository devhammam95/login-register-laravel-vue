<template>
    <div class="form-group forget-password-form" >
        <p class="lead text-center color-red">Reset Password Page</p>
        <form class="form" @submit.prevent="sendPasswordResetLink">
            <div class="form-group">
                <input  type="text" class="form-control" v-model="email" placeholder="Write your email">
            </div>
            <div class="form-group text-center">
                <input  type="button" class="btn btn-default btn-primary forget-password-btn" value="Send reset link">
                <div class="form-control-sm">
                    <p class="text-info text-left"><router-link :to="{name:'login'}">Back to login</router-link></p>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "forgetPassword",
        data(){
            return {
                 email:'',
            }
        },
        methods:{
            sendPasswordResetLink(){

            }
        }
    }
</script>

<style scoped>
    /*ex:color red for scoped property*/
    /****/
    .color-red{color:red;}
    .forget-password-form{
        width: 33%;
        margin: 18% auto;
    }
    .forget-password-form .forget-password-btn{
        width: 100%;
    }
</style>
