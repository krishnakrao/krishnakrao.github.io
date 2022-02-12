var data = {rss: "https://medium.com/feed/@kkrao"}
$.get(https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40kkrao, data, funciton(response){
//Checking Response Status
if (response.status == 'ok') {
   //Define a variable
   var output = '';
   //Response
   $.each(response.items, function (k, item) {
      //Code to be Iterated
      return k < 10;
   });
 }
});
