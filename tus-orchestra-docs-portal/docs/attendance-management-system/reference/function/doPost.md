import SourceLink from '/src/components/SourceLink';
import FeatureLink from '/src/components/FeatureLink';

<SourceLink href="/docs/attendance-management-system/source/function/doPost"/>
<FeatureLink href="/docs/attendance-management-system/feature/function/doPost"/>



:::info
doPost()関数は、Google Apps Script内で定義される特殊な関数です。スクリプトをWebアプリとしてデプロイした際に、HTTP Postリクエストを受信することができます。通常、スプレッドシートの情報を更新するために使用されます。
:::
## 起動条件
HTTP Postリクエストを受信すると起動します。

## 機能
リクエスト時のパラメータによって、以下の機能を実装します。

### ユーザー情報の編集
Discord内で、サーバー内ニックネームの更新や、ロールの更新があった際に各スプレッドシートのユーザー情報も更新させるために、DiscordボットからHTTPリクエストされる。

### 練習連絡リストの更新
Discordボット内でのコマンド操作によって、練習連絡を受信するメンバーリストの更新を行う。

### 活動日の追加
Discordボットにより練習連絡を行った際にDiscordBotからスプレッドシートに出欠表に活動日を追加させるために使用される。

### 認証コードによる出欠登録
ユーザーによって送信された認証コードの照合や出席登録を行う。