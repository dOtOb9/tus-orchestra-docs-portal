import FeatureLinks from '/src/components/pageLink/FeatureLinks'

<FeatureLinks component='Property' type='class' project='attendance-management-system' />

---

## プロパティ
### `property`: `GoogleAppsScript.Properties.Properties`

#### アクセス修飾子
`private` `readonly`

#### 機能
Apps Scriptのスクリプトプロパティ

---

## メソッド

### constructor
:::info
**constructor**は、インスタンス化と同時に実行される特別なメソッドです。
:::

#### 機能　
Apps Script内のスクリプトプロパティに接続する。

#### パラメータ
無し

#### 戻り値
無し

___

### setProperty
#### アクセス演算子
`public`

#### 機能
スクリプトプロパティを設定する。

#### パラメータ
##### `key` :`string`
設定するスクリプト名

##### `value`: `string`
設定するスクリプト値

#### 戻り値
無し

--- 

### getProperty
#### アクセス演算子
`public`

#### 機能
スクリプトプロパティを取得する。

#### パラメータ
##### `key` :`string`
取得するスクリプト名

#### 戻り値
##### `string`
取得したスクリプト値
