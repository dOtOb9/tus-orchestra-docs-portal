import FeatureLinks from '/src/components/pageLink/FeatureLinks'

<FeatureLinks component='AttendanceStatus' type='class' project='attendance-management-system' />

---

## プロパティ

### id
#### アクセス演算子
`private` `readonly`

#### データ型
`string`

#### 機能
メンバーのID。出席率情報を取得するために使用されます。

---

### normalAttendRateInfo
#### アクセス演算子
`private`

#### データ型
`AttendRateInfo`

#### 機能
通常練習におけるメンバーの出席率情報。

---

### tuttiAttendRateInfo
#### アクセス演算子
`private`

#### データ型
`AttendRateInfo`

#### 機能
Tutti練習におけるメンバーの出席率情報。

---

## メソッド
### constructor( id )
#### 機能
メンバーのIDを指定して、出席率情報を取得します。
#### パラメータ
- `id` :`string`

  メンバーのID。

---

### getAttendRateStatus( attendanceBook ) 
#### アクセス修飾子
`public`

#### 機能
指定された 出欠表から出席率情報を取得します。
  
#### パラメータ
- `attendanceBook` :`AttendanceBook`

  出席率情報を取得するための `AttendanceBook` インスタンス。

#### 戻り値
- `AttendRateInfo`

  取得した出席率情報。

---

### discordFormat
#### アクセス修飾子
`public`

#### 説明
通常練習およびTutti練習の出席率情報をDiscordフォーマットの文字列として生成します。

#### パラメータ
無し

#### 戻り値
- `string`

  Discordフォーマットの出席状況文字列。