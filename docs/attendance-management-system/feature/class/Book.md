

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