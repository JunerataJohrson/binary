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
			return parseInt(digit);
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
	
	return Binary;
})();