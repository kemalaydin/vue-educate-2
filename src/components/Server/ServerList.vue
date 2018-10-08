<template>
    <ul class="list-group">
        <li
                class="list-group-item"
                v-for="(data,index) in serverList"
                :key="index"
        >
            <a @click="showDetail(index)">{{ data.name + " #"+data.id+" ( "+data.status+" )" }}</a>
        </li>
    </ul>
</template>

<script>
    import { eventBus } from "../../main";

    export default {
        name: "ServerList.vue",
        data(){
            return{
                serverList: null
            }
        },
        created(){
            this.serverList = eventBus.serverList;
        },
        methods:{
            showDetail(id){
                eventBus.sendServerDetail(id);
            }
        }
    }
</script>

<style scoped>

</style>