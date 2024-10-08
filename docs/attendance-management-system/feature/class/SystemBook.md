import FeatureLinks from '/src/components/pageLink/FeatureLinks'
import ComponentLinks from '/src/components/pageLink/ComponentLinks'

<FeatureLinks component='SystemBook' type='class' project='attendance-management-system' />

---

### 親クラス
#### Book
<ComponentLinks component='Book' type='class' project='attendance-management-system' />

---

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