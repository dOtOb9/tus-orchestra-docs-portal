import SourceLink from '/src/components/SourceLink';
import ReferenceLink from '/src/components/ReferenceLink';

<SourceLink href="/docs/attendance-management-system/source/class/ScheduleSheet"/>
<ReferenceLink href="/docs/attendance-management-system/reference/class/ScheduleSheet"/>

このクラスは、`Sheet` クラスを拡張し、練習スケジュールを管理するためのメソッドを提供します。練習コマの取得、活動日設定、出席管理などが可能です。

### メソッド

- **`getNowTermRow(): Array<Array<string>>`**
  - **アクセス修飾子**: `public`
  - 現在の練習コマの情報を取得します。今日の日付と時間帯（午前または午後）に基づいて、該当する行をフィルタリングします。
  - **戻り値**: `Array<Array<string>>` - 現在の練習コマに該当する行のデータを含む 2 次元配列。

- **`setActivityDate(): void`**
  - **アクセス修飾子**: `public`
  - 列名が空白の行を取得し、通常練習または Tutti 練習に対して活動日を設定します。各練習の曲名に基づいて、対応する出席シートに活動日を設定し、その列の位置を記録します。

- **`beginActivityDate(today: Today): void`**
  - **アクセス修飾子**: `public`
  - 今日の活動日を開始します。今日の日付に基づいて、通常練習または Tutti 練習に対して出席を設定し、システムブックの出席コードシートを更新します。
  - **パラメータ**:
    - **`today`**: `Today` - 今日の日付を表す `Today` オブジェクト。

- **`isActivityDate(today: Today): boolean`**
  - **アクセス修飾子**: `public`
  - 今日が活動日かどうかをチェックします。
  - **パラメータ**:
    - **`today`**: `Today` - 今日の日付を表す `Today` オブジェクト。
  - **戻り値**: `boolean` - 今日が活動日であれば `true`、そうでなければ `false`。

- **`prepareActivityDate(date: string, section: string, tutti: string, slots: Array<string>): void`**
  - **アクセス修飾子**: `public`
  - 指定した日付、セクション、Tutti 練習の有無、およびスロットに基づいて新しい活動日をシートに追加します。
  - **パラメータ**:
    - **`date`**: `string` - 活動日の日付。
    - **`section`**: `string` - 活動のセクション。
    - **`tutti`**: `string` - Tutti 練習の有無。
    - **`slots`**: `Array<string>` - スロット情報の配列。各スロットに対して新しい行が追加されます。