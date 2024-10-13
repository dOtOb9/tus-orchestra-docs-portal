import FeatureLinks from '/src/components/pageLink/FeatureLinks';

<FeatureLinks component='Member' type='class' project='attendance-management-system' />

---

## プロパティ
### attendanceStatus
#### アクセス演算子
`public` `readonly`

#### データ型
`AttendanceStatus`

#### 機能
メンバーの出席率情報を管理する。

---

### id
#### アクセス演算子
`public` `readonly`

#### データ型
`string`

#### 機能
メンバーのID。識別子として使用されます。

---

### name
#### アクセス演算子
`public` `readonly`

#### データ型
`string`

#### 機能
メンバーの名前。

---

### part
#### アクセス演算子
`public` `readonly`

#### データ型
`string`

#### 機能
メンバーのパート（役割）。

---

#### grade
#### アクセス演算子
`public` `readonly`

#### データ型
`string`

#### 機能
メンバーの学年。

---

## メソッド
### constructor( id, name, part, grade )
#### 機能
メンバーのIDを指定して、新しい `Member` インスタンスを作成します。名前、パート、学年はオプションで指定できます。

#### パラメータ
- `id` :`string`

  メンバーのID。

- `name` :`string`

  メンバーの名前（デフォルトは空文字列）。

- `part` :`string`

  メンバーのパート（デフォルトは空文字列）。

- `grade` :`string`

  メンバーの学年（デフォルトは空文字列）。

#### 戻り値
無し

---

### addContactList()
#### アクセス修飾子
`public`

#### 説明
メンバーのIDを連絡先リストに追加します。

#### パラメータ
無し

#### 戻り値
無し

---

### edit()
#### アクセス修飾子
`public`

#### 説明
メンバー情報を編集し、各出席シートにもメンバーの情報を反映させます。

#### パラメータ
無し

#### 戻り値
無し