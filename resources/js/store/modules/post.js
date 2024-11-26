import axios from 'axios';
import router from "../../route.js";

const state = {
    posts: [],
    post: {
        title: '',
        content: ''
    }
};

const getters = {
    posts: state => state.posts,
    post: state => state.post,

};

const actions = {
    async fetchPosts({ commit }) {
        try {
            const response = await axios.get('/api/post');
            commit('setPosts', response.data.data);
        } catch (error) {
            console.error(error);
        }
    },
    async fetchPost({ commit }, postId) {
        try {
            const response = await axios.get(`/api/post/${postId}`);
            commit('setPost', response.data.data);
        } catch (error) {
            console.error(error);
        }
    },
    async destroy ({dispatch}, id) {
        try {
            await axios.delete(`/api/post/${id}`)
            await dispatch('fetchPosts')
        }
        catch (msg){
            console.error(msg);
        }
    },
    async update ({}, data) {
        try {
            await axios.patch(`/api/post/${data.routeId}`, {
                title: data.title,
                content: data.content
            })
            await router.push({ name: 'post.show', params: { id: data.routeId } });
        } catch (error) {
            console.error(error);
        }
    },
    async store ({}, post) {
        try {
            await axios.post('/api/post', {
                title:  post.title,
                content: post.content
            })
            await router.push( { name: 'post.index' } )
        }
        catch (msg){
            console.error(msg);
        }
    }
};

const mutations = {
    setPosts(state, posts) {
        state.posts = posts;
    },
    setPost(state, post) {
        state.post = post;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
