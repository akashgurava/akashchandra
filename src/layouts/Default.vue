<template>
    <div class="content-wrapper bg-background-primary font-sans text-copy-primary leading-normal flex flex-col min-h-screen">

        <!-- Top menu -->
        <header class="border-t-14 border-green-700">
            <nav class="container mx-auto flex flex-wrap justify-between items-center py-8">

                <!-- Logo -->
                <Logo />

                <!-- Right side Menu -->
                <Menu />

            </nav>
        </header>

    </div>

</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
import Logo from "@/components/Logo";
import Menu from "@/components/Menu";
import Hamburger from "@/components/Hamburger";

export default {
    components: {
        Logo,
        Menu,
        Hamburger
    },
    mounted() {
        this.theme = localStorage.getItem("theme") || "theme-light"
    },
}
</script>

<style>

</style>
