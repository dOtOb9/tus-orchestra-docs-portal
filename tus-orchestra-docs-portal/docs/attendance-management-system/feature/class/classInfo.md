# クラスリファレンス

## `Today` クラス

このクラスは、現在の日付と時刻に関する情報を提供するためのものです。

### プロパティ

- **`date`**: `Date`
  - **アクセス修飾子**: `public`
  - 現在の日付と時刻を格納する `Date` オブジェクト。

### コンストラクタ

- **`constructor()`**
  - `date` プロパティを現在の日付と時刻で初期化します。

### メソッド

- **`toString(): string`**
  - **アクセス修飾子**: `public`
  - 現在の日付を `yyyy/MM/dd` 形式の文字列にフォーマットして返します。
  - **戻り値**: `string` - フォーマットされた日付。

- **`getTimeArea(): string`**
  - **アクセス修飾子**: `public`
  - 現在の時刻が午前か午後かを判別し、対応する文字列 (`'午前'` または `'午後'`) を返します。
  - **戻り値**: `string` - `'午前'` または `'午後'` のいずれか。

## `Book` クラス

このクラスは、Google Sheets のスプレッドシートを操作するためのものです。

### プロパティ

- **`book`**: `GoogleAppsScript.Spreadsheet.Spreadsheet`
  - **アクセス修飾子**: `protected`
  - Google Sheets のスプレッドシートオブジェクトを格納します。

### コンストラクタ

- **`constructor(type: string)`**
  - スプレッドシートを開くために、`type` パラメータに基づいてスプレッドシートの ID を取得し、`book` プロパティを初期化します。
  - **パラメータ**:
    - **`type`**: `string` - スプレッドシートの ID を取得するためのキー。


## `SystemBook` クラス

このクラスは、`Book` クラスを拡張し、特定のスプレッドシートシートにアクセスするためのメソッドを提供します。

### コンストラクタ

- **`constructor()`**
  - `Book` クラスのコンストラクタを呼び出し、`"systemBookID"` というIDでスプレッドシートを初期化します。

### メソッド

- **`getAttendanceCodeSheet(): AttendanceCodeSheet`**
  - **アクセス修飾子**: `public`
  - `"認証コード"` という名前のシートを取得し、それを `AttendanceCodeSheet` オブジェクトにラップして返します。
  - **戻り値**: `AttendanceCodeSheet` - `AttendanceCodeSheet` クラスのインスタンス。

- **`getUserInfoSheet(): UserInfoSheet`**
  - **アクセス修飾子**: `public`
  - `"ユーザー情報"` という名前のシートを取得し、それを `UserInfoSheet` オブジェクトにラップして返します。
  - **戻り値**: `UserInfoSheet` - `UserInfoSheet` クラスのインスタンス。


## `AdminActivityBook` クラス

このクラスは、`Book` クラスを拡張し、特定のスプレッドシートシートにアクセスするためのメソッドを提供します。

### コンストラクタ

- **`constructor()`**
  - `Book` クラスのコンストラクタを呼び出し、`"adminActivityBookID"` というIDでスプレッドシートを初期化します。

### メソッド

- **`getScheduleSheet(): ScheduleSheet`**
  - **アクセス修飾子**: `public`
  - `"練習予定"` という名前のシートを取得し、それを `ScheduleSheet` オブジェクトにラップして返します。
  - **戻り値**: `ScheduleSheet` - `ScheduleSheet` クラスのインスタンス。

- **`getMembersInfoSheet(): MembersInfoSheet`**
  - **アクセス修飾子**: `public`
  - `"乗り番"` という名前のシートを取得し、それを `MembersInfoSheet` オブジェクトにラップして返します。
  - **戻り値**: `MembersInfoSheet` - `MembersInfoSheet` クラスのインスタンス。

## `AdminEventBook` クラス

このクラスは、`Book` クラスを拡張し、特定のスプレッドシートシートにアクセスし、イベント情報を管理するためのメソッドを提供します。

### プロパティ

