<template>
    <Layout>
        <div class="w-screen h-screen bg-gray-100">
            <VHeader />

            <div class="hero-content flex flex-col justify-center items-center relative m-0 px-4 py-24 text-center" :style="{'font-family': fonts.logo}">
                <h1 class="text-2xl lg:text-3xl font-bold">{{ details.name }}</h1>
                <h2 class="text-xl lg:text-2xl font-bold">{{ details.position }}</h2>
                <p class="max-w-xs lg:max-w-lg break-normal font-medium py-4 lg:py-6">{{ details.intro }}</p>
            </div>

        </div>
    </Layout>
</template>

<script>
import { details } from "@/data/user.yaml";
import { fonts } from "@/data/site.yaml";
import VHeader from "@/components/VHeader";

export default {
    components: {
        VHeader,
    },
    data() {
        return {
            details: details,
            fonts: fonts,
        }
    }
}
</script>

<style scoped>
.hero-content {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}
</style>
