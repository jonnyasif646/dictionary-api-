var url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

function change() {
    var word = document.getElementById('input').value;
    fetch(`${url}${word}`)
        .then(response => response.json())
        .then(data => {
            // Assuming the API response structure, accessing data
            var wordText = data[0].word;
            var meaningText = data[0].meanings[0].definitions[0].definition;
            var partOfSpeechText = data[0].meanings[0].partOfSpeech;

            // Update the HTML with the retrieved data
            document.querySelector("h3:nth-of-type(1)").textContent = "Word: " + wordText;
            document.querySelector("h3:nth-of-type(2)").textContent = "Meaning (" + partOfSpeechText + "): " + meaningText;
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle error, e.g., display a message to the user
        });
}
