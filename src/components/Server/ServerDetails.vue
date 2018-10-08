<template>
  <div class="col-xs-12 col-sm-6">
    <p v-if="!serverDetail">Sunucu Bilgisi güncel değil!!</p>
    <p v-else>
    <h1>{{ serverDetail.name + " #"+serverDetail.id}}</h1>
    <span>Sunucunun şuanki durumu <b :class="serverDetail.status"> {{ serverDetail.status }}</b></span>
    <br><button v-if="serverDetail.status != 'Normal'" @click="correctServer(serverDetail.id)">Sunucuyu Düzelt</button>
    </p>
  </div>
</template>
<script>
  import { eventBus } from "../../main";

  export default {
      data(){
        return {
            serverDetail: null
        }
      },
      methods: {
          correctServer(id){
              this.serverDetail.status = "Normal";
          }
      },
      created(){
          eventBus.$on('server-detail', (data) => {
              this.serverDetail = eventBus.serverList[data];
          });
      }
  }
</script>

<style scoped>
  .Tehlikede{
    color: red;
  }
  .Normal{
    color: green;
  }
  .Kritik{
    color: orange;
  }
</style>