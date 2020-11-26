
function isValidForm(){
    var width = document.forms["rectangleForm"]["width"].value;
    var height = document.forms["rectangleForm"]["height"].value;
    var color = document.getElementById("colors").value;
    if(width <= 0 || height <= 0){
        alert("Width and Height must be positive numbers")
        clearForm();
        return false;
    }
    
    return true;
}


// Clear form after input user details to table
function clearForm(){
    document.forms["rectangleForm"]["width"].value = "";
    document.forms["rectangleForm"]["height"].value = "";
    document.getElementById("colors").value = "#ffffff";
}


function displayRectangles(){
    clearRectangles();

    var request = new XMLHttpRequest();
    request.open('GET', '/getRectangles', true);
    request.onload = function(){
        var data = JSON.parse(this.response)
        data.forEach((rectangle) => {
            var width = rectangle.width * 10;
            var height = rectangle.height * 10;
            // var color = element.color;
            const div = document.createElement('div');
            div.classList.add("rectangle");
            div.innerHTML = `<label>${rectangle.width}x${rectangle.height}</label><div style="width:${width}px;height:${height}px;border:1px solid #000;background-color: ${rectangle.color};"></div>`;
            document.querySelector('.rectangle-container').appendChild(div);
        });
    };

    request.send();
    
}


function clearRectangles(){
    document.querySelector('.rectangle-container').innerHTML = ``;
}