- **`adminEventSheet`**: `AdminEventSheet`
  - **アクセス修飾子**: `readonly`
  - `"管理用"` という名前のシートをラップした `AdminEventSheet` クラスのインスタンス。

- **`eventAttendanceSheet`**: `EventAttendanceSheet`
  - **アクセス修飾子**: `readonly`
  - `"出欠表"` という名前のシートをラップした `EventAttendanceSheet` クラスのインスタンス。

### コンストラクタ

- **`constructor()`**
  - `Book` クラスのコンストラクタを呼び出し、`"adminEventBookID"` というIDでスプレッドシートを初期化します。
  - `"管理用"` という名前のシートを `AdminEventSheet` オブジェクトにラップして `adminEventSheet` プロパティに設定します。
  - `"出欠表"` という名前のシートを `EventAttendanceSheet` オブジェクトにラップして `eventAttendanceSheet` プロパティに設定します。

### メソッド

- **`setEventInfo()`**
  - **アクセス修飾子**: `public`
  - `adminEventSheet` から設定日を取得し、その日付に対応するイベントの日付列番号を `eventAttendanceSheet` から取得します。
  - 取得した列番号を使って、`adminEventSheet` にイベントの出席まとめを設定します。


## `AttendanceBook` クラス

このクラスは、`Book` クラスを拡張し、指定されたシートに対して `AttendanceSheet` オブジェクトを生成するためのメソッドを提供します。

### メソッド

- **`getSheet(sheetName: string): AttendanceSheet`**
  - **アクセス修飾子**: `public`
  - 指定されたシート名 (`sheetName`) に基づいてスプレッドシートからシートを取得し、そのシートを `AttendanceSheet` オブジェクトにラップして返します。
  - **パラメータ**:
    - **`sheetName`**: `string` - 取得するシートの名前。
  - **戻り値**: `AttendanceSheet` - 指定されたシートをラップした `AttendanceSheet` クラスのインスタンス。

## `NormalAttendanceBook` クラス

このクラスは、`AttendanceBook` クラスを拡張し、特定のスプレッドシートIDで初期化するためのクラスです。

### コンストラクタ

- **`constructor()`**
  - `AttendanceBook` クラスのコンストラクタを呼び出し、`"normalAttendanceBookID"` というIDでスプレッドシートを初期化します。

## `TuttiAttendanceBook` クラス

このクラスは、`AttendanceBook` クラスを拡張し、特定のスプレッドシートIDで初期化するためのクラスです。

### コンストラクタ

- **`constructor()`**
  - `AttendanceBook` クラスのコンストラクタを呼び出し、`"tuttiAttendanceBookID"` というIDでスプレッドシートを初期化します。

## `Sheet` クラス

このクラスは、Google Sheets のシートを操作するための基本的なメソッドを提供します。シートのデータを取得し、セルの値の設定や列・行の操作を行います。

### プロパティ

- **`sheet`**: `GoogleAppsScript.Spreadsheet.Sheet`
  - **アクセス修飾子**: `private`
  - 操作対象の Google Sheets のシートオブジェクト。

- **`data`**: `string[][]`
  - **アクセス修飾子**: `protected`
  - シートから取得したデータを 2 次元配列として格納します。

### コンストラクタ

- **`constructor(sheet: GoogleAppsScript.Spreadsheet.Sheet)`**
  - **パラメータ**:
    - **`sheet`**: `GoogleAppsScript.Spreadsheet.Sheet` - 操作対象のシート。
  - シートのデータを取得し、行番号と列番号を追加して `data` プロパティに格納します。

### メソッド

- **`createColumnsLeft(value: string, col: number, rows: number): number`**
  - **アクセス修飾子**: `protected`
  - 指定した列の左に新しい列を追加し、最初のセルに指定した値を設定します。
  - **パラメータ**:
    - **`value`**: `string` - 新しく追加した列の最初のセルに設定する値。
    - **`col`**: `number` - 列を追加する位置（1から始まる）。
    - **`rows`**: `number` - 追加する列の数。
  - **戻り値**: `number` - 更新後の列数。

