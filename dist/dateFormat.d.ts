export type SupportedDateFormat = "YYYY-MM-DD" | "YYYY/MM/DD" | "YYYY/MM/DD(ddd)" | "YYYY/MM/DD(曜)" | "YYYY年M月D日" | "YYYY年M月D日(曜)" | "(元号)Y年M月D日" | "(元号)Y年M月D日(曜)" | "(GENGOU)Y.M.D" | "(GENGOU)Y.MM.DD" | "MM/DD" | "MM/DD(ddd)" | "MM/DD(曜)" | "M/D" | "M/D(ddd)" | "M/D(曜)" | "M月D日" | "M月D日(曜)" | "HH:mm:ss.SSS" | "HH:mm:ss" | "HH:mm" | "HH時mm分ss秒" | "HH時mm分" | "H時m分" | "HH時" | "H時" | "ISO8601" | "YYYY-MM-DDTHH:mm:ss.SSSZ" | "YYYY-MM-DD HH:mm:ss" | "YYYY/MM/DD HH:mm:ss" | "YYYY/MM/DD HH:mm" | "YYYY年MM月DD日HH時mm分ss秒" | "YYYY年M月D日H時m分" | "YYYY年M月D日H時" | "(元号)Y年M月D日H時m分" | "(元号)Y年M月D日H時" | "MM/DD HH:mm:ss" | "MM/DD HH:mm" | "MM月DD日HH時mm分ss秒" | "M月D日H時m分" | "M月D日H時" | "(元号)Y年" | "YYYY" | "MM" | "M" | "DD" | "D" | "HH" | "H" | "mm" | "m" | "ss" | "s";
/**
 * 日付を YYYY-MM-DD 形式の文字列に変換します
 * @param date 変換対象の日付
 * @param format YYYY-MM-DD
 * @returns {string} 例: 2024-04-08
 */
export declare function formatDate(date: Date, format: "YYYY-MM-DD"): string;
/**
 * 日付を YYYY/MM/DD 形式の文字列に変換します
 * @param date 変換対象の日付
 * @param format YYYY/MM/DD
 * @returns {string} 例: 2024/04/08
 */
export declare function formatDate(date: Date, format: "YYYY/MM/DD"): string;
/**
 * 日付を YYYY/MM/DD(ddd) 形式の文字列に変換します
 * @param date 変換対象の日付
 * @param format YYYY/MM/DD(ddd)
 * @returns {string} 例: 2024/04/08(Mon)
 */
export declare function formatDate(date: Date, format: "YYYY/MM/DD(ddd)"): string;
/**
 * 日付を YYYY/MM/DD(曜) 形式の文字列に変換します
 * @param date 変換対象の日付
 * @param format YYYY/MM/DD(曜)
 * @returns {string} 例: 2024/04/08(月)
 */
export declare function formatDate(date: Date, format: "YYYY/MM/DD(曜)"): string;
/**
 * 日付を YYYY年M月D日 形式の文字列に変換します
 * @param date 変換対象の日付
 * @param format YYYY年M月D日
 * @returns {string} 例: 2024年4月8日
 */
export declare function formatDate(date: Date, format: "YYYY年M月D日"): string;
/**
 * 日付を YYYY年M月D日(曜) 形式の文字列に変換します
 * @param date 変換対象の日付
 * @param format YYYY年M月D日(曜)
 * @returns {string} 例: 2024年4月8日(月)
 */
export declare function formatDate(date: Date, format: "YYYY年M月D日(曜)"): string;
/**
 * 日付を (元号)Y年M月D日 形式の文字列に変換します
 * @param date 変換対象の日付
 * @param format (元号)Y年M月D日
 * @returns {string} 例: 令和6年4月8日
 */
export declare function formatDate(date: Date, format: "(元号)Y年M月D日"): string;
/**
 * 日付を (元号)Y年M月D日(曜) 形式の文字列に変換します
 * @param date 変換対象の日付
 * @param format (元号)Y年M月D日(曜)
 * @returns {string} 例: 令和6年4月8日(月)
 */
