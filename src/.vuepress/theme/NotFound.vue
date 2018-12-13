<template>
    <div>
        <h1>404232</h1>
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
            window.location.href = '/'
        }
    }
</script>
