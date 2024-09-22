import FeatureLinks from '/src/components/pageLink/FeatureLinks';

<FeatureLinks href="/docs/attendance-management-system/reference/class/AdminActivityBook"/>


このクラスは、`Book` クラスを拡張し、特定のスプレッドシートシートにアクセスするためのメソッドを提供します。

### コンストラクタ

- **`constructor()`**
  - `Book` クラスのコンストラクタを呼び出し、`"adminActivityBookID"` というIDでスプレッドシートを初期化します。

### メソッド

- **`getScheduleSheet(): ScheduleSheet`**
  - **アクセス修飾子**: `public`
  - `"練習予定"` という名前のシートを取得し、それを `ScheduleSheet` オブジェクトにラップして返します。
  - **戻り値**: `ScheduleSheet
  ` - `ScheduleSheet` クラスのインスタンス。

- **`getMembersInfoSheet(): MembersInfoSheet`**
  - **アクセス修飾子**: `public`
  - `"乗り番"` という名前のシートを取得し、それを `MembersInfoSheet` オブジェクトにラップして返します。
  - **戻り値**: `MembersInfoSheet` - `MembersInfoSheet` クラスのインスタンス。