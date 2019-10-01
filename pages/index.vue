<template>
  <hero-intro
    :name="details.name"
    :position="details.position"
    :intro="details.intro"
    :font="fonts.hero"
  />
</template>

<script>
import { details, projects } from '~/data/user.yaml'
import { fonts } from '~/data/site.yaml'

import HeroIntro from '~/components/HeroIntro'

export default {
  components: {
    HeroIntro
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
