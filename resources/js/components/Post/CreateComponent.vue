<script setup>
import router from "../../route.js";
import {computed, ref} from "vue";
import {useStore} from "vuex";

const store = useStore()

const post = computed(() => store.getters['post/post']);

const isDisabled = computed(() => {
    return post.value.title && post.value.content
})

</script>

<template>
<div class="w-50">
    <div class="form-group mb-3">
        <label>Title:</label>
        <input class="form-control" v-model="post.title" placeholder="Enter name">
    </div>
    <div class="form-group mb-3">
        <label>Content:</label>
        <input class="form-control" v-model="post.content" placeholder="Enter content">
    </div>
    <div class="mb-3">
        <input :disabled="!isDisabled"
            @click.prevent="store.dispatch('post/store', post)" value="Add" type="submit" class="btn btn-primary"></input>
    </div>
</div>
</template>

<style scoped>

</style>
