//Function to perform speech synthesis

function speak(text){
	if(text != ""){
		if("speechSynthesis" in window){
			//Perform 
			var speech = new SpeechSynthesisUtterance(text);
			speech.lang = 'en-US';
			window.speechSynthesis.speak(speech);
		}else{
			alert("Speech synthesis is not supported");
		}
	}
}