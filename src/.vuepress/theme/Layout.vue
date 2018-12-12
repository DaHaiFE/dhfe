<template>
    <v-app v-scroll="onScroll">
        <v-progress-linear :height="3"
                           color="accent"
                           :indeterminate="progressRunning"
                           :background-opacity="0.4"
                           class="blog-progress"
                           v-show="progressRunning"></v-progress-linear>

        <v-navigation-drawer app
                             :mobile-break-point="mobilePoint"
                             :mini-variant.sync="miniNav"
                             :width="240"
                             v-model="navVisible">
            <SideNav :toggleNavWidth="toggleNavWidth"></SideNav>
        </v-navigation-drawer>
        <!--<Header :layout="layout"-->
                <!--@toggleNav="toggleNav"></Header>-->
        <v-content>
            <component :is="layout"></component>
            <!--<Footer></Footer>-->
        </v-content>
        <!--  回到顶部 -->
        <transition name="scale-transition">
            <v-btn fab
                   fixed
                   right
                   bottom
                   color="accent"
                   @click="$vuetify.goTo(0)"
                   v-show="offsetTop > 300"
                   style="background: #3a8ee6 !important;">
                <i class="fa fa-lg fa-chevron-up"></i>
            </v-btn>
        </transition>
    </v-app>
</template>
<script>
    import Vue from 'vue'
    import SideNav from './SideNav'
    import Header from './Header'
    import Footer from './Footer'
    import Home from './Home'
    import Tags from './Tags'
    import Post from './Post'
    import About from './About'
    import Join from './Join'
    import Node from './Node'
    import Game from './Game'
    import {pathToComponentName, updateMetaTags} from './libs/utils'

    export default {
        name: 'layout',
        components: {
            SideNav,
            Header,
            Footer,
            Home,
            Tags,
            Post,
            About,
            Join,
            Node,
            Game
        },
        data() {
            const mobilePoint = 1264
            return {
                navVisible: true,
                miniNav: false,
                mobilePoint: 1264,
                offsetTop: 0,
                progressRunning: false,
                toggleNavWidth: true
            }
        },
        computed: {
            layout() {
                return this.$page.frontmatter.layout || 'post'
            }
        },
        methods: {
            createTitle() {
                const title = `${this.$siteTitle} · ${this.$site.themeConfig.subTitle}`
                const pageTitle = this.$page.title
                return (pageTitle ? `${pageTitle} · ` : '') + title
            },
            toggleNav() {
                if (window.innerWidth > this.mobilePoint) {
                    this.miniNav = !this.miniNav
                    this.toggleNavWidth = !this.toggleNavWidth
                } else {
                    this.navVisible = !this.navVisible
                    this.miniNav = false
                    this.toggleNavWidth = !this.toggleNavWidth
                }
            },
            onScroll(e) {
                this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
            }
        },
        created() {
            if (this.$ssrContext) {
                this.$ssrContext.title = this.createTitle()
                this.$ssrContext.lang = this.$lang
                this.$ssrContext.description = this.$page.description || this.$description
            } else {
                this.navVisible = window.innerWidth > this.mobilePoint
            }
        },
        mounted() {
            // update title / meta blog
            this.currentMetaTags = []
            const updateMeta = () => {
                document.title = this.createTitle()
                document.documentElement.lang = this.$lang
                const meta = [
                    {
                        name: 'description',
                        content: this.$description
                    },
                    ...(this.$page.frontmatter.meta || [])
                ]
                this.currentMetaTags = updateMetaTags(meta, this.currentMetaTags)
            }
            this.$watch('$page', updateMeta)
            updateMeta()

            this.$router.beforeEach((to, from, next) => {
                if (to.path !== from.path && !Vue.component(pathToComponentName(to.path))) {
                    this.progressRunning = true
                }
                next()
            })

            this.$router.afterEach(() => {
                this.progressRunning = false
            })
        },
        beforeDestroy() {
            updateMetaTags(null, this.currentMetaTags)
        },
    }
</script>
<style src="@fortawesome/fontawesome-free-webfonts/css/fa-solid.css"></style>
<style src="@fortawesome/fontawesome-free-webfonts/css/fa-regular.css"></style>
<style src="@fortawesome/fontawesome-free-webfonts/css/fa-brands.css"></style>
<style src="@fortawesome/fontawesome-free-webfonts/css/fontawesome.css"></style>
<style src="prismjs/themes/prism-tomorrow.css"></style>
