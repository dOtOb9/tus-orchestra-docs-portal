import SourceLink from '/src/components/SourceLink';
import ReferenceLink from '/src/components/ReferenceLink';

<SourceLink href="/docs/attendance-management-system/source/class/verifyAttendance"/>
<ReferenceLink href="/docs/attendance-management-system/reference/class/verifyAttendance"/>

このクラスは、出席確認を行うためのクラスです。メンバーIDと出席コードを使用して、出席の確認を行い、その結果に応じたメッセージを返します。

### プロパティ

- **`member`**: `Member`
  - **説明**: 出席確認を行う対象の `Member` インスタンス。

- **`code`**: `string`
  - **説明**: 出席確認に使用される認証コード。

### コンストラクタ

- **`constructor(code: string, id: string)`**
  - **説明**: 認証コードとメンバーIDを指定して、新しい `verifyAttendance` インスタンスを作成します。
  - **パラメータ**:
    - **`code`**: `string` - 出席確認に使用する認証コード。
    - **`id`**: `string` - 出席確認を行うメンバーのID。

### メソッド

- **`start()`**
  - **アクセス修飾子**: `public`
  - **説明**: 認証コードが正しいか確認し、正しい場合はメンバーの出席を記録します。出席確認の結果に応じたメッセージを返します。
  - **戻り値**: `string`
    - **返り値**:
      - `'入力コードが拒否されました。'` - コードが正しくない場合。
      - `'出席を確認しました。'` - 出席が成功した場合。
      - `'本日は練習日ではないか、既に入力されています。'` - 練習日ではないか、既に出席が記録されている場合。
