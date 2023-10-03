// API documentation
var word = 'code'
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/dictionary?word=' + word,
    headers: { 'X-Api-Key': 'rX6vvYiDoRnMa28VGTt1jQ==6bffO0Bb1ns96Rua'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});