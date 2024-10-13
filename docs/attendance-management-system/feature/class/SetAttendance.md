import FeatureLinks from '/src/components/pageLink/FeatureLinks'

<FeatureLinks component='SetAttendance' type='class' project='attendance-management-system' />

---

## プロパティ

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
