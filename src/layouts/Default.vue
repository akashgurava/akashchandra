<template>
    <div class="content-wrapper bg-background-primary font-sans text-copy-primary leading-normal flex flex-col min-h-screen">

        <!-- Top menu -->
        <VHeader />

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
}
</script>
