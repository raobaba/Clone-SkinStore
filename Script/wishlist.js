var cartThings = JSON.parse(localStorage.getItem("cartthings")) || [];
var quickget = JSON.parse(localStorage.getItem("quickbuy1")) || [];

reLoadM(quickget);

function reLoadM(quickget){

    creatcart(quickget);
    
     function creatcart(quickget) {
        document.querySelector("#container").textContent ="";
            quickget.map(function (data, index) {
    
            var div = document.createElement("div")
            document.querySelector("#container").append(div)
    
            var image = document.createElement("img");
            image.setAttribute("src", data.image_url);
            div.append(image);
    
            var btn1 = document.createElement("button")
            btn1.setAttribute("id", "btnwish")
            btn1.textContent = "Wish"
            btn1.style.display = "block"
            div.append(btn1)
    
            var name = document.createElement("p");
            name.style.height = "35px"
            name.textContent = data.name;
            name.style.marginTop = "3%"
            div.append(name);
    
            var box = document.createElement("div")
            box.textContent = data.box
            box.setAttribute("id", "boxer")
            div.append(box)
    
    
    
            var p1 = document.createElement("p");
            check0(data.MSRP);
    
            function check0(val){
           if(val!=undefined){
                p1.innerHTML = `MSRP: <s>$${data.MSRP}</s>`;
           }
            }
    
            p1.style.marginTop = "5%"
            p1.style.color = "gray"
    
    
            var p2 = document.createElement("p")
            p2.textContent = `$${data.price}`;
            p2.style.marginTop = "1%"
            p2.style.fontSize = "24px"
            p2.style.fontWeight = "bold"
            div.append(p1, p2)
    
    
            var btn2 = document.createElement("button")
            btn2.setAttribute("id", "btnbuy");
            btn2.textContent = "Delete Item"
            div.append(btn2);
    
    
            btn2.addEventListener("click", function () {
                deletItems(index)
    
            });
        });
    }
    
    
    function deletItems(index) {
        quickget.splice(index, 1)
        localStorage.setItem("quickbuy1", JSON.stringify(quickget));
        alert("Item Deleted");
        reLoadM(quickget);
    }
 
    var cartLength =JSON.parse(localStorage.getItem("cartthings"))
    document.querySelector("#cardAval").innerHTML=`There are currently ${cartLength.length} items in your cart.`;
    document.querySelector("#cartLen").innerHTML=`${cartLength.length}`;
    


}

function navSlideOut(){
    document.querySelector("#nav-link").style.left="-16px"
}
function navSlideIn(){
   document.querySelector("#nav-link").style.left="-2000px"
}

function Tsort(){
    var valT=document.querySelector("#sortT").value
    console.log(valT)
    if(valT==""){
        reLoadM(quickget);
    }else if(valT=="high"){
        quickget.sort(function(a,b){
         return (Number(b.price)-Number(a.price))
     })
     reLoadM(quickget);
    }else{
        quickget.sort(function(a,b){
            return (Number(a.price)-Number(b.price))
     })
     reLoadM(quickget);
    }
 }  

























