'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      let {text, locale} = req.body;
      if (!locale || text == undefined){
        res.json({ error: "Required field(s) missing" });
      }
      if (text == ""){
        res.json({ error: "No text to translate" });
      }
      if (locale !== "american-to-british" && locale !== "british-to-american") {
        res.json({ error: "Invalid value for locale field" });
      }
      let translationText = ""
      if (locale == "american-to-british"){
        translationText = translator.americanToBritish(text);
      } else if (locale == "british-to-american"){
        translationText = translator.britishToAmerican(text);
      } 
      if (translationText === text || !translationText){
        res.json({ text, translation: "Everything looks good to me!" });
      } else {
        console.log(translationText);
        res.json({ text, translation: translationText });
      }
    });
};
