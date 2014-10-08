var Binary = (function(){

	function Binary(value) {
		this.setValue(value);
	}

	Binary.prototype.getValue = function(){
		return this._value;
	};

	Binary.prototype.setValue = function(value){
		this._value = value;
		this._digits = value.toString().split("").map(function(digit){
			if (digit == '1' || digit == '0') {
				return parseInt(digit);
			}else{
				throw "Digits must be either 1 or 0";
			}
		});
	};


	Binary.prototype.toDenary = function(){
		var remainder = 0;
		var digits = this._digits;
		var foundFirstOne = false;

		for (var i=0; i<digits.length; i++){
			var digit = digits[i];

			if (!foundFirstOne) {
				if (digit === 1) {
					foundFirstOne = true;
					remainder = 1;
				}
			}else{
				remainder = 2 * remainder + digit;
			}
		}
		return remainder;
	}

	Binary.prototype.add = function(numberToAdd){
		if (numberToAdd instanceof Binary) {

			var num1 = this._digits;
			var num2 = numberToAdd._digits;
			var newNum = [];

			var lengthOfNum1 = num1.length;
			var lengthOfNum2 = num2.length;

			var length = Math.max(lengthOfNum1, lengthOfNum2);

			var num1Rev = num1.reverse();
			var num2Rev = num2.reverse();

			var carry = 0;
			var i = 0;
			while (carry || i < length){
				num1 = num1Rev[i] || 0;
				num2 = num2Rev[i] || 0;

				var workingValue = num1 + num2 + carry;
				carry = 0;
				if (workingValue > 1) {
					carry = 1;
				};
				newNum[i] = workingValue % 2;
				i++;
			}
			this.setValue(newNum.reverse().join(''));

		}else{
			throw "Cannot add a non binary number";
		}
	};
	
	return Binary;
})();