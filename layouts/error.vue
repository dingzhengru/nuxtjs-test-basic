<template>
    <v-app dark>
        {{ pageNotFound }}
        <NuxtLink to="/">
            Home page
        </NuxtLink>
    </v-app>
</template>

<script>
export default {
    data () {
        return {
            pageNotFound: '404 Not Found',
            otherError: 'An error occurred'
        }
    }
}
</script>

<style scoped>
h1 {
    font-size: 20px;
}
</style>
