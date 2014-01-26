"use strict";

module.exports = {
  reporter: function (results, data, opts) {
    var len = results.length;
    var str = '';
    var prevfile;

    opts = opts || {};

    results.forEach(function (result) {
      var file = result.file;
      var error = result.error;

      if (prevfile && prevfile !== file) {
        str += "\n";
      }
      prevfile = file;

      str += file  + ': line ' + error.line + ', col ' +
        error.ch + ', ' + error.message;

      if (opts.verbose) {
        str += ' (' + error.code + ')';
      }

      str += '\n';
    });

    if (str) {
      process.stdout.write(str + "\n" + len + ' error' + ((len === 1) ? '' : 's') + "\n");
    }
  }
};
