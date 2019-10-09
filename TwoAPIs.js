// var data = null;
//
// var xhr = new XMLHttpRequest();
// xhr.withCredentials = true;
//
// xhr.addEventListener("readystatechange", function () {
// 	if (this.readyState === this.DONE) {
//
// 		console.log(this.responseText);
// 	}
// });
//
// xhr.open("GET", "https://recipe-puppy.p.rapidapi.com/?p=1&i=onions%2Cgarlic&q=omelet");
// xhr.setRequestHeader("x-rapidapi-host", "recipe-puppy.p.rapidapi.com");
// xhr.setRequestHeader("x-rapidapi-key", "636f281abemshf2f10570570279dp10170ajsn3c5b24fe3431");
//
// xhr.send(data);


var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://food-calorie-data-search.p.rapidapi.com/api/search?keyword=apple");
xhr.setRequestHeader("x-rapidapi-host", "food-calorie-data-search.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "636f281abemshf2f10570570279dp10170ajsn3c5b24fe3431");

xhr.send(data);
