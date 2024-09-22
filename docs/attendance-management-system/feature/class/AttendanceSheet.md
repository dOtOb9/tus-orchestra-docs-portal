

このクラスは、`MemberSheet` クラスを拡張し、出席データを管理するためのメソッドを提供します。メンバーの出席情報の編集、出席日付の設定、出席状況の更新などを行います。

### メソッド

- **`editMember(memberRow: Array<string>): void`**
  - **アクセス修飾子**: `public`
  - メンバーの情報を更新します。新しい行を追加し、出席回数、出席率などの計算式を設定します。
  - **パラメータ**:
    - **`memberRow`**: `Array<string>` - 更新するメンバーの情報を含む配列。
  - **オーバーライド**: `MemberSheet` クラスの `editMember` メソッド。

- **`setActivityDate(date: string): number`**
  - **アクセス修飾子**: `public`
  - 指定した日付に対応する列を作成し、その列の位置を返します。
  - **パラメータ**:
    - **`date`**: `string` - 活動日の日付。
  - **戻り値**: `number` - 生成した列の位置。

- **`setAttend(id: string, datePos: number): boolean`**
  - **アクセス修飾子**: `public`
  - メンバーの出席状況を「欠席」から「出席」に変更します。変更が成功した場合は `true` を返します。
  - **パラメータ**:
    - **`id`**: `string` - 出席を設定するメンバーのID。
    - **`datePos`**: `number` - 活動日列の位置。
  - **戻り値**: `boolean` - 出席状況が変更された場合は `true`、そうでない場合は `false`。

- **`setAbsense(dateColNumber: number): void`**
  - **アクセス修飾子**: `public`
  - 指定した列に対して全メンバーの出席状況を「欠席」に設定します。
  - **パラメータ**:
    - **`dateColNumber`**: `number` - 欠席を設定する列の位置。

- **`getMemberAttendanceRateAndBase(id: string): { rate: string, base: string }`**
  - **アクセス修飾子**: `public`
  - 指定したメンバーの出席率と基準出席回数を取得します。
  - **パラメータ**:
    - **`id`**: `string` - 情報を取得するメンバーのID。
  - **戻り値**: `{ rate: string, base: string }` - メンバーの出席率と基準出席回数を含むオブジェクト。