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

### getContactMemberIds ( section )
#### アクセス修飾子
`public`

#### 機能
連絡先リストに含まれるメンバーの情報を取得します。連絡先リストに「TRUE」が設定された行をフィルタリングして返します。

#### パラメータ
- `section` :`string`
  
  取得する乗り番のセクションを指定します。

    | section  | 説明 　　　　　　　　　　　　 |
    |--------- |-------------------------------|
    | 弦楽器   | 弦楽器の乗り番を取得します。　 |
    | 木管楽器 | 木管楽器の乗り番を取得します。|
    | 金管楽器 | 金管楽器の乗り番を取得します。|
    | Tutti    | 全体の乗り番を取得します。    |
    | 打楽器   | 打楽器の乗り番を取得します。  |

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

### getOffMemberIds
#### アクセス修飾子
`public`

#### 機能
曲目毎に、降り番の団員の`Discord ID`を取得します。

#### パラメータ
無し。

#### 戻り値
- `![MemberIdsByTuneName](/docs/attendance-management-system/feature/interface/MemberIdsByTuneName)`

  曲目毎の降り番の団員の`Discord ID`。

---

## 親クラス
### MembersSheet
> <MembersSheet />