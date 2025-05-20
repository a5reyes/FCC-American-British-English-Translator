const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {
    americanToBritish(input){
        //american_only; american to british
        let check_words = input.toLowerCase().split(" ");
        let american_keys = Object.keys(americanOnly).filter(key => input.includes(key));
        american_keys = this.doubleChecker(check_words, american_keys);
        if(american_keys.length > 0){
            american_keys.forEach(american_key => {
                input = input.replace(american_key, `<span class="highlight">${americanOnly[american_key]}</span>`);
            });
        }
        //american_to_british_spelling
        const usa_spelling_keys = Object.keys(americanToBritishSpelling).filter(key => input.includes(key));
        if(usa_spelling_keys.length > 0){
            usa_spelling_keys.forEach(usa_spelling_key => {
                input = input.replace(usa_spelling_key, `<span class="highlight">${americanToBritishSpelling[usa_spelling_key]}</span>`);
            });
        } 
        //check for american titles; american to british
        let updatedText = "";
        let american_title_keys = Object.keys(americanToBritishTitles).filter(key => input.toLowerCase().includes(key));
        let check_titles = input.toLowerCase().split(" ");
        american_title_keys = this.doubleChecker(check_titles, american_title_keys);
        if(american_title_keys.length > 0){
            american_title_keys.forEach(american_title_key => {
                updatedText = input.toLowerCase().replace(american_title_key, americanToBritishTitles[american_title_key]);
                let pos = 0
                const toggledStr = updatedText.replace(/[a-zA-Z]/g, (char) => {
                    let compareChar = input[pos] || '';
                    while (pos < input.length){
                        if (/[a-zA-Z]/.test(compareChar)) {
                            break; 
                        }
                        pos++;
                        compareChar = input[pos] || ''; 
                    }
                    pos++;
                    if (char === compareChar) {
                        return char;
                    } else {
                        if (compareChar === compareChar.toUpperCase()){
                            return char.toUpperCase();
                        } else {
                            return char.toLowerCase();
                        }
                    }
                });
                let title_start_index = toggledStr.toLowerCase().indexOf(americanToBritishTitles[american_title_key]);
                let title_end_index = title_start_index + americanToBritishTitles[american_title_key].length - 1;
                input = toggledStr.slice(0, title_start_index) + `<span class="highlight">${toggledStr.slice(title_start_index, title_end_index + 1)}</span>` + toggledStr.slice(title_end_index + 1, toggledStr.length);
            }); 
        } 
        // change hh:mm to hh.mm
        let text = input.match(/\d{1,2}:\d{1,2}/) ? input.replace(/(\d{1,2}):(\d{1,2})/g, `<span class="highlight">$1.$2</span>`) : input;
        return text;
    };

    britishToAmerican(input){
        //british_only; british to american
        let british_keys = Object.keys(britishOnly).filter(key => input.includes(key));
        if(british_keys.length > 0){
            british_keys.forEach(british_key => {
                input = input.replace(british_key, `<span class="highlight">${britishOnly[british_key]}</span>`);
            });
        } 
        //british_to_american_spelling
        const uk_spelling_vals  = Object.values(americanToBritishSpelling).filter(val => input.includes(val));
        if(uk_spelling_vals.length > 0){
            uk_spelling_vals.forEach(uk_spelling_val => {
                let uk_spelling_key = Object.keys(americanToBritishSpelling).find(key => americanToBritishSpelling[key] == uk_spelling_val);
                input = input.replace(uk_spelling_val, `<span class="highlight">${uk_spelling_key}</span>`);
            });
        } 
        //check for british titles; british to american
        let updatedText = "";
        let british_title_vals = Object.values(americanToBritishTitles).filter(val => input.toLowerCase().includes(val));
        let check_titles = input.toLowerCase().split(" ");
        british_title_vals = this.doubleChecker(check_titles, british_title_vals);
        if(british_title_vals.length > 0){
            british_title_vals.forEach(british_title_val => {
                let british_title_key = Object.keys(americanToBritishTitles).find(key => americanToBritishTitles[key] == british_title_val);
                updatedText = input.toLowerCase().replace(british_title_val, british_title_key);
                let pos = 0
                const toggledStr = updatedText.replace(/[a-zA-Z]/g, (char) => {
                    let compareChar = input[pos] || '';
                    while (pos < input.length){
                        if (/[a-zA-Z]/.test(compareChar)) {
                            break; 
                        }
                        pos++;
                        compareChar = input[pos] || ''; 
                    }
                    pos++;
                    if (char === compareChar) {
                        return char;
                    } else {
                        if (compareChar === compareChar.toUpperCase()){
                            return char.toUpperCase();
                        } else {
                            return char.toLowerCase();
                        }
                    }
                });
                let title_start_index = toggledStr.toLowerCase().indexOf(british_title_val);
                let title_end_index = title_start_index + british_title_val.length - 1;
                input = toggledStr.slice(0, title_start_index) + `<span class="highlight">${toggledStr.slice(title_start_index, title_end_index + 2)}</span>` + toggledStr.slice(title_end_index + 2, toggledStr.length);
            });
        }
        // change hh.mm to hh:mm
        let text = input.match(/\d{1,2}.\d{1,2}/) ? input.replace(/(\d{1,2}).(\d{1,2})/g, `<span class="highlight">$1:$2</span>`) : input;
        return text;
    };

    doubleChecker(input, arr){
        for(let str of arr){
            for(let word of input){
                word = word.replace(/[.,!?]/g, '');
                if(word == str){
                    arr = [word]
                }
            }
        }
        return arr
    }
}

module.exports = Translator;
