var test = require('.');

// Test 1: No options
test.benchmark('Baseline', {
  baseline: true,
  create: function (cb) {
    cb(null, {});
  },
  destroy: function (cb) { cb() }, // Pass
  numItems: 200000,
}, function (err) {
  if (err) console.log ('Looks like there was an error', err);
  process.exit(0);
});
