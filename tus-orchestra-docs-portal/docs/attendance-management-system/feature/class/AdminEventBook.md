import SourceLink from '/src/components/SourceLink';
import ReferenceLink from '/src/components/ReferenceLink';

<SourceLink href="/docs/attendance-management-system/source/class/AdminEventBook"/>
<ReferenceLink href="/docs/attendance-management-system/reference/class/AdminEventBook"/>

このクラスは、`Book` クラスを拡張し、特定のスプレッドシートシートにアクセスし、イベント情報を管理するためのメソッドを提供します。

### プロパティ

- **`adminEventSheet`**: `AdminEventSheet`
  - **アクセス修飾子**: `readonly`
  - `"管理用"` という名前のシートをラップした `AdminEventSheet` クラスのインスタンス。

- **`eventAttendanceSheet`**: `EventAttendanceSheet`
  - **アクセス修飾子**: `readonly`
  - `"出欠表"` という名前のシートをラップした `EventAttendanceSheet` クラスのインスタンス。

### コンストラクタ

- **`constructor()`**
  - `Book` クラスのコンストラクタを呼び出し、`"adminEventBookID"` というIDでスプレッドシートを初期化します。
  - `"管理用"` という名前のシートを `AdminEventSheet` オブジェクトにラップして `adminEventSheet` プロパティに設定します。
  - `"出欠表"` という名前のシートを `EventAttendanceSheet` オブジェクトにラップして `eventAttendanceSheet` プロパティに設定します。

### メソッド

- **`setEventInfo()`**
  - **アクセス修飾子**: `public`
  - `adminEventSheet` から設定日を取得し、その日付に対応するイベントの日付列番号を `eventAttendanceSheet` から取得します。
  - 取得した列番号を使って、`adminEventSheet` にイベントの出席まとめを設定します。