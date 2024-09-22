


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