import FeatureLinks from '/src/components/pageLink/FeatureLinks'
import ConstructorDoc from '/docs/components/TypeScript/ConstructorDescription.md'
import SheetDoc from '/docs/components/GoogleAppsScript/Sheet.md'

<FeatureLinks component='Book' type='class' project='attendance-management-system' />

---

## プロパティ

### `book`: `GoogleAppsScript.Spreadsheet.Spreadsheet`
#### アクセス修飾子
`protected`

#### 機能
Google Sheets のスプレッドシートオブジェクトを格納します。

---

## メソッド

### constructor

<ConstructorDoc />

#### 機能
スプレッドシートを開くために、`type` パラメータに基づいてスプレッドシートの ID を取得し、`book` プロパティを初期化します。

#### パラメータ
##### `type`: `string`
スプレッドシートの ID を取得するためのスクリプトプロパティ名。

#### 戻り値
無し

---

### getSheetByName

#### 機能
対象のスプレッドシート内のシートを取得します。

#### アクセス修飾子
`protected`

#### パラメータ
##### `sheetName`: `string`
取得するシートの名前

#### 戻り値
`Sheet`

<SheetDoc />