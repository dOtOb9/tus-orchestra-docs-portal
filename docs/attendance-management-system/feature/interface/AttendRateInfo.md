import FeatureLinks from '/src/components/pageLink/FeatureLinks'

<FeatureLinks component='AttendRateInfo' type='interface' project='attendance-management-system' />

---

このインターフェースは、出席率情報を管理するためのデータ構造を定義します。各練習セッションの出席率データを含むオブジェクトを表します。

### プロパティ

- **`overture`**: `AttendRateData`
  - **説明**: 前曲の練習セッションに関する出席率データ。
  
- **`middle`**: `AttendRateData`
  - **説明**: 中曲の練習セッションに関する出席率データ。
  
- **`main`**: `AttendRateData`
  - **説明**: メイン曲の練習セッションに関する出席率データ。