import FeatureLinks from '/src/components/pageLink/FeatureLinks'

<FeatureLinks component='AttendRateData' type='interface' project='attendance-management-system' />

---

このインターフェースは、出席率データを管理するためのデータ構造を定義します。出席率と基準値を含むオブジェクトを表します。

### プロパティ

- **`rate`**: `string`
  - **説明**: 出席率を示す値。例えば、パーセンテージや比率などの形式で表現されます。

- **`base`**: `string`
  - **説明**: 出席率の母数を示す値。出席率を計算する際の全ての練習回数を表します。