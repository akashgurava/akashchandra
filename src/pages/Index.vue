<template>
    <Layout>
        <hero-intro :name="details.name" :position="details.position" :intro="details.intro" :font="fonts.hero" />
    </Layout>
</template>

<script>
import { details } from "@/data/user.yaml";
import { fonts } from "@/data/site.yaml";

import HeroIntro from "@/components/HeroIntro";

export default {
    components: {
        HeroIntro
    },
    data() {
        return {
            details: details,
            fonts: fonts,
        }
    }
}
</script>
