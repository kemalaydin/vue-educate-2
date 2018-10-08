<template>
  <div class="col-xs-12 col-sm-6">
    <server-list></server-list>
  </div>
</template>

<script>
  import serverList from './ServerList';

  export default {
      components:{
          serverList: serverList
      }
  }
</script>