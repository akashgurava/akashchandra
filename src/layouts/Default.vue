<template>
    <div class="content-wrapper bg-gray-100 min-h-screen">

        <v-header />

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
    }
}
</script>
