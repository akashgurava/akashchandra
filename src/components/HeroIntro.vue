<template name=hero-intro>
    <section class="flex justify-center items-center hero">

        <div class="text-center" :style="{'font-family': font}">
            <h1 class="text-2xl lg:text-3xl font-bold">{{ name }}</h1>
            <h2 class="text-xl lg:text-2xl font-bold">{{ position }}</h2>
            <p class="max-w-xs lg:max-w-lg break-normal font-medium py-4 lg:py-6">{{ intro }}</p>
        </div>

    </section>
</template>

<script>
export default {
    props: {
        name: { type: String, required: true },
        position: { type: String, required: true },
        intro: { type: String, required: true },
        font: { type: String, required: true },
    },
}
</script>
