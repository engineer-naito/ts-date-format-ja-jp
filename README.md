# 概要
ライブラリを使わずに日付フォーマットを行うTypeScriptのコードです。
必要なフォーマットをコピペして使ってください。

詳しくは[TypeScriptにおける日付フォーマットのベストプラクティス](https://zenn.dev/voiceapplab/articles/10dfe2c892614f) の記事をご覧ください。

# 使い方

```typescript
import { formatDate } from './dateUtil';

console.log(formatDate(new Date(2024, 1, 2, 3, 4, 5, 123), 'YYYY-MM-DD')); // 2024-02-02
console.log(formatDate(new Date(2024, 1, 2, 3, 4, 5, 123), 'YYYY/MM/DD')); // 2024/02/02
console.log(formatDate(new Date(2024, 1, 2, 3, 4, 5, 123), 'YYYY/MM/DD(ddd)')); // 2024/02/02(Fri)
console.log(formatDate(new Date(2024, 1, 2, 3, 4, 5, 123), 'YYYY/MM/DD(曜)')); // 2024/02/02(金)
console.log(formatDate(new Date(2024, 1, 2, 3, 4, 5, 123), 'YYYY年M月D日')); // 2024年2月2日
console.log(formatDate(new Date(2024, 1, 2, 3, 4, 5, 123), 'YYYY年M月D日(曜)')); // 2024年2月2日(金)
console.log(formatDate(new Date(2024, 1, 2, 3, 4, 5, 123), '(元号)Y年M月D日')); // 令和6年2月2日
console.log(formatDate(new Date(2024, 1, 2, 3, 4, 5, 123), '(元号)Y年M月D日(曜)')); // 令和6年2月2日(金)
console.log(formatDate(new Date(2024, 1, 2, 3, 4, 5, 123), '(GENGOU)Y.M.D')); // R6.2.2
console.log(formatDate(new Date(2024, 1, 2, 3, 4, 5, 123), '(GENGOU)Y.MM.DD')); // R6.02.02
console.log(formatDate(new Date(2024, 1, 2, 3, 4, 5, 123), 'MM/DD')); // 02/02
console.log(formatDate(new Date(2024, 1, 2, 3, 4, 5, 123), 'MM/DD(ddd)')); // 02/02(Sat)
console.log(formatDate(new Date(2024, 1, 2, 3, 4, 5, 123), 'MM/DD(曜)')); // 02/02(金)
console.log(formatDate(new Date(2024, 1, 2, 3, 4, 5, 123), 'M/D')); // 2/2
console.log(formatDate(new Date(2024, 1, 2, 3, 4, 5, 123), 'M/D(ddd)')); // 2/2(Sat)
console.log(formatDate(new Date(2024, 1, 2, 3, 4, 5, 123), 'M/D(曜)')); // 2/2(金)
console.log(formatDate(new Date(2024, 1, 2, 3, 4, 5, 123), 'M月D日')); // 2月2日
console.log(formatDate(new Date(2024, 1, 2, 3, 4, 5, 123), 'M月D日(曜)')); // 2月2日(金)
console.log(formatDate(new Date(2024, 1, 2, 3, 4, 5, 123), 'HH:mm:ss.SSS')); // 03:04:05.123
console.log(formatDate(new Date(2024, 1, 2, 3, 4, 5, 123), 'HH:mm:ss')); // 03:04:05
console.log(formatDate(new Date(2024, 1, 2, 3, 4, 5, 123), 'HH:mm')); // 03:04
console.log(formatDate(new Date(2024, 1, 2, 3, 4, 5, 123), 'HH時mm分ss秒')); // 03時04分05秒
console.log(formatDate(new Date(2024, 1, 2, 3, 4, 5, 123), 'HH時mm分')); // 03時04分
console.log(formatDate(new Date(2024, 1, 2, 3, 4, 5, 123), 'H時m分')); // 3時4分
console.log(formatDate(new Date(2024, 1, 2, 3, 4, 5, 123), 'HH時')); // 03時
console.log(formatDate(new Date(2024, 1, 2, 3, 4, 5, 123), 'H時')); // 3時
console.log(formatDate(new Date(2024, 1, 2, 3, 4, 5, 123), 'ISO8601')); // 2024-02-01T18:04:05.123Z
console.log(formatDate(new Date(2024, 1, 2, 3, 4, 5, 123), 'YYYY-MM-DDTHH:mm:ss.SSSZ')); // 2024-02-01T18:04:05.123Z
console.log(formatDate(new Date(2024, 1, 2, 3, 4, 5, 123), 'YYYY-MM-DD HH:mm:ss')); // 2024-02-02 03:04:05
console.log(formatDate(new Date(2024, 1, 2, 3, 4, 5, 123), 'YYYY/MM/DD HH:mm:ss')); // 2024/02/02 03:04:05
console.log(formatDate(new Date(2024, 1, 2, 3, 4, 5, 123), 'YYYY/MM/DD HH:mm')); // 2024/02/02 03:04
console.log(formatDate(new Date(2024, 1, 2, 3, 4, 5, 123), 'YYYY年MM月DD日HH時mm分ss秒')); // 2024年02月02日03時04分05秒
console.log(formatDate(new Date(2024, 1, 2, 3, 4, 5, 123), 'YYYY年M月D日H時m分')); // 2024年2月2日3時4分
console.log(formatDate(new Date(2024, 1, 2, 3, 4, 5, 123), 'YYYY年M月D日H時')); // 2024年2月2日3時
console.log(formatDate(new Date(2024, 1, 2, 3, 4, 5, 123), '(元号)Y年M月D日H時m分')); // 令和6年2月2日3時4分
console.log(formatDate(new Date(2024, 1, 2, 3, 4, 5, 123), '(元号)Y年M月D日H時')); // 令和6年2月2日3時
console.log(formatDate(new Date(2024, 1, 2, 3, 4, 5, 123), 'MM/DD HH:mm:ss')); // 02/02 03:04:05
console.log(formatDate(new Date(2024, 1, 2, 3, 4, 5, 123), 'MM/DD HH:mm')); // 02/02 03:04
console.log(formatDate(new Date(2024, 1, 2, 3, 4, 5, 123), 'MM月DD日HH時mm分ss秒')); // 02月02日03時04分05秒
console.log(formatDate(new Date(2024, 1, 2, 3, 4, 5, 123), 'M月D日H時m分')); // 2月2日3時4分
console.log(formatDate(new Date(2024, 1, 2, 3, 4, 5, 123), 'M月D日H時')); // 2月2日3時
console.log(formatDate(new Date(2024, 1, 2, 3, 4, 5, 123), 'YYYY')); // 2024
console.log(formatDate(new Date(2024, 1, 2, 3, 4, 5, 123), 'MM')); // 02
console.log(formatDate(new Date(2024, 1, 2, 3, 4, 5, 123), 'M')); // 2
console.log(formatDate(new Date(2024, 1, 2, 3, 4, 5, 123), 'DD')); // 02
console.log(formatDate(new Date(2024, 1, 2, 3, 4, 5, 123), 'D')); // 2
console.log(formatDate(new Date(2024, 1, 2, 3, 4, 5, 123), 'HH')); // 03
console.log(formatDate(new Date(2024, 1, 2, 3, 4, 5, 123), 'H')); // 3
console.log(formatDate(new Date(2024, 1, 2, 3, 4, 5, 123), 'mm')); // 04
console.log(formatDate(new Date(2024, 1, 2, 3, 4, 5, 123), 'm')); // 4
console.log(formatDate(new Date(2024, 1, 2, 3, 4, 5, 123), 'ss')); // 05
console.log(formatDate(new Date(2024, 1, 2, 3, 4, 5, 123), 's')); // 5
```
