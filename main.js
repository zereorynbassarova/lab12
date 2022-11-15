// header
let h1_arr = document.getElementsByTagName("h1")
console.log(h1_arr[0])
let h = h1_arr[0]
h.innerHTML = "Lab12 Assignment"
h.style.color= "blue"

// horizontal line
let hr1 = document.createElement("hr")
console.log(hr1)
document.body.appendChild(hr1)

// first subheader
let h2a = document.createElement("h2");
h2a.innerHTML="Task"
h2a.style.color = "red"
document.body.appendChild(h2a);
console.log(h2a)

// paragraph one
let p1 = document.createElement("p")
p1.innerHTML = "In this task you have to reproduce this HTML page as is using <b>only</b> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:"
document.body.appendChild(p1)
console.log(p1)

// Creating bullet points list
let items = [
	"find elements in the DOM (<b>5 points</b>);",
	"create/add/remove elements (<b>5 points</b>);",
	"change content of the elements (<b>5 points</b>);",
	"change styles of the elements (<b>5 points</b>);",
	"change attributes of the elements (<b>5 points</b>);",
	"change classes of the elements (<b>5 points</b>)."
]
let ul1=document.createElement('ul');
for(let i=0; i<items.length; i++){
	var li = document.createElement("li")
	li.innerHTML = items[i]
	li.style.color = "green"
	if (i%2==1){
		li.style.color = "purple"
	}
	ul1.appendChild(li)
}
document.body.appendChild(ul1);
console.log(ul1)


//adding a link into paragraph
let a = document.createElement("a")
a.innerText = "link."
a.setAttribute("href", "https://github.com/yessen/nu_web_programming/tree/main/week12")

// paragraph two
let p2 = document.createElement("p")
p2.innerText = "Basic necessary code can be found in the supplementary materials to the Lecture 12 via this "
p2.appendChild(a)
document.body.appendChild(p2)
console.log(p2)

// horizontal line
let hr2 = document.createElement("hr")
console.log(hr2)
document.body.appendChild(hr2)

// second subheader
let h2b = document.createElement("h2");
h2b.innerHTML="Submission"
h2b.style.color = "red"
document.body.appendChild(h2b);
console.log(h2b)

// paragraph three
let p3 = document.createElement("p")
p3.innerHTML = "To submit your work, follow these instructions:"
document.body.appendChild(p3)
console.log(p3)

// Creating bullet points list
let items2 = [
	"Create a new repository on Github, named <b>lab12</b> (<b>1 point</b>).",
	"Clone this repository to your local machine and work inside it.",
	"Create a new HTML file, called <b>index.html</b>, which has only one &lt;h1&gt; tag with \"Hello, World!\" message (<b>1 point</b>).",
	"Create a new JavaScript file, called <b>main.js</b>, which must contain your program (assignment) described above (<b>1 point</b>).",
	"Link this <b>main.js</b> file to your <b>index.html</b> file (Note: place your script at the end of the <b>body</b> section).",
	"Write a JavaScript program in <b>main.js</b> to make your <b>index.html</b> look identical to this HTML file (<b>5 points</b>).",
	"After you finish your work, submit it to the Github (<b>2 points</b>)."
]
let ul2=document.createElement('ul');
for(let i=0; i<items2.length; i++){
	var li = document.createElement("li")
	li.innerHTML = items2[i]
	li.style.color = "green"
	if (i%2==1){
		li.style.color = "purple"
	}
	ul2.appendChild(li)
}
document.body.appendChild(ul2);
console.log(ul2)

// horizontal line
let hr3 = document.createElement("hr")
console.log(hr3)
document.body.appendChild(hr3)
