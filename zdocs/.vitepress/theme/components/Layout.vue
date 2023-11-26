
<script>

import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme

import Logo from './CustomLogo.vue'; // Import your custom logo component

export default {
  components: {
    Layout,
    Logo, // Register your custom logo component
  },
};
</script>

<!-- Layout.vue -->
<template>
    <Layout>
    <template #aside-outline-before>
      My custom sidebar top content
    </template>
  </Layout>
</template>
