
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
