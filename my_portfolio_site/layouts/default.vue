<template>
  <v-app dark>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'mdi-account',
          title: 'My Profile',
          to: '/myProfile'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'yuyu456-corder Portfolio Site'
    }
  }
}
</script>
