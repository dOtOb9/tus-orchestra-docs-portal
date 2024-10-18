import FeatureLinks from '/src/components/pageLink/FeatureLinks'
import MembersSheetDoc from '/docs/attendance-management-system/feature/class/MembersSheet.md'

<FeatureLinks component='AttendanceSheet' type='class' project='attendance-management-system' />

---

## パラメータ
無し

---

## メソッド

### editMemberInfoValues ( memberRow )
#### アクセス修飾子
`public`

#### 機能
メンバーの情報を更新します。新しい行を追加し、出席回数、出席率などの計算式を設定します。

#### パラメータ
- `memberRow` :`Array<string>`

  更新するメンバーの情報を含む配列。

#### 戻り値
無し

---

### createAttendanceCol ( date, memberIds )
#### アクセス修飾子
`public`

#### 機能
指定した日付に対応する列を作成し、その列の位置を返します。

#### パラメータ
- `date` :`string`

  活動日の日付。

- `memberIds` :`Array<string>`

  乗り番の`Discord ID`。

#### 戻り値
- `number`

  生成した列の位置。

---

### setAttend ( id, datePos )
#### アクセス修飾子
`public`

#### 機能
メンバーの出席状況を「欠席」から「出席」に変更します。変更が成功した場合は `true` を返します。

#### パラメータ
- `id` :`string`

  出席を設定するメンバーのID。

- `datePos` :`number`

  活動日列の位置。

#### 戻り値
- `boolean`

  出席状況が変更された場合は `true`、そうでない場合は `false`。

---

### setAbsense ( dateColNumber )
#### アクセス修飾子
`private`

#### 機能
指定した列に対して全メンバーの出席状況を「欠席」に設定します。

#### パラメータ
- `dateColNumber` :`number`

  欠席を設定する列の位置。

#### 戻り値
無し

---

### setOffMembers ( dateColNumber, memberIds )
#### アクセス修飾子
`private`

#### 機能
指定した列に対して降り番の出席状況を「降り番」に設定します。

#### パラメータ
- `dateColNumber` :`number`

  降り番を設定する列の位置。

- `memberIds` :`Array<string>`

  降り番の`Discord ID`。

#### 戻り値
無し。

---

### getMemberAttendanceRateAndBase ( id )
#### アクセス修飾子
`public`

#### 機能
指定したメンバーの出席率と基準出席回数を取得します。


#### パラメータ
- `id` :`string`

  情報を取得するメンバーのID。

#### 戻り値
- `{ rate: string, base: string }`

  メンバーの出席率と基準出席回数を含むオブジェクト。

---

## 親クラス
### MembersSheet
> <MembersSheetDoc />