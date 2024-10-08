import FeatureLinks from '/src/components/pageLink/FeatureLinks';

<FeatureLinks component='registerAttendance' type='function' project='attendance-management-system' />

---

## 処理の流れ
1. 出席登録を実行する。
   - `setAttendance`クラスのインスタンスを作成し、`start`メソッドで出席を登録する。

---

## パラメータ
### `id` :`string`
出席を登録する団員のDiscordアカウントのID。

---

## 戻り値
無し