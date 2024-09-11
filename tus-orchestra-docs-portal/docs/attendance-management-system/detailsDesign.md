import SourceLink from '@site/src/components/SourceLink';
import ReferenceLink from '@site/src/components/ReferenceLink';


# 詳細設計書

## 1. 概要

**目的**  
詳細設計書では、システムの各コンポーネントの具体的な実装方法やインターフェース、データフローについて詳細に記述します。

## 2. 実行関数
Google Apps Scriptによるトリガーや、HTTPリクエストによって起動する関数を記述します。

### regular()
<SourceLink href="/docs/attendance-management-system/source/doGet">ソースコード</SourceLink>

#### 起動条件
毎日、0:00 ~ 1:00と12:00 ~ 13:00 の間に起動します。

#### 機能
`練習予定の管理`スプレッドシートから`練習予定`シートを読み込み、起動した日が練習日であれば対応した出欠表シートにコマごとの出欠列を生成、認証コードの再生成とDiscordチャネルへの送信を行います。


### doPost(e)

:::info
doPost()関数は、Google Apps Script内で定義される特殊な関数です。スクリプトをWebアプリとしてデプロイした際に、HTTP Postリクエストを受信することができます。通常、スプレッドシートの情報を更新するために使用されます。
:::
#### 起動条件
HTTP Postリクエストを受信すると起動します。

#### 機能
リクエスト時のパラメータによって、以下の機能を実装します。

##### ユーザー情報の編集
Discord内で、サーバー内ニックネームの更新や、ロールの更新があった際に各スプレッドシートのユーザー情報も更新させるために、DiscordボットからHTTPリクエストされる。

#### 練習連絡リストの更新
Discordボット内でのコマンド操作によって、練習連絡を受信するメンバーリストの更新を行う。

#### 活動日の追加
Discordボットにより練習連絡を行った際にDiscordBotからスプレッドシートに出欠表に活動日を追加させるために使用される。

#### 認証コードによる出欠登録
ユーザーによって送信された認証コードの照合や出席登録を行う。


### doGet(e)

:::info
doGet()関数は、Google Apps Script内で定義される特殊な関数です。スクリプトをWebアプリとしてデプロイした際に、HTTP Getリクエストを受信することができます。通常、スプレッドシートの情報を更新するために使用されます。
:::

#### 起動条件
HTTP Getリクエストを受信すると起動します。

#### 機能
リクエスト時のパラメータによって、以下の機能を実装します。

#### ユーザー情報の提示
スプレッドシート内で記述されているユーザー情報を返します。

#### 練習連絡受信リストの提示
スプレッドシート内で管理されている練習連絡受信リストを返します。

## 2. システムコンポーネント

### 2.1. Google Sheets テンプレート

- **メンバーシート (`MembersInfoSheet`)**
  - **カラム**: `ID`, `Name`, `Part`, `Grade`, `AttendanceStatus`, `ContactList`
  - **主な操作**:
    - メンバー情報の編集
    - 連絡先リストへの追加

- **出欠シート (`AttendanceSheet`)**
  - **カラム**: `ID`, `Date`, `AttendanceStatus`
  - **主な操作**:
    - 出欠の登録
    - 出席率の計算

- **イベントシート (`EventAttendanceSheet`)**
  - **カラム**: `EventDate`, `AttendanceStatus`
  - **主な操作**:
    - イベント日付の取得
    - イベントの出欠情報の設定

- **設定シート (`AdminEventSheet`)**
  - **カラム**: `SettingDate`, `AttendanceSummarize`
  - **主な操作**:
    - 出欠集計の設定

### 2.2. クラス設計

#### 2.2.1. `Member`

- **プロパティ**:
  - `id`: メンバーID
  - `name`: 名前
  - `part`: 部分
  - `grade`: 学年
  - `attendanceStatus`: `AttendanceStatus` インスタンス

- **メソッド**:
  - `addContactList()`: メンバーを連絡先リストに追加
  - `edit()`: メンバー情報の更新

#### 2.2.2. `AttendanceStatus`

- **プロパティ**:
  - `id`: メンバーID
  - `normalAttendRateInfo`: 通常の出席率情報 (`AttendRateInfo`)
  - `tuttiAttendRateInfo`: Tuttiの出席率情報 (`AttendRateInfo`)

- **メソッド**:
  - `getAttendRateStatus(attendanceBook: AttendanceBook)`: 出席率の取得
  - `discordFormat()`: 出席率をDiscordフォーマットで出力

#### 2.2.3. `verifyAttendance`

- **プロパティ**:
  - `member`: `Member` インスタンス
  - `code`: 認証コード

- **メソッド**:
  - `start()`: 出席確認処理を実行

### 2.3. API設計

#### 2.3.1. `doGet(e)`

- **エンドポイント**:
  - `/dashboard`: ダッシュボードを表示
  - `/settingMeetingForm`: イベント設定フォームを表示
  - `/user_data`: メンバーの出席状況をJSON形式で返す
  - `/can_send_activity_dm`: 特定の部門への連絡可能メンバーリストを返す

- **パラメータ**:
  - `mode`: 処理モードを指定 (`dashboard`, `settingMeetingForm`, `user_data`, `can_send_activity_dm`)
  - `id`: メンバーID
  - `type`: 部門タイプ (`strings`, `brass`, `woodwind`, `percussion`, `orchestra`)

#### 2.3.2. `doPost(e)`

- **エンドポイント**:
  - `/edit_user`: メンバー情報の編集
  - `/belong_contact_list`: 連絡先リストへの追加
  - `/generate_activity_date`: 練習日付の生成
  - `/auth_attend`: 出席確認

- **リクエストボディ**:
  - `mode`: 処理モード (`edit_user`, `belong_contact_list`, `generate_activity_date`, `auth_attend`)
  - `id`: メンバーID
  - `name`: 名前
  - `part`: 部分
  - `grade`: 学年
  - `date`: 日付
  -
