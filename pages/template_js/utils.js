/* rpx转px */
function getElementPX(obj) {
  var elePX = obj / 750 * wx.getSystemInfoSync().windowWidth;
  return elePX;
}

/* px转rpx */
function getElementRPX(obj) {
  var eleRPX = obj * 750 / wx.getSystemInfoSync().windowWidth;
  return eleRPX;
}

module.exports = {
  getElementPX: getElementPX,
  getElementRPX: getElementRPX,
};