- **`setValue(row: number, col: number, value: string): void`**
  - **アクセス修飾子**: `protected`
  - 指定したセルに値を設定します。
  - **パラメータ**:
    - **`row`**: `number` - セルの行番号。
    - **`col`**: `number` - セルの列番号。
    - **`value`**: `string` - 設定する値。

- **`setValues(startRow: number, startCol: number, NumRows: number, NumCols: number, values: Array<Array<string>>): void`**
  - **アクセス修飾子**: `protected`
  - 指定した範囲のセルに複数の値を設定します。
  - **パラメータ**:
    - **`startRow`**: `number` - 範囲の開始行番号。
    - **`startCol`**: `number` - 範囲の開始列番号。
    - **`NumRows`**: `number` - 行数。
    - **`NumCols`**: `number` - 列数。
    - **`values`**: `Array<Array<string>>` - 設定する値の 2 次元配列。

- **`appendRow(row: Array<string>): void`**
  - **アクセス修飾子**: `protected`
  - 新しい行をシートの最後に追加します。
  - **パラメータ**:
    - **`row`**: `Array<string>` - 追加する行のデータ。


## `MemberSheet` クラス

このクラスは、`Sheet` クラスを拡張し、メンバー情報を管理するためのメソッドを提供します。メンバーの編集、追加、検索が可能です。

### メソッド

- **`editMember(memberRow: Array<string>): void`**
  - **アクセス修飾子**: `public`
  - メンバー情報を編集します。指定されたメンバーが既存のメンバーとして見つからない場合、新しいメンバーとして追加します。
  - **パラメータ**:
    - **`memberRow`**: `Array<string>` - 編集または追加するメンバーのデータを含む配列。配列のインデックスはメンバーの属性を示します。

- **`addMember(memberRow: Array<string>): void`**
  - **アクセス修飾子**: `private`
  - 新しいメンバーをシートに追加します。`editMember` メソッドから呼び出されます。
  - **パラメータ**:
    - **`memberRow`**: `Array<string>` - 追加するメンバーのデータを含む配列。配列のインデックスはメンバーの属性を示します。

- **`searchMember(id: string): string[] | undefined`**
  - **アクセス修飾子**: `protected`
  - 指定された ID を持つメンバーをシートから検索します。メンバーが見つかればその行を返し、見つからなければ `undefined` を返します。
  - **パラメータ**:
    - **`id`**: `string` - 検索するメンバーの ID。
  - **戻り値**: `string[] | undefined` - メンバーが見つかった場合はその行のデータを含む配列、見つからなければ `undefined`。

## `AttendanceCodeSheet` クラス

このクラスは、`Sheet` クラスを拡張し、出席認証コードを管理するためのメソッドを提供します。認証コードの検証、更新、通知機能を持ちます。

### プロパティ

- **`code`**: `string`
  - **アクセス修飾子**: `private`
  - 現在の出席認証コードを保持します。

### コンストラクタ

- **`constructor(sheet: GoogleAppsScript.Spreadsheet.Sheet)`**
  - **パラメータ**:
    - **`sheet`**: `GoogleAppsScript.Spreadsheet.Sheet` - 操作対象のシート。
  - シートから出席認証コードを取得し、`code` プロパティに設定します。

### メソッド

- **`isRightCode(code: string): boolean`**
  - **アクセス修飾子**: `public`
  - 提供された認証コードが現在のコードと一致するかどうかをチェックします。
  - **パラメータ**:
    - **`code`**: `string` - チェックする認証コード。
  - **戻り値**: `boolean` - コードが一致する場合は `true`、一致しない場合は `false`。

- **`replaceCode(notice=true)`**
  - **アクセス修飾子**: `public`
  - 新しい認証コードを生成し、シートに設定します。オプションで、Discord に通知を送信します。
  - **パラメータ**:
    - **`notice`**: `boolean` (デフォルト値: `true`) - `true` の場合、新しいコードを Discord に通知します。
  
