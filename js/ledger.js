!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).buffer=t()}}(function(){return function(){return function t(r,e,n){function i(f,u){if(!e[f]){if(!r[f]){var s="function"==typeof require&&require;if(!u&&s)return s(f,!0);if(o)return o(f,!0);var h=new Error("Cannot find module '"+f+"'");throw h.code="MODULE_NOT_FOUND",h}var a=e[f]={exports:{}};r[f][0].call(a.exports,function(t){return i(r[f][1][t]||t)},a,a.exports,t,r,e,n)}return e[f].exports}for(var o="function"==typeof require&&require,f=0;f<n.length;f++)i(n[f]);return i}}()({1:[function(t,r,e){(function(r){"use strict";var n=t("base64-js"),i=t("ieee754");e.Buffer=r,e.SlowBuffer=function(t){+t!=t&&(t=0);return r.alloc(+t)},e.INSPECT_MAX_BYTES=50;var o=2147483647;function f(t){if(t>o)throw new RangeError('The value "'+t+'" is invalid for option "size"');var e=new Uint8Array(t);return e.__proto__=r.prototype,e}function r(t,r,e){if("number"==typeof t){if("string"==typeof r)throw new TypeError('The "string" argument must be of type string. Received type number');return h(t)}return u(t,r,e)}function u(t,e,n){if("string"==typeof t)return function(t,e){"string"==typeof e&&""!==e||(e="utf8");if(!r.isEncoding(e))throw new TypeError("Unknown encoding: "+e);var n=0|c(t,e),i=f(n),o=i.write(t,e);o!==n&&(i=i.slice(0,o));return i}(t,e);if(ArrayBuffer.isView(t))return a(t);if(null==t)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(z(t,ArrayBuffer)||t&&z(t.buffer,ArrayBuffer))return function(t,e,n){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(n||0))throw new RangeError('"length" is outside of buffer bounds');var i;i=void 0===e&&void 0===n?new Uint8Array(t):void 0===n?new Uint8Array(t,e):new Uint8Array(t,e,n);return i.__proto__=r.prototype,i}(t,e,n);if("number"==typeof t)throw new TypeError('The "value" argument must not be of type number. Received type number');var i=t.valueOf&&t.valueOf();if(null!=i&&i!==t)return r.from(i,e,n);var o=function(t){if(r.isBuffer(t)){var e=0|p(t.length),n=f(e);return 0===n.length?n:(t.copy(n,0,0,e),n)}if(void 0!==t.length)return"number"!=typeof t.length||D(t.length)?f(0):a(t);if("Buffer"===t.type&&Array.isArray(t.data))return a(t.data)}(t);if(o)return o;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return r.from(t[Symbol.toPrimitive]("string"),e,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function s(t){if("number"!=typeof t)throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function h(t){return s(t),f(t<0?0:0|p(t))}function a(t){for(var r=t.length<0?0:0|p(t.length),e=f(r),n=0;n<r;n+=1)e[n]=255&t[n];return e}function p(t){if(t>=o)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+o.toString(16)+" bytes");return 0|t}function c(t,e){if(r.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||z(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);var n=t.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===n)return 0;for(var o=!1;;)switch(e){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return N(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return P(t).length;default:if(o)return i?-1:N(t).length;e=(""+e).toLowerCase(),o=!0}}function l(t,r,e){var n=t[r];t[r]=t[e],t[e]=n}function y(t,e,n,i,o){if(0===t.length)return-1;if("string"==typeof n?(i=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),D(n=+n)&&(n=o?0:t.length-1),n<0&&(n=t.length+n),n>=t.length){if(o)return-1;n=t.length-1}else if(n<0){if(!o)return-1;n=0}if("string"==typeof e&&(e=r.from(e,i)),r.isBuffer(e))return 0===e.length?-1:g(t,e,n,i,o);if("number"==typeof e)return e&=255,"function"==typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(t,e,n):Uint8Array.prototype.lastIndexOf.call(t,e,n):g(t,[e],n,i,o);throw new TypeError("val must be string, number or Buffer")}function g(t,r,e,n,i){var o,f=1,u=t.length,s=r.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||r.length<2)return-1;f=2,u/=2,s/=2,e/=2}function h(t,r){return 1===f?t[r]:t.readUInt16BE(r*f)}if(i){var a=-1;for(o=e;o<u;o++)if(h(t,o)===h(r,-1===a?0:o-a)){if(-1===a&&(a=o),o-a+1===s)return a*f}else-1!==a&&(o-=o-a),a=-1}else for(e+s>u&&(e=u-s),o=e;o>=0;o--){for(var p=!0,c=0;c<s;c++)if(h(t,o+c)!==h(r,c)){p=!1;break}if(p)return o}return-1}function w(t,r,e,n){e=Number(e)||0;var i=t.length-e;n?(n=Number(n))>i&&(n=i):n=i;var o=r.length;n>o/2&&(n=o/2);for(var f=0;f<n;++f){var u=parseInt(r.substr(2*f,2),16);if(D(u))return f;t[e+f]=u}return f}function d(t,r,e,n){return j(N(r,t.length-e),t,e,n)}function v(t,r,e,n){return j(function(t){for(var r=[],e=0;e<t.length;++e)r.push(255&t.charCodeAt(e));return r}(r),t,e,n)}function b(t,r,e,n){return v(t,r,e,n)}function m(t,r,e,n){return j(P(r),t,e,n)}function E(t,r,e,n){return j(function(t,r){for(var e,n,i,o=[],f=0;f<t.length&&!((r-=2)<0);++f)e=t.charCodeAt(f),n=e>>8,i=e%256,o.push(i),o.push(n);return o}(r,t.length-e),t,e,n)}function A(t,r,e){return 0===r&&e===t.length?n.fromByteArray(t):n.fromByteArray(t.slice(r,e))}function B(t,r,e){e=Math.min(t.length,e);for(var n=[],i=r;i<e;){var o,f,u,s,h=t[i],a=null,p=h>239?4:h>223?3:h>191?2:1;if(i+p<=e)switch(p){case 1:h<128&&(a=h);break;case 2:128==(192&(o=t[i+1]))&&(s=(31&h)<<6|63&o)>127&&(a=s);break;case 3:o=t[i+1],f=t[i+2],128==(192&o)&&128==(192&f)&&(s=(15&h)<<12|(63&o)<<6|63&f)>2047&&(s<55296||s>57343)&&(a=s);break;case 4:o=t[i+1],f=t[i+2],u=t[i+3],128==(192&o)&&128==(192&f)&&128==(192&u)&&(s=(15&h)<<18|(63&o)<<12|(63&f)<<6|63&u)>65535&&s<1114112&&(a=s)}null===a?(a=65533,p=1):a>65535&&(a-=65536,n.push(a>>>10&1023|55296),a=56320|1023&a),n.push(a),i+=p}return function(t){var r=t.length;if(r<=U)return String.fromCharCode.apply(String,t);var e="",n=0;for(;n<r;)e+=String.fromCharCode.apply(String,t.slice(n,n+=U));return e}(n)}e.kMaxLength=o,r.TYPED_ARRAY_SUPPORT=function(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()}catch(t){return!1}}(),r.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(r.prototype,"parent",{enumerable:!0,get:function(){if(r.isBuffer(this))return this.buffer}}),Object.defineProperty(r.prototype,"offset",{enumerable:!0,get:function(){if(r.isBuffer(this))return this.byteOffset}}),"undefined"!=typeof Symbol&&null!=Symbol.species&&r[Symbol.species]===r&&Object.defineProperty(r,Symbol.species,{value:null,configurable:!0,enumerable:!1,writable:!1}),r.poolSize=8192,r.from=function(t,r,e){return u(t,r,e)},r.prototype.__proto__=Uint8Array.prototype,r.__proto__=Uint8Array,r.alloc=function(t,r,e){return function(t,r,e){return s(t),t<=0?f(t):void 0!==r?"string"==typeof e?f(t).fill(r,e):f(t).fill(r):f(t)}(t,r,e)},r.allocUnsafe=function(t){return h(t)},r.allocUnsafeSlow=function(t){return h(t)},r.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==r.prototype},r.compare=function(t,e){if(z(t,Uint8Array)&&(t=r.from(t,t.offset,t.byteLength)),z(e,Uint8Array)&&(e=r.from(e,e.offset,e.byteLength)),!r.isBuffer(t)||!r.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;for(var n=t.length,i=e.length,o=0,f=Math.min(n,i);o<f;++o)if(t[o]!==e[o]){n=t[o],i=e[o];break}return n<i?-1:i<n?1:0},r.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},r.concat=function(t,e){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return r.alloc(0);var n;if(void 0===e)for(e=0,n=0;n<t.length;++n)e+=t[n].length;var i=r.allocUnsafe(e),o=0;for(n=0;n<t.length;++n){var f=t[n];if(z(f,Uint8Array)&&(f=r.from(f)),!r.isBuffer(f))throw new TypeError('"list" argument must be an Array of Buffers');f.copy(i,o),o+=f.length}return i},r.byteLength=c,r.prototype._isBuffer=!0,r.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<t;r+=2)l(this,r,r+1);return this},r.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<t;r+=4)l(this,r,r+3),l(this,r+1,r+2);return this},r.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<t;r+=8)l(this,r,r+7),l(this,r+1,r+6),l(this,r+2,r+5),l(this,r+3,r+4);return this},r.prototype.toString=function(){var t=this.length;return 0===t?"":0===arguments.length?B(this,0,t):function(t,r,e){var n=!1;if((void 0===r||r<0)&&(r=0),r>this.length)return"";if((void 0===e||e>this.length)&&(e=this.length),e<=0)return"";if((e>>>=0)<=(r>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return I(this,r,e);case"utf8":case"utf-8":return B(this,r,e);case"ascii":return _(this,r,e);case"latin1":case"binary":return T(this,r,e);case"base64":return A(this,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return S(this,r,e);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}.apply(this,arguments)},r.prototype.toLocaleString=r.prototype.toString,r.prototype.equals=function(t){if(!r.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===r.compare(this,t)},r.prototype.inspect=function(){var t="",r=e.INSPECT_MAX_BYTES;return t=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(t+=" ... "),"<Buffer "+t+">"},r.prototype.compare=function(t,e,n,i,o){if(z(t,Uint8Array)&&(t=r.from(t,t.offset,t.byteLength)),!r.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===n&&(n=t?t.length:0),void 0===i&&(i=0),void 0===o&&(o=this.length),e<0||n>t.length||i<0||o>this.length)throw new RangeError("out of range index");if(i>=o&&e>=n)return 0;if(i>=o)return-1;if(e>=n)return 1;if(this===t)return 0;for(var f=(o>>>=0)-(i>>>=0),u=(n>>>=0)-(e>>>=0),s=Math.min(f,u),h=this.slice(i,o),a=t.slice(e,n),p=0;p<s;++p)if(h[p]!==a[p]){f=h[p],u=a[p];break}return f<u?-1:u<f?1:0},r.prototype.includes=function(t,r,e){return-1!==this.indexOf(t,r,e)},r.prototype.indexOf=function(t,r,e){return y(this,t,r,e,!0)},r.prototype.lastIndexOf=function(t,r,e){return y(this,t,r,e,!1)},r.prototype.write=function(t,r,e,n){if(void 0===r)n="utf8",e=this.length,r=0;else if(void 0===e&&"string"==typeof r)n=r,e=this.length,r=0;else{if(!isFinite(r))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");r>>>=0,isFinite(e)?(e>>>=0,void 0===n&&(n="utf8")):(n=e,e=void 0)}var i=this.length-r;if((void 0===e||e>i)&&(e=i),t.length>0&&(e<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var o=!1;;)switch(n){case"hex":return w(this,t,r,e);case"utf8":case"utf-8":return d(this,t,r,e);case"ascii":return v(this,t,r,e);case"latin1":case"binary":return b(this,t,r,e);case"base64":return m(this,t,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return E(this,t,r,e);default:if(o)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),o=!0}},r.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var U=4096;function _(t,r,e){var n="";e=Math.min(t.length,e);for(var i=r;i<e;++i)n+=String.fromCharCode(127&t[i]);return n}function T(t,r,e){var n="";e=Math.min(t.length,e);for(var i=r;i<e;++i)n+=String.fromCharCode(t[i]);return n}function I(t,r,e){var n=t.length;(!r||r<0)&&(r=0),(!e||e<0||e>n)&&(e=n);for(var i="",o=r;o<e;++o)i+=k(t[o]);return i}function S(t,r,e){for(var n=t.slice(r,e),i="",o=0;o<n.length;o+=2)i+=String.fromCharCode(n[o]+256*n[o+1]);return i}function C(t,r,e){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+r>e)throw new RangeError("Trying to access beyond buffer length")}function L(t,e,n,i,o,f){if(!r.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>o||e<f)throw new RangeError('"value" argument is out of bounds');if(n+i>t.length)throw new RangeError("Index out of range")}function R(t,r,e,n,i,o){if(e+n>t.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("Index out of range")}function x(t,r,e,n,o){return r=+r,e>>>=0,o||R(t,0,e,4),i.write(t,r,e,n,23,4),e+4}function M(t,r,e,n,o){return r=+r,e>>>=0,o||R(t,0,e,8),i.write(t,r,e,n,52,8),e+8}r.prototype.slice=function(t,e){var n=this.length;(t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(e=void 0===e?n:~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),e<t&&(e=t);var i=this.subarray(t,e);return i.__proto__=r.prototype,i},r.prototype.readUIntLE=function(t,r,e){t>>>=0,r>>>=0,e||C(t,r,this.length);for(var n=this[t],i=1,o=0;++o<r&&(i*=256);)n+=this[t+o]*i;return n},r.prototype.readUIntBE=function(t,r,e){t>>>=0,r>>>=0,e||C(t,r,this.length);for(var n=this[t+--r],i=1;r>0&&(i*=256);)n+=this[t+--r]*i;return n},r.prototype.readUInt8=function(t,r){return t>>>=0,r||C(t,1,this.length),this[t]},r.prototype.readUInt16LE=function(t,r){return t>>>=0,r||C(t,2,this.length),this[t]|this[t+1]<<8},r.prototype.readUInt16BE=function(t,r){return t>>>=0,r||C(t,2,this.length),this[t]<<8|this[t+1]},r.prototype.readUInt32LE=function(t,r){return t>>>=0,r||C(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},r.prototype.readUInt32BE=function(t,r){return t>>>=0,r||C(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},r.prototype.readIntLE=function(t,r,e){t>>>=0,r>>>=0,e||C(t,r,this.length);for(var n=this[t],i=1,o=0;++o<r&&(i*=256);)n+=this[t+o]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*r)),n},r.prototype.readIntBE=function(t,r,e){t>>>=0,r>>>=0,e||C(t,r,this.length);for(var n=r,i=1,o=this[t+--n];n>0&&(i*=256);)o+=this[t+--n]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*r)),o},r.prototype.readInt8=function(t,r){return t>>>=0,r||C(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},r.prototype.readInt16LE=function(t,r){t>>>=0,r||C(t,2,this.length);var e=this[t]|this[t+1]<<8;return 32768&e?4294901760|e:e},r.prototype.readInt16BE=function(t,r){t>>>=0,r||C(t,2,this.length);var e=this[t+1]|this[t]<<8;return 32768&e?4294901760|e:e},r.prototype.readInt32LE=function(t,r){return t>>>=0,r||C(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},r.prototype.readInt32BE=function(t,r){return t>>>=0,r||C(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},r.prototype.readFloatLE=function(t,r){return t>>>=0,r||C(t,4,this.length),i.read(this,t,!0,23,4)},r.prototype.readFloatBE=function(t,r){return t>>>=0,r||C(t,4,this.length),i.read(this,t,!1,23,4)},r.prototype.readDoubleLE=function(t,r){return t>>>=0,r||C(t,8,this.length),i.read(this,t,!0,52,8)},r.prototype.readDoubleBE=function(t,r){return t>>>=0,r||C(t,8,this.length),i.read(this,t,!1,52,8)},r.prototype.writeUIntLE=function(t,r,e,n){(t=+t,r>>>=0,e>>>=0,n)||L(this,t,r,e,Math.pow(2,8*e)-1,0);var i=1,o=0;for(this[r]=255&t;++o<e&&(i*=256);)this[r+o]=t/i&255;return r+e},r.prototype.writeUIntBE=function(t,r,e,n){(t=+t,r>>>=0,e>>>=0,n)||L(this,t,r,e,Math.pow(2,8*e)-1,0);var i=e-1,o=1;for(this[r+i]=255&t;--i>=0&&(o*=256);)this[r+i]=t/o&255;return r+e},r.prototype.writeUInt8=function(t,r,e){return t=+t,r>>>=0,e||L(this,t,r,1,255,0),this[r]=255&t,r+1},r.prototype.writeUInt16LE=function(t,r,e){return t=+t,r>>>=0,e||L(this,t,r,2,65535,0),this[r]=255&t,this[r+1]=t>>>8,r+2},r.prototype.writeUInt16BE=function(t,r,e){return t=+t,r>>>=0,e||L(this,t,r,2,65535,0),this[r]=t>>>8,this[r+1]=255&t,r+2},r.prototype.writeUInt32LE=function(t,r,e){return t=+t,r>>>=0,e||L(this,t,r,4,4294967295,0),this[r+3]=t>>>24,this[r+2]=t>>>16,this[r+1]=t>>>8,this[r]=255&t,r+4},r.prototype.writeUInt32BE=function(t,r,e){return t=+t,r>>>=0,e||L(this,t,r,4,4294967295,0),this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t,r+4},r.prototype.writeIntLE=function(t,r,e,n){if(t=+t,r>>>=0,!n){var i=Math.pow(2,8*e-1);L(this,t,r,e,i-1,-i)}var o=0,f=1,u=0;for(this[r]=255&t;++o<e&&(f*=256);)t<0&&0===u&&0!==this[r+o-1]&&(u=1),this[r+o]=(t/f>>0)-u&255;return r+e},r.prototype.writeIntBE=function(t,r,e,n){if(t=+t,r>>>=0,!n){var i=Math.pow(2,8*e-1);L(this,t,r,e,i-1,-i)}var o=e-1,f=1,u=0;for(this[r+o]=255&t;--o>=0&&(f*=256);)t<0&&0===u&&0!==this[r+o+1]&&(u=1),this[r+o]=(t/f>>0)-u&255;return r+e},r.prototype.writeInt8=function(t,r,e){return t=+t,r>>>=0,e||L(this,t,r,1,127,-128),t<0&&(t=255+t+1),this[r]=255&t,r+1},r.prototype.writeInt16LE=function(t,r,e){return t=+t,r>>>=0,e||L(this,t,r,2,32767,-32768),this[r]=255&t,this[r+1]=t>>>8,r+2},r.prototype.writeInt16BE=function(t,r,e){return t=+t,r>>>=0,e||L(this,t,r,2,32767,-32768),this[r]=t>>>8,this[r+1]=255&t,r+2},r.prototype.writeInt32LE=function(t,r,e){return t=+t,r>>>=0,e||L(this,t,r,4,2147483647,-2147483648),this[r]=255&t,this[r+1]=t>>>8,this[r+2]=t>>>16,this[r+3]=t>>>24,r+4},r.prototype.writeInt32BE=function(t,r,e){return t=+t,r>>>=0,e||L(this,t,r,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t,r+4},r.prototype.writeFloatLE=function(t,r,e){return x(this,t,r,!0,e)},r.prototype.writeFloatBE=function(t,r,e){return x(this,t,r,!1,e)},r.prototype.writeDoubleLE=function(t,r,e){return M(this,t,r,!0,e)},r.prototype.writeDoubleBE=function(t,r,e){return M(this,t,r,!1,e)},r.prototype.copy=function(t,e,n,i){if(!r.isBuffer(t))throw new TypeError("argument should be a Buffer");if(n||(n=0),i||0===i||(i=this.length),e>=t.length&&(e=t.length),e||(e=0),i>0&&i<n&&(i=n),i===n)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),t.length-e<i-n&&(i=t.length-e+n);var o=i-n;if(this===t&&"function"==typeof Uint8Array.prototype.copyWithin)this.copyWithin(e,n,i);else if(this===t&&n<e&&e<i)for(var f=o-1;f>=0;--f)t[f+e]=this[f+n];else Uint8Array.prototype.set.call(t,this.subarray(n,i),e);return o},r.prototype.fill=function(t,e,n,i){if("string"==typeof t){if("string"==typeof e?(i=e,e=0,n=this.length):"string"==typeof n&&(i=n,n=this.length),void 0!==i&&"string"!=typeof i)throw new TypeError("encoding must be a string");if("string"==typeof i&&!r.isEncoding(i))throw new TypeError("Unknown encoding: "+i);if(1===t.length){var o=t.charCodeAt(0);("utf8"===i&&o<128||"latin1"===i)&&(t=o)}}else"number"==typeof t&&(t&=255);if(e<0||this.length<e||this.length<n)throw new RangeError("Out of range index");if(n<=e)return this;var f;if(e>>>=0,n=void 0===n?this.length:n>>>0,t||(t=0),"number"==typeof t)for(f=e;f<n;++f)this[f]=t;else{var u=r.isBuffer(t)?t:r.from(t,i),s=u.length;if(0===s)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(f=0;f<n-e;++f)this[f+e]=u[f%s]}return this};var O=/[^+\/0-9A-Za-z-_]/g;function k(t){return t<16?"0"+t.toString(16):t.toString(16)}function N(t,r){var e;r=r||1/0;for(var n=t.length,i=null,o=[],f=0;f<n;++f){if((e=t.charCodeAt(f))>55295&&e<57344){if(!i){if(e>56319){(r-=3)>-1&&o.push(239,191,189);continue}if(f+1===n){(r-=3)>-1&&o.push(239,191,189);continue}i=e;continue}if(e<56320){(r-=3)>-1&&o.push(239,191,189),i=e;continue}e=65536+(i-55296<<10|e-56320)}else i&&(r-=3)>-1&&o.push(239,191,189);if(i=null,e<128){if((r-=1)<0)break;o.push(e)}else if(e<2048){if((r-=2)<0)break;o.push(e>>6|192,63&e|128)}else if(e<65536){if((r-=3)<0)break;o.push(e>>12|224,e>>6&63|128,63&e|128)}else{if(!(e<1114112))throw new Error("Invalid code point");if((r-=4)<0)break;o.push(e>>18|240,e>>12&63|128,e>>6&63|128,63&e|128)}}return o}function P(t){return n.toByteArray(function(t){if((t=(t=t.split("=")[0]).trim().replace(O,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function j(t,r,e,n){for(var i=0;i<n&&!(i+e>=r.length||i>=t.length);++i)r[i+e]=t[i];return i}function z(t,r){return t instanceof r||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===r.name}function D(t){return t!=t}}).call(this,t("buffer").Buffer)},{"base64-js":2,buffer:5,ieee754:3}],2:[function(t,r,e){"use strict";e.byteLength=function(t){var r=h(t),e=r[0],n=r[1];return 3*(e+n)/4-n},e.toByteArray=function(t){for(var r,e=h(t),n=e[0],f=e[1],u=new o(function(t,r,e){return 3*(r+e)/4-e}(0,n,f)),s=0,a=f>0?n-4:n,p=0;p<a;p+=4)r=i[t.charCodeAt(p)]<<18|i[t.charCodeAt(p+1)]<<12|i[t.charCodeAt(p+2)]<<6|i[t.charCodeAt(p+3)],u[s++]=r>>16&255,u[s++]=r>>8&255,u[s++]=255&r;2===f&&(r=i[t.charCodeAt(p)]<<2|i[t.charCodeAt(p+1)]>>4,u[s++]=255&r);1===f&&(r=i[t.charCodeAt(p)]<<10|i[t.charCodeAt(p+1)]<<4|i[t.charCodeAt(p+2)]>>2,u[s++]=r>>8&255,u[s++]=255&r);return u},e.fromByteArray=function(t){for(var r,e=t.length,i=e%3,o=[],f=0,u=e-i;f<u;f+=16383)o.push(a(t,f,f+16383>u?u:f+16383));1===i?(r=t[e-1],o.push(n[r>>2]+n[r<<4&63]+"==")):2===i&&(r=(t[e-2]<<8)+t[e-1],o.push(n[r>>10]+n[r>>4&63]+n[r<<2&63]+"="));return o.join("")};for(var n=[],i=[],o="undefined"!=typeof Uint8Array?Uint8Array:Array,f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",u=0,s=f.length;u<s;++u)n[u]=f[u],i[f.charCodeAt(u)]=u;function h(t){var r=t.length;if(r%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var e=t.indexOf("=");return-1===e&&(e=r),[e,e===r?0:4-e%4]}function a(t,r,e){for(var i,o,f=[],u=r;u<e;u+=3)i=(t[u]<<16&16711680)+(t[u+1]<<8&65280)+(255&t[u+2]),f.push(n[(o=i)>>18&63]+n[o>>12&63]+n[o>>6&63]+n[63&o]);return f.join("")}i["-".charCodeAt(0)]=62,i["_".charCodeAt(0)]=63},{}],3:[function(t,r,e){e.read=function(t,r,e,n,i){var o,f,u=8*i-n-1,s=(1<<u)-1,h=s>>1,a=-7,p=e?i-1:0,c=e?-1:1,l=t[r+p];for(p+=c,o=l&(1<<-a)-1,l>>=-a,a+=u;a>0;o=256*o+t[r+p],p+=c,a-=8);for(f=o&(1<<-a)-1,o>>=-a,a+=n;a>0;f=256*f+t[r+p],p+=c,a-=8);if(0===o)o=1-h;else{if(o===s)return f?NaN:1/0*(l?-1:1);f+=Math.pow(2,n),o-=h}return(l?-1:1)*f*Math.pow(2,o-n)},e.write=function(t,r,e,n,i,o){var f,u,s,h=8*o-i-1,a=(1<<h)-1,p=a>>1,c=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,l=n?0:o-1,y=n?1:-1,g=r<0||0===r&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(u=isNaN(r)?1:0,f=a):(f=Math.floor(Math.log(r)/Math.LN2),r*(s=Math.pow(2,-f))<1&&(f--,s*=2),(r+=f+p>=1?c/s:c*Math.pow(2,1-p))*s>=2&&(f++,s/=2),f+p>=a?(u=0,f=a):f+p>=1?(u=(r*s-1)*Math.pow(2,i),f+=p):(u=r*Math.pow(2,p-1)*Math.pow(2,i),f=0));i>=8;t[e+l]=255&u,l+=y,u/=256,i-=8);for(f=f<<i|u,h+=i;h>0;t[e+l]=255&f,l+=y,f/=256,h-=8);t[e+l-y]|=128*g}},{}],4:[function(t,r,e){arguments[4][2][0].apply(e,arguments)},{dup:2}],5:[function(t,r,e){arguments[4][1][0].apply(e,arguments)},{"base64-js":4,buffer:5,dup:1,ieee754:6}],6:[function(t,r,e){arguments[4][3][0].apply(e,arguments)},{dup:3}]},{},[1])(1)});
window.global = window;
window.Buffer = buffer.Buffer;

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.NewLedger = {})));
}(this, (function (exports) { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var runtime_1 = createCommonjsModule(function (module) {
	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var runtime = (function (exports) {

	  var Op = Object.prototype;
	  var hasOwn = Op.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
	    var generator = Object.create(protoGenerator.prototype);
	    var context = new Context(tryLocsList || []);

	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);

	    return generator;
	  }
	  exports.wrap = wrap;

	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }

	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";

	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};

	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}

	  // This is a polyfill for %IteratorPrototype% for environments that
	  // don't natively support it.
	  var IteratorPrototype = {};
	  IteratorPrototype[iteratorSymbol] = function () {
	    return this;
	  };

	  var getProto = Object.getPrototypeOf;
	  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
	  if (NativeIteratorPrototype &&
	      NativeIteratorPrototype !== Op &&
	      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
	    // This environment has a native %IteratorPrototype%; use it instead
	    // of the polyfill.
	    IteratorPrototype = NativeIteratorPrototype;
	  }

	  var Gp = GeneratorFunctionPrototype.prototype =
	    Generator.prototype = Object.create(IteratorPrototype);
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] =
	    GeneratorFunction.displayName = "GeneratorFunction";

	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }

	  exports.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };

	  exports.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };

	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `hasOwn.call(value, "__await")` to determine if the yielded value is
	  // meant to be awaited.
	  exports.awrap = function(arg) {
	    return { __await: arg };
	  };

	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value &&
	            typeof value === "object" &&
	            hasOwn.call(value, "__await")) {
	          return Promise.resolve(value.__await).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }

	        return Promise.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration.
	          result.value = unwrapped;
	          resolve(result);
	        }, function(error) {
	          // If a rejected Promise was yielded, throw the rejection back
	          // into the async generator function so it can be handled there.
	          return invoke("throw", error, resolve, reject);
	        });
	      }
	    }

	    var previousPromise;

	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }

	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }

	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }

	  defineIteratorMethods(AsyncIterator.prototype);
	  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
	    return this;
	  };
	  exports.AsyncIterator = AsyncIterator;

	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  exports.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );

	    return exports.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };

	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;

	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }

	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }

	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }

	      context.method = method;
	      context.arg = arg;

	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          var delegateResult = maybeInvokeDelegate(delegate, context);
	          if (delegateResult) {
	            if (delegateResult === ContinueSentinel) continue;
	            return delegateResult;
	          }
	        }

	        if (context.method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = context.arg;

	        } else if (context.method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw context.arg;
	          }

	          context.dispatchException(context.arg);

	        } else if (context.method === "return") {
	          context.abrupt("return", context.arg);
	        }

	        state = GenStateExecuting;

	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;

	          if (record.arg === ContinueSentinel) {
	            continue;
	          }

	          return {
	            value: record.arg,
	            done: context.done
	          };

	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(context.arg) call above.
	          context.method = "throw";
	          context.arg = record.arg;
	        }
	      }
	    };
	  }

	  // Call delegate.iterator[context.method](context.arg) and handle the
	  // result, either by returning a { value, done } result from the
	  // delegate iterator, or by modifying context.method and context.arg,
	  // setting context.delegate to null, and returning the ContinueSentinel.
	  function maybeInvokeDelegate(delegate, context) {
	    var method = delegate.iterator[context.method];
	    if (method === undefined) {
	      // A .throw or .return when the delegate iterator has no .throw
	      // method always terminates the yield* loop.
	      context.delegate = null;

	      if (context.method === "throw") {
	        // Note: ["return"] must be used for ES3 parsing compatibility.
	        if (delegate.iterator["return"]) {
	          // If the delegate iterator has a return method, give it a
	          // chance to clean up.
	          context.method = "return";
	          context.arg = undefined;
	          maybeInvokeDelegate(delegate, context);

	          if (context.method === "throw") {
	            // If maybeInvokeDelegate(context) changed context.method from
	            // "return" to "throw", let that override the TypeError below.
	            return ContinueSentinel;
	          }
	        }

	        context.method = "throw";
	        context.arg = new TypeError(
	          "The iterator does not provide a 'throw' method");
	      }

	      return ContinueSentinel;
	    }

	    var record = tryCatch(method, delegate.iterator, context.arg);

	    if (record.type === "throw") {
	      context.method = "throw";
	      context.arg = record.arg;
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    var info = record.arg;

	    if (! info) {
	      context.method = "throw";
	      context.arg = new TypeError("iterator result is not an object");
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    if (info.done) {
	      // Assign the result of the finished delegate to the temporary
	      // variable specified by delegate.resultName (see delegateYield).
	      context[delegate.resultName] = info.value;

	      // Resume execution at the desired location (see delegateYield).
	      context.next = delegate.nextLoc;

	      // If context.method was "throw" but the delegate handled the
	      // exception, let the outer generator proceed normally. If
	      // context.method was "next", forget context.arg since it has been
	      // "consumed" by the delegate iterator. If context.method was
	      // "return", allow the original .return call to continue in the
	      // outer generator.
	      if (context.method !== "return") {
	        context.method = "next";
	        context.arg = undefined;
	      }

	    } else {
	      // Re-yield the result returned by the delegate method.
	      return info;
	    }

	    // The delegate iterator is finished, so forget it and continue with
	    // the outer generator.
	    context.delegate = null;
	    return ContinueSentinel;
	  }

	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);

	  Gp[toStringTagSymbol] = "Generator";

	  // A Generator should always return itself as the iterator object when the
	  // @@iterator function is called on it. Some browsers' implementations of the
	  // iterator prototype chain incorrectly implement this, causing the Generator
	  // object to not be returned from this call. This ensures that doesn't happen.
	  // See https://github.com/facebook/regenerator/issues/274 for more details.
	  Gp[iteratorSymbol] = function() {
	    return this;
	  };

	  Gp.toString = function() {
	    return "[object Generator]";
	  };

	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };

	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }

	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }

	    this.tryEntries.push(entry);
	  }

	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }

	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }

	  exports.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();

	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }

	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };

	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }

	      if (typeof iterable.next === "function") {
	        return iterable;
	      }

	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }

	          next.value = undefined;
	          next.done = true;

	          return next;
	        };

	        return next.next = next;
	      }
	    }

	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  exports.values = values;

	  function doneResult() {
	    return { value: undefined, done: true };
	  }

	  Context.prototype = {
	    constructor: Context,

	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined;
	      this.done = false;
	      this.delegate = null;

	      this.method = "next";
	      this.arg = undefined;

	      this.tryEntries.forEach(resetTryEntry);

	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },

	    stop: function() {
	      this.done = true;

	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }

	      return this.rval;
	    },

	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }

	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;

	        if (caught) {
	          // If the dispatched exception was caught by a catch block,
	          // then let that catch block handle the exception normally.
	          context.method = "next";
	          context.arg = undefined;
	        }

	        return !! caught;
	      }

	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;

	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }

	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");

	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }

	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },

	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }

	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }

	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;

	      if (finallyEntry) {
	        this.method = "next";
	        this.next = finallyEntry.finallyLoc;
	        return ContinueSentinel;
	      }

	      return this.complete(record);
	    },

	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }

	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = this.arg = record.arg;
	        this.method = "return";
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }

	      return ContinueSentinel;
	    },

	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },

	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }

	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },

	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };

	      if (this.method === "next") {
	        // Deliberately forget the last sent value so that we don't
	        // accidentally pass it on to the delegate.
	        this.arg = undefined;
	      }

	      return ContinueSentinel;
	    }
	  };

	  // Regardless of whether this script is executing as a CommonJS module
	  // or not, return the runtime object so that we can declare the variable
	  // regeneratorRuntime in the outer scope, which allows this module to be
	  // injected easily by `bin/regenerator --include-runtime script.js`.
	  return exports;

	}(
	  // If this script is executing as a CommonJS module, use module.exports
	  // as the regeneratorRuntime namespace. Otherwise create a new empty
	  // object. Either way, the resulting object will be used to initialize
	  // the regeneratorRuntime variable at the top of this file.
	  module.exports
	));

	try {
	  regeneratorRuntime = runtime;
	} catch (accidentalStrictMode) {
	  // This module should not be running in strict mode, so the above
	  // assignment should always work unless something is misconfigured. Just
	  // in case runtime.js accidentally runs in strict mode, we can escape
	  // strict mode using a global Function call. This could conceivably fail
	  // if a Content Security Policy forbids using Function, but in that case
	  // the proper solution is to fix the accidental strict mode problem. If
	  // you've misconfigured your bundler to force strict mode and applied a
	  // CSP to forbid Function, and you're not willing to fix either of those
	  // problems, please detail your unique predicament in a GitHub issue.
	  Function("r", "regeneratorRuntime = r")(runtime);
	}
	});

	var utils = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.defer = defer;
	exports.splitPath = splitPath;
	exports.eachSeries = eachSeries;
	exports.foreach = foreach;
	exports.doIf = doIf;
	exports.asyncWhile = asyncWhile;
	function defer() {
	  var resolve = void 0,
	      reject = void 0;
	  var promise = new Promise(function (success, failure) {
	    resolve = success;
	    reject = failure;
	  });
	  if (!resolve || !reject) throw "defer() error"; // this never happens and is just to make flow happy
	  return { promise: promise, resolve: resolve, reject: reject };
	}

	// TODO use bip32-path library
	/********************************************************************************
	 *   Ledger Node JS API
	 *   (c) 2016-2017 Ledger
	 *
	 *  Licensed under the Apache License, Version 2.0 (the "License");
	 *  you may not use this file except in compliance with the License.
	 *  You may obtain a copy of the License at
	 *
	 *      http://www.apache.org/licenses/LICENSE-2.0
	 *
	 *  Unless required by applicable law or agreed to in writing, software
	 *  distributed under the License is distributed on an "AS IS" BASIS,
	 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 *  See the License for the specific language governing permissions and
	 *  limitations under the License.
	 ********************************************************************************/


	function splitPath(path) {
	  var result = [];
	  var components = path.split("/");
	  components.forEach(function (element) {
	    var number = parseInt(element, 10);
	    if (isNaN(number)) {
	      return; // FIXME shouldn't it throws instead?
	    }
	    if (element.length > 1 && element[element.length - 1] === "'") {
	      number += 0x80000000;
	    }
	    result.push(number);
	  });
	  return result;
	}

	// TODO use async await

	function eachSeries(arr, fun) {
	  return arr.reduce(function (p, e) {
	    return p.then(function () {
	      return fun(e);
	    });
	  }, Promise.resolve());
	}

	function foreach(arr, callback) {
	  function iterate(index, array, result) {
	    if (index >= array.length) {
	      return result;
	    } else return callback(array[index], index).then(function (res) {
	      result.push(res);
	      return iterate(index + 1, array, result);
	    });
	  }
	  return Promise.resolve().then(function () {
	    return iterate(0, arr, []);
	  });
	}

	function doIf(condition, callback) {
	  return Promise.resolve().then(function () {
	    if (condition) {
	      return callback();
	    }
	  });
	}

	function asyncWhile(predicate, callback) {
	  function iterate(result) {
	    if (!predicate()) {
	      return result;
	    } else {
	      return callback().then(function (res) {
	        result.push(res);
	        return iterate(result);
	      });
	    }
	  }
	  return Promise.resolve([]).then(iterate);
	}

	var isLedgerDevice = exports.isLedgerDevice = function isLedgerDevice(device) {
	  return device.vendorId === 0x2581 && device.productId === 0x3b7c || device.vendorId === 0x2c97;
	};

	});

	unwrapExports(utils);
	var utils_1 = utils.defer;
	var utils_2 = utils.splitPath;
	var utils_3 = utils.eachSeries;
	var utils_4 = utils.foreach;
	var utils_5 = utils.doIf;
	var utils_6 = utils.asyncWhile;
	var utils_7 = utils.isLedgerDevice;

	var require$$0 = {};

	var createHash = require$$0.createHash;

	var Btc_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	// TODO future refactoring
	// - drop utils.js & refactoring with async/await style
	// - try to avoid every place we do hex<>Buffer conversion. also accept Buffer as func parameters (could accept both a string or a Buffer in the API)
	// - there are redundant code across apps (see Eth vs Btc). we might want to factorize it somewhere. also each app apdu call should be abstracted it out as an api






	var _createHash2 = _interopRequireDefault(createHash);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * address format is one of legacy | p2sh | bech32
	 */
	var addressFormatMap = {
	  legacy: 0,
	  p2sh: 1,
	  bech32: 2
	};

	var MAX_SCRIPT_BLOCK = 50;
	var DEFAULT_VERSION = 1;
	var DEFAULT_LOCKTIME = 0;
	var DEFAULT_SEQUENCE = 0xffffffff;
	var SIGHASH_ALL = 1;
	var OP_DUP = 0x76;
	var OP_HASH160 = 0xa9;
	var HASH_SIZE = 0x14;
	var OP_EQUALVERIFY = 0x88;
	var OP_CHECKSIG = 0xac;
	/**
	 * Bitcoin API.
	 *
	 * @example
	 * import Btc from "@ledgerhq/hw-app-btc";
	 * const btc = new Btc(transport)
	 */

	var Btc = function () {
	  function Btc(transport) {
	    var scrambleKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "BTC";

	    _classCallCheck(this, Btc);

	    this.transport = transport;
	    transport.decorateAppAPIMethods(this, ["getWalletPublicKey", "signP2SHTransaction", "signMessageNew", "createPaymentTransactionNew"], scrambleKey);
	  }

	  _createClass(Btc, [{
	    key: "hashPublicKey",
	    value: function hashPublicKey(buffer) {
	      return (0, _createHash2.default)("rmd160").update((0, _createHash2.default)("sha256").update(buffer).digest()).digest();
	    }
	  }, {
	    key: "getWalletPublicKey_private",
	    value: function getWalletPublicKey_private(path) {
	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      var _verify$format$option = _extends({
	        verify: false,
	        format: "legacy"
	      }, options),
	          verify = _verify$format$option.verify,
	          format = _verify$format$option.format;

	      if (!(format in addressFormatMap)) {
	        throw new Error("btc.getWalletPublicKey invalid format=" + format);
	      }
	      var paths = (0, utils.splitPath)(path);
	      var p1 = verify ? 1 : 0;
	      var p2 = addressFormatMap[format];
	      var buffer = Buffer.alloc(1 + paths.length * 4);
	      buffer[0] = paths.length;
	      paths.forEach(function (element, index) {
	        buffer.writeUInt32BE(element, 1 + 4 * index);
	      });
	      return this.transport.send(0xe0, 0x40, p1, p2, buffer).then(function (response) {
	        var publicKeyLength = response[0];
	        var addressLength = response[1 + publicKeyLength];
	        var publicKey = response.slice(1, 1 + publicKeyLength).toString("hex");
	        var bitcoinAddress = response.slice(1 + publicKeyLength + 1, 1 + publicKeyLength + 1 + addressLength).toString("ascii");
	        var chainCode = response.slice(1 + publicKeyLength + 1 + addressLength, 1 + publicKeyLength + 1 + addressLength + 32).toString("hex");
	        return { publicKey: publicKey, bitcoinAddress: bitcoinAddress, chainCode: chainCode };
	      });
	    }

	    /**
	     * @param path a BIP 32 path
	     * @param options an object with optional these fields:
	     *
	     * - verify (boolean) will ask user to confirm the address on the device
	     *
	     * - format ("legacy" | "p2sh" | "bech32") to use different bitcoin address formatter.
	     *
	     * NB The normal usage is to use:
	     *
	     * - legacy format with 44' paths
	     *
	     * - p2sh format with 49' paths
	     *
	     * - bech32 format with 173' paths
	     *
	     * @example
	     * btc.getWalletPublicKey("44'/0'/0'/0/0").then(o => o.bitcoinAddress)
	     * btc.getWalletPublicKey("49'/0'/0'/0/0", { format: "p2sh" }).then(o => o.bitcoinAddress)
	     */

	  }, {
	    key: "getWalletPublicKey",
	    value: function getWalletPublicKey(path, opts) {
	      var options = void 0;
	      if (arguments.length > 2 || typeof opts === "boolean") {
	        console.warn("btc.getWalletPublicKey deprecated signature used. Please switch to getWalletPublicKey(path, { format, verify })");
	        options = {
	          verify: !!opts,
	          format: arguments[2] ? "p2sh" : "legacy"
	        };
	      } else {
	        options = opts || {};
	      }
	      return this.getWalletPublicKey_private(path, options);
	    }
	  }, {
	    key: "getTrustedInputRaw",
	    value: function getTrustedInputRaw(transactionData, indexLookup) {
	      var data = void 0;
	      var firstRound = false;
	      if (typeof indexLookup === "number") {
	        firstRound = true;
	        var prefix = Buffer.alloc(4);
	        prefix.writeUInt32BE(indexLookup, 0);
	        data = Buffer.concat([prefix, transactionData], transactionData.length + 4);
	      } else {
	        data = transactionData;
	      }
	      return this.transport.send(0xe0, 0x42, firstRound ? 0x00 : 0x80, 0x00, data).then(function (trustedInput) {
	        return trustedInput.slice(0, trustedInput.length - 2).toString("hex");
	      });
	    }
	  }, {
	    key: "getTrustedInput",
	    value: function getTrustedInput(indexLookup, transaction) {
	      var _this = this;

	      var additionals = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
	      var inputs = transaction.inputs,
	          outputs = transaction.outputs,
	          locktime = transaction.locktime;

	      if (!outputs || !locktime) {
	        throw new Error("getTrustedInput: locktime & outputs is expected");
	      }
	      var isDecred = additionals.includes("decred");
	      var isXST = additionals.includes("stealthcoin");
	      var processScriptBlocks = function processScriptBlocks(script, sequence) {
	        var scriptBlocks = [];
	        var offset = 0;
	        while (offset !== script.length) {
	          var blockSize = script.length - offset > MAX_SCRIPT_BLOCK ? MAX_SCRIPT_BLOCK : script.length - offset;
	          if (offset + blockSize !== script.length) {
	            scriptBlocks.push(script.slice(offset, offset + blockSize));
	          } else {
	            scriptBlocks.push(Buffer.concat([script.slice(offset, offset + blockSize), sequence]));
	          }
	          offset += blockSize;
	        }

	        // Handle case when no script length: we still want to pass the sequence
	        // relatable: https://github.com/LedgerHQ/ledger-live-desktop/issues/1386
	        if (script.length === 0) {
	          scriptBlocks.push(sequence);
	        }

	        return (0, utils.eachSeries)(scriptBlocks, function (scriptBlock) {
	          return _this.getTrustedInputRaw(scriptBlock);
	        });
	      };

	      var processWholeScriptBlock = function processWholeScriptBlock(block) {
	        return _this.getTrustedInputRaw(block);
	      };

	      var processInputs = function processInputs() {
	        return (0, utils.eachSeries)(inputs, function (input) {
	          var treeField = isDecred ? input.tree || Buffer.from([0x00]) : Buffer.alloc(0);
	          var data = Buffer.concat([input.prevout, treeField, isXST ? Buffer.from([0x00]) : _this.createVarint(input.script.length)]);
	          return _this.getTrustedInputRaw(data).then(function () {
	            // iteration (eachSeries) ended
	            // TODO notify progress
	            // deferred.notify("input");
	            // Reference: https://github.com/StealthSend/Stealth/commit/5be35d6c2c500b32ed82e5d6913d66d18a4b0a7f#diff-e8db9b851adc2422aadfffca88f14c91R566
	            return isDecred ? processWholeScriptBlock(Buffer.concat([input.script, input.sequence])) : isXST ? processWholeScriptBlock(input.sequence) : processScriptBlocks(input.script, input.sequence);
	          });
	        }).then(function () {
	          var data = _this.createVarint(outputs.length);
	          return _this.getTrustedInputRaw(data);
	        });
	      };

	      var processOutputs = function processOutputs() {
	        return (0, utils.eachSeries)(outputs, function (output) {
	          var data = output.amount;
	          data = Buffer.concat([data, isDecred ? Buffer.from([0x00, 0x00]) : Buffer.alloc(0), //Version script
	          _this.createVarint(output.script.length), output.script]);
	          return _this.getTrustedInputRaw(data).then(function () {
	            // iteration (eachSeries) ended
	            // TODO notify progress
	            // deferred.notify("output");
	          });
	        }).then(function () {
	          //Add expiry height for decred
	          var finalData = isDecred ? Buffer.concat([locktime, Buffer.from([0x00, 0x00, 0x00, 0x00])]) : locktime;
	          return _this.getTrustedInputRaw(finalData);
	        });
	      };

	      var data = Buffer.concat([transaction.version, transaction.timestamp || Buffer.alloc(0), this.createVarint(inputs.length)]);
	      return this.getTrustedInputRaw(data, indexLookup).then(processInputs).then(processOutputs);
	    }
	  }, {
	    key: "getTrustedInputBIP143",
	    value: function () {
	      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(indexLookup, transaction) {
	        var additionals = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
	        var isDecred, sha, hash, data, outputs, locktime;
	        return regeneratorRuntime.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                if (transaction) {
	                  _context.next = 2;
	                  break;
	                }

	                throw new Error("getTrustedInputBIP143: missing tx");

	              case 2:
	                isDecred = additionals.includes("decred");

	                if (!isDecred) {
	                  _context.next = 5;
	                  break;
	                }

	                throw new Error("Decred does not implement BIP143");

	              case 5:
	                sha = (0, _createHash2.default)("sha256");

	                sha.update(this.serializeTransaction(transaction, true));
	                hash = sha.digest();

	                sha = (0, _createHash2.default)("sha256");
	                sha.update(hash);
	                hash = sha.digest();
	                data = Buffer.alloc(4);

	                data.writeUInt32LE(indexLookup, 0);
	                outputs = transaction.outputs, locktime = transaction.locktime;

	                if (!(!outputs || !locktime)) {
	                  _context.next = 16;
	                  break;
	                }

	                throw new Error("getTrustedInputBIP143: locktime & outputs is expected");

	              case 16:
	                if (outputs[indexLookup]) {
	                  _context.next = 18;
	                  break;
	                }

	                throw new Error("getTrustedInputBIP143: wrong index");

	              case 18:
	                hash = Buffer.concat([hash, data, outputs[indexLookup].amount]);
	                _context.next = 21;
	                return hash.toString("hex");

	              case 21:
	                return _context.abrupt("return", _context.sent);

	              case 22:
	              case "end":
	                return _context.stop();
	            }
	          }
	        }, _callee, this);
	      }));

	      function getTrustedInputBIP143(_x4, _x5) {
	        return _ref.apply(this, arguments);
	      }

	      return getTrustedInputBIP143;
	    }()
	  }, {
	    key: "getVarint",
	    value: function getVarint(data, offset) {
	      if (data[offset] < 0xfd) {
	        return [data[offset], 1];
	      }
	      if (data[offset] === 0xfd) {
	        return [(data[offset + 2] << 8) + data[offset + 1], 3];
	      }
	      if (data[offset] === 0xfe) {
	        return [(data[offset + 4] << 24) + (data[offset + 3] << 16) + (data[offset + 2] << 8) + data[offset + 1], 5];
	      }

	      throw new Error("getVarint called with unexpected parameters");
	    }
	  }, {
	    key: "startUntrustedHashTransactionInputRaw",
	    value: function startUntrustedHashTransactionInputRaw(newTransaction, firstRound, transactionData) {
	      var bip143 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
	      var overwinter = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
	      var additionals = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];

	      var p2 = bip143 ? additionals.includes("sapling") ? 0x05 : overwinter ? 0x04 : 0x02 : 0x00;
	      return this.transport.send(0xe0, 0x44, firstRound ? 0x00 : 0x80, newTransaction ? p2 : 0x80, transactionData);
	    }
	  }, {
	    key: "startUntrustedHashTransactionInput",
	    value: function startUntrustedHashTransactionInput(newTransaction, transaction, inputs) {
	      var bip143 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

	      var _this2 = this;

	      var overwinter = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
	      var additionals = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];

	      var data = Buffer.concat([transaction.version, transaction.timestamp || Buffer.alloc(0), transaction.nVersionGroupId || Buffer.alloc(0), this.createVarint(transaction.inputs.length)]);
	      return this.startUntrustedHashTransactionInputRaw(newTransaction, true, data, bip143, overwinter, additionals).then(function () {
	        var i = 0;
	        var isDecred = additionals.includes("decred");
	        return (0, utils.eachSeries)(transaction.inputs, function (input) {
	          var prefix = void 0;
	          if (bip143) {
	            prefix = Buffer.from([0x02]);
	          } else {
	            if (inputs[i].trustedInput) {
	              prefix = Buffer.from([0x01, inputs[i].value.length]);
	            } else {
	              prefix = Buffer.from([0x00]);
	            }
	          }
	          data = Buffer.concat([prefix, inputs[i].value, isDecred ? Buffer.from([0x00]) : Buffer.alloc(0), _this2.createVarint(input.script.length)]);
	          return _this2.startUntrustedHashTransactionInputRaw(newTransaction, false, data, bip143, overwinter, additionals).then(function () {
	            var scriptBlocks = [];
	            var offset = 0;
	            if (input.script.length === 0) {
	              scriptBlocks.push(input.sequence);
	            } else {
	              while (offset !== input.script.length) {
	                var blockSize = input.script.length - offset > MAX_SCRIPT_BLOCK ? MAX_SCRIPT_BLOCK : input.script.length - offset;
	                if (offset + blockSize !== input.script.length) {
	                  scriptBlocks.push(input.script.slice(offset, offset + blockSize));
	                } else {
	                  scriptBlocks.push(Buffer.concat([input.script.slice(offset, offset + blockSize), input.sequence]));
	                }
	                offset += blockSize;
	              }
	            }
	            return (0, utils.eachSeries)(scriptBlocks, function (scriptBlock) {
	              return _this2.startUntrustedHashTransactionInputRaw(newTransaction, false, scriptBlock, bip143, overwinter, additionals);
	            }).then(function () {
	              i++;
	            });
	          });
	        });
	      });
	    }
	  }, {
	    key: "provideOutputFullChangePath",
	    value: function provideOutputFullChangePath(path) {
	      var paths = (0, utils.splitPath)(path);
	      var buffer = Buffer.alloc(1 + paths.length * 4);
	      buffer[0] = paths.length;
	      paths.forEach(function (element, index) {
	        buffer.writeUInt32BE(element, 1 + 4 * index);
	      });
	      return this.transport.send(0xe0, 0x4a, 0xff, 0x00, buffer);
	    }
	  }, {
	    key: "hashOutputFull",
	    value: function hashOutputFull(outputScript) {
	      var _this3 = this;

	      var additionals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

	      var offset = 0;
	      var p1 = 0x80;
	      var isDecred = additionals.includes("decred");
	      ///WARNING: Decred works only with one call (without chunking)
	      //TODO: test without this for Decred
	      if (isDecred) {
	        return this.transport.send(0xe0, 0x4a, p1, 0x00, outputScript);
	      }
	      return (0, utils.asyncWhile)(function () {
	        return offset < outputScript.length;
	      }, function () {
	        var blockSize = offset + MAX_SCRIPT_BLOCK >= outputScript.length ? outputScript.length - offset : MAX_SCRIPT_BLOCK;
	        var p1 = offset + blockSize === outputScript.length ? 0x80 : 0x00;
	        var data = outputScript.slice(offset, offset + blockSize);

	        return _this3.transport.send(0xe0, 0x4a, p1, 0x00, data).then(function () {
	          offset += blockSize;
	        });
	      });
	    }
	  }, {
	    key: "signTransaction",
	    value: function signTransaction(path) {
	      var lockTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_LOCKTIME;
	      var sigHashType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : SIGHASH_ALL;
	      var expiryHeight = arguments[3];
	      var additionals = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];

	      var isDecred = additionals.includes("decred");
	      var paths = (0, utils.splitPath)(path);
	      var offset = 0;
	      var pathsBuffer = Buffer.alloc(paths.length * 4);
	      paths.forEach(function (element) {
	        pathsBuffer.writeUInt32BE(element, offset);
	        offset += 4;
	      });
	      var lockTimeBuffer = Buffer.alloc(4);
	      lockTimeBuffer.writeUInt32BE(lockTime, 0);
	      var buffer = isDecred ? Buffer.concat([Buffer.from([paths.length]), pathsBuffer, lockTimeBuffer, expiryHeight || Buffer.from([0x00, 0x00, 0x00, 0x00]), Buffer.from([sigHashType])]) : Buffer.concat([Buffer.from([paths.length]), pathsBuffer, Buffer.from([0x00]), lockTimeBuffer, Buffer.from([sigHashType])]);
	      if (expiryHeight && !isDecred) {
	        buffer = Buffer.concat([buffer, expiryHeight]);
	      }
	      return this.transport.send(0xe0, 0x48, 0x00, 0x00, buffer).then(function (result) {
	        if (result.length > 0) {
	          result[0] = 0x30;
	          return result.slice(0, result.length - 2);
	        }
	        return result;
	      });
	    }

	    /**
	     * You can sign a message according to the Bitcoin Signature format and retrieve v, r, s given the message and the BIP 32 path of the account to sign.
	     * @example
	     btc.signMessageNew_async("44'/60'/0'/0'/0", Buffer.from("test").toString("hex")).then(function(result) {
	       var v = result['v'] + 27 + 4;
	       var signature = Buffer.from(v.toString(16) + result['r'] + result['s'], 'hex').toString('base64');
	       console.log("Signature : " + signature);
	     }).catch(function(ex) {console.log(ex);});
	     */

	  }, {
	    key: "signMessageNew",
	    value: function signMessageNew(path, messageHex) {
	      var _this4 = this;

	      var paths = (0, utils.splitPath)(path);
	      var message = new Buffer(messageHex, "hex");
	      var offset = 0;
	      var toSend = [];

	      var _loop = function _loop() {
	        var maxChunkSize = offset === 0 ? MAX_SCRIPT_BLOCK - 1 - paths.length * 4 - 4 : MAX_SCRIPT_BLOCK;
	        var chunkSize = offset + maxChunkSize > message.length ? message.length - offset : maxChunkSize;
	        var buffer = new Buffer(offset === 0 ? 1 + paths.length * 4 + 2 + chunkSize : chunkSize);
	        if (offset === 0) {
	          buffer[0] = paths.length;
	          paths.forEach(function (element, index) {
	            buffer.writeUInt32BE(element, 1 + 4 * index);
	          });
	          buffer.writeUInt16BE(message.length, 1 + 4 * paths.length);
	          message.copy(buffer, 1 + 4 * paths.length + 2, offset, offset + chunkSize);
	        } else {
	          message.copy(buffer, 0, offset, offset + chunkSize);
	        }
	        toSend.push(buffer);
	        offset += chunkSize;
	      };

	      while (offset !== message.length) {
	        _loop();
	      }
	      return (0, utils.foreach)(toSend, function (data, i) {
	        return _this4.transport.send(0xe0, 0x4e, 0x00, i === 0 ? 0x01 : 0x80, data);
	      }).then(function () {
	        return _this4.transport.send(0xe0, 0x4e, 0x80, 0x00, Buffer.from([0x00])).then(function (response) {
	          var v = response[0] - 0x30;
	          var r = response.slice(4, 4 + response[3]);
	          if (r[0] === 0) {
	            r = r.slice(1);
	          }
	          r = r.toString("hex");
	          var offset = 4 + response[3] + 2;
	          var s = response.slice(offset, offset + response[offset - 1]);
	          if (s[0] === 0) {
	            s = s.slice(1);
	          }
	          s = s.toString("hex");
	          return { v: v, r: r, s: s };
	        });
	      });
	    }

	    /**
	     * To sign a transaction involving standard (P2PKH) inputs, call createPaymentTransactionNew with the following parameters
	     * @param inputs is an array of [ transaction, output_index, optional redeem script, optional sequence ] where
	     *
	     * * transaction is the previously computed transaction object for this UTXO
	     * * output_index is the output in the transaction used as input for this UTXO (counting from 0)
	     * * redeem script is the optional redeem script to use when consuming a Segregated Witness input
	     * * sequence is the sequence number to use for this input (when using RBF), or non present
	     * @param associatedKeysets is an array of BIP 32 paths pointing to the path to the private key used for each UTXO
	     * @param changePath is an optional BIP 32 path pointing to the path to the public key used to compute the change address
	     * @param outputScriptHex is the hexadecimal serialized outputs of the transaction to sign
	     * @param lockTime is the optional lockTime of the transaction to sign, or default (0)
	     * @param sigHashType is the hash type of the transaction to sign, or default (all)
	     * @param segwit is an optional boolean indicating wether to use segwit or not
	     * @param initialTimestamp is an optional timestamp of the function call to use for coins that necessitate timestamps only, (not the one that the tx will include)
	     * @param additionals list of additionnal options
	     * - "abc" for bch
	     * - "gold" for btg
	     * - "bipxxx" for using BIPxxx
	     * - "sapling" to indicate a zec transaction is supporting sapling (to be set over block 419200)
	     * @param expiryHeight is an optional Buffer for zec overwinter / sapling Txs
	     * @return the signed transaction ready to be broadcast
	     * @example
	    btc.createPaymentTransactionNew(
	     [ [tx1, 1] ],
	     ["0'/0/0"],
	     undefined,
	     "01905f0100000000001976a91472a5d75c8d2d0565b656a5232703b167d50d5a2b88ac"
	    ).then(res => ...);
	     */

	  }, {
	    key: "createPaymentTransactionNew",
	    value: function createPaymentTransactionNew(inputs, associatedKeysets, changePath, outputScriptHex) {
	      var lockTime = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : DEFAULT_LOCKTIME;
	      var sigHashType = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : SIGHASH_ALL;
	      var segwit = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
	      var initialTimestamp = arguments[7];

	      var _this5 = this;

	      var additionals = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : [];
	      var expiryHeight = arguments[9];

	      var isDecred = additionals.includes("decred");
	      var isXST = additionals.includes("stealthcoin");
	      var hasTimestamp = initialTimestamp !== undefined;
	      var startTime = Date.now();
	      var sapling = additionals.includes("sapling");
	      var bech32 = segwit && additionals.includes("bech32");
	      var useBip143 = segwit || !!additionals && (additionals.includes("abc") || additionals.includes("gold") || additionals.includes("bip143")) || !!expiryHeight && !isDecred;
	      // Inputs are provided as arrays of [transaction, output_index, optional redeem script, optional sequence]
	      // associatedKeysets are provided as arrays of [path]
	      var nullScript = Buffer.alloc(0);
	      var nullPrevout = Buffer.alloc(0);
	      var defaultVersion = Buffer.alloc(4);
	      !!expiryHeight && !isDecred ? defaultVersion.writeUInt32LE(sapling ? 0x80000004 : 0x80000003, 0) : isXST ? defaultVersion.writeUInt32LE(2, 0) : defaultVersion.writeUInt32LE(1, 0); // Default version to 2 for XST not to have timestamp
	      var trustedInputs = [];
	      var regularOutputs = [];
	      var signatures = [];
	      var publicKeys = [];
	      var firstRun = true;
	      var resuming = false;
	      var targetTransaction = {
	        inputs: [],
	        version: defaultVersion,
	        timestamp: Buffer.alloc(0)
	      };
	      var getTrustedInputCall = useBip143 ? this.getTrustedInputBIP143.bind(this) : this.getTrustedInput.bind(this);
	      var outputScript = Buffer.from(outputScriptHex, "hex");

	      return (0, utils.foreach)(inputs, function (input) {
	        return (0, utils.doIf)(!resuming, function () {
	          return getTrustedInputCall(input[1], input[0], additionals).then(function (trustedInput) {
	            var sequence = Buffer.alloc(4);
	            sequence.writeUInt32LE(input.length >= 4 && typeof input[3] === "number" ? input[3] : DEFAULT_SEQUENCE, 0);
	            trustedInputs.push({
	              trustedInput: true,
	              value: Buffer.from(trustedInput, "hex"),
	              sequence: sequence
	            });
	          });
	        }).then(function () {
	          var outputs = input[0].outputs;

	          var index = input[1];
	          if (outputs && index <= outputs.length - 1) {
	            regularOutputs.push(outputs[index]);
	          }
	        }).then(function () {
	          if (!!expiryHeight && !isDecred) {
	            targetTransaction.nVersionGroupId = Buffer.from(sapling ? [0x85, 0x20, 0x2f, 0x89] : [0x70, 0x82, 0xc4, 0x03]);
	            targetTransaction.nExpiryHeight = expiryHeight;
	            // For sapling : valueBalance (8), nShieldedSpend (1), nShieldedOutput (1), nJoinSplit (1)
	            // Overwinter : use nJoinSplit (1)
	            targetTransaction.extraData = Buffer.from(sapling ? [0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00] : [0x00]);
	          } else if (isDecred) {
	            targetTransaction.nExpiryHeight = expiryHeight;
	          }
	        });
	      }).then(function () {
	        for (var i = 0; i < inputs.length; i++) {
	          var _sequence = Buffer.alloc(4);
	          _sequence.writeUInt32LE(inputs[i].length >= 4 && typeof inputs[i][3] === "number" ? inputs[i][3] : DEFAULT_SEQUENCE, 0);
	          targetTransaction.inputs.push({
	            script: nullScript,
	            prevout: nullPrevout,
	            sequence: _sequence
	          });
	        }
	      }).then(function () {
	        return (0, utils.doIf)(!resuming, function () {
	          return (
	            // Collect public keys
	            (0, utils.foreach)(inputs, function (input, i) {
	              return _this5.getWalletPublicKey_private(associatedKeysets[i]);
	            }).then(function (result) {
	              for (var index = 0; index < result.length; index++) {
	                publicKeys.push(_this5.compressPublicKey(Buffer.from(result[index].publicKey, "hex")));
	              }
	            })
	          );
	        });
	      }).then(function () {
	        if (hasTimestamp) {
	          targetTransaction.timestamp = Buffer.alloc(4);
	          targetTransaction.timestamp.writeUInt32LE(Math.floor(initialTimestamp + (Date.now() - startTime) / 1000), 0);
	        }
	      }).then(function () {
	        return (0, utils.doIf)(useBip143, function () {
	          return (
	            // Do the first run with all inputs
	            _this5.startUntrustedHashTransactionInput(true, targetTransaction, trustedInputs, true, !!expiryHeight, additionals).then(function () {
	              return (0, utils.doIf)(!resuming && typeof changePath != "undefined", function () {
	                // $FlowFixMe
	                return _this5.provideOutputFullChangePath(changePath);
	              }).then(function () {
	                return _this5.hashOutputFull(outputScript);
	              });
	            })
	          );
	        });
	      }).then(function () {
	        return (0, utils.doIf)(!!expiryHeight && !isDecred, function () {
	          return (
	            // FIXME: I think we should always pass lockTime here.
	            _this5.signTransaction("", lockTime, SIGHASH_ALL, expiryHeight)
	          );
	        });
	      }).then(function () {
	        return (
	          // Do the second run with the individual transaction
	          (0, utils.foreach)(inputs, function (input, i) {
	            var script = inputs[i].length >= 3 && typeof inputs[i][2] === "string" ? Buffer.from(inputs[i][2], "hex") : !segwit ? regularOutputs[i].script : Buffer.concat([Buffer.from([OP_DUP, OP_HASH160, HASH_SIZE]), _this5.hashPublicKey(publicKeys[i]), Buffer.from([OP_EQUALVERIFY, OP_CHECKSIG])]);
	            var pseudoTX = Object.assign({}, targetTransaction);
	            var pseudoTrustedInputs = useBip143 ? [trustedInputs[i]] : trustedInputs;
	            if (useBip143) {
	              pseudoTX.inputs = [_extends({}, pseudoTX.inputs[i], { script: script })];
	            } else {
	              pseudoTX.inputs[i].script = script;
	            }
	            return _this5.startUntrustedHashTransactionInput(!useBip143 && firstRun, pseudoTX, pseudoTrustedInputs, useBip143, !!expiryHeight && !isDecred, additionals).then(function () {
	              return (0, utils.doIf)(!useBip143, function () {
	                return (0, utils.doIf)(!resuming && typeof changePath != "undefined", function () {
	                  // $FlowFixMe
	                  return _this5.provideOutputFullChangePath(changePath);
	                }).then(function () {
	                  return _this5.hashOutputFull(outputScript, additionals);
	                });
	              });
	            }).then(function () {
	              return _this5.signTransaction(associatedKeysets[i], lockTime, sigHashType, expiryHeight, additionals);
	            }).then(function (signature) {
	              signatures.push(signature);
	              targetTransaction.inputs[i].script = nullScript;
	              if (firstRun) {
	                firstRun = false;
	              }
	            });
	          })
	        );
	      }).then(function () {
	        // Populate the final input scripts
	        for (var _i = 0; _i < inputs.length; _i++) {
	          if (segwit) {
	            targetTransaction.witness = Buffer.alloc(0);
	            if (!bech32) {
	              targetTransaction.inputs[_i].script = Buffer.concat([Buffer.from("160014", "hex"), _this5.hashPublicKey(publicKeys[_i])]);
	            }
	          } else {
	            var signatureSize = Buffer.alloc(1);
	            var keySize = Buffer.alloc(1);
	            signatureSize[0] = signatures[_i].length;
	            keySize[0] = publicKeys[_i].length;
	            targetTransaction.inputs[_i].script = Buffer.concat([signatureSize, signatures[_i], keySize, publicKeys[_i]]);
	          }
	          var offset = useBip143 ? 0 : 4;
	          targetTransaction.inputs[_i].prevout = trustedInputs[_i].value.slice(offset, offset + 0x24);
	        }

	        var lockTimeBuffer = Buffer.alloc(4);
	        lockTimeBuffer.writeUInt32LE(lockTime, 0);

	        var result = Buffer.concat([_this5.serializeTransaction(targetTransaction, false, targetTransaction.timestamp, additionals), outputScript]);

	        if (segwit && !isDecred) {
	          var witness = Buffer.alloc(0);
	          for (var i = 0; i < inputs.length; i++) {
	            var tmpScriptData = Buffer.concat([Buffer.from("02", "hex"), Buffer.from([signatures[i].length]), signatures[i], Buffer.from([publicKeys[i].length]), publicKeys[i]]);
	            witness = Buffer.concat([witness, tmpScriptData]);
	          }
	          result = Buffer.concat([result, witness]);
	        }

	        // FIXME: In ZEC or KMD sapling lockTime is serialized before expiryHeight.
	        // expiryHeight is used only in overwinter/sapling so I moved lockTimeBuffer here
	        // and it should not break other coins because expiryHeight is false for them.
	        // Don't know about Decred though.
	        result = Buffer.concat([result, lockTimeBuffer]);

	        if (expiryHeight) {
	          result = Buffer.concat([result, targetTransaction.nExpiryHeight || Buffer.alloc(0), targetTransaction.extraData || Buffer.alloc(0)]);
	        }

	        if (isDecred) {
	          var decredWitness = Buffer.from([targetTransaction.inputs.length]);
	          inputs.forEach(function (input, inputIndex) {
	            decredWitness = Buffer.concat([decredWitness, Buffer.from([0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00]), Buffer.from([0x00, 0x00, 0x00, 0x00]), //Block height
	            Buffer.from([0xff, 0xff, 0xff, 0xff]), //Block index
	            Buffer.from([targetTransaction.inputs[inputIndex].script.length]), targetTransaction.inputs[inputIndex].script]);
	          });

	          result = Buffer.concat([result, decredWitness]);
	        }

	        return result.toString("hex");
	      });
	    }

	    /**
	     * To obtain the signature of multisignature (P2SH) inputs, call signP2SHTransaction_async with the folowing parameters
	     * @param inputs is an array of [ transaction, output_index, redeem script, optional sequence ] where
	     * * transaction is the previously computed transaction object for this UTXO
	     * * output_index is the output in the transaction used as input for this UTXO (counting from 0)
	     * * redeem script is the mandatory redeem script associated to the current P2SH input
	     * * sequence is the sequence number to use for this input (when using RBF), or non present
	     * @param associatedKeysets is an array of BIP 32 paths pointing to the path to the private key used for each UTXO
	     * @param outputScriptHex is the hexadecimal serialized outputs of the transaction to sign
	     * @param lockTime is the optional lockTime of the transaction to sign, or default (0)
	     * @param sigHashType is the hash type of the transaction to sign, or default (all)
	     * @return the signed transaction ready to be broadcast
	     * @example
	    btc.signP2SHTransaction(
	    [ [tx, 1, "52210289b4a3ad52a919abd2bdd6920d8a6879b1e788c38aa76f0440a6f32a9f1996d02103a3393b1439d1693b063482c04bd40142db97bdf139eedd1b51ffb7070a37eac321030b9a409a1e476b0d5d17b804fcdb81cf30f9b99c6f3ae1178206e08bc500639853ae"] ],
	    ["0'/0/0"],
	    "01905f0100000000001976a91472a5d75c8d2d0565b656a5232703b167d50d5a2b88ac"
	    ).then(result => ...);
	     */

	  }, {
	    key: "signP2SHTransaction",
	    value: function signP2SHTransaction(inputs, associatedKeysets, outputScriptHex) {
	      var lockTime = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : DEFAULT_LOCKTIME;
	      var sigHashType = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : SIGHASH_ALL;
	      var segwit = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

	      var _this6 = this;

	      var transactionVersion = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : DEFAULT_VERSION;
	      var timeStamp = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;

	      // Inputs are provided as arrays of [transaction, output_index, redeem script, optional sequence]
	      // associatedKeysets are provided as arrays of [path]
	      var nullScript = Buffer.alloc(0);
	      var nullPrevout = Buffer.alloc(0);
	      var defaultVersion = Buffer.alloc(4);
	      defaultVersion.writeUInt32LE(transactionVersion, 0);
	      var defaultTime = Buffer.alloc(4);
	      defaultTime.writeUInt32LE(timeStamp, 0);
	      var trustedInputs = [];
	      var regularOutputs = [];
	      var signatures = [];
	      var firstRun = true;
	      var resuming = false;
	      var targetTransaction = {
	        inputs: [],
	        version: defaultVersion
	      };

	      if (timeStamp > 0) {
	        targetTransaction.timestamp = defaultTime;
	      }
	      var getTrustedInputCall = segwit ? this.getTrustedInputBIP143.bind(this) : this.getTrustedInput.bind(this);
	      var outputScript = Buffer.from(outputScriptHex, "hex");

	      return (0, utils.foreach)(inputs, function (input) {
	        return (0, utils.doIf)(!resuming, function () {
	          return getTrustedInputCall(input[1], input[0]).then(function (trustedInput) {
	            var sequence = Buffer.alloc(4);
	            sequence.writeUInt32LE(input.length >= 4 && typeof input[3] === "number" ? input[3] : DEFAULT_SEQUENCE, 0);
	            trustedInputs.push({
	              trustedInput: false,
	              value: segwit ? Buffer.from(trustedInput, "hex") : Buffer.from(trustedInput, "hex").slice(4, 4 + 0x24),
	              sequence: sequence
	            });
	          });
	        }).then(function () {
	          var outputs = input[0].outputs;

	          var index = input[1];
	          if (outputs && index <= outputs.length - 1) {
	            regularOutputs.push(outputs[index]);
	          }
	        });
	      }).then(function () {
	        // Pre-build the target transaction
	        for (var i = 0; i < inputs.length; i++) {
	          var _sequence2 = Buffer.alloc(4);
	          _sequence2.writeUInt32LE(inputs[i].length >= 4 && typeof inputs[i][3] === "number" ? inputs[i][3] : DEFAULT_SEQUENCE, 0);
	          targetTransaction.inputs.push({
	            script: nullScript,
	            prevout: nullPrevout,
	            sequence: _sequence2
	          });
	        }
	      }).then(function () {
	        return (0, utils.doIf)(segwit, function () {
	          return (
	            // Do the first run with all inputs
	            _this6.startUntrustedHashTransactionInput(true, targetTransaction, trustedInputs, true).then(function () {
	              return _this6.hashOutputFull(outputScript);
	            })
	          );
	        });
	      }).then(function () {
	        return (0, utils.foreach)(inputs, function (input, i) {
	          var script = inputs[i].length >= 3 && typeof inputs[i][2] === "string" ? Buffer.from(inputs[i][2], "hex") : regularOutputs[i].script;
	          var pseudoTX = Object.assign({}, targetTransaction);
	          var pseudoTrustedInputs = segwit ? [trustedInputs[i]] : trustedInputs;
	          if (segwit) {
	            pseudoTX.inputs = [_extends({}, pseudoTX.inputs[i], { script: script })];
	          } else {
	            pseudoTX.inputs[i].script = script;
	          }
	          return _this6.startUntrustedHashTransactionInput(!segwit && firstRun, pseudoTX, pseudoTrustedInputs, segwit).then(function () {
	            return (0, utils.doIf)(!segwit, function () {
	              return _this6.hashOutputFull(outputScript);
	            });
	          }).then(function () {
	            return _this6.signTransaction(associatedKeysets[i], lockTime, sigHashType).then(function (signature) {
	              signatures.push(signature.toString("hex"));
	              targetTransaction.inputs[i].script = nullScript;
	              if (firstRun) {
	                firstRun = false;
	              }
	            });
	          });
	        });
	      }).then(function () {
	        return signatures;
	      });
	    }
	  }, {
	    key: "compressPublicKey",
	    value: function compressPublicKey(publicKey) {
	      var prefix = (publicKey[64] & 1) !== 0 ? 0x03 : 0x02;
	      var prefixBuffer = Buffer.alloc(1);
	      prefixBuffer[0] = prefix;
	      return Buffer.concat([prefixBuffer, publicKey.slice(1, 1 + 32)]);
	    }
	  }, {
	    key: "createVarint",
	    value: function createVarint(value) {
	      if (value < 0xfd) {
	        var _buffer = Buffer.alloc(1);
	        _buffer[0] = value;
	        return _buffer;
	      }
	      if (value <= 0xffff) {
	        var _buffer2 = Buffer.alloc(3);
	        _buffer2[0] = 0xfd;
	        _buffer2[1] = value & 0xff;
	        _buffer2[2] = value >> 8 & 0xff;
	        return _buffer2;
	      }
	      var buffer = Buffer.alloc(5);
	      buffer[0] = 0xfe;
	      buffer[1] = value & 0xff;
	      buffer[2] = value >> 8 & 0xff;
	      buffer[3] = value >> 16 & 0xff;
	      buffer[4] = value >> 24 & 0xff;
	      return buffer;
	    }

	    /**
	     * For each UTXO included in your transaction, create a transaction object from the raw serialized version of the transaction used in this UTXO.
	     * @example
	    const tx1 = btc.splitTransaction("01000000014ea60aeac5252c14291d428915bd7ccd1bfc4af009f4d4dc57ae597ed0420b71010000008a47304402201f36a12c240dbf9e566bc04321050b1984cd6eaf6caee8f02bb0bfec08e3354b022012ee2aeadcbbfd1e92959f57c15c1c6debb757b798451b104665aa3010569b49014104090b15bde569386734abf2a2b99f9ca6a50656627e77de663ca7325702769986cf26cc9dd7fdea0af432c8e2becc867c932e1b9dd742f2a108997c2252e2bdebffffffff0281b72e00000000001976a91472a5d75c8d2d0565b656a5232703b167d50d5a2b88aca0860100000000001976a9144533f5fb9b4817f713c48f0bfe96b9f50c476c9b88ac00000000");
	     */

	  }, {
	    key: "splitTransaction",
	    value: function splitTransaction(transactionHex) {
	      var isSegwitSupported = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	      var hasTimestamp = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	      var hasExtraData = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
	      var additionals = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];

	      var inputs = [];
	      var outputs = [];
	      var witness = false;
	      var offset = 0;
	      var timestamp = Buffer.alloc(0);
	      var nExpiryHeight = Buffer.alloc(0);
	      var nVersionGroupId = Buffer.alloc(0);
	      var extraData = Buffer.alloc(0);
	      var isDecred = additionals.includes("decred");
	      var transaction = Buffer.from(transactionHex, "hex");
	      var version = transaction.slice(offset, offset + 4);
	      var overwinter = version.equals(Buffer.from([0x03, 0x00, 0x00, 0x80])) || version.equals(Buffer.from([0x04, 0x00, 0x00, 0x80]));
	      offset += 4;
	      if (!hasTimestamp && isSegwitSupported && transaction[offset] === 0 && transaction[offset + 1] !== 0) {
	        offset += 2;
	        witness = true;
	      }
	      if (hasTimestamp) {
	        timestamp = transaction.slice(offset, 4 + offset);
	        offset += 4;
	      }
	      if (overwinter) {
	        nVersionGroupId = transaction.slice(offset, 4 + offset);
	        offset += 4;
	      }
	      var varint = this.getVarint(transaction, offset);
	      var numberInputs = varint[0];
	      offset += varint[1];
	      for (var i = 0; i < numberInputs; i++) {
	        var _prevout = transaction.slice(offset, offset + 36);
	        offset += 36;
	        var _script = Buffer.alloc(0);
	        var _tree = Buffer.alloc(0);
	        //No script for decred, it has a witness
	        if (!isDecred) {
	          varint = this.getVarint(transaction, offset);
	          offset += varint[1];
	          _script = transaction.slice(offset, offset + varint[0]);
	          offset += varint[0];
	        } else {
	          //Tree field
	          _tree = transaction.slice(offset, offset + 1);
	          offset += 1;
	        }

	        var _sequence3 = transaction.slice(offset, offset + 4);
	        offset += 4;
	        inputs.push({ prevout: _prevout, script: _script, sequence: _sequence3, tree: _tree });
	      }
	      varint = this.getVarint(transaction, offset);
	      var numberOutputs = varint[0];
	      offset += varint[1];
	      for (var _i2 = 0; _i2 < numberOutputs; _i2++) {
	        var _amount = transaction.slice(offset, offset + 8);
	        offset += 8;

	        if (isDecred) {
	          //Script version
	          offset += 2;
	        }

	        varint = this.getVarint(transaction, offset);
	        offset += varint[1];
	        var _script2 = transaction.slice(offset, offset + varint[0]);
	        offset += varint[0];
	        outputs.push({ amount: _amount, script: _script2 });
	      }
	      var witnessScript = void 0,
	          locktime = void 0;
	      if (witness) {
	        witnessScript = transaction.slice(offset, -4);
	        locktime = transaction.slice(transaction.length - 4);
	      } else {
	        locktime = transaction.slice(offset, offset + 4);
	      }
	      offset += 4;
	      if (overwinter || isDecred) {
	        nExpiryHeight = transaction.slice(offset, offset + 4);
	        offset += 4;
	      }
	      if (hasExtraData) {
	        extraData = transaction.slice(offset);
	      }

	      //Get witnesses for Decred
	      if (isDecred) {
	        varint = this.getVarint(transaction, offset);
	        offset += varint[1];
	        if (varint[0] !== numberInputs) {
	          throw new Error("splitTransaction: incoherent number of witnesses");
	        }
	        for (var _i3 = 0; _i3 < numberInputs; _i3++) {
	          //amount
	          offset += 8;
	          //block height
	          offset += 4;
	          //block index
	          offset += 4;
	          //Script size
	          varint = this.getVarint(transaction, offset);
	          offset += varint[1];
	          var _script3 = transaction.slice(offset, offset + varint[0]);
	          offset += varint[0];
	          inputs[_i3].script = _script3;
	        }
	      }

	      return {
	        version: version,
	        inputs: inputs,
	        outputs: outputs,
	        locktime: locktime,
	        witness: witnessScript,
	        timestamp: timestamp,
	        nVersionGroupId: nVersionGroupId,
	        nExpiryHeight: nExpiryHeight,
	        extraData: extraData
	      };
	    }

	    /**
	    @example
	    const tx1 = btc.splitTransaction("01000000014ea60aeac5252c14291d428915bd7ccd1bfc4af009f4d4dc57ae597ed0420b71010000008a47304402201f36a12c240dbf9e566bc04321050b1984cd6eaf6caee8f02bb0bfec08e3354b022012ee2aeadcbbfd1e92959f57c15c1c6debb757b798451b104665aa3010569b49014104090b15bde569386734abf2a2b99f9ca6a50656627e77de663ca7325702769986cf26cc9dd7fdea0af432c8e2becc867c932e1b9dd742f2a108997c2252e2bdebffffffff0281b72e00000000001976a91472a5d75c8d2d0565b656a5232703b167d50d5a2b88aca0860100000000001976a9144533f5fb9b4817f713c48f0bfe96b9f50c476c9b88ac00000000");
	    const outputScript = btc.serializeTransactionOutputs(tx1).toString('hex');
	    */

	  }, {
	    key: "serializeTransactionOutputs",
	    value: function serializeTransactionOutputs(_ref2) {
	      var _this7 = this;

	      var outputs = _ref2.outputs;

	      var outputBuffer = Buffer.alloc(0);
	      if (typeof outputs !== "undefined") {
	        outputBuffer = Buffer.concat([outputBuffer, this.createVarint(outputs.length)]);
	        outputs.forEach(function (output) {
	          outputBuffer = Buffer.concat([outputBuffer, output.amount, _this7.createVarint(output.script.length), output.script]);
	        });
	      }
	      return outputBuffer;
	    }

	    /**
	     */

	  }, {
	    key: "serializeTransaction",
	    value: function serializeTransaction(transaction, skipWitness, timestamp) {
	      var _this8 = this;

	      var additionals = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

	      var isDecred = additionals.includes("decred");
	      var isBech32 = additionals.includes("bech32");
	      var inputBuffer = Buffer.alloc(0);
	      var useWitness = typeof transaction["witness"] != "undefined" && !skipWitness;
	      transaction.inputs.forEach(function (input) {
	        inputBuffer = isDecred || isBech32 ? Buffer.concat([inputBuffer, input.prevout, Buffer.from([0x00]), //tree
	        input.sequence]) : Buffer.concat([inputBuffer, input.prevout, _this8.createVarint(input.script.length), input.script, input.sequence]);
	      });

	      var outputBuffer = this.serializeTransactionOutputs(transaction);
	      if (typeof transaction.outputs !== "undefined" && typeof transaction.locktime !== "undefined") {
	        outputBuffer = Buffer.concat([outputBuffer, useWitness && transaction.witness || Buffer.alloc(0), transaction.locktime, transaction.nExpiryHeight || Buffer.alloc(0), transaction.extraData || Buffer.alloc(0)]);
	      }

	      return Buffer.concat([transaction.version, timestamp ? timestamp : Buffer.alloc(0), transaction.nVersionGroupId || Buffer.alloc(0), useWitness ? Buffer.from("0001", "hex") : Buffer.alloc(0), this.createVarint(transaction.inputs.length), inputBuffer, outputBuffer]);
	    }

	    /**
	     */

	  }, {
	    key: "displayTransactionDebug",
	    value: function displayTransactionDebug(transaction) {
	      console.log("version " + transaction.version.toString("hex"));
	      transaction.inputs.forEach(function (input, i) {
	        var prevout = input.prevout.toString("hex");
	        var script = input.script.toString("hex");
	        var sequence = input.sequence.toString("hex");
	        console.log("input " + i + " prevout " + prevout + " script " + script + " sequence " + sequence);
	      });
	      (transaction.outputs || []).forEach(function (output, i) {
	        var amount = output.amount.toString("hex");
	        var script = output.script.toString("hex");
	        console.log("output " + i + " amount " + amount + " script " + script);
	      });
	      if (typeof transaction.locktime !== "undefined") {
	        console.log("locktime " + transaction.locktime.toString("hex"));
	      }
	    }
	  }]);

	  return Btc;
	}();

	/**
	 */


	exports.default = Btc;

	/**
	 */


	/**
	 */

	});

	var Btc = unwrapExports(Btc_1);

	var Btc$1 = /*#__PURE__*/Object.freeze({
		default: Btc,
		__moduleExports: Btc_1
	});

	var domain;

	// This constructor is used to store event handlers. Instantiating this is
	// faster than explicitly calling `Object.create(null)` to get a "clean" empty
	// object (tested with v8 v4.9).
	function EventHandlers() {}
	EventHandlers.prototype = Object.create(null);

	function EventEmitter() {
	  EventEmitter.init.call(this);
	}

	// nodejs oddity
	// require('events') === require('events').EventEmitter
	EventEmitter.EventEmitter = EventEmitter;

	EventEmitter.usingDomains = false;

	EventEmitter.prototype.domain = undefined;
	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;

	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;

	EventEmitter.init = function() {
	  this.domain = null;
	  if (EventEmitter.usingDomains) {
	    // if there is an active domain, then attach to it.
	    if (domain.active && !(this instanceof domain.Domain)) {
	      this.domain = domain.active;
	    }
	  }

	  if (!this._events || this._events === Object.getPrototypeOf(this)._events) {
	    this._events = new EventHandlers();
	    this._eventsCount = 0;
	  }

	  this._maxListeners = this._maxListeners || undefined;
	};

	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
	  if (typeof n !== 'number' || n < 0 || isNaN(n))
	    throw new TypeError('"n" argument must be a positive number');
	  this._maxListeners = n;
	  return this;
	};

	function $getMaxListeners(that) {
	  if (that._maxListeners === undefined)
	    return EventEmitter.defaultMaxListeners;
	  return that._maxListeners;
	}

	EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
	  return $getMaxListeners(this);
	};

	// These standalone emit* functions are used to optimize calling of event
	// handlers for fast cases because emit() itself often has a variable number of
	// arguments and can be deoptimized because of that. These functions always have
	// the same number of arguments and thus do not get deoptimized, so the code
	// inside them can execute faster.
	function emitNone(handler, isFn, self) {
	  if (isFn)
	    handler.call(self);
	  else {
	    var len = handler.length;
	    var listeners = arrayClone(handler, len);
	    for (var i = 0; i < len; ++i)
	      listeners[i].call(self);
	  }
	}
	function emitOne(handler, isFn, self, arg1) {
	  if (isFn)
	    handler.call(self, arg1);
	  else {
	    var len = handler.length;
	    var listeners = arrayClone(handler, len);
	    for (var i = 0; i < len; ++i)
	      listeners[i].call(self, arg1);
	  }
	}
	function emitTwo(handler, isFn, self, arg1, arg2) {
	  if (isFn)
	    handler.call(self, arg1, arg2);
	  else {
	    var len = handler.length;
	    var listeners = arrayClone(handler, len);
	    for (var i = 0; i < len; ++i)
	      listeners[i].call(self, arg1, arg2);
	  }
	}
	function emitThree(handler, isFn, self, arg1, arg2, arg3) {
	  if (isFn)
	    handler.call(self, arg1, arg2, arg3);
	  else {
	    var len = handler.length;
	    var listeners = arrayClone(handler, len);
	    for (var i = 0; i < len; ++i)
	      listeners[i].call(self, arg1, arg2, arg3);
	  }
	}

	function emitMany(handler, isFn, self, args) {
	  if (isFn)
	    handler.apply(self, args);
	  else {
	    var len = handler.length;
	    var listeners = arrayClone(handler, len);
	    for (var i = 0; i < len; ++i)
	      listeners[i].apply(self, args);
	  }
	}

	EventEmitter.prototype.emit = function emit(type) {
	  var er, handler, len, args, i, events, domain;
	  var needDomainExit = false;
	  var doError = (type === 'error');

	  events = this._events;
	  if (events)
	    doError = (doError && events.error == null);
	  else if (!doError)
	    return false;

	  domain = this.domain;

	  // If there is no 'error' event listener then throw.
	  if (doError) {
	    er = arguments[1];
	    if (domain) {
	      if (!er)
	        er = new Error('Uncaught, unspecified "error" event');
	      er.domainEmitter = this;
	      er.domain = domain;
	      er.domainThrown = false;
	      domain.emit('error', er);
	    } else if (er instanceof Error) {
	      throw er; // Unhandled 'error' event
	    } else {
	      // At least give some kind of context to the user
	      var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
	      err.context = er;
	      throw err;
	    }
	    return false;
	  }

	  handler = events[type];

	  if (!handler)
	    return false;

	  var isFn = typeof handler === 'function';
	  len = arguments.length;
	  switch (len) {
	    // fast cases
	    case 1:
	      emitNone(handler, isFn, this);
	      break;
	    case 2:
	      emitOne(handler, isFn, this, arguments[1]);
	      break;
	    case 3:
	      emitTwo(handler, isFn, this, arguments[1], arguments[2]);
	      break;
	    case 4:
	      emitThree(handler, isFn, this, arguments[1], arguments[2], arguments[3]);
	      break;
	    // slower
	    default:
	      args = new Array(len - 1);
	      for (i = 1; i < len; i++)
	        args[i - 1] = arguments[i];
	      emitMany(handler, isFn, this, args);
	  }

	  if (needDomainExit)
	    domain.exit();

	  return true;
	};

	function _addListener(target, type, listener, prepend) {
	  var m;
	  var events;
	  var existing;

	  if (typeof listener !== 'function')
	    throw new TypeError('"listener" argument must be a function');

	  events = target._events;
	  if (!events) {
	    events = target._events = new EventHandlers();
	    target._eventsCount = 0;
	  } else {
	    // To avoid recursion in the case that type === "newListener"! Before
	    // adding it to the listeners, first emit "newListener".
	    if (events.newListener) {
	      target.emit('newListener', type,
	                  listener.listener ? listener.listener : listener);

	      // Re-assign `events` because a newListener handler could have caused the
	      // this._events to be assigned to a new object
	      events = target._events;
	    }
	    existing = events[type];
	  }

	  if (!existing) {
	    // Optimize the case of one listener. Don't need the extra array object.
	    existing = events[type] = listener;
	    ++target._eventsCount;
	  } else {
	    if (typeof existing === 'function') {
	      // Adding the second element, need to change to array.
	      existing = events[type] = prepend ? [listener, existing] :
	                                          [existing, listener];
	    } else {
	      // If we've already got an array, just append.
	      if (prepend) {
	        existing.unshift(listener);
	      } else {
	        existing.push(listener);
	      }
	    }

	    // Check for listener leak
	    if (!existing.warned) {
	      m = $getMaxListeners(target);
	      if (m && m > 0 && existing.length > m) {
	        existing.warned = true;
	        var w = new Error('Possible EventEmitter memory leak detected. ' +
	                            existing.length + ' ' + type + ' listeners added. ' +
	                            'Use emitter.setMaxListeners() to increase limit');
	        w.name = 'MaxListenersExceededWarning';
	        w.emitter = target;
	        w.type = type;
	        w.count = existing.length;
	        emitWarning(w);
	      }
	    }
	  }

	  return target;
	}
	function emitWarning(e) {
	  typeof console.warn === 'function' ? console.warn(e) : console.log(e);
	}
	EventEmitter.prototype.addListener = function addListener(type, listener) {
	  return _addListener(this, type, listener, false);
	};

	EventEmitter.prototype.on = EventEmitter.prototype.addListener;

	EventEmitter.prototype.prependListener =
	    function prependListener(type, listener) {
	      return _addListener(this, type, listener, true);
	    };

	function _onceWrap(target, type, listener) {
	  var fired = false;
	  function g() {
	    target.removeListener(type, g);
	    if (!fired) {
	      fired = true;
	      listener.apply(target, arguments);
	    }
	  }
	  g.listener = listener;
	  return g;
	}

	EventEmitter.prototype.once = function once(type, listener) {
	  if (typeof listener !== 'function')
	    throw new TypeError('"listener" argument must be a function');
	  this.on(type, _onceWrap(this, type, listener));
	  return this;
	};

	EventEmitter.prototype.prependOnceListener =
	    function prependOnceListener(type, listener) {
	      if (typeof listener !== 'function')
	        throw new TypeError('"listener" argument must be a function');
	      this.prependListener(type, _onceWrap(this, type, listener));
	      return this;
	    };

	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener =
	    function removeListener(type, listener) {
	      var list, events, position, i, originalListener;

	      if (typeof listener !== 'function')
	        throw new TypeError('"listener" argument must be a function');

	      events = this._events;
	      if (!events)
	        return this;

	      list = events[type];
	      if (!list)
	        return this;

	      if (list === listener || (list.listener && list.listener === listener)) {
	        if (--this._eventsCount === 0)
	          this._events = new EventHandlers();
	        else {
	          delete events[type];
	          if (events.removeListener)
	            this.emit('removeListener', type, list.listener || listener);
	        }
	      } else if (typeof list !== 'function') {
	        position = -1;

	        for (i = list.length; i-- > 0;) {
	          if (list[i] === listener ||
	              (list[i].listener && list[i].listener === listener)) {
	            originalListener = list[i].listener;
	            position = i;
	            break;
	          }
	        }

	        if (position < 0)
	          return this;

	        if (list.length === 1) {
	          list[0] = undefined;
	          if (--this._eventsCount === 0) {
	            this._events = new EventHandlers();
	            return this;
	          } else {
	            delete events[type];
	          }
	        } else {
	          spliceOne(list, position);
	        }

	        if (events.removeListener)
	          this.emit('removeListener', type, originalListener || listener);
	      }

	      return this;
	    };

	EventEmitter.prototype.removeAllListeners =
	    function removeAllListeners(type) {
	      var listeners, events;

	      events = this._events;
	      if (!events)
	        return this;

	      // not listening for removeListener, no need to emit
	      if (!events.removeListener) {
	        if (arguments.length === 0) {
	          this._events = new EventHandlers();
	          this._eventsCount = 0;
	        } else if (events[type]) {
	          if (--this._eventsCount === 0)
	            this._events = new EventHandlers();
	          else
	            delete events[type];
	        }
	        return this;
	      }

	      // emit removeListener for all listeners on all events
	      if (arguments.length === 0) {
	        var keys = Object.keys(events);
	        for (var i = 0, key; i < keys.length; ++i) {
	          key = keys[i];
	          if (key === 'removeListener') continue;
	          this.removeAllListeners(key);
	        }
	        this.removeAllListeners('removeListener');
	        this._events = new EventHandlers();
	        this._eventsCount = 0;
	        return this;
	      }

	      listeners = events[type];

	      if (typeof listeners === 'function') {
	        this.removeListener(type, listeners);
	      } else if (listeners) {
	        // LIFO order
	        do {
	          this.removeListener(type, listeners[listeners.length - 1]);
	        } while (listeners[0]);
	      }

	      return this;
	    };

	EventEmitter.prototype.listeners = function listeners(type) {
	  var evlistener;
	  var ret;
	  var events = this._events;

	  if (!events)
	    ret = [];
	  else {
	    evlistener = events[type];
	    if (!evlistener)
	      ret = [];
	    else if (typeof evlistener === 'function')
	      ret = [evlistener.listener || evlistener];
	    else
	      ret = unwrapListeners(evlistener);
	  }

	  return ret;
	};

	EventEmitter.listenerCount = function(emitter, type) {
	  if (typeof emitter.listenerCount === 'function') {
	    return emitter.listenerCount(type);
	  } else {
	    return listenerCount.call(emitter, type);
	  }
	};

	EventEmitter.prototype.listenerCount = listenerCount;
	function listenerCount(type) {
	  var events = this._events;

	  if (events) {
	    var evlistener = events[type];

	    if (typeof evlistener === 'function') {
	      return 1;
	    } else if (evlistener) {
	      return evlistener.length;
	    }
	  }

	  return 0;
	}

	EventEmitter.prototype.eventNames = function eventNames() {
	  return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
	};

	// About 1.5x faster than the two-arg version of Array#splice().
	function spliceOne(list, index) {
	  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1)
	    list[i] = list[k];
	  list.pop();
	}

	function arrayClone(arr, i) {
	  var copy = new Array(i);
	  while (i--)
	    copy[i] = arr[i];
	  return copy;
	}

	function unwrapListeners(arr) {
	  var ret = new Array(arr.length);
	  for (var i = 0; i < ret.length; ++i) {
	    ret[i] = arr[i].listener || arr[i];
	  }
	  return ret;
	}

	var helpers = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/* eslint-disable no-continue */
	/* eslint-disable no-param-reassign */
	/* eslint-disable no-prototype-builtins */

	var errorClasses = {};
	var deserializers = {};

	var addCustomErrorDeserializer = exports.addCustomErrorDeserializer = function addCustomErrorDeserializer(name, deserializer) {
	  deserializers[name] = deserializer;
	};

	var createCustomErrorClass = exports.createCustomErrorClass = function createCustomErrorClass(name) {
	  var C = function CustomError(message, fields) {
	    Object.assign(this, fields);
	    this.name = name;
	    this.message = message || name;
	    this.stack = new Error().stack;
	  };
	  // $FlowFixMe
	  C.prototype = new Error();

	  errorClasses[name] = C;
	  // $FlowFixMe we can't easily type a subset of Error for now...
	  return C;
	};

	// inspired from https://github.com/programble/errio/blob/master/index.js
	var deserializeError = exports.deserializeError = function deserializeError(object) {
	  if ((typeof object === "undefined" ? "undefined" : _typeof(object)) === "object" && object) {
	    try {
	      // $FlowFixMe FIXME HACK
	      var msg = JSON.parse(object.message);
	      if (msg.message && msg.name) {
	        object = msg;
	      }
	    } catch (e) {
	      // nothing
	    }

	    var error = void 0;
	    if (typeof object.name === "string") {
	      var _object = object,
	          name = _object.name;

	      var des = deserializers[name];
	      if (des) {
	        error = des(object);
	      } else {
	        var _constructor = name === "Error" ? Error : errorClasses[name];

	        if (!_constructor) {
	          console.warn("deserializing an unknown class '" + name + "'");
	          _constructor = createCustomErrorClass(name);
	        }

	        error = Object.create(_constructor.prototype);
	        try {
	          for (var prop in object) {
	            if (object.hasOwnProperty(prop)) {
	              error[prop] = object[prop];
	            }
	          }
	        } catch (e) {
	          // sometimes setting a property can fail (e.g. .name)
	        }
	      }
	    } else {
	      error = new Error(object.message);
	    }

	    if (!error.stack && Error.captureStackTrace) {
	      Error.captureStackTrace(error, deserializeError);
	    }
	    return error;
	  }
	  return new Error(String(object));
	};

	// inspired from https://github.com/sindresorhus/serialize-error/blob/master/index.js
	var serializeError = exports.serializeError = function serializeError(value) {
	  if (!value) return value;
	  if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object") {
	    return destroyCircular(value, []);
	  }
	  if (typeof value === "function") {
	    return "[Function: " + (value.name || "anonymous") + "]";
	  }
	  return value;
	};

	// https://www.npmjs.com/package/destroy-circular
	function destroyCircular(from, seen) {
	  var to = {};
	  seen.push(from);
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;

	  try {
	    for (var _iterator = Object.keys(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var key = _step.value;

	      var value = from[key];
	      if (typeof value === "function") {
	        continue;
	      }
	      if (!value || (typeof value === "undefined" ? "undefined" : _typeof(value)) !== "object") {
	        to[key] = value;
	        continue;
	      }
	      if (seen.indexOf(from[key]) === -1) {
	        to[key] = destroyCircular(from[key], seen.slice(0));
	        continue;
	      }
	      to[key] = "[Circular]";
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator.return) {
	        _iterator.return();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }

	  if (typeof from.name === "string") {
	    to.name = from.name;
	  }
	  if (typeof from.message === "string") {
	    to.message = from.message;
	  }
	  if (typeof from.stack === "string") {
	    to.stack = from.stack;
	  }
	  return to;
	}

	});

	unwrapExports(helpers);
	var helpers_1 = helpers.addCustomErrorDeserializer;
	var helpers_2 = helpers.createCustomErrorClass;
	var helpers_3 = helpers.deserializeError;
	var helpers_4 = helpers.serializeError;

	var lib = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.StatusCodes = exports.DBNotReset = exports.DBWrongPassword = exports.NoDBPathGiven = exports.FirmwareOrAppUpdateRequired = exports.LedgerAPI5xx = exports.LedgerAPI4xx = exports.GenuineCheckFailed = exports.PairingFailed = exports.SyncError = exports.FeeRequired = exports.FeeNotLoaded = exports.CantScanQRCode = exports.ETHAddressNonEIP = exports.WrongDeviceForAccount = exports.WebsocketConnectionFailed = exports.WebsocketConnectionError = exports.DeviceShouldStayInApp = exports.TransportInterfaceNotAvailable = exports.TransportOpenUserCancelled = exports.UserRefusedOnDevice = exports.UserRefusedAllowManager = exports.UserRefusedFirmwareUpdate = exports.UserRefusedAddress = exports.UserRefusedDeviceNameChange = exports.UpdateYourApp = exports.UnexpectedBootloader = exports.TimeoutTagged = exports.PasswordIncorrectError = exports.PasswordsDontMatchError = exports.NotEnoughGas = exports.NotEnoughBalanceBecauseDestinationNotCreated = exports.NotEnoughBalance = exports.NoAddressesFound = exports.NetworkDown = exports.ManagerUninstallBTCDep = exports.ManagerNotEnoughSpaceError = exports.ManagerDeviceLockedError = exports.ManagerAppRelyOnBTCError = exports.ManagerAppAlreadyInstalledError = exports.LedgerAPINotAvailable = exports.LedgerAPIErrorWithMessage = exports.LedgerAPIError = exports.UnknownMCU = exports.LatestMCUInstalledError = exports.InvalidAddressBecauseDestinationIsAlsoSource = exports.InvalidAddress = exports.HardResetFail = exports.FeeEstimationFailed = exports.EthAppPleaseEnableContractData = exports.EnpointConfigError = exports.DisconnectedDeviceDuringOperation = exports.DisconnectedDevice = exports.DeviceSocketNoBulkStatus = exports.DeviceSocketFail = exports.DeviceNameInvalid = exports.DeviceHalted = exports.DeviceInOSUExpected = exports.DeviceOnDashboardExpected = exports.DeviceNotGenuineError = exports.DeviceGenuineSocketEarlyClose = exports.DeviceAppVerifyNotSupported = exports.CurrencyNotSupported = exports.CashAddrNotSupported = exports.CantOpenDevice = exports.BtcUnmatchedApp = exports.BluetoothRequired = exports.AccountNameRequiredError = exports.addCustomErrorDeserializer = exports.createCustomErrorClass = exports.deserializeError = exports.serializeError = undefined;
	exports.TransportError = TransportError;
	exports.getAltStatusMessage = getAltStatusMessage;
	exports.TransportStatusError = TransportStatusError;



	exports.serializeError = helpers.serializeError;
	exports.deserializeError = helpers.deserializeError;
	exports.createCustomErrorClass = helpers.createCustomErrorClass;
	exports.addCustomErrorDeserializer = helpers.addCustomErrorDeserializer;
	var AccountNameRequiredError = exports.AccountNameRequiredError = (0, helpers.createCustomErrorClass)("AccountNameRequired");
	var BluetoothRequired = exports.BluetoothRequired = (0, helpers.createCustomErrorClass)("BluetoothRequired");
	var BtcUnmatchedApp = exports.BtcUnmatchedApp = (0, helpers.createCustomErrorClass)("BtcUnmatchedApp");
	var CantOpenDevice = exports.CantOpenDevice = (0, helpers.createCustomErrorClass)("CantOpenDevice");
	var CashAddrNotSupported = exports.CashAddrNotSupported = (0, helpers.createCustomErrorClass)("CashAddrNotSupported");
	var CurrencyNotSupported = exports.CurrencyNotSupported = (0, helpers.createCustomErrorClass)("CurrencyNotSupported");
	var DeviceAppVerifyNotSupported = exports.DeviceAppVerifyNotSupported = (0, helpers.createCustomErrorClass)("DeviceAppVerifyNotSupported");
	var DeviceGenuineSocketEarlyClose = exports.DeviceGenuineSocketEarlyClose = (0, helpers.createCustomErrorClass)("DeviceGenuineSocketEarlyClose");
	var DeviceNotGenuineError = exports.DeviceNotGenuineError = (0, helpers.createCustomErrorClass)("DeviceNotGenuine");
	var DeviceOnDashboardExpected = exports.DeviceOnDashboardExpected = (0, helpers.createCustomErrorClass)("DeviceOnDashboardExpected");
	var DeviceInOSUExpected = exports.DeviceInOSUExpected = (0, helpers.createCustomErrorClass)("DeviceInOSUExpected");
	var DeviceHalted = exports.DeviceHalted = (0, helpers.createCustomErrorClass)("DeviceHalted");
	var DeviceNameInvalid = exports.DeviceNameInvalid = (0, helpers.createCustomErrorClass)("DeviceNameInvalid");
	var DeviceSocketFail = exports.DeviceSocketFail = (0, helpers.createCustomErrorClass)("DeviceSocketFail");
	var DeviceSocketNoBulkStatus = exports.DeviceSocketNoBulkStatus = (0, helpers.createCustomErrorClass)("DeviceSocketNoBulkStatus");
	var DisconnectedDevice = exports.DisconnectedDevice = (0, helpers.createCustomErrorClass)("DisconnectedDevice");
	var DisconnectedDeviceDuringOperation = exports.DisconnectedDeviceDuringOperation = (0, helpers.createCustomErrorClass)("DisconnectedDeviceDuringOperation");
	var EnpointConfigError = exports.EnpointConfigError = (0, helpers.createCustomErrorClass)("EnpointConfig");
	var EthAppPleaseEnableContractData = exports.EthAppPleaseEnableContractData = (0, helpers.createCustomErrorClass)("EthAppPleaseEnableContractData");
	var FeeEstimationFailed = exports.FeeEstimationFailed = (0, helpers.createCustomErrorClass)("FeeEstimationFailed");
	var HardResetFail = exports.HardResetFail = (0, helpers.createCustomErrorClass)("HardResetFail");
	var InvalidAddress = exports.InvalidAddress = (0, helpers.createCustomErrorClass)("InvalidAddress");
	var InvalidAddressBecauseDestinationIsAlsoSource = exports.InvalidAddressBecauseDestinationIsAlsoSource = (0, helpers.createCustomErrorClass)("InvalidAddressBecauseDestinationIsAlsoSource");
	var LatestMCUInstalledError = exports.LatestMCUInstalledError = (0, helpers.createCustomErrorClass)("LatestMCUInstalledError");
	var UnknownMCU = exports.UnknownMCU = (0, helpers.createCustomErrorClass)("UnknownMCU");
	var LedgerAPIError = exports.LedgerAPIError = (0, helpers.createCustomErrorClass)("LedgerAPIError");
	var LedgerAPIErrorWithMessage = exports.LedgerAPIErrorWithMessage = (0, helpers.createCustomErrorClass)("LedgerAPIErrorWithMessage");
	var LedgerAPINotAvailable = exports.LedgerAPINotAvailable = (0, helpers.createCustomErrorClass)("LedgerAPINotAvailable");
	var ManagerAppAlreadyInstalledError = exports.ManagerAppAlreadyInstalledError = (0, helpers.createCustomErrorClass)("ManagerAppAlreadyInstalled");
	var ManagerAppRelyOnBTCError = exports.ManagerAppRelyOnBTCError = (0, helpers.createCustomErrorClass)("ManagerAppRelyOnBTC");
	var ManagerDeviceLockedError = exports.ManagerDeviceLockedError = (0, helpers.createCustomErrorClass)("ManagerDeviceLocked");
	var ManagerNotEnoughSpaceError = exports.ManagerNotEnoughSpaceError = (0, helpers.createCustomErrorClass)("ManagerNotEnoughSpace");
	var ManagerUninstallBTCDep = exports.ManagerUninstallBTCDep = (0, helpers.createCustomErrorClass)("ManagerUninstallBTCDep");
	var NetworkDown = exports.NetworkDown = (0, helpers.createCustomErrorClass)("NetworkDown");
	var NoAddressesFound = exports.NoAddressesFound = (0, helpers.createCustomErrorClass)("NoAddressesFound");
	var NotEnoughBalance = exports.NotEnoughBalance = (0, helpers.createCustomErrorClass)("NotEnoughBalance");
	var NotEnoughBalanceBecauseDestinationNotCreated = exports.NotEnoughBalanceBecauseDestinationNotCreated = (0, helpers.createCustomErrorClass)("NotEnoughBalanceBecauseDestinationNotCreated");
	var NotEnoughGas = exports.NotEnoughGas = (0, helpers.createCustomErrorClass)("NotEnoughGas");
	var PasswordsDontMatchError = exports.PasswordsDontMatchError = (0, helpers.createCustomErrorClass)("PasswordsDontMatch");
	var PasswordIncorrectError = exports.PasswordIncorrectError = (0, helpers.createCustomErrorClass)("PasswordIncorrect");
	var TimeoutTagged = exports.TimeoutTagged = (0, helpers.createCustomErrorClass)("TimeoutTagged");
	var UnexpectedBootloader = exports.UnexpectedBootloader = (0, helpers.createCustomErrorClass)("UnexpectedBootloader");
	var UpdateYourApp = exports.UpdateYourApp = (0, helpers.createCustomErrorClass)("UpdateYourApp");
	var UserRefusedDeviceNameChange = exports.UserRefusedDeviceNameChange = (0, helpers.createCustomErrorClass)("UserRefusedDeviceNameChange");
	var UserRefusedAddress = exports.UserRefusedAddress = (0, helpers.createCustomErrorClass)("UserRefusedAddress");
	var UserRefusedFirmwareUpdate = exports.UserRefusedFirmwareUpdate = (0, helpers.createCustomErrorClass)("UserRefusedFirmwareUpdate");
	var UserRefusedAllowManager = exports.UserRefusedAllowManager = (0, helpers.createCustomErrorClass)("UserRefusedAllowManager");
	var UserRefusedOnDevice = exports.UserRefusedOnDevice = (0, helpers.createCustomErrorClass)("UserRefusedOnDevice"); // TODO rename because it's just for transaction refusal
	var TransportOpenUserCancelled = exports.TransportOpenUserCancelled = (0, helpers.createCustomErrorClass)("TransportOpenUserCancelled");
	var TransportInterfaceNotAvailable = exports.TransportInterfaceNotAvailable = (0, helpers.createCustomErrorClass)("TransportInterfaceNotAvailable");
	var DeviceShouldStayInApp = exports.DeviceShouldStayInApp = (0, helpers.createCustomErrorClass)("DeviceShouldStayInApp");
	var WebsocketConnectionError = exports.WebsocketConnectionError = (0, helpers.createCustomErrorClass)("WebsocketConnectionError");
	var WebsocketConnectionFailed = exports.WebsocketConnectionFailed = (0, helpers.createCustomErrorClass)("WebsocketConnectionFailed");
	var WrongDeviceForAccount = exports.WrongDeviceForAccount = (0, helpers.createCustomErrorClass)("WrongDeviceForAccount");
	var ETHAddressNonEIP = exports.ETHAddressNonEIP = (0, helpers.createCustomErrorClass)("ETHAddressNonEIP");
	var CantScanQRCode = exports.CantScanQRCode = (0, helpers.createCustomErrorClass)("CantScanQRCode");
	var FeeNotLoaded = exports.FeeNotLoaded = (0, helpers.createCustomErrorClass)("FeeNotLoaded");
	var FeeRequired = exports.FeeRequired = (0, helpers.createCustomErrorClass)("FeeRequired");
	var SyncError = exports.SyncError = (0, helpers.createCustomErrorClass)("SyncError");
	var PairingFailed = exports.PairingFailed = (0, helpers.createCustomErrorClass)("PairingFailed");
	var GenuineCheckFailed = exports.GenuineCheckFailed = (0, helpers.createCustomErrorClass)("GenuineCheckFailed");
	var LedgerAPI4xx = exports.LedgerAPI4xx = (0, helpers.createCustomErrorClass)("LedgerAPI4xx");
	var LedgerAPI5xx = exports.LedgerAPI5xx = (0, helpers.createCustomErrorClass)("LedgerAPI5xx");
	var FirmwareOrAppUpdateRequired = exports.FirmwareOrAppUpdateRequired = (0, helpers.createCustomErrorClass)("FirmwareOrAppUpdateRequired");

	// db stuff, no need to translate
	var NoDBPathGiven = exports.NoDBPathGiven = (0, helpers.createCustomErrorClass)("NoDBPathGiven");
	var DBWrongPassword = exports.DBWrongPassword = (0, helpers.createCustomErrorClass)("DBWrongPassword");
	var DBNotReset = exports.DBNotReset = (0, helpers.createCustomErrorClass)("DBNotReset");

	/**
	 * TransportError is used for any generic transport errors.
	 * e.g. Error thrown when data received by exchanges are incorrect or if exchanged failed to communicate with the device for various reason.
	 */
	function TransportError(message, id) {
	  this.name = "TransportError";
	  this.message = message;
	  this.stack = new Error().stack;
	  this.id = id;
	}
	//$FlowFixMe
	TransportError.prototype = new Error();

	(0, helpers.addCustomErrorDeserializer)("TransportError", function (e) {
	  return new TransportError(e.message, e.id);
	});

	var StatusCodes = exports.StatusCodes = {
	  PIN_REMAINING_ATTEMPTS: 0x63c0,
	  INCORRECT_LENGTH: 0x6700,
	  COMMAND_INCOMPATIBLE_FILE_STRUCTURE: 0x6981,
	  SECURITY_STATUS_NOT_SATISFIED: 0x6982,
	  CONDITIONS_OF_USE_NOT_SATISFIED: 0x6985,
	  INCORRECT_DATA: 0x6a80,
	  NOT_ENOUGH_MEMORY_SPACE: 0x6a84,
	  REFERENCED_DATA_NOT_FOUND: 0x6a88,
	  FILE_ALREADY_EXISTS: 0x6a89,
	  INCORRECT_P1_P2: 0x6b00,
	  INS_NOT_SUPPORTED: 0x6d00,
	  CLA_NOT_SUPPORTED: 0x6e00,
	  TECHNICAL_PROBLEM: 0x6f00,
	  OK: 0x9000,
	  MEMORY_PROBLEM: 0x9240,
	  NO_EF_SELECTED: 0x9400,
	  INVALID_OFFSET: 0x9402,
	  FILE_NOT_FOUND: 0x9404,
	  INCONSISTENT_FILE: 0x9408,
	  ALGORITHM_NOT_SUPPORTED: 0x9484,
	  INVALID_KCV: 0x9485,
	  CODE_NOT_INITIALIZED: 0x9802,
	  ACCESS_CONDITION_NOT_FULFILLED: 0x9804,
	  CONTRADICTION_SECRET_CODE_STATUS: 0x9808,
	  CONTRADICTION_INVALIDATION: 0x9810,
	  CODE_BLOCKED: 0x9840,
	  MAX_VALUE_REACHED: 0x9850,
	  GP_AUTH_FAILED: 0x6300,
	  LICENSING: 0x6f42,
	  HALTED: 0x6faa
	};

	function getAltStatusMessage(code) {
	  switch (code) {
	    // improve text of most common errors
	    case 0x6700:
	      return "Incorrect length";
	    case 0x6982:
	      return "Security not satisfied (dongle locked or have invalid access rights)";
	    case 0x6985:
	      return "Condition of use not satisfied (denied by the user?)";
	    case 0x6a80:
	      return "Invalid data received";
	    case 0x6b00:
	      return "Invalid parameter received";
	  }
	  if (0x6f00 <= code && code <= 0x6fff) {
	    return "Internal error, please report";
	  }
	}

	/**
	 * Error thrown when a device returned a non success status.
	 * the error.statusCode is one of the `StatusCodes` exported by this library.
	 */
	function TransportStatusError(statusCode) {
	  this.name = "TransportStatusError";
	  var statusText = Object.keys(StatusCodes).find(function (k) {
	    return StatusCodes[k] === statusCode;
	  }) || "UNKNOWN_ERROR";
	  var smsg = getAltStatusMessage(statusCode) || statusText;
	  var statusCodeStr = statusCode.toString(16);
	  this.message = "Ledger device: " + smsg + " (0x" + statusCodeStr + ")";
	  this.stack = new Error().stack;
	  this.statusCode = statusCode;
	  this.statusText = statusText;
	}
	//$FlowFixMe
	TransportStatusError.prototype = new Error();

	(0, helpers.addCustomErrorDeserializer)("TransportStatusError", function (e) {
	  return new TransportStatusError(e.statusCode);
	});

	});

	unwrapExports(lib);
	var lib_1 = lib.StatusCodes;
	var lib_2 = lib.DBNotReset;
	var lib_3 = lib.DBWrongPassword;
	var lib_4 = lib.NoDBPathGiven;
	var lib_5 = lib.FirmwareOrAppUpdateRequired;
	var lib_6 = lib.LedgerAPI5xx;
	var lib_7 = lib.LedgerAPI4xx;
	var lib_8 = lib.GenuineCheckFailed;
	var lib_9 = lib.PairingFailed;
	var lib_10 = lib.SyncError;
	var lib_11 = lib.FeeRequired;
	var lib_12 = lib.FeeNotLoaded;
	var lib_13 = lib.CantScanQRCode;
	var lib_14 = lib.ETHAddressNonEIP;
	var lib_15 = lib.WrongDeviceForAccount;
	var lib_16 = lib.WebsocketConnectionFailed;
	var lib_17 = lib.WebsocketConnectionError;
	var lib_18 = lib.DeviceShouldStayInApp;
	var lib_19 = lib.TransportInterfaceNotAvailable;
	var lib_20 = lib.TransportOpenUserCancelled;
	var lib_21 = lib.UserRefusedOnDevice;
	var lib_22 = lib.UserRefusedAllowManager;
	var lib_23 = lib.UserRefusedFirmwareUpdate;
	var lib_24 = lib.UserRefusedAddress;
	var lib_25 = lib.UserRefusedDeviceNameChange;
	var lib_26 = lib.UpdateYourApp;
	var lib_27 = lib.UnexpectedBootloader;
	var lib_28 = lib.TimeoutTagged;
	var lib_29 = lib.PasswordIncorrectError;
	var lib_30 = lib.PasswordsDontMatchError;
	var lib_31 = lib.NotEnoughGas;
	var lib_32 = lib.NotEnoughBalanceBecauseDestinationNotCreated;
	var lib_33 = lib.NotEnoughBalance;
	var lib_34 = lib.NoAddressesFound;
	var lib_35 = lib.NetworkDown;
	var lib_36 = lib.ManagerUninstallBTCDep;
	var lib_37 = lib.ManagerNotEnoughSpaceError;
	var lib_38 = lib.ManagerDeviceLockedError;
	var lib_39 = lib.ManagerAppRelyOnBTCError;
	var lib_40 = lib.ManagerAppAlreadyInstalledError;
	var lib_41 = lib.LedgerAPINotAvailable;
	var lib_42 = lib.LedgerAPIErrorWithMessage;
	var lib_43 = lib.LedgerAPIError;
	var lib_44 = lib.UnknownMCU;
	var lib_45 = lib.LatestMCUInstalledError;
	var lib_46 = lib.InvalidAddressBecauseDestinationIsAlsoSource;
	var lib_47 = lib.InvalidAddress;
	var lib_48 = lib.HardResetFail;
	var lib_49 = lib.FeeEstimationFailed;
	var lib_50 = lib.EthAppPleaseEnableContractData;
	var lib_51 = lib.EnpointConfigError;
	var lib_52 = lib.DisconnectedDeviceDuringOperation;
	var lib_53 = lib.DisconnectedDevice;
	var lib_54 = lib.DeviceSocketNoBulkStatus;
	var lib_55 = lib.DeviceSocketFail;
	var lib_56 = lib.DeviceNameInvalid;
	var lib_57 = lib.DeviceHalted;
	var lib_58 = lib.DeviceInOSUExpected;
	var lib_59 = lib.DeviceOnDashboardExpected;
	var lib_60 = lib.DeviceNotGenuineError;
	var lib_61 = lib.DeviceGenuineSocketEarlyClose;
	var lib_62 = lib.DeviceAppVerifyNotSupported;
	var lib_63 = lib.CurrencyNotSupported;
	var lib_64 = lib.CashAddrNotSupported;
	var lib_65 = lib.CantOpenDevice;
	var lib_66 = lib.BtcUnmatchedApp;
	var lib_67 = lib.BluetoothRequired;
	var lib_68 = lib.AccountNameRequiredError;
	var lib_69 = lib.addCustomErrorDeserializer;
	var lib_70 = lib.createCustomErrorClass;
	var lib_71 = lib.deserializeError;
	var lib_72 = lib.serializeError;
	var lib_73 = lib.TransportError;
	var lib_74 = lib.getAltStatusMessage;
	var lib_75 = lib.TransportStatusError;

	var Transport_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getAltStatusMessage = exports.StatusCodes = exports.TransportStatusError = exports.TransportError = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



	var _events3 = _interopRequireDefault(EventEmitter);



	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	exports.TransportError = lib.TransportError;
	exports.TransportStatusError = lib.TransportStatusError;
	exports.StatusCodes = lib.StatusCodes;
	exports.getAltStatusMessage = lib.getAltStatusMessage;

	/**
	 */


	/**
	 */


	/**
	 * type: add or remove event
	 * descriptor: a parameter that can be passed to open(descriptor)
	 * deviceModel: device info on the model (is it a nano s, nano x, ...)
	 * device: transport specific device info
	 */

	/**
	 */

	/**
	 * Transport defines the generic interface to share between node/u2f impl
	 * A **Descriptor** is a parametric type that is up to be determined for the implementation.
	 * it can be for instance an ID, an file path, a URL,...
	 */
	var Transport = function () {
	  function Transport() {
	    var _this = this;

	    _classCallCheck(this, Transport);

	    this.exchangeTimeout = 30000;
	    this._events = new _events3.default();

	    this.send = function () {
	      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(cla, ins, p1, p2) {
	        var data = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : Buffer.alloc(0);
	        var statusList = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [lib.StatusCodes.OK];
	        var response, sw;
	        return regeneratorRuntime.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                if (!(data.length >= 256)) {
	                  _context.next = 2;
	                  break;
	                }

	                throw new lib.TransportError("data.length exceed 256 bytes limit. Got: " + data.length, "DataLengthTooBig");

	              case 2:
	                _context.next = 4;
	                return _this.exchange(Buffer.concat([Buffer.from([cla, ins, p1, p2]), Buffer.from([data.length]), data]));

	              case 4:
	                response = _context.sent;
	                sw = response.readUInt16BE(response.length - 2);

	                if (statusList.some(function (s) {
	                  return s === sw;
	                })) {
	                  _context.next = 8;
	                  break;
	                }

	                throw new lib.TransportStatusError(sw);

	              case 8:
	                return _context.abrupt("return", response);

	              case 9:
	              case "end":
	                return _context.stop();
	            }
	          }
	        }, _callee, _this);
	      }));

	      return function (_x, _x2, _x3, _x4) {
	        return _ref.apply(this, arguments);
	      };
	    }();

	    this.exchangeAtomicImpl = function () {
	      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(f) {
	        var resolveBusy, busyPromise, res;
	        return regeneratorRuntime.wrap(function _callee2$(_context2) {
	          while (1) {
	            switch (_context2.prev = _context2.next) {
	              case 0:
	                if (!_this.exchangeBusyPromise) {
	                  _context2.next = 2;
	                  break;
	                }

	                throw new lib.TransportError("Transport race condition", "RaceCondition");

	              case 2:
	                resolveBusy = void 0;
	                busyPromise = new Promise(function (r) {
	                  resolveBusy = r;
	                });

	                _this.exchangeBusyPromise = busyPromise;
	                _context2.prev = 5;
	                _context2.next = 8;
	                return f();

	              case 8:
	                res = _context2.sent;
	                return _context2.abrupt("return", res);

	              case 10:
	                _context2.prev = 10;

	                if (resolveBusy) resolveBusy();
	                _this.exchangeBusyPromise = null;
	                return _context2.finish(10);

	              case 14:
	              case "end":
	                return _context2.stop();
	            }
	          }
	        }, _callee2, _this, [[5,, 10, 14]]);
	      }));

	      return function (_x7) {
	        return _ref2.apply(this, arguments);
	      };
	    }();

	    this._appAPIlock = null;
	  }

	  /**
	   * Statically check if a transport is supported on the user's platform/browser.
	   */


	  /**
	   * List once all available descriptors. For a better granularity, checkout `listen()`.
	   * @return a promise of descriptors
	   * @example
	   * TransportFoo.list().then(descriptors => ...)
	   */


	  /**
	   * Listen all device events for a given Transport. The method takes an Obverver of DescriptorEvent and returns a Subscription (according to Observable paradigm https://github.com/tc39/proposal-observable )
	   * a DescriptorEvent is a `{ descriptor, type }` object. type can be `"add"` or `"remove"` and descriptor is a value you can pass to `open(descriptor)`.
	   * each listen() call will first emit all potential device already connected and then will emit events can come over times,
	   * for instance if you plug a USB device after listen() or a bluetooth device become discoverable.
	   * @param observer is an object with a next, error and complete function (compatible with observer pattern)
	   * @return a Subscription object on which you can `.unsubscribe()` to stop listening descriptors.
	   * @example
	  const sub = TransportFoo.listen({
	  next: e => {
	    if (e.type==="add") {
	      sub.unsubscribe();
	      const transport = await TransportFoo.open(e.descriptor);
	      ...
	    }
	  },
	  error: error => {},
	  complete: () => {}
	  })
	   */


	  /**
	   * attempt to create a Transport instance with potentially a descriptor.
	   * @param descriptor: the descriptor to open the transport with.
	   * @param timeout: an optional timeout
	   * @return a Promise of Transport instance
	   * @example
	  TransportFoo.open(descriptor).then(transport => ...)
	   */


	  /**
	   * low level api to communicate with the device
	   * This method is for implementations to implement but should not be directly called.
	   * Instead, the recommanded way is to use send() method
	   * @param apdu the data to send
	   * @return a Promise of response data
	   */


	  /**
	   * set the "scramble key" for the next exchanges with the device.
	   * Each App can have a different scramble key and they internally will set it at instanciation.
	   * @param key the scramble key
	   */


	  /**
	   * close the exchange with the device.
	   * @return a Promise that ends when the transport is closed.
	   */


	  _createClass(Transport, [{
	    key: "on",


	    /**
	     * Listen to an event on an instance of transport.
	     * Transport implementation can have specific events. Here is the common events:
	     * * `"disconnect"` : triggered if Transport is disconnected
	     */
	    value: function on(eventName, cb) {
	      this._events.on(eventName, cb);
	    }

	    /**
	     * Stop listening to an event on an instance of transport.
	     */

	  }, {
	    key: "off",
	    value: function off(eventName, cb) {
	      this._events.removeListener(eventName, cb);
	    }
	  }, {
	    key: "emit",
	    value: function emit(event) {
	      var _events;

	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      (_events = this._events).emit.apply(_events, [event].concat(_toConsumableArray(args)));
	    }

	    /**
	     * Enable or not logs of the binary exchange
	     */

	  }, {
	    key: "setDebugMode",
	    value: function setDebugMode() {
	      console.warn("setDebugMode is deprecated. use @ledgerhq/logs instead. No logs are emitted in this anymore.");
	    }

	    /**
	     * Set a timeout (in milliseconds) for the exchange call. Only some transport might implement it. (e.g. U2F)
	     */

	  }, {
	    key: "setExchangeTimeout",
	    value: function setExchangeTimeout(exchangeTimeout) {
	      this.exchangeTimeout = exchangeTimeout;
	    }

	    /**
	     * wrapper on top of exchange to simplify work of the implementation.
	     * @param cla
	     * @param ins
	     * @param p1
	     * @param p2
	     * @param data
	     * @param statusList is a list of accepted status code (shorts). [0x9000] by default
	     * @return a Promise of response buffer
	     */

	  }, {
	    key: "decorateAppAPIMethods",
	    value: function decorateAppAPIMethods(self, methods, scrambleKey) {
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;

	      try {
	        for (var _iterator = methods[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var methodName = _step.value;

	          self[methodName] = this.decorateAppAPIMethod(methodName, self[methodName], self, scrambleKey);
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	    }
	  }, {
	    key: "decorateAppAPIMethod",
	    value: function decorateAppAPIMethod(methodName, f, ctx, scrambleKey) {
	      var _this2 = this;

	      return function () {
	        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
	          for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	            args[_key2] = arguments[_key2];
	          }

	          var _appAPIlock;

	          return regeneratorRuntime.wrap(function _callee3$(_context3) {
	            while (1) {
	              switch (_context3.prev = _context3.next) {
	                case 0:
	                  _appAPIlock = _this2._appAPIlock;

	                  if (!_appAPIlock) {
	                    _context3.next = 3;
	                    break;
	                  }

	                  return _context3.abrupt("return", Promise.reject(new lib.TransportError("Ledger Device is busy (lock " + _appAPIlock + ")", "TransportLocked")));

	                case 3:
	                  _context3.prev = 3;

	                  _this2._appAPIlock = methodName;
	                  _this2.setScrambleKey(scrambleKey);
	                  _context3.next = 8;
	                  return f.apply(ctx, args);

	                case 8:
	                  return _context3.abrupt("return", _context3.sent);

	                case 9:
	                  _context3.prev = 9;

	                  _this2._appAPIlock = null;
	                  return _context3.finish(9);

	                case 12:
	                case "end":
	                  return _context3.stop();
	              }
	            }
	          }, _callee3, _this2, [[3,, 9, 12]]);
	        }));

	        return function () {
	          return _ref3.apply(this, arguments);
	        };
	      }();
	    }
	  }], [{
	    key: "create",


	    /**
	     * create() allows to open the first descriptor available or
	     * throw if there is none or if timeout is reached.
	     * This is a light helper, alternative to using listen() and open() (that you may need for any more advanced usecase)
	     * @example
	    TransportFoo.create().then(transport => ...)
	     */
	    value: function create() {
	      var _this3 = this;

	      var openTimeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;
	      var listenTimeout = arguments[1];

	      return new Promise(function (resolve, reject) {
	        var found = false;
	        var sub = _this3.listen({
	          next: function next(e) {
	            found = true;
	            if (sub) sub.unsubscribe();
	            if (listenTimeoutId) clearTimeout(listenTimeoutId);
	            _this3.open(e.descriptor, openTimeout).then(resolve, reject);
	          },
	          error: function error(e) {
	            if (listenTimeoutId) clearTimeout(listenTimeoutId);
	            reject(e);
	          },
	          complete: function complete() {
	            if (listenTimeoutId) clearTimeout(listenTimeoutId);
	            if (!found) {
	              reject(new lib.TransportError(_this3.ErrorMessage_NoDeviceFound, "NoDeviceFound"));
	            }
	          }
	        });
	        var listenTimeoutId = listenTimeout ? setTimeout(function () {
	          sub.unsubscribe();
	          reject(new lib.TransportError(_this3.ErrorMessage_ListenTimeout, "ListenTimeout"));
	        }, listenTimeout) : null;
	      });
	    }

	    // $FlowFixMe

	  }]);

	  return Transport;
	}();

	Transport.ErrorMessage_ListenTimeout = "No Ledger device found (timeout)";
	Transport.ErrorMessage_NoDeviceFound = "No Ledger device found";
	exports.default = Transport;

	});

	unwrapExports(Transport_1);
	var Transport_2 = Transport_1.getAltStatusMessage;
	var Transport_3 = Transport_1.StatusCodes;
	var Transport_4 = Transport_1.TransportStatusError;
	var Transport_5 = Transport_1.TransportError;

	var hidFraming = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});



	var Tag = 0x05;

	function asUInt16BE(value) {
	  var b = Buffer.alloc(2);
	  b.writeUInt16BE(value, 0);
	  return b;
	}

	var initialAcc = {
	  data: Buffer.alloc(0),
	  dataLength: 0,
	  sequence: 0
	};

	/**
	 *
	 */
	var createHIDframing = function createHIDframing(channel, packetSize) {
	  return {
	    makeBlocks: function makeBlocks(apdu) {
	      var data = Buffer.concat([asUInt16BE(apdu.length), apdu]);
	      var blockSize = packetSize - 5;
	      var nbBlocks = Math.ceil(data.length / blockSize);
	      data = Buffer.concat([data, // fill data with padding
	      Buffer.alloc(nbBlocks * blockSize - data.length + 1).fill(0)]);

	      var blocks = [];
	      for (var i = 0; i < nbBlocks; i++) {
	        var head = Buffer.alloc(5);
	        head.writeUInt16BE(channel, 0);
	        head.writeUInt8(Tag, 2);
	        head.writeUInt16BE(i, 3);
	        var chunk = data.slice(i * blockSize, (i + 1) * blockSize);
	        blocks.push(Buffer.concat([head, chunk]));
	      }
	      return blocks;
	    },
	    reduceResponse: function reduceResponse(acc, chunk) {
	      var _ref = acc || initialAcc,
	          data = _ref.data,
	          dataLength = _ref.dataLength,
	          sequence = _ref.sequence;

	      if (chunk.readUInt16BE(0) !== channel) {
	        throw new lib.TransportError("Invalid channel", "InvalidChannel");
	      }
	      if (chunk.readUInt8(2) !== Tag) {
	        throw new lib.TransportError("Invalid tag", "InvalidTag");
	      }
	      if (chunk.readUInt16BE(3) !== sequence) {
	        throw new lib.TransportError("Invalid sequence", "InvalidSequence");
	      }

	      if (!acc) {
	        dataLength = chunk.readUInt16BE(5);
	      }
	      sequence++;
	      var chunkData = chunk.slice(acc ? 5 : 7);
	      data = Buffer.concat([data, chunkData]);
	      if (data.length > dataLength) {
	        data = data.slice(0, dataLength);
	      }

	      return {
	        data: data,
	        dataLength: dataLength,
	        sequence: sequence
	      };
	    },
	    getReducedResult: function getReducedResult(acc) {
	      if (acc && acc.dataLength === acc.data.length) {
	        return acc.data;
	      }
	    }
	  };
	};

	exports.default = createHIDframing;

	});

	unwrapExports(hidFraming);

	var lib$1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	/**
	 * The USB product IDs will be defined as MMII, encoding a model (MM) and an interface bitfield (II)
	 *
	 ** Model
	 * Ledger Nano S : 0x10
	 * Ledger Blue : 0x00
	 * Ledger Nano X : 0x40
	 *
	 ** Interface support bitfield
	 * Generic HID : 0x01
	 * Keyboard HID : 0x02
	 * U2F : 0x04
	 * CCID : 0x08
	 * WebUSB : 0x10
	 */

	var IIGenericHID = exports.IIGenericHID = 0x01;
	var IIKeyboardHID = exports.IIKeyboardHID = 0x02;
	var IIU2F = exports.IIU2F = 0x04;
	var IICCID = exports.IICCID = 0x08;
	var IIWebUSB = exports.IIWebUSB = 0x10;

	var devices = {
	  blue: {
	    id: "blue",
	    productName: "Ledger Blue",
	    productIdMM: 0,
	    legacyUsbProductId: 0x0000,
	    usbOnly: true
	  },
	  nanoS: {
	    id: "nanoS",
	    productName: "Ledger Nano S",
	    productIdMM: 1,
	    legacyUsbProductId: 0x0001,
	    usbOnly: true
	  },
	  nanoX: {
	    id: "nanoX",
	    productName: "Ledger Nano X",
	    productIdMM: 4,
	    legacyUsbProductId: 0x0004,
	    usbOnly: false,
	    bluetoothSpec: [{
	      // this is the legacy one (prototype version). we will eventually drop it.
	      serviceUuid: "d973f2e0-b19e-11e2-9e96-0800200c9a66",
	      notifyUuid: "d973f2e1-b19e-11e2-9e96-0800200c9a66",
	      writeUuid: "d973f2e2-b19e-11e2-9e96-0800200c9a66"
	    }, {
	      serviceUuid: "13d63400-2c97-0004-0000-4c6564676572",
	      notifyUuid: "13d63400-2c97-0004-0001-4c6564676572",
	      writeUuid: "13d63400-2c97-0004-0002-4c6564676572"
	    }]
	  }
	};

	// $FlowFixMe
	var devicesList = Object.values(devices);

	/**
	 *
	 */
	var ledgerUSBVendorId = exports.ledgerUSBVendorId = 0x2c97;

	/**
	 *
	 */
	var getDeviceModel = exports.getDeviceModel = function getDeviceModel(id) {
	  var info = devices[id];
	  if (!info) throw new Error("device '" + id + "' does not exist");
	  return info;
	};

	/**
	 *
	 */
	var identifyUSBProductId = exports.identifyUSBProductId = function identifyUSBProductId(usbProductId) {
	  var legacy = devicesList.find(function (d) {
	    return d.legacyUsbProductId === usbProductId;
	  });
	  if (legacy) return legacy;
	  var mm = usbProductId >> 8;
	  var deviceModel = devicesList.find(function (d) {
	    return d.productIdMM === mm;
	  });
	  return deviceModel;
	};

	var bluetoothServices = [];
	var serviceUuidToInfos = {};

	for (var _id in devices) {
	  var _deviceModel = devices[_id];
	  var _bluetoothSpec = _deviceModel.bluetoothSpec;

	  if (_bluetoothSpec) {
	    for (var i = 0; i < _bluetoothSpec.length; i++) {
	      var spec = _bluetoothSpec[i];
	      bluetoothServices.push(spec.serviceUuid);
	      serviceUuidToInfos[spec.serviceUuid] = serviceUuidToInfos[spec.serviceUuid.replace(/-/g, "")] = _extends({ deviceModel: _deviceModel }, spec);
	    }
	  }
	}

	/**
	 *
	 */
	var getBluetoothServiceUuids = exports.getBluetoothServiceUuids = function getBluetoothServiceUuids() {
	  return bluetoothServices;
	};

	/**
	 *
	 */
	var getInfosForServiceUuid = exports.getInfosForServiceUuid = function getInfosForServiceUuid(uuid) {
	  return serviceUuidToInfos[uuid.toLowerCase()];
	};

	/**
	 *
	 */


	/**
	 *
	 */


	/**
	 *
	 */

	});

	unwrapExports(lib$1);
	var lib_1$1 = lib$1.IIGenericHID;
	var lib_2$1 = lib$1.IIKeyboardHID;
	var lib_3$1 = lib$1.IIU2F;
	var lib_4$1 = lib$1.IICCID;
	var lib_5$1 = lib$1.IIWebUSB;
	var lib_6$1 = lib$1.ledgerUSBVendorId;
	var lib_7$1 = lib$1.getDeviceModel;
	var lib_8$1 = lib$1.identifyUSBProductId;
	var lib_9$1 = lib$1.getBluetoothServiceUuids;
	var lib_10$1 = lib$1.getInfosForServiceUuid;

	var lib$2 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});


	/**
	 * A Log object
	 */
	var id = 0;
	var subscribers = [];

	/**
	 * log something
	 * @param type a namespaced identifier of the log (it is not a level like "debug", "error" but more like "apdu-in", "apdu-out", etc...)
	 * @param message a clear message of the log associated to the type
	 */
	var log = exports.log = function log(type, message, data) {
	  var obj = { type: type, id: String(++id), date: new Date() };
	  if (message) obj.message = message;
	  if (data) obj.data = data;
	  dispatch(obj);
	};

	/**
	 * listen to logs.
	 * @param cb that is called for each future log() with the Log object
	 * @return a function that can be called to unsubscribe the listener
	 */
	var listen = exports.listen = function listen(cb) {
	  subscribers.push(cb);
	  return function () {
	    var i = subscribers.indexOf(cb);
	    if (i !== -1) {
	      // equivalent of subscribers.splice(i, 1) // https://twitter.com/Rich_Harris/status/1125850391155965952
	      subscribers[i] = subscribers[subscribers.length - 1];
	      subscribers.pop();
	    }
	  };
	};

	function dispatch(log) {
	  for (var i = 0; i < subscribers.length; i++) {
	    try {
	      subscribers[i](log);
	    } catch (e) {
	      console.error(e);
	    }
	  }
	}

	// for debug purpose
	commonjsGlobal.__ledgerLogsListen = listen;

	});

	var index$2 = unwrapExports(lib$2);
	var lib_1$2 = lib$2.log;
	var lib_2$2 = lib$2.listen;

	var index$3 = /*#__PURE__*/Object.freeze({
		default: index$2,
		__moduleExports: lib$2,
		log: lib_1$2,
		listen: lib_2$2
	});

	var webusb = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.isSupported = exports.getFirstLedgerDevice = exports.getLedgerDevices = exports.requestLedgerDevice = undefined;

	var requestLedgerDevice = exports.requestLedgerDevice = function () {
	  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
	    var device;
	    return regeneratorRuntime.wrap(function _callee$(_context) {
	      while (1) {
	        switch (_context.prev = _context.next) {
	          case 0:
	            _context.next = 2;
	            return navigator.usb.requestDevice({ filters: ledgerDevices });

	          case 2:
	            device = _context.sent;
	            return _context.abrupt("return", device);

	          case 4:
	          case "end":
	            return _context.stop();
	        }
	      }
	    }, _callee, this);
	  }));

	  return function requestLedgerDevice() {
	    return _ref.apply(this, arguments);
	  };
	}();

	var getLedgerDevices = exports.getLedgerDevices = function () {
	  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
	    var devices;
	    return regeneratorRuntime.wrap(function _callee2$(_context2) {
	      while (1) {
	        switch (_context2.prev = _context2.next) {
	          case 0:
	            _context2.next = 2;
	            return navigator.usb.getDevices();

	          case 2:
	            devices = _context2.sent;
	            return _context2.abrupt("return", devices.filter(function (d) {
	              return d.vendorId === lib$1.ledgerUSBVendorId;
	            }));

	          case 4:
	          case "end":
	            return _context2.stop();
	        }
	      }
	    }, _callee2, this);
	  }));

	  return function getLedgerDevices() {
	    return _ref2.apply(this, arguments);
	  };
	}();

	var getFirstLedgerDevice = exports.getFirstLedgerDevice = function () {
	  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
	    var existingDevices;
	    return regeneratorRuntime.wrap(function _callee3$(_context3) {
	      while (1) {
	        switch (_context3.prev = _context3.next) {
	          case 0:
	            _context3.next = 2;
	            return getLedgerDevices();

	          case 2:
	            existingDevices = _context3.sent;

	            if (!(existingDevices.length > 0)) {
	              _context3.next = 5;
	              break;
	            }

	            return _context3.abrupt("return", existingDevices[0]);

	          case 5:
	            return _context3.abrupt("return", requestLedgerDevice());

	          case 6:
	          case "end":
	            return _context3.stop();
	        }
	      }
	    }, _callee3, this);
	  }));

	  return function getFirstLedgerDevice() {
	    return _ref3.apply(this, arguments);
	  };
	}();



	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

	var ledgerDevices = [{ vendorId: lib$1.ledgerUSBVendorId }];

	var isSupported = exports.isSupported = function isSupported() {
	  return Promise.resolve(
	  // $FlowFixMe
	  !!navigator && !!navigator.usb && typeof navigator.usb.getDevices === "function");
	};

	});

	unwrapExports(webusb);
	var webusb_1 = webusb.isSupported;
	var webusb_2 = webusb.getFirstLedgerDevice;
	var webusb_3 = webusb.getLedgerDevices;
	var webusb_4 = webusb.requestLedgerDevice;

	var TransportWebUSB_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



	var _hwTransport2 = _interopRequireDefault(Transport_1);



	var _hidFraming2 = _interopRequireDefault(hidFraming);









	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var configurationValue = 1;
	var interfaceNumber = 2;
	var endpointNumber = 3;

	/**
	 * WebUSB Transport implementation
	 * @example
	 * import TransportWebUSB from "@ledgerhq/hw-transport-webusb";
	 * ...
	 * TransportWebUSB.create().then(transport => ...)
	 */

	var TransportWebUSB = function (_Transport) {
	  _inherits(TransportWebUSB, _Transport);

	  function TransportWebUSB(device) {
	    _classCallCheck(this, TransportWebUSB);

	    var _this = _possibleConstructorReturn(this, (TransportWebUSB.__proto__ || Object.getPrototypeOf(TransportWebUSB)).call(this));

	    _initialiseProps.call(_this);

	    _this.device = device;
	    _this.deviceModel = (0, lib$1.identifyUSBProductId)(device.productId);
	    return _this;
	  }

	  /**
	   * Check if WebUSB transport is supported.
	   */


	  /**
	   * List the WebUSB devices that was previously authorized by the user.
	   */


	  /**
	   * Actively listen to WebUSB devices and emit ONE device
	   * that was either accepted before, if not it will trigger the native permission UI.
	   *
	   * Important: it must be called in the context of a UI click!
	   */


	  _createClass(TransportWebUSB, [{
	    key: "close",


	    /**
	     * Release the transport device
	     */
	    value: function () {
	      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
	        return regeneratorRuntime.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                _context.next = 2;
	                return this.exchangeBusyPromise;

	              case 2:
	                _context.next = 4;
	                return this.device.releaseInterface(interfaceNumber);

	              case 4:
	                _context.next = 6;
	                return this.device.reset();

	              case 6:
	                _context.next = 8;
	                return this.device.close();

	              case 8:
	              case "end":
	                return _context.stop();
	            }
	          }
	        }, _callee, this);
	      }));

	      function close() {
	        return _ref.apply(this, arguments);
	      }

	      return close;
	    }()

	    /**
	     * Exchange with the device using APDU protocol.
	     * @param apdu
	     * @returns a promise of apdu response
	     */

	  }, {
	    key: "setScrambleKey",
	    value: function setScrambleKey() {}
	  }], [{
	    key: "request",


	    /**
	     * Similar to create() except it will always display the device permission (even if some devices are already accepted).
	     */
	    value: function () {
	      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
	        var device;
	        return regeneratorRuntime.wrap(function _callee2$(_context2) {
	          while (1) {
	            switch (_context2.prev = _context2.next) {
	              case 0:
	                _context2.next = 2;
	                return (0, webusb.requestLedgerDevice)();

	              case 2:
	                device = _context2.sent;
	                return _context2.abrupt("return", TransportWebUSB.open(device));

	              case 4:
	              case "end":
	                return _context2.stop();
	            }
	          }
	        }, _callee2, this);
	      }));

	      function request() {
	        return _ref2.apply(this, arguments);
	      }

	      return request;
	    }()

	    /**
	     * Similar to create() except it will never display the device permission (it returns a Promise<?Transport>, null if it fails to find a device).
	     */

	  }, {
	    key: "openConnected",
	    value: function () {
	      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
	        var devices;
	        return regeneratorRuntime.wrap(function _callee3$(_context3) {
	          while (1) {
	            switch (_context3.prev = _context3.next) {
	              case 0:
	                _context3.next = 2;
	                return (0, webusb.getLedgerDevices)();

	              case 2:
	                devices = _context3.sent;

	                if (!(devices.length === 0)) {
	                  _context3.next = 5;
	                  break;
	                }

	                return _context3.abrupt("return", null);

	              case 5:
	                return _context3.abrupt("return", TransportWebUSB.open(devices[0]));

	              case 6:
	              case "end":
	                return _context3.stop();
	            }
	          }
	        }, _callee3, this);
	      }));

	      function openConnected() {
	        return _ref3.apply(this, arguments);
	      }

	      return openConnected;
	    }()

	    /**
	     * Create a Ledger transport with a USBDevice
	     */

	  }, {
	    key: "open",
	    value: function () {
	      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(device) {
	        var transport, onDisconnect;
	        return regeneratorRuntime.wrap(function _callee4$(_context4) {
	          while (1) {
	            switch (_context4.prev = _context4.next) {
	              case 0:
	                _context4.next = 2;
	                return device.open();

	              case 2:
	                if (!(device.configuration === null)) {
	                  _context4.next = 5;
	                  break;
	                }

	                _context4.next = 5;
	                return device.selectConfiguration(configurationValue);

	              case 5:
	                _context4.next = 7;
	                return device.reset();

	              case 7:
	                _context4.prev = 7;
	                _context4.next = 10;
	                return device.claimInterface(interfaceNumber);

	              case 10:
	                _context4.next = 17;
	                break;

	              case 12:
	                _context4.prev = 12;
	                _context4.t0 = _context4["catch"](7);
	                _context4.next = 16;
	                return device.close();

	              case 16:
	                throw new lib.TransportInterfaceNotAvailable(_context4.t0.message);

	              case 17:
	                transport = new TransportWebUSB(device);

	                onDisconnect = function onDisconnect(e) {
	                  if (device === e.device) {
	                    // $FlowFixMe
	                    navigator.usb.removeEventListener("disconnect", onDisconnect);
	                    transport._emitDisconnect(new lib.DisconnectedDevice());
	                  }
	                };
	                // $FlowFixMe


	                navigator.usb.addEventListener("disconnect", onDisconnect);
	                return _context4.abrupt("return", transport);

	              case 21:
	              case "end":
	                return _context4.stop();
	            }
	          }
	        }, _callee4, this, [[7, 12]]);
	      }));

	      function open(_x) {
	        return _ref4.apply(this, arguments);
	      }

	      return open;
	    }()
	  }]);

	  return TransportWebUSB;
	}(_hwTransport2.default);

	TransportWebUSB.isSupported = webusb.isSupported;
	TransportWebUSB.list = webusb.getLedgerDevices;

	TransportWebUSB.listen = function (observer) {
	  var unsubscribed = false;
	  (0, webusb.getFirstLedgerDevice)().then(function (device) {
	    if (!unsubscribed) {
	      var deviceModel = (0, lib$1.identifyUSBProductId)(device.productId);
	      observer.next({ type: "add", descriptor: device, deviceModel: deviceModel });
	      observer.complete();
	    }
	  }, function (error) {
	    observer.error(new lib.TransportOpenUserCancelled(error.message));
	  });
	  function unsubscribe() {
	    unsubscribed = true;
	  }
	  return { unsubscribe: unsubscribe };
	};

	var _initialiseProps = function _initialiseProps() {
	  var _this2 = this;

	  this.channel = Math.floor(Math.random() * 0xffff);
	  this.packetSize = 64;
	  this._disconnectEmitted = false;

	  this._emitDisconnect = function (e) {
	    if (_this2._disconnectEmitted) return;
	    _this2._disconnectEmitted = true;
	    _this2.emit("disconnect", e);
	  };

	  this.exchange = function (apdu) {
	    return _this2.exchangeAtomicImpl(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
	      var channel, packetSize, framing, blocks, i, result, acc, r, buffer;
	      return regeneratorRuntime.wrap(function _callee5$(_context5) {
	        while (1) {
	          switch (_context5.prev = _context5.next) {
	            case 0:
	              channel = _this2.channel, packetSize = _this2.packetSize;

	              (0, lib$2.log)("apdu", "=> " + apdu.toString("hex"));

	              framing = (0, _hidFraming2.default)(channel, packetSize);

	              // Write...

	              blocks = framing.makeBlocks(apdu);
	              i = 0;

	            case 5:
	              if (!(i < blocks.length)) {
	                _context5.next = 12;
	                break;
	              }

	              (0, lib$2.log)("hid-frame", "=> " + blocks[i].toString("hex"));
	              _context5.next = 9;
	              return _this2.device.transferOut(endpointNumber, blocks[i]);

	            case 9:
	              i++;
	              _context5.next = 5;
	              break;

	            case 12:

	              // Read...
	              result = void 0;
	              acc = void 0;

	            case 14:
	              if (result = framing.getReducedResult(acc)) {
	                _context5.next = 23;
	                break;
	              }

	              _context5.next = 17;
	              return _this2.device.transferIn(endpointNumber, packetSize);

	            case 17:
	              r = _context5.sent;
	              buffer = Buffer.from(r.data.buffer);

	              (0, lib$2.log)("hid-frame", "<= " + buffer.toString("hex"));
	              acc = framing.reduceResponse(acc, buffer);
	              _context5.next = 14;
	              break;

	            case 23:

	              (0, lib$2.log)("apdu", "<= " + result.toString("hex"));
	              return _context5.abrupt("return", result);

	            case 25:
	            case "end":
	              return _context5.stop();
	          }
	        }
	      }, _callee5, _this2);
	    }))).catch(function (e) {
	      if (e && e.message && e.message.includes("disconnected")) {
	        _this2._emitDisconnect(e);
	        throw new lib.DisconnectedDeviceDuringOperation(e.message);
	      }
	      throw e;
	    });
	  };
	};

	exports.default = TransportWebUSB;

	});

	var TransportWebUSB = unwrapExports(TransportWebUSB_1);

	var TransportWebUSB$1 = /*#__PURE__*/Object.freeze({
		default: TransportWebUSB,
		__moduleExports: TransportWebUSB_1
	});

	// Copyright 2014 Google Inc. All rights reserved

	/** Namespace for the U2F api.
	 * @type {Object}
	 */
	var u2f = u2f || {};

	var googleU2fApi = u2f; // Adaptation for u2f-api package

	/**
	 * The U2F extension id
	 * @type {string}
	 * @const
	 */
	u2f.EXTENSION_ID = 'kmendfapggjehodndflmmgagdbamhnfd';

	/**
	 * Message types for messsages to/from the extension
	 * @const
	 * @enum {string}
	 */
	u2f.MessageTypes = {
	  'U2F_REGISTER_REQUEST': 'u2f_register_request',
	  'U2F_SIGN_REQUEST': 'u2f_sign_request',
	  'U2F_REGISTER_RESPONSE': 'u2f_register_response',
	  'U2F_SIGN_RESPONSE': 'u2f_sign_response'
	};

	/**
	 * Response status codes
	 * @const
	 * @enum {number}
	 */
	u2f.ErrorCodes = {
	  'OK': 0,
	  'OTHER_ERROR': 1,
	  'BAD_REQUEST': 2,
	  'CONFIGURATION_UNSUPPORTED': 3,
	  'DEVICE_INELIGIBLE': 4,
	  'TIMEOUT': 5
	};


	// Low level MessagePort API support

	/**
	 * Call MessagePort disconnect
	 */
	u2f.disconnect = function() {
	  if (u2f.port_ && u2f.port_.port_) {
	    u2f.port_.port_.disconnect();
	    u2f.port_ = null;
	  }
	};

	/**
	 * Sets up a MessagePort to the U2F extension using the
	 * available mechanisms.
	 * @param {function((MessagePort|u2f.WrappedChromeRuntimePort_))} callback
	 */
	u2f.getMessagePort = function(callback) {
	  if (typeof chrome != 'undefined' && chrome.runtime) {
	    // The actual message here does not matter, but we need to get a reply
	    // for the callback to run. Thus, send an empty signature request
	    // in order to get a failure response.
	    var msg = {
	      type: u2f.MessageTypes.U2F_SIGN_REQUEST,
	      signRequests: []
	    };
	    chrome.runtime.sendMessage(u2f.EXTENSION_ID, msg, function() {
	      if (!chrome.runtime.lastError) {
	        // We are on a whitelisted origin and can talk directly
	        // with the extension.
	        u2f.getChromeRuntimePort_(callback);
	      } else {
	        // chrome.runtime was available, but we couldn't message
	        // the extension directly, use iframe
	        u2f.getIframePort_(callback);
	      }
	    });
	  } else {
	    // chrome.runtime was not available at all, which is normal
	    // when this origin doesn't have access to any extensions.
	    u2f.getIframePort_(callback);
	  }
	};

	/**
	 * Connects directly to the extension via chrome.runtime.connect
	 * @param {function(u2f.WrappedChromeRuntimePort_)} callback
	 * @private
	 */
	u2f.getChromeRuntimePort_ = function(callback) {
	  var port = chrome.runtime.connect(u2f.EXTENSION_ID,
	    {'includeTlsChannelId': true});
	  setTimeout(function() {
	    callback(null, new u2f.WrappedChromeRuntimePort_(port));
	  }, 0);
	};

	/**
	 * A wrapper for chrome.runtime.Port that is compatible with MessagePort.
	 * @param {Port} port
	 * @constructor
	 * @private
	 */
	u2f.WrappedChromeRuntimePort_ = function(port) {
	  this.port_ = port;
	};

	/**
	 * Posts a message on the underlying channel.
	 * @param {Object} message
	 */
	u2f.WrappedChromeRuntimePort_.prototype.postMessage = function(message) {
	  this.port_.postMessage(message);
	};

	/**
	 * Emulates the HTML 5 addEventListener interface. Works only for the
	 * onmessage event, which is hooked up to the chrome.runtime.Port.onMessage.
	 * @param {string} eventName
	 * @param {function({data: Object})} handler
	 */
	u2f.WrappedChromeRuntimePort_.prototype.addEventListener =
	    function(eventName, handler) {
	  var name = eventName.toLowerCase();
	  if (name == 'message' || name == 'onmessage') {
	    this.port_.onMessage.addListener(function(message) {
	      // Emulate a minimal MessageEvent object
	      handler({'data': message});
	    });
	  } else {
	    console.error('WrappedChromeRuntimePort only supports onMessage');
	  }
	};

	/**
	 * Sets up an embedded trampoline iframe, sourced from the extension.
	 * @param {function(MessagePort)} callback
	 * @private
	 */
	u2f.getIframePort_ = function(callback) {
	  // Create the iframe
	  var iframeOrigin = 'chrome-extension://' + u2f.EXTENSION_ID;
	  var iframe = document.createElement('iframe');
	  iframe.src = iframeOrigin + '/u2f-comms.html';
	  iframe.setAttribute('style', 'display:none');
	  document.body.appendChild(iframe);

	  var hasCalledBack = false;

	  var channel = new MessageChannel();
	  var ready = function(message) {
	    if (message.data == 'ready') {
	      channel.port1.removeEventListener('message', ready);
	      if (!hasCalledBack)
	      {
	        hasCalledBack = true;
	        callback(null, channel.port1);
	      }
	    } else {
	      console.error('First event on iframe port was not "ready"');
	    }
	  };
	  channel.port1.addEventListener('message', ready);
	  channel.port1.start();

	  iframe.addEventListener('load', function() {
	    // Deliver the port to the iframe and initialize
	    iframe.contentWindow.postMessage('init', iframeOrigin, [channel.port2]);
	  });

	  // Give this 200ms to initialize, after that, we treat this method as failed
	  setTimeout(function() {
	    if (!hasCalledBack)
	    {
	      hasCalledBack = true;
	      callback(new Error("IFrame extension not supported"));
	    }
	  }, 200);
	};


	// High-level JS API

	/**
	 * Default extension response timeout in seconds.
	 * @const
	 */
	u2f.EXTENSION_TIMEOUT_SEC = 30;

	/**
	 * A singleton instance for a MessagePort to the extension.
	 * @type {MessagePort|u2f.WrappedChromeRuntimePort_}
	 * @private
	 */
	u2f.port_ = null;

	/**
	 * Callbacks waiting for a port
	 * @type {Array.<function((MessagePort|u2f.WrappedChromeRuntimePort_))>}
	 * @private
	 */
	u2f.waitingForPort_ = [];

	/**
	 * A counter for requestIds.
	 * @type {number}
	 * @private
	 */
	u2f.reqCounter_ = 0;

	/**
	 * A map from requestIds to client callbacks
	 * @type {Object.<number,(function((u2f.Error|u2f.RegisterResponse))
	 *                       |function((u2f.Error|u2f.SignResponse)))>}
	 * @private
	 */
	u2f.callbackMap_ = {};

	/**
	 * Creates or retrieves the MessagePort singleton to use.
	 * @param {function((MessagePort|u2f.WrappedChromeRuntimePort_))} callback
	 * @private
	 */
	u2f.getPortSingleton_ = function(callback) {
	  if (u2f.port_) {
	    callback(null, u2f.port_);
	  } else {
	    if (u2f.waitingForPort_.length == 0) {
	      u2f.getMessagePort(function(err, port) {
	        if (!err) {
	          u2f.port_ = port;
	          u2f.port_.addEventListener('message',
	            /** @type {function(Event)} */ (u2f.responseHandler_));
	        }

	        // Careful, here be async callbacks. Maybe.
	        while (u2f.waitingForPort_.length)
	          u2f.waitingForPort_.shift()(err, port);
	      });
	    }
	    u2f.waitingForPort_.push(callback);
	  }
	};

	/**
	 * Handles response messages from the extension.
	 * @param {MessageEvent.<u2f.Response>} message
	 * @private
	 */
	u2f.responseHandler_ = function(message) {
	  var response = message.data;
	  var reqId = response['requestId'];
	  if (!reqId || !u2f.callbackMap_[reqId]) {
	    console.error('Unknown or missing requestId in response.');
	    return;
	  }
	  var cb = u2f.callbackMap_[reqId];
	  delete u2f.callbackMap_[reqId];
	  cb(null, response['responseData']);
	};

	/**
	 * Calls the callback with true or false as first and only argument
	 * @param {Function} callback
	 */
	u2f.isSupported = function(callback) {
	  u2f.getPortSingleton_(function(err, port) {
	    callback(!err);
	  });
	};

	/**
	 * Dispatches an array of sign requests to available U2F tokens.
	 * @param {Array.<u2f.SignRequest>} signRequests
	 * @param {function((u2f.Error|u2f.SignResponse))} callback
	 * @param {number=} opt_timeoutSeconds
	 */
	u2f.sign = function(signRequests, callback, opt_timeoutSeconds) {
	  u2f.getPortSingleton_(function(err, port) {
	    if (err)
	      return callback(err);

	    var reqId = ++u2f.reqCounter_;
	    u2f.callbackMap_[reqId] = callback;
	    var req = {
	      type: u2f.MessageTypes.U2F_SIGN_REQUEST,
	      signRequests: signRequests,
	      timeoutSeconds: (typeof opt_timeoutSeconds !== 'undefined' ?
	        opt_timeoutSeconds : u2f.EXTENSION_TIMEOUT_SEC),
	      requestId: reqId
	    };
	    port.postMessage(req);
	  });
	};

	/**
	 * Dispatches register requests to available U2F tokens. An array of sign
	 * requests identifies already registered tokens.
	 * @param {Array.<u2f.RegisterRequest>} registerRequests
	 * @param {Array.<u2f.SignRequest>} signRequests
	 * @param {function((u2f.Error|u2f.RegisterResponse))} callback
	 * @param {number=} opt_timeoutSeconds
	 */
	u2f.register = function(registerRequests, signRequests,
	    callback, opt_timeoutSeconds) {
	  u2f.getPortSingleton_(function(err, port) {
	    if (err)
	      return callback(err);

	    var reqId = ++u2f.reqCounter_;
	    u2f.callbackMap_[reqId] = callback;
	    var req = {
	      type: u2f.MessageTypes.U2F_REGISTER_REQUEST,
	      signRequests: signRequests,
	      registerRequests: registerRequests,
	      timeoutSeconds: (typeof opt_timeoutSeconds !== 'undefined' ?
	        opt_timeoutSeconds : u2f.EXTENSION_TIMEOUT_SEC),
	      requestId: reqId
	    };
	    port.postMessage(req);
	  });
	};

	var u2fApi = API;



	// Feature detection (yes really)
	var isBrowser = ( typeof navigator !== 'undefined' ) && !!navigator.userAgent;
	var isSafari = isBrowser && navigator.userAgent.match( /Safari\// )
		&& !navigator.userAgent.match( /Chrome\// );
	var isEDGE = isBrowser && navigator.userAgent.match( /Edge\/1[2345]/ );

	var _backend = null;
	function getBackend( Promise )
	{
		if ( !_backend )
			_backend = new Promise( function( resolve, reject )
			{
				function notSupported( )
				{
					// Note; {native: true} means *not* using Google's hack
					resolve( { u2f: null, native: true } );
				}

				if ( !isBrowser )
					return notSupported( );

				if ( isSafari )
					// Safari doesn't support U2F, and the Safari-FIDO-U2F
					// extension lacks full support (Multi-facet apps), so we
					// block it until proper support.
					return notSupported( );

				var hasNativeSupport =
					( typeof window.u2f !== 'undefined' ) &&
					( typeof window.u2f.sign === 'function' );

				if ( hasNativeSupport )
					resolve( { u2f: window.u2f, native: true } );

				if ( isEDGE )
					// We don't want to check for Google's extension hack on EDGE
					// as it'll cause trouble (popups, etc)
					return notSupported( );

				if ( location.protocol === 'http:' )
					// U2F isn't supported over http, only https
					return notSupported( );

				if ( typeof MessageChannel === 'undefined' )
					// Unsupported browser, the chrome hack would throw
					return notSupported( );

				// Test for google extension support
				googleU2fApi.isSupported( function( ok )
				{
					if ( ok )
						resolve( { u2f: googleU2fApi, native: false } );
					else
						notSupported( );
				} );
			} );

		return _backend;
	}

	function API( Promise )
	{
		return {
			isSupported   : isSupported.bind( Promise ),
			ensureSupport : ensureSupport.bind( Promise ),
			register      : register.bind( Promise ),
			sign          : sign.bind( Promise ),
			ErrorCodes    : API.ErrorCodes,
			ErrorNames    : API.ErrorNames
		};
	}

	API.ErrorCodes = {
		CANCELLED: -1,
		OK: 0,
		OTHER_ERROR: 1,
		BAD_REQUEST: 2,
		CONFIGURATION_UNSUPPORTED: 3,
		DEVICE_INELIGIBLE: 4,
		TIMEOUT: 5
	};
	API.ErrorNames = {
		"-1": "CANCELLED",
		"0": "OK",
		"1": "OTHER_ERROR",
		"2": "BAD_REQUEST",
		"3": "CONFIGURATION_UNSUPPORTED",
		"4": "DEVICE_INELIGIBLE",
		"5": "TIMEOUT"
	};

	function makeError( msg, err )
	{
		var code = err != null ? err.errorCode : 1; // Default to OTHER_ERROR
		var type = API.ErrorNames[ '' + code ];
		var error = new Error( msg );
		error.metaData = {
			type: type,
			code: code
		};
		return error;
	}

	function deferPromise( Promise, promise )
	{
		var ret = { };
		ret.promise = new Promise( function( resolve, reject ) {
			ret.resolve = resolve;
			ret.reject = reject;
			promise.then( resolve, reject );
		} );
		/**
		 * Reject request promise and disconnect port if 'disconnect' flag is true
		 * @param {string} msg
		 * @param {boolean} disconnect
		 */
		ret.promise.cancel = function( msg, disconnect )
		{
			getBackend( Promise )
			.then( function( backend )
			{
				if ( disconnect && !backend.native )
					backend.u2f.disconnect( );

				ret.reject( makeError( msg, { errorCode: -1 } ) );
			} );
		};
		return ret;
	}

	function isSupported( )
	{
		var Promise = this;

		return getBackend( Promise )
		.then( function( backend )
		{
			return !!backend.u2f;
		} );
	}

	function _ensureSupport( backend )
	{
		if ( !backend.u2f )
		{
			if ( location.protocol === 'http:' )
				throw new Error( "U2F isn't supported over http, only https" );
			throw new Error( "U2F not supported" );
		}
	}

	function ensureSupport( )
	{
		var Promise = this;

		return getBackend( Promise )
		.then( _ensureSupport );
	}

	function register( registerRequests, signRequests /* = null */, timeout )
	{
		var Promise = this;

		if ( !Array.isArray( registerRequests ) )
			registerRequests = [ registerRequests ];

		if ( typeof signRequests === 'number' && typeof timeout === 'undefined' )
		{
			timeout = signRequests;
			signRequests = null;
		}

		if ( !signRequests )
			signRequests = [ ];

		return deferPromise( Promise, getBackend( Promise )
		.then( function( backend )
		{
			_ensureSupport( backend );

			var native = backend.native;
			var u2f = backend.u2f;

			return new Promise( function( resolve, reject )
			{
				function cbNative( response )
				{
					if ( response.errorCode )
						reject( makeError( "Registration failed", response ) );
					else
					{
						delete response.errorCode;
						resolve( response );
					}
				}

				function cbChrome( err, response )
				{
					if ( err )
						reject( err );
					else if ( response.errorCode )
						reject( makeError( "Registration failed", response ) );
					else
						resolve( response );
				}

				if ( native )
				{
					var appId = registerRequests[ 0 ].appId;

					u2f.register(
						appId, registerRequests, signRequests, cbNative, timeout );
				}
				else
				{
					u2f.register(
						registerRequests, signRequests, cbChrome, timeout );
				}
			} );
		} ) ).promise;
	}

	function sign( signRequests, timeout )
	{
		var Promise = this;

		if ( !Array.isArray( signRequests ) )
			signRequests = [ signRequests ];

		return deferPromise( Promise, getBackend( Promise )
		.then( function( backend )
		{
			_ensureSupport( backend );

			var native = backend.native;
			var u2f = backend.u2f;

			return new Promise( function( resolve, reject )
			{
				function cbNative( response )
				{
					if ( response.errorCode )
						reject( makeError( "Sign failed", response ) );
					else
					{
						delete response.errorCode;
						resolve( response );
					}
				}

				function cbChrome( err, response )
				{
					if ( err )
						reject( err );
					else if ( response.errorCode )
						reject( makeError( "Sign failed", response ) );
					else
						resolve( response );
				}

				if ( native )
				{
					var appId = signRequests[ 0 ].appId;
					var challenge = signRequests[ 0 ].challenge;

					u2f.sign( appId, challenge, signRequests, cbNative, timeout );
				}
				else
				{
					u2f.sign( signRequests, cbChrome, timeout );
				}
			} );
		} ) ).promise;
	}

	function makeDefault( func )
	{
		API[ func ] = function( )
		{
			if ( !commonjsGlobal.Promise )
				// This is very unlikely to ever happen, since browsers
				// supporting U2F will most likely support Promises.
				throw new Error( "The platform doesn't natively support promises" );

			var args = [ ].slice.call( arguments );
			return API( commonjsGlobal.Promise )[ func ].apply( null, args );
		};
	}

	// Provide default functions using the built-in Promise if available.
	makeDefault( 'isSupported' );
	makeDefault( 'ensureSupport' );
	makeDefault( 'register' );
	makeDefault( 'sign' );

	var u2fApi$1 = u2fApi;

	var helpers$2 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/* eslint-disable no-continue */
	/* eslint-disable no-param-reassign */
	/* eslint-disable no-prototype-builtins */

	var errorClasses = {};
	var deserializers = {};

	var addCustomErrorDeserializer = exports.addCustomErrorDeserializer = function addCustomErrorDeserializer(name, deserializer) {
	  deserializers[name] = deserializer;
	};

	var createCustomErrorClass = exports.createCustomErrorClass = function createCustomErrorClass(name) {
	  var C = function CustomError(message, fields) {
	    Object.assign(this, fields);
	    this.name = name;
	    this.message = message || name;
	    this.stack = new Error().stack;
	  };
	  // $FlowFixMe
	  C.prototype = new Error();

	  errorClasses[name] = C;
	  // $FlowFixMe we can't easily type a subset of Error for now...
	  return C;
	};

	// inspired from https://github.com/programble/errio/blob/master/index.js
	var deserializeError = exports.deserializeError = function deserializeError(object) {
	  if ((typeof object === "undefined" ? "undefined" : _typeof(object)) === "object" && object) {
	    try {
	      // $FlowFixMe FIXME HACK
	      var msg = JSON.parse(object.message);
	      if (msg.message && msg.name) {
	        object = msg;
	      }
	    } catch (e) {
	      // nothing
	    }

	    var error = void 0;
	    if (typeof object.name === "string") {
	      var _object = object,
	          name = _object.name;

	      var des = deserializers[name];
	      if (des) {
	        error = des(object);
	      } else {
	        var _constructor = name === "Error" ? Error : errorClasses[name];

	        if (!_constructor) {
	          console.warn("deserializing an unknown class '" + name + "'");
	          _constructor = createCustomErrorClass(name);
	        }

	        error = Object.create(_constructor.prototype);
	        try {
	          for (var prop in object) {
	            if (object.hasOwnProperty(prop)) {
	              error[prop] = object[prop];
	            }
	          }
	        } catch (e) {
	          // sometimes setting a property can fail (e.g. .name)
	        }
	      }
	    } else {
	      error = new Error(object.message);
	    }

	    if (!error.stack && Error.captureStackTrace) {
	      Error.captureStackTrace(error, deserializeError);
	    }
	    return error;
	  }
	  return new Error(String(object));
	};

	// inspired from https://github.com/sindresorhus/serialize-error/blob/master/index.js
	var serializeError = exports.serializeError = function serializeError(value) {
	  if (!value) return value;
	  if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object") {
	    return destroyCircular(value, []);
	  }
	  if (typeof value === "function") {
	    return "[Function: " + (value.name || "anonymous") + "]";
	  }
	  return value;
	};

	// https://www.npmjs.com/package/destroy-circular
	function destroyCircular(from, seen) {
	  var to = {};
	  seen.push(from);
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;

	  try {
	    for (var _iterator = Object.keys(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var key = _step.value;

	      var value = from[key];
	      if (typeof value === "function") {
	        continue;
	      }
	      if (!value || (typeof value === "undefined" ? "undefined" : _typeof(value)) !== "object") {
	        to[key] = value;
	        continue;
	      }
	      if (seen.indexOf(from[key]) === -1) {
	        to[key] = destroyCircular(from[key], seen.slice(0));
	        continue;
	      }
	      to[key] = "[Circular]";
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator.return) {
	        _iterator.return();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }

	  if (typeof from.name === "string") {
	    to.name = from.name;
	  }
	  if (typeof from.message === "string") {
	    to.message = from.message;
	  }
	  if (typeof from.stack === "string") {
	    to.stack = from.stack;
	  }
	  return to;
	}

	});

	unwrapExports(helpers$2);
	var helpers_1$1 = helpers$2.addCustomErrorDeserializer;
	var helpers_2$1 = helpers$2.createCustomErrorClass;
	var helpers_3$1 = helpers$2.deserializeError;
	var helpers_4$1 = helpers$2.serializeError;

	var lib$3 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.StatusCodes = exports.DBNotReset = exports.DBWrongPassword = exports.NoDBPathGiven = exports.FirmwareOrAppUpdateRequired = exports.LedgerAPI5xx = exports.LedgerAPI4xx = exports.GenuineCheckFailed = exports.PairingFailed = exports.SyncError = exports.FeeRequired = exports.FeeNotLoaded = exports.CantScanQRCode = exports.ETHAddressNonEIP = exports.WrongDeviceForAccount = exports.WebsocketConnectionFailed = exports.WebsocketConnectionError = exports.DeviceShouldStayInApp = exports.TransportInterfaceNotAvailable = exports.TransportOpenUserCancelled = exports.UserRefusedOnDevice = exports.UserRefusedAllowManager = exports.UserRefusedFirmwareUpdate = exports.UserRefusedAddress = exports.UserRefusedDeviceNameChange = exports.UpdateYourApp = exports.UnexpectedBootloader = exports.TimeoutTagged = exports.PasswordIncorrectError = exports.PasswordsDontMatchError = exports.NotEnoughGas = exports.NotEnoughBalanceBecauseDestinationNotCreated = exports.NotEnoughBalance = exports.NoAddressesFound = exports.NetworkDown = exports.ManagerUninstallBTCDep = exports.ManagerNotEnoughSpaceError = exports.ManagerDeviceLockedError = exports.ManagerAppRelyOnBTCError = exports.ManagerAppAlreadyInstalledError = exports.LedgerAPINotAvailable = exports.LedgerAPIErrorWithMessage = exports.LedgerAPIError = exports.UnknownMCU = exports.LatestMCUInstalledError = exports.InvalidAddressBecauseDestinationIsAlsoSource = exports.InvalidAddress = exports.HardResetFail = exports.FeeEstimationFailed = exports.EthAppPleaseEnableContractData = exports.EnpointConfigError = exports.DisconnectedDeviceDuringOperation = exports.DisconnectedDevice = exports.DeviceSocketNoBulkStatus = exports.DeviceSocketFail = exports.DeviceNameInvalid = exports.DeviceHalted = exports.DeviceInOSUExpected = exports.DeviceOnDashboardExpected = exports.DeviceNotGenuineError = exports.DeviceGenuineSocketEarlyClose = exports.DeviceAppVerifyNotSupported = exports.CurrencyNotSupported = exports.CashAddrNotSupported = exports.CantOpenDevice = exports.BtcUnmatchedApp = exports.BluetoothRequired = exports.AccountNameRequiredError = exports.addCustomErrorDeserializer = exports.createCustomErrorClass = exports.deserializeError = exports.serializeError = undefined;
	exports.TransportError = TransportError;
	exports.getAltStatusMessage = getAltStatusMessage;
	exports.TransportStatusError = TransportStatusError;



	exports.serializeError = helpers$2.serializeError;
	exports.deserializeError = helpers$2.deserializeError;
	exports.createCustomErrorClass = helpers$2.createCustomErrorClass;
	exports.addCustomErrorDeserializer = helpers$2.addCustomErrorDeserializer;
	var AccountNameRequiredError = exports.AccountNameRequiredError = (0, helpers$2.createCustomErrorClass)("AccountNameRequired");
	var BluetoothRequired = exports.BluetoothRequired = (0, helpers$2.createCustomErrorClass)("BluetoothRequired");
	var BtcUnmatchedApp = exports.BtcUnmatchedApp = (0, helpers$2.createCustomErrorClass)("BtcUnmatchedApp");
	var CantOpenDevice = exports.CantOpenDevice = (0, helpers$2.createCustomErrorClass)("CantOpenDevice");
	var CashAddrNotSupported = exports.CashAddrNotSupported = (0, helpers$2.createCustomErrorClass)("CashAddrNotSupported");
	var CurrencyNotSupported = exports.CurrencyNotSupported = (0, helpers$2.createCustomErrorClass)("CurrencyNotSupported");
	var DeviceAppVerifyNotSupported = exports.DeviceAppVerifyNotSupported = (0, helpers$2.createCustomErrorClass)("DeviceAppVerifyNotSupported");
	var DeviceGenuineSocketEarlyClose = exports.DeviceGenuineSocketEarlyClose = (0, helpers$2.createCustomErrorClass)("DeviceGenuineSocketEarlyClose");
	var DeviceNotGenuineError = exports.DeviceNotGenuineError = (0, helpers$2.createCustomErrorClass)("DeviceNotGenuine");
	var DeviceOnDashboardExpected = exports.DeviceOnDashboardExpected = (0, helpers$2.createCustomErrorClass)("DeviceOnDashboardExpected");
	var DeviceInOSUExpected = exports.DeviceInOSUExpected = (0, helpers$2.createCustomErrorClass)("DeviceInOSUExpected");
	var DeviceHalted = exports.DeviceHalted = (0, helpers$2.createCustomErrorClass)("DeviceHalted");
	var DeviceNameInvalid = exports.DeviceNameInvalid = (0, helpers$2.createCustomErrorClass)("DeviceNameInvalid");
	var DeviceSocketFail = exports.DeviceSocketFail = (0, helpers$2.createCustomErrorClass)("DeviceSocketFail");
	var DeviceSocketNoBulkStatus = exports.DeviceSocketNoBulkStatus = (0, helpers$2.createCustomErrorClass)("DeviceSocketNoBulkStatus");
	var DisconnectedDevice = exports.DisconnectedDevice = (0, helpers$2.createCustomErrorClass)("DisconnectedDevice");
	var DisconnectedDeviceDuringOperation = exports.DisconnectedDeviceDuringOperation = (0, helpers$2.createCustomErrorClass)("DisconnectedDeviceDuringOperation");
	var EnpointConfigError = exports.EnpointConfigError = (0, helpers$2.createCustomErrorClass)("EnpointConfig");
	var EthAppPleaseEnableContractData = exports.EthAppPleaseEnableContractData = (0, helpers$2.createCustomErrorClass)("EthAppPleaseEnableContractData");
	var FeeEstimationFailed = exports.FeeEstimationFailed = (0, helpers$2.createCustomErrorClass)("FeeEstimationFailed");
	var HardResetFail = exports.HardResetFail = (0, helpers$2.createCustomErrorClass)("HardResetFail");
	var InvalidAddress = exports.InvalidAddress = (0, helpers$2.createCustomErrorClass)("InvalidAddress");
	var InvalidAddressBecauseDestinationIsAlsoSource = exports.InvalidAddressBecauseDestinationIsAlsoSource = (0, helpers$2.createCustomErrorClass)("InvalidAddressBecauseDestinationIsAlsoSource");
	var LatestMCUInstalledError = exports.LatestMCUInstalledError = (0, helpers$2.createCustomErrorClass)("LatestMCUInstalledError");
	var UnknownMCU = exports.UnknownMCU = (0, helpers$2.createCustomErrorClass)("UnknownMCU");
	var LedgerAPIError = exports.LedgerAPIError = (0, helpers$2.createCustomErrorClass)("LedgerAPIError");
	var LedgerAPIErrorWithMessage = exports.LedgerAPIErrorWithMessage = (0, helpers$2.createCustomErrorClass)("LedgerAPIErrorWithMessage");
	var LedgerAPINotAvailable = exports.LedgerAPINotAvailable = (0, helpers$2.createCustomErrorClass)("LedgerAPINotAvailable");
	var ManagerAppAlreadyInstalledError = exports.ManagerAppAlreadyInstalledError = (0, helpers$2.createCustomErrorClass)("ManagerAppAlreadyInstalled");
	var ManagerAppRelyOnBTCError = exports.ManagerAppRelyOnBTCError = (0, helpers$2.createCustomErrorClass)("ManagerAppRelyOnBTC");
	var ManagerDeviceLockedError = exports.ManagerDeviceLockedError = (0, helpers$2.createCustomErrorClass)("ManagerDeviceLocked");
	var ManagerNotEnoughSpaceError = exports.ManagerNotEnoughSpaceError = (0, helpers$2.createCustomErrorClass)("ManagerNotEnoughSpace");
	var ManagerUninstallBTCDep = exports.ManagerUninstallBTCDep = (0, helpers$2.createCustomErrorClass)("ManagerUninstallBTCDep");
	var NetworkDown = exports.NetworkDown = (0, helpers$2.createCustomErrorClass)("NetworkDown");
	var NoAddressesFound = exports.NoAddressesFound = (0, helpers$2.createCustomErrorClass)("NoAddressesFound");
	var NotEnoughBalance = exports.NotEnoughBalance = (0, helpers$2.createCustomErrorClass)("NotEnoughBalance");
	var NotEnoughBalanceBecauseDestinationNotCreated = exports.NotEnoughBalanceBecauseDestinationNotCreated = (0, helpers$2.createCustomErrorClass)("NotEnoughBalanceBecauseDestinationNotCreated");
	var NotEnoughGas = exports.NotEnoughGas = (0, helpers$2.createCustomErrorClass)("NotEnoughGas");
	var PasswordsDontMatchError = exports.PasswordsDontMatchError = (0, helpers$2.createCustomErrorClass)("PasswordsDontMatch");
	var PasswordIncorrectError = exports.PasswordIncorrectError = (0, helpers$2.createCustomErrorClass)("PasswordIncorrect");
	var TimeoutTagged = exports.TimeoutTagged = (0, helpers$2.createCustomErrorClass)("TimeoutTagged");
	var UnexpectedBootloader = exports.UnexpectedBootloader = (0, helpers$2.createCustomErrorClass)("UnexpectedBootloader");
	var UpdateYourApp = exports.UpdateYourApp = (0, helpers$2.createCustomErrorClass)("UpdateYourApp");
	var UserRefusedDeviceNameChange = exports.UserRefusedDeviceNameChange = (0, helpers$2.createCustomErrorClass)("UserRefusedDeviceNameChange");
	var UserRefusedAddress = exports.UserRefusedAddress = (0, helpers$2.createCustomErrorClass)("UserRefusedAddress");
	var UserRefusedFirmwareUpdate = exports.UserRefusedFirmwareUpdate = (0, helpers$2.createCustomErrorClass)("UserRefusedFirmwareUpdate");
	var UserRefusedAllowManager = exports.UserRefusedAllowManager = (0, helpers$2.createCustomErrorClass)("UserRefusedAllowManager");
	var UserRefusedOnDevice = exports.UserRefusedOnDevice = (0, helpers$2.createCustomErrorClass)("UserRefusedOnDevice"); // TODO rename because it's just for transaction refusal
	var TransportOpenUserCancelled = exports.TransportOpenUserCancelled = (0, helpers$2.createCustomErrorClass)("TransportOpenUserCancelled");
	var TransportInterfaceNotAvailable = exports.TransportInterfaceNotAvailable = (0, helpers$2.createCustomErrorClass)("TransportInterfaceNotAvailable");
	var DeviceShouldStayInApp = exports.DeviceShouldStayInApp = (0, helpers$2.createCustomErrorClass)("DeviceShouldStayInApp");
	var WebsocketConnectionError = exports.WebsocketConnectionError = (0, helpers$2.createCustomErrorClass)("WebsocketConnectionError");
	var WebsocketConnectionFailed = exports.WebsocketConnectionFailed = (0, helpers$2.createCustomErrorClass)("WebsocketConnectionFailed");
	var WrongDeviceForAccount = exports.WrongDeviceForAccount = (0, helpers$2.createCustomErrorClass)("WrongDeviceForAccount");
	var ETHAddressNonEIP = exports.ETHAddressNonEIP = (0, helpers$2.createCustomErrorClass)("ETHAddressNonEIP");
	var CantScanQRCode = exports.CantScanQRCode = (0, helpers$2.createCustomErrorClass)("CantScanQRCode");
	var FeeNotLoaded = exports.FeeNotLoaded = (0, helpers$2.createCustomErrorClass)("FeeNotLoaded");
	var FeeRequired = exports.FeeRequired = (0, helpers$2.createCustomErrorClass)("FeeRequired");
	var SyncError = exports.SyncError = (0, helpers$2.createCustomErrorClass)("SyncError");
	var PairingFailed = exports.PairingFailed = (0, helpers$2.createCustomErrorClass)("PairingFailed");
	var GenuineCheckFailed = exports.GenuineCheckFailed = (0, helpers$2.createCustomErrorClass)("GenuineCheckFailed");
	var LedgerAPI4xx = exports.LedgerAPI4xx = (0, helpers$2.createCustomErrorClass)("LedgerAPI4xx");
	var LedgerAPI5xx = exports.LedgerAPI5xx = (0, helpers$2.createCustomErrorClass)("LedgerAPI5xx");
	var FirmwareOrAppUpdateRequired = exports.FirmwareOrAppUpdateRequired = (0, helpers$2.createCustomErrorClass)("FirmwareOrAppUpdateRequired");

	// db stuff, no need to translate
	var NoDBPathGiven = exports.NoDBPathGiven = (0, helpers$2.createCustomErrorClass)("NoDBPathGiven");
	var DBWrongPassword = exports.DBWrongPassword = (0, helpers$2.createCustomErrorClass)("DBWrongPassword");
	var DBNotReset = exports.DBNotReset = (0, helpers$2.createCustomErrorClass)("DBNotReset");

	/**
	 * TransportError is used for any generic transport errors.
	 * e.g. Error thrown when data received by exchanges are incorrect or if exchanged failed to communicate with the device for various reason.
	 */
	function TransportError(message, id) {
	  this.name = "TransportError";
	  this.message = message;
	  this.stack = new Error().stack;
	  this.id = id;
	}
	//$FlowFixMe
	TransportError.prototype = new Error();

	(0, helpers$2.addCustomErrorDeserializer)("TransportError", function (e) {
	  return new TransportError(e.message, e.id);
	});

	var StatusCodes = exports.StatusCodes = {
	  PIN_REMAINING_ATTEMPTS: 0x63c0,
	  INCORRECT_LENGTH: 0x6700,
	  COMMAND_INCOMPATIBLE_FILE_STRUCTURE: 0x6981,
	  SECURITY_STATUS_NOT_SATISFIED: 0x6982,
	  CONDITIONS_OF_USE_NOT_SATISFIED: 0x6985,
	  INCORRECT_DATA: 0x6a80,
	  NOT_ENOUGH_MEMORY_SPACE: 0x6a84,
	  REFERENCED_DATA_NOT_FOUND: 0x6a88,
	  FILE_ALREADY_EXISTS: 0x6a89,
	  INCORRECT_P1_P2: 0x6b00,
	  INS_NOT_SUPPORTED: 0x6d00,
	  CLA_NOT_SUPPORTED: 0x6e00,
	  TECHNICAL_PROBLEM: 0x6f00,
	  OK: 0x9000,
	  MEMORY_PROBLEM: 0x9240,
	  NO_EF_SELECTED: 0x9400,
	  INVALID_OFFSET: 0x9402,
	  FILE_NOT_FOUND: 0x9404,
	  INCONSISTENT_FILE: 0x9408,
	  ALGORITHM_NOT_SUPPORTED: 0x9484,
	  INVALID_KCV: 0x9485,
	  CODE_NOT_INITIALIZED: 0x9802,
	  ACCESS_CONDITION_NOT_FULFILLED: 0x9804,
	  CONTRADICTION_SECRET_CODE_STATUS: 0x9808,
	  CONTRADICTION_INVALIDATION: 0x9810,
	  CODE_BLOCKED: 0x9840,
	  MAX_VALUE_REACHED: 0x9850,
	  GP_AUTH_FAILED: 0x6300,
	  LICENSING: 0x6f42,
	  HALTED: 0x6faa
	};

	function getAltStatusMessage(code) {
	  switch (code) {
	    // improve text of most common errors
	    case 0x6700:
	      return "Incorrect length";
	    case 0x6982:
	      return "Security not satisfied (dongle locked or have invalid access rights)";
	    case 0x6985:
	      return "Condition of use not satisfied (denied by the user?)";
	    case 0x6a80:
	      return "Invalid data received";
	    case 0x6b00:
	      return "Invalid parameter received";
	  }
	  if (0x6f00 <= code && code <= 0x6fff) {
	    return "Internal error, please report";
	  }
	}

	/**
	 * Error thrown when a device returned a non success status.
	 * the error.statusCode is one of the `StatusCodes` exported by this library.
	 */
	function TransportStatusError(statusCode) {
	  this.name = "TransportStatusError";
	  var statusText = Object.keys(StatusCodes).find(function (k) {
	    return StatusCodes[k] === statusCode;
	  }) || "UNKNOWN_ERROR";
	  var smsg = getAltStatusMessage(statusCode) || statusText;
	  var statusCodeStr = statusCode.toString(16);
	  this.message = "Ledger device: " + smsg + " (0x" + statusCodeStr + ")";
	  this.stack = new Error().stack;
	  this.statusCode = statusCode;
	  this.statusText = statusText;
	}
	//$FlowFixMe
	TransportStatusError.prototype = new Error();

	(0, helpers$2.addCustomErrorDeserializer)("TransportStatusError", function (e) {
	  return new TransportStatusError(e.statusCode);
	});

	});

	unwrapExports(lib$3);
	var lib_1$3 = lib$3.StatusCodes;
	var lib_2$3 = lib$3.DBNotReset;
	var lib_3$2 = lib$3.DBWrongPassword;
	var lib_4$2 = lib$3.NoDBPathGiven;
	var lib_5$2 = lib$3.FirmwareOrAppUpdateRequired;
	var lib_6$2 = lib$3.LedgerAPI5xx;
	var lib_7$2 = lib$3.LedgerAPI4xx;
	var lib_8$2 = lib$3.GenuineCheckFailed;
	var lib_9$2 = lib$3.PairingFailed;
	var lib_10$2 = lib$3.SyncError;
	var lib_11$1 = lib$3.FeeRequired;
	var lib_12$1 = lib$3.FeeNotLoaded;
	var lib_13$1 = lib$3.CantScanQRCode;
	var lib_14$1 = lib$3.ETHAddressNonEIP;
	var lib_15$1 = lib$3.WrongDeviceForAccount;
	var lib_16$1 = lib$3.WebsocketConnectionFailed;
	var lib_17$1 = lib$3.WebsocketConnectionError;
	var lib_18$1 = lib$3.DeviceShouldStayInApp;
	var lib_19$1 = lib$3.TransportInterfaceNotAvailable;
	var lib_20$1 = lib$3.TransportOpenUserCancelled;
	var lib_21$1 = lib$3.UserRefusedOnDevice;
	var lib_22$1 = lib$3.UserRefusedAllowManager;
	var lib_23$1 = lib$3.UserRefusedFirmwareUpdate;
	var lib_24$1 = lib$3.UserRefusedAddress;
	var lib_25$1 = lib$3.UserRefusedDeviceNameChange;
	var lib_26$1 = lib$3.UpdateYourApp;
	var lib_27$1 = lib$3.UnexpectedBootloader;
	var lib_28$1 = lib$3.TimeoutTagged;
	var lib_29$1 = lib$3.PasswordIncorrectError;
	var lib_30$1 = lib$3.PasswordsDontMatchError;
	var lib_31$1 = lib$3.NotEnoughGas;
	var lib_32$1 = lib$3.NotEnoughBalanceBecauseDestinationNotCreated;
	var lib_33$1 = lib$3.NotEnoughBalance;
	var lib_34$1 = lib$3.NoAddressesFound;
	var lib_35$1 = lib$3.NetworkDown;
	var lib_36$1 = lib$3.ManagerUninstallBTCDep;
	var lib_37$1 = lib$3.ManagerNotEnoughSpaceError;
	var lib_38$1 = lib$3.ManagerDeviceLockedError;
	var lib_39$1 = lib$3.ManagerAppRelyOnBTCError;
	var lib_40$1 = lib$3.ManagerAppAlreadyInstalledError;
	var lib_41$1 = lib$3.LedgerAPINotAvailable;
	var lib_42$1 = lib$3.LedgerAPIErrorWithMessage;
	var lib_43$1 = lib$3.LedgerAPIError;
	var lib_44$1 = lib$3.UnknownMCU;
	var lib_45$1 = lib$3.LatestMCUInstalledError;
	var lib_46$1 = lib$3.InvalidAddressBecauseDestinationIsAlsoSource;
	var lib_47$1 = lib$3.InvalidAddress;
	var lib_48$1 = lib$3.HardResetFail;
	var lib_49$1 = lib$3.FeeEstimationFailed;
	var lib_50$1 = lib$3.EthAppPleaseEnableContractData;
	var lib_51$1 = lib$3.EnpointConfigError;
	var lib_52$1 = lib$3.DisconnectedDeviceDuringOperation;
	var lib_53$1 = lib$3.DisconnectedDevice;
	var lib_54$1 = lib$3.DeviceSocketNoBulkStatus;
	var lib_55$1 = lib$3.DeviceSocketFail;
	var lib_56$1 = lib$3.DeviceNameInvalid;
	var lib_57$1 = lib$3.DeviceHalted;
	var lib_58$1 = lib$3.DeviceInOSUExpected;
	var lib_59$1 = lib$3.DeviceOnDashboardExpected;
	var lib_60$1 = lib$3.DeviceNotGenuineError;
	var lib_61$1 = lib$3.DeviceGenuineSocketEarlyClose;
	var lib_62$1 = lib$3.DeviceAppVerifyNotSupported;
	var lib_63$1 = lib$3.CurrencyNotSupported;
	var lib_64$1 = lib$3.CashAddrNotSupported;
	var lib_65$1 = lib$3.CantOpenDevice;
	var lib_66$1 = lib$3.BtcUnmatchedApp;
	var lib_67$1 = lib$3.BluetoothRequired;
	var lib_68$1 = lib$3.AccountNameRequiredError;
	var lib_69$1 = lib$3.addCustomErrorDeserializer;
	var lib_70$1 = lib$3.createCustomErrorClass;
	var lib_71$1 = lib$3.deserializeError;
	var lib_72$1 = lib$3.serializeError;
	var lib_73$1 = lib$3.TransportError;
	var lib_74$1 = lib$3.getAltStatusMessage;
	var lib_75$1 = lib$3.TransportStatusError;

	var Transport_1$1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getAltStatusMessage = exports.StatusCodes = exports.TransportStatusError = exports.TransportError = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



	var _events3 = _interopRequireDefault(EventEmitter);



	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	exports.TransportError = lib$3.TransportError;
	exports.TransportStatusError = lib$3.TransportStatusError;
	exports.StatusCodes = lib$3.StatusCodes;
	exports.getAltStatusMessage = lib$3.getAltStatusMessage;

	/**
	 */


	/**
	 */


	/**
	 * type: add or remove event
	 * descriptor: a parameter that can be passed to open(descriptor)
	 * deviceModel: device info on the model (is it a nano s, nano x, ...)
	 * device: transport specific device info
	 */

	/**
	 */

	/**
	 * Transport defines the generic interface to share between node/u2f impl
	 * A **Descriptor** is a parametric type that is up to be determined for the implementation.
	 * it can be for instance an ID, an file path, a URL,...
	 */
	var Transport = function () {
	  function Transport() {
	    var _this = this;

	    _classCallCheck(this, Transport);

	    this.exchangeTimeout = 30000;
	    this._events = new _events3.default();

	    this.send = function () {
	      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(cla, ins, p1, p2) {
	        var data = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : Buffer.alloc(0);
	        var statusList = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [lib$3.StatusCodes.OK];
	        var response, sw;
	        return regeneratorRuntime.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                if (!(data.length >= 256)) {
	                  _context.next = 2;
	                  break;
	                }

	                throw new lib$3.TransportError("data.length exceed 256 bytes limit. Got: " + data.length, "DataLengthTooBig");

	              case 2:
	                _context.next = 4;
	                return _this.exchange(Buffer.concat([Buffer.from([cla, ins, p1, p2]), Buffer.from([data.length]), data]));

	              case 4:
	                response = _context.sent;
	                sw = response.readUInt16BE(response.length - 2);

	                if (statusList.some(function (s) {
	                  return s === sw;
	                })) {
	                  _context.next = 8;
	                  break;
	                }

	                throw new lib$3.TransportStatusError(sw);

	              case 8:
	                return _context.abrupt("return", response);

	              case 9:
	              case "end":
	                return _context.stop();
	            }
	          }
	        }, _callee, _this);
	      }));

	      return function (_x, _x2, _x3, _x4) {
	        return _ref.apply(this, arguments);
	      };
	    }();

	    this.exchangeAtomicImpl = function () {
	      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(f) {
	        var resolveBusy, busyPromise, res;
	        return regeneratorRuntime.wrap(function _callee2$(_context2) {
	          while (1) {
	            switch (_context2.prev = _context2.next) {
	              case 0:
	                if (!_this.exchangeBusyPromise) {
	                  _context2.next = 2;
	                  break;
	                }

	                throw new lib$3.TransportError("Transport race condition", "RaceCondition");

	              case 2:
	                resolveBusy = void 0;
	                busyPromise = new Promise(function (r) {
	                  resolveBusy = r;
	                });

	                _this.exchangeBusyPromise = busyPromise;
	                _context2.prev = 5;
	                _context2.next = 8;
	                return f();

	              case 8:
	                res = _context2.sent;
	                return _context2.abrupt("return", res);

	              case 10:
	                _context2.prev = 10;

	                if (resolveBusy) resolveBusy();
	                _this.exchangeBusyPromise = null;
	                return _context2.finish(10);

	              case 14:
	              case "end":
	                return _context2.stop();
	            }
	          }
	        }, _callee2, _this, [[5,, 10, 14]]);
	      }));

	      return function (_x7) {
	        return _ref2.apply(this, arguments);
	      };
	    }();

	    this._appAPIlock = null;
	  }

	  /**
	   * Statically check if a transport is supported on the user's platform/browser.
	   */


	  /**
	   * List once all available descriptors. For a better granularity, checkout `listen()`.
	   * @return a promise of descriptors
	   * @example
	   * TransportFoo.list().then(descriptors => ...)
	   */


	  /**
	   * Listen all device events for a given Transport. The method takes an Obverver of DescriptorEvent and returns a Subscription (according to Observable paradigm https://github.com/tc39/proposal-observable )
	   * a DescriptorEvent is a `{ descriptor, type }` object. type can be `"add"` or `"remove"` and descriptor is a value you can pass to `open(descriptor)`.
	   * each listen() call will first emit all potential device already connected and then will emit events can come over times,
	   * for instance if you plug a USB device after listen() or a bluetooth device become discoverable.
	   * @param observer is an object with a next, error and complete function (compatible with observer pattern)
	   * @return a Subscription object on which you can `.unsubscribe()` to stop listening descriptors.
	   * @example
	  const sub = TransportFoo.listen({
	  next: e => {
	    if (e.type==="add") {
	      sub.unsubscribe();
	      const transport = await TransportFoo.open(e.descriptor);
	      ...
	    }
	  },
	  error: error => {},
	  complete: () => {}
	  })
	   */


	  /**
	   * attempt to create a Transport instance with potentially a descriptor.
	   * @param descriptor: the descriptor to open the transport with.
	   * @param timeout: an optional timeout
	   * @return a Promise of Transport instance
	   * @example
	  TransportFoo.open(descriptor).then(transport => ...)
	   */


	  /**
	   * low level api to communicate with the device
	   * This method is for implementations to implement but should not be directly called.
	   * Instead, the recommanded way is to use send() method
	   * @param apdu the data to send
	   * @return a Promise of response data
	   */


	  /**
	   * set the "scramble key" for the next exchanges with the device.
	   * Each App can have a different scramble key and they internally will set it at instanciation.
	   * @param key the scramble key
	   */


	  /**
	   * close the exchange with the device.
	   * @return a Promise that ends when the transport is closed.
	   */


	  _createClass(Transport, [{
	    key: "on",


	    /**
	     * Listen to an event on an instance of transport.
	     * Transport implementation can have specific events. Here is the common events:
	     * * `"disconnect"` : triggered if Transport is disconnected
	     */
	    value: function on(eventName, cb) {
	      this._events.on(eventName, cb);
	    }

	    /**
	     * Stop listening to an event on an instance of transport.
	     */

	  }, {
	    key: "off",
	    value: function off(eventName, cb) {
	      this._events.removeListener(eventName, cb);
	    }
	  }, {
	    key: "emit",
	    value: function emit(event) {
	      var _events;

	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      (_events = this._events).emit.apply(_events, [event].concat(_toConsumableArray(args)));
	    }

	    /**
	     * Enable or not logs of the binary exchange
	     */

	  }, {
	    key: "setDebugMode",
	    value: function setDebugMode() {
	      console.warn("setDebugMode is deprecated. use @ledgerhq/logs instead. No logs are emitted in this anymore.");
	    }

	    /**
	     * Set a timeout (in milliseconds) for the exchange call. Only some transport might implement it. (e.g. U2F)
	     */

	  }, {
	    key: "setExchangeTimeout",
	    value: function setExchangeTimeout(exchangeTimeout) {
	      this.exchangeTimeout = exchangeTimeout;
	    }

	    /**
	     * wrapper on top of exchange to simplify work of the implementation.
	     * @param cla
	     * @param ins
	     * @param p1
	     * @param p2
	     * @param data
	     * @param statusList is a list of accepted status code (shorts). [0x9000] by default
	     * @return a Promise of response buffer
	     */

	  }, {
	    key: "decorateAppAPIMethods",
	    value: function decorateAppAPIMethods(self, methods, scrambleKey) {
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;

	      try {
	        for (var _iterator = methods[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var methodName = _step.value;

	          self[methodName] = this.decorateAppAPIMethod(methodName, self[methodName], self, scrambleKey);
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	    }
	  }, {
	    key: "decorateAppAPIMethod",
	    value: function decorateAppAPIMethod(methodName, f, ctx, scrambleKey) {
	      var _this2 = this;

	      return function () {
	        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
	          for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	            args[_key2] = arguments[_key2];
	          }

	          var _appAPIlock;

	          return regeneratorRuntime.wrap(function _callee3$(_context3) {
	            while (1) {
	              switch (_context3.prev = _context3.next) {
	                case 0:
	                  _appAPIlock = _this2._appAPIlock;

	                  if (!_appAPIlock) {
	                    _context3.next = 3;
	                    break;
	                  }

	                  return _context3.abrupt("return", Promise.reject(new lib$3.TransportError("Ledger Device is busy (lock " + _appAPIlock + ")", "TransportLocked")));

	                case 3:
	                  _context3.prev = 3;

	                  _this2._appAPIlock = methodName;
	                  _this2.setScrambleKey(scrambleKey);
	                  _context3.next = 8;
	                  return f.apply(ctx, args);

	                case 8:
	                  return _context3.abrupt("return", _context3.sent);

	                case 9:
	                  _context3.prev = 9;

	                  _this2._appAPIlock = null;
	                  return _context3.finish(9);

	                case 12:
	                case "end":
	                  return _context3.stop();
	              }
	            }
	          }, _callee3, _this2, [[3,, 9, 12]]);
	        }));

	        return function () {
	          return _ref3.apply(this, arguments);
	        };
	      }();
	    }
	  }], [{
	    key: "create",


	    /**
	     * create() allows to open the first descriptor available or
	     * throw if there is none or if timeout is reached.
	     * This is a light helper, alternative to using listen() and open() (that you may need for any more advanced usecase)
	     * @example
	    TransportFoo.create().then(transport => ...)
	     */
	    value: function create() {
	      var _this3 = this;

	      var openTimeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;
	      var listenTimeout = arguments[1];

	      return new Promise(function (resolve, reject) {
	        var found = false;
	        var sub = _this3.listen({
	          next: function next(e) {
	            found = true;
	            if (sub) sub.unsubscribe();
	            if (listenTimeoutId) clearTimeout(listenTimeoutId);
	            _this3.open(e.descriptor, openTimeout).then(resolve, reject);
	          },
	          error: function error(e) {
	            if (listenTimeoutId) clearTimeout(listenTimeoutId);
	            reject(e);
	          },
	          complete: function complete() {
	            if (listenTimeoutId) clearTimeout(listenTimeoutId);
	            if (!found) {
	              reject(new lib$3.TransportError(_this3.ErrorMessage_NoDeviceFound, "NoDeviceFound"));
	            }
	          }
	        });
	        var listenTimeoutId = listenTimeout ? setTimeout(function () {
	          sub.unsubscribe();
	          reject(new lib$3.TransportError(_this3.ErrorMessage_ListenTimeout, "ListenTimeout"));
	        }, listenTimeout) : null;
	      });
	    }

	    // $FlowFixMe

	  }]);

	  return Transport;
	}();

	Transport.ErrorMessage_ListenTimeout = "No Ledger device found (timeout)";
	Transport.ErrorMessage_NoDeviceFound = "No Ledger device found";
	exports.default = Transport;

	});

	unwrapExports(Transport_1$1);
	var Transport_2$1 = Transport_1$1.getAltStatusMessage;
	var Transport_3$1 = Transport_1$1.StatusCodes;
	var Transport_4$1 = Transport_1$1.TransportStatusError;
	var Transport_5$1 = Transport_1$1.TransportError;

	var TransportU2F_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();





	var _hwTransport2 = _interopRequireDefault(Transport_1$1);





	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function wrapU2FTransportError(originalError, message, id) {
	  var err = new lib$3.TransportError(message, id);
	  // $FlowFixMe
	  err.originalError = originalError;
	  return err;
	}

	function wrapApdu(apdu, key) {
	  var result = Buffer.alloc(apdu.length);
	  for (var i = 0; i < apdu.length; i++) {
	    result[i] = apdu[i] ^ key[i % key.length];
	  }
	  return result;
	}

	// Convert from normal to web-safe, strip trailing "="s
	var webSafe64 = function webSafe64(base64) {
	  return base64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
	};

	// Convert from web-safe to normal, add trailing "="s
	var normal64 = function normal64(base64) {
	  return base64.replace(/-/g, "+").replace(/_/g, "/") + "==".substring(0, 3 * base64.length % 4);
	};

	function attemptExchange(apdu, timeoutMillis, scrambleKey, unwrap) {
	  var keyHandle = wrapApdu(apdu, scrambleKey);
	  var challenge = Buffer.from("0000000000000000000000000000000000000000000000000000000000000000", "hex");
	  var signRequest = {
	    version: "U2F_V2",
	    keyHandle: webSafe64(keyHandle.toString("base64")),
	    challenge: webSafe64(challenge.toString("base64")),
	    appId: location.origin
	  };
	  (0, lib$2.log)("apdu", "=> " + apdu.toString("hex"));
	  return (0, u2fApi$1.sign)(signRequest, timeoutMillis / 1000).then(function (response) {
	    var signatureData = response.signatureData;

	    if (typeof signatureData === "string") {
	      var data = Buffer.from(normal64(signatureData), "base64");
	      var result = void 0;
	      if (!unwrap) {
	        result = data;
	      } else {
	        result = data.slice(5);
	      }
	      (0, lib$2.log)("apdu", "<= " + result.toString("hex"));
	      return result;
	    } else {
	      throw response;
	    }
	  });
	}

	var transportInstances = [];

	function emitDisconnect() {
	  transportInstances.forEach(function (t) {
	    return t.emit("disconnect");
	  });
	  transportInstances = [];
	}

	function isTimeoutU2FError(u2fError) {
	  return u2fError.metaData.code === 5;
	}

	/**
	 * U2F web Transport implementation
	 * @example
	 * import TransportU2F from "@ledgerhq/hw-transport-u2f";
	 * ...
	 * TransportU2F.create().then(transport => ...)
	 */

	var TransportU2F = function (_Transport) {
	  _inherits(TransportU2F, _Transport);

	  _createClass(TransportU2F, null, [{
	    key: "open",


	    /**
	     * static function to create a new Transport from a connected Ledger device discoverable via U2F (browser support)
	     */


	    /*
	     */
	    value: function () {
	      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_) {

	        return regeneratorRuntime.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                return _context.abrupt("return", new TransportU2F());

	              case 1:
	              case "end":
	                return _context.stop();
	            }
	          }
	        }, _callee, this);
	      }));

	      function open(_x) {
	        return _ref.apply(this, arguments);
	      }

	      return open;
	    }()

	    /*
	     */

	  }]);

	  function TransportU2F() {
	    _classCallCheck(this, TransportU2F);

	    var _this = _possibleConstructorReturn(this, (TransportU2F.__proto__ || Object.getPrototypeOf(TransportU2F)).call(this));

	    _this.unwrap = true;

	    transportInstances.push(_this);
	    return _this;
	  }

	  /**
	   * Exchange with the device using APDU protocol.
	   * @param apdu
	   * @returns a promise of apdu response
	   */


	  _createClass(TransportU2F, [{
	    key: "exchange",
	    value: function () {
	      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(apdu) {
	        var isU2FError;
	        return regeneratorRuntime.wrap(function _callee2$(_context2) {
	          while (1) {
	            switch (_context2.prev = _context2.next) {
	              case 0:
	                _context2.prev = 0;
	                _context2.next = 3;
	                return attemptExchange(apdu, this.exchangeTimeout, this.scrambleKey, this.unwrap);

	              case 3:
	                return _context2.abrupt("return", _context2.sent);

	              case 6:
	                _context2.prev = 6;
	                _context2.t0 = _context2["catch"](0);
	                isU2FError = _typeof(_context2.t0.metaData) === "object";

	                if (!isU2FError) {
	                  _context2.next = 14;
	                  break;
	                }

	                if (isTimeoutU2FError(_context2.t0)) {
	                  emitDisconnect();
	                }
	                // the wrapping make error more usable and "printable" to the end user.
	                throw wrapU2FTransportError(_context2.t0, "Failed to sign with Ledger device: U2F " + _context2.t0.metaData.type, "U2F_" + _context2.t0.metaData.code);

	              case 14:
	                throw _context2.t0;

	              case 15:
	              case "end":
	                return _context2.stop();
	            }
	          }
	        }, _callee2, this, [[0, 6]]);
	      }));

	      function exchange(_x3) {
	        return _ref2.apply(this, arguments);
	      }

	      return exchange;
	    }()

	    /**
	     */

	  }, {
	    key: "setScrambleKey",
	    value: function setScrambleKey(scrambleKey) {
	      this.scrambleKey = Buffer.from(scrambleKey, "ascii");
	    }

	    /**
	     */

	  }, {
	    key: "setUnwrap",
	    value: function setUnwrap(unwrap) {
	      this.unwrap = unwrap;
	    }
	  }, {
	    key: "close",
	    value: function close() {
	      // u2f have no way to clean things up
	      return Promise.resolve();
	    }
	  }]);

	  return TransportU2F;
	}(_hwTransport2.default);

	TransportU2F.isSupported = u2fApi$1.isSupported;

	TransportU2F.list = function () {
	  return (
	    // this transport is not discoverable but we are going to guess if it is here with isSupported()
	    (0, u2fApi$1.isSupported)().then(function (supported) {
	      return supported ? [null] : [];
	    })
	  );
	};

	TransportU2F.listen = function (observer) {
	  var unsubscribed = false;
	  (0, u2fApi$1.isSupported)().then(function (supported) {
	    if (unsubscribed) return;
	    if (supported) {
	      observer.next({ type: "add", descriptor: null });
	      observer.complete();
	    } else {
	      observer.error(new lib$3.TransportError("U2F browser support is needed for Ledger. " + "Please use Chrome, Opera or Firefox with a U2F extension. " + "Also make sure you're on an HTTPS connection", "U2FNotSupported"));
	    }
	  });
	  return {
	    unsubscribe: function unsubscribe() {
	      unsubscribed = true;
	    }
	  };
	};

	exports.default = TransportU2F;

	});

	var TransportU2F = unwrapExports(TransportU2F_1);

	var TransportU2F$1 = /*#__PURE__*/Object.freeze({
		default: TransportU2F,
		__moduleExports: TransportU2F_1
	});

	// shim for using process in browser
	// based off https://github.com/defunctzombie/node-process/blob/master/browser.js

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	var cachedSetTimeout = defaultSetTimout;
	var cachedClearTimeout = defaultClearTimeout;
	if (typeof global.setTimeout === 'function') {
	    cachedSetTimeout = setTimeout;
	}
	if (typeof global.clearTimeout === 'function') {
	    cachedClearTimeout = clearTimeout;
	}

	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	function nextTick(fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	}
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	var title = 'browser';
	var platform = 'browser';
	var browser = true;
	var env = {};
	var argv = [];
	var version = ''; // empty string to avoid regexp issues
	var versions = {};
	var release = {};
	var config = {};

	function noop() {}

	var on = noop;
	var addListener = noop;
	var once = noop;
	var off = noop;
	var removeListener = noop;
	var removeAllListeners = noop;
	var emit = noop;

	function binding(name) {
	    throw new Error('process.binding is not supported');
	}

	function cwd () { return '/' }
	function chdir (dir) {
	    throw new Error('process.chdir is not supported');
	}function umask() { return 0; }

	// from https://github.com/kumavis/browser-process-hrtime/blob/master/index.js
	var performance = global.performance || {};
	var performanceNow =
	  performance.now        ||
	  performance.mozNow     ||
	  performance.msNow      ||
	  performance.oNow       ||
	  performance.webkitNow  ||
	  function(){ return (new Date()).getTime() };

	// generate timestamp or delta
	// see http://nodejs.org/api/process.html#process_process_hrtime
	function hrtime(previousTimestamp){
	  var clocktime = performanceNow.call(performance)*1e-3;
	  var seconds = Math.floor(clocktime);
	  var nanoseconds = Math.floor((clocktime%1)*1e9);
	  if (previousTimestamp) {
	    seconds = seconds - previousTimestamp[0];
	    nanoseconds = nanoseconds - previousTimestamp[1];
	    if (nanoseconds<0) {
	      seconds--;
	      nanoseconds += 1e9;
	    }
	  }
	  return [seconds,nanoseconds]
	}

	var startTime = new Date();
	function uptime() {
	  var currentTime = new Date();
	  var dif = currentTime - startTime;
	  return dif / 1000;
	}

	var process = {
	  nextTick: nextTick,
	  title: title,
	  browser: browser,
	  env: env,
	  argv: argv,
	  version: version,
	  versions: versions,
	  on: on,
	  addListener: addListener,
	  once: once,
	  off: off,
	  removeListener: removeListener,
	  removeAllListeners: removeAllListeners,
	  emit: emit,
	  binding: binding,
	  cwd: cwd,
	  chdir: chdir,
	  umask: umask,
	  hrtime: hrtime,
	  platform: platform,
	  release: release,
	  config: config,
	  uptime: uptime
	};

	var inherits;
	if (typeof Object.create === 'function'){
	  inherits = function inherits(ctor, superCtor) {
	    // implementation from standard node.js 'util' module
	    ctor.super_ = superCtor;
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  inherits = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor;
	    var TempCtor = function () {};
	    TempCtor.prototype = superCtor.prototype;
	    ctor.prototype = new TempCtor();
	    ctor.prototype.constructor = ctor;
	  };
	}
	var inherits$1 = inherits;

	// Copyright Joyent, Inc. and other Node contributors.
	var formatRegExp = /%[sdj%]/g;
	function format(f) {
	  if (!isString(f)) {
	    var objects = [];
	    for (var i = 0; i < arguments.length; i++) {
	      objects.push(inspect(arguments[i]));
	    }
	    return objects.join(' ');
	  }

	  var i = 1;
	  var args = arguments;
	  var len = args.length;
	  var str = String(f).replace(formatRegExp, function(x) {
	    if (x === '%%') return '%';
	    if (i >= len) return x;
	    switch (x) {
	      case '%s': return String(args[i++]);
	      case '%d': return Number(args[i++]);
	      case '%j':
	        try {
	          return JSON.stringify(args[i++]);
	        } catch (_) {
	          return '[Circular]';
	        }
	      default:
	        return x;
	    }
	  });
	  for (var x = args[i]; i < len; x = args[++i]) {
	    if (isNull(x) || !isObject(x)) {
	      str += ' ' + x;
	    } else {
	      str += ' ' + inspect(x);
	    }
	  }
	  return str;
	}

	// Mark that a method should not be used.
	// Returns a modified function which warns once by default.
	// If --no-deprecation is set, then it is a no-op.
	function deprecate(fn, msg) {
	  // Allow for deprecating things in the process of starting up.
	  if (isUndefined(global.process)) {
	    return function() {
	      return deprecate(fn, msg).apply(this, arguments);
	    };
	  }

	  if (process.noDeprecation === true) {
	    return fn;
	  }

	  var warned = false;
	  function deprecated() {
	    if (!warned) {
	      if (process.throwDeprecation) {
	        throw new Error(msg);
	      } else if (process.traceDeprecation) {
	        console.trace(msg);
	      } else {
	        console.error(msg);
	      }
	      warned = true;
	    }
	    return fn.apply(this, arguments);
	  }

	  return deprecated;
	}

	var debugs = {};
	var debugEnviron;
	function debuglog(set) {
	  if (isUndefined(debugEnviron))
	    debugEnviron = process.env.NODE_DEBUG || '';
	  set = set.toUpperCase();
	  if (!debugs[set]) {
	    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
	      var pid = 0;
	      debugs[set] = function() {
	        var msg = format.apply(null, arguments);
	        console.error('%s %d: %s', set, pid, msg);
	      };
	    } else {
	      debugs[set] = function() {};
	    }
	  }
	  return debugs[set];
	}

	/**
	 * Echos the value of a value. Trys to print the value out
	 * in the best way possible given the different types.
	 *
	 * @param {Object} obj The object to print out.
	 * @param {Object} opts Optional options object that alters the output.
	 */
	/* legacy: obj, showHidden, depth, colors*/
	function inspect(obj, opts) {
	  // default options
	  var ctx = {
	    seen: [],
	    stylize: stylizeNoColor
	  };
	  // legacy...
	  if (arguments.length >= 3) ctx.depth = arguments[2];
	  if (arguments.length >= 4) ctx.colors = arguments[3];
	  if (isBoolean(opts)) {
	    // legacy...
	    ctx.showHidden = opts;
	  } else if (opts) {
	    // got an "options" object
	    _extend(ctx, opts);
	  }
	  // set default options
	  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
	  if (isUndefined(ctx.depth)) ctx.depth = 2;
	  if (isUndefined(ctx.colors)) ctx.colors = false;
	  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
	  if (ctx.colors) ctx.stylize = stylizeWithColor;
	  return formatValue(ctx, obj, ctx.depth);
	}

	// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
	inspect.colors = {
	  'bold' : [1, 22],
	  'italic' : [3, 23],
	  'underline' : [4, 24],
	  'inverse' : [7, 27],
	  'white' : [37, 39],
	  'grey' : [90, 39],
	  'black' : [30, 39],
	  'blue' : [34, 39],
	  'cyan' : [36, 39],
	  'green' : [32, 39],
	  'magenta' : [35, 39],
	  'red' : [31, 39],
	  'yellow' : [33, 39]
	};

	// Don't use 'blue' not visible on cmd.exe
	inspect.styles = {
	  'special': 'cyan',
	  'number': 'yellow',
	  'boolean': 'yellow',
	  'undefined': 'grey',
	  'null': 'bold',
	  'string': 'green',
	  'date': 'magenta',
	  // "name": intentionally not styling
	  'regexp': 'red'
	};


	function stylizeWithColor(str, styleType) {
	  var style = inspect.styles[styleType];

	  if (style) {
	    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
	           '\u001b[' + inspect.colors[style][1] + 'm';
	  } else {
	    return str;
	  }
	}


	function stylizeNoColor(str, styleType) {
	  return str;
	}


	function arrayToHash(array) {
	  var hash = {};

	  array.forEach(function(val, idx) {
	    hash[val] = true;
	  });

	  return hash;
	}


	function formatValue(ctx, value, recurseTimes) {
	  // Provide a hook for user-specified inspect functions.
	  // Check that value is an object with an inspect function on it
	  if (ctx.customInspect &&
	      value &&
	      isFunction(value.inspect) &&
	      // Filter out the util module, it's inspect function is special
	      value.inspect !== inspect &&
	      // Also filter out any prototype objects using the circular check.
	      !(value.constructor && value.constructor.prototype === value)) {
	    var ret = value.inspect(recurseTimes, ctx);
	    if (!isString(ret)) {
	      ret = formatValue(ctx, ret, recurseTimes);
	    }
	    return ret;
	  }

	  // Primitive types cannot have properties
	  var primitive = formatPrimitive(ctx, value);
	  if (primitive) {
	    return primitive;
	  }

	  // Look up the keys of the object.
	  var keys = Object.keys(value);
	  var visibleKeys = arrayToHash(keys);

	  if (ctx.showHidden) {
	    keys = Object.getOwnPropertyNames(value);
	  }

	  // IE doesn't make error fields non-enumerable
	  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
	  if (isError(value)
	      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
	    return formatError(value);
	  }

	  // Some type of object without properties can be shortcutted.
	  if (keys.length === 0) {
	    if (isFunction(value)) {
	      var name = value.name ? ': ' + value.name : '';
	      return ctx.stylize('[Function' + name + ']', 'special');
	    }
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    }
	    if (isDate(value)) {
	      return ctx.stylize(Date.prototype.toString.call(value), 'date');
	    }
	    if (isError(value)) {
	      return formatError(value);
	    }
	  }

	  var base = '', array = false, braces = ['{', '}'];

	  // Make Array say that they are Array
	  if (isArray(value)) {
	    array = true;
	    braces = ['[', ']'];
	  }

	  // Make functions say that they are functions
	  if (isFunction(value)) {
	    var n = value.name ? ': ' + value.name : '';
	    base = ' [Function' + n + ']';
	  }

	  // Make RegExps say that they are RegExps
	  if (isRegExp(value)) {
	    base = ' ' + RegExp.prototype.toString.call(value);
	  }

	  // Make dates with properties first say the date
	  if (isDate(value)) {
	    base = ' ' + Date.prototype.toUTCString.call(value);
	  }

	  // Make error with message first say the error
	  if (isError(value)) {
	    base = ' ' + formatError(value);
	  }

	  if (keys.length === 0 && (!array || value.length == 0)) {
	    return braces[0] + base + braces[1];
	  }

	  if (recurseTimes < 0) {
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    } else {
	      return ctx.stylize('[Object]', 'special');
	    }
	  }

	  ctx.seen.push(value);

	  var output;
	  if (array) {
	    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
	  } else {
	    output = keys.map(function(key) {
	      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
	    });
	  }

	  ctx.seen.pop();

	  return reduceToSingleString(output, base, braces);
	}


	function formatPrimitive(ctx, value) {
	  if (isUndefined(value))
	    return ctx.stylize('undefined', 'undefined');
	  if (isString(value)) {
	    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
	                                             .replace(/'/g, "\\'")
	                                             .replace(/\\"/g, '"') + '\'';
	    return ctx.stylize(simple, 'string');
	  }
	  if (isNumber(value))
	    return ctx.stylize('' + value, 'number');
	  if (isBoolean(value))
	    return ctx.stylize('' + value, 'boolean');
	  // For some reason typeof null is "object", so special case here.
	  if (isNull(value))
	    return ctx.stylize('null', 'null');
	}


	function formatError(value) {
	  return '[' + Error.prototype.toString.call(value) + ']';
	}


	function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
	  var output = [];
	  for (var i = 0, l = value.length; i < l; ++i) {
	    if (hasOwnProperty(value, String(i))) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          String(i), true));
	    } else {
	      output.push('');
	    }
	  }
	  keys.forEach(function(key) {
	    if (!key.match(/^\d+$/)) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          key, true));
	    }
	  });
	  return output;
	}


	function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
	  var name, str, desc;
	  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
	  if (desc.get) {
	    if (desc.set) {
	      str = ctx.stylize('[Getter/Setter]', 'special');
	    } else {
	      str = ctx.stylize('[Getter]', 'special');
	    }
	  } else {
	    if (desc.set) {
	      str = ctx.stylize('[Setter]', 'special');
	    }
	  }
	  if (!hasOwnProperty(visibleKeys, key)) {
	    name = '[' + key + ']';
	  }
	  if (!str) {
	    if (ctx.seen.indexOf(desc.value) < 0) {
	      if (isNull(recurseTimes)) {
	        str = formatValue(ctx, desc.value, null);
	      } else {
	        str = formatValue(ctx, desc.value, recurseTimes - 1);
	      }
	      if (str.indexOf('\n') > -1) {
	        if (array) {
	          str = str.split('\n').map(function(line) {
	            return '  ' + line;
	          }).join('\n').substr(2);
	        } else {
	          str = '\n' + str.split('\n').map(function(line) {
	            return '   ' + line;
	          }).join('\n');
	        }
	      }
	    } else {
	      str = ctx.stylize('[Circular]', 'special');
	    }
	  }
	  if (isUndefined(name)) {
	    if (array && key.match(/^\d+$/)) {
	      return str;
	    }
	    name = JSON.stringify('' + key);
	    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
	      name = name.substr(1, name.length - 2);
	      name = ctx.stylize(name, 'name');
	    } else {
	      name = name.replace(/'/g, "\\'")
	                 .replace(/\\"/g, '"')
	                 .replace(/(^"|"$)/g, "'");
	      name = ctx.stylize(name, 'string');
	    }
	  }

	  return name + ': ' + str;
	}


	function reduceToSingleString(output, base, braces) {
	  var length = output.reduce(function(prev, cur) {
	    if (cur.indexOf('\n') >= 0) ;
	    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
	  }, 0);

	  if (length > 60) {
	    return braces[0] +
	           (base === '' ? '' : base + '\n ') +
	           ' ' +
	           output.join(',\n  ') +
	           ' ' +
	           braces[1];
	  }

	  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
	}


	// NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.
	function isArray(ar) {
	  return Array.isArray(ar);
	}

	function isBoolean(arg) {
	  return typeof arg === 'boolean';
	}

	function isNull(arg) {
	  return arg === null;
	}

	function isNullOrUndefined(arg) {
	  return arg == null;
	}

	function isNumber(arg) {
	  return typeof arg === 'number';
	}

	function isString(arg) {
	  return typeof arg === 'string';
	}

	function isSymbol(arg) {
	  return typeof arg === 'symbol';
	}

	function isUndefined(arg) {
	  return arg === void 0;
	}

	function isRegExp(re) {
	  return isObject(re) && objectToString(re) === '[object RegExp]';
	}

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}

	function isDate(d) {
	  return isObject(d) && objectToString(d) === '[object Date]';
	}

	function isError(e) {
	  return isObject(e) &&
	      (objectToString(e) === '[object Error]' || e instanceof Error);
	}

	function isFunction(arg) {
	  return typeof arg === 'function';
	}

	function isPrimitive(arg) {
	  return arg === null ||
	         typeof arg === 'boolean' ||
	         typeof arg === 'number' ||
	         typeof arg === 'string' ||
	         typeof arg === 'symbol' ||  // ES6 symbol
	         typeof arg === 'undefined';
	}

	function isBuffer(maybeBuf) {
	  return Buffer.isBuffer(maybeBuf);
	}

	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}


	function pad(n) {
	  return n < 10 ? '0' + n.toString(10) : n.toString(10);
	}


	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
	              'Oct', 'Nov', 'Dec'];

	// 26 Feb 16:19:34
	function timestamp() {
	  var d = new Date();
	  var time = [pad(d.getHours()),
	              pad(d.getMinutes()),
	              pad(d.getSeconds())].join(':');
	  return [d.getDate(), months[d.getMonth()], time].join(' ');
	}


	// log is just a thin wrapper to console.log that prepends a timestamp
	function log() {
	  console.log('%s - %s', timestamp(), format.apply(null, arguments));
	}

	function _extend(origin, add) {
	  // Don't do anything if add isn't an object
	  if (!add || !isObject(add)) return origin;

	  var keys = Object.keys(add);
	  var i = keys.length;
	  while (i--) {
	    origin[keys[i]] = add[keys[i]];
	  }
	  return origin;
	}
	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}

	var require$$0$1 = {
	  inherits: inherits$1,
	  _extend: _extend,
	  log: log,
	  isBuffer: isBuffer,
	  isPrimitive: isPrimitive,
	  isFunction: isFunction,
	  isError: isError,
	  isDate: isDate,
	  isObject: isObject,
	  isRegExp: isRegExp,
	  isUndefined: isUndefined,
	  isSymbol: isSymbol,
	  isString: isString,
	  isNumber: isNumber,
	  isNullOrUndefined: isNullOrUndefined,
	  isNull: isNull,
	  isBoolean: isBoolean,
	  isArray: isArray,
	  inspect: inspect,
	  deprecate: deprecate,
	  format: format,
	  debuglog: debuglog
	}

	var inherits_browser = createCommonjsModule(function (module) {
	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor;
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor;
	    var TempCtor = function () {};
	    TempCtor.prototype = superCtor.prototype;
	    ctor.prototype = new TempCtor();
	    ctor.prototype.constructor = ctor;
	  };
	}
	});

	var inherits$2 = createCommonjsModule(function (module) {
	try {
	  var util = require$$0$1;
	  if (typeof util.inherits !== 'function') throw '';
	  module.exports = util.inherits;
	} catch (e) {
	  module.exports = inherits_browser;
	}
	});

	var lookup = [];
	var revLookup = [];
	var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
	var inited = false;
	function init () {
	  inited = true;
	  var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	  for (var i = 0, len = code.length; i < len; ++i) {
	    lookup[i] = code[i];
	    revLookup[code.charCodeAt(i)] = i;
	  }

	  revLookup['-'.charCodeAt(0)] = 62;
	  revLookup['_'.charCodeAt(0)] = 63;
	}

	function toByteArray (b64) {
	  if (!inited) {
	    init();
	  }
	  var i, j, l, tmp, placeHolders, arr;
	  var len = b64.length;

	  if (len % 4 > 0) {
	    throw new Error('Invalid string. Length must be a multiple of 4')
	  }

	  // the number of equal signs (place holders)
	  // if there are two placeholders, than the two characters before it
	  // represent one byte
	  // if there is only one, then the three characters before it represent 2 bytes
	  // this is just a cheap hack to not do indexOf twice
	  placeHolders = b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0;

	  // base64 is 4/3 + up to two characters of the original data
	  arr = new Arr(len * 3 / 4 - placeHolders);

	  // if there are placeholders, only get up to the last complete 4 chars
	  l = placeHolders > 0 ? len - 4 : len;

	  var L = 0;

	  for (i = 0, j = 0; i < l; i += 4, j += 3) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)];
	    arr[L++] = (tmp >> 16) & 0xFF;
	    arr[L++] = (tmp >> 8) & 0xFF;
	    arr[L++] = tmp & 0xFF;
	  }

	  if (placeHolders === 2) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4);
	    arr[L++] = tmp & 0xFF;
	  } else if (placeHolders === 1) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2);
	    arr[L++] = (tmp >> 8) & 0xFF;
	    arr[L++] = tmp & 0xFF;
	  }

	  return arr
	}

	function tripletToBase64 (num) {
	  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
	}

	function encodeChunk (uint8, start, end) {
	  var tmp;
	  var output = [];
	  for (var i = start; i < end; i += 3) {
	    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2]);
	    output.push(tripletToBase64(tmp));
	  }
	  return output.join('')
	}

	function fromByteArray (uint8) {
	  if (!inited) {
	    init();
	  }
	  var tmp;
	  var len = uint8.length;
	  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
	  var output = '';
	  var parts = [];
	  var maxChunkLength = 16383; // must be multiple of 3

	  // go through the array every three bytes, we'll deal with trailing stuff later
	  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
	    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)));
	  }

	  // pad the end with zeros, but make sure to not forget the extra bytes
	  if (extraBytes === 1) {
	    tmp = uint8[len - 1];
	    output += lookup[tmp >> 2];
	    output += lookup[(tmp << 4) & 0x3F];
	    output += '==';
	  } else if (extraBytes === 2) {
	    tmp = (uint8[len - 2] << 8) + (uint8[len - 1]);
	    output += lookup[tmp >> 10];
	    output += lookup[(tmp >> 4) & 0x3F];
	    output += lookup[(tmp << 2) & 0x3F];
	    output += '=';
	  }

	  parts.push(output);

	  return parts.join('')
	}

	function read (buffer, offset, isLE, mLen, nBytes) {
	  var e, m;
	  var eLen = nBytes * 8 - mLen - 1;
	  var eMax = (1 << eLen) - 1;
	  var eBias = eMax >> 1;
	  var nBits = -7;
	  var i = isLE ? (nBytes - 1) : 0;
	  var d = isLE ? -1 : 1;
	  var s = buffer[offset + i];

	  i += d;

	  e = s & ((1 << (-nBits)) - 1);
	  s >>= (-nBits);
	  nBits += eLen;
	  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  m = e & ((1 << (-nBits)) - 1);
	  e >>= (-nBits);
	  nBits += mLen;
	  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  if (e === 0) {
	    e = 1 - eBias;
	  } else if (e === eMax) {
	    return m ? NaN : ((s ? -1 : 1) * Infinity)
	  } else {
	    m = m + Math.pow(2, mLen);
	    e = e - eBias;
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
	}

	function write (buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c;
	  var eLen = nBytes * 8 - mLen - 1;
	  var eMax = (1 << eLen) - 1;
	  var eBias = eMax >> 1;
	  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0);
	  var i = isLE ? 0 : (nBytes - 1);
	  var d = isLE ? 1 : -1;
	  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

	  value = Math.abs(value);

	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0;
	    e = eMax;
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2);
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--;
	      c *= 2;
	    }
	    if (e + eBias >= 1) {
	      value += rt / c;
	    } else {
	      value += rt * Math.pow(2, 1 - eBias);
	    }
	    if (value * c >= 2) {
	      e++;
	      c /= 2;
	    }

	    if (e + eBias >= eMax) {
	      m = 0;
	      e = eMax;
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * Math.pow(2, mLen);
	      e = e + eBias;
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
	      e = 0;
	    }
	  }

	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

	  e = (e << mLen) | m;
	  eLen += mLen;
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

	  buffer[offset + i - d] |= s * 128;
	}

	var toString = {}.toString;

	var isArray$1 = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};

	/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */

	var INSPECT_MAX_BYTES = 50;

	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Due to various browser bugs, sometimes the Object implementation will be used even
	 * when the browser supports typed arrays.
	 *
	 * Note:
	 *
	 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
	 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *     incorrect length in some situations.

	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
	 * get the Object implementation, which is slower but behaves correctly.
	 */
	Buffer$1.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
	  ? global.TYPED_ARRAY_SUPPORT
	  : true;

	/*
	 * Export kMaxLength after typed array support is determined.
	 */
	var _kMaxLength = kMaxLength();

	function kMaxLength () {
	  return Buffer$1.TYPED_ARRAY_SUPPORT
	    ? 0x7fffffff
	    : 0x3fffffff
	}

	function createBuffer (that, length) {
	  if (kMaxLength() < length) {
	    throw new RangeError('Invalid typed array length')
	  }
	  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = new Uint8Array(length);
	    that.__proto__ = Buffer$1.prototype;
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    if (that === null) {
	      that = new Buffer$1(length);
	    }
	    that.length = length;
	  }

	  return that
	}

	/**
	 * The Buffer constructor returns instances of `Uint8Array` that have their
	 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
	 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
	 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
	 * returns a single octet.
	 *
	 * The `Uint8Array` prototype remains unmodified.
	 */

	function Buffer$1 (arg, encodingOrOffset, length) {
	  if (!Buffer$1.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer$1)) {
	    return new Buffer$1(arg, encodingOrOffset, length)
	  }

	  // Common case.
	  if (typeof arg === 'number') {
	    if (typeof encodingOrOffset === 'string') {
	      throw new Error(
	        'If encoding is specified then the first argument must be a string'
	      )
	    }
	    return allocUnsafe(this, arg)
	  }
	  return from(this, arg, encodingOrOffset, length)
	}

	Buffer$1.poolSize = 8192; // not used by this implementation

	// TODO: Legacy, not needed anymore. Remove in next major version.
	Buffer$1._augment = function (arr) {
	  arr.__proto__ = Buffer$1.prototype;
	  return arr
	};

	function from (that, value, encodingOrOffset, length) {
	  if (typeof value === 'number') {
	    throw new TypeError('"value" argument must not be a number')
	  }

	  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
	    return fromArrayBuffer(that, value, encodingOrOffset, length)
	  }

	  if (typeof value === 'string') {
	    return fromString(that, value, encodingOrOffset)
	  }

	  return fromObject(that, value)
	}

	/**
	 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
	 * if value is a number.
	 * Buffer.from(str[, encoding])
	 * Buffer.from(array)
	 * Buffer.from(buffer)
	 * Buffer.from(arrayBuffer[, byteOffset[, length]])
	 **/
	Buffer$1.from = function (value, encodingOrOffset, length) {
	  return from(null, value, encodingOrOffset, length)
	};

	if (Buffer$1.TYPED_ARRAY_SUPPORT) {
	  Buffer$1.prototype.__proto__ = Uint8Array.prototype;
	  Buffer$1.__proto__ = Uint8Array;
	}

	function assertSize (size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('"size" argument must be a number')
	  } else if (size < 0) {
	    throw new RangeError('"size" argument must not be negative')
	  }
	}

	function alloc (that, size, fill, encoding) {
	  assertSize(size);
	  if (size <= 0) {
	    return createBuffer(that, size)
	  }
	  if (fill !== undefined) {
	    // Only pay attention to encoding if it's a string. This
	    // prevents accidentally sending in a number that would
	    // be interpretted as a start offset.
	    return typeof encoding === 'string'
	      ? createBuffer(that, size).fill(fill, encoding)
	      : createBuffer(that, size).fill(fill)
	  }
	  return createBuffer(that, size)
	}

	/**
	 * Creates a new filled Buffer instance.
	 * alloc(size[, fill[, encoding]])
	 **/
	Buffer$1.alloc = function (size, fill, encoding) {
	  return alloc(null, size, fill, encoding)
	};

	function allocUnsafe (that, size) {
	  assertSize(size);
	  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
	  if (!Buffer$1.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < size; ++i) {
	      that[i] = 0;
	    }
	  }
	  return that
	}

	/**
	 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
	 * */
	Buffer$1.allocUnsafe = function (size) {
	  return allocUnsafe(null, size)
	};
	/**
	 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
	 */
	Buffer$1.allocUnsafeSlow = function (size) {
	  return allocUnsafe(null, size)
	};

	function fromString (that, string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') {
	    encoding = 'utf8';
	  }

	  if (!Buffer$1.isEncoding(encoding)) {
	    throw new TypeError('"encoding" must be a valid string encoding')
	  }

	  var length = byteLength(string, encoding) | 0;
	  that = createBuffer(that, length);

	  var actual = that.write(string, encoding);

	  if (actual !== length) {
	    // Writing a hex string, for example, that contains invalid characters will
	    // cause everything after the first invalid character to be ignored. (e.g.
	    // 'abxxcd' will be treated as 'ab')
	    that = that.slice(0, actual);
	  }

	  return that
	}

	function fromArrayLike (that, array) {
	  var length = array.length < 0 ? 0 : checked(array.length) | 0;
	  that = createBuffer(that, length);
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255;
	  }
	  return that
	}

	function fromArrayBuffer (that, array, byteOffset, length) {
	  array.byteLength; // this throws if `array` is not a valid ArrayBuffer

	  if (byteOffset < 0 || array.byteLength < byteOffset) {
	    throw new RangeError('\'offset\' is out of bounds')
	  }

	  if (array.byteLength < byteOffset + (length || 0)) {
	    throw new RangeError('\'length\' is out of bounds')
	  }

	  if (byteOffset === undefined && length === undefined) {
	    array = new Uint8Array(array);
	  } else if (length === undefined) {
	    array = new Uint8Array(array, byteOffset);
	  } else {
	    array = new Uint8Array(array, byteOffset, length);
	  }

	  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = array;
	    that.__proto__ = Buffer$1.prototype;
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that = fromArrayLike(that, array);
	  }
	  return that
	}

	function fromObject (that, obj) {
	  if (internalIsBuffer(obj)) {
	    var len = checked(obj.length) | 0;
	    that = createBuffer(that, len);

	    if (that.length === 0) {
	      return that
	    }

	    obj.copy(that, 0, 0, len);
	    return that
	  }

	  if (obj) {
	    if ((typeof ArrayBuffer !== 'undefined' &&
	        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
	      if (typeof obj.length !== 'number' || isnan(obj.length)) {
	        return createBuffer(that, 0)
	      }
	      return fromArrayLike(that, obj)
	    }

	    if (obj.type === 'Buffer' && isArray$1(obj.data)) {
	      return fromArrayLike(that, obj.data)
	    }
	  }

	  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
	}

	function checked (length) {
	  // Note: cannot use `length < kMaxLength()` here because that fails when
	  // length is NaN (which is otherwise coerced to zero.)
	  if (length >= kMaxLength()) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
	                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
	  }
	  return length | 0
	}

	function SlowBuffer (length) {
	  if (+length != length) { // eslint-disable-line eqeqeq
	    length = 0;
	  }
	  return Buffer$1.alloc(+length)
	}
	Buffer$1.isBuffer = isBuffer$1;
	function internalIsBuffer (b) {
	  return !!(b != null && b._isBuffer)
	}

	Buffer$1.compare = function compare (a, b) {
	  if (!internalIsBuffer(a) || !internalIsBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers')
	  }

	  if (a === b) return 0

	  var x = a.length;
	  var y = b.length;

	  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
	    if (a[i] !== b[i]) {
	      x = a[i];
	      y = b[i];
	      break
	    }
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	};

	Buffer$1.isEncoding = function isEncoding (encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'latin1':
	    case 'binary':
	    case 'base64':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true
	    default:
	      return false
	  }
	};

	Buffer$1.concat = function concat (list, length) {
	  if (!isArray$1(list)) {
	    throw new TypeError('"list" argument must be an Array of Buffers')
	  }

	  if (list.length === 0) {
	    return Buffer$1.alloc(0)
	  }

	  var i;
	  if (length === undefined) {
	    length = 0;
	    for (i = 0; i < list.length; ++i) {
	      length += list[i].length;
	    }
	  }

	  var buffer = Buffer$1.allocUnsafe(length);
	  var pos = 0;
	  for (i = 0; i < list.length; ++i) {
	    var buf = list[i];
	    if (!internalIsBuffer(buf)) {
	      throw new TypeError('"list" argument must be an Array of Buffers')
	    }
	    buf.copy(buffer, pos);
	    pos += buf.length;
	  }
	  return buffer
	};

	function byteLength (string, encoding) {
	  if (internalIsBuffer(string)) {
	    return string.length
	  }
	  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
	      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
	    return string.byteLength
	  }
	  if (typeof string !== 'string') {
	    string = '' + string;
	  }

	  var len = string.length;
	  if (len === 0) return 0

	  // Use a for loop to avoid recursion
	  var loweredCase = false;
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'latin1':
	      case 'binary':
	        return len
	      case 'utf8':
	      case 'utf-8':
	      case undefined:
	        return utf8ToBytes(string).length
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2
	      case 'hex':
	        return len >>> 1
	      case 'base64':
	        return base64ToBytes(string).length
	      default:
	        if (loweredCase) return utf8ToBytes(string).length // assume utf8
	        encoding = ('' + encoding).toLowerCase();
	        loweredCase = true;
	    }
	  }
	}
	Buffer$1.byteLength = byteLength;

	function slowToString (encoding, start, end) {
	  var loweredCase = false;

	  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
	  // property of a typed array.

	  // This behaves neither like String nor Uint8Array in that we set start/end
	  // to their upper/lower bounds if the value passed is out of range.
	  // undefined is handled specially as per ECMA-262 6th Edition,
	  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
	  if (start === undefined || start < 0) {
	    start = 0;
	  }
	  // Return early if start > this.length. Done here to prevent potential uint32
	  // coercion fail below.
	  if (start > this.length) {
	    return ''
	  }

	  if (end === undefined || end > this.length) {
	    end = this.length;
	  }

	  if (end <= 0) {
	    return ''
	  }

	  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
	  end >>>= 0;
	  start >>>= 0;

	  if (end <= start) {
	    return ''
	  }

	  if (!encoding) encoding = 'utf8';

	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end)

	      case 'ascii':
	        return asciiSlice(this, start, end)

	      case 'latin1':
	      case 'binary':
	        return latin1Slice(this, start, end)

	      case 'base64':
	        return base64Slice(this, start, end)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = (encoding + '').toLowerCase();
	        loweredCase = true;
	    }
	  }
	}

	// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
	// Buffer instances.
	Buffer$1.prototype._isBuffer = true;

	function swap (b, n, m) {
	  var i = b[n];
	  b[n] = b[m];
	  b[m] = i;
	}

	Buffer$1.prototype.swap16 = function swap16 () {
	  var len = this.length;
	  if (len % 2 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 16-bits')
	  }
	  for (var i = 0; i < len; i += 2) {
	    swap(this, i, i + 1);
	  }
	  return this
	};

	Buffer$1.prototype.swap32 = function swap32 () {
	  var len = this.length;
	  if (len % 4 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 32-bits')
	  }
	  for (var i = 0; i < len; i += 4) {
	    swap(this, i, i + 3);
	    swap(this, i + 1, i + 2);
	  }
	  return this
	};

	Buffer$1.prototype.swap64 = function swap64 () {
	  var len = this.length;
	  if (len % 8 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 64-bits')
	  }
	  for (var i = 0; i < len; i += 8) {
	    swap(this, i, i + 7);
	    swap(this, i + 1, i + 6);
	    swap(this, i + 2, i + 5);
	    swap(this, i + 3, i + 4);
	  }
	  return this
	};

	Buffer$1.prototype.toString = function toString () {
	  var length = this.length | 0;
	  if (length === 0) return ''
	  if (arguments.length === 0) return utf8Slice(this, 0, length)
	  return slowToString.apply(this, arguments)
	};

	Buffer$1.prototype.equals = function equals (b) {
	  if (!internalIsBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return true
	  return Buffer$1.compare(this, b) === 0
	};

	Buffer$1.prototype.inspect = function inspect () {
	  var str = '';
	  var max = INSPECT_MAX_BYTES;
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
	    if (this.length > max) str += ' ... ';
	  }
	  return '<Buffer ' + str + '>'
	};

	Buffer$1.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
	  if (!internalIsBuffer(target)) {
	    throw new TypeError('Argument must be a Buffer')
	  }

	  if (start === undefined) {
	    start = 0;
	  }
	  if (end === undefined) {
	    end = target ? target.length : 0;
	  }
	  if (thisStart === undefined) {
	    thisStart = 0;
	  }
	  if (thisEnd === undefined) {
	    thisEnd = this.length;
	  }

	  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
	    throw new RangeError('out of range index')
	  }

	  if (thisStart >= thisEnd && start >= end) {
	    return 0
	  }
	  if (thisStart >= thisEnd) {
	    return -1
	  }
	  if (start >= end) {
	    return 1
	  }

	  start >>>= 0;
	  end >>>= 0;
	  thisStart >>>= 0;
	  thisEnd >>>= 0;

	  if (this === target) return 0

	  var x = thisEnd - thisStart;
	  var y = end - start;
	  var len = Math.min(x, y);

	  var thisCopy = this.slice(thisStart, thisEnd);
	  var targetCopy = target.slice(start, end);

	  for (var i = 0; i < len; ++i) {
	    if (thisCopy[i] !== targetCopy[i]) {
	      x = thisCopy[i];
	      y = targetCopy[i];
	      break
	    }
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	};

	// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
	// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
	//
	// Arguments:
	// - buffer - a Buffer to search
	// - val - a string, Buffer, or number
	// - byteOffset - an index into `buffer`; will be clamped to an int32
	// - encoding - an optional encoding, relevant is val is a string
	// - dir - true for indexOf, false for lastIndexOf
	function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
	  // Empty buffer means no match
	  if (buffer.length === 0) return -1

	  // Normalize byteOffset
	  if (typeof byteOffset === 'string') {
	    encoding = byteOffset;
	    byteOffset = 0;
	  } else if (byteOffset > 0x7fffffff) {
	    byteOffset = 0x7fffffff;
	  } else if (byteOffset < -0x80000000) {
	    byteOffset = -0x80000000;
	  }
	  byteOffset = +byteOffset;  // Coerce to Number.
	  if (isNaN(byteOffset)) {
	    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
	    byteOffset = dir ? 0 : (buffer.length - 1);
	  }

	  // Normalize byteOffset: negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
	  if (byteOffset >= buffer.length) {
	    if (dir) return -1
	    else byteOffset = buffer.length - 1;
	  } else if (byteOffset < 0) {
	    if (dir) byteOffset = 0;
	    else return -1
	  }

	  // Normalize val
	  if (typeof val === 'string') {
	    val = Buffer$1.from(val, encoding);
	  }

	  // Finally, search either indexOf (if dir is true) or lastIndexOf
	  if (internalIsBuffer(val)) {
	    // Special case: looking for empty string/buffer always fails
	    if (val.length === 0) {
	      return -1
	    }
	    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
	  } else if (typeof val === 'number') {
	    val = val & 0xFF; // Search for a byte value [0-255]
	    if (Buffer$1.TYPED_ARRAY_SUPPORT &&
	        typeof Uint8Array.prototype.indexOf === 'function') {
	      if (dir) {
	        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
	      } else {
	        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
	      }
	    }
	    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
	  }

	  throw new TypeError('val must be string, number or Buffer')
	}

	function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
	  var indexSize = 1;
	  var arrLength = arr.length;
	  var valLength = val.length;

	  if (encoding !== undefined) {
	    encoding = String(encoding).toLowerCase();
	    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
	        encoding === 'utf16le' || encoding === 'utf-16le') {
	      if (arr.length < 2 || val.length < 2) {
	        return -1
	      }
	      indexSize = 2;
	      arrLength /= 2;
	      valLength /= 2;
	      byteOffset /= 2;
	    }
	  }

	  function read$$1 (buf, i) {
	    if (indexSize === 1) {
	      return buf[i]
	    } else {
	      return buf.readUInt16BE(i * indexSize)
	    }
	  }

	  var i;
	  if (dir) {
	    var foundIndex = -1;
	    for (i = byteOffset; i < arrLength; i++) {
	      if (read$$1(arr, i) === read$$1(val, foundIndex === -1 ? 0 : i - foundIndex)) {
	        if (foundIndex === -1) foundIndex = i;
	        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
	      } else {
	        if (foundIndex !== -1) i -= i - foundIndex;
	        foundIndex = -1;
	      }
	    }
	  } else {
	    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
	    for (i = byteOffset; i >= 0; i--) {
	      var found = true;
	      for (var j = 0; j < valLength; j++) {
	        if (read$$1(arr, i + j) !== read$$1(val, j)) {
	          found = false;
	          break
	        }
	      }
	      if (found) return i
	    }
	  }

	  return -1
	}

	Buffer$1.prototype.includes = function includes (val, byteOffset, encoding) {
	  return this.indexOf(val, byteOffset, encoding) !== -1
	};

	Buffer$1.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
	};

	Buffer$1.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
	};

	function hexWrite (buf, string, offset, length) {
	  offset = Number(offset) || 0;
	  var remaining = buf.length - offset;
	  if (!length) {
	    length = remaining;
	  } else {
	    length = Number(length);
	    if (length > remaining) {
	      length = remaining;
	    }
	  }

	  // must be an even number of digits
	  var strLen = string.length;
	  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

	  if (length > strLen / 2) {
	    length = strLen / 2;
	  }
	  for (var i = 0; i < length; ++i) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16);
	    if (isNaN(parsed)) return i
	    buf[offset + i] = parsed;
	  }
	  return i
	}

	function utf8Write (buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
	}

	function asciiWrite (buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length)
	}

	function latin1Write (buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length)
	}

	function base64Write (buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length)
	}

	function ucs2Write (buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
	}

	Buffer$1.prototype.write = function write$$1 (string, offset, length, encoding) {
	  // Buffer#write(string)
	  if (offset === undefined) {
	    encoding = 'utf8';
	    length = this.length;
	    offset = 0;
	  // Buffer#write(string, encoding)
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset;
	    length = this.length;
	    offset = 0;
	  // Buffer#write(string, offset[, length][, encoding])
	  } else if (isFinite(offset)) {
	    offset = offset | 0;
	    if (isFinite(length)) {
	      length = length | 0;
	      if (encoding === undefined) encoding = 'utf8';
	    } else {
	      encoding = length;
	      length = undefined;
	    }
	  // legacy write(string, encoding, offset, length) - remove in v0.13
	  } else {
	    throw new Error(
	      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
	    )
	  }

	  var remaining = this.length - offset;
	  if (length === undefined || length > remaining) length = remaining;

	  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
	    throw new RangeError('Attempt to write outside buffer bounds')
	  }

	  if (!encoding) encoding = 'utf8';

	  var loweredCase = false;
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length)

	      case 'ascii':
	        return asciiWrite(this, string, offset, length)

	      case 'latin1':
	      case 'binary':
	        return latin1Write(this, string, offset, length)

	      case 'base64':
	        // Warning: maxLength not taken into account in base64Write
	        return base64Write(this, string, offset, length)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = ('' + encoding).toLowerCase();
	        loweredCase = true;
	    }
	  }
	};

	Buffer$1.prototype.toJSON = function toJSON () {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  }
	};

	function base64Slice (buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return fromByteArray(buf)
	  } else {
	    return fromByteArray(buf.slice(start, end))
	  }
	}

	function utf8Slice (buf, start, end) {
	  end = Math.min(buf.length, end);
	  var res = [];

	  var i = start;
	  while (i < end) {
	    var firstByte = buf[i];
	    var codePoint = null;
	    var bytesPerSequence = (firstByte > 0xEF) ? 4
	      : (firstByte > 0xDF) ? 3
	      : (firstByte > 0xBF) ? 2
	      : 1;

	    if (i + bytesPerSequence <= end) {
	      var secondByte, thirdByte, fourthByte, tempCodePoint;

	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte;
	          }
	          break
	        case 2:
	          secondByte = buf[i + 1];
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F);
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint;
	            }
	          }
	          break
	        case 3:
	          secondByte = buf[i + 1];
	          thirdByte = buf[i + 2];
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F);
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint;
	            }
	          }
	          break
	        case 4:
	          secondByte = buf[i + 1];
	          thirdByte = buf[i + 2];
	          fourthByte = buf[i + 3];
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F);
	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	              codePoint = tempCodePoint;
	            }
	          }
	      }
	    }

	    if (codePoint === null) {
	      // we did not generate a valid codePoint so insert a
	      // replacement char (U+FFFD) and advance only 1 byte
	      codePoint = 0xFFFD;
	      bytesPerSequence = 1;
	    } else if (codePoint > 0xFFFF) {
	      // encode to utf16 (surrogate pair dance)
	      codePoint -= 0x10000;
	      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
	      codePoint = 0xDC00 | codePoint & 0x3FF;
	    }

	    res.push(codePoint);
	    i += bytesPerSequence;
	  }

	  return decodeCodePointsArray(res)
	}

	// Based on http://stackoverflow.com/a/22747272/680742, the browser with
	// the lowest limit is Chrome, with 0x10000 args.
	// We go 1 magnitude less, for safety
	var MAX_ARGUMENTS_LENGTH = 0x1000;

	function decodeCodePointsArray (codePoints) {
	  var len = codePoints.length;
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
	  }

	  // Decode in chunks to avoid "call stack size exceeded".
	  var res = '';
	  var i = 0;
	  while (i < len) {
	    res += String.fromCharCode.apply(
	      String,
	      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
	    );
	  }
	  return res
	}

	function asciiSlice (buf, start, end) {
	  var ret = '';
	  end = Math.min(buf.length, end);

	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i] & 0x7F);
	  }
	  return ret
	}

	function latin1Slice (buf, start, end) {
	  var ret = '';
	  end = Math.min(buf.length, end);

	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i]);
	  }
	  return ret
	}

	function hexSlice (buf, start, end) {
	  var len = buf.length;

	  if (!start || start < 0) start = 0;
	  if (!end || end < 0 || end > len) end = len;

	  var out = '';
	  for (var i = start; i < end; ++i) {
	    out += toHex(buf[i]);
	  }
	  return out
	}

	function utf16leSlice (buf, start, end) {
	  var bytes = buf.slice(start, end);
	  var res = '';
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
	  }
	  return res
	}

	Buffer$1.prototype.slice = function slice (start, end) {
	  var len = this.length;
	  start = ~~start;
	  end = end === undefined ? len : ~~end;

	  if (start < 0) {
	    start += len;
	    if (start < 0) start = 0;
	  } else if (start > len) {
	    start = len;
	  }

	  if (end < 0) {
	    end += len;
	    if (end < 0) end = 0;
	  } else if (end > len) {
	    end = len;
	  }

	  if (end < start) end = start;

	  var newBuf;
	  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
	    newBuf = this.subarray(start, end);
	    newBuf.__proto__ = Buffer$1.prototype;
	  } else {
	    var sliceLen = end - start;
	    newBuf = new Buffer$1(sliceLen, undefined);
	    for (var i = 0; i < sliceLen; ++i) {
	      newBuf[i] = this[i + start];
	    }
	  }

	  return newBuf
	};

	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset (offset, ext, length) {
	  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
	}

	Buffer$1.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) checkOffset(offset, byteLength, this.length);

	  var val = this[offset];
	  var mul = 1;
	  var i = 0;
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul;
	  }

	  return val
	};

	Buffer$1.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length);
	  }

	  var val = this[offset + --byteLength];
	  var mul = 1;
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul;
	  }

	  return val
	};

	Buffer$1.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length);
	  return this[offset]
	};

	Buffer$1.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  return this[offset] | (this[offset + 1] << 8)
	};

	Buffer$1.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  return (this[offset] << 8) | this[offset + 1]
	};

	Buffer$1.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);

	  return ((this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16)) +
	      (this[offset + 3] * 0x1000000)
	};

	Buffer$1.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);

	  return (this[offset] * 0x1000000) +
	    ((this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    this[offset + 3])
	};

	Buffer$1.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) checkOffset(offset, byteLength, this.length);

	  var val = this[offset];
	  var mul = 1;
	  var i = 0;
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul;
	  }
	  mul *= 0x80;

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

	  return val
	};

	Buffer$1.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) checkOffset(offset, byteLength, this.length);

	  var i = byteLength;
	  var mul = 1;
	  var val = this[offset + --i];
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul;
	  }
	  mul *= 0x80;

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

	  return val
	};

	Buffer$1.prototype.readInt8 = function readInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length);
	  if (!(this[offset] & 0x80)) return (this[offset])
	  return ((0xff - this[offset] + 1) * -1)
	};

	Buffer$1.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  var val = this[offset] | (this[offset + 1] << 8);
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	};

	Buffer$1.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  var val = this[offset + 1] | (this[offset] << 8);
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	};

	Buffer$1.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);

	  return (this[offset]) |
	    (this[offset + 1] << 8) |
	    (this[offset + 2] << 16) |
	    (this[offset + 3] << 24)
	};

	Buffer$1.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);

	  return (this[offset] << 24) |
	    (this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    (this[offset + 3])
	};

	Buffer$1.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);
	  return read(this, offset, true, 23, 4)
	};

	Buffer$1.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);
	  return read(this, offset, false, 23, 4)
	};

	Buffer$1.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length);
	  return read(this, offset, true, 52, 8)
	};

	Buffer$1.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length);
	  return read(this, offset, false, 52, 8)
	};

	function checkInt (buf, value, offset, ext, max, min) {
	  if (!internalIsBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
	  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	}

	Buffer$1.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
	    checkInt(this, value, offset, byteLength, maxBytes, 0);
	  }

	  var mul = 1;
	  var i = 0;
	  this[offset] = value & 0xFF;
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF;
	  }

	  return offset + byteLength
	};

	Buffer$1.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
	    checkInt(this, value, offset, byteLength, maxBytes, 0);
	  }

	  var i = byteLength - 1;
	  var mul = 1;
	  this[offset + i] = value & 0xFF;
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF;
	  }

	  return offset + byteLength
	};

	Buffer$1.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
	  if (!Buffer$1.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
	  this[offset] = (value & 0xff);
	  return offset + 1
	};

	function objectWriteUInt16 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1;
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
	    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
	      (littleEndian ? i : 1 - i) * 8;
	  }
	}

	Buffer$1.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
	  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff);
	    this[offset + 1] = (value >>> 8);
	  } else {
	    objectWriteUInt16(this, value, offset, true);
	  }
	  return offset + 2
	};

	Buffer$1.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
	  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8);
	    this[offset + 1] = (value & 0xff);
	  } else {
	    objectWriteUInt16(this, value, offset, false);
	  }
	  return offset + 2
	};

	function objectWriteUInt32 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1;
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
	    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff;
	  }
	}

	Buffer$1.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
	  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = (value >>> 24);
	    this[offset + 2] = (value >>> 16);
	    this[offset + 1] = (value >>> 8);
	    this[offset] = (value & 0xff);
	  } else {
	    objectWriteUInt32(this, value, offset, true);
	  }
	  return offset + 4
	};

	Buffer$1.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
	  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24);
	    this[offset + 1] = (value >>> 16);
	    this[offset + 2] = (value >>> 8);
	    this[offset + 3] = (value & 0xff);
	  } else {
	    objectWriteUInt32(this, value, offset, false);
	  }
	  return offset + 4
	};

	Buffer$1.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1);

	    checkInt(this, value, offset, byteLength, limit - 1, -limit);
	  }

	  var i = 0;
	  var mul = 1;
	  var sub = 0;
	  this[offset] = value & 0xFF;
	  while (++i < byteLength && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
	      sub = 1;
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
	  }

	  return offset + byteLength
	};

	Buffer$1.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1);

	    checkInt(this, value, offset, byteLength, limit - 1, -limit);
	  }

	  var i = byteLength - 1;
	  var mul = 1;
	  var sub = 0;
	  this[offset + i] = value & 0xFF;
	  while (--i >= 0 && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
	      sub = 1;
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
	  }

	  return offset + byteLength
	};

	Buffer$1.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
	  if (!Buffer$1.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
	  if (value < 0) value = 0xff + value + 1;
	  this[offset] = (value & 0xff);
	  return offset + 1
	};

	Buffer$1.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
	  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff);
	    this[offset + 1] = (value >>> 8);
	  } else {
	    objectWriteUInt16(this, value, offset, true);
	  }
	  return offset + 2
	};

	Buffer$1.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
	  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8);
	    this[offset + 1] = (value & 0xff);
	  } else {
	    objectWriteUInt16(this, value, offset, false);
	  }
	  return offset + 2
	};

	Buffer$1.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
	  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff);
	    this[offset + 1] = (value >>> 8);
	    this[offset + 2] = (value >>> 16);
	    this[offset + 3] = (value >>> 24);
	  } else {
	    objectWriteUInt32(this, value, offset, true);
	  }
	  return offset + 4
	};

	Buffer$1.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
	  if (value < 0) value = 0xffffffff + value + 1;
	  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24);
	    this[offset + 1] = (value >>> 16);
	    this[offset + 2] = (value >>> 8);
	    this[offset + 3] = (value & 0xff);
	  } else {
	    objectWriteUInt32(this, value, offset, false);
	  }
	  return offset + 4
	};

	function checkIEEE754 (buf, value, offset, ext, max, min) {
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	  if (offset < 0) throw new RangeError('Index out of range')
	}

	function writeFloat (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
	  }
	  write(buf, value, offset, littleEndian, 23, 4);
	  return offset + 4
	}

	Buffer$1.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert)
	};

	Buffer$1.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert)
	};

	function writeDouble (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
	  }
	  write(buf, value, offset, littleEndian, 52, 8);
	  return offset + 8
	}

	Buffer$1.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert)
	};

	Buffer$1.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert)
	};

	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer$1.prototype.copy = function copy (target, targetStart, start, end) {
	  if (!start) start = 0;
	  if (!end && end !== 0) end = this.length;
	  if (targetStart >= target.length) targetStart = target.length;
	  if (!targetStart) targetStart = 0;
	  if (end > 0 && end < start) end = start;

	  // Copy 0 bytes; we're done
	  if (end === start) return 0
	  if (target.length === 0 || this.length === 0) return 0

	  // Fatal error conditions
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds')
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
	  if (end < 0) throw new RangeError('sourceEnd out of bounds')

	  // Are we oob?
	  if (end > this.length) end = this.length;
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start;
	  }

	  var len = end - start;
	  var i;

	  if (this === target && start < targetStart && targetStart < end) {
	    // descending copy from end
	    for (i = len - 1; i >= 0; --i) {
	      target[i + targetStart] = this[i + start];
	    }
	  } else if (len < 1000 || !Buffer$1.TYPED_ARRAY_SUPPORT) {
	    // ascending copy from start
	    for (i = 0; i < len; ++i) {
	      target[i + targetStart] = this[i + start];
	    }
	  } else {
	    Uint8Array.prototype.set.call(
	      target,
	      this.subarray(start, start + len),
	      targetStart
	    );
	  }

	  return len
	};

	// Usage:
	//    buffer.fill(number[, offset[, end]])
	//    buffer.fill(buffer[, offset[, end]])
	//    buffer.fill(string[, offset[, end]][, encoding])
	Buffer$1.prototype.fill = function fill (val, start, end, encoding) {
	  // Handle string cases:
	  if (typeof val === 'string') {
	    if (typeof start === 'string') {
	      encoding = start;
	      start = 0;
	      end = this.length;
	    } else if (typeof end === 'string') {
	      encoding = end;
	      end = this.length;
	    }
	    if (val.length === 1) {
	      var code = val.charCodeAt(0);
	      if (code < 256) {
	        val = code;
	      }
	    }
	    if (encoding !== undefined && typeof encoding !== 'string') {
	      throw new TypeError('encoding must be a string')
	    }
	    if (typeof encoding === 'string' && !Buffer$1.isEncoding(encoding)) {
	      throw new TypeError('Unknown encoding: ' + encoding)
	    }
	  } else if (typeof val === 'number') {
	    val = val & 255;
	  }

	  // Invalid ranges are not set to a default, so can range check early.
	  if (start < 0 || this.length < start || this.length < end) {
	    throw new RangeError('Out of range index')
	  }

	  if (end <= start) {
	    return this
	  }

	  start = start >>> 0;
	  end = end === undefined ? this.length : end >>> 0;

	  if (!val) val = 0;

	  var i;
	  if (typeof val === 'number') {
	    for (i = start; i < end; ++i) {
	      this[i] = val;
	    }
	  } else {
	    var bytes = internalIsBuffer(val)
	      ? val
	      : utf8ToBytes(new Buffer$1(val, encoding).toString());
	    var len = bytes.length;
	    for (i = 0; i < end - start; ++i) {
	      this[i + start] = bytes[i % len];
	    }
	  }

	  return this
	};

	// HELPER FUNCTIONS
	// ================

	var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

	function base64clean (str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '');
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return ''
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '=';
	  }
	  return str
	}

	function stringtrim (str) {
	  if (str.trim) return str.trim()
	  return str.replace(/^\s+|\s+$/g, '')
	}

	function toHex (n) {
	  if (n < 16) return '0' + n.toString(16)
	  return n.toString(16)
	}

	function utf8ToBytes (string, units) {
	  units = units || Infinity;
	  var codePoint;
	  var length = string.length;
	  var leadSurrogate = null;
	  var bytes = [];

	  for (var i = 0; i < length; ++i) {
	    codePoint = string.charCodeAt(i);

	    // is surrogate component
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      // last char was a lead
	      if (!leadSurrogate) {
	        // no lead yet
	        if (codePoint > 0xDBFF) {
	          // unexpected trail
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	          continue
	        } else if (i + 1 === length) {
	          // unpaired lead
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	          continue
	        }

	        // valid lead
	        leadSurrogate = codePoint;

	        continue
	      }

	      // 2 leads in a row
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	        leadSurrogate = codePoint;
	        continue
	      }

	      // valid surrogate pair
	      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
	    } else if (leadSurrogate) {
	      // valid bmp char, but last char was a lead
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	    }

	    leadSurrogate = null;

	    // encode utf8
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break
	      bytes.push(codePoint);
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break
	      bytes.push(
	        codePoint >> 0x6 | 0xC0,
	        codePoint & 0x3F | 0x80
	      );
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break
	      bytes.push(
	        codePoint >> 0xC | 0xE0,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      );
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break
	      bytes.push(
	        codePoint >> 0x12 | 0xF0,
	        codePoint >> 0xC & 0x3F | 0x80,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      );
	    } else {
	      throw new Error('Invalid code point')
	    }
	  }

	  return bytes
	}

	function asciiToBytes (str) {
	  var byteArray = [];
	  for (var i = 0; i < str.length; ++i) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF);
	  }
	  return byteArray
	}

	function utf16leToBytes (str, units) {
	  var c, hi, lo;
	  var byteArray = [];
	  for (var i = 0; i < str.length; ++i) {
	    if ((units -= 2) < 0) break

	    c = str.charCodeAt(i);
	    hi = c >> 8;
	    lo = c % 256;
	    byteArray.push(lo);
	    byteArray.push(hi);
	  }

	  return byteArray
	}


	function base64ToBytes (str) {
	  return toByteArray(base64clean(str))
	}

	function blitBuffer (src, dst, offset, length) {
	  for (var i = 0; i < length; ++i) {
	    if ((i + offset >= dst.length) || (i >= src.length)) break
	    dst[i + offset] = src[i];
	  }
	  return i
	}

	function isnan (val) {
	  return val !== val // eslint-disable-line no-self-compare
	}


	// the following is from is-buffer, also by Feross Aboukhadijeh and with same lisence
	// The _isBuffer check is for Safari 5-7 support, because it's missing
	// Object.prototype.constructor. Remove this eventually
	function isBuffer$1(obj) {
	  return obj != null && (!!obj._isBuffer || isFastBuffer(obj) || isSlowBuffer(obj))
	}

	function isFastBuffer (obj) {
	  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
	}

	// For Node v0.10 support. Remove this eventually.
	function isSlowBuffer (obj) {
	  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isFastBuffer(obj.slice(0, 0))
	}

	var buffer = /*#__PURE__*/Object.freeze({
		INSPECT_MAX_BYTES: INSPECT_MAX_BYTES,
		kMaxLength: _kMaxLength,
		Buffer: Buffer$1,
		SlowBuffer: SlowBuffer,
		isBuffer: isBuffer$1
	});

	var safeBuffer = createCommonjsModule(function (module, exports) {
	/* eslint-disable node/no-deprecated-api */

	var Buffer = buffer.Buffer;

	// alternative to using Object.keys for old browsers
	function copyProps (src, dst) {
	  for (var key in src) {
	    dst[key] = src[key];
	  }
	}
	if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
	  module.exports = buffer;
	} else {
	  // Copy properties from require('buffer')
	  copyProps(buffer, exports);
	  exports.Buffer = SafeBuffer;
	}

	function SafeBuffer (arg, encodingOrOffset, length) {
	  return Buffer(arg, encodingOrOffset, length)
	}

	// Copy static methods from Buffer
	copyProps(Buffer, SafeBuffer);

	SafeBuffer.from = function (arg, encodingOrOffset, length) {
	  if (typeof arg === 'number') {
	    throw new TypeError('Argument must not be a number')
	  }
	  return Buffer(arg, encodingOrOffset, length)
	};

	SafeBuffer.alloc = function (size, fill, encoding) {
	  if (typeof size !== 'number') {
	    throw new TypeError('Argument must be a number')
	  }
	  var buf = Buffer(size);
	  if (fill !== undefined) {
	    if (typeof encoding === 'string') {
	      buf.fill(fill, encoding);
	    } else {
	      buf.fill(fill);
	    }
	  } else {
	    buf.fill(0);
	  }
	  return buf
	};

	SafeBuffer.allocUnsafe = function (size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('Argument must be a number')
	  }
	  return Buffer(size)
	};

	SafeBuffer.allocUnsafeSlow = function (size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('Argument must be a number')
	  }
	  return buffer.SlowBuffer(size)
	};
	});
	var safeBuffer_1 = safeBuffer.Buffer;

	function BufferList() {
	  this.head = null;
	  this.tail = null;
	  this.length = 0;
	}

	BufferList.prototype.push = function (v) {
	  var entry = { data: v, next: null };
	  if (this.length > 0) this.tail.next = entry;else this.head = entry;
	  this.tail = entry;
	  ++this.length;
	};

	BufferList.prototype.unshift = function (v) {
	  var entry = { data: v, next: this.head };
	  if (this.length === 0) this.tail = entry;
	  this.head = entry;
	  ++this.length;
	};

	BufferList.prototype.shift = function () {
	  if (this.length === 0) return;
	  var ret = this.head.data;
	  if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
	  --this.length;
	  return ret;
	};

	BufferList.prototype.clear = function () {
	  this.head = this.tail = null;
	  this.length = 0;
	};

	BufferList.prototype.join = function (s) {
	  if (this.length === 0) return '';
	  var p = this.head;
	  var ret = '' + p.data;
	  while (p = p.next) {
	    ret += s + p.data;
	  }return ret;
	};

	BufferList.prototype.concat = function (n) {
	  if (this.length === 0) return Buffer$1.alloc(0);
	  if (this.length === 1) return this.head.data;
	  var ret = Buffer$1.allocUnsafe(n >>> 0);
	  var p = this.head;
	  var i = 0;
	  while (p) {
	    p.data.copy(ret, i);
	    i += p.data.length;
	    p = p.next;
	  }
	  return ret;
	};

	// Copyright Joyent, Inc. and other Node contributors.
	var isBufferEncoding = Buffer$1.isEncoding
	  || function(encoding) {
	       switch (encoding && encoding.toLowerCase()) {
	         case 'hex': case 'utf8': case 'utf-8': case 'ascii': case 'binary': case 'base64': case 'ucs2': case 'ucs-2': case 'utf16le': case 'utf-16le': case 'raw': return true;
	         default: return false;
	       }
	     };


	function assertEncoding(encoding) {
	  if (encoding && !isBufferEncoding(encoding)) {
	    throw new Error('Unknown encoding: ' + encoding);
	  }
	}

	// StringDecoder provides an interface for efficiently splitting a series of
	// buffers into a series of JS strings without breaking apart multi-byte
	// characters. CESU-8 is handled as part of the UTF-8 encoding.
	//
	// @TODO Handling all encodings inside a single object makes it very difficult
	// to reason about this code, so it should be split up in the future.
	// @TODO There should be a utf8-strict encoding that rejects invalid UTF-8 code
	// points as used by CESU-8.
	function StringDecoder(encoding) {
	  this.encoding = (encoding || 'utf8').toLowerCase().replace(/[-_]/, '');
	  assertEncoding(encoding);
	  switch (this.encoding) {
	    case 'utf8':
	      // CESU-8 represents each of Surrogate Pair by 3-bytes
	      this.surrogateSize = 3;
	      break;
	    case 'ucs2':
	    case 'utf16le':
	      // UTF-16 represents each of Surrogate Pair by 2-bytes
	      this.surrogateSize = 2;
	      this.detectIncompleteChar = utf16DetectIncompleteChar;
	      break;
	    case 'base64':
	      // Base-64 stores 3 bytes in 4 chars, and pads the remainder.
	      this.surrogateSize = 3;
	      this.detectIncompleteChar = base64DetectIncompleteChar;
	      break;
	    default:
	      this.write = passThroughWrite;
	      return;
	  }

	  // Enough space to store all bytes of a single character. UTF-8 needs 4
	  // bytes, but CESU-8 may require up to 6 (3 bytes per surrogate).
	  this.charBuffer = new Buffer$1(6);
	  // Number of bytes received for the current incomplete multi-byte character.
	  this.charReceived = 0;
	  // Number of bytes expected for the current incomplete multi-byte character.
	  this.charLength = 0;
	}

	// write decodes the given buffer and returns it as JS string that is
	// guaranteed to not contain any partial multi-byte characters. Any partial
	// character found at the end of the buffer is buffered up, and will be
	// returned when calling write again with the remaining bytes.
	//
	// Note: Converting a Buffer containing an orphan surrogate to a String
	// currently works, but converting a String to a Buffer (via `new Buffer`, or
	// Buffer#write) will replace incomplete surrogates with the unicode
	// replacement character. See https://codereview.chromium.org/121173009/ .
	StringDecoder.prototype.write = function(buffer) {
	  var charStr = '';
	  // if our last write ended with an incomplete multibyte character
	  while (this.charLength) {
	    // determine how many remaining bytes this buffer has to offer for this char
	    var available = (buffer.length >= this.charLength - this.charReceived) ?
	        this.charLength - this.charReceived :
	        buffer.length;

	    // add the new bytes to the char buffer
	    buffer.copy(this.charBuffer, this.charReceived, 0, available);
	    this.charReceived += available;

	    if (this.charReceived < this.charLength) {
	      // still not enough chars in this buffer? wait for more ...
	      return '';
	    }

	    // remove bytes belonging to the current character from the buffer
	    buffer = buffer.slice(available, buffer.length);

	    // get the character that was split
	    charStr = this.charBuffer.slice(0, this.charLength).toString(this.encoding);

	    // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
	    var charCode = charStr.charCodeAt(charStr.length - 1);
	    if (charCode >= 0xD800 && charCode <= 0xDBFF) {
	      this.charLength += this.surrogateSize;
	      charStr = '';
	      continue;
	    }
	    this.charReceived = this.charLength = 0;

	    // if there are no more bytes in this buffer, just emit our char
	    if (buffer.length === 0) {
	      return charStr;
	    }
	    break;
	  }

	  // determine and set charLength / charReceived
	  this.detectIncompleteChar(buffer);

	  var end = buffer.length;
	  if (this.charLength) {
	    // buffer the incomplete character bytes we got
	    buffer.copy(this.charBuffer, 0, buffer.length - this.charReceived, end);
	    end -= this.charReceived;
	  }

	  charStr += buffer.toString(this.encoding, 0, end);

	  var end = charStr.length - 1;
	  var charCode = charStr.charCodeAt(end);
	  // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
	  if (charCode >= 0xD800 && charCode <= 0xDBFF) {
	    var size = this.surrogateSize;
	    this.charLength += size;
	    this.charReceived += size;
	    this.charBuffer.copy(this.charBuffer, size, 0, size);
	    buffer.copy(this.charBuffer, 0, 0, size);
	    return charStr.substring(0, end);
	  }

	  // or just emit the charStr
	  return charStr;
	};

	// detectIncompleteChar determines if there is an incomplete UTF-8 character at
	// the end of the given buffer. If so, it sets this.charLength to the byte
	// length that character, and sets this.charReceived to the number of bytes
	// that are available for this character.
	StringDecoder.prototype.detectIncompleteChar = function(buffer) {
	  // determine how many bytes we have to check at the end of this buffer
	  var i = (buffer.length >= 3) ? 3 : buffer.length;

	  // Figure out if one of the last i bytes of our buffer announces an
	  // incomplete char.
	  for (; i > 0; i--) {
	    var c = buffer[buffer.length - i];

	    // See http://en.wikipedia.org/wiki/UTF-8#Description

	    // 110XXXXX
	    if (i == 1 && c >> 5 == 0x06) {
	      this.charLength = 2;
	      break;
	    }

	    // 1110XXXX
	    if (i <= 2 && c >> 4 == 0x0E) {
	      this.charLength = 3;
	      break;
	    }

	    // 11110XXX
	    if (i <= 3 && c >> 3 == 0x1E) {
	      this.charLength = 4;
	      break;
	    }
	  }
	  this.charReceived = i;
	};

	StringDecoder.prototype.end = function(buffer) {
	  var res = '';
	  if (buffer && buffer.length)
	    res = this.write(buffer);

	  if (this.charReceived) {
	    var cr = this.charReceived;
	    var buf = this.charBuffer;
	    var enc = this.encoding;
	    res += buf.slice(0, cr).toString(enc);
	  }

	  return res;
	};

	function passThroughWrite(buffer) {
	  return buffer.toString(this.encoding);
	}

	function utf16DetectIncompleteChar(buffer) {
	  this.charReceived = buffer.length % 2;
	  this.charLength = this.charReceived ? 2 : 0;
	}

	function base64DetectIncompleteChar(buffer) {
	  this.charReceived = buffer.length % 3;
	  this.charLength = this.charReceived ? 3 : 0;
	}

	var stringDecoder = /*#__PURE__*/Object.freeze({
		StringDecoder: StringDecoder
	});

	Readable.ReadableState = ReadableState;

	var debug = debuglog('stream');
	inherits$1(Readable, EventEmitter);

	function prependListener(emitter, event, fn) {
	  // Sadly this is not cacheable as some libraries bundle their own
	  // event emitter implementation with them.
	  if (typeof emitter.prependListener === 'function') {
	    return emitter.prependListener(event, fn);
	  } else {
	    // This is a hack to make sure that our error handler is attached before any
	    // userland ones.  NEVER DO THIS. This is here only because this code needs
	    // to continue to work with older versions of Node.js that do not include
	    // the prependListener() method. The goal is to eventually remove this hack.
	    if (!emitter._events || !emitter._events[event])
	      emitter.on(event, fn);
	    else if (Array.isArray(emitter._events[event]))
	      emitter._events[event].unshift(fn);
	    else
	      emitter._events[event] = [fn, emitter._events[event]];
	  }
	}
	function listenerCount$1 (emitter, type) {
	  return emitter.listeners(type).length;
	}
	function ReadableState(options, stream) {

	  options = options || {};

	  // object stream flag. Used to make read(n) ignore n and to
	  // make all the buffer merging and length checks go away
	  this.objectMode = !!options.objectMode;

	  if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.readableObjectMode;

	  // the point at which it stops calling _read() to fill the buffer
	  // Note: 0 is a valid value, means "don't call _read preemptively ever"
	  var hwm = options.highWaterMark;
	  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
	  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

	  // cast to ints.
	  this.highWaterMark = ~ ~this.highWaterMark;

	  // A linked list is used to store data chunks instead of an array because the
	  // linked list can remove elements from the beginning faster than
	  // array.shift()
	  this.buffer = new BufferList();
	  this.length = 0;
	  this.pipes = null;
	  this.pipesCount = 0;
	  this.flowing = null;
	  this.ended = false;
	  this.endEmitted = false;
	  this.reading = false;

	  // a flag to be able to tell if the onwrite cb is called immediately,
	  // or on a later tick.  We set this to true at first, because any
	  // actions that shouldn't happen until "later" should generally also
	  // not happen before the first write call.
	  this.sync = true;

	  // whenever we return null, then we set a flag to say
	  // that we're awaiting a 'readable' event emission.
	  this.needReadable = false;
	  this.emittedReadable = false;
	  this.readableListening = false;
	  this.resumeScheduled = false;

	  // Crypto is kind of old and crusty.  Historically, its default string
	  // encoding is 'binary' so we have to make this configurable.
	  // Everything else in the universe uses 'utf8', though.
	  this.defaultEncoding = options.defaultEncoding || 'utf8';

	  // when piping, we only care about 'readable' events that happen
	  // after read()ing all the bytes and not getting any pushback.
	  this.ranOut = false;

	  // the number of writers that are awaiting a drain event in .pipe()s
	  this.awaitDrain = 0;

	  // if true, a maybeReadMore has been scheduled
	  this.readingMore = false;

	  this.decoder = null;
	  this.encoding = null;
	  if (options.encoding) {
	    this.decoder = new StringDecoder(options.encoding);
	    this.encoding = options.encoding;
	  }
	}
	function Readable(options) {

	  if (!(this instanceof Readable)) return new Readable(options);

	  this._readableState = new ReadableState(options, this);

	  // legacy
	  this.readable = true;

	  if (options && typeof options.read === 'function') this._read = options.read;

	  EventEmitter.call(this);
	}

	// Manually shove something into the read() buffer.
	// This returns true if the highWaterMark has not been hit yet,
	// similar to how Writable.write() returns true if you should
	// write() some more.
	Readable.prototype.push = function (chunk, encoding) {
	  var state = this._readableState;

	  if (!state.objectMode && typeof chunk === 'string') {
	    encoding = encoding || state.defaultEncoding;
	    if (encoding !== state.encoding) {
	      chunk = Buffer.from(chunk, encoding);
	      encoding = '';
	    }
	  }

	  return readableAddChunk(this, state, chunk, encoding, false);
	};

	// Unshift should *always* be something directly out of read()
	Readable.prototype.unshift = function (chunk) {
	  var state = this._readableState;
	  return readableAddChunk(this, state, chunk, '', true);
	};

	Readable.prototype.isPaused = function () {
	  return this._readableState.flowing === false;
	};

	function readableAddChunk(stream, state, chunk, encoding, addToFront) {
	  var er = chunkInvalid(state, chunk);
	  if (er) {
	    stream.emit('error', er);
	  } else if (chunk === null) {
	    state.reading = false;
	    onEofChunk(stream, state);
	  } else if (state.objectMode || chunk && chunk.length > 0) {
	    if (state.ended && !addToFront) {
	      var e = new Error('stream.push() after EOF');
	      stream.emit('error', e);
	    } else if (state.endEmitted && addToFront) {
	      var _e = new Error('stream.unshift() after end event');
	      stream.emit('error', _e);
	    } else {
	      var skipAdd;
	      if (state.decoder && !addToFront && !encoding) {
	        chunk = state.decoder.write(chunk);
	        skipAdd = !state.objectMode && chunk.length === 0;
	      }

	      if (!addToFront) state.reading = false;

	      // Don't add to the buffer if we've decoded to an empty string chunk and
	      // we're not in object mode
	      if (!skipAdd) {
	        // if we want the data now, just emit it.
	        if (state.flowing && state.length === 0 && !state.sync) {
	          stream.emit('data', chunk);
	          stream.read(0);
	        } else {
	          // update the buffer info.
	          state.length += state.objectMode ? 1 : chunk.length;
	          if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);

	          if (state.needReadable) emitReadable(stream);
	        }
	      }

	      maybeReadMore(stream, state);
	    }
	  } else if (!addToFront) {
	    state.reading = false;
	  }

	  return needMoreData(state);
	}

	// if it's past the high water mark, we can push in some more.
	// Also, if we have no data yet, we can stand some
	// more bytes.  This is to work around cases where hwm=0,
	// such as the repl.  Also, if the push() triggered a
	// readable event, and the user called read(largeNumber) such that
	// needReadable was set, then we ought to push more, so that another
	// 'readable' event will be triggered.
	function needMoreData(state) {
	  return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
	}

	// backwards compatibility.
	Readable.prototype.setEncoding = function (enc) {
	  this._readableState.decoder = new StringDecoder(enc);
	  this._readableState.encoding = enc;
	  return this;
	};

	// Don't raise the hwm > 8MB
	var MAX_HWM = 0x800000;
	function computeNewHighWaterMark(n) {
	  if (n >= MAX_HWM) {
	    n = MAX_HWM;
	  } else {
	    // Get the next highest power of 2 to prevent increasing hwm excessively in
	    // tiny amounts
	    n--;
	    n |= n >>> 1;
	    n |= n >>> 2;
	    n |= n >>> 4;
	    n |= n >>> 8;
	    n |= n >>> 16;
	    n++;
	  }
	  return n;
	}

	// This function is designed to be inlinable, so please take care when making
	// changes to the function body.
	function howMuchToRead(n, state) {
	  if (n <= 0 || state.length === 0 && state.ended) return 0;
	  if (state.objectMode) return 1;
	  if (n !== n) {
	    // Only flow one buffer at a time
	    if (state.flowing && state.length) return state.buffer.head.data.length;else return state.length;
	  }
	  // If we're asking for more than the current hwm, then raise the hwm.
	  if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
	  if (n <= state.length) return n;
	  // Don't have enough
	  if (!state.ended) {
	    state.needReadable = true;
	    return 0;
	  }
	  return state.length;
	}

	// you can override either this method, or the async _read(n) below.
	Readable.prototype.read = function (n) {
	  debug('read', n);
	  n = parseInt(n, 10);
	  var state = this._readableState;
	  var nOrig = n;

	  if (n !== 0) state.emittedReadable = false;

	  // if we're doing read(0) to trigger a readable event, but we
	  // already have a bunch of data in the buffer, then just trigger
	  // the 'readable' event and move on.
	  if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
	    debug('read: emitReadable', state.length, state.ended);
	    if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
	    return null;
	  }

	  n = howMuchToRead(n, state);

	  // if we've ended, and we're now clear, then finish it up.
	  if (n === 0 && state.ended) {
	    if (state.length === 0) endReadable(this);
	    return null;
	  }

	  // All the actual chunk generation logic needs to be
	  // *below* the call to _read.  The reason is that in certain
	  // synthetic stream cases, such as passthrough streams, _read
	  // may be a completely synchronous operation which may change
	  // the state of the read buffer, providing enough data when
	  // before there was *not* enough.
	  //
	  // So, the steps are:
	  // 1. Figure out what the state of things will be after we do
	  // a read from the buffer.
	  //
	  // 2. If that resulting state will trigger a _read, then call _read.
	  // Note that this may be asynchronous, or synchronous.  Yes, it is
	  // deeply ugly to write APIs this way, but that still doesn't mean
	  // that the Readable class should behave improperly, as streams are
	  // designed to be sync/async agnostic.
	  // Take note if the _read call is sync or async (ie, if the read call
	  // has returned yet), so that we know whether or not it's safe to emit
	  // 'readable' etc.
	  //
	  // 3. Actually pull the requested chunks out of the buffer and return.

	  // if we need a readable event, then we need to do some reading.
	  var doRead = state.needReadable;
	  debug('need readable', doRead);

	  // if we currently have less than the highWaterMark, then also read some
	  if (state.length === 0 || state.length - n < state.highWaterMark) {
	    doRead = true;
	    debug('length less than watermark', doRead);
	  }

	  // however, if we've ended, then there's no point, and if we're already
	  // reading, then it's unnecessary.
	  if (state.ended || state.reading) {
	    doRead = false;
	    debug('reading or ended', doRead);
	  } else if (doRead) {
	    debug('do read');
	    state.reading = true;
	    state.sync = true;
	    // if the length is currently zero, then we *need* a readable event.
	    if (state.length === 0) state.needReadable = true;
	    // call internal read method
	    this._read(state.highWaterMark);
	    state.sync = false;
	    // If _read pushed data synchronously, then `reading` will be false,
	    // and we need to re-evaluate how much data we can return to the user.
	    if (!state.reading) n = howMuchToRead(nOrig, state);
	  }

	  var ret;
	  if (n > 0) ret = fromList(n, state);else ret = null;

	  if (ret === null) {
	    state.needReadable = true;
	    n = 0;
	  } else {
	    state.length -= n;
	  }

	  if (state.length === 0) {
	    // If we have nothing in the buffer, then we want to know
	    // as soon as we *do* get something into the buffer.
	    if (!state.ended) state.needReadable = true;

	    // If we tried to read() past the EOF, then emit end on the next tick.
	    if (nOrig !== n && state.ended) endReadable(this);
	  }

	  if (ret !== null) this.emit('data', ret);

	  return ret;
	};

	function chunkInvalid(state, chunk) {
	  var er = null;
	  if (!Buffer.isBuffer(chunk) && typeof chunk !== 'string' && chunk !== null && chunk !== undefined && !state.objectMode) {
	    er = new TypeError('Invalid non-string/buffer chunk');
	  }
	  return er;
	}

	function onEofChunk(stream, state) {
	  if (state.ended) return;
	  if (state.decoder) {
	    var chunk = state.decoder.end();
	    if (chunk && chunk.length) {
	      state.buffer.push(chunk);
	      state.length += state.objectMode ? 1 : chunk.length;
	    }
	  }
	  state.ended = true;

	  // emit 'readable' now to make sure it gets picked up.
	  emitReadable(stream);
	}

	// Don't emit readable right away in sync mode, because this can trigger
	// another read() call => stack overflow.  This way, it might trigger
	// a nextTick recursion warning, but that's not so bad.
	function emitReadable(stream) {
	  var state = stream._readableState;
	  state.needReadable = false;
	  if (!state.emittedReadable) {
	    debug('emitReadable', state.flowing);
	    state.emittedReadable = true;
	    if (state.sync) nextTick(emitReadable_, stream);else emitReadable_(stream);
	  }
	}

	function emitReadable_(stream) {
	  debug('emit readable');
	  stream.emit('readable');
	  flow(stream);
	}

	// at this point, the user has presumably seen the 'readable' event,
	// and called read() to consume some data.  that may have triggered
	// in turn another _read(n) call, in which case reading = true if
	// it's in progress.
	// However, if we're not ended, or reading, and the length < hwm,
	// then go ahead and try to read some more preemptively.
	function maybeReadMore(stream, state) {
	  if (!state.readingMore) {
	    state.readingMore = true;
	    nextTick(maybeReadMore_, stream, state);
	  }
	}

	function maybeReadMore_(stream, state) {
	  var len = state.length;
	  while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
	    debug('maybeReadMore read 0');
	    stream.read(0);
	    if (len === state.length)
	      // didn't get any data, stop spinning.
	      break;else len = state.length;
	  }
	  state.readingMore = false;
	}

	// abstract method.  to be overridden in specific implementation classes.
	// call cb(er, data) where data is <= n in length.
	// for virtual (non-string, non-buffer) streams, "length" is somewhat
	// arbitrary, and perhaps not very meaningful.
	Readable.prototype._read = function (n) {
	  this.emit('error', new Error('not implemented'));
	};

	Readable.prototype.pipe = function (dest, pipeOpts) {
	  var src = this;
	  var state = this._readableState;

	  switch (state.pipesCount) {
	    case 0:
	      state.pipes = dest;
	      break;
	    case 1:
	      state.pipes = [state.pipes, dest];
	      break;
	    default:
	      state.pipes.push(dest);
	      break;
	  }
	  state.pipesCount += 1;
	  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);

	  var doEnd = (!pipeOpts || pipeOpts.end !== false);

	  var endFn = doEnd ? onend : cleanup;
	  if (state.endEmitted) nextTick(endFn);else src.once('end', endFn);

	  dest.on('unpipe', onunpipe);
	  function onunpipe(readable) {
	    debug('onunpipe');
	    if (readable === src) {
	      cleanup();
	    }
	  }

	  function onend() {
	    debug('onend');
	    dest.end();
	  }

	  // when the dest drains, it reduces the awaitDrain counter
	  // on the source.  This would be more elegant with a .once()
	  // handler in flow(), but adding and removing repeatedly is
	  // too slow.
	  var ondrain = pipeOnDrain(src);
	  dest.on('drain', ondrain);

	  var cleanedUp = false;
	  function cleanup() {
	    debug('cleanup');
	    // cleanup event handlers once the pipe is broken
	    dest.removeListener('close', onclose);
	    dest.removeListener('finish', onfinish);
	    dest.removeListener('drain', ondrain);
	    dest.removeListener('error', onerror);
	    dest.removeListener('unpipe', onunpipe);
	    src.removeListener('end', onend);
	    src.removeListener('end', cleanup);
	    src.removeListener('data', ondata);

	    cleanedUp = true;

	    // if the reader is waiting for a drain event from this
	    // specific writer, then it would cause it to never start
	    // flowing again.
	    // So, if this is awaiting a drain, then we just call it now.
	    // If we don't know, then assume that we are waiting for one.
	    if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
	  }

	  // If the user pushes more data while we're writing to dest then we'll end up
	  // in ondata again. However, we only want to increase awaitDrain once because
	  // dest will only emit one 'drain' event for the multiple writes.
	  // => Introduce a guard on increasing awaitDrain.
	  var increasedAwaitDrain = false;
	  src.on('data', ondata);
	  function ondata(chunk) {
	    debug('ondata');
	    increasedAwaitDrain = false;
	    var ret = dest.write(chunk);
	    if (false === ret && !increasedAwaitDrain) {
	      // If the user unpiped during `dest.write()`, it is possible
	      // to get stuck in a permanently paused state if that write
	      // also returned false.
	      // => Check whether `dest` is still a piping destination.
	      if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
	        debug('false write response, pause', src._readableState.awaitDrain);
	        src._readableState.awaitDrain++;
	        increasedAwaitDrain = true;
	      }
	      src.pause();
	    }
	  }

	  // if the dest has an error, then stop piping into it.
	  // however, don't suppress the throwing behavior for this.
	  function onerror(er) {
	    debug('onerror', er);
	    unpipe();
	    dest.removeListener('error', onerror);
	    if (listenerCount$1(dest, 'error') === 0) dest.emit('error', er);
	  }

	  // Make sure our error handler is attached before userland ones.
	  prependListener(dest, 'error', onerror);

	  // Both close and finish should trigger unpipe, but only once.
	  function onclose() {
	    dest.removeListener('finish', onfinish);
	    unpipe();
	  }
	  dest.once('close', onclose);
	  function onfinish() {
	    debug('onfinish');
	    dest.removeListener('close', onclose);
	    unpipe();
	  }
	  dest.once('finish', onfinish);

	  function unpipe() {
	    debug('unpipe');
	    src.unpipe(dest);
	  }

	  // tell the dest that it's being piped to
	  dest.emit('pipe', src);

	  // start the flow if it hasn't been started already.
	  if (!state.flowing) {
	    debug('pipe resume');
	    src.resume();
	  }

	  return dest;
	};

	function pipeOnDrain(src) {
	  return function () {
	    var state = src._readableState;
	    debug('pipeOnDrain', state.awaitDrain);
	    if (state.awaitDrain) state.awaitDrain--;
	    if (state.awaitDrain === 0 && src.listeners('data').length) {
	      state.flowing = true;
	      flow(src);
	    }
	  };
	}

	Readable.prototype.unpipe = function (dest) {
	  var state = this._readableState;

	  // if we're not piping anywhere, then do nothing.
	  if (state.pipesCount === 0) return this;

	  // just one destination.  most common case.
	  if (state.pipesCount === 1) {
	    // passed in one, but it's not the right one.
	    if (dest && dest !== state.pipes) return this;

	    if (!dest) dest = state.pipes;

	    // got a match.
	    state.pipes = null;
	    state.pipesCount = 0;
	    state.flowing = false;
	    if (dest) dest.emit('unpipe', this);
	    return this;
	  }

	  // slow case. multiple pipe destinations.

	  if (!dest) {
	    // remove all.
	    var dests = state.pipes;
	    var len = state.pipesCount;
	    state.pipes = null;
	    state.pipesCount = 0;
	    state.flowing = false;

	    for (var _i = 0; _i < len; _i++) {
	      dests[_i].emit('unpipe', this);
	    }return this;
	  }

	  // try to find the right one.
	  var i = indexOf(state.pipes, dest);
	  if (i === -1) return this;

	  state.pipes.splice(i, 1);
	  state.pipesCount -= 1;
	  if (state.pipesCount === 1) state.pipes = state.pipes[0];

	  dest.emit('unpipe', this);

	  return this;
	};

	// set up data events if they are asked for
	// Ensure readable listeners eventually get something
	Readable.prototype.on = function (ev, fn) {
	  var res = EventEmitter.prototype.on.call(this, ev, fn);

	  if (ev === 'data') {
	    // Start flowing on next tick if stream isn't explicitly paused
	    if (this._readableState.flowing !== false) this.resume();
	  } else if (ev === 'readable') {
	    var state = this._readableState;
	    if (!state.endEmitted && !state.readableListening) {
	      state.readableListening = state.needReadable = true;
	      state.emittedReadable = false;
	      if (!state.reading) {
	        nextTick(nReadingNextTick, this);
	      } else if (state.length) {
	        emitReadable(this, state);
	      }
	    }
	  }

	  return res;
	};
	Readable.prototype.addListener = Readable.prototype.on;

	function nReadingNextTick(self) {
	  debug('readable nexttick read 0');
	  self.read(0);
	}

	// pause() and resume() are remnants of the legacy readable stream API
	// If the user uses them, then switch into old mode.
	Readable.prototype.resume = function () {
	  var state = this._readableState;
	  if (!state.flowing) {
	    debug('resume');
	    state.flowing = true;
	    resume(this, state);
	  }
	  return this;
	};

	function resume(stream, state) {
	  if (!state.resumeScheduled) {
	    state.resumeScheduled = true;
	    nextTick(resume_, stream, state);
	  }
	}

	function resume_(stream, state) {
	  if (!state.reading) {
	    debug('resume read 0');
	    stream.read(0);
	  }

	  state.resumeScheduled = false;
	  state.awaitDrain = 0;
	  stream.emit('resume');
	  flow(stream);
	  if (state.flowing && !state.reading) stream.read(0);
	}

	Readable.prototype.pause = function () {
	  debug('call pause flowing=%j', this._readableState.flowing);
	  if (false !== this._readableState.flowing) {
	    debug('pause');
	    this._readableState.flowing = false;
	    this.emit('pause');
	  }
	  return this;
	};

	function flow(stream) {
	  var state = stream._readableState;
	  debug('flow', state.flowing);
	  while (state.flowing && stream.read() !== null) {}
	}

	// wrap an old-style stream as the async data source.
	// This is *not* part of the readable stream interface.
	// It is an ugly unfortunate mess of history.
	Readable.prototype.wrap = function (stream) {
	  var state = this._readableState;
	  var paused = false;

	  var self = this;
	  stream.on('end', function () {
	    debug('wrapped end');
	    if (state.decoder && !state.ended) {
	      var chunk = state.decoder.end();
	      if (chunk && chunk.length) self.push(chunk);
	    }

	    self.push(null);
	  });

	  stream.on('data', function (chunk) {
	    debug('wrapped data');
	    if (state.decoder) chunk = state.decoder.write(chunk);

	    // don't skip over falsy values in objectMode
	    if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;

	    var ret = self.push(chunk);
	    if (!ret) {
	      paused = true;
	      stream.pause();
	    }
	  });

	  // proxy all the other methods.
	  // important when wrapping filters and duplexes.
	  for (var i in stream) {
	    if (this[i] === undefined && typeof stream[i] === 'function') {
	      this[i] = function (method) {
	        return function () {
	          return stream[method].apply(stream, arguments);
	        };
	      }(i);
	    }
	  }

	  // proxy certain important events.
	  var events = ['error', 'close', 'destroy', 'pause', 'resume'];
	  forEach(events, function (ev) {
	    stream.on(ev, self.emit.bind(self, ev));
	  });

	  // when we try to consume some more bytes, simply unpause the
	  // underlying stream.
	  self._read = function (n) {
	    debug('wrapped _read', n);
	    if (paused) {
	      paused = false;
	      stream.resume();
	    }
	  };

	  return self;
	};

	// exposed for testing purposes only.
	Readable._fromList = fromList;

	// Pluck off n bytes from an array of buffers.
	// Length is the combined lengths of all the buffers in the list.
	// This function is designed to be inlinable, so please take care when making
	// changes to the function body.
	function fromList(n, state) {
	  // nothing buffered
	  if (state.length === 0) return null;

	  var ret;
	  if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {
	    // read it all, truncate the list
	    if (state.decoder) ret = state.buffer.join('');else if (state.buffer.length === 1) ret = state.buffer.head.data;else ret = state.buffer.concat(state.length);
	    state.buffer.clear();
	  } else {
	    // read part of list
	    ret = fromListPartial(n, state.buffer, state.decoder);
	  }

	  return ret;
	}

	// Extracts only enough buffered data to satisfy the amount requested.
	// This function is designed to be inlinable, so please take care when making
	// changes to the function body.
	function fromListPartial(n, list, hasStrings) {
	  var ret;
	  if (n < list.head.data.length) {
	    // slice is the same for buffers and strings
	    ret = list.head.data.slice(0, n);
	    list.head.data = list.head.data.slice(n);
	  } else if (n === list.head.data.length) {
	    // first chunk is a perfect match
	    ret = list.shift();
	  } else {
	    // result spans more than one buffer
	    ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
	  }
	  return ret;
	}

	// Copies a specified amount of characters from the list of buffered data
	// chunks.
	// This function is designed to be inlinable, so please take care when making
	// changes to the function body.
	function copyFromBufferString(n, list) {
	  var p = list.head;
	  var c = 1;
	  var ret = p.data;
	  n -= ret.length;
	  while (p = p.next) {
	    var str = p.data;
	    var nb = n > str.length ? str.length : n;
	    if (nb === str.length) ret += str;else ret += str.slice(0, n);
	    n -= nb;
	    if (n === 0) {
	      if (nb === str.length) {
	        ++c;
	        if (p.next) list.head = p.next;else list.head = list.tail = null;
	      } else {
	        list.head = p;
	        p.data = str.slice(nb);
	      }
	      break;
	    }
	    ++c;
	  }
	  list.length -= c;
	  return ret;
	}

	// Copies a specified amount of bytes from the list of buffered data chunks.
	// This function is designed to be inlinable, so please take care when making
	// changes to the function body.
	function copyFromBuffer(n, list) {
	  var ret = Buffer.allocUnsafe(n);
	  var p = list.head;
	  var c = 1;
	  p.data.copy(ret);
	  n -= p.data.length;
	  while (p = p.next) {
	    var buf = p.data;
	    var nb = n > buf.length ? buf.length : n;
	    buf.copy(ret, ret.length - n, 0, nb);
	    n -= nb;
	    if (n === 0) {
	      if (nb === buf.length) {
	        ++c;
	        if (p.next) list.head = p.next;else list.head = list.tail = null;
	      } else {
	        list.head = p;
	        p.data = buf.slice(nb);
	      }
	      break;
	    }
	    ++c;
	  }
	  list.length -= c;
	  return ret;
	}

	function endReadable(stream) {
	  var state = stream._readableState;

	  // If we get here before consuming all the bytes, then that is a
	  // bug in node.  Should never happen.
	  if (state.length > 0) throw new Error('"endReadable()" called on non-empty stream');

	  if (!state.endEmitted) {
	    state.ended = true;
	    nextTick(endReadableNT, state, stream);
	  }
	}

	function endReadableNT(state, stream) {
	  // Check that we didn't get one last unshift.
	  if (!state.endEmitted && state.length === 0) {
	    state.endEmitted = true;
	    stream.readable = false;
	    stream.emit('end');
	  }
	}

	function forEach(xs, f) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    f(xs[i], i);
	  }
	}

	function indexOf(xs, x) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    if (xs[i] === x) return i;
	  }
	  return -1;
	}

	// A bit simpler than readable streams.
	Writable.WritableState = WritableState;
	inherits$1(Writable, EventEmitter);

	function nop() {}

	function WriteReq(chunk, encoding, cb) {
	  this.chunk = chunk;
	  this.encoding = encoding;
	  this.callback = cb;
	  this.next = null;
	}

	function WritableState(options, stream) {
	  Object.defineProperty(this, 'buffer', {
	    get: deprecate(function () {
	      return this.getBuffer();
	    }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.')
	  });
	  options = options || {};

	  // object stream flag to indicate whether or not this stream
	  // contains buffers or objects.
	  this.objectMode = !!options.objectMode;

	  if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.writableObjectMode;

	  // the point at which write() starts returning false
	  // Note: 0 is a valid value, means that we always return false if
	  // the entire buffer is not flushed immediately on write()
	  var hwm = options.highWaterMark;
	  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
	  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

	  // cast to ints.
	  this.highWaterMark = ~ ~this.highWaterMark;

	  this.needDrain = false;
	  // at the start of calling end()
	  this.ending = false;
	  // when end() has been called, and returned
	  this.ended = false;
	  // when 'finish' is emitted
	  this.finished = false;

	  // should we decode strings into buffers before passing to _write?
	  // this is here so that some node-core streams can optimize string
	  // handling at a lower level.
	  var noDecode = options.decodeStrings === false;
	  this.decodeStrings = !noDecode;

	  // Crypto is kind of old and crusty.  Historically, its default string
	  // encoding is 'binary' so we have to make this configurable.
	  // Everything else in the universe uses 'utf8', though.
	  this.defaultEncoding = options.defaultEncoding || 'utf8';

	  // not an actual buffer we keep track of, but a measurement
	  // of how much we're waiting to get pushed to some underlying
	  // socket or file.
	  this.length = 0;

	  // a flag to see when we're in the middle of a write.
	  this.writing = false;

	  // when true all writes will be buffered until .uncork() call
	  this.corked = 0;

	  // a flag to be able to tell if the onwrite cb is called immediately,
	  // or on a later tick.  We set this to true at first, because any
	  // actions that shouldn't happen until "later" should generally also
	  // not happen before the first write call.
	  this.sync = true;

	  // a flag to know if we're processing previously buffered items, which
	  // may call the _write() callback in the same tick, so that we don't
	  // end up in an overlapped onwrite situation.
	  this.bufferProcessing = false;

	  // the callback that's passed to _write(chunk,cb)
	  this.onwrite = function (er) {
	    onwrite(stream, er);
	  };

	  // the callback that the user supplies to write(chunk,encoding,cb)
	  this.writecb = null;

	  // the amount that is being written when _write is called.
	  this.writelen = 0;

	  this.bufferedRequest = null;
	  this.lastBufferedRequest = null;

	  // number of pending user-supplied write callbacks
	  // this must be 0 before 'finish' can be emitted
	  this.pendingcb = 0;

	  // emit prefinish if the only thing we're waiting for is _write cbs
	  // This is relevant for synchronous Transform streams
	  this.prefinished = false;

	  // True if the error was already emitted and should not be thrown again
	  this.errorEmitted = false;

	  // count buffered requests
	  this.bufferedRequestCount = 0;

	  // allocate the first CorkedRequest, there is always
	  // one allocated and free to use, and we maintain at most two
	  this.corkedRequestsFree = new CorkedRequest(this);
	}

	WritableState.prototype.getBuffer = function writableStateGetBuffer() {
	  var current = this.bufferedRequest;
	  var out = [];
	  while (current) {
	    out.push(current);
	    current = current.next;
	  }
	  return out;
	};
	function Writable(options) {

	  // Writable ctor is applied to Duplexes, though they're not
	  // instanceof Writable, they're instanceof Readable.
	  if (!(this instanceof Writable) && !(this instanceof Duplex)) return new Writable(options);

	  this._writableState = new WritableState(options, this);

	  // legacy.
	  this.writable = true;

	  if (options) {
	    if (typeof options.write === 'function') this._write = options.write;

	    if (typeof options.writev === 'function') this._writev = options.writev;
	  }

	  EventEmitter.call(this);
	}

	// Otherwise people can pipe Writable streams, which is just wrong.
	Writable.prototype.pipe = function () {
	  this.emit('error', new Error('Cannot pipe, not readable'));
	};

	function writeAfterEnd(stream, cb) {
	  var er = new Error('write after end');
	  // TODO: defer error events consistently everywhere, not just the cb
	  stream.emit('error', er);
	  nextTick(cb, er);
	}

	// If we get something that is not a buffer, string, null, or undefined,
	// and we're not in objectMode, then that's an error.
	// Otherwise stream chunks are all considered to be of length=1, and the
	// watermarks determine how many objects to keep in the buffer, rather than
	// how many bytes or characters.
	function validChunk(stream, state, chunk, cb) {
	  var valid = true;
	  var er = false;
	  // Always throw error if a null is written
	  // if we are not in object mode then throw
	  // if it is not a buffer, string, or undefined.
	  if (chunk === null) {
	    er = new TypeError('May not write null values to stream');
	  } else if (!Buffer$1.isBuffer(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
	    er = new TypeError('Invalid non-string/buffer chunk');
	  }
	  if (er) {
	    stream.emit('error', er);
	    nextTick(cb, er);
	    valid = false;
	  }
	  return valid;
	}

	Writable.prototype.write = function (chunk, encoding, cb) {
	  var state = this._writableState;
	  var ret = false;

	  if (typeof encoding === 'function') {
	    cb = encoding;
	    encoding = null;
	  }

	  if (Buffer$1.isBuffer(chunk)) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;

	  if (typeof cb !== 'function') cb = nop;

	  if (state.ended) writeAfterEnd(this, cb);else if (validChunk(this, state, chunk, cb)) {
	    state.pendingcb++;
	    ret = writeOrBuffer(this, state, chunk, encoding, cb);
	  }

	  return ret;
	};

	Writable.prototype.cork = function () {
	  var state = this._writableState;

	  state.corked++;
	};

	Writable.prototype.uncork = function () {
	  var state = this._writableState;

	  if (state.corked) {
	    state.corked--;

	    if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
	  }
	};

	Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
	  // node::ParseEncoding() requires lower case.
	  if (typeof encoding === 'string') encoding = encoding.toLowerCase();
	  if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new TypeError('Unknown encoding: ' + encoding);
	  this._writableState.defaultEncoding = encoding;
	  return this;
	};

	function decodeChunk(state, chunk, encoding) {
	  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
	    chunk = Buffer$1.from(chunk, encoding);
	  }
	  return chunk;
	}

	// if we're already writing something, then just put this
	// in the queue, and wait our turn.  Otherwise, call _write
	// If we return false, then we need a drain event, so set that flag.
	function writeOrBuffer(stream, state, chunk, encoding, cb) {
	  chunk = decodeChunk(state, chunk, encoding);

	  if (Buffer$1.isBuffer(chunk)) encoding = 'buffer';
	  var len = state.objectMode ? 1 : chunk.length;

	  state.length += len;

	  var ret = state.length < state.highWaterMark;
	  // we must ensure that previous needDrain will not be reset to false.
	  if (!ret) state.needDrain = true;

	  if (state.writing || state.corked) {
	    var last = state.lastBufferedRequest;
	    state.lastBufferedRequest = new WriteReq(chunk, encoding, cb);
	    if (last) {
	      last.next = state.lastBufferedRequest;
	    } else {
	      state.bufferedRequest = state.lastBufferedRequest;
	    }
	    state.bufferedRequestCount += 1;
	  } else {
	    doWrite(stream, state, false, len, chunk, encoding, cb);
	  }

	  return ret;
	}

	function doWrite(stream, state, writev, len, chunk, encoding, cb) {
	  state.writelen = len;
	  state.writecb = cb;
	  state.writing = true;
	  state.sync = true;
	  if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
	  state.sync = false;
	}

	function onwriteError(stream, state, sync, er, cb) {
	  --state.pendingcb;
	  if (sync) nextTick(cb, er);else cb(er);

	  stream._writableState.errorEmitted = true;
	  stream.emit('error', er);
	}

	function onwriteStateUpdate(state) {
	  state.writing = false;
	  state.writecb = null;
	  state.length -= state.writelen;
	  state.writelen = 0;
	}

	function onwrite(stream, er) {
	  var state = stream._writableState;
	  var sync = state.sync;
	  var cb = state.writecb;

	  onwriteStateUpdate(state);

	  if (er) onwriteError(stream, state, sync, er, cb);else {
	    // Check if we're actually ready to finish, but don't emit yet
	    var finished = needFinish(state);

	    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
	      clearBuffer(stream, state);
	    }

	    if (sync) {
	      /*<replacement>*/
	        nextTick(afterWrite, stream, state, finished, cb);
	      /*</replacement>*/
	    } else {
	        afterWrite(stream, state, finished, cb);
	      }
	  }
	}

	function afterWrite(stream, state, finished, cb) {
	  if (!finished) onwriteDrain(stream, state);
	  state.pendingcb--;
	  cb();
	  finishMaybe(stream, state);
	}

	// Must force callback to be called on nextTick, so that we don't
	// emit 'drain' before the write() consumer gets the 'false' return
	// value, and has a chance to attach a 'drain' listener.
	function onwriteDrain(stream, state) {
	  if (state.length === 0 && state.needDrain) {
	    state.needDrain = false;
	    stream.emit('drain');
	  }
	}

	// if there's something in the buffer waiting, then process it
	function clearBuffer(stream, state) {
	  state.bufferProcessing = true;
	  var entry = state.bufferedRequest;

	  if (stream._writev && entry && entry.next) {
	    // Fast case, write everything using _writev()
	    var l = state.bufferedRequestCount;
	    var buffer = new Array(l);
	    var holder = state.corkedRequestsFree;
	    holder.entry = entry;

	    var count = 0;
	    while (entry) {
	      buffer[count] = entry;
	      entry = entry.next;
	      count += 1;
	    }

	    doWrite(stream, state, true, state.length, buffer, '', holder.finish);

	    // doWrite is almost always async, defer these to save a bit of time
	    // as the hot path ends with doWrite
	    state.pendingcb++;
	    state.lastBufferedRequest = null;
	    if (holder.next) {
	      state.corkedRequestsFree = holder.next;
	      holder.next = null;
	    } else {
	      state.corkedRequestsFree = new CorkedRequest(state);
	    }
	  } else {
	    // Slow case, write chunks one-by-one
	    while (entry) {
	      var chunk = entry.chunk;
	      var encoding = entry.encoding;
	      var cb = entry.callback;
	      var len = state.objectMode ? 1 : chunk.length;

	      doWrite(stream, state, false, len, chunk, encoding, cb);
	      entry = entry.next;
	      // if we didn't call the onwrite immediately, then
	      // it means that we need to wait until it does.
	      // also, that means that the chunk and cb are currently
	      // being processed, so move the buffer counter past them.
	      if (state.writing) {
	        break;
	      }
	    }

	    if (entry === null) state.lastBufferedRequest = null;
	  }

	  state.bufferedRequestCount = 0;
	  state.bufferedRequest = entry;
	  state.bufferProcessing = false;
	}

	Writable.prototype._write = function (chunk, encoding, cb) {
	  cb(new Error('not implemented'));
	};

	Writable.prototype._writev = null;

	Writable.prototype.end = function (chunk, encoding, cb) {
	  var state = this._writableState;

	  if (typeof chunk === 'function') {
	    cb = chunk;
	    chunk = null;
	    encoding = null;
	  } else if (typeof encoding === 'function') {
	    cb = encoding;
	    encoding = null;
	  }

	  if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);

	  // .end() fully uncorks
	  if (state.corked) {
	    state.corked = 1;
	    this.uncork();
	  }

	  // ignore unnecessary end() calls.
	  if (!state.ending && !state.finished) endWritable(this, state, cb);
	};

	function needFinish(state) {
	  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
	}

	function prefinish(stream, state) {
	  if (!state.prefinished) {
	    state.prefinished = true;
	    stream.emit('prefinish');
	  }
	}

	function finishMaybe(stream, state) {
	  var need = needFinish(state);
	  if (need) {
	    if (state.pendingcb === 0) {
	      prefinish(stream, state);
	      state.finished = true;
	      stream.emit('finish');
	    } else {
	      prefinish(stream, state);
	    }
	  }
	  return need;
	}

	function endWritable(stream, state, cb) {
	  state.ending = true;
	  finishMaybe(stream, state);
	  if (cb) {
	    if (state.finished) nextTick(cb);else stream.once('finish', cb);
	  }
	  state.ended = true;
	  stream.writable = false;
	}

	// It seems a linked list but it is not
	// there will be only 2 of these for each stream
	function CorkedRequest(state) {
	  var _this = this;

	  this.next = null;
	  this.entry = null;

	  this.finish = function (err) {
	    var entry = _this.entry;
	    _this.entry = null;
	    while (entry) {
	      var cb = entry.callback;
	      state.pendingcb--;
	      cb(err);
	      entry = entry.next;
	    }
	    if (state.corkedRequestsFree) {
	      state.corkedRequestsFree.next = _this;
	    } else {
	      state.corkedRequestsFree = _this;
	    }
	  };
	}

	inherits$1(Duplex, Readable);

	var keys = Object.keys(Writable.prototype);
	for (var v = 0; v < keys.length; v++) {
	  var method = keys[v];
	  if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
	}
	function Duplex(options) {
	  if (!(this instanceof Duplex)) return new Duplex(options);

	  Readable.call(this, options);
	  Writable.call(this, options);

	  if (options && options.readable === false) this.readable = false;

	  if (options && options.writable === false) this.writable = false;

	  this.allowHalfOpen = true;
	  if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;

	  this.once('end', onend);
	}

	// the no-half-open enforcer
	function onend() {
	  // if we allow half-open state, or if the writable side ended,
	  // then we're ok.
	  if (this.allowHalfOpen || this._writableState.ended) return;

	  // no more data can be written.
	  // But allow more writes to happen in this tick.
	  nextTick(onEndNT, this);
	}

	function onEndNT(self) {
	  self.end();
	}

	// a transform stream is a readable/writable stream where you do
	inherits$1(Transform, Duplex);

	function TransformState(stream) {
	  this.afterTransform = function (er, data) {
	    return afterTransform(stream, er, data);
	  };

	  this.needTransform = false;
	  this.transforming = false;
	  this.writecb = null;
	  this.writechunk = null;
	  this.writeencoding = null;
	}

	function afterTransform(stream, er, data) {
	  var ts = stream._transformState;
	  ts.transforming = false;

	  var cb = ts.writecb;

	  if (!cb) return stream.emit('error', new Error('no writecb in Transform class'));

	  ts.writechunk = null;
	  ts.writecb = null;

	  if (data !== null && data !== undefined) stream.push(data);

	  cb(er);

	  var rs = stream._readableState;
	  rs.reading = false;
	  if (rs.needReadable || rs.length < rs.highWaterMark) {
	    stream._read(rs.highWaterMark);
	  }
	}
	function Transform(options) {
	  if (!(this instanceof Transform)) return new Transform(options);

	  Duplex.call(this, options);

	  this._transformState = new TransformState(this);

	  // when the writable side finishes, then flush out anything remaining.
	  var stream = this;

	  // start out asking for a readable event once data is transformed.
	  this._readableState.needReadable = true;

	  // we have implemented the _read method, and done the other things
	  // that Readable wants before the first _read call, so unset the
	  // sync guard flag.
	  this._readableState.sync = false;

	  if (options) {
	    if (typeof options.transform === 'function') this._transform = options.transform;

	    if (typeof options.flush === 'function') this._flush = options.flush;
	  }

	  this.once('prefinish', function () {
	    if (typeof this._flush === 'function') this._flush(function (er) {
	      done(stream, er);
	    });else done(stream);
	  });
	}

	Transform.prototype.push = function (chunk, encoding) {
	  this._transformState.needTransform = false;
	  return Duplex.prototype.push.call(this, chunk, encoding);
	};

	// This is the part where you do stuff!
	// override this function in implementation classes.
	// 'chunk' is an input chunk.
	//
	// Call `push(newChunk)` to pass along transformed output
	// to the readable side.  You may call 'push' zero or more times.
	//
	// Call `cb(err)` when you are done with this chunk.  If you pass
	// an error, then that'll put the hurt on the whole operation.  If you
	// never call cb(), then you'll never get another chunk.
	Transform.prototype._transform = function (chunk, encoding, cb) {
	  throw new Error('Not implemented');
	};

	Transform.prototype._write = function (chunk, encoding, cb) {
	  var ts = this._transformState;
	  ts.writecb = cb;
	  ts.writechunk = chunk;
	  ts.writeencoding = encoding;
	  if (!ts.transforming) {
	    var rs = this._readableState;
	    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
	  }
	};

	// Doesn't matter what the args are here.
	// _transform does all the work.
	// That we got here means that the readable side wants more data.
	Transform.prototype._read = function (n) {
	  var ts = this._transformState;

	  if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
	    ts.transforming = true;
	    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
	  } else {
	    // mark that we need a transform, so that any data that comes in
	    // will get processed, now that we've asked for it.
	    ts.needTransform = true;
	  }
	};

	function done(stream, er) {
	  if (er) return stream.emit('error', er);

	  // if there's nothing in the write buffer, then that means
	  // that nothing more will ever be provided
	  var ws = stream._writableState;
	  var ts = stream._transformState;

	  if (ws.length) throw new Error('Calling transform done when ws.length != 0');

	  if (ts.transforming) throw new Error('Calling transform done when still transforming');

	  return stream.push(null);
	}

	inherits$1(PassThrough, Transform);
	function PassThrough(options) {
	  if (!(this instanceof PassThrough)) return new PassThrough(options);

	  Transform.call(this, options);
	}

	PassThrough.prototype._transform = function (chunk, encoding, cb) {
	  cb(null, chunk);
	};

	inherits$1(Stream, EventEmitter);
	Stream.Readable = Readable;
	Stream.Writable = Writable;
	Stream.Duplex = Duplex;
	Stream.Transform = Transform;
	Stream.PassThrough = PassThrough;

	// Backwards-compat with node 0.4.x
	Stream.Stream = Stream;

	// old-style streams.  Note that the pipe method (the only relevant
	// part of this class) is overridden in the Readable class.

	function Stream() {
	  EventEmitter.call(this);
	}

	Stream.prototype.pipe = function(dest, options) {
	  var source = this;

	  function ondata(chunk) {
	    if (dest.writable) {
	      if (false === dest.write(chunk) && source.pause) {
	        source.pause();
	      }
	    }
	  }

	  source.on('data', ondata);

	  function ondrain() {
	    if (source.readable && source.resume) {
	      source.resume();
	    }
	  }

	  dest.on('drain', ondrain);

	  // If the 'end' option is not supplied, dest.end() will be called when
	  // source gets the 'end' or 'close' events.  Only dest.end() once.
	  if (!dest._isStdio && (!options || options.end !== false)) {
	    source.on('end', onend);
	    source.on('close', onclose);
	  }

	  var didOnEnd = false;
	  function onend() {
	    if (didOnEnd) return;
	    didOnEnd = true;

	    dest.end();
	  }


	  function onclose() {
	    if (didOnEnd) return;
	    didOnEnd = true;

	    if (typeof dest.destroy === 'function') dest.destroy();
	  }

	  // don't leave dangling pipes when there are errors.
	  function onerror(er) {
	    cleanup();
	    if (EventEmitter.listenerCount(this, 'error') === 0) {
	      throw er; // Unhandled stream error in pipe.
	    }
	  }

	  source.on('error', onerror);
	  dest.on('error', onerror);

	  // remove all the event listeners that were added.
	  function cleanup() {
	    source.removeListener('data', ondata);
	    dest.removeListener('drain', ondrain);

	    source.removeListener('end', onend);
	    source.removeListener('close', onclose);

	    source.removeListener('error', onerror);
	    dest.removeListener('error', onerror);

	    source.removeListener('end', cleanup);
	    source.removeListener('close', cleanup);

	    dest.removeListener('close', cleanup);
	  }

	  source.on('end', cleanup);
	  source.on('close', cleanup);

	  dest.on('close', cleanup);

	  dest.emit('pipe', source);

	  // Allow for unix-like usage: A.pipe(B).pipe(C)
	  return dest;
	};

	var Buffer$2 = safeBuffer.Buffer;
	var Transform$1 = Stream.Transform;


	function throwIfNotStringOrBuffer (val, prefix) {
	  if (!Buffer$2.isBuffer(val) && typeof val !== 'string') {
	    throw new TypeError(prefix + ' must be a string or a buffer')
	  }
	}

	function HashBase (blockSize) {
	  Transform$1.call(this);

	  this._block = Buffer$2.allocUnsafe(blockSize);
	  this._blockSize = blockSize;
	  this._blockOffset = 0;
	  this._length = [0, 0, 0, 0];

	  this._finalized = false;
	}

	inherits$2(HashBase, Transform$1);

	HashBase.prototype._transform = function (chunk, encoding, callback) {
	  var error = null;
	  try {
	    this.update(chunk, encoding);
	  } catch (err) {
	    error = err;
	  }

	  callback(error);
	};

	HashBase.prototype._flush = function (callback) {
	  var error = null;
	  try {
	    this.push(this.digest());
	  } catch (err) {
	    error = err;
	  }

	  callback(error);
	};

	HashBase.prototype.update = function (data, encoding) {
	  throwIfNotStringOrBuffer(data, 'Data');
	  if (this._finalized) throw new Error('Digest already called')
	  if (!Buffer$2.isBuffer(data)) data = Buffer$2.from(data, encoding);

	  // consume data
	  var block = this._block;
	  var offset = 0;
	  while (this._blockOffset + data.length - offset >= this._blockSize) {
	    for (var i = this._blockOffset; i < this._blockSize;) block[i++] = data[offset++];
	    this._update();
	    this._blockOffset = 0;
	  }
	  while (offset < data.length) block[this._blockOffset++] = data[offset++];

	  // update length
	  for (var j = 0, carry = data.length * 8; carry > 0; ++j) {
	    this._length[j] += carry;
	    carry = (this._length[j] / 0x0100000000) | 0;
	    if (carry > 0) this._length[j] -= 0x0100000000 * carry;
	  }

	  return this
	};

	HashBase.prototype._update = function () {
	  throw new Error('_update is not implemented')
	};

	HashBase.prototype.digest = function (encoding) {
	  if (this._finalized) throw new Error('Digest already called')
	  this._finalized = true;

	  var digest = this._digest();
	  if (encoding !== undefined) digest = digest.toString(encoding);

	  // reset state
	  this._block.fill(0);
	  this._blockOffset = 0;
	  for (var i = 0; i < 4; ++i) this._length[i] = 0;

	  return digest
	};

	HashBase.prototype._digest = function () {
	  throw new Error('_digest is not implemented')
	};

	var hashBase = HashBase;

	var Buffer$3 = safeBuffer.Buffer;

	var ARRAY16 = new Array(16);

	function MD5 () {
	  hashBase.call(this, 64);

	  // state
	  this._a = 0x67452301;
	  this._b = 0xefcdab89;
	  this._c = 0x98badcfe;
	  this._d = 0x10325476;
	}

	inherits$2(MD5, hashBase);

	MD5.prototype._update = function () {
	  var M = ARRAY16;
	  for (var i = 0; i < 16; ++i) M[i] = this._block.readInt32LE(i * 4);

	  var a = this._a;
	  var b = this._b;
	  var c = this._c;
	  var d = this._d;

	  a = fnF(a, b, c, d, M[0], 0xd76aa478, 7);
	  d = fnF(d, a, b, c, M[1], 0xe8c7b756, 12);
	  c = fnF(c, d, a, b, M[2], 0x242070db, 17);
	  b = fnF(b, c, d, a, M[3], 0xc1bdceee, 22);
	  a = fnF(a, b, c, d, M[4], 0xf57c0faf, 7);
	  d = fnF(d, a, b, c, M[5], 0x4787c62a, 12);
	  c = fnF(c, d, a, b, M[6], 0xa8304613, 17);
	  b = fnF(b, c, d, a, M[7], 0xfd469501, 22);
	  a = fnF(a, b, c, d, M[8], 0x698098d8, 7);
	  d = fnF(d, a, b, c, M[9], 0x8b44f7af, 12);
	  c = fnF(c, d, a, b, M[10], 0xffff5bb1, 17);
	  b = fnF(b, c, d, a, M[11], 0x895cd7be, 22);
	  a = fnF(a, b, c, d, M[12], 0x6b901122, 7);
	  d = fnF(d, a, b, c, M[13], 0xfd987193, 12);
	  c = fnF(c, d, a, b, M[14], 0xa679438e, 17);
	  b = fnF(b, c, d, a, M[15], 0x49b40821, 22);

	  a = fnG(a, b, c, d, M[1], 0xf61e2562, 5);
	  d = fnG(d, a, b, c, M[6], 0xc040b340, 9);
	  c = fnG(c, d, a, b, M[11], 0x265e5a51, 14);
	  b = fnG(b, c, d, a, M[0], 0xe9b6c7aa, 20);
	  a = fnG(a, b, c, d, M[5], 0xd62f105d, 5);
	  d = fnG(d, a, b, c, M[10], 0x02441453, 9);
	  c = fnG(c, d, a, b, M[15], 0xd8a1e681, 14);
	  b = fnG(b, c, d, a, M[4], 0xe7d3fbc8, 20);
	  a = fnG(a, b, c, d, M[9], 0x21e1cde6, 5);
	  d = fnG(d, a, b, c, M[14], 0xc33707d6, 9);
	  c = fnG(c, d, a, b, M[3], 0xf4d50d87, 14);
	  b = fnG(b, c, d, a, M[8], 0x455a14ed, 20);
	  a = fnG(a, b, c, d, M[13], 0xa9e3e905, 5);
	  d = fnG(d, a, b, c, M[2], 0xfcefa3f8, 9);
	  c = fnG(c, d, a, b, M[7], 0x676f02d9, 14);
	  b = fnG(b, c, d, a, M[12], 0x8d2a4c8a, 20);

	  a = fnH(a, b, c, d, M[5], 0xfffa3942, 4);
	  d = fnH(d, a, b, c, M[8], 0x8771f681, 11);
	  c = fnH(c, d, a, b, M[11], 0x6d9d6122, 16);
	  b = fnH(b, c, d, a, M[14], 0xfde5380c, 23);
	  a = fnH(a, b, c, d, M[1], 0xa4beea44, 4);
	  d = fnH(d, a, b, c, M[4], 0x4bdecfa9, 11);
	  c = fnH(c, d, a, b, M[7], 0xf6bb4b60, 16);
	  b = fnH(b, c, d, a, M[10], 0xbebfbc70, 23);
	  a = fnH(a, b, c, d, M[13], 0x289b7ec6, 4);
	  d = fnH(d, a, b, c, M[0], 0xeaa127fa, 11);
	  c = fnH(c, d, a, b, M[3], 0xd4ef3085, 16);
	  b = fnH(b, c, d, a, M[6], 0x04881d05, 23);
	  a = fnH(a, b, c, d, M[9], 0xd9d4d039, 4);
	  d = fnH(d, a, b, c, M[12], 0xe6db99e5, 11);
	  c = fnH(c, d, a, b, M[15], 0x1fa27cf8, 16);
	  b = fnH(b, c, d, a, M[2], 0xc4ac5665, 23);

	  a = fnI(a, b, c, d, M[0], 0xf4292244, 6);
	  d = fnI(d, a, b, c, M[7], 0x432aff97, 10);
	  c = fnI(c, d, a, b, M[14], 0xab9423a7, 15);
	  b = fnI(b, c, d, a, M[5], 0xfc93a039, 21);
	  a = fnI(a, b, c, d, M[12], 0x655b59c3, 6);
	  d = fnI(d, a, b, c, M[3], 0x8f0ccc92, 10);
	  c = fnI(c, d, a, b, M[10], 0xffeff47d, 15);
	  b = fnI(b, c, d, a, M[1], 0x85845dd1, 21);
	  a = fnI(a, b, c, d, M[8], 0x6fa87e4f, 6);
	  d = fnI(d, a, b, c, M[15], 0xfe2ce6e0, 10);
	  c = fnI(c, d, a, b, M[6], 0xa3014314, 15);
	  b = fnI(b, c, d, a, M[13], 0x4e0811a1, 21);
	  a = fnI(a, b, c, d, M[4], 0xf7537e82, 6);
	  d = fnI(d, a, b, c, M[11], 0xbd3af235, 10);
	  c = fnI(c, d, a, b, M[2], 0x2ad7d2bb, 15);
	  b = fnI(b, c, d, a, M[9], 0xeb86d391, 21);

	  this._a = (this._a + a) | 0;
	  this._b = (this._b + b) | 0;
	  this._c = (this._c + c) | 0;
	  this._d = (this._d + d) | 0;
	};

	MD5.prototype._digest = function () {
	  // create padding and handle blocks
	  this._block[this._blockOffset++] = 0x80;
	  if (this._blockOffset > 56) {
	    this._block.fill(0, this._blockOffset, 64);
	    this._update();
	    this._blockOffset = 0;
	  }

	  this._block.fill(0, this._blockOffset, 56);
	  this._block.writeUInt32LE(this._length[0], 56);
	  this._block.writeUInt32LE(this._length[1], 60);
	  this._update();

	  // produce result
	  var buffer = Buffer$3.allocUnsafe(16);
	  buffer.writeInt32LE(this._a, 0);
	  buffer.writeInt32LE(this._b, 4);
	  buffer.writeInt32LE(this._c, 8);
	  buffer.writeInt32LE(this._d, 12);
	  return buffer
	};

	function rotl (x, n) {
	  return (x << n) | (x >>> (32 - n))
	}

	function fnF (a, b, c, d, m, k, s) {
	  return (rotl((a + ((b & c) | ((~b) & d)) + m + k) | 0, s) + b) | 0
	}

	function fnG (a, b, c, d, m, k, s) {
	  return (rotl((a + ((b & d) | (c & (~d))) + m + k) | 0, s) + b) | 0
	}

	function fnH (a, b, c, d, m, k, s) {
	  return (rotl((a + (b ^ c ^ d) + m + k) | 0, s) + b) | 0
	}

	function fnI (a, b, c, d, m, k, s) {
	  return (rotl((a + ((c ^ (b | (~d)))) + m + k) | 0, s) + b) | 0
	}

	var md5_js = MD5;

	var Buffer$4 = buffer.Buffer;



	var ARRAY16$1 = new Array(16);

	var zl = [
	  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
	  7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8,
	  3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12,
	  1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2,
	  4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13
	];

	var zr = [
	  5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12,
	  6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2,
	  15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13,
	  8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14,
	  12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11
	];

	var sl = [
	  11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8,
	  7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12,
	  11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5,
	  11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12,
	  9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6
	];

	var sr = [
	  8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6,
	  9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11,
	  9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5,
	  15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8,
	  8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11
	];

	var hl = [0x00000000, 0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xa953fd4e];
	var hr = [0x50a28be6, 0x5c4dd124, 0x6d703ef3, 0x7a6d76e9, 0x00000000];

	function RIPEMD160 () {
	  hashBase.call(this, 64);

	  // state
	  this._a = 0x67452301;
	  this._b = 0xefcdab89;
	  this._c = 0x98badcfe;
	  this._d = 0x10325476;
	  this._e = 0xc3d2e1f0;
	}

	inherits$2(RIPEMD160, hashBase);

	RIPEMD160.prototype._update = function () {
	  var words = ARRAY16$1;
	  for (var j = 0; j < 16; ++j) words[j] = this._block.readInt32LE(j * 4);

	  var al = this._a | 0;
	  var bl = this._b | 0;
	  var cl = this._c | 0;
	  var dl = this._d | 0;
	  var el = this._e | 0;

	  var ar = this._a | 0;
	  var br = this._b | 0;
	  var cr = this._c | 0;
	  var dr = this._d | 0;
	  var er = this._e | 0;

	  // computation
	  for (var i = 0; i < 80; i += 1) {
	    var tl;
	    var tr;
	    if (i < 16) {
	      tl = fn1(al, bl, cl, dl, el, words[zl[i]], hl[0], sl[i]);
	      tr = fn5(ar, br, cr, dr, er, words[zr[i]], hr[0], sr[i]);
	    } else if (i < 32) {
	      tl = fn2(al, bl, cl, dl, el, words[zl[i]], hl[1], sl[i]);
	      tr = fn4(ar, br, cr, dr, er, words[zr[i]], hr[1], sr[i]);
	    } else if (i < 48) {
	      tl = fn3(al, bl, cl, dl, el, words[zl[i]], hl[2], sl[i]);
	      tr = fn3(ar, br, cr, dr, er, words[zr[i]], hr[2], sr[i]);
	    } else if (i < 64) {
	      tl = fn4(al, bl, cl, dl, el, words[zl[i]], hl[3], sl[i]);
	      tr = fn2(ar, br, cr, dr, er, words[zr[i]], hr[3], sr[i]);
	    } else { // if (i<80) {
	      tl = fn5(al, bl, cl, dl, el, words[zl[i]], hl[4], sl[i]);
	      tr = fn1(ar, br, cr, dr, er, words[zr[i]], hr[4], sr[i]);
	    }

	    al = el;
	    el = dl;
	    dl = rotl$1(cl, 10);
	    cl = bl;
	    bl = tl;

	    ar = er;
	    er = dr;
	    dr = rotl$1(cr, 10);
	    cr = br;
	    br = tr;
	  }

	  // update state
	  var t = (this._b + cl + dr) | 0;
	  this._b = (this._c + dl + er) | 0;
	  this._c = (this._d + el + ar) | 0;
	  this._d = (this._e + al + br) | 0;
	  this._e = (this._a + bl + cr) | 0;
	  this._a = t;
	};

	RIPEMD160.prototype._digest = function () {
	  // create padding and handle blocks
	  this._block[this._blockOffset++] = 0x80;
	  if (this._blockOffset > 56) {
	    this._block.fill(0, this._blockOffset, 64);
	    this._update();
	    this._blockOffset = 0;
	  }

	  this._block.fill(0, this._blockOffset, 56);
	  this._block.writeUInt32LE(this._length[0], 56);
	  this._block.writeUInt32LE(this._length[1], 60);
	  this._update();

	  // produce result
	  var buffer$$1 = Buffer$4.alloc ? Buffer$4.alloc(20) : new Buffer$4(20);
	  buffer$$1.writeInt32LE(this._a, 0);
	  buffer$$1.writeInt32LE(this._b, 4);
	  buffer$$1.writeInt32LE(this._c, 8);
	  buffer$$1.writeInt32LE(this._d, 12);
	  buffer$$1.writeInt32LE(this._e, 16);
	  return buffer$$1
	};

	function rotl$1 (x, n) {
	  return (x << n) | (x >>> (32 - n))
	}

	function fn1 (a, b, c, d, e, m, k, s) {
	  return (rotl$1((a + (b ^ c ^ d) + m + k) | 0, s) + e) | 0
	}

	function fn2 (a, b, c, d, e, m, k, s) {
	  return (rotl$1((a + ((b & c) | ((~b) & d)) + m + k) | 0, s) + e) | 0
	}

	function fn3 (a, b, c, d, e, m, k, s) {
	  return (rotl$1((a + ((b | (~c)) ^ d) + m + k) | 0, s) + e) | 0
	}

	function fn4 (a, b, c, d, e, m, k, s) {
	  return (rotl$1((a + ((b & d) | (c & (~d))) + m + k) | 0, s) + e) | 0
	}

	function fn5 (a, b, c, d, e, m, k, s) {
	  return (rotl$1((a + (b ^ (c | (~d))) + m + k) | 0, s) + e) | 0
	}

	var ripemd160 = RIPEMD160;

	var Buffer$5 = safeBuffer.Buffer;

	// prototype class for hash functions
	function Hash (blockSize, finalSize) {
	  this._block = Buffer$5.alloc(blockSize);
	  this._finalSize = finalSize;
	  this._blockSize = blockSize;
	  this._len = 0;
	}

	Hash.prototype.update = function (data, enc) {
	  if (typeof data === 'string') {
	    enc = enc || 'utf8';
	    data = Buffer$5.from(data, enc);
	  }

	  var block = this._block;
	  var blockSize = this._blockSize;
	  var length = data.length;
	  var accum = this._len;

	  for (var offset = 0; offset < length;) {
	    var assigned = accum % blockSize;
	    var remainder = Math.min(length - offset, blockSize - assigned);

	    for (var i = 0; i < remainder; i++) {
	      block[assigned + i] = data[offset + i];
	    }

	    accum += remainder;
	    offset += remainder;

	    if ((accum % blockSize) === 0) {
	      this._update(block);
	    }
	  }

	  this._len += length;
	  return this
	};

	Hash.prototype.digest = function (enc) {
	  var rem = this._len % this._blockSize;

	  this._block[rem] = 0x80;

	  // zero (rem + 1) trailing bits, where (rem + 1) is the smallest
	  // non-negative solution to the equation (length + 1 + (rem + 1)) === finalSize mod blockSize
	  this._block.fill(0, rem + 1);

	  if (rem >= this._finalSize) {
	    this._update(this._block);
	    this._block.fill(0);
	  }

	  var bits = this._len * 8;

	  // uint32
	  if (bits <= 0xffffffff) {
	    this._block.writeUInt32BE(bits, this._blockSize - 4);

	  // uint64
	  } else {
	    var lowBits = (bits & 0xffffffff) >>> 0;
	    var highBits = (bits - lowBits) / 0x100000000;

	    this._block.writeUInt32BE(highBits, this._blockSize - 8);
	    this._block.writeUInt32BE(lowBits, this._blockSize - 4);
	  }

	  this._update(this._block);
	  var hash = this._hash();

	  return enc ? hash.toString(enc) : hash
	};

	Hash.prototype._update = function () {
	  throw new Error('_update must be implemented by subclass')
	};

	var hash = Hash;

	/*
	 * A JavaScript implementation of the Secure Hash Algorithm, SHA-0, as defined
	 * in FIPS PUB 180-1
	 * This source code is derived from sha1.js of the same repository.
	 * The difference between SHA-0 and SHA-1 is just a bitwise rotate left
	 * operation was added.
	 */



	var Buffer$6 = safeBuffer.Buffer;

	var K = [
	  0x5a827999, 0x6ed9eba1, 0x8f1bbcdc | 0, 0xca62c1d6 | 0
	];

	var W = new Array(80);

	function Sha () {
	  this.init();
	  this._w = W;

	  hash.call(this, 64, 56);
	}

	inherits$2(Sha, hash);

	Sha.prototype.init = function () {
	  this._a = 0x67452301;
	  this._b = 0xefcdab89;
	  this._c = 0x98badcfe;
	  this._d = 0x10325476;
	  this._e = 0xc3d2e1f0;

	  return this
	};

	function rotl5 (num) {
	  return (num << 5) | (num >>> 27)
	}

	function rotl30 (num) {
	  return (num << 30) | (num >>> 2)
	}

	function ft (s, b, c, d) {
	  if (s === 0) return (b & c) | ((~b) & d)
	  if (s === 2) return (b & c) | (b & d) | (c & d)
	  return b ^ c ^ d
	}

	Sha.prototype._update = function (M) {
	  var W = this._w;

	  var a = this._a | 0;
	  var b = this._b | 0;
	  var c = this._c | 0;
	  var d = this._d | 0;
	  var e = this._e | 0;

	  for (var i = 0; i < 16; ++i) W[i] = M.readInt32BE(i * 4);
	  for (; i < 80; ++i) W[i] = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];

	  for (var j = 0; j < 80; ++j) {
	    var s = ~~(j / 20);
	    var t = (rotl5(a) + ft(s, b, c, d) + e + W[j] + K[s]) | 0;

	    e = d;
	    d = c;
	    c = rotl30(b);
	    b = a;
	    a = t;
	  }

	  this._a = (a + this._a) | 0;
	  this._b = (b + this._b) | 0;
	  this._c = (c + this._c) | 0;
	  this._d = (d + this._d) | 0;
	  this._e = (e + this._e) | 0;
	};

	Sha.prototype._hash = function () {
	  var H = Buffer$6.allocUnsafe(20);

	  H.writeInt32BE(this._a | 0, 0);
	  H.writeInt32BE(this._b | 0, 4);
	  H.writeInt32BE(this._c | 0, 8);
	  H.writeInt32BE(this._d | 0, 12);
	  H.writeInt32BE(this._e | 0, 16);

	  return H
	};

	var sha = Sha;

	/*
	 * A JavaScript implementation of the Secure Hash Algorithm, SHA-1, as defined
	 * in FIPS PUB 180-1
	 * Version 2.1a Copyright Paul Johnston 2000 - 2002.
	 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
	 * Distributed under the BSD License
	 * See http://pajhome.org.uk/crypt/md5 for details.
	 */



	var Buffer$7 = safeBuffer.Buffer;

	var K$1 = [
	  0x5a827999, 0x6ed9eba1, 0x8f1bbcdc | 0, 0xca62c1d6 | 0
	];

	var W$1 = new Array(80);

	function Sha1 () {
	  this.init();
	  this._w = W$1;

	  hash.call(this, 64, 56);
	}

	inherits$2(Sha1, hash);

	Sha1.prototype.init = function () {
	  this._a = 0x67452301;
	  this._b = 0xefcdab89;
	  this._c = 0x98badcfe;
	  this._d = 0x10325476;
	  this._e = 0xc3d2e1f0;

	  return this
	};

	function rotl1 (num) {
	  return (num << 1) | (num >>> 31)
	}

	function rotl5$1 (num) {
	  return (num << 5) | (num >>> 27)
	}

	function rotl30$1 (num) {
	  return (num << 30) | (num >>> 2)
	}

	function ft$1 (s, b, c, d) {
	  if (s === 0) return (b & c) | ((~b) & d)
	  if (s === 2) return (b & c) | (b & d) | (c & d)
	  return b ^ c ^ d
	}

	Sha1.prototype._update = function (M) {
	  var W = this._w;

	  var a = this._a | 0;
	  var b = this._b | 0;
	  var c = this._c | 0;
	  var d = this._d | 0;
	  var e = this._e | 0;

	  for (var i = 0; i < 16; ++i) W[i] = M.readInt32BE(i * 4);
	  for (; i < 80; ++i) W[i] = rotl1(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16]);

	  for (var j = 0; j < 80; ++j) {
	    var s = ~~(j / 20);
	    var t = (rotl5$1(a) + ft$1(s, b, c, d) + e + W[j] + K$1[s]) | 0;

	    e = d;
	    d = c;
	    c = rotl30$1(b);
	    b = a;
	    a = t;
	  }

	  this._a = (a + this._a) | 0;
	  this._b = (b + this._b) | 0;
	  this._c = (c + this._c) | 0;
	  this._d = (d + this._d) | 0;
	  this._e = (e + this._e) | 0;
	};

	Sha1.prototype._hash = function () {
	  var H = Buffer$7.allocUnsafe(20);

	  H.writeInt32BE(this._a | 0, 0);
	  H.writeInt32BE(this._b | 0, 4);
	  H.writeInt32BE(this._c | 0, 8);
	  H.writeInt32BE(this._d | 0, 12);
	  H.writeInt32BE(this._e | 0, 16);

	  return H
	};

	var sha1 = Sha1;

	/**
	 * A JavaScript implementation of the Secure Hash Algorithm, SHA-256, as defined
	 * in FIPS 180-2
	 * Version 2.2-beta Copyright Angel Marin, Paul Johnston 2000 - 2009.
	 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
	 *
	 */



	var Buffer$8 = safeBuffer.Buffer;

	var K$2 = [
	  0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5,
	  0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5,
	  0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3,
	  0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174,
	  0xE49B69C1, 0xEFBE4786, 0x0FC19DC6, 0x240CA1CC,
	  0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA,
	  0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7,
	  0xC6E00BF3, 0xD5A79147, 0x06CA6351, 0x14292967,
	  0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13,
	  0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85,
	  0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3,
	  0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070,
	  0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5,
	  0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3,
	  0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208,
	  0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2
	];

	var W$2 = new Array(64);

	function Sha256 () {
	  this.init();

	  this._w = W$2; // new Array(64)

	  hash.call(this, 64, 56);
	}

	inherits$2(Sha256, hash);

	Sha256.prototype.init = function () {
	  this._a = 0x6a09e667;
	  this._b = 0xbb67ae85;
	  this._c = 0x3c6ef372;
	  this._d = 0xa54ff53a;
	  this._e = 0x510e527f;
	  this._f = 0x9b05688c;
	  this._g = 0x1f83d9ab;
	  this._h = 0x5be0cd19;

	  return this
	};

	function ch (x, y, z) {
	  return z ^ (x & (y ^ z))
	}

	function maj (x, y, z) {
	  return (x & y) | (z & (x | y))
	}

	function sigma0 (x) {
	  return (x >>> 2 | x << 30) ^ (x >>> 13 | x << 19) ^ (x >>> 22 | x << 10)
	}

	function sigma1 (x) {
	  return (x >>> 6 | x << 26) ^ (x >>> 11 | x << 21) ^ (x >>> 25 | x << 7)
	}

	function gamma0 (x) {
	  return (x >>> 7 | x << 25) ^ (x >>> 18 | x << 14) ^ (x >>> 3)
	}

	function gamma1 (x) {
	  return (x >>> 17 | x << 15) ^ (x >>> 19 | x << 13) ^ (x >>> 10)
	}

	Sha256.prototype._update = function (M) {
	  var W = this._w;

	  var a = this._a | 0;
	  var b = this._b | 0;
	  var c = this._c | 0;
	  var d = this._d | 0;
	  var e = this._e | 0;
	  var f = this._f | 0;
	  var g = this._g | 0;
	  var h = this._h | 0;

	  for (var i = 0; i < 16; ++i) W[i] = M.readInt32BE(i * 4);
	  for (; i < 64; ++i) W[i] = (gamma1(W[i - 2]) + W[i - 7] + gamma0(W[i - 15]) + W[i - 16]) | 0;

	  for (var j = 0; j < 64; ++j) {
	    var T1 = (h + sigma1(e) + ch(e, f, g) + K$2[j] + W[j]) | 0;
	    var T2 = (sigma0(a) + maj(a, b, c)) | 0;

	    h = g;
	    g = f;
	    f = e;
	    e = (d + T1) | 0;
	    d = c;
	    c = b;
	    b = a;
	    a = (T1 + T2) | 0;
	  }

	  this._a = (a + this._a) | 0;
	  this._b = (b + this._b) | 0;
	  this._c = (c + this._c) | 0;
	  this._d = (d + this._d) | 0;
	  this._e = (e + this._e) | 0;
	  this._f = (f + this._f) | 0;
	  this._g = (g + this._g) | 0;
	  this._h = (h + this._h) | 0;
	};

	Sha256.prototype._hash = function () {
	  var H = Buffer$8.allocUnsafe(32);

	  H.writeInt32BE(this._a, 0);
	  H.writeInt32BE(this._b, 4);
	  H.writeInt32BE(this._c, 8);
	  H.writeInt32BE(this._d, 12);
	  H.writeInt32BE(this._e, 16);
	  H.writeInt32BE(this._f, 20);
	  H.writeInt32BE(this._g, 24);
	  H.writeInt32BE(this._h, 28);

	  return H
	};

	var sha256 = Sha256;

	/**
	 * A JavaScript implementation of the Secure Hash Algorithm, SHA-256, as defined
	 * in FIPS 180-2
	 * Version 2.2-beta Copyright Angel Marin, Paul Johnston 2000 - 2009.
	 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
	 *
	 */




	var Buffer$9 = safeBuffer.Buffer;

	var W$3 = new Array(64);

	function Sha224 () {
	  this.init();

	  this._w = W$3; // new Array(64)

	  hash.call(this, 64, 56);
	}

	inherits$2(Sha224, sha256);

	Sha224.prototype.init = function () {
	  this._a = 0xc1059ed8;
	  this._b = 0x367cd507;
	  this._c = 0x3070dd17;
	  this._d = 0xf70e5939;
	  this._e = 0xffc00b31;
	  this._f = 0x68581511;
	  this._g = 0x64f98fa7;
	  this._h = 0xbefa4fa4;

	  return this
	};

	Sha224.prototype._hash = function () {
	  var H = Buffer$9.allocUnsafe(28);

	  H.writeInt32BE(this._a, 0);
	  H.writeInt32BE(this._b, 4);
	  H.writeInt32BE(this._c, 8);
	  H.writeInt32BE(this._d, 12);
	  H.writeInt32BE(this._e, 16);
	  H.writeInt32BE(this._f, 20);
	  H.writeInt32BE(this._g, 24);

	  return H
	};

	var sha224 = Sha224;

	var Buffer$10 = safeBuffer.Buffer;

	var K$3 = [
	  0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd,
	  0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc,
	  0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019,
	  0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118,
	  0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe,
	  0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2,
	  0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1,
	  0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694,
	  0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3,
	  0x0fc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65,
	  0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483,
	  0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5,
	  0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210,
	  0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4,
	  0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725,
	  0x06ca6351, 0xe003826f, 0x14292967, 0x0a0e6e70,
	  0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926,
	  0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df,
	  0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8,
	  0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b,
	  0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001,
	  0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x0654be30,
	  0xd192e819, 0xd6ef5218, 0xd6990624, 0x5565a910,
	  0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8,
	  0x19a4c116, 0xb8d2d0c8, 0x1e376c08, 0x5141ab53,
	  0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8,
	  0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb,
	  0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3,
	  0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60,
	  0x84c87814, 0xa1f0ab72, 0x8cc70208, 0x1a6439ec,
	  0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9,
	  0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b,
	  0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207,
	  0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f, 0xee6ed178,
	  0x06f067aa, 0x72176fba, 0x0a637dc5, 0xa2c898a6,
	  0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b,
	  0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493,
	  0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c,
	  0x4cc5d4be, 0xcb3e42b6, 0x597f299c, 0xfc657e2a,
	  0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817
	];

	var W$4 = new Array(160);

	function Sha512 () {
	  this.init();
	  this._w = W$4;

	  hash.call(this, 128, 112);
	}

	inherits$2(Sha512, hash);

	Sha512.prototype.init = function () {
	  this._ah = 0x6a09e667;
	  this._bh = 0xbb67ae85;
	  this._ch = 0x3c6ef372;
	  this._dh = 0xa54ff53a;
	  this._eh = 0x510e527f;
	  this._fh = 0x9b05688c;
	  this._gh = 0x1f83d9ab;
	  this._hh = 0x5be0cd19;

	  this._al = 0xf3bcc908;
	  this._bl = 0x84caa73b;
	  this._cl = 0xfe94f82b;
	  this._dl = 0x5f1d36f1;
	  this._el = 0xade682d1;
	  this._fl = 0x2b3e6c1f;
	  this._gl = 0xfb41bd6b;
	  this._hl = 0x137e2179;

	  return this
	};

	function Ch (x, y, z) {
	  return z ^ (x & (y ^ z))
	}

	function maj$1 (x, y, z) {
	  return (x & y) | (z & (x | y))
	}

	function sigma0$1 (x, xl) {
	  return (x >>> 28 | xl << 4) ^ (xl >>> 2 | x << 30) ^ (xl >>> 7 | x << 25)
	}

	function sigma1$1 (x, xl) {
	  return (x >>> 14 | xl << 18) ^ (x >>> 18 | xl << 14) ^ (xl >>> 9 | x << 23)
	}

	function Gamma0 (x, xl) {
	  return (x >>> 1 | xl << 31) ^ (x >>> 8 | xl << 24) ^ (x >>> 7)
	}

	function Gamma0l (x, xl) {
	  return (x >>> 1 | xl << 31) ^ (x >>> 8 | xl << 24) ^ (x >>> 7 | xl << 25)
	}

	function Gamma1 (x, xl) {
	  return (x >>> 19 | xl << 13) ^ (xl >>> 29 | x << 3) ^ (x >>> 6)
	}

	function Gamma1l (x, xl) {
	  return (x >>> 19 | xl << 13) ^ (xl >>> 29 | x << 3) ^ (x >>> 6 | xl << 26)
	}

	function getCarry (a, b) {
	  return (a >>> 0) < (b >>> 0) ? 1 : 0
	}

	Sha512.prototype._update = function (M) {
	  var W = this._w;

	  var ah = this._ah | 0;
	  var bh = this._bh | 0;
	  var ch = this._ch | 0;
	  var dh = this._dh | 0;
	  var eh = this._eh | 0;
	  var fh = this._fh | 0;
	  var gh = this._gh | 0;
	  var hh = this._hh | 0;

	  var al = this._al | 0;
	  var bl = this._bl | 0;
	  var cl = this._cl | 0;
	  var dl = this._dl | 0;
	  var el = this._el | 0;
	  var fl = this._fl | 0;
	  var gl = this._gl | 0;
	  var hl = this._hl | 0;

	  for (var i = 0; i < 32; i += 2) {
	    W[i] = M.readInt32BE(i * 4);
	    W[i + 1] = M.readInt32BE(i * 4 + 4);
	  }
	  for (; i < 160; i += 2) {
	    var xh = W[i - 15 * 2];
	    var xl = W[i - 15 * 2 + 1];
	    var gamma0 = Gamma0(xh, xl);
	    var gamma0l = Gamma0l(xl, xh);

	    xh = W[i - 2 * 2];
	    xl = W[i - 2 * 2 + 1];
	    var gamma1 = Gamma1(xh, xl);
	    var gamma1l = Gamma1l(xl, xh);

	    // W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16]
	    var Wi7h = W[i - 7 * 2];
	    var Wi7l = W[i - 7 * 2 + 1];

	    var Wi16h = W[i - 16 * 2];
	    var Wi16l = W[i - 16 * 2 + 1];

	    var Wil = (gamma0l + Wi7l) | 0;
	    var Wih = (gamma0 + Wi7h + getCarry(Wil, gamma0l)) | 0;
	    Wil = (Wil + gamma1l) | 0;
	    Wih = (Wih + gamma1 + getCarry(Wil, gamma1l)) | 0;
	    Wil = (Wil + Wi16l) | 0;
	    Wih = (Wih + Wi16h + getCarry(Wil, Wi16l)) | 0;

	    W[i] = Wih;
	    W[i + 1] = Wil;
	  }

	  for (var j = 0; j < 160; j += 2) {
	    Wih = W[j];
	    Wil = W[j + 1];

	    var majh = maj$1(ah, bh, ch);
	    var majl = maj$1(al, bl, cl);

	    var sigma0h = sigma0$1(ah, al);
	    var sigma0l = sigma0$1(al, ah);
	    var sigma1h = sigma1$1(eh, el);
	    var sigma1l = sigma1$1(el, eh);

	    // t1 = h + sigma1 + ch + K[j] + W[j]
	    var Kih = K$3[j];
	    var Kil = K$3[j + 1];

	    var chh = Ch(eh, fh, gh);
	    var chl = Ch(el, fl, gl);

	    var t1l = (hl + sigma1l) | 0;
	    var t1h = (hh + sigma1h + getCarry(t1l, hl)) | 0;
	    t1l = (t1l + chl) | 0;
	    t1h = (t1h + chh + getCarry(t1l, chl)) | 0;
	    t1l = (t1l + Kil) | 0;
	    t1h = (t1h + Kih + getCarry(t1l, Kil)) | 0;
	    t1l = (t1l + Wil) | 0;
	    t1h = (t1h + Wih + getCarry(t1l, Wil)) | 0;

	    // t2 = sigma0 + maj
	    var t2l = (sigma0l + majl) | 0;
	    var t2h = (sigma0h + majh + getCarry(t2l, sigma0l)) | 0;

	    hh = gh;
	    hl = gl;
	    gh = fh;
	    gl = fl;
	    fh = eh;
	    fl = el;
	    el = (dl + t1l) | 0;
	    eh = (dh + t1h + getCarry(el, dl)) | 0;
	    dh = ch;
	    dl = cl;
	    ch = bh;
	    cl = bl;
	    bh = ah;
	    bl = al;
	    al = (t1l + t2l) | 0;
	    ah = (t1h + t2h + getCarry(al, t1l)) | 0;
	  }

	  this._al = (this._al + al) | 0;
	  this._bl = (this._bl + bl) | 0;
	  this._cl = (this._cl + cl) | 0;
	  this._dl = (this._dl + dl) | 0;
	  this._el = (this._el + el) | 0;
	  this._fl = (this._fl + fl) | 0;
	  this._gl = (this._gl + gl) | 0;
	  this._hl = (this._hl + hl) | 0;

	  this._ah = (this._ah + ah + getCarry(this._al, al)) | 0;
	  this._bh = (this._bh + bh + getCarry(this._bl, bl)) | 0;
	  this._ch = (this._ch + ch + getCarry(this._cl, cl)) | 0;
	  this._dh = (this._dh + dh + getCarry(this._dl, dl)) | 0;
	  this._eh = (this._eh + eh + getCarry(this._el, el)) | 0;
	  this._fh = (this._fh + fh + getCarry(this._fl, fl)) | 0;
	  this._gh = (this._gh + gh + getCarry(this._gl, gl)) | 0;
	  this._hh = (this._hh + hh + getCarry(this._hl, hl)) | 0;
	};

	Sha512.prototype._hash = function () {
	  var H = Buffer$10.allocUnsafe(64);

	  function writeInt64BE (h, l, offset) {
	    H.writeInt32BE(h, offset);
	    H.writeInt32BE(l, offset + 4);
	  }

	  writeInt64BE(this._ah, this._al, 0);
	  writeInt64BE(this._bh, this._bl, 8);
	  writeInt64BE(this._ch, this._cl, 16);
	  writeInt64BE(this._dh, this._dl, 24);
	  writeInt64BE(this._eh, this._el, 32);
	  writeInt64BE(this._fh, this._fl, 40);
	  writeInt64BE(this._gh, this._gl, 48);
	  writeInt64BE(this._hh, this._hl, 56);

	  return H
	};

	var sha512 = Sha512;

	var Buffer$11 = safeBuffer.Buffer;

	var W$5 = new Array(160);

	function Sha384 () {
	  this.init();
	  this._w = W$5;

	  hash.call(this, 128, 112);
	}

	inherits$2(Sha384, sha512);

	Sha384.prototype.init = function () {
	  this._ah = 0xcbbb9d5d;
	  this._bh = 0x629a292a;
	  this._ch = 0x9159015a;
	  this._dh = 0x152fecd8;
	  this._eh = 0x67332667;
	  this._fh = 0x8eb44a87;
	  this._gh = 0xdb0c2e0d;
	  this._hh = 0x47b5481d;

	  this._al = 0xc1059ed8;
	  this._bl = 0x367cd507;
	  this._cl = 0x3070dd17;
	  this._dl = 0xf70e5939;
	  this._el = 0xffc00b31;
	  this._fl = 0x68581511;
	  this._gl = 0x64f98fa7;
	  this._hl = 0xbefa4fa4;

	  return this
	};

	Sha384.prototype._hash = function () {
	  var H = Buffer$11.allocUnsafe(48);

	  function writeInt64BE (h, l, offset) {
	    H.writeInt32BE(h, offset);
	    H.writeInt32BE(l, offset + 4);
	  }

	  writeInt64BE(this._ah, this._al, 0);
	  writeInt64BE(this._bh, this._bl, 8);
	  writeInt64BE(this._ch, this._cl, 16);
	  writeInt64BE(this._dh, this._dl, 24);
	  writeInt64BE(this._eh, this._el, 32);
	  writeInt64BE(this._fh, this._fl, 40);

	  return H
	};

	var sha384 = Sha384;

	var sha_js = createCommonjsModule(function (module) {
	var exports = module.exports = function SHA (algorithm) {
	  algorithm = algorithm.toLowerCase();

	  var Algorithm = exports[algorithm];
	  if (!Algorithm) throw new Error(algorithm + ' is not supported (we accept pull requests)')

	  return new Algorithm()
	};

	exports.sha = sha;
	exports.sha1 = sha1;
	exports.sha224 = sha224;
	exports.sha256 = sha256;
	exports.sha384 = sha384;
	exports.sha512 = sha512;
	});

	var Buffer$12 = safeBuffer.Buffer;
	var Transform$2 = Stream.Transform;
	var StringDecoder$1 = stringDecoder.StringDecoder;


	function CipherBase (hashMode) {
	  Transform$2.call(this);
	  this.hashMode = typeof hashMode === 'string';
	  if (this.hashMode) {
	    this[hashMode] = this._finalOrDigest;
	  } else {
	    this.final = this._finalOrDigest;
	  }
	  if (this._final) {
	    this.__final = this._final;
	    this._final = null;
	  }
	  this._decoder = null;
	  this._encoding = null;
	}
	inherits$2(CipherBase, Transform$2);

	CipherBase.prototype.update = function (data, inputEnc, outputEnc) {
	  if (typeof data === 'string') {
	    data = Buffer$12.from(data, inputEnc);
	  }

	  var outData = this._update(data);
	  if (this.hashMode) return this

	  if (outputEnc) {
	    outData = this._toString(outData, outputEnc);
	  }

	  return outData
	};

	CipherBase.prototype.setAutoPadding = function () {};
	CipherBase.prototype.getAuthTag = function () {
	  throw new Error('trying to get auth tag in unsupported state')
	};

	CipherBase.prototype.setAuthTag = function () {
	  throw new Error('trying to set auth tag in unsupported state')
	};

	CipherBase.prototype.setAAD = function () {
	  throw new Error('trying to set aad in unsupported state')
	};

	CipherBase.prototype._transform = function (data, _, next) {
	  var err;
	  try {
	    if (this.hashMode) {
	      this._update(data);
	    } else {
	      this.push(this._update(data));
	    }
	  } catch (e) {
	    err = e;
	  } finally {
	    next(err);
	  }
	};
	CipherBase.prototype._flush = function (done) {
	  var err;
	  try {
	    this.push(this.__final());
	  } catch (e) {
	    err = e;
	  }

	  done(err);
	};
	CipherBase.prototype._finalOrDigest = function (outputEnc) {
	  var outData = this.__final() || Buffer$12.alloc(0);
	  if (outputEnc) {
	    outData = this._toString(outData, outputEnc, true);
	  }
	  return outData
	};

	CipherBase.prototype._toString = function (value, enc, fin) {
	  if (!this._decoder) {
	    this._decoder = new StringDecoder$1(enc);
	    this._encoding = enc;
	  }

	  if (this._encoding !== enc) throw new Error('can\'t switch encodings')

	  var out = this._decoder.write(value);
	  if (fin) {
	    out += this._decoder.end();
	  }

	  return out
	};

	var cipherBase = CipherBase;

	function Hash$1 (hash) {
	  cipherBase.call(this, 'digest');

	  this._hash = hash;
	}

	inherits$2(Hash$1, cipherBase);

	Hash$1.prototype._update = function (data) {
	  this._hash.update(data);
	};

	Hash$1.prototype._final = function () {
	  return this._hash.digest()
	};

	var browser$1 = function createHash (alg) {
	  alg = alg.toLowerCase();
	  if (alg === 'md5') return new md5_js()
	  if (alg === 'rmd160' || alg === 'ripemd160') return new ripemd160()

	  return new Hash$1(sha_js(alg))
	};

	var browser$2 = /*#__PURE__*/Object.freeze({
		default: browser$1,
		__moduleExports: browser$1
	});

	exports.Btc = Btc$1;
	exports.TransportWebUSB = TransportWebUSB$1;
	exports.TransportU2F = TransportU2F$1;
	exports.Log = index$3;
	exports.createHash = browser$2;

	Object.defineProperty(exports, '__esModule', { value: true });

})));

window.Btc = NewLedger.Btc.default;
window.TransportWebUSB = NewLedger.TransportWebUSB.default;
window.TransportU2F = NewLedger.TransportU2F.default;
window.Log = NewLedger.Log.default;
window.createHash = NewLedger.createHash.default;
