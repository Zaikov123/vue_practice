<script setup>
import {ref, onMounted, computed} from "vue";
import {useStore} from "vuex";

const store = useStore()
const posts = computed(() => store.getters['post/posts']);

onMounted(() => {
    store.dispatch('post/fetchPosts')
});

</script>

<template>
    <div>
        <table class="table">
            <thead>
            <tr>
                <th scope="col">id</th>
                <th scope="col">Title</th>
                <th scope="col">Content</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="post in posts">
                <td>{{ post.id }}</td>
                <td>
                    <router-link class="text-decoration-none text-primary" :to="{name: 'post.show', params: {id: post.id}}">{{ post.title }}</router-link>
                </td>
                <td>{{ post.content }}</td>
                <td><router-link :to="{name: 'post.edit', params: {id: post.id}}" class="btn btn-warning m-2">Edit</router-link></td>
                <td> <a class="btn btn-outline-danger" @click.prevent="store.dispatch('post/destroy', post.id)">Delete</a></td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>

</style>
