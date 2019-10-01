<template name="about-me">
  <section class="flex justify-center items-center hero-full-with-navbar">
    <div class="text-left w-3/4" :style="{ 'font-family': font }">
      <h1 class="text-4xl lg:text-3xl font-bold">About Me</h1>
      <h2 class="text-xl lg:text-2xl font-bold pt-4">{{ subtitle }}</h2>
      <p
        v-for="line in about_split"
        :key="line.id"
        class="text-l lg:text-xl py-2"
      >
        {{ line }}
      </p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    subtitle: { type: String, required: true },
    about: { type: String, required: true },
    font: { type: String, required: true }
  },
  computed: {
    about_split() {
      return this.about.split('\n')
    }
  }
}
</script>