- **`sendDiscord(code: string)`**
  - **アクセス修飾子**: `private`
  - 新しい認証コードを Discord に送信します。通知の内容には、現在の日付と時間が含まれます。
  - **パラメータ**:
    - **`code`**: `string` - 送信する認証コード。

## `UserInfoSheet` クラス

このクラスは、`Sheet` クラスを拡張し、ユーザー情報を管理するための基本クラスです。現在のコードには特定のメソッドやプロパティは実装されていませんが、`Sheet` クラスから継承した機能を利用してユーザー情報の操作が行えます。

## `ScheduleSheet` クラス

このクラスは、`Sheet` クラスを拡張し、練習スケジュールを管理するためのメソッドを提供します。練習コマの取得、活動日設定、出席管理などが可能です。

### メソッド

- **`getNowTermRow(): Array<Array<string>>`**
  - **アクセス修飾子**: `public`
  - 現在の練習コマの情報を取得します。今日の日付と時間帯（午前または午後）に基づいて、該当する行をフィルタリングします。
  - **戻り値**: `Array<Array<string>>` - 現在の練習コマに該当する行のデータを含む 2 次元配列。

- **`setActivityDate(): void`**
  - **アクセス修飾子**: `public`
  - 列名が空白の行を取得し、通常練習または Tutti 練習に対して活動日を設定します。各練習の曲名に基づいて、対応する出席シートに活動日を設定し、その列の位置を記録します。

- **`beginActivityDate(today: Today): void`**
  - **アクセス修飾子**: `public`
  - 今日の活動日を開始します。今日の日付に基づいて、通常練習または Tutti 練習に対して出席を設定し、システムブックの出席コードシートを更新します。
  - **パラメータ**:
    - **`today`**: `Today` - 今日の日付を表す `Today` オブジェクト。

- **`isActivityDate(today: Today): boolean`**
  - **アクセス修飾子**: `public`
  - 今日が活動日かどうかをチェックします。
  - **パラメータ**:
    - **`today`**: `Today` - 今日の日付を表す `Today` オブジェクト。
  - **戻り値**: `boolean` - 今日が活動日であれば `true`、そうでなければ `false`。

- **`prepareActivityDate(date: string, section: string, tutti: string, slots: Array<string>): void`**
  - **アクセス修飾子**: `public`
  - 指定した日付、セクション、Tutti 練習の有無、およびスロットに基づいて新しい活動日をシートに追加します。
  - **パラメータ**:
    - **`date`**: `string` - 活動日の日付。
    - **`section`**: `string` - 活動のセクション。
    - **`tutti`**: `string` - Tutti 練習の有無。
    - **`slots`**: `Array<string>` - スロット情報の配列。各スロットに対して新しい行が追加されます。

## `AttendanceSheet` クラス

このクラスは、`MemberSheet` クラスを拡張し、出席データを管理するためのメソッドを提供します。メンバーの出席情報の編集、出席日付の設定、出席状況の更新などを行います。

### メソッド

- **`editMember(memberRow: Array<string>): void`**
  - **アクセス修飾子**: `public`
  - メンバーの情報を更新します。新しい行を追加し、出席回数、出席率などの計算式を設定します。
  - **パラメータ**:
    - **`memberRow`**: `Array<string>` - 更新するメンバーの情報を含む配列。
  - **オーバーライド**: `MemberSheet` クラスの `editMember` メソッド。

- **`setActivityDate(date: string): number`**
  - **アクセス修飾子**: `public`
  - 指定した日付に対応する列を作成し、その列の位置を返します。
  - **パラメータ**:
    - **`date`**: `string` - 活動日の日付。
  - **戻り値**: `number` - 生成した列の位置。

- **`setAttend(id: string, datePos: number): boolean`**
  - **アクセス修飾子**: `public`
  - メンバーの出席状況を「欠席」から「出席」に変更します。変更が成功した場合は `true` を返します。
  - **パラメータ**:
    - **`id`**: `string` - 出席を設定するメンバーのID。
    - **`datePos`**: `number` - 活動日列の位置。
  - **戻り値**: `boolean` - 出席状況が変更された場合は `true`、そうでない場合は `false`。

