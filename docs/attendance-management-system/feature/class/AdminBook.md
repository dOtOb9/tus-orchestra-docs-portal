import FeatureLinks from '/src/components/pageLink/FeatureLinks';
import BookDoc from '/docs/attendance-management-system/feature/class/Book.md';

<FeatureLinks component='AdminBook' type='class' project='attendance-management-system' />

---

## プロパティ
無し

## メソッド

### constructor
:::info
**constructor**は、インスタンス化と同時に実行される特別なメソッドです。
:::

#### 機能
`管理用`スプレッドシートを取得し、`book` プロパティを初期化します。

#### パラメータ
無し

#### 戻り値
無し

---

### getScheduleSheet
#### アクセス修飾子
`public`

#### 機能
`練習予定` という名前のシートを取得して返します。

#### 戻り値
`ScheduleSheet`

---

### getMembersInfoSheet
#### アクセス修飾子
`public`

#### 機能
`乗り番` という名前のシートを取得して返します。

#### パラメータ
無し

#### 戻り値
`MembersInfoSheet`

---

### getAttendanceCodeSheet
#### アクセス演算子
`public`

#### 機能
`認証コード` という名前のシートを取得して返します。

#### パラメータ
無し

#### 戻り値
`AttendanceCodeSheet`

---

## 親クラス
### Book

> <BookDoc />
