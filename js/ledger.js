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

	      var processWholeScriptBlock = function processWholeScriptBlock(script, sequence) {
	        return _this.getTrustedInputRaw(Buffer.concat([script, sequence]));
	      };

	      var processInputs = function processInputs() {
	        return (0, utils.eachSeries)(inputs, function (input) {
	          var treeField = isDecred ? input.tree || Buffer.from([0x00]) : Buffer.alloc(0);
	          var data = Buffer.concat([input.prevout, treeField, _this.createVarint(input.script.length)]);
	          return _this.getTrustedInputRaw(data).then(function () {
	            // iteration (eachSeries) ended
	            // TODO notify progress
	            // deferred.notify("input");
	            return isDecred ? processWholeScriptBlock(input.script, input.sequence) : processScriptBlocks(input.script, input.sequence);
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

	      var _this6 = this;

	      var segwit = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
	      var transactionVersion = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : DEFAULT_VERSION;

	      // Inputs are provided as arrays of [transaction, output_index, redeem script, optional sequence]
	      // associatedKeysets are provided as arrays of [path]
	      var nullScript = Buffer.alloc(0);
	      var nullPrevout = Buffer.alloc(0);
	      var defaultVersion = Buffer.alloc(4);
	      defaultVersion.writeUInt32LE(transactionVersion, 0);
	      var trustedInputs = [];
	      var regularOutputs = [];
	      var signatures = [];
	      var firstRun = true;
	      var resuming = false;
	      var targetTransaction = {
	        inputs: [],
	        version: defaultVersion
	      };

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
	              signatures.push(segwit ? signature.toString("hex") : signature.slice(0, signature.length - 1).toString("hex"));
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
	exports.StatusCodes = exports.DBNotReset = exports.DBWrongPassword = exports.NoDBPathGiven = exports.FirmwareOrAppUpdateRequired = exports.LedgerAPI5xx = exports.LedgerAPI4xx = exports.GenuineCheckFailed = exports.PairingFailed = exports.SyncError = exports.FeeRequired = exports.FeeNotLoaded = exports.CantScanQRCode = exports.ETHAddressNonEIP = exports.WrongDeviceForAccount = exports.WebsocketConnectionFailed = exports.WebsocketConnectionError = exports.DeviceShouldStayInApp = exports.TransportInterfaceNotAvailable = exports.TransportOpenUserCancelled = exports.UserRefusedOnDevice = exports.UserRefusedAllowManager = exports.UserRefusedFirmwareUpdate = exports.UserRefusedAddress = exports.UserRefusedDeviceNameChange = exports.UpdateYourApp = exports.UnexpectedBootloader = exports.TimeoutTagged = exports.PasswordIncorrectError = exports.PasswordsDontMatchError = exports.NotEnoughBalanceBecauseDestinationNotCreated = exports.NotEnoughBalance = exports.NoAddressesFound = exports.NetworkDown = exports.ManagerUninstallBTCDep = exports.ManagerNotEnoughSpaceError = exports.ManagerDeviceLockedError = exports.ManagerAppRelyOnBTCError = exports.ManagerAppAlreadyInstalledError = exports.LedgerAPINotAvailable = exports.LedgerAPIErrorWithMessage = exports.LedgerAPIError = exports.UnknownMCU = exports.LatestMCUInstalledError = exports.InvalidAddressBecauseDestinationIsAlsoSource = exports.InvalidAddress = exports.HardResetFail = exports.FeeEstimationFailed = exports.EthAppPleaseEnableContractData = exports.EnpointConfigError = exports.DisconnectedDeviceDuringOperation = exports.DisconnectedDevice = exports.DeviceSocketNoBulkStatus = exports.DeviceSocketFail = exports.DeviceNameInvalid = exports.DeviceHalted = exports.DeviceInOSUExpected = exports.DeviceOnDashboardExpected = exports.DeviceNotGenuineError = exports.DeviceGenuineSocketEarlyClose = exports.DeviceAppVerifyNotSupported = exports.CurrencyNotSupported = exports.CantOpenDevice = exports.BtcUnmatchedApp = exports.BluetoothRequired = exports.AccountNameRequiredError = exports.addCustomErrorDeserializer = exports.createCustomErrorClass = exports.deserializeError = exports.serializeError = undefined;
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
	var lib_31 = lib.NotEnoughBalanceBecauseDestinationNotCreated;
	var lib_32 = lib.NotEnoughBalance;
	var lib_33 = lib.NoAddressesFound;
	var lib_34 = lib.NetworkDown;
	var lib_35 = lib.ManagerUninstallBTCDep;
	var lib_36 = lib.ManagerNotEnoughSpaceError;
	var lib_37 = lib.ManagerDeviceLockedError;
	var lib_38 = lib.ManagerAppRelyOnBTCError;
	var lib_39 = lib.ManagerAppAlreadyInstalledError;
	var lib_40 = lib.LedgerAPINotAvailable;
	var lib_41 = lib.LedgerAPIErrorWithMessage;
	var lib_42 = lib.LedgerAPIError;
	var lib_43 = lib.UnknownMCU;
	var lib_44 = lib.LatestMCUInstalledError;
	var lib_45 = lib.InvalidAddressBecauseDestinationIsAlsoSource;
	var lib_46 = lib.InvalidAddress;
	var lib_47 = lib.HardResetFail;
	var lib_48 = lib.FeeEstimationFailed;
	var lib_49 = lib.EthAppPleaseEnableContractData;
	var lib_50 = lib.EnpointConfigError;
	var lib_51 = lib.DisconnectedDeviceDuringOperation;
	var lib_52 = lib.DisconnectedDevice;
	var lib_53 = lib.DeviceSocketNoBulkStatus;
	var lib_54 = lib.DeviceSocketFail;
	var lib_55 = lib.DeviceNameInvalid;
	var lib_56 = lib.DeviceHalted;
	var lib_57 = lib.DeviceInOSUExpected;
	var lib_58 = lib.DeviceOnDashboardExpected;
	var lib_59 = lib.DeviceNotGenuineError;
	var lib_60 = lib.DeviceGenuineSocketEarlyClose;
	var lib_61 = lib.DeviceAppVerifyNotSupported;
	var lib_62 = lib.CurrencyNotSupported;
	var lib_63 = lib.CantOpenDevice;
	var lib_64 = lib.BtcUnmatchedApp;
	var lib_65 = lib.BluetoothRequired;
	var lib_66 = lib.AccountNameRequiredError;
	var lib_67 = lib.addCustomErrorDeserializer;
	var lib_68 = lib.createCustomErrorClass;
	var lib_69 = lib.deserializeError;
	var lib_70 = lib.serializeError;
	var lib_71 = lib.TransportError;
	var lib_72 = lib.getAltStatusMessage;
	var lib_73 = lib.TransportStatusError;

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

	unwrapExports(lib$2);
	var lib_1$2 = lib$2.log;
	var lib_2$2 = lib$2.listen;

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

	exports.Btc = Btc$1;
	exports.TransportWebUSB = TransportWebUSB$1;

	Object.defineProperty(exports, '__esModule', { value: true });

})));

window.Btc = NewLedger.Btc.default;
window.TransportWebUSB = NewLedger.TransportWebUSB.default;