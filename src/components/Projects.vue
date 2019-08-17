<template>

    <div class="overflow-x-hidden">
        <div class="projects container-inner mx-auto text-xl py-16 relative">

            <h2 class="font-bold mb-6" id="projects">Here are some projects I've worked on:</h2>

            <!-- Projects list -->
            <ul>
                <li class="checkmark mb-6" v-for="project in projects" :key="project.id">
                    <div>{{ project.title }}</div>
                    <div class="text-sm flex-row flex items-center">
                        <div class=" mr-2">Skills: </div>
                        <div class=" flex-row flex items-center mr-2" v-for="skill in project.skills" :key="skill.id">
                            <!-- TODO: make height and width customizable -->
                            <img class="h-5 w-5 mr-1" :src="skill.icon" :alt="skill.name.toLowerCase()">{{skill.name}}
                        </div>
                    </div>
                    <div class="text-lg text-gray-600"> {{ project.description }} </div>
                </li>
            </ul>

        </div>
    </div>

</template>

<script>
import { resolve } from "path";
import { projects } from "@/data/user.yaml";

Object.keys(projects).forEach(project_name =>{
    var project = projects[project_name]
    var skills = project.skills

    if (skills === undefined) {
        return;
    } else {
        if (typeof skills === 'string') {
            skills = skills.split(',')
            projects[project_name]["skills"] = {}
            skills.forEach(skill => {
                var skill_obj = {}
                skill_obj['name'] = skill
                skill_obj['icon'] = resolve('../../assets/icons/' + skill.toLowerCase() + '.svg')
                projects[project_name]["skills"][skill] = skill_obj
            })
        }
    }

})

export default {
    data() {
        return {
            projects
        }
    }
}
</script>
