import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
    data: {
        serverList : [
            {id: 1, name: 'Istanbul Server', status: 'Tehlikede'},
            {id: 2, name: 'Izmir Server', status: 'Normal'},
            {id: 3, name: 'Ankara Server', status: 'Kritik'}
        ]
    },
    methods:{
      sendServerDetail(id){
        this.$emit('server-detail',id);
      }
    }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
