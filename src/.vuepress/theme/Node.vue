<template>
    <v-container grid-list-xl
                 align-center
                 class="blog-container py-5">
        <v-layout row
                  wrap
                  style="margin: 0;">
            <Tag v-for="item in $blog.tagList"
                 :key="item"
                 :slug="item">{{item}} {{$blog.tags[item].length}}
            </Tag>
        </v-layout>
        <Pagination :current="pageNum"
                    :data="pageList"
                    @change="goPage"
                    class="card">
            <PostCard :post="row"
                      layout="list"
                      slot-scope="{ row }"></PostCard>
        </Pagination>
    </v-container>
</template>
<script>
    import Tag from './components/Tag'
    import PostTime from './components/PostTime'

    import Pagination from './components/Pagination'
    import PostCard from './components/PostCard'

    export default {
        components: {
            Tag,
            PostTime,
            Pagination,
            PostCard
        },
        computed: {
            tagName() {
                return 'Node'
            },
            pageList() {
                return !this.$blog.tags[this.tagName] ? this.$blog.postList : this.$blog.tags[this.tagName]
            },
            pageNum() {
                return this.$route.params.pageNum || 1
            }
        },
        methods: {
            goPage(pageNum) {
                const path = this.$site.themeConfig.pagination.path
                this.$router.push(pageNum === 1 ? '/' : path.replace(':pageNum', pageNum))
            }
        }
    }
</script>
<style lang="stylus">
    .list-inline-time {
        min-width: 120px;
        width: 200px !important;
    }
    .card{
        margin: auto -18px;
        .flex{
            padding: 12px 0 !important;
        }
    }
    .theme--light{
        .primary{
            background-color: rgb(58, 142, 230) !important
            border-color: rgb(58, 142, 230) !important
        }
    }
</style>
