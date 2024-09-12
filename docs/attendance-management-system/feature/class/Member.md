import SourceLink from '/src/components/SourceLink';
import ReferenceLink from '/src/components/ReferenceLink';

<SourceLink href="/docs/attendance-management-system/source/class/Member"/>
<ReferenceLink href="/docs/attendance-management-system/reference/class/Member"/>

このクラスは、メンバーの基本情報と出席状況を管理します。また、メンバー情報の編集や連絡先リストへの追加機能を提供します。

### プロパティ

- **`attendanceStatus`**: `AttendanceStatus`
  - **説明**: メンバーの出席率情報を管理する `AttendanceStatus` インスタンス。

- **`id`**: `string`
  - **説明**: メンバーのID。識別子として使用されます。

- **`name`**: `string`
  - **説明**: メンバーの名前。

- **`part`**: `string`
  - **説明**: メンバーのパート（役割）。

- **`grade`**: `string`
  - **説明**: メンバーの学年。

### コンストラクタ

- **`constructor(id: string, name: string = "", part: string = "", grade: string = "")`**
  - **説明**: メンバーのIDを指定して、新しい `Member` インスタンスを作成します。名前、パート、学年はオプションで指定できます。
  - **パラメータ**:
    - **`id`**: `string` - メンバーのID。
    - **`name`**: `string` - メンバーの名前（デフォルトは空文字列）。
    - **`part`**: `string` - メンバーのパート（デフォルトは空文字列）。
    - **`grade`**: `string` - メンバーの学年（デフォルトは空文字列）。

### メソッド

- **`addContactList()`**
  - **アクセス修飾子**: `public`
  - **説明**: メンバーのIDを連絡先リストに追加します。
  - **戻り値**: なし

- **`edit()`**
  - **アクセス修飾子**: `public`
  - **説明**: メンバー情報を編集し、各出席シートにもメンバーの情報を反映させます。
  - **戻り値**: なし