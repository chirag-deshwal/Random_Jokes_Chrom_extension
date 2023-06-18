var myJoke = "Nothing is here"


fetch("https://icanhazdadjoke.com/slack")
.then(data => data.json())
.then(jokeData => {
    const joke = jokeData.attachments[0].text;

    
    const jokeTxt = document.getElementById("jokeElement");
 
 
   //save the joke 
    myJoke = joke;

    //Display Joke on html text
    jokeTxt.innerHTML = joke;
})





