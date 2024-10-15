import FeatureLinks from '/src/components/pageLink/FeatureLinks'
import ConstructorDoc from '/docs/components/TypeScript/ConstructorDescription.md'
import SheetDoc from '/docs/attendance-management-system/feature/class/Sheet.md'

<FeatureLinks component='AttendanceCodeSHeet' type='class' project='attendance-management-system' />

---

## プロパティ

### `code` :`string`
#### アクセス修飾子
`private`

#### 機能
現在の出席認証コードを格納します。

---

## メソッド

### constructor ( sheet )

<ConstructorDoc />

#### 機能
シートから出席認証コードを取得し、`code` プロパティに設定します。

#### パラメータ
- `sheet` :`GoogleAppsScript.Spreadsheet.Sheet`

  操作対象のシート。

#### 返り値
無し

---

### getCode
#### アクセス修飾子
`public`

#### 機能
認証コードを取得します。

#### パラメータ
無し

#### 戻り値
- `string`

  認証コードを表す文字列。

---

### replaceCode ( notice )
#### アクセス修飾子
`public`

#### 機能
新しい認証コードを生成し、シートに設定します。オプションで、Discord に通知を送信します。

#### パラメータ
- `notice` :`boolean`

  `true` の場合、新しいコードを Discord に通知します。デフォルトでは`true`。

#### 戻り値
無し

---

### sendDiscord ( code )
#### アクセス修飾子
`private`

#### 機能
新しい認証コードを Discord に送信します。通知の内容には、現在の日付と時間が含まれます。

#### パラメータ
- `code` :`string`

  送信する認証コード。

## 親クラス
### Sheet
> <SheetDoc />