- **`setAbsense(dateColNumber: number): void`**
  - **アクセス修飾子**: `public`
  - 指定した列に対して全メンバーの出席状況を「欠席」に設定します。
  - **パラメータ**:
    - **`dateColNumber`**: `number` - 欠席を設定する列の位置。

- **`getMemberAttendanceRateAndBase(id: string): { rate: string, base: string }`**
  - **アクセス修飾子**: `public`
  - 指定したメンバーの出席率と基準出席回数を取得します。
  - **パラメータ**:
    - **`id`**: `string` - 情報を取得するメンバーのID。
  - **戻り値**: `{ rate: string, base: string }` - メンバーの出席率と基準出席回数を含むオブジェクト。

## `AdminEventSheet` クラス

このクラスは、`Sheet` クラスを拡張し、管理用の出欠表を操作するためのメソッドを提供します。出欠データの集計や設定日付の取得などを行います。

### メソッド

- **`getSettingDate(): string`**
  - **アクセス修飾子**: `public`
  - 設定された日付を取得します。この日付は、データシートの特定のセルから取得されます。
  - **戻り値**: `string` - 設定された日付。

- **`setAttendaneSummarize(dateColNumber: number): void`**
  - **アクセス修飾子**: `public`
  - 出欠データの集計結果を管理シートに設定します。指定された列に対して、出席、委任状、早退、欠席の数を集計し、その結果をシートに表示します。
  - **パラメータ**:
    - **`dateColNumber`**: `number` - 出欠データがある列の位置。
  - **戻り値**: なし

## `EventAttendanceSheet` クラス

このクラスは、`Sheet` クラスを拡張し、イベントの出欠シートを操作するためのメソッドを提供します。特定のイベントの日付に関連する列を取得します。

### メソッド

- **`getEventDate(date: string): number`**
  - **アクセス修飾子**: `public`
  - 指定したイベントの日付に対応する列の位置を取得します。シートのヘッダー行から日付を検索し、その列の位置を返します。
  - **パラメータ**:
    - **`date`**: `string` - 検索する日付。
  - **戻り値**: `number` - 日付に対応する列の位置。日付が見つからない場合は `-1` が返されます。

## `MembersInfoSheet` クラス

このクラスは、`MemberSheet` クラスを拡張し、メンバーの情報を管理するためのメソッドを提供します。特に連絡先リストの管理や連絡先情報の取得を行います。

### メソッド

- **`addContactList(id: string): void`**
  - **アクセス修飾子**: `public`
  - 指定したメンバーIDの連絡先リストにメンバーを追加します。該当するメンバーの行に「TRUE」を設定します。
  - **パラメータ**:
    - **`id`**: `string` - 連絡先リストに追加するメンバーのID。
  - **戻り値**: なし

- **`getContactListRows(): Array<Array<string>>`**
  - **アクセス修飾子**: `public`
  - 連絡先リストに含まれるメンバーの情報を取得します。連絡先リストに「TRUE」が設定された行をフィルタリングして返します。
  - **戻り値**: `Array<Array<string>>` - 連絡先リストに含まれるメンバーの情報を含む配列の配列。

- **`getMemberIsPracticeContact(id: string): string`**
  - **アクセス修飾子**: `public`
  - 指定したメンバーIDが連絡先リストに含まれているかどうかを確認します。メンバーの連絡先リストのステータスを返します。
  - **パラメータ**:
    - **`id`**: `string` - ステータスを確認するメンバーのID。
  - **戻り値**: `string` - メンバーの連絡先リストのステータス。`"TRUE"` または `"FALSE"` が返されます。


## `AttendanceStatus` クラス

このクラスは、メンバーの出席率を管理し、通常練習およびTutti練習の出席率情報を提供します。また、Discordフォーマットでの出席状況の文字列を生成します。

### プロパティ

- **`id`**: `string`
  - **説明**: メンバーのID。出席率情報を取得するために使用されます。

- **`normalAttendRateInfo`**: `AttendRateInfo`
  - **説明**: 通常練習におけるメンバーの出席率情報。

