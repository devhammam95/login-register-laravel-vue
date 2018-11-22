<template>
    <div>
        <nav class="navbar navbar-default navbar-fixed-top">
            <div class="container">
                <div class="navbar-header">
                    <router-link class="navbar-brand" :to="{name:'home'}">
                        VueRouter App
                    </router-link>
                </div>
                <ul class="nav navbar-nav">
                    <li><router-link :to="{name:'home'}" >home</router-link></li>
                   <!--@auth-->
                    <li><a v-show="auth"  @click="logout" class="btn btn-sm btn-default btn-dark text-white">logout</a></li>
                    <li><router-link  v-show="auth" :to="{name:'user-settings'}">user-settings</router-link></li>
                   <!--@guest   -->
                    <li><router-link v-show="guest" :to="{name:'login'}">login</router-link></li>
                    <li><router-link v-show="guest" :to="{name:'register'}">register</router-link></li>
                </ul>
            </div>
        </nav>
        <div class="container">
            <router-view></router-view>
        </div>
        <div class="nav-footer">
                <ul class="nav nav-pills text-dark" >
                    <li><router-link  class="p-4 m-auto" :to="{name:'about'}">about</router-link></li>
                    <li><router-link  class="p-4 m-auto" :to="{name:'contact'}">contact</router-link></li>
                    <li><router-link  class="p-4 m-auto" :to="{name:'policy'}">policy</router-link></li>
                </ul>
        </div>
    </div>
</template>

<script>
    import { post } from '../helpers/api';
    import auth from '../helpers/auth';
    export default {
        name: "core",
        mounted(){
            auth.initialize();
        },
        data(){
            return{
                authState:auth.state
            }
        },
        computed:{
            guest(){
                if(!this.authState.api_token){
                    return true;
                }else{
                    return false;
                }
            },
            auth(){
                return !this.guest;
            }
        },
        methods:{
            logout(){
                post('/api/user/logout',this.authState).then((res)=>{
                    const data=res.data;
                    if (data.status==true){
                        auth.remove();
                        this.$router.push({name:'home'}); // -- As you may be now in settings component !-->
                        this.$toastr.w('We will miss you!')
                    } else{
                        this.$toastr.w('There is a problem,try again!!')
                    }

                }).catch((err)=>{
                    this.$toastr.e('There is a problem,try again!');
                });
            }
        }
    }
</script>

<<style>

</style>
<style scoped>
    .nav-footer{
        width: 33%;
        position: fixed;
        bottom: 10%;
        left:40%;
    }

</style>
