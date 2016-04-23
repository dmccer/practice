// 计算一个 Sprint 中自己的 task 数量和时间
// 使用方法：
// 1. 打开 tower 选择具体的 sprint
// 2. 数一下自己的 task 在第几列，设你的 task 在第 n 列
// 3. 打开浏览器的开发者工具的控制台(Windows chrome 快捷键 (fn + )F12, OSX chrome 快捷键 cmd + alt + i)
// 4. 复制下面的代码将代码最后一个括号'()' 中的 '/* 第几列 */' 替换为上面的 n
// 5. 按回车执行，弹出框或控制台中会显示结果

(function(col) {
  var REG = /(\d+)h?/;
  var REG_C = /(\d+)h?\*(\d+)/;
  var raws = $('.ui-sortable').eq(col - 1).find('.todo .raw');
  var hours = [];
  raws.each(function(index, raw) {
    var s = $(this).text();

    var mc = s.match(REG_C);
    if (mc && mc.length && mc.length === 3) {
      return hours.push(parseInt(mc[1]) * parseInt(mc[2]));
    }

    var m = s.match(REG);

    if (m && m.length) {
      if (m.length === 1) {
        return hours.push(parseInt(m[0]));
      }

      if (m.length === 2) {
        return hours.push(parseInt(m[1]));
      }

      return hours.push(parseInt(m[0]));
    }
  });
  var total = hours.reduce(function(a, b) {
    return a + b;
  }, 0);

  console.log('本期您的 Task 总数: ' + raws.length + '个');
  console.log('总时长: ' + total + 'h');

  alert('本期您的 Task 总数: ' + raws.length + '个\n' + '总时长: ' + total + 'h');
})(/* 第几列 */);
