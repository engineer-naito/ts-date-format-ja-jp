function e(t, r) {
  switch (r) {
    case "YYYY-MM-DD":
      return t.toLocaleDateString("en-CA", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      });
    case "YYYY/MM/DD":
      return t.toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      });
    case "YYYY/MM/DD(ddd)":
      return `${t.toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      })}(${t.toLocaleDateString("en-US", { weekday: "short" })})`;
    case "YYYY/MM/DD(曜)":
      return t.toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        weekday: "short"
      });
    case "YYYY年M月D日":
      return t.toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    case "YYYY年M月D日(曜)":
      return t.toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "short"
      });
    case "(元号)Y年M月D日":
      return t.toLocaleDateString("ja-JP-u-ca-japanese", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    case "(元号)Y年M月D日(曜)":
      return t.toLocaleDateString("ja-JP-u-ca-japanese", {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "short"
      });
    case "(GENGOU)Y.M.D":
      return t.toLocaleDateString("ja-JP-u-ca-japanese", {
        year: "numeric",
        month: "numeric",
        day: "numeric"
      }).replaceAll("/", ".");
    case "(GENGOU)Y.MM.DD":
      return t.toLocaleDateString("ja-JP-u-ca-japanese", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      }).replaceAll("/", ".");
    case "MM/DD":
      return t.toLocaleDateString("ja-JP", {
        month: "2-digit",
        day: "2-digit"
      });
    case "MM/DD(ddd)":
      return `${t.toLocaleDateString("ja-JP", {
        month: "2-digit",
        day: "2-digit"
      })}(${t.toLocaleDateString("en-US", { weekday: "short" })})`;
    case "MM/DD(曜)":
      return t.toLocaleDateString("ja-JP", {
        month: "2-digit",
        day: "2-digit",
        weekday: "short"
      });
    case "M/D":
      return t.toLocaleDateString("ja-JP", {
        month: "numeric",
        day: "numeric"
      });
    case "M/D(ddd)":
      return `${t.toLocaleDateString("ja-JP", {
        month: "numeric",
        day: "numeric"
      })}(${t.toLocaleDateString("en-US", { weekday: "short" })})`;
    case "M/D(曜)":
      return t.toLocaleDateString("ja-JP", {
        month: "numeric",
        day: "numeric",
        weekday: "short"
      });
    case "M月D日":
      return t.toLocaleDateString("ja-JP", {
        month: "long",
        day: "numeric"
      });
    case "M月D日(曜)":
      return t.toLocaleDateString("ja-JP", {
        month: "long",
        day: "numeric",
        weekday: "short"
      });
    case "HH:mm:ss.SSS":
      return `${t.toLocaleTimeString("ja-JP", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: !1
      })}.${String(t.getMilliseconds()).padStart(3, "0")}`;
    case "HH:mm:ss":
      return t.toLocaleTimeString("ja-JP", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: !1
      });
    case "HH:mm":
      return t.toLocaleTimeString("ja-JP", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: !1
      });
    case "HH時mm分ss秒":
      return `${String(t.getHours()).padStart(2, "0")}時${String(t.getMinutes()).padStart(2, "0")}分${String(t.getSeconds()).padStart(2, "0")}秒`;
    case "HH時mm分":
      return `${String(t.getHours()).padStart(2, "0")}時${String(t.getMinutes()).padStart(2, "0")}分`;
    case "H時m分":
      return `${t.getHours()}時${t.getMinutes()}分`;
    case "HH時":
      return `${String(t.getHours()).padStart(2, "0")}時`;
    case "H時":
      return `${t.getHours()}時`;
    case "ISO8601":
    case "YYYY-MM-DDTHH:mm:ss.SSSZ":
      return t.toISOString();
    case "YYYY-MM-DD HH:mm:ss":
      return `${t.toLocaleDateString("en-CA", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      })} ${t.toLocaleTimeString("ja-JP", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      })}`;
    case "YYYY/MM/DD HH:mm:ss":
      return t.toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      });
    case "YYYY/MM/DD HH:mm":
      return t.toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
      });
    case "YYYY年MM月DD日HH時mm分ss秒":
      return `${t.getFullYear()}年${String(t.getMonth() + 1).padStart(2, "0")}月${String(t.getDate()).padStart(2, "0")}日${String(t.getHours()).padStart(2, "0")}時${String(t.getMinutes()).padStart(2, "0")}分${String(t.getSeconds()).padStart(2, "0")}秒`;
    case "YYYY年M月D日H時m分":
      return `${t.toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "long",
        day: "numeric"
      })}${t.getHours()}時${t.getMinutes()}分`;
    case "YYYY年M月D日H時":
      return `${t.toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "long",
        day: "numeric"
      })}${t.getHours()}時`;
    case "(元号)Y年M月D日H時m分":
      return `${t.toLocaleDateString("ja-JP-u-ca-japanese", {
        year: "numeric",
        month: "long",
        day: "numeric"
      })}${t.getHours()}時${t.getMinutes()}分`;
    case "(元号)Y年M月D日H時":
      return `${t.toLocaleDateString("ja-JP-u-ca-japanese", {
        year: "numeric",
        month: "long",
        day: "numeric"
      })}${t.getHours()}時`;
    case "MM/DD HH:mm:ss":
      return t.toLocaleDateString("ja-JP", {
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      });
    case "MM/DD HH:mm":
      return t.toLocaleDateString("ja-JP", {
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
      });
    case "MM月DD日HH時mm分ss秒":
      return `${String(t.getMonth() + 1).padStart(2, "0")}月${String(t.getDate()).padStart(2, "0")}日${String(t.getHours()).padStart(2, "0")}時${String(t.getMinutes()).padStart(2, "0")}分${String(t.getSeconds()).padStart(2, "0")}秒`;
    case "M月D日H時m分":
      return `${t.toLocaleDateString("ja-JP", {
        month: "long",
        day: "numeric"
      })}${t.getHours()}時${t.getMinutes()}分`;
    case "M月D日H時":
      return `${t.toLocaleDateString("ja-JP", {
        month: "long",
        day: "numeric"
      })}${t.getHours()}時`;
    case "YYYY":
      return String(t.getFullYear());
    case "MM":
      return String(t.getMonth() + 1).padStart(2, "0");
    case "M":
      return String(t.getMonth() + 1);
    case "DD":
      return String(t.getDate()).padStart(2, "0");
    case "D":
      return String(t.getDate());
    case "HH":
      return String(t.getHours()).padStart(2, "0");
    case "H":
      return String(t.getHours());
    case "mm":
      return String(t.getMinutes()).padStart(2, "0");
    case "m":
      return String(t.getMinutes());
    case "ss":
      return String(t.getSeconds()).padStart(2, "0");
    case "s":
      return String(t.getSeconds());
    default:
      throw new Error(`Unsupported format: ${r}`);
  }
}
export {
  e as formatDate
};
