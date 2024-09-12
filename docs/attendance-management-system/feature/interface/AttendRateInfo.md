import SourceLink from '/src/components/SourceLink';
import ReferenceLink from '/src/components/ReferenceLink';

<SourceLink href="/docs/attendance-management-system/source/interface/AttendRateInfo"/>
<ReferenceLink href="/docs/attendance-management-system/reference/interface/AttendRateInfo"/>

このインターフェースは、出席率情報を管理するためのデータ構造を定義します。各練習セッションの出席率データを含むオブジェクトを表します。

### プロパティ

- **`overture`**: `AttendRateData`
  - **説明**: 前曲の練習セッションに関する出席率データ。
  
- **`middle`**: `AttendRateData`
  - **説明**: 中曲の練習セッションに関する出席率データ。
  
- **`main`**: `AttendRateData`
  - **説明**: メイン曲の練習セッションに関する出席率データ。