<template>

    <div>

        <!-- Hambuger menu button for small screens -->
        <div class="block lg:hidden">
            <button @click="toggle" class="flex items-center px-3 py-2 border rounded border-gray-500 hover:text-gray-600 hover:border-gray-600">
                <svg class="current-color h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" fill="gray" />
                </svg>
            </button>
        </div>

        <!-- Right side Menu -->
        <ul class="uppercase font-bold w-full block flex-grow lg:flex lg:flex-initial lg:w-auto items-center mt-8 lg:mt-0" :class="isOpen ? 'block': 'hidden'">
            <!-- Menu items -->
            <li v-for="item in menu" v-bind:key="item.key" class="mr-8 mb-6 lg:mb-0">
                <g-link :style="{'font-family': font}" :to="item.link"> {{ item.name }} </g-link>
            </li>
        </ul>

    </div>
</template>

<script>
import { fonts, menu } from "@/data/site.yaml";

export default {
    data() {
        return {
            menu: menu,
            font: fonts.menu,
            isOpen: false,
        }
    },
    methods: {
        toggle() {
            this.isOpen = !this.isOpen
        }
    },
}
</script>
