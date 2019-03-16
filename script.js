//{} object []array
//.new is alredy exist in the lanuguage ex data.new(1997,6,23),
//var people={Shani: 'funny', Alyssa: 'determined', Eric: 'Smaet'};
//var month={Jan: '1', Feb: '2', March: '3', April:'4
//retervies info [GEt,post to create ,Put to add , delete to delete]
let request = new XMLHttpRequest();
let url = "https://api.adviceslip.com/advice";
//let url = "https://favqs.com/api/qotd";
request.open("GET",url,true);//asinc to get multiple
//"onload"-event handler, runs function on page load
request.onload = function()
{
    //BEgin accessing JSON data here. Data stored in request.response
   let data = JSON.parse(this.response);
   let advice = document.getElementById("advice");
   //conditional only populate when request is successful
   if(request.status >= 200 && request.status < 400)
   {
       //fill object with data from data
       advice.innerHTML = data.slip.advice;
        //advice.innerHTML = data.name.capital;
       
       
   }
   
  //request.send(); 
    
};
request.send();



