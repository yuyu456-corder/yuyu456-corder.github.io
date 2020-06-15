<template lang="pug">
  v-app
    v-container
      p yuyu456-corderと申します。corderのスペルミスはご愛嬌。
      | ITの情報量の海に流されないよう日々奮闘しております。
      br
      | ここは私の自己紹介のページです。
      br
      | 自分のスキルや今まで触ってきたツールを紹介したいと思います。

    //- v-content
    //-   p(:class="{important: isImportant}") tmp_test

    v-container
      v-data-table(dark dense :headers="headers" :items="devTools" group-by="category" show-group-by caption="今まで使用したツール等")

</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  data() {
    return {
      // 特定の行のスタイルを有効にする真偽値
      isImportant: true,
      headers: [
        { text: 'Develop tool name', value: 'toolName', groupable: false },
        { text: 'Category', value: 'category', align: 'right' }
      ],
      devTools: [
        { toolName: 'Windows10', category: 'OS' },
        { toolName: 'Linux', category: 'OS' },
        { toolName: 'assembly', category: 'language' },
        { toolName: 'VHDL', category: 'language' },
        { toolName: 'C (MinGW/ gcc)', category: 'language' },
        { toolName: 'Java', category: 'language' },
        {
          toolName:
            'JavaScript (node.js/ npm,  Vue.js/ Nuxt.js / Vuetify,  Express.js)',
          category: 'language'
        },
        { toolName: 'Python (Pipenv)', category: 'language' },
        { toolName: 'HTML/ CSS', category: 'language' },
        { toolName: 'Markdown', category: 'language' },
        { toolName: 'Visual Studio 2019', category: 'editor/IDE' },
        { toolName: 'Visual Studio Code', category: 'editor/IDE' },
        { toolName: 'Atom', category: 'editor/IDE' },
        { toolName: 'Eclipse', category: 'editor/IDE' },
        { toolName: 'Emacs', category: 'editor/IDE' },
        { toolName: 'Vim', category: 'editor/IDE' },
        { toolName: 'Git for Windows/ GitHub', category: 'VCS' },
        { toolName: 'CVS', category: 'VCS' },
        { toolName: 'SQlite', category: 'other' }
      ]
    }
  }
}
</script>

<style scoped>
.important {
  color: red !important;
}
</style>
