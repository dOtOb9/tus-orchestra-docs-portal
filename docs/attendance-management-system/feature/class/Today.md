import FeatureLinks from '/src/components/pageLink/FeatureLinks'

<FeatureLinks component='Today' type='class' project='attendance-management-system' />

---

## プロパティ

### `date`: `Date`
#### アクセス修飾子 
`public`

#### 機能
現在の日付と時刻を格納する `Date` オブジェクト。

:::info
`Date`オブジェクトは、Apps Scriptの提供する時刻情報です。
:::

---

## メソッド
### constructor
:::info
**constructor**は、インスタンス化と同時に実行される特別なメソッドです。
:::

#### 機能
`date` プロパティを現在の日付と時刻で初期化します。

#### パラメータ
無し

#### 戻り値
無し

---

### toString
#### アクセス修飾子 
`public`

#### 機能
文字列化した日付情報を作成する。

#### パラメータ
無し

#### 戻り値
##### `string`
`YYYY/MM/DD`形式で文字列化した日付。

---

### getTimeArea
#### アクセス修飾子 
`public`


#### 機能
現在の時刻が午前か午後かを判別する。

#### パラメータ
無し

#### 戻り値
##### `string`
`午前` または `午後` のいずれか。