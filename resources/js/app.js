require('./bootstrap');
import Vue from "vue";
//import toastr with scss file
import Toastr from 'vue-toastr';
require('vue-toastr/src/vue-toastr.scss');
Vue.use(Toastr,{defaultPosition:'toast-top-center'});

//  import routes
import router from './components/router/index';
import core from './components/views/core.vue';

// token for ex
// eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjExLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3VzZXIvbG9naW4iLCJpYXQiOjE1NDE0NzEyNDIsImV4cCI6MTU0MTQ3NDg0MiwibmJmIjoxNTQxNDcxMjQyLCJqdGkiOiJyMGxuREE1OUs5OW9ocXRCIn0.KTv_2QmRr3cWNdNyUXwSj97IP2cqeNi6sLfvAVJU0o4

//  init vue
const app = new Vue({
    el: '#app',
    template:'<core></core>',
    components:{core},
    router
});
// devtools
Vue.config.devtools=true;
