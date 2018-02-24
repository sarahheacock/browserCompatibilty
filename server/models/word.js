const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const word = new Schema = ({
  word: { type: String, required: true },
  link: { type: String, required: true },
  chrome: { type: String, required: true},
  edge: { type: String, required: true},
  firefox: { type: String, required: true},
  ie: { type: String, required: true},
  opera: { type: String, required: true},
  safari: { type: String, required: true},
  webview_android: { type: String, required: true},
  chrome_android: { type: String, required: true},
  edge_mobile: { type: String, required: true},
  firefox_android: { type: String, required: true},
  opera_android: { type: String, required: true},
  safari_ios: { type: String, required: true},
  samsunginternet_android: { type: String, required: true},
  nodejs: { type: String, required: true},
  bc-has-history: { type: String, required: true}
})

module.exports = word;
