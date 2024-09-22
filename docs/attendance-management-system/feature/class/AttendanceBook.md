

このクラスは、`Book` クラスを拡張し、指定されたシートに対して `AttendanceSheet` オブジェクトを生成するためのメソッドを提供します。

### メソッド

- **`getSheet(sheetName: string): AttendanceSheet`**
  - **アクセス修飾子**: `public`
  - 指定されたシート名 (`sheetName`) に基づいてスプレッドシートからシートを取得し、そのシートを `AttendanceSheet` オブジェクトにラップして返します。
  - **パラメータ**:
    - **`sheetName`**: `string` - 取得するシートの名前。
  - **戻り値**: `AttendanceSheet` - 指定されたシートをラップした `AttendanceSheet` クラスのインスタンス。