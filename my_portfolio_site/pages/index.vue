<template lang="pug">
  v-app
    v-content
      v-container
        v-card(class="ma-2")
          v-card-title user_login
          v-card-subtitle ログイン機能を一から作成する
          v-card-text ここにリポジトリ概要
          v-card-text ここに開発環境

        v-card(class="ma-2")
          v-card-title english_notebook_for_engineer
          v-card-subtitle エンジニアのために英単語帳アプリを作る
          v-card-text ここにリポジトリ概要
          v-card-text ここに開発環境
      
        v-card(class="ma-2")
          v-card-title beatmania_data_analyzer
          v-card-subtitle KONAMI 社のアーケード音楽ゲーム”beatmaniaIIDX”のプレイヤーのスキルを分析する
          v-card-text ここにリポジトリ概要
          v-card-text ここに開発環境

        v-card(class="ma-2")
          v-card-title my_knowledge_notes
          v-card-subtitle 自分の知識をがんばって自分なりにまとめたもの
          v-card-text ここにリポジトリ概要
          v-card-text ここに開発環境

        v-card(class="ma-2")
          v-card-title yuyu456-corder.github.io
          v-card-subtitle 当ページ。自分の作品をまとめた静的ページ
          v-card-text ここにリポジトリ概要
          v-card-text ここに開発環境

</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  }
}
</script>
