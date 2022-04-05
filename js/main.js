const links = [
    {
        label: "Week 1",
        url: "week1/index1.html"
    },
    {
        label: "Week 2",
        url: "week2/index2.html"
    },
    {
        label: "Week 3",
        url: "week3/index3.html"
    },
    {
        label: "Week 4",
        url: "week4/index4.html"
    },
    {
        label: "Week 5",
        url: "week5/index5.html"
    },
    {
        label: "Week 6",
        url: "week6/index.html"
    },
    {
        label: "Week 7",
        url: "week7/index7.html"
    },
    {
        label: "Week 8",
        url: "week8/index8.html"
    },
    {
        label: "Week 9",
        url: "week9/index9.html"
    },
    {
        label: "Week 10",
        url: "week10/index10.html"
    },
    {
        label: "Final Project",
        url: "finalProject/index.html"
    },
   
]

var myol = document.getElementById("myol")
var count = 0;
links.forEach(function (links) {
    var a = document.createElement('a');
    var link = document.createTextNode(links.label);
    a.appendChild(link);
    a.title = links.label;
    a.href = links.url;

    var br = document.createElement('br');
    a.appendChild(br);
    myol.appendChild(a);
    myol.appendChild(document.createElement("br"))
    myol.appendChild(document.createElement("br"))
    

    
});