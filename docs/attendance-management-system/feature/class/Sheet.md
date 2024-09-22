

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