<template lang="pug">

v-app

  v-container
    v-card(class="ma-2")
      v-card-title english_notebook_for_engineer
      v-card-subtitle エンジニアの為の英単語帳アプリを開発する

  h2(style="border: 1px solid black; box-shadow: 20px -8px #4169E1 ") ＞どうして作ろうと思ったか

  v-contaniner(class="ma-2")
    p 自分が作業をするときに英語のドキュメントを読む機会が多々あり、その度に英語の語彙力が無い事に絶望し、開発を決意しました。
    | その際に、膨大な単語や解答データを扱いたいと考え処理速度が早いCをメインエンジンとして採用しました。

  h2(style="border: 1px solid black; box-shadow: 30px -8px #4169E1 ") ＞開発環境
  v-contaniner(class="ma-2")
    p 下記テーブルに示した通りです。メインはVSでちょっとしたコードの確認や修正にVSCodeを用いています。
      v-container
        v-data-table(dark hide-default-footer dense :headers="headers" :items="devTools" group-by="category" show-group-by)

  h2(style="border: 1px solid black; box-shadow: 30px -8px #4169E1 ") ＞将来的な運用について
  v-contaniner(class="ma-2")
    p 現在はwindows向きのバッチファイルで起動するアプリケーションとして開発を進めています。
    | CLI上の操作ではアプリを”使う”、”楽しむ”といった感覚が希薄に感じられるため、C#でGUI作成を行う予定です。

    p ユーザ毎に学習の進捗度や正答率を表示させたいためサーバとの連携も考えています。

  h2(style="border: 1px solid black; box-shadow: 30px -8px #4169E1 ") ＞開発時に自分が苦労した点
  v-contaniner(class="ma-2")
  h3 文字列リテラルの理解（ポインタの復習）
  v-contaniner(class="ma-2")
    p Cで文字列を扱うには配列の利用が不可欠のため、それに伴いポインタの復習になりました。
    | 今回はJSONファイルからKeyとValueを取り出す必要がありましたが、
    <br/>
    | 文字列抽出の関数が標準でないため各文字のアドレスを取得して差分を取ることでこの機能を実現しました。
    <br/>
    | アドレス経由で文字を扱うにはポインタが不可欠なのでこの機能を実装する際に同時にポインタの復習になりました。
  
  v-contaniner(class="ma-2")
  h3 マルチバイト文字の扱いについて
  p Cでは当然ではメモリの使用量に厳密に取り扱うため日本語（マルチバイト文字）の取り扱いに苦戦しました。
  | JSONファイルを1行ずつ読み込み、１つの配列に代入して使用したメモリを計算するコードを書いてきた時、
  <br/>
  | マルチバイト文字を考慮しておらず計算結果が自分の思っていた結果と一致しておらずデバッグ作業に時間を取られました。

</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: 'Develop tool name', value: 'toolName', groupable: false },
        { text: 'Category', value: 'category', align: 'right' }
      ],
      devTools: [
        { toolName: 'Windows10', category: 'os' },
        { toolName: 'C', category: 'language' },
        { toolName: 'Visual Studio 2019', category: 'editor/IDE' },
        { toolName: 'Visual Studio Code', category: 'editor/IDE' },
        { toolName: 'Git for Windows/ GitHub', category: 'VCS' },
        { toolName: 'MinGW (gcc)', category: 'other' }
      ]
    }
  }
}
</script>
