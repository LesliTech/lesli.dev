<script setup>
    import { defineClientComponent } from "vitepress"
    const Docs = defineClientComponent(() => {
        return import("@lesli-vue/source/components/charts/line/Line.md")
    })
</script>

<Docs />