export declare function formatDate(date: Date, format: "(元号)Y年M月D日(曜)"): string;
/**
 * 日付を (GENGOU)Y.M.D 形式の文字列に変換します
 * @param date 変換対象の日付
 * @param format (GENGOU)Y.M.D
 * @returns {string} 例: R6.4.8
 */
export declare function formatDate(date: Date, format: "(GENGOU)Y.M.D"): string;
/**
 * 日付を (GENGOU)Y.MM.DD 形式の文字列に変換します
 * @param date 変換対象の日付
 * @param format (GENGOU)Y.MM.DD
 * @returns {string} 例: R6.04.08
 */
export declare function formatDate(date: Date, format: "(GENGOU)Y.MM.DD"): string;
/**
 * 日付を MM/DD 形式の文字列に変換します
 * @param date 変換対象の日付
 * @param format MM/DD
 * @returns {string} 例: 04/08
 */
export declare function formatDate(date: Date, format: "MM/DD"): string;
/**
 * 日付を MM/DD(ddd) 形式の文字列に変換します
 * @param date 変換対象の日付
 * @param format MM/DD(ddd)
 * @returns {string} 例: 04/08(Mon)
 */
export declare function formatDate(date: Date, format: "MM/DD(ddd)"): string;
/**
 * 日付を MM/DD 形式の文字列に変換します
 * @param date 変換対象の日付
 * @param format MM/DD(曜)
 * @returns {string} 例: 04/08(月)
 */
export declare function formatDate(date: Date, format: "MM/DD(曜)"): string;
/**
 * 日付を M/D 形式の文字列に変換します
 * @param date 変換対象の日付
 * @param format M/D
 * @returns {string} 例: 4/8
 */
export declare function formatDate(date: Date, format: "M/D"): string;
/**
 * 日付を M/D(ddd) 形式の文字列に変換します
 * @param date 変換対象の日付
 * @param format M/D(ddd)
 * @returns {string} 例: 04/08(Mon)
 */
export declare function formatDate(date: Date, format: "M/D(ddd)"): string;
/**
 * 日付を M/D 形式の文字列に変換します
 * @param date 変換対象の日付
 * @param format M/D(曜)
 * @returns {string} 例: 4/8(月)
 */
export declare function formatDate(date: Date, format: "M/D(曜)"): string;
/**
 * 日付を M月D日 形式の文字列に変換します
 * @param date 変換対象の日付
 * @param format M月D日
 * @returns {string} 例: 4月8日
 */
export declare function formatDate(date: Date, format: "M月D日"): string;
/**
 * 日付を M月D日 形式の文字列に変換します
 * @param date 変換対象の日付
 * @param format M月D日(曜)
 * @returns {string} 例: 4月8日(月)
 */
export declare function formatDate(date: Date, format: "M月D日(曜)"): string;
/**
 * 時刻を HH:mm:ss.SSS 形式の文字列に変換します
 * @param date 変換対象の日時
 * @param format HH:mm:ss.SSS
 * @returns {string} 例: 09:05:45.123
 */
export declare function formatDate(date: Date, format: "HH:mm:ss.SSS"): string;
/**
 * 時刻を HH:mm:ss 形式の文字列に変換します
 * @param date 変換対象の日時
 * @param format HH:mm:ss
 * @returns {string} 例: 09:05:45
 */
export declare function formatDate(date: Date, format: "HH:mm:ss"): string;
/**
 * 時刻を HH:mm 形式の文字列に変換します
 * @param date 変換対象の日時
 * @param format HH:mm
 * @returns {string} 例: 09:05
 */
export declare function formatDate(date: Date, format: "HH:mm"): string;
/**
 * 時刻を HH時mm分ss秒 形式の文字列に変換します
 * @param date 変換対象の日時
 * @param format HH時mm分ss秒
 * @returns {string} 例: 09時05分05秒
 */
