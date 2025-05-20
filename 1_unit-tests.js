const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
let translator = new Translator();

suite('Unit Tests', () => {
    // #1 - Translate Mangoes are my favorite fruit. to British English
    test('#1', function(done){
        let input1 = "Mangoes are my favorite fruit.";
        assert.equal(translator.americanToBritish(input1), 'Mangoes are my <span class="highlight">favourite</span> fruit.');
        done();
    });
    // #2 - Translate I ate yogurt for breakfast. to British English
    test('#2', function(done){
        let input2 = "I ate yogurt for breakfast.";
        assert.equal(translator.americanToBritish(input2), 'I ate <span class="highlight">yoghurt</span> for breakfast.');
        done();
    });
    // #3 - Translate We had a party at my friend's condo. to British English
    test('#3', function(done){
        let input3 = "We had a party at my friend's condo.";
        assert.equal(translator.americanToBritish(input3), `We had a party at my friend's <span class="highlight">flat</span>.`);
        done();
    });
    // #4 - Translate Can you toss this in the trashcan for me? to British English
    test('#4', function(done){
        let input4 = "Can you toss this in the trashcan for me?";
        assert.equal(translator.americanToBritish(input4), 'Can you toss this in the <span class="highlight">bin</span> for me?');
        done();
    });
    // #5 - Translate The parking lot was full. to British English
    test('#5', function(done){
        let input5 = "The parking lot was full.";
        assert.equal(translator.americanToBritish(input5), 'The <span class="highlight">car park</span> was full.');
        done();
    });
    // #6 - Translate Like a high tech Rube Goldberg machine. to British English
    test('#6', function(done){
        let input6 = "Like a high tech Rube Goldberg machine.";
        assert.equal(translator.americanToBritish(input6), 'Like a high tech <span class="highlight">Heath Robinson device</span>.');
        done();
    });
    // #7 - Translate To play hooky means to skip class or work. to British English
    test('#7', function(done){
        let input7 = "To play hooky means to skip class or work.";
        assert.equal(translator.americanToBritish(input7), 'To <span class="highlight">bunk off</span> means to skip class or work.');
        done();
    });
    // #8 - Translate No Mr. Bond, I expect you to die. to British English
    test('#8', function(done){
        let input8 = "No Mr. Bond, I expect you to die.";
        assert.equal(translator.americanToBritish(input8), 'No <span class="highlight">Mr</span> Bond, I expect you to die.');
        done();
    });
    // #9 - Translate Dr. Grosh will see you now. to British English
    test('#9', function(done){
        let input9 = "Dr. Grosh will see you now.";
        assert.equal(translator.americanToBritish(input9), '<span class="highlight">Dr</span> Grosh will see you now.');
        done();
    });
    // #10 - Translate Lunch is at 12:15 today. to British English
    test('#10', function(done){
        let input10 = "Lunch is at 12:15 today.";
        assert.equal(translator.americanToBritish(input10), 'Lunch is at <span class="highlight">12.15</span> today.');
        done();
    });
    // #11 - Translate We watched the footie match for a while. to American English
    test('#11', function(done){
        let input11 = 'We watched the footie match for a while.';
        assert.equal(translator.britishToAmerican(input11), 'We watched the <span class="highlight">soccer</span> match for a while.');
        done();
    });
    // #12 - Translate Paracetamol takes up to an hour to work. to American English
    test('#12', function(done){
        let input12 = "Paracetamol takes up to an hour to work.";
        assert.equal(translator.britishToAmerican(input12), '<span class="highlight">Tylenol</span> takes up to an hour to work.');
        done();
    });
    // #13 - Translate First, caramelise the onions. to American English
    test('#13', function(done){
        let input13 = "First, caramelise the onions.";
        assert.equal(translator.britishToAmerican(input13), 'First, <span class="highlight">caramelize</span> the onions.');
        done();
    });
    // #14 - Translate I spent the bank holiday at the funfair. to American English
    test('#14', function(done){
        let input14 = "I spent the bank holiday at the funfair.";
        assert.equal(translator.britishToAmerican(input14), 'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.');
        done();
    });
    // #15 - Translate I had a bicky then went to the chippy. to American English
    test('#15', function(done){
        let input15 = "I had a bicky then went to the chippy.";
        assert.equal(translator.britishToAmerican(input15), 'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.');
        done();
    });
    // #16 - Translate I've just got bits and bobs in my bum bag. to American English
    test('#16', function(done){
        let input16 = "I've just got bits and bobs in my bum bag.";
        assert.equal(translator.britishToAmerican(input16), `I've just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.`);
        done();
    });
    // #17 - Translate The car boot sale at Boxted Airfield was called off. to American English
    test('#17', function(done){
        let input17 = "The car boot sale at Boxted Airfield was called off.";
        assert.equal(translator.britishToAmerican(input17), 'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.');
        done();
    });
    // #18 - Translate Have you met Mrs Kalyani? to American English
    test('#18', function(done){
        let input18 = "Have you met Mrs Kalyani?";
        assert.equal(translator.britishToAmerican(input18), 'Have you met <span class="highlight">Mrs.</span> Kalyani?');
        done();
    });
    // #19 - Translate Prof Joyner of King's College, London. to American English
    test('#19', function(done){
        let input19 = "Prof Joyner of King's College, London.";
        assert.equal(translator.britishToAmerican(input19), `<span class="highlight">Prof.</span> Joyner of King's College, London.`);
        done();
    });
    // #20 - Translate Tea time is usually around 4 or 4.30. to American English
    test('#20', function(done){
        let input20 = "Tea time is usually around 4 or 4.30.";
        assert.equal(translator.britishToAmerican(input20), 'Tea time is usually around 4 or <span class="highlight">4:30</span>.');
        done();
    });
    // #21 - Highlight translation in Mangoes are my favorite fruit.
    test('#21', function(done){
        let input21 = "Mangoes are my favorite fruit.";
        assert.equal(translator.americanToBritish(input21), 'Mangoes are my <span class="highlight">favourite</span> fruit.');
        done();
    });
    // #22 - Highlight translation in I ate yogurt for breakfast.
    test('#22', function(done){
        let input22 = "I ate yogurt for breakfast.";
        assert.equal(translator.americanToBritish(input22), 'I ate <span class="highlight">yoghurt</span> for breakfast.');
        done();
    });
    // #23 - Highlight translation in We watched the footie match for a while.
    test('#23', function(done){
        let input23 = "We watched the footie match for a while.";
        assert.equal(translator.britishToAmerican(input23), `We watched the <span class="highlight">soccer</span> match for a while.`);
        done();
    });
    // #24 - Highlight translation in Paracetamol takes up to an hour to work.
    test('#24', function(done){
        let input24 = "Paracetamol takes up to an hour to work.";
        assert.equal(translator.britishToAmerican(input24), '<span class="highlight">Tylenol</span> takes up to an hour to work.');
        done();
    });
});
