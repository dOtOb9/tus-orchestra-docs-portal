import SourceLink from '/src/components/SourceLink';
import ReferenceLink from '/src/components/ReferenceLink';

<SourceLink href="/docs/attendance-management-system/source/class/Book"/>
<ReferenceLink href="/docs/attendance-management-system/reference/class/Book"/>

このクラスは、Google Sheets のスプレッドシートを操作するためのものです。

### プロパティ

- **`book`**: `GoogleAppsScript.Spreadsheet.Spreadsheet`
  - **アクセス修飾子**: `protected`
  - Google Sheets のスプレッドシートオブジェクトを格納します。

### コンストラクタ

- **`constructor(type: string)`**
  - スプレッドシートを開くために、`type` パラメータに基づいてスプレッドシートの ID を取得し、`book` プロパティを初期化します。
  - **パラメータ**:
    - **`type`**: `string` - スプレッドシートの ID を取得するためのキー。