<template>
    <div>
        <h1>404</h1>
    </div>
</template>
<script>
    export default {
        name: 'NotFound',
        methods: {
            pathHref() {
                window.location.href = '/'
            }
        },
        mounted() {
            this.pathHref()
        }
    }
</script>
<style lang="stylus">
</style>
