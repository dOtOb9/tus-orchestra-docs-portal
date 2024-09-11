import SourceLink from '/src/components/SourceLink';
import FeatureLink from '/src/components/FeatureLink';

<SourceLink href="/docs/attendance-management-system/source/function/doGet"/>
<FeatureLink href="/docs/attendance-management-system/feature/function/doGet"/>

:::info
doGet()関数は、Google Apps Script内で定義される特殊な関数です。スクリプトをWebアプリとしてデプロイした際に、HTTP Getリクエストを受信することができます。通常、スプレッドシートの情報を更新するために使用されます。
:::

## 起動条件
HTTP Getリクエストを受信すると起動します。

## 機能
リクエスト時のパラメータによって、以下の機能を実装します。

## ユーザー情報の提示
スプレッドシート内で記述されているユーザー情報を返します。

## 練習連絡受信リストの提示
スプレッドシート内で管理されている練習連絡受信リストを返します。  