<script setup>
import {onMounted, ref} from "vue";
import router from "../route.js";

const postId = ref(1);

onMounted(() => {
    router.push({name: "post.index"})
})
</script>

<template>
    <div>
        <div>
            <router-link :to="{name: 'post.index'}" class="btn btn-primary m-2">Posts</router-link>
            <router-link :to="{name: 'post.create'}" class="btn btn-success m-2">Create</router-link>
        </div>

        <router-view></router-view>
    </div>
</template>

<style scoped>

</style>
