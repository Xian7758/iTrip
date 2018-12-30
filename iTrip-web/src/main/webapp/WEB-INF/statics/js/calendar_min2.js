var sFtv = new Array("0101 元旦", "0501 劳动", "0404 清明", "1001 国庆");
var lFtv = new Array("正月初一 春节", "正月十五 元宵", "五月初五 端午", "七月初七 七夕","七月十五 中元","八月十五 中秋","九月初九 重阳","腊月初八 腊八","腊月廿四 小年","腊月三十 除夕");

function NewDate(str) {
    str = str.split('-');
    var date = new Date();
    date.setUTCFullYear(str[0], str[1] - 1, str[2]);
    date.setUTCHours(0, 0, 0, 0);
    return date;
}
NLDate = {
    lunarinfo: new Array(0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2, 0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977, 0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970, 0x06566, 0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950, 0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557, 0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5d0, 0x14573, 0x052d0, 0x0a9a8, 0x0e950, 0x06aa0, 0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0, 0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b5a0, 0x195a6, 0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570, 0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x055c0, 0x0ab60, 0x096d5, 0x092e0, 0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5, 0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930, 0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530, 0x05aa0, 0x076a3, 0x096d0, 0x04bd7, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45, 0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0),
    lyeardays: function(y) {
        var i,
        sum = 348
        for (i = 0x8000; i > 0x8; i >>= 1) sum += (this.lunarinfo[y - 1900] & i) ? 1: 0
        return (sum + this.leapdays(y))
    },
    leapdays: function(y) {
        if (this.leapmonth(y)) return ((this.lunarinfo[y - 1900] & 0x10000) ? 30: 29)
        else return (0)
    },
    leapmonth: function(y) {
        return (this.lunarinfo[y - 1900] & 0xf)
    },
    monthdays: function(y, m) {
        return ((this.lunarinfo[y - 1900] & (0x10000 >> m)) ? 30: 29)
    },
    lunar: function(objdate) {
        var i,
        leap = 0,
        temp = 0;
        var basedate = new Date(1900, 0, 31);
        var offset = (objdate - basedate) / 86400000;
        this.daycyl = offset + 40;
        this.moncyl = 14;
        for (i = 1900; i < 2050 && offset > 0; i++) {
            temp = this.lyeardays(i);
            offset -= temp;
            this.moncyl += 12;
        }
        if (offset < 0) {
            offset += temp;
            i--;
            this.moncyl -= 12;
        }
        this.year = i;
        this.yearcyl = i - 1864;
        leap = this.leapmonth(i);
        this.isleap = false
        for (i = 1; i < 13 && offset > 0; i++) {
            if (leap > 0 && i == (leap + 1) && this.isleap == false) {--i;
                this.isleap = true;
                temp = this.leapdays(this.year);
            } else {
                temp = this.monthdays(this.year, i);
            }
            if (this.isleap == true && i == (leap + 1)) this.isleap = false;
            offset -= temp;
            if (this.isleap == false) this.moncyl++;
        }
        if (offset == 0 && leap > 0 && i == leap + 1) if (this.isleap) {
            this.isleap = false;
        } else {
            this.isleap = true; --i; --this.moncyl;
        }
        if (offset < 0) {
            offset += temp; --i; --this.moncyl;
        }
        this.month = i;
        this.day = offset + 1
        return {
            month: this.month,
            day: this.day
        };
    },
    cday: function(m, d) {
        var nstr1 = new Array('日', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十');
        var nstr2 = new Array('初', '十', '廿', '卅', '　');
        var s;
        if (m > 10) {
            s = '十' + nstr1[m - 10]
        } else {
            s = nstr1[m]
        }
        s += '月'
        if (s == "十二月") s = "腊月";
        if (s == "一月") s = "正月";
        switch (d) {
        case 10:
            s += '初十';
            break;
        case 20:
            s += '二十';
            break;
        case 30:
            s += '三十';
            break;
        default:
            s += nstr2[Math.floor(d / 10)];
            s += nstr1[d % 10];
        }
        return (s);
    },
    solarday: function(nowdate) {
        var tt = "";
        if (nowdate instanceof Date) {
            var sdobj = new Date(nowdate.getFullYear(), nowdate.getMonth(), nowdate.getDate());
            var ldobj = this.lunar(sdobj);
            var cl = '';
            tt = this.cday(ldobj.month, ldobj.day);
        } else {
            tt = "请传入日期对象";
        }
        return tt;
    }
};
var Browser = (function() {
    var b = navigator.userAgent.toLowerCase();
    var a = null;
    return (a = b.match(/msie ([\d.]+)/)) ? {
        type: "MSIE",
        version: a[1]
    }: (a = b.match(/firefox\/([\d.]+)/)) ? {
        type: "FireFox",
        version: a[1]
    }: (a = b.match(/opera.([\d.]+)/)) ? {
        type: "Opera",
        version: a[1]
    }: (a = b.match(/version\/([\d.]+).*safari/)) ? {
        type: "Safari",
        version: a[1]
    }: (a = b.match(/chrome\/([\d.]+)/)) ? {
        type: "Chrome",
        version: a[1]
    }: {
        type: "Unknown",
        version: 0
    };
})();
String.prototype.startsWith = function(a, b) {
    b = typeof(b) == "number" ? b: 0;
    if (this.length >= (a.length + b)) {
        return (this.substr(b, a.length) == a);
    } else {
        return false;
    }
};
String.prototype.endsWith = function(a) {
    if (this.length >= a.length) {
        return (this.substr((this.length - a.length), a.length) == a);
    } else {
        return false;
    }
};
String.prototype.replaceAll = function(d, b) {
    var c = new RegExp(d, "gm");
    var a = this.replace(c, b);
    c = null;
    return a;
};
String.prototype.replaceFirst = function(c, b) {
    var d = new RegExp("(" + c + ")", "gm").exec(this);
    var a = this;
    if (null != d) {
        a = this.substring(0, d.index).concat(b).concat(this.substring(d.index + d[1].length));
    }
    d = null;
    return a;
};
String.prototype.trim = function() {
    var b = /[\s ]/gmi;
    var a = this.replace(b, "");
    b = null;
    return a;
};
String.prototype.leftTrim = function() {
    var b = /^[\s ]/gmi;
    var a = this.replace(b, "");
    b = null;
    return a;
};
String.prototype.rightTrim = function() {
    var b = /[\s ]$/gmi;
    var a = this.replace(b, "");
    b = null;
    return a;
};
String.prototype.bothTrim = function() {
    return (this.leftTrim()).rightTrim();
};
String.prototype.size = function() {
    return this.replace(/[^\u0000-\u00FF]/gmi, "**").length;
};
String.prototype.fillBefore = function(e, g) {
    var b = this.length;
    var d = g - b + 1;
    var f = this;
    if (d > 0) {
        var c = new Array(d);
        f = c.join(e) + f;
        c = null;
    }
    return f;
};
String.prototype.fillAfter = function(e, g) {
    var b = this.length;
    var d = g - b + 1;
    var f = this;
    if (d > 0) {
        var c = new Array(d);
        f = f + c.join(e);
        c = null;
    }
    return f;
};
String.prototype.toCurrency = function(k) {
    k = k || 2;
    var h = /^(\-?)(\d+)(\.\d+)?$/;
    var j = h.exec(this);
    var b = null != j ? RegExp.$1: "";
    var f = null != j ? RegExp.$2: "0";
    var e = null != j ? RegExp.$3: ".00";
    var m = f.length;
    var l = m > 3 ? m % 3: 0;
    var d = "";
    var a = 0 == l ? "": f.substr(0, l) + ",";
    var g = 0;
    e = "" == e ? ".00": e;
    e = (e.fillAfter(0, k + 1)).substr(0, k + 1);
    for (var c = l; c < m; c++) {
        d += f.charAt(c);
        g++;
        if (g % 3 == 0 && c < m - 1) {

            d += ",";
            g = 0;
        }
    }
    h = null;
    return b + a + d + e;
};
String.prototype.format = function(c) {
    c = c || {};
    var b = this;
    for (var a in c) {
        if (c.hasOwnProperty(a)) {
            b = b.replaceAll("\\$\\{" + a + "\\}", c[a]);
        }
    }
    return b;
};
Date.prototype.format = function(c, g) {
    var j = "" + this.getFullYear();
    var h = "" + (this.getMonth() + 1);
    var d = "" + this.getDate();
    var f = "" + this.getHours();
    var e = "" + this.getMinutes();
    var b = "" + this.getSeconds();
    var l = "" + this.getMilliseconds();
    var k = this.getDay();
    var a = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    var n = ["日", "一", "二", "三", "四", "五", "六"];
    var i = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var m = ["Sun.", "Mon.", "Tues.", "Wed.", "Thur.", "Fri.", "Sat."];
    g = typeof(g) == "boolean" ? g: true;
    c = c || "%y%M%d%h%m%s%i %w";
    c = c.replace("%y", j);
    c = c.replace("%M", g ? h.fillBefore("0", 2) : h);
    c = c.replace("%d", g ? d.fillBefore("0", 2) : d);
    c = c.replace("%h", g ? f.fillBefore("0", 2) : f);
    c = c.replace("%m", g ? e.fillBefore("0", 2) : e);
    c = c.replace("%s", g ? b.fillBefore("0", 2) : b);
    c = c.replace("%i", g ? l.fillBefore("0", 3) : l);
    c = c.replace("%w", a[k]);
    c = c.replace("%W", i[k]);
    c = c.replace("%a", n[k]);
    c = c.replace("%A", m[k]);
    return c;
};
Date.prototype.parseDate = function(b, a) {
    return this.validDate(b, a).date;
};
Date.prototype.validDate = function(n, a) {
    var v = "";
    a = a || "%y%M%d%h%m%s";
    v = a;
    a = a.replace("%y", "(\\d{4})");
    a = a.replace("%M", "(\\d{1,2})");
    a = a.replace("%d", "(\\d{1,2})");
    a = a.replace("%h", "(\\d{1,2})");
    a = a.replace("%m", "(\\d{1,2})");
    a = a.replace("%s", "(\\d{1,2})");
    a = a.replace("%i", "(\\d{1,3})");
    a = a.replace("%w", "(星期[日|一|二|三|四|五|六])");
    a = a.replace("%W", "(Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday)");
    a = a.replace("%a", "(日|一|二|三|四|五|六)");
    a = a.replace("%A", "(Sun\\.|Mon\\.|Tues\\.|Wed\\.|Thur\\.|Fri\\.|Sat\\.)");
    var e = new RegExp("^" + a + "$");
    var h = e.exec(n);
    var c,
    k,
    l,
    w,
    y,
    f,
    q;
    var j = p("y", v);
    var t = p("M", v);
    var r = p("d", v);
    var g = p("h", v);
    var x = p("m", v);
    var o = p("s", v);
    var i = p("i", v);
    var b = (undefined === j && undefined === t && undefined === r && undefined === g && undefined === x && undefined === o && undefined === i);
    var s = false;
    var u = new Date();
    if (null != h) {
        h.shift();
        c = undefined === j ? u.getFullYear() : m(h[j]);
        k = undefined === t ? u.getMonth() : m(h[t]) - 1;
        l = undefined === r ? u.getDate() : m(h[r]);
        w = undefined === g ? u.getHours() : m(h[g]);
        y = undefined === x ? u.getMinutes() : m(h[x]);
        f = undefined === o ? u.getSeconds() : m(h[o]);
        q = undefined === i ? u.getMilliseconds() : m(h[i]);
        u = new Date(c, k, l, w, y, f, q);
        s = (false === b) && ((u.getFullYear() === c) && (u.getMonth() === k) && (u.getDate() === l) && (u.getHours() === w) && (u.getMinutes() === y) && (u.getSeconds() === f) && (u.getMilliseconds() === q));
    }
    function m(d) {
        return typeof(d) == "undefined" ? 0: parseInt(d, 10);
    }
    function p(A, z) {
        var D = z.replace(/[^%yMdhmsi]+/g, "");
        var d = D.split("%");
        var C = d.length;
        for (var B = 1; B < C; B++) {
            if (d[B] == A) {
                return (B - 1);
            }
        }
        return undefined;
    }
    return {
        isValid: s,
        date: u
    };
};
Date.prototype.leapYear = function() {
    var c = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
    var a = false;
    var b = 365;
    if ((this.getFullYear() % 4 == 0 && this.getFullYear() % 100 != 0) || this.getFullYear() % 400 == 0) {
        c.splice(1, 1, 29);
        a = true;
        b = 366;
    } else {
        c.splice(1, 1, 28);
        a = false;
        b = 365;
    }
    return {
        isLeapYear: a,
        days: c,
        yearDays: b,
        monthDays: c[this.getMonth()]
    };
};
Date.prototype.dateDiff = function(a, b) {
    var c = 0;
    switch (a) {
    case "y":
        c = b.getFullYear() - this.getFullYear();
        break;
    case "q":
        c = ((b.getMonth() + 1) + ((b.getFullYear() - this.getFullYear()) * 12) - (this.getMonth() + 1)) / 3;
        break;
    case "n":
        c = (b.getMonth() + 1) + ((b.getFullYear() - this.getFullYear()) * 12) - (this.getMonth() + 1);
        break;
    case "d":
        c = (b - this) / 86400000;
        break;
    case "w":
        c = (b - this) / (86400000 * 7);
        break;
    case "h":
        c = (b - this) / 3600000;
        break;
    case "m":
        c = (b - this) / 60000;
        break;
    case "s":
        c = (b - this) / 1000;
        break;
    case "i":
        c = b.getTime() - this.getTime();
        break;
    default:
        c = b.getTime() - this.getTime();
        break;
    }
    return c;
};
Date.prototype.dateAdd = function(a, b) {
    switch (a) {
    case "y":
        this.setFullYear(this.getFullYear() + b);
        break;
    case "q":
        this.setMonth(this.getMonth() + (b * 3));
        break;
    case "n":
        this.setMonth(this.getMonth() + b);
        break;
    case "d":
        this.setDate(this.getDate() + b);
        break;
    case "w":
        this.setDate(this.getDate() + (b * 7));
        break;
    case "h":
        this.setHours(this.getHours() + b);
        break;
    case "m":
        this.setMinutes(this.getMinutes() + b);
        break;
    case "s":
        this.setSeconds(this.getSeconds() + b);
        break;
    case "i":
        this.setMilliseconds(this.getMilliseconds() + b);
        break;
    default:
        this.setMilliseconds(this.getMilliseconds() + b);
        break;
    }
    return this;
};
function Calendar() {
    this.PREFIX = "CALENDAR_";
    this.SECURE_PAGE = "MSIE" == Browser.type ? "javascript:''": "about:blank";
    this.WIDTH = 210;
    this.HEIGHT = 207;
    this.WEEKDAYS = {
        Sunday: {
            en_abbr: "Sun.",
            abbr: "日",
            full: "星期日"
        },
        Monday: {
            en_abbr: "Mon.",
            abbr: "一",
            full: "星期一"
        },
        Tuesday: {
            en_abbr: "Tues.",
            abbr: "二",
            full: "星期二"
        },
        Wednesday: {
            en_abbr: "Wed.",
            abbr: "三",
            full: "星期三"
        },
        Thursday: {
            en_abbr: "Thur.",
            abbr: "四",
            full: "星期四"
        },
        Friday: {
            en_abbr: "Fri.",
            abbr: "五",
            full: "星期五"
        },
        Saturday: {
            en_abbr: "Sat.",
            abbr: "六",
            full: "星期六"
        }
    };
    this.MONTHS = [{
        en: "january",
        text: "一",
        value: "01"
    },
    {
        en: "february",
        text: "二",
        value: "02"
    },
    {
        en: "march",
        text: "三",
        value: "03"
    },
    {
        en: "april",
        text: "四",
        value: "04"
    },
    {
        en: "may",
        text: "五",
        value: "05"
    },
    {
        en: "june",
        text: "六",
        value: "06"
    },
    {
        en: "july",
        text: "七",
        value: "07"
    },
    {
        en: "august",
        text: "八",
        value: "08"
    },
    {
        en: "september",
        text: "九",
        value: "09"
    },
    {
        en: "october",
        text: "十",
        value: "10"
    },
    {
        en: "november",
        text: "十一",
        value: "11"
    },
    {

        en: "december",
        text: "十二",
        value: "12"
    }];
    this.config = {
        id: 0,
        size: 1,
        rows: 1,
        cols: 1,
        showToday: false,
        namespace: "cal",
        range: {
            start: null,
            end: null,
            disabled: false
        },
        bind: [],
        offsetX: 0,
        offsetY: 0,
        bindNext: true,
        format: "%y-%M-%d"
    };
    this.def_date = new Date();
    this.previous_list = null;
    this.isMultiple = false;
    this.index = 0;
}
Calendar.prototype = {
    init: function(a) {
        var b = a || null;
        for (var c in b) {
            if (b.hasOwnProperty(c)) {
                this.config[c] = b[c];
            }
        }
        this.isMultiple = (this.config.size > 1);
        this.setCalendarCSS();
        this.bindCalendar();
    },
    getPosition: function(c) {
        var b = 0;
        var a = 0;
        while (null != c) {
            b += c.offsetLeft;
            a += c.offsetTop;
            c = c.offsetParent;
        }
        return {
            x: b,
            y: a
        };
    },
    createIframe: function() {
        var h = document.createElement("iframe");
        var c = this.config;
        var g = this.PREFIX + "iframe_" + c.id;
        var f = this.SECURE_PAGE;
        var d = {
            frameBorder: 0,
            vSpacing: 0,
            hSpacing: 0,
            marginWidth: 0,
            marginHeight: 0,
            scrolling: "no",
            src: f,
            id: g
        };
        var b = c.cols * this.WIDTH;
        var e = c.rows * this.HEIGHT;
        for (var a in d) {
            if (d.hasOwnProperty(a)) {
                h.setAttribute(a, d[a]);
            }
        }
        h.style.cssText = "width:" + h + "px; height:" + e + "px; position:absolute; z-index:-1; left:0px; top:0px;";
        return h;
    },
    createPanel: function(i, g, f) {
        var j = this.config;
        var l = this.PREFIX + "panel_" + j.id;
        var m = this.PREFIX + "calendar_" + j.id;
        var c = j.cols * this.WIDTH;
        var e = j.rows * this.HEIGHT;
        var a = document.getElementById(l);
        var d = null;
        var b = null;
        var k = null;
        var h = this;
        k = this.getPosition(i);
        if (null == a) {
            d = this.createIframe();
            b = document.createElement("div");
            b.setAttribute("id", m);
            a = document.createElement("div");
            a.setAttribute("id", l);
            a.style.cssText = "position:absolute; left:" + (k.x + g) + "px; top:" + (k.y + f) + "px; z-index:4000; width:" + c + "px; height:" + e + "px; display:none;";
            a.className = "cal-panel";
            a.appendChild(d);
            a.appendChild(b);
            document.body.appendChild(a);
            if (document.addEventListener) {
                a.addEventListener("mouseup",
                function(n) {
                    n.preventDefault();
                    n.stopPropagation();
                },
                false);
            } else {
                a.attachEvent("onmouseup",
                function() {
                    window.event.returnValue = !(window.event.cancelBubble = true);
                });
            }
            b.onmouseup = function(p) {
                var r = p || window.event;
                var q = r.target || r.srcElement;
                var o = (q.tagName).toLowerCase();
                var n = (q.className).toLowerCase();
                if ("span" != o || "code" != o || "cal-down" != n) {
                    h.hidePreviousList();
                }
            };
        }
        a.style.cssText = "position:absolute; left:" + (k.x + g) + "px; top:" + (k.y + f) + "px; z-index:4000; width:" + c + "px; height:" + e + "px; display:none;";
        this.clearHistoryCalendar(m);
        return {
            panel: a,
            calendar: b
        };
    },
    clearHistoryCalendar: function(a) {
        var b = document.getElementById(a);
        b.innerHTML = "";
    },
    createTable: function(j, b) {
        var d = this.config;
        var f = this.PREFIX + "table_" + d.id + "_" + j + "_" + b;
        var g = this.PREFIX + "div_" + d.id + "_" + j + "_" + b;
        var a = document.createElement("div");
        var i = document.createElement("table");
        var c = document.createElement("tbody");
        var h = {
            id: f,
            border: 0,
            cellpadding: 0,
            cellspacing: 0
        };
        a.className = "cal-calendar-p";
        i.className = "cal-calendar";
        c.className = "cal-body";
        a.setAttribute("id", g);
        for (var e in h) {
            if (h.hasOwnProperty(e)) {
                i.setAttribute(e, h[e]);
            }
        }
        i.appendChild(c);
        a.appendChild(i);
        return {
            t: i,
            b: c,
            p: a
        };
    },
    changeCalendar: function(n, c, l, b, f) {
        var g = this.config;
        var k = this.PREFIX + "panel_" + g.id;
        var m = this.PREFIX + "month_" + g.id + "_" + n + "_" + c;
        var e = this.PREFIX + "year_" + g.id + "_" + n + "_" + c;
        var a = document.getElementById(k);
        var h = document.getElementById(m);
        var i = document.getElementById(e);
        var d = new Date();
        var j = i.innerHTML + "-" + h.getAttribute("month") + "-01";
        d = d.parseDate(j, l);
        if (f != 0) {
            d = d.dateAdd(b, f);
        }
        this.clearHistoryCalendar(this.PREFIX + "calendar_" + g.id);
        this.createCalendar(a, d, l);
        a = null;
        i = null;
        h = null;
        d = null;
    },
    keyEvent: function(c, g, b, e, a, f) {
        var d = c && c.button ? c.button: window.event.keyCode;
        if (13 == d) {
            this.changeCalendar(g, b, e, a, f);
        }
    },
    hidePreviousList: function() {
        if (null != this.previous_list) {
            this.hideMonthList(this.previous_list.replace("year", "month"));
            this.hideYearList(this.previous_list.replace("month", "year"));
            this.previous_list = null;
        }
    },
    getMonthList: function(g, l, c, j) {
        var f = this.config;
        var b = this.MONTHS;
        var m = b.length;
        var h = "";
        var k = null;
        var a = g;
        var d = a + 8;
        var h = '<div class="cal-pre-date" onclick="' + f.namespace + ".turnMonth(0, '" + l + "', '" + c + "', '" + j + "')\"></div>";
        for (var e = a; e < m && e < d; e++) {
            k = b[e];
            h += '<div class="cal-list-month" onmouseover="this.className=\'cal-list-month-hovr\'" onmouseout="this.className=\'cal-list-month\'" onclick="' + f.namespace + ".setCheckedMonth('" + k.value + "', '" + k.text + "', '" + l + "', '" + c + "', '" + j + "')\">" + k.text + "月</div>";
        }
        h += '<div class="cal-next-date" onclick="' + f.namespace + ".turnMonth(4, '" + l + "', '" + c + "', '" + j + "')\"></div>";
        return h;
    },
    turnMonth: function(h, g, d, f) {
        var a = this.config;
        var c = this.PREFIX + "month_" + a.id + "_" + g + "_" + d;
        var b = this.PREFIX + "month_list_" + a.id + "_" + g + "_" + d;
        var e = document.getElementById(b);
        e.innerHTML = this.getMonthList(h, g, d, f);
        e = null;
    },
    setCheckedMonth: function(g, b, j, a, h) {
        var d = this.config;
        var i = this.PREFIX + "month_" + d.id + "_" + j + "_" + a;
        var c = this.PREFIX + "month_list_" + d.id + "_" + j + "_" + a;
        var f = document.getElementById(i);
        var e = document.getElementById(c);
        f.innerHTML = b;
        f.setAttribute("month", g);
        this.changeCalendar(j, a, h, "y", 0);
        e.style.display = "none";
        f = null;
        e = null;
    },
    stopEventBubble: function(a) {
        if (document.addEventListener) {
            a.addEventListener("mouseup", 
            function(b) {
                b.preventDefault();

                b.stopPropagation();
            },
            false);
        } else {
            a.attachEvent("onmouseup", 
            function() {
                window.event.returnValue = !(window.event.cancelBubble = true);
            });
        }
    },
    showMonthList: function(f, g, b, e, d, a) {
        var c = document.getElementById(a);
        c.innerHTML = this.getMonthList(0, g, b, e);
        c.style.display = "block";
        c = null;
        this.hidePreviousList();
        this.hideYearList(a.replace("month", "year"));
        this.previous_list = a;
    },
    hideMonthList: function(a) {
        var b = document.getElementById(a);
        b.style.display = "none";
    },
    getYearList: function(e, h, c, f) {
        var b = this.config;
        var a = e + 8;
        var g = '<div class="cal-pre-date" onclick="' + b.namespace + ".turnYear(" + (e - 7) + ", '" + h + "', '" + c + "', '" + f + "')\"></div>";
        for (var d = e; d < a; d++) {
            g += '<div class="cal-list-year" onmouseover="this.className=\'cal-list-year-hovr\'" onmouseout="this.className=\'cal-list-year\'" onclick="' + b.namespace + ".setCheckedYear(" + d + ", '" + h + "', '" + c + "', '" + f + "')\">" + d + "年</div>";
        }
        g += '<div class="cal-next-date" onclick="' + b.namespace + ".turnYear(" + a + ", '" + h + "', '" + c + "', '" + f + "')\"></div>";
        return g;
    },
    setCheckedYear: function(h, i, b, g) {
        var d = this.config;
        var c = this.PREFIX + "year_" + d.id + "_" + i + "_" + b;
        var a = this.PREFIX + "year_list_" + d.id + "_" + i + "_" + b;
        var f = document.getElementById(c);
        var e = document.getElementById(a);
        f.innerHTML = h;
        this.changeCalendar(i, b, g, "y", 0);
        e.style.display = "none";
        f = null;
        e = null;
    },
    turnYear: function(d, h, c, g) {
        if (d < 1900) {
            d = 1900;
        }
        if (d > 2093) {
            d = 2093;
        }
        var a = this.config;
        var b = this.PREFIX + "year_" + a.id + "_" + h + "_" + c;
        var f = this.PREFIX + "year_list_" + a.id + "_" + h + "_" + c;
        var e = document.getElementById(f);
        e.innerHTML = this.getYearList(d, h, c, g);
        e = null;
    },
    showYearList: function(d, i, b, g, a, c) {
        var f = document.getElementById(a);
        var e = document.getElementById(c);
        var h = f.innerHTML * 1;
        e.innerHTML = this.getYearList(h, i, b, g);
        e.style.display = "block";
        f = null;
        e = null;
        this.hidePreviousList();
        this.hideMonthList(c.replace("year", "month"));
        this.previous_list = c;
    },
    hideYearList: function(b) {
        var a = document.getElementById(b);
        a.style.display = "none";
    },
    createHead: function(n, o, b, l) {
        var h = this.config;
        var k = this.PREFIX + "head_" + h.id + "_" + o + "_" + b;
        var m = this.PREFIX + "month_" + h.id + "_" + o + "_" + b;
        var c = this.PREFIX + "year_" + h.id + "_" + o + "_" + b;
        var g = this.PREFIX + "month_list_" + h.id + "_" + o + "_" + b;
        var a = this.PREFIX + "year_list_" + h.id + "_" + o + "_" + b;
        var i = n.createTHead();
        var j = i.insertRow( - 1);
        var e = j.insertCell( - 1);
        var d = (0 === o + b) ? '<em title="上一个月" class="cal-btn-month cal-btn-pre-month" onclick="' + h.namespace + ".changeCalendar('" + o + "', '" + b + "', '" + l + "', 'n', -1)\"></em>": "";
        var f = (h.size == (o + 1) * (b + 1)) ? '<em title="下一个月" class="cal-btn-month cal-btn-next-month" onclick="' + h.namespace + ".changeCalendar('" + o + "', '" + b + "', '" + l + "', 'n', 1)\"></em>": "";
        i.setAttribute("id", k);
        i.className = "cal-head";
        e.colSpan = 7;
        e.innerHTML = d + '<span onclick="' + h.namespace + ".showYearList(this, '" + o + "', '" + b + "', '" + l + "', '" + c + "', '" + a + '\')"><code id="' + c + '"></code>年<em class="cal-down"></em></span><span onclick="' + h.namespace + ".showMonthList(this, '" + o + "', '" + b + "', '" + l + "', '" + m + "', '" + g + '\')"><code id="' + m + '"></code>月<em class="cal-down"></em></span>' + f + '<div onmouseup="' + h.namespace + '.stopEventBubble(this)" id="' + a + '" class="cal-year-list" style="display:none;"></div><div onmouseup="' + h.namespace + '.stopEventBubble(this)" id="' + g + '" class="cal-month-list" style="display:none;"></div>';
        n = null;
        i = null;
        j = null;
        e = null;
    },
    createFoot: function(d, g, b) {
        var a = this.config;
        var c = this.PREFIX + "head_" + a.id + "_" + g + "_" + b;
        var f = d.createTFoot();
        var e = f.insertRow( - 1);
        var h = e.insertCell( - 1);
        f.setAttribute("id", c);
        f.className = "cal-foot";
        h.colSpan = 7;
        h.innerHTML = '<button title="' + ((new Date()).format("%y-%M-%d, %w")) + '" type="button" onclick="' + a.namespace + '.clickEvent()">今天</button>';
        d = null;
        f = null;
        e = null;
        h = null;
    },
    setCurrentDate: function(e, h, d) {
        var a = this.config;
        var b = this.PREFIX + "month_" + a.id + "_" + h + "_" + d;
        var c = this.PREFIX + "year_" + a.id + "_" + h + "_" + d;
        var g = document.getElementById(b);
        var f = document.getElementById(c);
        g.innerHTML = this.MONTHS[e.getMonth()].value;
        g.setAttribute("month", this.MONTHS[e.getMonth()].value);
        f.innerHTML = e.getFullYear();
    },
    createBody: function(h, j, c, d) {
        var b = new Date(d.getFullYear(), d.getMonth(), 1);
        var a = b.getDay();
        var e = d.leapYear();
        var g = e.monthDays;
        for (var f = 0; f < 7; f++) {
            if (0 == f) {
                this.createWeekDays(h, j, c, f);
            } else {
                this.createDate(h, j, c, b, d, f, a, g);
            }
        }
    },
    createWeekDays: function(l, m, a, e) {
        var f = this.config;
        var h = this.PREFIX + "tr_weekdays_" + f.id + "_" + m + "_" + a + "_" + e;
        var c = this.WEEKDAYS;
        var g = l.insertRow( - 1);
        var b = null;
        var d = 0;
        g.className = "cal-week";
        g.setAttribute("id", h);
        for (var k in c) {
            if (c.hasOwnProperty(k)) {
                h = this.PREFIX + "td_weekdays_" + f.id + "_" + m + "_" + a + "_" + e + "_" + d;
                b = g.insertCell( - 1);
                b.innerHTML = c[k]["abbr"];
                b.setAttribute("id", h);
                d++;
            }
        }
        l = null;
        g = null;
        b = null;
    },
    createDate: function(m, n, c, b, d, f, a, k) {
        var g = this.config;
        var l = this.PREFIX + "tr_date_" + g.id + "_" + n + "_" + c + "_" + f;
        var h = m.insertRow( - 1);
        h.className = "cal-date";
        h.setAttribute("id", l);
        for (var e = 0; e < 7; e++) {
            this.createDay(h, n, c, b, d, f, e, a, k);
        }
    },
    inRange: function(d) {
        var c = this.config;
        var e = d.format("%y%M%d") * 1;
        //var f = c.range.start ? (new Date().parseDate(c.range.start, "%y-%M-%d").format("%y%M%d")) * 1: 0;
		var f = c.range.start ? (new Date().parseDate(c.range.start, "%y-%M-%d").format("%y%M%d")) * 1: (new Date().parseDate(c.range.start, "%y-%M-%d").format("%y%M%d")) * 1;
        var b = c.range.end ? (new Date().parseDate(c.range.end, "%y-%M-%d").format("%y%M%d")) * 1: 99999999;
        var a = false;
        if (e >= f && e <= b) {
            a = true;
        }
        return a;
    },
    createDay: function(q, t, f, c, h, m, l, b, r) {
        var o = this.config;
        var s = this.PREFIX + "td_date_" + o.id + "_" + t + "_" + f + "_" + m + "_" + l;
        var e = o.range.disabled;
        var g = false;
        var k = q.insertCell( - 1);
        var n = (m - 1) * 7 + l;
        var a = new Date();
        var p = c.getDate();
        k.innerHTML = "&nbsp;";
		
		var Sameday = 0;
        if (n >= b && p <= r && h.getMonth() == c.getMonth()) {
            k.innerHTML = p;
            for (var i = 0; i < sFtv.length; i++) {
                if (sFtv[i].indexOf(c.format("%M%d")) != -1) {
                    if (c.format("%M%d") == "0404") {
                        if (c.format("%y") == "2013") {
                            k.innerHTML = "<font style='color:red; font-size:12px;'>" + sFtv[i].substring(5, sFtv[i].length) + "</font>";
                        }
                    } else {
                        k.innerHTML = "<font style='color:red; font-size:12px;'>" + sFtv[i].substring(5, sFtv[i].length) + "</font>";
                    }
                }
            }
            var nowss = NewDate(c.format("%y-%M-%d"));
            var solarday = NLDate.solarday(nowss);
            for (var i = 0; i < lFtv.length; i++) {
                if (lFtv[i].indexOf(solarday) != -1) {
                    k.innerHTML = "<font style='color:red; font-size:12px;'>" + lFtv[i].substring(5, lFtv[i].length) + "</font>";
                }
            }
            k.title = c.format("%y-%M-%d, %w") + ",农历" + solarday;
            g = this.inRange(c);
            if (!g) {
                k.className = "cal-disabled";
            }
			//k.innerHTML += "<br>";
            if ((!e || g) ) {
                var addMonth = 2;
                var city_id;
                city_id = document.getElementById("city");
                if (city_id != null) {
                    if (city_id.value == "香港") {
                        addMonth = 4;
                    }
                }
                if (document.getElementById("Sameday") != null) {
                    if (document.getElementById("Sameday").value == "1") {
                        Sameday = 1;
                    }
                }
                if (Sameday == 1) {
                    if (c.format("%y%M%d") >= a.format("%y%M%d") && c < a.dateAdd("n", addMonth)) {
                        this.bindClickEvent(k, new Date(c.getTime()));
                        this.bindMouseEvent(k);
                        var temp_time = new Date();
                        temp_time = a.dateAdd("n", addMonth);
                        temp_time = temp_time.format("%y-%M-%d");
                    } else {
                        k.className = "cal-current_wg";
                    }
                } else {
                    if (c.format("%y%M%d") > a.format("%y%M%d") && c < a.dateAdd("n", addMonth)) {
                        this.bindClickEvent(k, new Date(c.getTime()));
                        this.bindMouseEvent(k);
                        var temp_time = new Date();
                        temp_time = a.dateAdd("n", addMonth);
                        temp_time = temp_time.format("%y-%M-%d");
                    } else {
                        //k.className = "cal-current_wg";
						
						//**
						this.bindClickEvent(k, new Date(c.getTime()));
                        this.bindMouseEvent(k);
                        var temp_time = new Date();
                        temp_time = a.dateAdd("n", addMonth);
                        temp_time = temp_time.format("%y-%M-%d");
                    }
                }
                if (!g) {
                    k.className = "cal-not-in-range";
                }
            }
			else {
                k.innerHTML += "<br>";
            }
            /*if (c.format("%y%M%d") == a.format("%y%M%d")) {
                //k.className = g ? "cal-current_wg": (e ? "cal-disabled-current": "cal-current_wg");
                k.title = k.title + "(预定当天入住酒店，请前往青芒果天猫旗舰店）";
                k.onclick = function() {
                    document.getElementById("cue-text").innerHTML = "&nbsp;&nbsp;温馨提示：预定<font style='color:#FF5300;'>当天入住</font>酒店，请前往 <a style='color:#507A33;' href='http://qmango.tmall.com/view_page-673892332.htm?spm=0.0.0.0.aovKhm' target='_blank'>青芒果天猫旗舰店</a>";
                }
                k.onmouseover = function() {
                    k.className = "cal-mover"
                }
                k.onmouseout = function() {
                    //k.className = "cal-current_wg"
                }
            }*/
			
            if (c.format("%y%M%d") == this.def_date.format("%y%M%d")) {
                k.className = g ? "cal-def-date": (e ? "cal-disabled-current cal-def-date": "cal-def-date");
				var div = '<div style="height:100%;height:100%;color:white;line-height:25px;">'+k.innerHTML+'</div>';
				//alert(div);
				k.innerHTML = div;
            }
            c.dateAdd("d", 1);
        } else {
            k.className = "cal-null";
        }
    },
    dispatchEvent: function(g, a, b, c) {
        var f = typeof(g) == "object" ? g: document.getElementById(g);
        var d = null;
        if (document.createEvent) {
            d = document.createEvent("Events");
            d.initEvent(a, true, true);
        } else {
            if (document.createEventObject) {
                d = document.createEventObject();
            } else {
                return false;
            }
        }
        d.datatype = b;
        d.data = c;
        if (f.dispatchEvent) {
            f.dispatchEvent(d);
        } else {
            if (f.fireEvent) {
                f.fireEvent("on" + a, d);
            }
        }
    },
    clickEvent: function(b) {
        var a = this.config;
        var e = null;
        var g = a.bind || [];
        var d = g.length - 1;
        var c = this.index + 1;
        var f = g[this.index];
        e = d >= c ? g[c] : null;
        b = b || new Date();
        if (f && null != f.handler) {
            f.args.unshift(b);
            f.handler.apply(null, f.args);
            f.args.shift();
        }
        this.hide();
        if (a.bindNext && null != e) {
            this.dispatchEvent(e.ref, "click", null, null);
        }
    },
    bindClickEvent: function(d, b) {
        var a = this.config;
        var c = this;
        d.onclick = function() {
            c.clickEvent(b);
        };
    },
    bindMouseEvent: function(a) {
        a.onmouseover = function() {
            var b = this.className;
            b = b.replace(/[\s ]*cal\-mover[\s ]*/, "");
            this.className = b + " cal-mover";
        };
        a.onmouseout = function() {
            var b = this.className;
            b = b.replace(/[\s ]*cal\-mover[\s ]*/, "");
            this.className = b;
        };
    },
    createCalendar: function(a, d, g) {
        var e = this.config;
        var i = null;
        var k = e.rows;
        var f = e.cols;
        var h = this.PREFIX + "calendar_" + e.id;
        var b = document.getElementById(h);
        for (var j = 0; j < k; j++) {
            for (var c = 0; c < f; c++) {
                i = this.createTable(j, c);
                this.createHead(i.t, j, c, g);
                this.createBody(i.b, j, c, d);
                if (true === e.showToday) {
                    this.createFoot(i.t, j, c);
                } else {
                    a.style.height = k * (this.HEIGHT);
                }
                b.appendChild(i.p);
                this.setCurrentDate(d, j, c);
                d.setDate(1);
                d = d.dateAdd("n", 1);
            }
        }
        a.style.display = "block";
        if (document.addEventListener) {
            document.addEventListener("mouseup", 
            function(l) {
                a.style.display = "none";
                document.removeEventListener("mouseup", arguments.callee, false);
            },
            false);
        } else {
            document.attachEvent("onmouseup", 
            function() {
                a.style.display = "none";
                document.detachEvent("mouseup", arguments.callee);
            });
        }
        /*var newNode = document.createElement("div");
        newNode.id = "cue-text";
        newNode.innerHTML = "&nbsp;&nbsp;请选择您的游玩时间！";
        newNode.style.cssText = "border:1px solid #90cb59; border-top:none; padding:3px; color:#555; height:20px; line-height:20px;clear:both;background:#f1f6eb";
        b.appendChild(newNode);*/
    },
    compatible: function(e, g) {
        var a = ["%y%M%d", "%y-%M-%d", "%y.%M.%d", "%y年%M月%d日", "%y年%M月%d", "%M%d%y", "%M-%d-%y", "%M.%d.%y", "%M月%d日%y年", "%M月%d日%y", "%d%M%y", "%d-%M-%y", "%d.%M.%y", "%d日%M月%y年", "%d日%M月%y", "%M/%d, %w", "%d/%M, %w", "%M/%d, %W", "%d/%M, %W", "%M/%d, %a", "%d/%M, %a", "%M/%d, %A", "%d/%M, %A"];
        var d = a.length;
        var f = null;
        var b = new Date();
        var h = e;
        f = b.validDate(e, g);
        if (!f.isValid) {
            for (var c = 0; c < d; c++) {
                f = b.validDate(e, a[c]);
                if (f.isValid) {
                    b = f.date;
                    break;
                }
            }
        } else {
            b = f.date;
        }
        h = b.format(g);
        return h;
    },
    bindCalendar: function() {
        var d = this.config.bind || [];
        var b = d.length;
        var e = null;
        var c = null;
        for (var a = 0; a < b; a++) {
            c = d[a];
            e = document.getElementById(c.ref);
            if (null != e) {
                this.setBindEvent(e, c, a);
            }
        }
    },
    setBindEvent: function(d, c, b) {
        var e = this;
        var a = this.config.format || "%y-%M-%d";
        if (document.addEventListener) {
            d.addEventListener("click", 
            function() {
                e.show(d, c.input, e.config.offsetX, e.config.offsetY, a, b);
            },
            false);
        } else {
            d.attachEvent("onclick", 
            function() {
                e.show(d, c.input, e.config.offsetX, e.config.offsetY, a, b);
            });
        }
    },
    show: function(h, j, f, e, i, g) {
        this.index = g;
        var a = this.createPanel(h, f, e);
        var b = document.getElementById(j);
        var k = null != b ? (b.value).bothTrim() : "";
        var d = new Date();
        var c = (i || "%y-%M-%d");
        k = this.compatible(k, c);
        d = d.parseDate(k, c);
        this.def_date = new Date().parseDate(k, c);
        this.createCalendar(a.panel, d, c);
    },
    hide: function() {
        var b = this.config;
        var c = this.PREFIX + "panel_" + b.id;
        var a = document.getElementById(c);
        a.style.display = "none";
        a = null;
    },
    dynamicStyle: function(a, d) {
        var e = "dynamic_style_" + (d || (new Date().getTime()));
        var c = document.getElementById(e);
        if (null == c) {
            c = document.createElement("style");
            c.type = "text/css";
            c.rel = "stylesheet";
            c.setAttribute("id", e);
            document.getElementsByTagName("head")[0].appendChild(c);
            if ("MSIE" == Browser.type) {
                //c.styleSheet.cssText = a.join("");
				isIE11 = (navigator.userAgent.toLowerCase().indexOf("trident") > -1 && navigator.userAgent.indexOf("rv") > -1);
				if(isIE11){
					c.sheet.cssText = a.join("");
				}else{
                	c.styleSheet.cssText = a.join("");
				}
            } else {
                for (var b = 0; b < a.length; b++) {
                    c.sheet.insertRule(a[b], b);
                }
            }
        }
        return c;
    },
    setCalendarCSS: function() {
        var a = [".cal-panel{font:normal normal normal 12px/16px simsun; overflow:hidden; background:#fff;-webkit-box-shadow:0px 1px 4px #999;-moz-box-shadow:0px 1px 4px #999;box-shadow:0px 1px 4px #999;}", ".cal-panel .cal-calendar-p{width:210px; height:auto; position:relative; float:left;}", ".cal-panel .cal-calendar{border:#90cb59 solid 1px; width:210px; height:auto; border-collapse:separate; *border-collapse:collapse;}", ".cal-panel .cal-calendar td{padding:0px; margin:0px; border:none;}", ".cal-panel .cal-head, .cal-panel .cal-body, .cal-panel .cal-foot{width:100%;}", ".cal-panel .cal-head td{border-bottom:#90cb59 solid 1px; height:28px; vertical-align:middle; text-align:center;}", ".cal-panel .cal-head em.cal-btn-month{display:-moz-stack-inline; display:inline-block; zoom:1; *display:inline; padding:0px; margin:0px; width:0px; height:0px; overflow:hidden; border-top:solid 7px #fff; border-bottom:solid 7px #fff; cursor:pointer; vertical-align:middle; position:absolute; top:7px;}", ".cal-panel .cal-head em.cal-btn-pre-month{border-right:solid 7px #90cb59;border-left:none; left:5px;}", ".cal-panel .cal-head em.cal-btn-next-month{border-right:none; border-left:solid 7px #90cb59; right:5px;}", ".cal-panel .cal-head span{display:-moz-stack-inline; display:inline-block; zoom:1; *display:inline; width:56px; height:22px; _height:12px; line-height:26px; margin:0px 3px; _padding:2px 0px 0px 0px; cursor:pointer; vertical-align:middle; overflow:hidden;}", ".cal-panel .cal-head code{display:inline; margin:0px 2px 0px 0px;}", ".cal-panel .cal-head em.cal-down{display:-moz-stack-inline; display:inline-block; zoom:1; *display:inline; margin:0px 0px 0px 2px; width:0px; height:0px; border-left:solid 4px #fff; border-right:solid 4px #fff; border-top:solid 4px #90cb59;border-bottom:none; cursor:pointer; vertical-align:2px; overflow:hidden;}", ".cal-panel .cal-head div.cal-year-list{position:absolute; left:30px; top:22px; border:1px solid #90cb59; background:#f8f8f8; width:48px; height:146px;}", ".cal-panel .cal-head div.cal-pre-date{width:0px; height:0px; border-left:solid 4px #90cb59; border-right:solid 4px #90cb59; border-bottom:solid 4px #90cb59; margin:3px auto; cursor:pointer; overflow:hidden;}", ".cal-panel .cal-head div.cal-next-date{width:0px; height:0px; border-left:solid 3px #f8f8f8; border-right:solid 3px #f8f8f8; border-top:solid 3px #90cb59; margin:3px auto; cursor:pointer; overflow:hidden;}", ".cal-panel .cal-head div.cal-list-year{height:16px; line-height:16px; overflow:hidden; cursor:pointer; color:#666;}", ".cal-panel .cal-head div.cal-list-year-hovr{height:16px; line-height:16px; overflow:hidden; cursor:pointer; background:#90cb59; color:#fff;}", ".cal-panel .cal-head div.cal-month-list{position:absolute; left:94px; top:22px; border:1px solid #90cb59; background:#f8f8f8; width:48px; height:146px;}", ".cal-panel .cal-head div.cal-list-month{height:16px; line-height:16px; overflow:hidden; cursor:pointer; color:#666;}", ".cal-panel .cal-head div.cal-list-month-hovr{height:16px; line-height:16px; overflow:hidden; cursor:pointer; background:#90cb59; color:#fff;}", ".cal-panel .cal-week td{border-bottom:#90cb59 solid 1px; width:30px; height:25px; text-align:center; color:#333;}", ".cal-panel .cal-date td{width:30px; height:25px; text-align:center; color:#333; cursor:pointer;}", ".cal-panel .cal-date td.cal-null{cursor:default;}", ".cal-panel .cal-date td.cal-current{color:##333333;}", ".cal-panel .cal-date td.cal-current_wg{background:none; color:#999;}", ".cal-panel .cal-date td.cal-disabled{color:#999; cursor:default;}", ".cal-panel .cal-date td.cal-disabled-current{background:#90cb59; color:#fff; cursor:default;}", ".cal-panel .cal-date td.cal-not-in-range{color:#999;}", ".cal-panel .cal-date td.cal-mover{background:#90cb59; color:#fff;}", ".cal-panel .cal-date td.cal-def-date{background:#90cb59; color:#fff;}", ".cal-panel .cal-foot td{border-top:#90cb59 solid 1px; height:25px; vertical-align:middle; text-align:center;}", ".cal-panel .cal-foot button{border:none; background:#fff; font:normal normal normal 12px/16px simsun; color:#333; cursor:pointer;}", "#CALENDAR_tr_date_0_0_0_6,#CALENDAR_tr_date_0_0_1_6{}"];
        this.dynamicStyle(a, "calendar_v1.5");
    }
};