export declare function formatDate(date: Date, format: "HH時mm分ss秒"): string;
/**
 * 時刻を HH時mm分 形式の文字列に変換します
 * @param date 変換対象の日時
 * @param format HH時mm分
 * @returns {string} 例: 09時05分
 */
export declare function formatDate(date: Date, format: "HH時mm分"): string;
/**
 * 時刻を H時m分 形式の文字列に変換します
 * @param date 変換対象の日時
 * @param format H時m分
 * @returns {string} 例: 9時5分
 */
export declare function formatDate(date: Date, format: "H時m分"): string;
/**
 * 時刻を HH時 形式の文字列に変換します
 * @param date 変換対象の日時
 * @param format HH時
 * @returns {string} 例: 09時
 */
export declare function formatDate(date: Date, format: "HH時"): string;
/**
 * 時刻を H時 形式の文字列に変換します
 * @param date 変換対象の日時
 * @param format H時
 * @returns {string} 例: 9時
 */
export declare function formatDate(date: Date, format: "H時"): string;
/**
 * 日時を YYYY-MM-DDTHH:mm:ss.SSSZ 形式の文字列に変換します（ISO 8601）
 * @param date 変換対象の日時
 * @param format ISO8601
 * @returns {string} 例: 2024-04-08T05:30:45.123Z
 */
export declare function formatDate(date: Date, format: "ISO8601"): string;
/**
 * 日時を YYYY-MM-DDTHH:mm:ss.SSSZ 形式の文字列に変換します（ISO 8601）
 * @param date 変換対象の日時
 * @param format YYYY-MM-DDTHH:mm:ss.SSSZ
 * @returns {string} 例: 2024-04-08T05:30:45.123Z
 */
export declare function formatDate(date: Date, format: "YYYY-MM-DDTHH:mm:ss.SSSZ"): string;
/**
 * 日時を YYYY-MM-DD HH:mm:ss 形式の文字列に変換します
 * @param date 変換対象の日時
 * @param format YYYY-MM-DD HH:mm:ss
 * @returns {string} 例: 2024-04-08 09:05:45.123
 */
export declare function formatDate(date: Date, format: "YYYY-MM-DD HH:mm:ss"): string;
/**
 * 日時を YYYY/MM/DD HH:mm:ss 形式の文字列に変換します
 * @param date 変換対象の日時
 * @param format YYYY/MM/DD HH:mm:ss
 * @returns {string} 例: 2024/04/08 09:05:45
 */
export declare function formatDate(date: Date, format: "YYYY/MM/DD HH:mm:ss"): string;
/**
 * 日時を YYYY/MM/DD HH:mm 形式の文字列に変換します
 * @param date 変換対象の日時
 * @param format YYYY/MM/DD HH:mm
 * @returns {string} 例: 2024/04/08 09:05
 */
export declare function formatDate(date: Date, format: "YYYY/MM/DD HH:mm"): string;
/**
 * 日時を YYYY年MM月DD日HH時mm分ss秒 形式の文字列に変換します
 * @param date 変換対象の日時
 * @param format YYYY年MM月DD日HH時mm分ss秒
 * @returns {string} 例: 2024年04月08日09時09分08秒
 */
export declare function formatDate(date: Date, format: "YYYY年MM月DD日HH時mm分ss秒"): string;
/**
 * 日時を YYYY年M月D日H時m分 形式の文字列に変換します
 * @param date 変換対象の日時
 * @param format YYYY年M月D日H時m分
 * @returns {string} 例: 2024年4月8日14時30分
 */
export declare function formatDate(date: Date, format: "YYYY年M月D日H時m分"): string;
/**
 * 日時を YYYY年M月D日H時 形式の文字列に変換します
 * @param date 変換対象の日時
 * @param format YYYY年M月D日H時
 * @returns {string} 例: 2024年4月8日14時
 */
