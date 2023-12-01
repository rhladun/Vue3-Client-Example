<template>
    <div class="container py-5 text-center">
        <H1>404 Error</H1>
        <p>Sorry, the page <code>{{ $route.params.notFound }}</code> you're looking for is not found</p>
        <router-link :to="{name:'tasks'}">Back to your Tasks</router-link>
    </div>
</template>