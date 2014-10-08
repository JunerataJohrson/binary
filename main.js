document.addEventListener('DOMContentLoaded', function(){
	binaryConversion();
	binaryAddition();
});

function binaryConversion() {
	var form = document.getElementById('binaryForm');
	var result = document.getElementById('result');
	var binaryValueField = document.getElementById('binaryValue');

	form.addEventListener('submit', function(e){
		e.preventDefault();

		try{
			binaryValue = binaryValueField.value;
			binNum = new Binary(binaryValue);
			result.innerHTML = binNum.toDenary();
		}catch(error){
			result.innerHTML = error;
		}
	});
}

function binaryAddition() {
	var form = document.getElementById('additionForm');
	var num1 = document.getElementById('num1');
	var num2 = document.getElementById('num2');
	var resultBox = document.getElementById('result2');

	form.addEventListener('submit', function(e){
		e.preventDefault();
		var bin1 = new Binary(num1.value);
		var bin2 = new Binary(num2.value);

		var result = bin1.add(bin2);
		resultBox.innerHTML = bin1.toDenary();
		
	});
}