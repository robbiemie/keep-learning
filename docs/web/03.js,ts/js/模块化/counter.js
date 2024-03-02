// counter.js
let count = 0;

module.exports = {
  count,
  getCount: function() {
    return count;
  },
  increment: function() {
    count++;
  }
};
