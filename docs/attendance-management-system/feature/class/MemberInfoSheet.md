import SourceLink from '/src/components/SourceLink';
import ReferenceLink from '/src/components/ReferenceLink';

<SourceLink href="/docs/attendance-management-system/source/class/MemberInfoSheet"/>
<ReferenceLink href="/docs/attendance-management-system/reference/class/MemberInfoSheet"/>


このクラスは、`MemberSheet` クラスを継承し、メンバーの情報を管理するためのメソッドを提供します。特に連絡先リストの管理や連絡先情報の取得を行います。

### メソッド

- **`addContactList(id: string): void`**
  - **アクセス修飾子**: `public`
  - 指定したメンバーIDの連絡先リストにメンバーを追加します。該当するメンバーの行に「TRUE」を設定します。
  - **パラメータ**:
    - **`id`**: `string` - 連絡先リストに追加するメンバーのID。
  - **戻り値**: なし

- **`getContactListRows(): Array<Array<string>>`**
  - **アクセス修飾子**: `public`
  - 連絡先リストに含まれるメンバーの情報を取得します。連絡先リストに「TRUE」が設定された行をフィルタリングして返します。
  - **戻り値**: `Array<Array<string>>` - 連絡先リストに含まれるメンバーの情報を含む配列の配列。

- **`getMemberIsPracticeContact(id: string): string`**
  - **アクセス修飾子**: `public`
  - 指定したメンバーIDが連絡先リストに含まれているかどうかを確認します。メンバーの連絡先リストのステータスを返します。
  - **パラメータ**:
    - **`id`**: `string` - ステータスを確認するメンバーのID。
  - **戻り値**: `string` - メンバーの連絡先リストのステータス。`"TRUE"` または `"FALSE"` が返されます。