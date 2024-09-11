import SourceLink from '/src/components/SourceLink';
import ReferenceLink from '/src/components/ReferenceLink';

<SourceLink href="/docs/attendance-management-system/source/class/SystemBook"/>
<ReferenceLink href="/docs/attendance-management-system/reference/class/SystemBook"/>

このクラスは、`Book` クラスを拡張し、特定のスプレッドシートシートにアクセスするためのメソッドを提供します。

### コンストラクタ

- **`constructor()`**
  - `Book` クラスのコンストラクタを呼び出し、`"systemBookID"` というIDでスプレッドシートを初期化します。

### メソッド

- **`getAttendanceCodeSheet(): AttendanceCodeSheet`**
  - **アクセス修飾子**: `public`
  - `"認証コード"` という名前のシートを取得し、それを `AttendanceCodeSheet` オブジェクトにラップして返します。
  - **戻り値**: `AttendanceCodeSheet` - `AttendanceCodeSheet` クラスのインスタンス。

- **`getUserInfoSheet(): UserInfoSheet`**
  - **アクセス修飾子**: `public`
  - `"ユーザー情報"` という名前のシートを取得し、それを `UserInfoSheet` オブジェクトにラップして返します。
  - **戻り値**: `UserInfoSheet` - `UserInfoSheet` クラスのインスタンス。