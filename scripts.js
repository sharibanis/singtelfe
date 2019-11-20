var myParent = document.body;
const app = document.getElementById('root')
var request = new XMLHttpRequest()
request.open('GET', 'https://pb-api.herokuapp.com/bars', false)
request.onload = function() {
  var data = JSON.parse(this.response)
  window.jsonData = data
  console.table(window.jsonData);
   if (request.status >= 200 && request.status < 400) {
    var h1 = document.createElement("h1");
    var text = document.createTextNode("Progress Bars"); 
    h1.appendChild(text)
    myParent.appendChild(h1)
    window.limit = data.limit
    var h3 = document.createElement("h3");
    var text = document.createTextNode("Limit: " + data.limit); 
    h3.appendChild(text)
    myParent.appendChild(h3)
    createBarsAndButtons();
  } else {
	//console.error(data);
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Gah, it's not working!`
    app.appendChild(data)
  }

}
request.send()

function createBarsAndButtons() {
    var selectList = document.createElement("select");
    selectList.id = "mySelect";
    var array = window.jsonData.bars;
    for (var i = 0; i < array.length; i++) {
        //create progress bars
        var bar1 = document.createElement("div");
        bar1.id = "myProgress" + i
        var bar2 = document.createElement("div");
        bar2.id = "myBar" + i
        var content = document.createTextNode(array[i]); 
        bar2.appendChild(content);
        bar1.appendChild(bar2)
        myParent.appendChild(bar1);
        var br = document.createElement("br");
        myParent.appendChild(br);
        var elem = document.getElementById(bar2.id);
        elem.style.width = array[i] + "%";
        elem.innerHTML = array[i]  + "%";
        //create dropdwn list
        var option = document.createElement("option");
        option.value = array[i];
        option.text = bar1.id;
        selectList.appendChild(option);
       }
    myParent.appendChild(selectList);

    var array = window.jsonData.buttons
    for (var i = 0; i < array.length; i++) {
        //create buttons
        var buttonID = "button" + i;
        var buttonDiv = document.createElement("div");  
        buttonDiv.id = buttonID
        var button = document.createElement("button");
        button.id = buttonID
        button.innerHTML = array[i];
        myParent.appendChild(button);
    }
}  

var elem = document.getElementById("button0");
if (elem == null)
    console.log("elem is NULL")
elem.onclick = function() {move0()};

var elem = document.getElementById("button1");
if (elem == null)
    console.log("elem is NULL")
elem.onclick = function() {move1()};

var elem = document.getElementById("button2");
if (elem == null)
    console.log("elem is NULL")
elem.onclick = function() {move2()};

var elem = document.getElementById("button3");
if (elem == null)
    console.log("elem is NULL")
elem.onclick = function() {move3()};

function move0() {
    var x = document.getElementById("mySelect")
    var i = x.selectedIndex;
    var t = x.options[i].text;
    var n = "myBar" + t.substring(t.length - 1, t.length);
    var elem = document.getElementById(n);
    var width = parseFloat(elem.style.width);
    var elem1 = document.getElementById("button0");
    var moveBy = parseFloat(elem1.innerHTML);
    moveBy = parseFloat(moveBy);
      if (((width + moveBy) >= 0)) {
        width += moveBy;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
        if (width > 100) {
            elem.style.width = "100%";
            elem.innerHTML = width  + "%";
            elem.style.backgroundColor = "red";
        } else {
            elem.style.backgroundColor = "#00FFFF";
        }
      } else {
        console.log("Cannot change width " + width)
      }
}

function move1() {
    var x = document.getElementById("mySelect")
    var i = x.selectedIndex;
    var t = x.options[i].text;
    var n = "myBar" + t.substring(t.length - 1, t.length);
    var elem = document.getElementById(n);
    var width = parseFloat(elem.style.width);
    var elem1 = document.getElementById("button1");
    var moveBy = parseFloat(elem1.innerHTML);
      if ((width + moveBy) >= 0) {
        width += moveBy;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
        if (width > 100) {
            elem.style.width = "100%";
            elem.innerHTML = width  + "%";
            elem.style.backgroundColor = "red";
        } else {
            elem.style.backgroundColor = "#00FFFF";
        }
      } else {
        console.log("Cannot change width " + width)
      }
}

function move2() {
    var x = document.getElementById("mySelect")
    var i = x.selectedIndex;
    var t = x.options[i].text;
    var n = "myBar" + t.substring(t.length - 1, t.length);
    var elem = document.getElementById(n);
    var width = parseFloat(elem.style.width);
    var elem1 = document.getElementById("button2");
    var moveBy = parseFloat(elem1.innerHTML);
      if ((width + moveBy) >= 0) {
        width += moveBy;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
        if (width > 100) {
            elem.style.width = "100%";
            elem.innerHTML = width  + "%";
            elem.style.backgroundColor = "red";
        } else {
            elem.style.backgroundColor = "#00FFFF";
        }
      } else {
        console.log("Cannot change width " + width)
      }
}

function move3() {
    var x = document.getElementById("mySelect")
    var i = x.selectedIndex;
    var t = x.options[i].text;
    var n = "myBar" + t.substring(t.length - 1, t.length);
    var elem = document.getElementById(n);
    var width = parseFloat(elem.style.width);
    var elem1 = document.getElementById("button3");
    var moveBy = parseFloat(elem1.innerHTML);
      if ((width + moveBy) >= 0) {
        width += moveBy;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
        if (width > 100) {
            elem.style.width = "100%";
            elem.innerHTML = width  + "%";
            elem.style.backgroundColor = "red";
        } else {
            elem.style.backgroundColor = "#00FFFF";
        }
      } else {
        console.log("Cannot change width " + width)
      }
}