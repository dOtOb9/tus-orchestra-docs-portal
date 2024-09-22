import FeatureLinks from '/src/components/pageLink/FeatureLinks';

<FeatureLinks href="/docs/attendance-management-system/reference/class/AdminEventSheet"/>

このクラスは、`Sheet` クラスを拡張し、管理用の出欠表を操作するためのメソッドを提供します。出欠データの集計や設定日付の取得などを行います。

### メソッド

- **`getSettingDate(): string`**
  - **アクセス修飾子**: `public`
  - 設定された日付を取得します。この日付は、データシートの特定のセルから取得されます。
  - **戻り値**: `string` - 設定された日付。

- **`setAttendaneSummarize(dateColNumber: number): void`**
  - **アクセス修飾子**: `public`
  - 出欠データの集計結果を管理シートに設定します。指定された列に対して、出席、委任状、早退、欠席の数を集計し、その結果をシートに表示します。
  - **パラメータ**:
    - **`dateColNumber`**: `number` - 出欠データがある列の位置。
  - **戻り値**: なし