
<script setup>
    //import Docs from "../../../../lesli-vue/source/elements/button/Button.md"
    //const {Docs} = import("../../../../lesli-vue/source/elements/button/Button.md")
    //const Docs = () => import("../../../../lesli-vue/source/elements/button/Button.md")

    import {computed,defineAsyncComponent} from "vue"
    const path2 = "../../../../lesli-vue/source/elements/button/Button.md"
    const Docs = computed(
        () => defineAsyncComponent(
            () => import(path2)
        )
    )

</script>

<Docs />
