import FeatureLinks from '/src/components/pageLink/FeatureLinks'
import SheetDoc from '/docs/components/GoogleAppsScript/Sheet.md'

<FeatureLinks component='Sheet' type='class' project='attendance-management-system' />

---

## プロパティ

### sheet
#### アクセス修飾子
`private`

#### データ型
`GoogleAppsScript.Spreadsheet.Sheet`

<SheetDoc />

#### 機能
操作対象の Google Sheets のシートオブジェクト。

---

### data
#### アクセス修飾子
`protected`

#### データ型
`string[][]`

#### 機能
シート上のデータを表した二次元配列。

---

### SheetName
#### アクセス修飾子
`protected`

#### データ型
`string`

#### 機能
シートの名前。

---

## メソッド

### constructor ( sheet )
#### 機能
シートを取得して`Sheet`プロパティに格納し、その名前を`SheetName`プロパティに格納します。また、シートのデータの二次元配列に行番号と列番号を追加して `data` プロパティに格納します。

#### パラメータ

- `sheet` :`GoogleAppsScript.Spreadsheet.Sheet`

  取得するシートのオブジェクト

<SheetDoc />

#### 戻り値
無し

---

### createColumnsLeft ( value, cols, rows )
#### アクセス修飾子
`protected`

#### 機能
指定した列の左に新しい列を追加し、最初のセルに指定した値を設定します。
#### パラメータ
- `value` :`string`

  新しく追加した列の最初のセルに設定する値。

- `col` :`number`

  列を追加する位置（1から始まる）。
- `rows` :`number`

  追加する列の数。

#### 戻り値
- `number`

  更新後の列数。

--- 

### setValue ( row, col, value )
#### アクセス修飾子
`protected`

#### 機能
指定したセルに値を設定します。

#### パラメータ
- `row` :`number`

  セルの行番号。

- `col` :`number`

  セルの列番号。

- `value` :`string`

  設定する値。

#### 戻り値
無し

---

### setValues ( startRow, startCol, NumRows, NumCols, values )
#### アクセス修飾子
`protected`

#### 機能
指定した範囲のセルに複数の値を設定します。

#### パラメータ
- `startRow` :`number`

  設定する範囲の開始行番号。

- `startCol` :`number`

  設定する範囲の開始列番号。

- `NumRows` :`number`

  設定する範囲の行数。

- `NumCols` :`number`

  設定する範囲の列数。

- `values` :`Array<Array<string>>`

  設定する値の 2 次元配列。

#### 戻り値
無し

---

### appendRow( row )
#### アクセス修飾子
`protected`

#### 機能
新しい行をシートの最後に追加します。

#### パラメータ
- `row` :`Array<string>`

  追加する行のデータ。

---

### sortCol ( row, type )
#### アクセス修飾子
`protected`

#### 機能
特定の列をソートします。

#### パラメータ
- `ColNumber` :`number`

  ソートする行位置

- `type` :`boolean`

  昇順の場合は`true`、降順の場合は`false`。デフォルトでは`true`。

#### 戻り値
無し