<template>
    <div class="w-40">
        <g-link class="text-3xl lowercase font-bold" :style="{'font-family': font}" to="/"> {{ logo_name }} </g-link>
    </div>
</template>

<script>
import { details } from "@/data/user.yaml";
import { fonts } from "@/data/site.yaml";

export default {
    data() {
        return {
            logo_name: details.logo_name,
            font: fonts.logo
        }
    }
}
</script>
