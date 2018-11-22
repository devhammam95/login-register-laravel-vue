<template>
    <div>
        <p class="text-center lead">home page</p>
<!--
        <p v-show="showSection">asdadasdadasd</p>
-->
    </div>
</template>

<script>
    import auth from '../helpers/auth'
    export default {
        name: "home",
        mounted(){
     /*       auth.initialize();
            if (auth.state.api_token==null){
                this.isShowing = false;
            }else{
                this.isShowing = true;
            }*/
        },
        data(){
            return{
                isShowing:'',
            }
        },methods:{

        },computed:{
            showSection(){
             return this.isShowing;
            }
        }
        // can't use this as as guard called first!, So => use next('/login') or next(false) ^_*
        /*,beforeRouteEnter:(to,from,next)=>{
        if(auth.state.api_token==null){
            console.log('25');
            next('/login');
        }else{
            next();
        }
    }*/

    }
</script>

<style scoped>

</style>
