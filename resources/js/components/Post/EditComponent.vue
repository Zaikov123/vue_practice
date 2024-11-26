<script setup>

import {computed, onMounted} from "vue";
import {useStore} from "vuex";
import {useRoute} from "vue-router";

const store = useStore()
const post = computed(() => store.getters['post/post'])
const route = useRoute();
const routeId = route.params.id;

const isDisabled = computed(() => {
    return post.value.title && post.value.content
})

onMounted(() => {
    store.dispatch('post/fetchPost', routeId)
});
</script>

<template>
    <div class="w-50" v-if="post">
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
                @click.prevent="store.dispatch('post/update',
                {title: post.title, content: post.content, routeId})" value="Update" type="submit" class="btn btn-primary">
        </div>
    </div>
</template>

<style scoped>

</style>
