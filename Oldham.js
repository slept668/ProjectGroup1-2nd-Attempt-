for(let i = 1000; i > 0; i-=2) {
    console.log(i);
}

for(let i = 0; i <= 10000; i++) {
    if(i === 2500) {
        alert("A quarter of the way there!");
    }
    if(i === 5000) {
        alert("Halfway there!");
    }
    if(i === 10000) {
        alert("The loop is done!");
    }
}

var movieArray = ["You Don't Mess with the Zohan", "Happy Gilmore", "Billy Madison", "The Waterboy", "The Longest yard"];

for(let i = 0; i < movieArray.length; i++) {
    console.log("My #" + (i + 1)  + " favorite movie is " + movieArray[i])
}