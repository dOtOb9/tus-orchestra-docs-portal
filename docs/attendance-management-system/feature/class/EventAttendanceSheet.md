

このクラスは、`AttendancceSheet` クラスを拡張し、イベントの出欠シートを操作するためのメソッドを提供します。特定のイベントの日付に関連する列を取得します。

### メソッド

- **`getEventDate(date: string): number`**
  - **アクセス修飾子**: `public`
  - 指定したイベントの日付に対応する列の位置を取得します。シートのヘッダー行から日付を検索し、その列の位置を返します。
  - **パラメータ**:
    - **`date`**: `string` - 検索する日付。
  - **戻り値**: `number` - 日付に対応する列の位置。日付が見つからない場合は `-1` が返されます。
