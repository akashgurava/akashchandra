<template>
    <div class="w-full lg:h-64 rounded overflow-hidden shadow-lg mb-4">
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{{ project.title }}</div>
            <div class="pb-4">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2" v-for="skill in project.skills" :key="skill.id">
                    <img class="h-5 w-5" :src="skill.icon" :alt="skill.name.toLowerCase()"><p>{{skill.name}}</p>
                </span>
            </div>
            <p class="text-gray-700 text-base break-words whitespace-normal">
                {{ project.description }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        project: {
            type: Object,
            required: true
        }
    }
}
</script>
