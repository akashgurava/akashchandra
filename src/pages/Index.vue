<template>
    <Layout>
        <hero-intro :name="details.name" :position="details.position" :intro="details.intro" :font="fonts.hero" />
        <projects-section :projects="projects" />
    </Layout>
</template>

<script>
import { details, projects } from "@/data/user.yaml";
import { fonts } from "@/data/site.yaml";

import HeroIntro from "@/components/HeroIntro";
import ProjectsSection from "@/components/ProjectsSection";

export default {
    components: {
        HeroIntro,
        ProjectsSection,
    },
    data() {
        return {
            details: details,
            fonts: fonts,
            projects: projects,
        }
    }
}
</script>
