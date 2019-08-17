<template>
    <div class="content-wrapper bg-background-primary font-sans text-copy-primary leading-normal flex flex-col min-h-screen" :class="theme">

        <!-- Top menu -->
        <VHeader @themeChanged="updateTheme" />

        <!-- Replaced with child element -->
        <div class="flex-grow">
            <slot />
        </div>

        <!-- Bottom footer -->
        <VFooter />

    </div>
</template>

<script>
import VHeader from "@/components/VHeader";
import VFooter from "@/components/VFooter";

export default {
    components: {
        VHeader,
        VFooter
    },
    mounted() {
        this.theme = localStorage.getItem("theme") || "theme-light"
    },
    data() {
        return {
            theme: ""
        }
    },
    methods: {
        toggle() {
            this.isOpen = !this.isOpen
        },
        updateTheme(theme) {
            this.theme = theme
        },
    },
}
</script>

<style src="../main.css" />
