document.write("Random text") // 1 task
let x = "<h3>title</h3>";
document.write(x); // 2 task
let count = 0;
links = document.getElementsByTagName("a");
for (i = 0; i < links.length; i++) {
	if (links[i].getAttribute('href')[0] == "#") {
		count++;
	} 
}
document.write("Anchors = ", count, "</br>"); // 3 task
for (i = 0; i < links.length; i++) {
	if (links[i].getAttribute('href')[0] == "#") {
		document.write(links[i].innerHTML, "</br>");
		break;
	} 
} // 4 task
forms = document.getElementsByTagName("form");
document.write("Forms = ", forms.length, "</br>"); // 5 task
document.write(forms[0].getAttribute('name'), "</br>"); // 6 task
images = document.getElementsByTagName("img");
document.write("Images = ", images.length, "</br>"); // 7 task
document.write(images[0].getAttribute('id'), "</br>"); // 8 task
document.write("Links = ", links.length, "</br>"); // 9 task
document.write(links[0].getAttribute('id'), "</br>"); // 10 task
document.write(document.location.host, "</br>"); // 11 task
document.write(document.location.href, "</br>"); // 12 task
document.write("Title = ", document.title, "</br>"); // 13 task
document.write(document.location.href, "</br>"); // 14 task
let button = document.getElementById("Button");
function ButtonDisable() {
	button.disabled = true;
} // 15 task
document.write("Button name = ", button.getAttribute('name'), "</br>"); // 16 task
document.write("Button type = ", button.getAttribute('type'), "</br>"); // 17 task
document.write("Button text = ", button.getAttribute('value'), "</br>"); // 18 task
document.write("Form with button id = ", button.parentNode.getAttribute('id'), "</br>"); // 19 task
let form = document.getElementById("FormWithButton");
for (i = 0; i < form.elements.length; i++) {
	document.write("Element ", i, " value = ", form.elements[i].getAttribute('value'), "</br>");
} // 20 task
document.write("Form action = ", document.getElementById("FormWithButton").getAttribute('action'), "</br>"); // 21 task
document.write("Form enctype = ", document.getElementById("FormWithButton").getAttribute('enctype'), "</br>"); // 22 task
document.write("Form elements = ", form.elements.length, "</br>"); // 23 task
document.write("Form method = ", form.getAttribute('method'), "</br>"); // 24 task
document.write("Form name = ", form.getAttribute('name'), "</br>"); // 25 task
function FormReset () {
	document.getElementById("FormWithButton").reset();
}
for (i = 0; i < images.length; i++) {
	images[i].setAttribute("align", "right");
}
for (i = 0; i < images.length; i++) {
	images[i].setAttribute("alt", "This is image");
	document.write(images[i].getAttribute("alt"), "</br>");
}
for (i = 0; i < images.length; i++) {
	images[i].style.border = "2px dashed blue";
}
for (i = 0; i < images.length; i++) {
	images[i].setAttribute("width", "240px");
	images[i].setAttribute("height", "200px");
}
for (i = 0; i < images.length; i++) {
	document.write(images[i].getAttribute("name"), "</br>");
}
images[0].setAttribute("src", "http://i65.fastpic.ru/big/2014/0807/82/2dc28d0501d7038a5acbb6f645a11782.jpg")
function textEvent() {
	if (event.which == 1)
      document.write("Left button");
    else if (event.which == 3)
      document.write("Right button");
  	document.write("</br>Координаты курсора относительно страницы:</br>X = ", event.pageX, "</br>Y = ", event.pageY);
  	document.write("</br>Координаты курсора относительно окна:</br>X = ", event.clientX, "</br>Y = ", event.clientY);
  	document.write("</br>", event.target.tagName);
  	document.write("</br>", event.type);
}
document.addEventListener("click", textEvent);
document.addEventListener("contextmenu", textEvent);
table = document.getElementById("table");
table.border = 3;
table.setAttribute("cellpadding", "4");
table.setAttribute("cellspacing", "4");
table.style.border = "3px solid red";
table.appendChild(document.createElement("caption"));
table.caption.innerHTML = "Table";
table.deleteRow(1);
let tr = document.createElement("tr");
table.appendChild(tr);
for (i = 0; i < 3; i++) {
	tr.insertCell(0);
}
for (i = 0; i < tr.children.length; i++) {
	tr.children[i].setAttribute("align", "center");
	tr.children[i].setAttribute("vertical-align", "center");
}
table.children[2].children[1].setAttribute("align", "right");
table.children[2].children[2].setAttribute("vertical-align", "left");
table.children[2].children[2].innerHTML = "Cell";
tr.children[0].setAttribute("colspan", "3");