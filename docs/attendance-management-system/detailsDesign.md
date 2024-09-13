import SourceLink from '/src/components/SourceLink';
import ReferenceLink from '/src/components/ReferenceLink';
import FeatureLink from '/src/components/FeatureLink';

# 詳細設計

## 概要
**動作環境**

本システムは、Google Apps Script上で動作し、Webアプリとしてデプロイされる。ソースコードは[**TypeScript**](https://www.typescriptlang.org/ja/)によって記述され、[**clasp**](https://github.com/google/clasp)によってGoogle Apps Scriptに更新される。使用されるスプレッドシートの所有者と記述されるApps Scriptの所有者は同一のアカウントによって管理される。

**開発環境**
|項目          |内容        |
|--------------|------------|
|開発言語      |TypeScript  |
|リポジトリ管理|GitHubフロー|

## ディレクトリ構造

```bash
src/
 ├── views/
 │   ├── dashboard-css.html
 │   ├── dashboard.html
 │   ├── setting-meeting-form-css.html
 │   └── setting-meeting-form.html
 └── main.ts
```

- views ... ユーザーに表示するHTML, CSSファイルをまとめたディレクトリ。
- main.ts ... スプレッドシートに関する操作を行うためのファイル。GoogleAppsScriptに変換される。

## クラス
**主要な考え方**

シートごとに役割を設定し、それらをクラスにラップする。例えば、通常練習のスプレッドシートに関するクラス( Normal Attendance Book ) は、通常練習の出欠に関するデータの管理に関する機能をラップし、また前曲、中曲、メイン曲それぞれの出欠表シートの管理に関するクラス( Attendance Sheet ) を所有する。それぞれのクラスは、設定された関数の実行によって動作される。システムの動作に関しては、それぞれの[関数](#関数)の処理を追っていくと理解しやすいはず。

### スプレッドシートに関するクラス

#### Book
管理するスプレッドシートの全てに必要な機能をラップします。即ち、後の`~Book`という命名のクラスはすべてこのクラスを継承しています。
<SourceLink href="/docs/attendance-management-system/source/class/Book"/>
<FeatureLink href="/docs/attendance-management-system/feature/class/Book"/>
<ReferenceLink href="/docs/attendance-management-system/reference/class/Book"/>

---

#### SystemBook
`Book`クラスを継承し、`管理者用`スプレッドシートの操作に関する機能をラップしています。
<SourceLink href="/docs/attendance-management-system/source/class/SystemBook"/>
<FeatureLink href="/docs/attendance-management-system/feature/class/SystemBook"/>
<ReferenceLink href="/docs/attendance-management-system/reference/class/SystemBook"/>

---

#### AdminActivityBook
`Book`クラスを継承し、`練習予定の管理`スプレッドシートの操作に関する機能をラップしています。
<SourceLink href="/docs/attendance-management-system/source/class/AdminActivityBook"/>
<FeatureLink href="/docs/attendance-management-system/feature/class/AdminActivityBook"/>
<ReferenceLink href="/docs/attendance-management-system/reference/class/AdminActivityBook"/>

---

#### AdminEventBook
`Book`クラスを継承し、`団会用出欠管理`スプレッドシートの操作に関する機能をラップしています。
<SourceLink href="/docs/attendance-management-system/source/class/AdminEventBook"/>
<FeatureLink href="/docs/attendance-management-system/feature/class/AdminEventBook"/>
<ReferenceLink href="/docs/attendance-management-system/reference/class/AdminEventBook"/>

---

#### AttendanceBook
`Book`クラスを継承し、出欠表シートに関するスプレッドシートの操作に必要な機能をラップしています。即ち、後の`~AttendanceBook`という命名のクラスはすべてこのクラスを継承しています。
<SourceLink href="/docs/attendance-management-system/source/class/AttendanceBook"/>
<FeatureLink href="/docs/attendance-management-system/feature/class/AttendanceBook"/>
<ReferenceLink href="/docs/attendance-management-system/reference/class/AttendanceBook"/>

---

#### NormalAttendanceBook
`AttendanceBook`クラスを継承し、`通常練習出欠表`スプレッドシートの操作に関する機能をラップしています。
<SourceLink href="/docs/attendance-management-system/source/class/NormalAttendanceBook"/>
<FeatureLink href="/docs/attendance-management-system/feature/class/NormalAttendanceBook"/>
<ReferenceLink href="/docs/attendance-management-system/reference/class/NormalAttendanceBook"/>

---

#### TuttiAttendanceBook
`AttendanceBook`クラスを継承し、`Tutti練習出欠表`スプレッドシートの操作に関する機能をラップしています。
<SourceLink href="/docs/attendance-management-system/source/class/TuttiAttendanceBook"/>
<FeatureLink href="/docs/attendance-management-system/feature/class/TuttiAttendanceBook"/>
<ReferenceLink href="/docs/attendance-management-system/reference/class/TuttiAttendanceBook"/>

---

### シートに関するクラス

#### Sheet
管理するシートの全てに必要な機能をラップします。即ち、後の`~Sheet`という命名のクラスはすべてこのクラスを継承しています。
<SourceLink href="/docs/attendance-management-system/source/class/Sheet"/>
<FeatureLink href="/docs/attendance-management-system/feature/class/Sheet"/>
<ReferenceLink href="/docs/attendance-management-system/reference/class/Sheet"/>

---

#### MemberSheet
`Sheet`クラスを継承し、団員毎の情報を管理するシートに必要な機能をラップします。
<SourceLink href="/docs/attendance-management-system/source/class/MemberSheet"/>
<FeatureLink href="/docs/attendance-management-system/feature/class/MemberSheet"/>
<ReferenceLink href="/docs/attendance-management-system/reference/class/MemberSheet"/>

---

#### AttendanceCodeSheet
`Sheet`クラスを継承し、`管理者用`スプレッドシート内の`認証コード`シートの操作に関する機能をラップします。
<SourceLink href="/docs/attendance-management-system/source/class/AttendanceCodeSheet"/>
<FeatureLink href="/docs/attendance-management-system/feature/class/AttendanceCodeSheet"/>
<ReferenceLink href="/docs/attendance-management-system/reference/class/AttendanceCodeSheet"/>

---

#### UserInfoSheet
`Sheet`クラスを継承し、`管理者用`スプレッドシート内の`ユーザー設定`シートの操作に関する機能をラップします。
<SourceLink href="/docs/attendance-management-system/source/class/UserInfoSheet"/>
<FeatureLink href="/docs/attendance-management-system/feature/class/UserInfoSheet"/>
<ReferenceLink href="/docs/attendance-management-system/reference/class/UserInfoSheet"/>

---

#### ScheduleSheet
`Sheet`クラスを継承し、`練習予定の管理`スプレッドシート内の`練習予定`シートの操作に関する機能をラップします。
<SourceLink href="/docs/attendance-management-system/source/class/ScheduleSheet"/>
<FeatureLink href="/docs/attendance-management-system/feature/class/ScheduleSheet"/>
<ReferenceLink href="/docs/attendance-management-system/reference/class/ScheduleSheet"/>

---

#### AttendanceSheet
`MemberSheet`クラスを継承し、出欠表シートの操作に関する機能をラップします。
<SourceLink href="/docs/attendance-management-system/source/class/AttendanceSheet"/>
<FeatureLink href="/docs/attendance-management-system/feature/class/AttendanceSheet"/>
<ReferenceLink href="/docs/attendance-management-system/reference/class/AttendanceSheet"/>

---

#### AdminEventSheet
`Sheet`クラスを継承し、`団会用出欠管理`スプレッドシート内の`管理用`シートの操作に関する機能をラップします。
<SourceLink href="/docs/attendance-management-system/source/class/AdminEventSheet"/>
<FeatureLink href="/docs/attendance-management-system/feature/class/AdminEventSheet"/>
<ReferenceLink href="/docs/attendance-management-system/reference/class/AdminEventSheet"/>

---

#### EventAttendanceSheet
`AttendanceSheet`クラスを継承し、`団会用出欠管理`スプレッドシート内の`出欠表`シートの操作に関する機能をラップします。
<SourceLink href="/docs/attendance-management-system/source/class/EventAttendanceSheet"/>
<FeatureLink href="/docs/attendance-management-system/feature/class/EventAttendanceSheet"/>
<ReferenceLink href="/docs/attendance-management-system/reference/class/EventAttendanceSheet"/>

---

#### MemberInfoSheet
`MemberSheet`クラスを継承し、`練習予定の管理`スプレッドシート内の`乗り番`シートの操作に関する機能をラップします。
<SourceLink href="/docs/attendance-management-system/source/class/MemberInfoSheet"/>
<FeatureLink href="/docs/attendance-management-system/feature/class/MemberInfoSheet"/>
<ReferenceLink href="/docs/attendance-management-system/reference/class/MemberInfoSheet"/>

---

#### AttendanceStatus
メンバー個人の出欠情報をラップします。
<SourceLink href="/docs/attendance-management-system/source/class/AttendanceStatus"/>
<FeatureLink href="/docs/attendance-management-system/feature/class/AttendanceStatus"/>
<ReferenceLink href="/docs/attendance-management-system/reference/class/AttendanceStatus"/>

---

### その他のクラス

#### Member
団員情報に関する機能をラップします。
<SourceLink href="/docs/attendance-management-system/source/class/Member"/>
<FeatureLink href="/docs/attendance-management-system/feature/class/Member"/>
<ReferenceLink href="/docs/attendance-management-system/reference/class/Member"/>

---

#### verifyAttendance
出席認証コードに関する機能をラップします。
<SourceLink href="/docs/attendance-management-system/source/class/verifyAttendance"/>
<FeatureLink href="/docs/attendance-management-system/feature/class/verifyAttendance"/>
<ReferenceLink href="/docs/attendance-management-system/reference/class/verifyAttendance"/>


## 関数

### HTTPリクエストに関する関数

#### doPost
本システムに対するHTTP POSTリクエストに対応する関数。
<SourceLink href="/docs/attendance-management-system/source/function/doPost"/>
<FeatureLink href="/docs/attendance-management-system/feature/function/doPost"/>
<ReferenceLink href="/docs/attendance-management-system/reference/function/doPost"/>

---

#### doGet
本システムに対するHTTP POSTリクエストに対応する関数。
<SourceLink href="/docs/attendance-management-system/source/function/doGet"/>
<FeatureLink href="/docs/attendance-management-system/feature/function/doGet"/>
<ReferenceLink href="/docs/attendance-management-system/reference/function/doGet"/>

### その他の関数

#### regular
定期実行される関数。
<SourceLink href="/docs/attendance-management-system/source/function/regular"/>
<FeatureLink href="/docs/attendance-management-system/feature/function/regular"/>
<ReferenceLink href="/docs/attendance-management-system/reference/function/regular"/>

---

#### setEventInfo
団会情報を設定します。
<SourceLink href="/docs/attendance-management-system/source/function/setEventInfo"/>
<FeatureLink href="/docs/attendance-management-system/feature/function/setEventInfo"/>
<ReferenceLink href="/docs/attendance-management-system/reference/function/setEventInfo"/>

---

#### startEventFlow
団会開催フローを開始します。
<SourceLink href="/docs/attendance-management-system/source/function/startEventFlow"/>
<FeatureLink href="/docs/attendance-management-system/feature/function/startEventFlow"/>
<ReferenceLink href="/docs/attendance-management-system/reference/function/startEventFlow"/>

## インターフェース

#### AttendRateInfo
各曲の出欠状況に関する情報をラップします。
<SourceLink href="/docs/attendance-management-system/source/interface/AttendRateinfo"/>
<FeatureLink href="/docs/attendance-management-system/feature/interface/AttendRateinfo"/>
<ReferenceLink href="/docs/attendance-management-system/reference/interface/AttendRateinfo"/>

---

#### AttendRateData
各曲の出席率の情報をラップします。
<SourceLink href="/docs/attendance-management-system/source/interface/AttendRateData"/>
<FeatureLink href="/docs/attendance-management-system/feature/interface/AttendRateData"/>
<ReferenceLink href="/docs/attendance-management-system/reference/interface/AttendRateData"/>