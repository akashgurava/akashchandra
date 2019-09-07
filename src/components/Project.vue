<template name=v-project>
    <div class="card w-full rounded overflow-hidden shadow-lg my-1">
        <div class="px-6 py-4">
            <div class="text-gray-200 font-bold text-xl mb-2">{{ project.title }}</div>
            <div class="pb-4">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2" v-for="skill in skills" :key="skill.id">
                    <img class="h-5 w-5" :src="skill.icon" :alt="skill.name.toLowerCase()">
                    <p>{{skill.name}}</p>
                </span>
            </div>
            <p class="text-gray-200 text-base break-words whitespace-normal">
                {{ project.description }}
            </p>
        </div>
    </div>
</template>

<static-query>
query MetaData {
    metaData {
        siteUrl
    }
}
</static-query>

<script>
import { resolve } from "path";

export default {
    props: {
        project: {
            type: Object,
            required: true
        }
    },
    computed: {
        skills() {
            // Get properly formatted skills
            var skills = this.project.skills
            if (skills === undefined) {
                return [];
            } else {
                var skills_obj_list = []
                if (typeof skills === 'string') {
                    skills = skills.split(',')
                    skills.forEach(skill => {
                        var skill_obj = Object()
                        skill_obj['name'] = skill
                        if (process.env.NODE_ENV === "production") {
                            skill_obj['icon'] = this.$static.metaData.siteUrl + skill.toLowerCase() + '.svg'
                        } else {
                            skill_obj['icon'] = resolve('../../assets/icons/' + skill.toLowerCase() + '.svg')
                        }
                        skills_obj_list.push(skill_obj)
                    })
                } else if (typeof skills === 'object') {
                    skills.forEach(skill => {
                        var skill_obj = Object()
                        skill_obj['name'] = skill.name
                        if (skill.icon === undefined) {
                            if (process.env.NODE_ENV === "production") {
                                skill_obj['icon'] = this.$static.metaData.siteUrl + skill.toLowerCase() + '.svg'
                            } else {
                                skill_obj['icon'] = resolve('../../assets/icons/' + skill.toLowerCase() + '.svg')
                            }
                        } else {
                            skill_obj['icon'] = skill.icon
                        }
                        skills_obj_list.push(skill_obj)
                    })
                }
                return skills_obj_list
            }
        }
    },

}
</script>
