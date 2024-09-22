

このクラスは、メンバーの出席率を管理し、通常練習およびTutti練習の出席率情報を提供します。また、Discordフォーマットでの出席状況の文字列を生成します。

### プロパティ

- **`id`**: `string`
  - **説明**: メンバーのID。出席率情報を取得するために使用されます。

- **`normalAttendRateInfo`**: `AttendRateInfo`
  - **説明**: 通常練習におけるメンバーの出席率情報。

- **`tuttiAttendRateInfo`**: `AttendRateInfo`
  - **説明**: Tutti練習におけるメンバーの出席率情報。

### コンストラクタ

- **`constructor(id: string)`**
  - **説明**: メンバーのIDを指定して、出席率情報を取得します。
  - **パラメータ**:
    - **`id`**: `string` - メンバーのID。

### メソッド

- **`getAttendRateStatus(attendanceBook: AttendanceBook): AttendRateInfo`**
  - **アクセス修飾子**: `public`
  - **説明**: 指定された `AttendanceBook` から出席率情報を取得します。
  - **パラメータ**:
    - **`attendanceBook`**: `AttendanceBook` - 出席率情報を取得するための `AttendanceBook` インスタンス。
  - **戻り値**: `AttendRateInfo` - 取得した出席率情報。

- **`discordFormat(): string`**
  - **アクセス修飾子**: `public`
  - **説明**: 通常練習およびTutti練習の出席率情報をDiscordフォーマットの文字列として生成します。
  - **戻り値**: `string` - Discordフォーマットの出席状況文字列。