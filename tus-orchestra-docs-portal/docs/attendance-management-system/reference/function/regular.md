import SourceLink from '/src/components/SourceLink';
import FeatureLink from '/src/components/FeatureLink';

<SourceLink href="/docs/attendance-management-system/source/function/regular"/>
<FeatureLink href="/docs/attendance-management-system/feature/function/regular"/>

## 起動条件
毎日、0:00 ~ 1:00と12:00 ~ 13:00 の間に起動します。

## 機能
`練習予定の管理`スプレッドシートから`練習予定`シートを読み込み、起動した日が練習日であれば対応した出欠表シートにコマごとの出欠列を生成、認証コードの再生成とDiscordチャネルへの送信を行います。