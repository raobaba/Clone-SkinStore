var cartData = JSON.parse(localStorage.getItem("cartthings")) || [];

reLoadM(cartData);
function reLoadM(cartData){
    
    creatcart(cartData);

    function creatcart(cartData) {
        document.querySelector("#container").textContent = "";
        cartData.map(function (data, index) {
    
    
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
        cartData.splice(index, 1)
        localStorage.setItem("cartthings", JSON.stringify(cartData));
        alert("Item Deleted");
        reLoadM(cartData);
    }
    

    var len =JSON.parse(localStorage.getItem("cartthings"))
    document.querySelector("#cardAval").innerHTML=`Only ${len.length} items in your cart.`;
    document.querySelector("#cartLen").innerHTML=`${len.length}`;
    
   var total = len.reduce(function (a,b) {
       return a+Number(b.price)
   },0)
    document.querySelector("#totalPrice").innerHTML=` $${total.toFixed(2)}`;

}


function navSlideOut(){
    document.querySelector("#nav-link").style.left="-16px"
}
function navSlideIn(){
   document.querySelector("#nav-link").style.left="-2000px"
}

function Tsort(){
    var itemSort=document.querySelector("#sortT").value
    console.log(itemSort)
    if(itemSort==""){
        reLoadM(cartData);
    }else if(itemSort=="high"){
        cartData.sort(function(a,b){
         return (Number(b.price)-Number(a.price))
     })
     reLoadM(cartData);
    }else{
        cartData.sort(function(a,b){
            return (Number(a.price)-Number(b.price))
     })
     reLoadM(cartData);
    }
 }  
