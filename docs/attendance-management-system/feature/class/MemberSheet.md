import SourceLink from '/src/components/SourceLink';
import ReferenceLink from '/src/components/ReferenceLink';

<SourceLink href="/docs/attendance-management-system/source/class/MemberSheet"/>
<ReferenceLink href="/docs/attendance-management-system/reference/class/MemberSheet"/>

このクラスは、`Sheet` クラスを拡張し、メンバー情報を管理するためのメソッドを提供します。メンバーの編集、追加、検索が可能です。

### メソッド

- **`editMember(memberRow: Array<string>): void`**
  - **アクセス修飾子**: `public`
  - メンバー情報を編集します。指定されたメンバーが既存のメンバーとして見つからない場合、新しいメンバーとして追加します。
  - **パラメータ**:
    - **`memberRow`**: `Array<string>` - 編集または追加するメンバーのデータを含む配列。配列のインデックスはメンバーの属性を示します。

- **`addMember(memberRow: Array<string>): void`**
  - **アクセス修飾子**: `private`
  - 新しいメンバーをシートに追加します。`editMember` メソッドから呼び出されます。
  - **パラメータ**:
    - **`memberRow`**: `Array<string>` - 追加するメンバーのデータを含む配列。配列のインデックスはメンバーの属性を示します。

- **`searchMember(id: string): string[] | undefined`**
  - **アクセス修飾子**: `protected`
  - 指定された ID を持つメンバーをシートから検索します。メンバーが見つかればその行を返し、見つからなければ `undefined` を返します。
  - **パラメータ**:
    - **`id`**: `string` - 検索するメンバーの ID。
  - **戻り値**: `string[] | undefined` - メンバーが見つかった場合はその行のデータを含む配列、見つからなければ `undefined`。