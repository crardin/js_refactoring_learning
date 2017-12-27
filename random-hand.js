var suits = ['H', 'D', 'S', 'C'];
var values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
var randomSuit = function(){
	return suits[Math.floor(Math.random()*(suits.length))];
};
var randomValue = function(){
	return values[Math.floor(Math.random()*(values.length))];
};
var randomCard = function(){
	return randomValue() + '-' + randomSuit();
};
var randomHand = function(){
	var cards = [];
	var cardArray = buildCardArray();
	cards.push(cardArray.splice(Math.floor(Math.random()*cardArray.length), 1)[0]);
	cards.push(cardArray.splice(Math.floor(Math.random()*cardArray.length), 1)[0]);
	cards.push(cardArray.splice(Math.floor(Math.random()*cardArray.length), 1)[0]);
	cards.push(cardArray.splice(Math.floor(Math.random()*cardArray.length), 1)[0]);
	cards.push(cardArray.splice(Math.floor(Math.random()*cardArray.length), 1)[0]);
	return cards;
};

var buildCardArray = function() {
	var tempArray = [];
	for(var i=0; i< values.length; i++){
		for(var j=0; j<suits.length; j++){
			tempArray.push(values[i] + '-' + suits[j]);
		}
	};
	return tempArray;
};

console.log(randomHand());

const assert = require('assert');
var deepEqual = require('deep-equal');
describe('randomHand()', function(){
	it('returns something', function(){
		var result = randomHand();
		assert(result);
	});
	it('returns something with a length of 5', function(){
		assert(randomHand().length === 5);
	});
});
describe('randomCard()', function(){
	it('returns something', function(){
		var result = randomCard();
		assert(result);
	});
});
describe('buildCardArray()', function(){
	it('does something?', function(){
		assert(buildCardArray());
	});
	it('returns a full deck', function(){
		assert(buildCardArray().length === 52);
	});
});