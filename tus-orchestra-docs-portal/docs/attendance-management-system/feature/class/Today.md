import SourceLink from '/src/components/SourceLink';
import ReferenceLink from '/src/components/ReferenceLink';

<SourceLink href="/docs/attendance-management-system/source/class/Today"/>
<ReferenceLink href="/docs/attendance-management-system/reference/class/Today"/>

このクラスは、現在の日付と時刻に関する情報を提供するためのものです。

### プロパティ

- **`date`**: `Date`
  - **アクセス修飾子**: `public`
  - 現在の日付と時刻を格納する `Date` オブジェクト。

### コンストラクタ

- **`constructor()`**
  - `date` プロパティを現在の日付と時刻で初期化します。

### メソッド

- **`toString(): string`**
  - **アクセス修飾子**: `public`
  - 現在の日付を `yyyy/MM/dd` 形式の文字列にフォーマットして返します。
  - **戻り値**: `string` - フォーマットされた日付。

- **`getTimeArea(): string`**
  - **アクセス修飾子**: `public`
  - 現在の時刻が午前か午後かを判別し、対応する文字列 (`'午前'` または `'午後'`) を返します。
  - **戻り値**: `string` - `'午前'` または `'午後'` のいずれか。