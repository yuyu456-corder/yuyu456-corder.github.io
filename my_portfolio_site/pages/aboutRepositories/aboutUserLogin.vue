<template lang="pug">
v-app
  
  v-container
    v-card(class="ma-2")
      v-card-title user_login
      v-card-subtitle ログイン機能そのものを外部のAPI等を使わず自力で開発する

  h2(style="margin: 0.25em; padding: 0.25em 0.5em; background: transparent; border-left: solid 5px #7db4e6;") どうして作ろうと思ったか
  p 普段何気なく使っているログイン機能、外部サービスのAPI等で簡単に実装できるが実際はHTTP(S)通信・セキュリティ面・データベース連携等、
    br
    |様々な技術が使われている。あえて自力でこれらを学びつつログイン機能を作成することで、
    |得られる知識が多いと思い作成を開始しました。
  h2 開発環境
  table#dev_tools(border=1,flame="border",rules="all")
    tbody
      tr
        td OS
        td Windows
      tr
        td エディタ（IDE）
        td Visual Studio Code
      tr
        td バージョン管理ソフト
        td git/GitLab/GitHub
      tr
        td(rowspan="2") 開発言語
        td JavaScript
      tr
        td Node.js /Vue.js /Vuetify /Express.js
      tr  
        td(rowspan="2") その他ツール
        td SQLite(RDBMS)
      tr
        td Sequelize(ORM)
  h2(style="margin: 0.25em; padding: 0.25em 0.5em; background: transparent; border-left: solid 5px #7db4e6;") 将来的な運用について
  p ログイン機能でユーザごとに権限があるマイページに安全に移動させる事ができたら、他に開発しているWebサービスにマージして運用していきたいです。
    br
    | また、UI、UXの面からユーザにとってよりよい操作性やデザインのログインページにブラッシュアップできたらと思っております。
    br
    | 現在はリポジトリからCloneしないと環境構築が出来ないため、実行環境に依存しないGitHubPages(クライアント)とFirebase(サーバ)で公開したいです。

  h2(style="margin: 0.25em; padding: 0.25em 0.5em; background: transparent; border-left: solid 5px #7db4e6;") 開発時に自分が苦労した点
  h3 ORMの理解
  p SQL文をJavaScript内のコードに書いてしまうと保守性や可読性が落ちると懸念したためORMを実装しました。
  |ORMはSequelizeを使用しましたが、上手くDBに接続できない、テーブルが認知されない等のエラーに悩まされましたが、
  |公式のリファレンスを読むことで少しずつ理解を深めていきました。
  h3 データ通信を意識した事
  p 今まで、CやVHDL等のハードウェア寄りの言語を扱っていた為、サーバとクライアントが通信するという認識が曖昧でした。
    br
    |そもそもネットワークの知識から不足していると考え、関連する書籍や応用情報の参考書等を用いて、
    br
    | OSI基本参照モデルから根本的に理解することにしました。
  P 今までHTTP(S)と曖昧に認識していたものがようやく実態になって理解できました。
  h3 promiseによる非同期処理の理解
  p サーバを作成する際、node.jsの非同期処理に最初悩まされました。
    |サーバのレスポンスを待たず、結果（undefined）を返してしまったり、
    br
    | 自身が書いたコードの実行順が分からなくなってしまうという事態が発生しました。
    br
    |ES2015から実装されたpromiseを用いた構文でサーバの処理を書くことでこれらの問題を解決したと共に、
    br
    |非同期処理、同期処理の使い分けを意識できるようになりました。

  h2(style="margin: 0.25em; padding: 0.25em 0.5em; background: transparent; border-left: solid 5px #7db4e6;").system_constitution システム構成について
  p user_loginのシーケンス図を下記に示しています。
  img#sequence_diagram(src="/sequence_diagram.png",alt="シーケンス図",width="60%")

  p ユーザの操作を受け付けたり、画面描画を行うフロントエンド用サーバ、
    br
    |フロントエンドで受け取ったデータを元にデータベースと連携した操作を行うバックエンド用サーバ（APIサーバ）
    br
    |この2つのサーバが主軸となり、システムを構築しています。
  p この2つのサーバ間ではHTTP通信を行っており、バックエンド用のサーバのルーティング処理を切り替える事でCRUD処理を実装しています。

  h2(style="margin: 0.25em; padding: 0.25em 0.5em; background: transparent; border-left: solid 5px #7db4e6;").about_function 実装機能の説明
  h3 データベース連携によるユーザ情報のCRUD処理
  p SQLite＋Sequelizeにより、JavaScript（Node.js+Express.js）で
    br
    |アカウントの新規登録、登録ユーザの表示、既存ユーザの情報変更、既存ユーザの削除を行う処理を実装しました。
  br
  video(src="/user_registration.mp4",alt="ユーザ新規登録",width="80%",autoplay,cnotrols,loop)
  figcaption ユーザの新規登録の例
  p 上記の動画より、"Sakamoto","Saito"というユーザ名を入力し、順に登録処理を行いました。
  |登録処理後に、管理者画面に戻ると"Sakamoto"のアカウント情報が表示されています。
  br
  |右側のターミナルで左側のブラウザの入力内容がサーバに送られ、DBに格納しています。
  br
  |DBに登録が終了したことをレスポンストとしてブラウザに返すという一連の流れでCRUD処理を行っています。
  
  br
  h3 登録したユーザのパスワードの暗号化
  p SQLiteはパスワード設定を行わないためDBの情報が常に外部に晒されています。
    br
    |パスワードのような悪用されるであろうデータはハッシュ値を計算して暗号化しています。
    br
    |DBと通信する際にサーバ側でパスワードを復号するため、ユーザ側は平文のパスワードのままでログイン処理を行えます。
  img(src="/encrypted_password.png",alt="暗号化されたパスワード例",width="90%")
  figcaption 暗号化されたパスワード例（passwordのカラム参照）
  br
  h3 アクセストークンによるユーザ認証
  p 登録したユーザに対しアクセストークンを発行することでより安全なユーザ認証機能を実現させました。
  p アクセストークンはJsonWebTokenを用いて、HS256(共通鍵暗号方式)で暗号化します。
    |このプロジェクトでは認可サーバとAPIサーバが同一でサーバ間の通信が行われないためRS256（公開鍵暗号方式）ではなく
    |導入コストの少ないHS256を暗号化のアルゴリズムに採用しています。
    br
  p 秘密鍵の情報は公開していないため、外部からこのトークンが復号化されるリスクを減らしています。
  video(src="/token_generated.mp4",alt="生成されたトークン例",width="80%",autoplay,cnotrols,loop)
  figcaption 発行されたアクセストークンの例

  div
    p 左側がログイン画面のブラウザで、右側がサーバ側の処理のログを出しているターミナルです。
      |既に登録処理をしている"Sakamoto"というアカウントに対し、
      br
      |間違ったパスワード＞正しいパスワード＞ログイン成功としてマイページに移動＞ログインページに対しリロード
      |という一連の流れの処理を行っております。
      br
      |ログインが成功すると、そのユーザに対して一意なアクセストークンを発行しています。
      br
      |ターミナルのgenerated Token:～以降に表示されているのがアクセストークンとなります。
      br

  div
    p アクセストークンはCookieに保存され、以降そのCookieを参照しユーザ本人の署名として自動でログインを行います。
      br
      | ログイン成功後にログイン画面に戻りページリロードを行う事で自動ログインが確認できます。

</template>

<script>
export default {
  name: 'AboutUserLogin',
  components: {}
}
</script>

<style scoped></style>
