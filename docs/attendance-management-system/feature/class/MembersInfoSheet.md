import FeatureLinks from '/src/components/pageLink/FeatureLinks'
import MembersSheet from '/docs/attendance-management-system/feature/class/MembersSheet.md'

<FeatureLinks component='MembersInfoSheet' type='class' project='attendance-management-system' />

---

## プロパティ
無し

---

## メソッド

### addContactList ( id )
#### アクセス修飾子
`public`

#### 機能
指定したメンバーIDの連絡先リストにメンバーを追加します。該当するメンバーの行に「TRUE」を設定します。

#### パラメータ
- `id` :`string`

  連絡先リストに追加するメンバーのID。

#### 戻り値
無し

---

### getContactListRows
#### アクセス修飾子
`public`

#### 機能
連絡先リストに含まれるメンバーの情報を取得します。連絡先リストに「TRUE」が設定された行をフィルタリングして返します。


#### 戻り値
- `Array<Array<string>>`

  連絡先リストに含まれるメンバーの情報を含む配列の配列。

---

### getMemberIsPracticeContact ( id )
#### アクセス修飾子
`public`

#### 機能
指定したメンバーIDが連絡先リストに含まれているかどうかを確認します。メンバーの連絡先リストのステータスを返します。

#### パラメータ
- `id` :`string`

  ステータスを確認するメンバーのID。

#### 戻り値
- `string`

  メンバーの連絡先リストのステータス。`"TRUE"` または `"FALSE"` が返されます。

---

## 親クラス
### MembersSheet
> <MembersSheet />