<template>
    <div class="container">
        <v-container grid-list-xl
                     align-center
                     class="blog-container">
            <v-layout row
                      wrap>
                <v-flex xs12
                        class="mb-3">
                    <PostCard :post="$page"
                              :shadowZ="16"
                              layout="post"
                              class="mb-lay">
                        <Content></Content>
                    </PostCard>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>
<script>
    import PostCard from './components/PostCard'

    export default {
        name: 'join',
        components: {
            PostCard
        }
    }
</script>
<style lang="stylus">
</style>
