import SourceLink from '/src/components/SourceLink';
import ReferenceLink from '/src/components/ReferenceLink';

<SourceLink href="/docs/attendance-management-system/source/function/regular"/>
<ReferenceLink href="/docs/attendance-management-system/reference/function/regular"/>


この関数は、スケジュールシートの出欠列を生成し、必要に応じて出欠管理のための処理を行います。主に、練習日の出欠情報を更新し、認証コードを置き換える役割を持っています。


## 処理の流れ

1. **スケジュールシートの取得**
   - `AdminActivityBook` クラスのインスタンスを作成し、`getScheduleSheet` メソッドでスケジュールシートを取得します。

2. **出欠列の生成**
   - `scheduleSheet.setActivityDate()` を呼び出して、出欠列を生成します。

3. **今日の日付の取得**
   - `Today` クラスのインスタンスを作成し、今日の日付を取得します。

4. **練習日でない場合は処理を終了**
   - `scheduleSheet.isActivityDate(today)` メソッドを使って、今日が練習日でない場合は処理を終了します。

5. **午前0時の場合の処理**
   - 今日の時刻が午前0時 (`today.date.getHours() === 0`) である場合、`scheduleSheet.beginActivityDate(today)` を呼び出して、練習日の出欠列を生成します。

6. **認証コードの置き換え**
   - `SystemBook` クラスのインスタンスを作成し、`getAttendanceCodeSheet` メソッドで認証コードシートを取得します。
   - `attendanceCodeSheet.replaceCode()` を呼び出して、認証コードを置き換えます。

## 戻り値

- **なし**
  - **説明**: この関数は特に戻り値を返しません。処理が完了すると、必要な更新や設定が行われます。