import FeatureLinks from '/src/components/pageLink/FeatureLinks'
import SheetDoc from '/docs/attendance-management-system/feature/class/Sheet.md'

<FeatureLinks component='ScheduleSheet' type='class' project='attendance-management-system' />

---

## プロパティ
無し

---

## メソッド

### getNowTermRow
#### アクセス修飾子
`public`

#### 機能
現在の練習コマの情報を取得します。今日の日付と時間帯（午前または午後）に基づいて、該当する行をフィルタリングします。

#### パラメータ
無し

#### 戻り値
- `Array<Array<string>>`

  現在の練習コマに該当する行のデータを含む 2 次元配列。

---

### setActivityDate
#### アクセス修飾子
`public`

#### 機能
列名が空白の行を取得し、通常練習または Tutti 練習に対して活動日を設定します。各練習の曲名に基づいて、対応する出席シートに活動日を設定し、その列の位置を記録します。

#### パラメータ
無し

#### 戻り値
無し

---

### beginActivityDate ( today, memberInfoSheet )
#### アクセス修飾子
`public`

#### 機能
今日の活動日を開始します。今日の日付に基づいて、通常練習または Tutti 練習に対して欠席または降り番を設定し、システムブックの出席コードシートを更新します。

#### パラメータ
- `today` :`Today`

  今日の日付を表す `Today` オブジェクト。

- `memberInfoSheet` :`MemberInfoSheet`

  `練習予定の管理`ファイル内の`乗り番`シートを表すオブジェクト。

#### 戻り値
無し

---

### isActivityDate ( today )
#### アクセス修飾子
`public`

#### 機能
今日が活動日かどうかをチェックします。

#### パラメータ
- `today` :`Today`

  今日の日付を表す `Today` オブジェクト。

#### 戻り値
- `boolean`

  今日が活動日であれば `true`、そうでなければ `false`。

---

### prepareActivityDate ( date, section, slots )
#### アクセス修飾子
`public`

#### 機能
指定した日付、セクション、Tutti 練習の有無、およびスロットに基づいて新しい活動日をシートに追加します。

#### パラメータ
- `date` :`string`

  活動日の日付。
 
- `section` :`string`

  活動のセクション。

- `slots` :`Array<string>`

  スロット情報の配列。各スロットに対して新しい行が追加されます。

#### 戻り値
無し

--- 

## 親クラス
### Sheet
> <SheetDoc />