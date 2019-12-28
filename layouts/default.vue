<template>
    <v-app dark>
        <h1>Nuxt Test</h1>
        <NuxtLink to="/">
            Home page
        </NuxtLink>
        <NuxtLink to="/about">
            about page
        </NuxtLink>
        <nuxt-child />
        </nuxt-child>
    </v-app>
</template>

<script>
export default {
    data () {
        return {
            
        }
    }
}
</script>
