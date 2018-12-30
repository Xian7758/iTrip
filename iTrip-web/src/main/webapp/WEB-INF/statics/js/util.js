/***********
*时间辅助类
***********/
var DateHelper = {
    //得到两个时间的差值（天数）
    DateDiff: function (startDate, endDate) {
        var strSeparator = "-"; //日期分隔符
        var oDate1;
        var oDate2;
        var iDays;
        oDate1 = startDate.split(strSeparator);
        oDate2 = endDate.split(strSeparator);
        var strDateS = new Date(oDate1[0], oDate1[1] - 1, oDate1[2]);
        var strDateE = new Date(oDate2[0], oDate2[1] - 1, oDate2[2]);
        iDays = parseInt(Math.abs(strDateS - strDateE) / 1000 / 60 / 60 / 24)//把相差的毫秒数转换为天数
        return iDays;
    },
    DateDiff1: function (strDateS, strDateE) {
        var iDasy;
        iDays = parseInt(Math.abs(strDateS - strDateE) / 1000 / 60 / 60 / 24)//把相差的毫秒数转换为天数
        return iDays;
    },
    //比较时间大小
    DateCompare: function (startDate, endDate) {
        var result = false;
        if (new Date(endDate.replace(new RegExp(/-/gm), "/")) > new Date(startDate.replace(new RegExp(/-/gm), "/"))) {
            result = true;
        }
        return result;
    }
};
/***********
*常用验证类
***********/
var Validator = {
    // 中文
    isChinese: function (s) {
        var p = /^[\u4e00-\u9fa5]+$/;
        return this.test(s, p);
    },
    // 英文
    isEnglish: function (s) {
        var p = /^[A-Za-z]+$/;
        return this.test(s, p);
    },
    // 邮箱
    isEmail: function (s) {
        var p = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        return this.test(s, p);
    },


    // 手机号码
    isMobile: function (s) {
        return this.test(s, /(\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{3,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$/);
    },
    // 电话号码
    isPhone: function (s) {
        return this.test(s, /^[0-9]{3,4}\-[0-9]{7,8}$/);
    },
    // 邮编
    isPostCode: function (s) {
        return this.test(s, /^[1-9][0-9]{5}$/);
    },
    // 数字
    isNumber: function (s, d) {
        return !isNaN(s.nodeType == 1 ? s.value : s) && (!d || !this.test(s, '^-?[0-9]*\\.[0-9]*$'));
    },
    //是否为正整数
    isInter: function (s) {
        var re = /^[0-9]+$/;
        return re.test(s)
    },
    // 判断是否为空
    isEmpty: function (s) {
        return jQuery.isEmptyObject(s) || (s == "" ? true : false);
    },
    //判断是否是图片
    isImage: function (s) {
        return this.test(s, /\.(gif|jpg|jpeg|png|GIF|JPG|PNG)$/);
    },
    // 正则匹配
    test: function (s, p) {
        s = s.nodeType == 1 ? s.value : s;
        return new RegExp(p).test(s);
    }
};

//去除字符串头尾空格或指定字符  
String.prototype.Trim = function (c) {
    if (c == null || c == "") {
        var str = this.replace(/^s*/, '');
        var rg = /s/;
        var i = str.length;
        while (rg.test(str.charAt(--i)));
        return str.slice(0, i + 1);
    }
    else {
        var rg = new RegExp("^" + c + "*");
        var str = this.replace(rg, '');
        rg = new RegExp(c);
        var i = str.length;
        while (rg.test(str.charAt(--i)));
        return str.slice(0, i + 1);
    }
}

//去除字符串头部空格或指定字符  
String.prototype.TrimStart = function (c) {
    if (c == null || c == "") {
        var str = this.replace(/^s*/, '');
        return str;
    }
    else {
        var rg = new RegExp("^" + c + "*");
        var str = this.replace(rg, '');
        return str;
    }
}

//去除字符串尾部空格或指定字符  
String.prototype.trimEnd = function (c) {
    if (c == null || c == "") {
        var str = this;
        var rg = /s/;
        var i = str.length;
        while (rg.test(str.charAt(--i)));
        return str.slice(0, i + 1);
    }
    else {
        var str = this;
        var rg = new RegExp(c);
        var i = str.length;
        while (rg.test(str.charAt(--i)));
        return str.slice(0, i + 1);
    }
}

//修改字符长度，超过者以...代替
String.prototype.FixedLenth = function (length, ext) {
    var str = this;

    if (ext == undefined || ext == null) {
        ext = "...";
    }

    if (length == null || length == "") {
        length = 10;
    }

    if (str.length > length) {
        str = str.substring(0, length) + ext;
    }

    return str;
}