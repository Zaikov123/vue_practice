<script setup>
import { computed, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const route = useRoute();
const routeId = route.params.id;
const post = computed(() => store.getters['post/post']);

watchEffect(() => {
    store.dispatch('post/fetchPost', routeId);
});

</script>

<template>
    <div class="container mt-4">
        <div class="card">
            <div class="card-header">
                Post Details
            </div>
            <div class="card-body">
                <div class="form-group mb-3">
                    <label for="title" class="form-label">Title:</label>
                    <input id="title" type="text" class="form-control" v-model="post.title" placeholder="Enter title" readonly>
                </div>
                <div class="form-group mb-3">
                    <label for="content" class="form-label">Content:</label>
                    <textarea id="content" class="form-control" v-model="post.content" placeholder="Enter content" rows="4" readonly></textarea>
                </div>
            </div>
            <div class="card-footer">
                <router-link :to="{name: 'post.edit', params: {id: routeId}}" class="btn btn-warning m-2">Edit</router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
