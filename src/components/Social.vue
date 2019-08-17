<template>
    <div>
        <ul class="flex items-center mb-4">
            <li v-for="social_m in social" :key="social_m.id" class="mr-8">
                <a :href="social_m.link" target="_blank" class="text-white hover:text-gray-400">
                    <font-awesome :icon="['fab', social_m.fas_name]" size="2x" />
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
import { social } from "@/data/about.yaml";

export default {
    data() {
        return {
            social
        }
    }
}
</script>
