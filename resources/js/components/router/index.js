// import libs
import Vue from 'vue';
import VueRouter from 'vue-router';
//import auth state
import auth from '../helpers/auth';
//initialize state token&user_id   --'ill remove user_id
auth.initialize();
Vue.use(VueRouter);

/* #start import components */
import home           from  '../views/home.vue';
import notFound       from '../views/pages/notFound.vue';
import login          from  '../auth/login.vue';
import register       from  '../auth/register.vue';
import forgetPassword from  '../auth/forgetPassword.vue';
import userSettings   from '../views/user/userSettings';
import pagesIndex     from  '../views/pages/pagesIndex';
import about          from  '../views/pages/about';
import contact        from  '../views/pages/contact';
import policy         from  '../views/pages/policy';
/* #end  import components */

// routes
//  /*****  meta->guest  =>  not authenticated users  *****/
// /*****   meta->auth   =>  authenticated users      *****/
const routes = [
    {path:'/',name:'home',component:home,meta:{title:'home'}},
    {path:'/pages',redirect:'/pages/about',name:'pagesIndex',component:pagesIndex,
                   children:[
                             { path:'about',name:'about',component:about,meta:{title:'about'} },
                             { path:'contact',name:'contact',component:contact,meta:{title:'contact'} },
                             { path:'policy',name:'policy',component:policy,meta:{title:'policy'} }
                            ]
    },
    {path:'/login',name:'login',component:login,meta:{title:'login',guest:true}},
    {path:'/register',name:'register',component:register,meta:{title:'register',guest:true} },
    {path:'/settings',name:'user-settings',component:userSettings,meta:{title:'settings'}},
    {path:'/forget-password',name:'forget-password',component:forgetPassword,meta:{title:'forget-password',guest:true}},
    {path:'*',name:'notFound',component:notFound,meta:{title:'this page not found'}},
    //  {path:'*',redirect:'/'},
];

const router =new VueRouter({
    mode:'history',
    routes
});
/************************************ Global Guards on router ************************************/
// before =>route  + handle router=>VueRouter
router.beforeEach((to,from,next)=>{
    //check if route required auth
   if (to.matched.some(record => record.meta.requiresAuth)){  //-->
           if (auth.state.api_token==null){
               router.push({name:'login'});
           }else{
               next();
           }
       //check if route not required auth for visitors and login user
   }else if(to.matched.some(record=>record.meta.guest)){
       if(auth.state.api_token==null){
             next();
       }else{
           router.back();
       }
   }else{
    next();
   }
});
// after =>route
router.afterEach((to,from)=>{
    Vue.nextTick(() => {
        document.title=to.meta.title;
    });
});
/************************************ Global Guards on router ************************************/

export default router
