<template>
  <about-me
    :subtitle="details.subtitle"
    :about="details.about"
    :font="fonts.hero"
  />
</template>

<script>
import { details, projects } from '@/data/user.yaml'
import { fonts } from '@/data/site.yaml'

import AboutMe from '@/components/AboutMe'

export default {
  components: {
    AboutMe
  },
  data() {
    return {
      details,
      fonts,
      projects
    }
  }
}
</script>
