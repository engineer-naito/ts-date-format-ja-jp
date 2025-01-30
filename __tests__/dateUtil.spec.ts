import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { formatDate } from '../src/dateUtil';

describe('formatDate', () => {
  let preTimezone: string | undefined;
  beforeAll(() => {
    preTimezone = process.env.TZ;
    // タイムゾーンを固定
    process.env.TZ = 'Asia/Tokyo';
  });
  afterAll(() => {
    process.env.TZ = preTimezone;
  });
  const testDate = new Date('2024-04-09T00:01:02.123Z'); // 固定されたテスト日付 (4月9日)
  const pm = new Date('2024-04-09T12:00:00.123Z'); // 午後9時
  const heiseiLast = new Date('2019-04-30T14:59:59.999Z'); // 令和元年の1日前 (2019月4月30日)
  const reiwaFirst = new Date('2019-04-30T15:00:00.000Z'); // 令和元年 (2019月5月1日)
  const sekigahara = new Date('1600-10-21T01:00:00.000Z'); // 慶長5年10月21日10時

  it('formats date as YYYY-MM-DD', () => {
    expect(formatDate(testDate, 'YYYY-MM-DD')).toBe('2024-04-09');
  });

  it('formats date as YYYY/MM/DD', () => {
    expect(formatDate(testDate, 'YYYY/MM/DD')).toBe('2024/04/09');
  });

  it('formats date as YYYY/MM/DD(ddd)', () => {
    expect(formatDate(testDate, 'YYYY/MM/DD(ddd)')).toBe('2024/04/09(Tue)');
  });

  it('formats date as YYYY/MM/DD(曜)', () => {
    expect(formatDate(testDate, 'YYYY/MM/DD(曜)')).toBe('2024/04/09(火)');
  });

  it('formats date as YYYY年M月D日', () => {
    expect(formatDate(testDate, 'YYYY年M月D日')).toBe('2024年4月9日');
  });

  it('formats date as YYYY年M月D日(曜)', () => {
    expect(formatDate(testDate, 'YYYY年M月D日(曜)')).toBe('2024年4月9日(火)');
  });

  it('formats date as (元号)Y年M月D日', () => {
    expect(formatDate(testDate, '(元号)Y年M月D日')).toBe('令和6年4月9日');
    expect(formatDate(heiseiLast, '(元号)Y年M月D日')).toBe('平成31年4月30日');
    expect(formatDate(reiwaFirst, '(元号)Y年M月D日')).toBe('令和元年5月1日');
    expect(formatDate(sekigahara, '(元号)Y年M月D日')).toBe('慶長5年10月21日'); // 注) 月日は現行の太陽暦。
  });

  it('formats date as (元号)Y年M月D日(曜)', () => {
    expect(formatDate(testDate, '(元号)Y年M月D日(曜)')).toBe('令和6年4月9日(火)');
  });

  it('formats date as (GENGOU)Y.M.D', () => {
    expect(formatDate(testDate, '(GENGOU)Y.M.D')).toBe('R6.4.9');
    expect(formatDate(heiseiLast, '(GENGOU)Y.M.D')).toBe('H31.4.30');
    expect(formatDate(reiwaFirst, '(GENGOU)Y.M.D')).toBe('R1.5.1');
    expect(formatDate(new Date(1980, 0, 1), '(GENGOU)Y.M.D')).toBe('S55.1.1'); // 昭和55年1月1日
    expect(formatDate(new Date(1920, 0, 1), '(GENGOU)Y.M.D')).toBe('T9.1.1'); // 大正9年1月1日
    expect(formatDate(new Date(1880, 0, 1), '(GENGOU)Y.M.D')).toBe('M13.1.1'); // 明治13年1月1日
    expect(formatDate(new Date(1868, 0, 1), '(GENGOU)Y.M.D')).toBe('慶応4.1.1'); // 慶応4年1月1日
  });

  it('formats date as (GENGOU)Y.MM.DD', () => {
    expect(formatDate(testDate, '(GENGOU)Y.MM.DD')).toBe('R6.04.09');
    expect(formatDate(heiseiLast, '(GENGOU)Y.MM.DD')).toBe('H31.04.30');
    expect(formatDate(reiwaFirst, '(GENGOU)Y.MM.DD')).toBe('R1.05.01');
  });

  it('formats date as MM/DD', () => {
    expect(formatDate(testDate, 'MM/DD')).toBe('04/09');
  });

  it('formats date as MM/DD(ddd)', () => {
    expect(formatDate(testDate, 'MM/DD(ddd)')).toBe('04/09(Tue)');
  });

  it('formats date as MM/DD(曜)', () => {
    expect(formatDate(testDate, 'MM/DD(曜)')).toBe('04/09(火)');
  });

  it('formats date as M/D', () => {
    expect(formatDate(testDate, 'M/D')).toBe('4/9');
  });

  it('formats date as M/D(ddd)', () => {
    expect(formatDate(testDate, 'M/D(ddd)')).toBe('4/9(Tue)');
  });

  it('formats date as M/D(曜)', () => {
    expect(formatDate(testDate, 'M/D(曜)')).toBe('4/9(火)');
  });

  it('formats date as M月D日', () => {
    expect(formatDate(testDate, 'M月D日')).toBe('4月9日');
  });

  it('formats date as M月D日(曜)', () => {
    expect(formatDate(testDate, 'M月D日(曜)')).toBe('4月9日(火)');
  });

  it('formats date as HH:mm:ss.SSS', () => {
    expect(formatDate(testDate, 'HH:mm:ss.SSS')).toBe('09:01:02.123');
    expect(formatDate(pm, 'HH:mm:ss.SSS')).toBe('21:00:00.123');
  });

  it('formats date as HH:mm:ss', () => {
    expect(formatDate(testDate, 'HH:mm:ss')).toBe('09:01:02');
    expect(formatDate(pm, 'HH:mm:ss')).toBe('21:00:00');
  });

  it('formats date as HH:mm', () => {
    expect(formatDate(testDate, 'HH:mm')).toBe('09:01');
    expect(formatDate(pm, 'HH:mm')).toBe('21:00');
  });

  it('formats date as HH時mm分ss秒', () => {
    expect(formatDate(testDate, 'HH時mm分ss秒')).toBe('09時01分02秒');
    expect(formatDate(pm, 'HH時mm分ss秒')).toBe('21時00分00秒');
  });

  it('formats date as HH時mm分', () => {
    expect(formatDate(testDate, 'HH時mm分')).toBe('09時01分');
    expect(formatDate(pm, 'HH時mm分')).toBe('21時00分');
  });

  it('formats date as H時m分', () => {
    expect(formatDate(testDate, 'H時m分')).toBe('9時1分');
    expect(formatDate(pm, 'H時m分')).toBe('21時0分');
  });

  it('formats date as HH時', () => {
    expect(formatDate(testDate, 'HH時')).toBe('09時');
    expect(formatDate(pm, 'HH時')).toBe('21時');
  });

  it('formats date as H時', () => {
    expect(formatDate(testDate, 'H時')).toBe('9時');
    expect(formatDate(pm, 'H時')).toBe('21時');
  });

  it('formats date as ISO8601', () => {
    expect(formatDate(testDate, 'ISO8601')).toBe('2024-04-09T00:01:02.123Z');
  });

  it('formats date as YYYY-MM-DDTHH:mm:ss.SSSZ', () => {
    expect(formatDate(testDate, 'YYYY-MM-DDTHH:mm:ss.SSSZ')).toBe('2024-04-09T00:01:02.123Z');
  });

  it('formats date as YYYY-MM-DD HH:mm:ss', () => {
    expect(formatDate(testDate, 'YYYY-MM-DD HH:mm:ss')).toBe('2024-04-09 09:01:02');
  });

  it('formats date as YYYY/MM/DD HH:mm:ss', () => {
    expect(formatDate(testDate, 'YYYY/MM/DD HH:mm:ss')).toBe('2024/04/09 09:01:02');
  });

  it('formats date as YYYY/MM/DD HH:mm', () => {
    expect(formatDate(testDate, 'YYYY/MM/DD HH:mm')).toBe('2024/04/09 09:01');
  });

  it('formats date as YYYY年MM月DD日HH時mm分ss秒', () => {
    expect(formatDate(testDate, 'YYYY年MM月DD日HH時mm分ss秒')).toBe('2024年04月09日09時01分02秒');
  });

  it('formats date as YYYY年M月D日H時m分', () => {
    expect(formatDate(testDate, 'YYYY年M月D日H時m分')).toBe('2024年4月9日9時1分');
    expect(formatDate(pm, 'YYYY年M月D日H時m分')).toBe('2024年4月9日21時0分');
  });

  it('formats date as YYYY年M月D日H時', () => {
    expect(formatDate(testDate, 'YYYY年M月D日H時')).toBe('2024年4月9日9時');
    expect(formatDate(pm, 'YYYY年M月D日H時')).toBe('2024年4月9日21時');
  });

  it('formats date as (元号)Y年M月D日H時m分', () => {
    expect(formatDate(testDate, '(元号)Y年M月D日H時m分')).toBe('令和6年4月9日9時1分');
    expect(formatDate(heiseiLast, '(元号)Y年M月D日H時m分')).toBe('平成31年4月30日23時59分');
  });

  it('formats date as (元号)Y年M月D日H時', () => {
    expect(formatDate(testDate, '(元号)Y年M月D日H時')).toBe('令和6年4月9日9時');
    expect(formatDate(heiseiLast, '(元号)Y年M月D日H時')).toBe('平成31年4月30日23時');
  });

  it('formats date as MM/DD HH:mm:ss', () => {
    expect(formatDate(testDate, 'MM/DD HH:mm:ss')).toBe('04/09 09:01:02');
  });
  
  it('formats date as MM/DD HH:mm', () => {
    expect(formatDate(testDate, 'MM/DD HH:mm')).toBe('04/09 09:01');
  });

  it('formats date as MM月DD日HH時mm分ss秒', () => {
    expect(formatDate(testDate, 'MM月DD日HH時mm分ss秒')).toBe('04月09日09時01分02秒');
  });

  it('formats date as M月D日H時m分', () => {
    expect(formatDate(testDate, 'M月D日H時m分')).toBe('4月9日9時1分');
    expect(formatDate(pm, 'M月D日H時m分')).toBe('4月9日21時0分');
  });

  it('formats date as M月D日H時', () => {
    expect(formatDate(testDate, 'M月D日H時')).toBe('4月9日9時');
    expect(formatDate(pm, 'M月D日H時')).toBe('4月9日21時');
  });

  it('formats date as YYYY', () => {
    expect(formatDate(testDate, 'YYYY')).toBe('2024');
  });

  it('formats date as MM', () => {
    expect(formatDate(testDate, 'MM')).toBe('04');
  });

  it('formats date as M', () => {
    expect(formatDate(testDate, 'M')).toBe('4');
  });

  it('formats date as DD', () => {
    expect(formatDate(testDate, 'DD')).toBe('09');
  });

  it('formats date as D', () => {
    expect(formatDate(testDate, 'D')).toBe('9');
  });

  it('formats time as HH', () => {
    expect(formatDate(testDate, 'HH')).toBe('09');
  });

  it('formats time as H', () => {
    expect(formatDate(testDate, 'H')).toBe('9');
  });

  it('formats time as mm', () => {
    expect(formatDate(testDate, 'mm')).toBe('01');
  });

  it('formats time as m', () => {
    expect(formatDate(testDate, 'm')).toBe('1');
  });

  it('formats time as ss', () => {
    expect(formatDate(testDate, 'ss')).toBe('02');
  });

  it('formats time as s', () => {
    expect(formatDate(testDate, 's')).toBe('2');
  });

  it('Unsupported format throws error', () => {
    // @ts-expect-error Testing an unsupported format case
    expect(() => formatDate(testDate, 'YYYY-MM-DD mm:ss')).toThrow(
      'Unsupported format: YYYY-MM-DD mm:ss'
    );
  });
});
