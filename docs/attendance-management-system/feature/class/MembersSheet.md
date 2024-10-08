import FeatureLinks from '/src/components/pageLink/FeatureLinks'
import SheetDoc from '/docs/attendance-management-system/feature/class/Sheet.md'

<FeatureLinks component='MembersSheet' type='class' project='attendance-management-system' />

---

## プロパティ
無し

---

## メソッド

### editMember( memberRow )
#### アクセス修飾子
`public`

#### 機能
メンバー情報を編集します。指定されたメンバーが既存のメンバーとして見つからない場合、新しいメンバーとして追加します。

#### パラメータ
- `memberRow` :`Array<string>`

  編集または追加するメンバーのデータを含む配列。配列のインデックスはメンバーの属性を示します。

#### 戻り値
無し

---

### addMember( memberRow )
#### アクセス修飾子
`private`

#### 機能
新しいメンバーをシートに追加します。

#### パラメータ
- `memberRow` :`Array<string>`

  追加するメンバーのデータを含む配列。配列のインデックスはメンバーの属性を示します。

#### 戻り値
無し

---

### searchMember( id )
#### アクセス修飾子
`protected`

#### 機能
指定された ID を持つメンバーをシートから検索します。

#### パラメータ
- `id` :`string`

  検索するメンバーの ID。

#### 戻り値
- `string[] | undefined`

  メンバーが見つかった場合はその行のデータを含む配列、見つからなければ `undefined`。

---

## 親クラス
### Sheet
> <SheetDoc />