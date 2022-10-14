

var trendingOffersData=[{image:"https://static.thcdn.com/images/small/webp/widgets/121-us/27/original-1._Moisturizers_500x500-082527.jpg",name:"NEW IN: SkinCeuticals Regimens",content:"LIMITED EDITION: Discover innovative antioxidant and cosmeceutical formulations with the new exclusive SkinCeuticals Regimens. Hurry, offer ends on 1/30!",pageUrl:"Shop1.html"},
{image:"https://static.thcdn.com/images/small/webp/widgets/121-us/52/original-500x500_Best_Sellers-015852.jpg",name:"Christophe Robin Gift",content:"Receive a Christophe Robin Cleansing Volumising Deluxe Paste 12ml (Free Gift) when you spend $80 or more.",pageUrl:"Shop2.html"},
{image:"https://static.thcdn.com/images/small/webp/widgets/121-us/17/0531-STDCRE-36879-THG0034801-SS-WR-AP-SkinstoreSummerBatching-SHOT_10-500x500-062717.jpg",name:"New! Latest Beauty Products",content:"We scour the globe around the clock to bring you a diverse range of skincare from breakthrough, results-driven brands to natural, organic and vegan options.",pageUrl:"Shop3.html"},
{image:"https://static.thcdn.com/images/small/webp/widgets/121-us/07/Circle_-_Untitled_Page_%2813%29-055807.png",name:"DERMAdoctor Gift",content:"Receive a DERMAdoctor Kakadu C Brightening Daily Cleanser 7.1 oz Tube when you spend $60 or more on the brand.",pageUrl:"Shop4.html"},
{image:"https://static.thcdn.com/images/small/webp/widgets/121-us/26/original-neo_sq-060026.jpg",name:"Neocutis Gift",content:"Receive a Neocutis Lumiere Firm Illuminating and Tightening Eye Cream 4ml when you spend $100 or more.",pageUrl:"Shop5.html"},
{image:"https://static.thcdn.com/images/small/webp/widgets/121-us/36/original-1224-STDCRE-28425-WC-SS-SkinStore-January-Photography-2022-BATCHING_Shot14-600x600-034336.jpg",name:"Brand of the Month: Decorté + Gift",content:"NEW IN: Decorté Liposome Serum! Experience the wisdom of traditional Japanese skincare, powered by unparalleled techno-innovation to transform your skin with Decorté. Plus, get a Decorté Liposome Duo (Worth $33) when you spend $90 on your purchase.",pageUrl:"Shop6.html"},
];


trendingOffersData.map(function(el){
    var div=document.createElement("div")
    var img=document.createElement("img")
        img.setAttribute("src",el.image)
    var h3=document.createElement("h3")
        h3.textContent=el.name
    var p=document.createElement("p")
        p.textContent=el.content
    var btn=document.createElement("button")
        btn.textContent="SHOP NOW"
        btn.addEventListener("click", function(){
            window.location.href=el.pageUrl
        });
        
        div.append(img,h3,p,btn)
        document.querySelector("#trendingOffers").append(div) 
});

var rightNowOffersData=[{image:"https://static.thcdn.com/images/large/webp//productimg/300/300/13547807-1444926019361532.jpg",name:"SkinCeuticals AM/PM Replenishing Antioxidant Regimen Worth $449",bPrice:0,aPrice:395.12,pageUrl:"######"},
{image:"https://static.thcdn.com/images/large/webp//productimg/300/300/13232822-1544908361367298.jpg",name:"SkinStore Selects Limited Edition Collection (Worth Over $350)",bPrice:111.00,aPrice:55.50,pageUrl:"######"},
{image:"https://static.thcdn.com/images/large/webp//productimg/300/300/13232824-6374902588484311.jpg",name:"SkinStore Holiday Edit 2021 (Worth Over $500)",bPrice:150.00,aPrice:75,pageUrl:"######"},
{image:"https://static.thcdn.com/images/large/webp//productimg/300/300/13468234-5434916661811767.jpg",name:"Decorté Liposome Advanced Repair Serum (Various Sizes)",bPrice:0,aPrice:75,pageUrl:"######"},

];


rightNowOffersData.map(function(el){
    var div=document.createElement("div")
    var img=document.createElement("img")
        img.setAttribute("src",el.image)
    var h3=document.createElement("h3")
        h3.textContent=el.name
    var p=document.createElement("p")
         check0(el.bPrice);
         function check0(val){
        if(val!=0){
            p.innerHTML=`MSRP:<s>$${el.bPrice.toFixed(2)}</s>`
        }else{
            p.innerHTML= "<br>"
        }
         }
       
    var h5=document.createElement("h5")
        h5.innerHTML=`$${el.aPrice.toFixed(2)}`
    var btn=document.createElement("button")
        btn.textContent="SHOP NOW"
        btn.addEventListener("click", function(){
            window.location.href=el.pageUrl
        });
        
        div.append(img,h3,p,h5,btn)
        document.querySelector("#rightNowOffers").append(div) 
});

var bloging=[{image:"https://static.thcdn.com/images/small/webp/widgets/121-us/10/original-0328-STDCRE-33849-WC-SS-April-Photography-Batching-Shot07-500x500-030310.jpg",name:"How to Protect Your Skin This Winter",content:"To help you in your search for the best skincare for dry skin in winter, we’ve curated a list of the best products to combat dry skin.",pageUrl:"######"},
{image:"https://static.thcdn.com/images/small/webp/widgets/121-us/51/original-0224-STDCRE-32153-SS-BME-Skinstore-March-2022-Photography-Batching-Shot_13-500x500-023351.jpg",name:"Hydration 101: Ingredient Focus",content:"Here are some of the top products that every moisture-starved skin type deserves during these winter months!",pageUrl:"######"},
{image:"https://static.thcdn.com/images/small/webp/widgets/121-us/53/2004_THG0034749_SS_MAY_2022_SHOT_33_MAIN-071653.jpg",name:"Winter Skincare Routine",content:"We’re on hand to provide you with the very best products to keep your skin in optimum condition all season long.",pageUrl:"######"},

];


     bloging.map(function(el){
    var div=document.createElement("div")
    var img=document.createElement("img")
        img.setAttribute("src",el.image)
    var h3=document.createElement("h3")
        h3.textContent=el.name
    var p=document.createElement("p")
        p.textContent=el.content
    var btn=document.createElement("button")
        btn.textContent="READ MORE"
        btn.addEventListener("click", function(){
            window.location.href=el.pageUrl
        });
        
        div.append(img,h3,p,btn)
        document.querySelector("#Blog").append(div) 
});

function navSlideOut(){
    document.querySelector("#nav-link").style.left="-16px"
}
function navSlideIn(){
   document.querySelector("#nav-link").style.left="-2000px"
}
var len =JSON.parse(localStorage.getItem("cartthings"))
document.querySelector("#cardAval").innerHTML=`Only ${len.length} items in your cart.`;
document.querySelector("#cartLen").innerHTML=`${len.length}`;
