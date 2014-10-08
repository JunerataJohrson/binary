document.addEventListener('DOMContentLoaded', function(){
	// DOM Cache
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
});