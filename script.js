var close = document.querySelector("#cookiecon")

function remove(element) {
    console.log(element);
    var el = document.getElementById(element)
    console.log(el);
    el.remove()
}

var unit = document.querySelector('#degrees').value
var temps = document.getElementsByClassName('tempnum')

for(var i = 0; i < temps.length; i++){
    console.log(temps[i].innerHTML)
}


function changeUnit(element) {
    unit = element.value
    convertF(unit)
}

function convertF(unit) {

    if(unit == 'F'){
        for(var i = 0; i < temps.length; i++){
            temps[i].innerHTML = Math.round(((temps[i].innerHTML * 1.8) + 32) * 10) /10
        }
    } else{
        for(var i = 0; i < temps.length; i++){
            
            temps[i].innerHTML = Math.round(((temps[i].innerHTML - 32)  * .5556)* 10)/10
        }
    }


}