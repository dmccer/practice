/**
 * 计算 Tower 中一个 Sprint 里自己的 task 数量和时间
 *
 * 使用方法：
 *
 * 1. 打开 tower 选择具体的 sprint
 * 2. 数一下自己的 task 在第几列，设你的 task 在第 n 列
 * 3. 打开浏览器的开发者工具的控制台(Windows chrome 快捷键 (fn + )F12, OSX chrome 快捷键 cmd + alt + i)
 * 4. 复制下面的代码将代码最后一个括号'()' 中的 'n=1' 替换为上面的 n 或 n=n
 * 5. 按回车执行，弹出框或控制台中会显示结果
 *
 * author: Kane xiaoyunhua@ttyhuo.cn
 */

(function(col) {
  var picker = (function() {
    // 2h
    var REG_CASE_1 = /(\d+)h?/;
    // 2h*3
    var REG_CASE_2 = /(\d+)h?\*(\d+)/;

    return function(s) {
      var mc = s.match(REG_CASE_2);
      if (mc && mc.length && mc.length === 3) {
        return parseInt(mc[1]) * parseInt(mc[2]);
      }

      var m = s.match(REG_CASE_1);

      if (m && m.length) {
        if (m.length === 1) {
          return parseInt(m[0]);
        }

        if (m.length === 2) {
          return parseInt(m[1]);
        }

        return parseInt(m[0]);
      }
    };
  })();

  function tiper(msg) {
    console.log(msg);
    alert(msg);
  }

  function countAll() {
    var $cols = $(".ui-sortable");
    var ret = [];

    $cols.each(function(index) {
      var r = countCol(index);
      ret.push(r);
    });

    var total = 0,
      count = 0,
      max = ret[0];
    ret.forEach(function(r) {
      total += r.total;
      count += r.count;

      if (max.total < r.total) {
        max = r;
      }
    });

    return {
      total: total,
      count: count,
      ret: ret,
      max: max
    };
  }

  function countCol(col) {
    var $cols = $(".ui-sortable");
    var $col = $cols.eq(col);
    var $raws = $col.find(".todo .raw");
    var hours = [],
      total = 0;

    $raws.each(function() {
      var s = $(this).text();
      var r = picker(s);

      if (r != null) {
        hours.push(r);
      }
    });

    if (hours.length) {
      total = hours.reduce(function(a, b) {
        return a + b;
      }, 0);
    }

    // 列的标题
    var title = $.trim($(".title .name", $col).text()).replace(/\n/g, "");

    return {
      title: title,
      hours: hours,
      total: total,
      count: $raws.length
    };
  }

  function start() {
    if (typeof col !== "number") {
      tiper("请输入第几列");

      return;
    }

    var all = countAll();
    var r = all.ret[col - 1];
    var taskPercentage = Math.round((r.count / all.count) * 100);
    var hourPercentage = Math.round((r.total / all.total) * 100);
    var maxTaskPercentage = Math.round((all.max.count / all.count) * 100);
    var maxHourPercentage = Math.round((all.max.total / all.total) * 100);

    tiper(
      `
      "${r.title}" 的 Task 总数: ${r.count}个(${taskPercentage}%), 总时长: ${
        r.total
      }h(${hourPercentage}%)\n
      本期 Task 总数: ${all.count}个, 总时长: ${all.total}h\n
      MVP 是 "${all.max.title}" 共 ${
        all.max.count
      }个(${maxTaskPercentage}%) Task, 耗时 ${
        all.max.total
      }h(${maxHourPercentage}%)
      `
    );
  }

  start();
})((n = 1));
