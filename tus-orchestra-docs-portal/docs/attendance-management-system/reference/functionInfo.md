import SourceLink from '@site/src/components/SourceLink';
import FunctionLink from '@site/src/components/FunctionLink';

# 関数リファレンス

## `doGet` 関数

この関数は、HTTP GET リクエストを処理し、リクエストパラメータに応じたレスポンスを返します。Google Apps Script の Web アプリケーションで使用されるエントリポイントです。

<SourceLink href="/docs/attendance-management-system/source/doGet">ソースコード</SourceLink>
<FunctionLink href="/docs/attendance-management-system/detailsDesign#dogete">機能設計</FunctionLink>

### パラメータ

- **`e`**: `GoogleAppsScript.Events.AppsScriptHttpRequest` オブジェクト
  - **説明**: HTTP GET リクエストの情報を含むオブジェクト。`e.parameter` でクエリパラメータにアクセスできます。

### 処理の流れ

1. **`mode` の取得**
   - リクエストパラメータ `mode` を取得し、その値に応じた処理を行います。

2. **モード別の処理**

   - **`dashboard`**
     - **説明**: メンバーの出席率を取得し、ダッシュボード HTML テンプレートにデータを渡して表示します。
     - **処理**:
       - `NormalAttendanceBook` と `TuttiAttendanceBook` のインスタンスを作成します。
       - 指定されたメンバーの出席率情報を取得します。
       - ダッシュボード用の HTML テンプレートを作成し、出席率データをテンプレートに渡します。
       - CSS ファイルを読み込み、テンプレートに追加します。
       - HTML を評価してレスポンスとして返します。

   - **`settingMeetingForm`**
     - **説明**: 会議設定用のフォーム HTML テンプレートを表示します。
     - **処理**:
       - フォーム用の HTML テンプレートを作成します。
       - CSS ファイルを読み込み、テンプレートに追加します。
       - HTML を評価してレスポンスとして返します。

   - **`user_data`**
     - **説明**: メンバーの出席情報を Discord 形式で取得し、レスポンスとして返します。
     - **処理**:
       - 指定されたメンバーの出席情報を取得します。
       - 出席情報を Discord 形式にフォーマットし、テキストレスポンスとして返します。

   - **`can_send_activity_dm`**
     - **説明**: 特定のパート（弦楽器、金管楽器、木管楽器、打楽器など）の連絡先リストを取得し、JSON 形式で返します。
     - **処理**:
       - `AdminActivityBook` から連絡先リストを取得します。
       - リクエストパラメータ `type` に基づいて、対象パートをフィルタリングします。
       - 対象パートに含まれるメンバーの ID を収集し、JSON 形式でレスポンスとして返します。

### 戻り値

- **`HtmlOutput`** または **`TextOutput`**
  - **説明**: リクエストパラメータに応じて生成された HTML または JSON テキストがレスポンスとして返されます。

## `doPost` 関数

この関数は、HTTP POST リクエストを処理し、リクエストボディに基づいて適切なアクションを実行します。Google Apps Script の Web アプリケーションで POST リクエストを処理するエントリポイントです。

<SourceLink href="/docs/attendance-management-system/source/doPost">ソースコード</SourceLink>

### パラメータ

- **`e`**: `GoogleAppsScript.Events.AppsScriptHttpRequest` オブジェクト
  - **説明**: HTTP POST リクエストの情報を含むオブジェクト。`e.postData.contents` でリクエストボディのデータにアクセスできます。

### 処理の流れ

1. **JSON データの解析**
   - `e.postData.contents` から JSON データを取得し、`jsonData` として解析します。

2. **モード別の処理**
   - **`edit_user`**
     - **説明**: メンバーの情報を編集します。
     - **処理**:
       - `Member` クラスのインスタンスを作成し、`edit` メソッドを呼び出してメンバー情報を更新します。
     
   - **`belong_contact_list`**
     - **説明**: メンバーを連絡先リストに追加します。
     - **処理**:
       - `Member` クラスのインスタンスを作成し、`addContactList` メソッドを呼び出して連絡先リストに追加します。

   - **`generate_activity_date`**
     - **説明**: 練習日をスケジュールシートに追加します。
     - **処理**:
       - `AdminActivityBook` クラスのインスタンスを作成し、`getScheduleSheet` メソッドでスケジュールシートを取得します。
       - `prepareActivityDate` メソッドを呼び出して、指定された練習日をシートに追加します。

   - **`auth_attend`**
     - **説明**: 出席認証を行います。
     - **処理**:
       - `verifyAttendance` クラスのインスタンスを作成し、`start` メソッドを呼び出して出席確認を行います。
       - 結果の文字列を返します。