export declare function formatDate(date: Date, format: "YYYY年M月D日H時"): string;
/**
 * 日時を YYYY年M月D日HH時mm分ss秒 形式の文字列に変換します
 * @param date 変換対象の日時
 * @param format YYYY年M月D日HH時mm分ss秒
 * @returns {string} 例: 2024年4月8日09時05分05秒
 */
export declare function formatDate(date: Date, format: "YYYY年MM月DD日HH時mm分ss秒"): string;
/**
 * 日時を YYYY年M月D日H時m分 形式の文字列に変換します
 * @param date 変換対象の日時
 * @param format YYYY年M月D日H時m分
 * @returns {string} 例: 2024年4月8日9時5分
 */
export declare function formatDate(date: Date, format: "YYYY年M月D日H時m分"): string;
/**
 * 日時を YYYY年M月D日H時 形式の文字列に変換します
 * @param date 変換対象の日時
 * @param format YYYY年M月D日H時
 * @returns {string} 例: 2024年4月8日9時
 */
export declare function formatDate(date: Date, format: "YYYY年M月D日H時"): string;
/**
 * 日時を (元号)Y年M月D日H時m分 形式の文字列に変換します
 * @param date 変換対象の日時
 * @param format (元号)Y年M月D日H時m分
 * @returns {string} 例: 令和6年4月8日9時30分
 */
export declare function formatDate(date: Date, format: "(元号)Y年M月D日H時m分"): string;
/**
 * 日時を (元号)Y年M月D日H時 形式の文字列に変換します
 * @param date 変換対象の日時
 * @param format (元号)Y年M月D日H時
 * @returns {string} 例: 令和6年4月8日9時
 */
export declare function formatDate(date: Date, format: "(元号)Y年M月D日H時"): string;
/**
 * 日時を MM/DD HH:mm:ss 形式の文字列に変換します
 * @param date 変換対象の日時
 * @param format MM/DD HH:mm:ss
 * @returns {string} 例: 04/08 09:05:45
 */
export declare function formatDate(date: Date, format: "MM/DD HH:mm:ss"): string;
/**
 * 日時を MM/DD HH:mm 形式の文字列に変換します
 * @param date 変換対象の日時
 * @param format MM/DD HH:mm
 * @returns {string} 例: 04/08 09:05
 */
export declare function formatDate(date: Date, format: "MM/DD HH:mm"): string;
/**
 * 日時を M月D日HH時mm分ss秒 形式の文字列に変換します
 * @param date 変換対象の日時
 * @param format M月D日HH時mm分ss秒
 * @returns {string} 例: 4月8日09時05分05秒
 */
export declare function formatDate(date: Date, format: "MM月DD日HH時mm分ss秒"): string;
/**
 * 日時を M月D日H時m分 形式の文字列に変換します
 * @param date 変換対象の日時
 * @param format M月D日H時m分
 * @returns {string} 例: 4月8日9時5分
 */
export declare function formatDate(date: Date, format: "M月D日H時m分"): string;
/**
 * 日時を M月D日H時 形式の文字列に変換します
 * @param date 変換対象の日時
 * @param format M月D日H時
 * @returns {string} 例: 4月8日9時
 */
export declare function formatDate(date: Date, format: "M月D日H時"): string;
/**
 * 日時から特定の要素を抽出します
 * @param date 変換対象の日時
 * @param format
 * - 'YYYY': 年（4桁）
 * - 'MM': 月（2桁）
 * - 'M': 月
 * - 'DD': 日（2桁）
 * - 'D': 日
 * - 'HH': 時（2桁）
 * - 'H': 時
 * - 'mm': 分（2桁）
 * - 'm': 分
 * - 'ss': 秒（2桁）
 * - 's': 秒
 * @returns {string} 指定された要素の文字列
 */
export declare function formatDate(date: Date, format: "(元号)Y年" | "YYYY" | "MM" | "M" | "DD" | "D" | "HH" | "H" | "mm" | "m" | "ss" | "s"): string;
//# sourceMappingURL=dateFormat.d.ts.map