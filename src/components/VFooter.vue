<template>
    <!-- Footer -->
    <footer class="bg-green-700 text-white">
        <div class="container mx-auto flex flex-col items-center justify-between py-8">

            <!-- Social Items -->
            <Social />

            <!-- Copyright -->
            <div>
                <div>Copyright 2019. All rights reserved.</div>
                <div class="flex flex-row justify-between mt-1">
                    <a href="rss.xml" class="text-white hover:text-gray-400 font-normal">RSS Feed</a>
                    <a href="sitemap.xml" class="text-white hover:text-gray-400 font-normal">Sitemap</a>
                </div>
            </div>

        </div>
    </footer>
</template>

<script>
import Social from "@/components/Social"

export default {
    components: {
        Social
    }
}
</script>