- **`tuttiAttendRateInfo`**: `AttendRateInfo`
  - **説明**: Tutti練習におけるメンバーの出席率情報。

### コンストラクタ

- **`constructor(id: string)`**
  - **説明**: メンバーのIDを指定して、出席率情報を取得します。
  - **パラメータ**:
    - **`id`**: `string` - メンバーのID。

### メソッド

- **`getAttendRateStatus(attendanceBook: AttendanceBook): AttendRateInfo`**
  - **アクセス修飾子**: `public`
  - **説明**: 指定された `AttendanceBook` から出席率情報を取得します。
  - **パラメータ**:
    - **`attendanceBook`**: `AttendanceBook` - 出席率情報を取得するための `AttendanceBook` インスタンス。
  - **戻り値**: `AttendRateInfo` - 取得した出席率情報。

- **`discordFormat(): string`**
  - **アクセス修飾子**: `public`
  - **説明**: 通常練習およびTutti練習の出席率情報をDiscordフォーマットの文字列として生成します。
  - **戻り値**: `string` - Discordフォーマットの出席状況文字列。


## `Member` クラス

このクラスは、メンバーの基本情報と出席状況を管理します。また、メンバー情報の編集や連絡先リストへの追加機能を提供します。

### プロパティ

- **`attendanceStatus`**: `AttendanceStatus`
  - **説明**: メンバーの出席率情報を管理する `AttendanceStatus` インスタンス。

- **`id`**: `string`
  - **説明**: メンバーのID。識別子として使用されます。

- **`name`**: `string`
  - **説明**: メンバーの名前。

- **`part`**: `string`
  - **説明**: メンバーのパート（役割）。

- **`grade`**: `string`
  - **説明**: メンバーの学年。

### コンストラクタ

- **`constructor(id: string, name: string = "", part: string = "", grade: string = "")`**
  - **説明**: メンバーのIDを指定して、新しい `Member` インスタンスを作成します。名前、パート、学年はオプションで指定できます。
  - **パラメータ**:
    - **`id`**: `string` - メンバーのID。
    - **`name`**: `string` - メンバーの名前（デフォルトは空文字列）。
    - **`part`**: `string` - メンバーのパート（デフォルトは空文字列）。
    - **`grade`**: `string` - メンバーの学年（デフォルトは空文字列）。

### メソッド

- **`addContactList()`**
  - **アクセス修飾子**: `public`
  - **説明**: メンバーのIDを連絡先リストに追加します。
  - **戻り値**: なし

- **`edit()`**
  - **アクセス修飾子**: `public`
  - **説明**: メンバー情報を編集し、各出席シートにもメンバーの情報を反映させます。
  - **戻り値**: なし

## `verifyAttendance` クラス

このクラスは、出席確認を行うためのクラスです。メンバーIDと出席コードを使用して、出席の確認を行い、その結果に応じたメッセージを返します。

### プロパティ

- **`member`**: `Member`
  - **説明**: 出席確認を行う対象の `Member` インスタンス。

- **`code`**: `string`
  - **説明**: 出席確認に使用される認証コード。

### コンストラクタ

- **`constructor(code: string, id: string)`**
  - **説明**: 認証コードとメンバーIDを指定して、新しい `verifyAttendance` インスタンスを作成します。
  - **パラメータ**:
    - **`code`**: `string` - 出席確認に使用する認証コード。
    - **`id`**: `string` - 出席確認を行うメンバーのID。

### メソッド

- **`start()`**
  - **アクセス修飾子**: `public`
  - **説明**: 認証コードが正しいか確認し、正しい場合はメンバーの出席を記録します。出席確認の結果に応じたメッセージを返します。
  - **戻り値**: `string`
    - **返り値**:
      - `'入力コードが拒否されました。'` - コードが正しくない場合。
      - `'出席を確認しました。'` - 出席が成功した場合。
      - `'本日は練習日ではないか、既に入力されています。'` - 練習日ではないか、既に出席が記録されている場合。
