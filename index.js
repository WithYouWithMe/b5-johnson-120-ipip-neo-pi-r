"use strict";

var _require = require('knuth-shuffle'),
knuthShuffle = _require.knuthShuffle;
var languages = require('./data/languages.json')

export function getItems(lang, shuffle) {
  var lang = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'en';
  var shuffle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var choices, questions
  try {
    questions = require("./data/".concat(lang, "/questions.json"))
    choices = require("./data/".concat(lang, "/choices"))
  } catch (error) {
    throw new Error('Inventory not found. Try another language input.')
  }

  var inventory = shuffle === true ? knuthShuffle(questions) : questions
  return inventory.map(function (question, i) {
    return Object.assign(question, { num: ++i, choices: choices[question.keyed] });
  })
}

export function getInfo() {
  return {
    name: "Johnson's IPIP NEO-PI-R",
    id: 'johnson-120-ipip-neo-pi-r',
    shortId: 'b5-120',
    time: 10,
    questions: 120,
    note: 'Recommended',
    languages: languages
  }
}
