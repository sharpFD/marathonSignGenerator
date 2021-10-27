var r;
function a(e, t) {
    var n = (65535 & e) + (65535 & t)
        , r = (e >> 16) + (t >> 16) + (n >> 16);
    return r << 16 | 65535 & n
}
function o(e, t) {
    return e << t | e >>> 32 - t
}
function s(e, t, n, r, i, s) {
    return a(o(a(a(t, e), a(r, s)), i), n)
}
function c(e, t, n, r, i, a, o) {
    return s(t & n | ~t & r, e, t, i, a, o)
}
function l(e, t, n, r, i, a, o) {
    return s(t & r | n & ~r, e, t, i, a, o)
}
function u(e, t, n, r, i, a, o) {
    return s(t ^ n ^ r, e, t, i, a, o)
}
function f(e, t, n, r, i, a, o) {
    return s(n ^ (t | ~r), e, t, i, a, o)
}
function d(e, t) {
    var n, r, i, o, s;
    e[t >> 5] |= 128 << t % 32,
        e[14 + (t + 64 >>> 9 << 4)] = t;
    var d = 1732584193
        , p = -271733879
        , h = -1732584194
        , v = 271733878;
    for (n = 0; n < e.length; n += 16)
        r = d,
            i = p,
            o = h,
            s = v,
            d = c(d, p, h, v, e[n], 7, -680876936),
            v = c(v, d, p, h, e[n + 1], 12, -389564586),
            h = c(h, v, d, p, e[n + 2], 17, 606105819),
            p = c(p, h, v, d, e[n + 3], 22, -1044525330),
            d = c(d, p, h, v, e[n + 4], 7, -176418897),
            v = c(v, d, p, h, e[n + 5], 12, 1200080426),
            h = c(h, v, d, p, e[n + 6], 17, -1473231341),
            p = c(p, h, v, d, e[n + 7], 22, -45705983),
            d = c(d, p, h, v, e[n + 8], 7, 1770035416),
            v = c(v, d, p, h, e[n + 9], 12, -1958414417),
            h = c(h, v, d, p, e[n + 10], 17, -42063),
            p = c(p, h, v, d, e[n + 11], 22, -1990404162),
            d = c(d, p, h, v, e[n + 12], 7, 1804603682),
            v = c(v, d, p, h, e[n + 13], 12, -40341101),
            h = c(h, v, d, p, e[n + 14], 17, -1502002290),
            p = c(p, h, v, d, e[n + 15], 22, 1236535329),
            d = l(d, p, h, v, e[n + 1], 5, -165796510),
            v = l(v, d, p, h, e[n + 6], 9, -1069501632),
            h = l(h, v, d, p, e[n + 11], 14, 643717713),
            p = l(p, h, v, d, e[n], 20, -373897302),
            d = l(d, p, h, v, e[n + 5], 5, -701558691),
            v = l(v, d, p, h, e[n + 10], 9, 38016083),
            h = l(h, v, d, p, e[n + 15], 14, -660478335),
            p = l(p, h, v, d, e[n + 4], 20, -405537848),
            d = l(d, p, h, v, e[n + 9], 5, 568446438),
            v = l(v, d, p, h, e[n + 14], 9, -1019803690),
            h = l(h, v, d, p, e[n + 3], 14, -187363961),
            p = l(p, h, v, d, e[n + 8], 20, 1163531501),
            d = l(d, p, h, v, e[n + 13], 5, -1444681467),
            v = l(v, d, p, h, e[n + 2], 9, -51403784),
            h = l(h, v, d, p, e[n + 7], 14, 1735328473),
            p = l(p, h, v, d, e[n + 12], 20, -1926607734),
            d = u(d, p, h, v, e[n + 5], 4, -378558),
            v = u(v, d, p, h, e[n + 8], 11, -2022574463),
            h = u(h, v, d, p, e[n + 11], 16, 1839030562),
            p = u(p, h, v, d, e[n + 14], 23, -35309556),
            d = u(d, p, h, v, e[n + 1], 4, -1530992060),
            v = u(v, d, p, h, e[n + 4], 11, 1272893353),
            h = u(h, v, d, p, e[n + 7], 16, -155497632),
            p = u(p, h, v, d, e[n + 10], 23, -1094730640),
            d = u(d, p, h, v, e[n + 13], 4, 681279174),
            v = u(v, d, p, h, e[n], 11, -358537222),
            h = u(h, v, d, p, e[n + 3], 16, -722521979),
            p = u(p, h, v, d, e[n + 6], 23, 76029189),
            d = u(d, p, h, v, e[n + 9], 4, -640364487),
            v = u(v, d, p, h, e[n + 12], 11, -421815835),
            h = u(h, v, d, p, e[n + 15], 16, 530742520),
            p = u(p, h, v, d, e[n + 2], 23, -995338651),
            d = f(d, p, h, v, e[n], 6, -198630844),
            v = f(v, d, p, h, e[n + 7], 10, 1126891415),
            h = f(h, v, d, p, e[n + 14], 15, -1416354905),
            p = f(p, h, v, d, e[n + 5], 21, -57434055),
            d = f(d, p, h, v, e[n + 12], 6, 1700485571),
            v = f(v, d, p, h, e[n + 3], 10, -1894986606),
            h = f(h, v, d, p, e[n + 10], 15, -1051523),
            p = f(p, h, v, d, e[n + 1], 21, -2054922799),
            d = f(d, p, h, v, e[n + 8], 6, 1873313359),
            v = f(v, d, p, h, e[n + 15], 10, -30611744),
            h = f(h, v, d, p, e[n + 6], 15, -1560198380),
            p = f(p, h, v, d, e[n + 13], 21, 1309151649),
            d = f(d, p, h, v, e[n + 4], 6, -145523070),
            v = f(v, d, p, h, e[n + 11], 10, -1120210379),
            h = f(h, v, d, p, e[n + 2], 15, 718787259),
            p = f(p, h, v, d, e[n + 9], 21, -343485551),
            d = a(d, r),
            p = a(p, i),
            h = a(h, o),
            v = a(v, s);
    return [d, p, h, v]
}
function p(e) {
    var t, n = "", r = 32 * e.length;
    for (t = 0; t < r; t += 8)
        n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
    return n
}
function h(e) {
    var t, n = [];
    for (n[(e.length >> 2) - 1] = void 0,
             t = 0; t < n.length; t += 1)
        n[t] = 0;
    var r = 8 * e.length;
    for (t = 0; t < r; t += 8)
        n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
    console.log('hh', n);
    console.log('t',t);
    console.log('n',n);
    console.log('e',e);
    return n
}
function v(e) {
    return p(d(h(e), 8 * e.length))
}
function m(e, t) {
    var n, r, i = h(e), a = [], o = [];
    for (a[15] = o[15] = void 0,
         i.length > 16 && (i = d(i, 8 * e.length)),
             n = 0; n < 16; n += 1)
        a[n] = 909522486 ^ i[n],
            o[n] = 1549556828 ^ i[n];
    return r = d(a.concat(h(t)), 512 + 8 * t.length),
        p(d(o.concat(r), 640))
}
function g(e) {
    var t, n, r = "0123456789abcdef", i = "";
    for (n = 0; n < e.length; n += 1)
        t = e.charCodeAt(n),
            i += r.charAt(t >>> 4 & 15) + r.charAt(15 & t);
    return i
}
function y(e) {
    return unescape(encodeURIComponent(e))
}
function b(e) {
    return v(y(e))
}
function w(e) {
    console.log('wwwwwwww', e);
    return g(b(e))
}
function _(e, t) {
    return m(y(e), y(t))
}
function x(e, t) {
    return g(_(e, t))
}
function S(e, t, n) {
    console.log('S中的E',e);
    return t ? n ? _(t, e) : x(t, e) : n ? b(e) : w(e)
}
/*  r = function() {
     return S
 }
 .call(t, n, t, e), */

function generatorMarathonSign (base, extra) {
    return S(base + extra,null,null)
}


let base = "appid=5PFuGr3Q7AA0vbJAFior&channel=windows-PC&device_id=Z8T23iCPme3DWGRAQLpJO2w0qY2Kq9-R&language=zh-CN&model=&noncesr=1635235066721&sys_version=&ts=1635235066&version=V1.0"
const extra = "xbbaUe8PPVblLWaVP-iIJnUGhnDXmrm_"
console.log(generatorMarathonSign(base, extra));

//"1a95dcd95845fef1f19af0ac0bbde5fd"