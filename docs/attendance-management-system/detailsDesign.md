import SourceLink from '/src/components/SourceLink';
import ReferenceLink from '/src/components/ReferenceLink';
import FeatureLink from '/src/components/FeatureLink';

import TOCInline from '@theme/TOCInline';

# 詳細設計書

## 1. 概要
**動作環境**

本システムは、Google Apps Script上で動作し、Webアプリとしてデプロイされる。ソースコードは[**TypeScript**](https://www.typescriptlang.org/ja/)によって記述され、[**clasp**](https://github.com/google/clasp)によってGoogle Apps Scriptに更新される。使用されるスプレッドシートの所有者と記述されるApps Scriptの所有者は同一のアカウントによって管理される。

**開発環境**
|項目|内容|
|--------------|------------|
|開発言語      |TypeScript  |
|リポジトリ管理|GitHubフロー|

## 2. クラス構造
**主要な考え方**

シートごとに役割を設定し、それらをクラスにラップする。例えば、通常練習のスプレッドシートに関するクラス( Normal Attendance Book ) は、通常練習の出欠に関するデータの管理に関する機能をラップし、また前曲、中曲、メイン曲それぞれの出欠表シートの管理に関するクラス( Attendance Sheet ) を所有する。それぞれのクラスは、設定された関数の実行によって動作される。システムの動作に関しては、それぞれの関数の処理を追っていくと理解しやすいはず。

### スプレッドシートに関するクラス
<TOCInline toc={toc} />

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


## 3. 関数