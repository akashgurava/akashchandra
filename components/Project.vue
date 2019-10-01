<template name="v-project">
  <div class="card w-full rounded overflow-hidden shadow-lg my-1">
    <div class="px-6 py-4">
      <!-- Title -->
      <div class="text-gray-200 font-bold text-xl mb-2">
        {{ project.title }}
      </div>

      <!-- Skills -->
      <div class="pb-4">
        <span
          v-for="skill in skills"
          :key="skill.id"
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
        >
          <img
            class="h-5 w-5 float-left"
            :src="skill.icon"
            :alt="skill.name.toLowerCase()"
          />
          <p class="float-left pl-2">{{ skill.name }}</p>
        </span>
      </div>

      <!-- Description -->
      <p class="text-gray-200 text-base break-words whitespace-normal">
        {{ project.description }}
      </p>
    </div>
  </div>
</template>

<script>
import { resolve } from 'path'

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
      let skills = this.project.skills
      if (skills === undefined) {
        return []
      } else {
        const skillsObjList = []
        if (typeof skills === 'string') {
          skills = skills.split(',')
          skills.forEach((skill) => {
            const skillsObj = Object()
            skillsObj.name = skill
            if (process.env.NODE_ENV === 'production') {
              skillsObj.icon =
                this.$static.metaData.siteUrl +
                '/assets/icons/' +
                skill.toLowerCase() +
                '.svg'
            } else {
              skillsObj.icon = resolve(
                '../../assets/icons/' + skill.toLowerCase() + '.svg'
              )
            }
            skillsObjList.push(skillsObj)
          })
        } else if (typeof skills === 'object') {
          skills.forEach((skill) => {
            const skillsObj = Object()
            skillsObj.name = skill.name
            if (skill.icon === undefined) {
              if (process.env.NODE_ENV === 'production') {
                skillsObj.icon =
                  this.$static.metaData.siteUrl +
                  '/assets/icons/' +
                  skill.toLowerCase() +
                  '.svg'
              } else {
                skillsObj.icon = resolve(
                  '../../assets/icons/' + skill.toLowerCase() + '.svg'
                )
              }
            } else {
              skillsObj.icon = skill.icon
            }
            skillsObjList.push(skillsObj)
          })
        }
        return skillsObjList
      }
    }
  }
}
</script>
