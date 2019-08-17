<template>
    <div class="w-40">
        <g-link class=" logo text-3xl" to="/"> {{ details.logo_name }} </g-link>
    </div>
</template>

<script>
import { details } from "@/data/about.yaml";

export default {
    data() {
        return {
            details
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Karla&display=swap');

.logo {
    font-family: "Karla";
    border-bottom-width: 0px;
}
</style>
