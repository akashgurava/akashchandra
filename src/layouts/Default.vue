<template>
    <div class="content-wrapper bg-background-primary font-sans text-copy-primary leading-normal flex flex-col min-h-screen">

        <!-- Show the Top menu only if the current path is not homepage -->
        <VHeader v-if="!isHomePage"/>

        <!-- Replaced with child element -->
        <div class="flex-grow">
            <slot />
        </div>

    </div>

</template>

<script>
import VHeader from "@/components/VHeader";

export default {
    components: {
        VHeader,
    },
    data() {
        return {
            isHomePage: false
        }
    },
    mounted() {
        this.homePage()
    },
    methods: {
        homePage() {
            if(this.$route.path === '/' || this.$route.path.startsWith('/#')) {
                this.isHomePage = true
            } else {
                this.isHomePage = false
            }
        }
    }
}
</script>
