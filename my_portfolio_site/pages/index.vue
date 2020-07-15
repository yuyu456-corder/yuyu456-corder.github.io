<template lang="pug">
  v-app
    v-content
      p GitHubで現在公開している私の作品です。
      |常に多くの技術に触りたいという気持ちで開発で望んでいます。
      br
      |毎回、何かしらの壁にぶつかっていますがなんとか少しずつ前に進むことができています。
    v-content
      v-container
        v-card(class="ma-2")
          v-card-title user_login
          v-card-subtitle ログイン機能を一から作成する
          v-card-action
            v-btn(text color="blue" outlined coler="blue" href="https://github.com/yuyu456-corder/user_login") GitHub Repository
              v-icon mdi-github
            v-btn(text color="green" outlined coler="green" to="/aboutRepositories/aboutUserLogin" nuxt) introduction
              v-icon mdi-pencil
          v-card-text 何かしらの Web サービスと想定してのログイン機能とアカウント管理を行うシステムを開発する
            template 
              v-container 開発環境：VScode/ Git/ JavaScript(Vue.js, Vuetify, Express.js)/ SQLite

        v-card(class="ma-2")
          v-card-title english_notebook_for_engineer
          v-card-subtitle エンジニアのための英単語帳アプリを作る
          v-card-action
            v-btn(text color="blue" outlined coler="blue" href="https://github.com/yuyu456-corder/english_notebook_for_engineer") GitHub Repository
              v-icon mdi-github
            v-btn(text color="green" outlined coler="green" to="/aboutRepositories/aboutEnglishNotes" nuxt) introduction
              v-icon mdi-pencil
          v-card-text 自分がライブラリやフレームワークの公式リファレンスを読む時に英語力の無さを痛感したため建てたプロジェクト
          v-card-text 開発環境：Visual Studio/ Git/ C
      
        v-card(class="ma-2")
          v-card-title beatmania_data_analyzer
          v-card-subtitle KONAMI 社のアーケード音楽ゲーム”beatmaniaIIDX”のプレイヤーのスキルを分析する
          v-card-action
            v-btn(text color="blue" outlined coler="blue" href="https://github.com/yuyu456-corder/beatmania_data_analyzer") GitHub Repository
              v-icon mdi-github
          v-card-text 公式のサービスで自分のプレイヤーデータが CSV 形式で提供されるため、これを上手くつかって自分のプレイデータを分析・可視化する
          v-card-text 開発環境：VSCode/ Git/ Python3(Pipenv)

        v-card(class="ma-2")
          v-card-title my_knowledge_notes
          v-card-subtitle 開発時に調べたり聞いたりした知識をがんばって自分の言葉にまとめたもの
          v-card-action
            v-btn(text color="blue" outlined coler="blue" href="https://github.com/yuyu456-corder/my_knowledge_notes") GitHub Repository
              v-icon mdi-github
          v-card-text 開発環境： VSCode/ Git/ Markdown

        v-card(class="ma-2")
          v-card-title yuyu456-corder.github.io
          v-card-subtitle 当ページ。自分の作品をまとめた静的ページ
          v-card-action
            v-btn(text color="blue" outlined coler="blue" href="https://github.com/yuyu456-corder/yuyu456-corder.github.io") GitHub Repository
              v-icon mdi-github
          v-card-text 開発環境： VSCode/ Git/ JavaScript(Vue.js, Nuxt.js, Vuetify)/ HTML(pug)

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
