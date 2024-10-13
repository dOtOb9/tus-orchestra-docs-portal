import FeatureLinks from '/src/components/pageLink/FeatureLinks'

<FeatureLinks component='SetAttendance' type='class' project='attendance-management-system' />

---

## プロパティ

### member
#### アクセス演算子
`private`

#### データ型
`Member`

#### 機能
出席確認を行う対象の `Member` インスタンス。

---

## メソッド
### constructor( id )
#### 機能
メンバーIDを指定して、新しい `verifyAttendance` インスタンスを作成します。

#### パラメータ
- `id` :`string`

  出席確認を行うメンバーのID。

#### 戻り値
無し

---

### start
#### アクセス修飾子
`public`
#### 機能
認証コードが正しいか確認し、正しい場合はメンバーの出席を記録します。出席確認の結果に応じたメッセージを返します。

#### パラメータ
無し

#### 戻り値
無し