3. **デフォルトのレスポンス**
   - **説明**: モードに一致しない場合、またはエラーが発生した場合のレスポンスを返します。
   - **処理**: `'返り値がありません'` を返します。

### 戻り値

- **`TextOutput`**
  - **説明**: 処理結果をテキスト形式でレスポンスとして返します。具体的な内容は処理結果に応じたメッセージです。

## `regular` 関数

この関数は、スケジュールシートの出欠列を生成し、必要に応じて出欠管理のための処理を行います。主に、練習日の出欠情報を更新し、認証コードを置き換える役割を持っています。

<SourceLink href="/docs/attendance-management-system/source/regular">ソースコード</SourceLink>

### 処理の流れ

1. **スケジュールシートの取得**
   - `AdminActivityBook` クラスのインスタンスを作成し、`getScheduleSheet` メソッドでスケジュールシートを取得します。

2. **出欠列の生成**
   - `scheduleSheet.setActivityDate()` を呼び出して、出欠列を生成します。

3. **今日の日付の取得**
   - `Today` クラスのインスタンスを作成し、今日の日付を取得します。

4. **練習日でない場合は処理を終了**
   - `scheduleSheet.isActivityDate(today)` メソッドを使って、今日が練習日でない場合は処理を終了します。

5. **午前0時の場合の処理**
   - 今日の時刻が午前0時 (`today.date.getHours() === 0`) である場合、`scheduleSheet.beginActivityDate(today)` を呼び出して、練習日の出欠列を生成します。

6. **認証コードの置き換え**
   - `SystemBook` クラスのインスタンスを作成し、`getAttendanceCodeSheet` メソッドで認証コードシートを取得します。
   - `attendanceCodeSheet.replaceCode()` を呼び出して、認証コードを置き換えます。

### 戻り値

- **なし**
  - **説明**: この関数は特に戻り値を返しません。処理が完了すると、必要な更新や設定が行われます。

## `setEventInfo` 関数

この関数は、イベント情報を設定するために使用されます。`AdminEventBook` クラスのインスタンスを作成し、その `setEventInfo` メソッドを呼び出します。

<SourceLink href="/docs/attendance-management-system/source/setEventInfo">ソースコード</SourceLink>

### 処理の流れ

1. **AdminEventBook インスタンスの作成**
   - `AdminEventBook` クラスのインスタンスを作成します。

2. **イベント情報の設定**
   - `adminEventBook.setEventInfo()` を呼び出して、イベント情報を設定します。

### 戻り値

- **なし**
  - **説明**: この関数は特に戻り値を返しません。`setEventInfo` メソッドが実行されることで、イベント情報が設定されます。

## `startEventFlow` 関数

この関数は、Google スプレッドシートの UI にダイアログを表示し、ユーザーが指定されたリンクにアクセスできるようにします。

<SourceLink href="/docs/attendance-management-system/source/startEventFlow">ソースコード</SourceLink>

### 処理の流れ

1. **UI インスタンスの取得**
   - `SpreadsheetApp.getUi()` を使用して、スプレッドシートの UI インスタンスを取得します。

2. **HTML ダイアログの作成**
   - `HtmlService.createHtmlOutput` を使用して、HTML コンテンツを作成します。この HTML には、`doGetUrl` プロパティに基づいたリンクが含まれています。

3. **モデルレスダイアログの表示**
   - `ui.showModelessDialog` メソッドを使用して、作成した HTML をモデルレスダイアログとして表示します。このダイアログは「リンクからアクセス」というタイトルが付けられています。

### 戻り値

- **なし**
  - **説明**: この関数は特に戻り値を返しません。ダイアログが UI に表示され、ユーザーがリンクをクリックできるようになります。
