const bestSeller = document.getElementById('best-seller')
const filterNav = document.querySelectorAll(".filters-links li")
const items = document.getElementById("items")
let SearchItems = document.querySelectorAll(".search-items")
let searchBtn= document.getElementById("search-logo")
const homeSection = document.querySelectorAll(".home")
const allItem = [
    {name:"Java Chip Frappuccino",
     imgUrl:"https://starbucksstatic.cognizantorderserv.com/Items/Small/100501.jpg",
     p:"Mocha sauce and Frappuccino® chips blended with with Frappu...",
     price:388.50,
    desc:"TALL(354 ML) .392 kcal",
    id:"best-seller"

    },
    {name:"Caffe Americano",
        imgUrl:"https://starbucksstatic.cognizantorderserv.com/Items/Small/100433.jpg",
        p:"Rich in flavour, full-bodied espresso with hot water in true...",
        price:278.25,
       desc:"SHORT(237 Ml) .0 kcal",
        id:"best-seller"
   
       },
       {name:"Cold coffee",
        imgUrl:"https://starbucksstatic.cognizantorderserv.com/Items/Small/105468.jpg",
        p:"Our signature rich in flavour espresso blended with delicate...",
        price:372.75,
       desc:"TALL(354 ML) .354 kcal",
        id:"best-seller"
   
       },
       { name:"Double Chocolate Chip Frappuccino",
        imgUrl:"https://starbucksstatic.cognizantorderserv.com/Items/Small/103515.jpg",
        p:"Rich mocha-flavored sauce meets up with chocolaty chips, mil...",
        price:372.75,
       desc:"TALL(354 ML) .354 kcal",
        id:"best-seller"
   
       },
       {name:"Creamy Spinach and Corn Pocket",
        imgUrl:"https://starbucksstatic.cognizantorderserv.com/Items/Small/108177.jpg",
        p:"A creamy spinach and corn filling encased in a buttery Fren...",
        price:252.00,
       desc:"PER SERVE (160 g) - 358 Kcal",
        id:"best-seller"
   
       },
       {name:"Cappuccino",
        imgUrl:"https://starbucksstatic.cognizantorderserv.com/Items/Small/100419.jpg",
        p:"Dark, Rich in flavour espresso lies in wait under a smoothed...",
        price:299.25,
       desc:"SHORT(237 ML) .104 Kcal",
        id:"best-seller"
   
       },
       {name:"Double Chocolate Chip Cookie",
        imgUrl:"https://starbucksstatic.cognizantorderserv.com/Items/Small/107707.jpg",
        p:"A soft & chewy chocolate cookie topped with chocolate chips ...",
        price:294.00,
       desc:"PER SERVE (80 g) - 385.3 Kcal",
        id:"best-seller"
   
       },
       {name:"Iced Mocha Cookie Crumble Latte",
        imgUrl:"https://starbucksstatic.cognizantorderserv.com/Items/Small/M104018.jpg",
        p:"Our Mocha Cookie crumble Latte is a deliciously flavoured mo...",
        price:477.75,
       desc:"TALL(354 ML) .386 kcal",
        id:"drinks"
   
       },
       {name:"Mocha Cookie Crumble Latte",
        imgUrl:"https://starbucksstatic.cognizantorderserv.com/Items/Small/M104014.jpg",
        p:"Our Mocha Cookie crumble Latte is a deliciously flavoured mo...",
        price:435.75,
       desc:"SHORT(237 ML) .294 kcal",
        id:"drinks"
   
       },
       {name:"Stardust Macchiato",
        imgUrl:"https://starbucksstatic.cognizantorderserv.com/Items/Small/M107777.jpg",
        p:"Super smooth and creamy vanilla half and half crowned with s...",
        price:414.75,
       desc:"SHORT(Short Stardust Macchiato) .",
        id:"drinks"
   
       },
       {name:"Iced Stardust Macchiato",
        imgUrl:"https://starbucksstatic.cognizantorderserv.com/Items/Small/M107781.jpg",
        p:"Super smooth and creamy vanilla half and half crowned with s...",
        price:414.75,
       desc:"TALL(Iced Tall Stardust Macchiato) .",
        id:"drinks"
   
       },
       {name:"Caffè Americano",
        imgUrl:"https://starbucksstatic.cognizantorderserv.com/Items/Small/100433.jpg",
        p:"Rich, full-bodied espresso with hot water in true European ...",
        price:278.25,
       desc:"SHORT() .",
        id:"drinks"
   
       },
       {name:"Caffè Mocha",
        imgUrl:"https://www.starbucks.in/assets/icon/placeholder.svg",
        p:"We combine our Rich in flavour, full-bodied espresso with b...",
        price:341.25,
       desc:"SHORT().",
        id:"drinks"
   
       },
       {name:"Cappuccino",
        imgUrl:"https://starbucksstatic.cognizantorderserv.com/Items/Small/100419.jpg",
        p:"Dark, Rich in flavour espresso lies in wait under a smoothed...",
        price:299.25,
       desc:"SHORT(237 ML) .104 Kcal",
        id:"drinks"
   
       },
       {name:"Caffe Latte",
        imgUrl:"https://starbucksstatic.cognizantorderserv.com/Items/Small/100377.jpg",
        p:"Our dark, Rich in flavour espresso balanced with steamed mil...",
        price: 304.50,
       desc:"SHORT(Short Latte) .104 kcal   ",
        id:"drinks"
   
       },
       {
        name: "Tandoori Soya Chaap Wrap",
        imgUrl: "https://starbucksstatic.cognizantorderserv.com/Items/Small/115298_1.jpg",
        p: "Soft succulent soya chaap in tandoori marinade, cooked to a ...",
        price: 357.00,
        desc: "484 kcal",
        id: "food"
      },
      {
        name: "BBQ Chicken Wrap",
        imgUrl: "https://starbucksstatic.cognizantorderserv.com/Items/Small/115299_1.jpg",
        p: "Smoky Chicken with chopped aromatic vegetables tossed in our...",
        price: 367.50,
        desc: "380 kcal",
        id: "food"
      }
  ,
  {
    name: "Bake In Roast Chicken Baguette SW",
    imgUrl: "https://starbucksstatic.cognizantorderserv.com/Items/Small/115302_1.jpg",
    p: "Roasted chicken meets assorted bell peppers and onions in br...",
    price: 477.75,
    desc: "210g/706kcal",
    id: "food"
  },
  {
    name: "Bake In Mushroom Cheese Melt Baguette SW",
    imgUrl: "https://starbucksstatic.cognizantorderserv.com/Items/Small/115301_1.jpg",
    p: "Hearty mushrooms topped with melted yellow cheddar cheese in...",
    price: 472.50,
    desc: "210g/541kcal",
    id: "food"
  },
  {
    name: "Bake In Pesto Veggie Sourdough SW",
    imgUrl: "https://starbucksstatic.cognizantorderserv.com/Items/Small/115300_1.jpg",
    p: "Sauteed broccoli florets and mushroom slices with chopped ar...",
    price: .50,
   desc: "150g/400kcal",
    id: "food"
  },
  {
    name: "Bake In Sriracha Chicken Sourdough SW",
    imgUrl: "https://starbucksstatic.cognizantorderserv.com/Items/Small/115304_1.jpg",
    p: "Spicy and tangy Sriracha grilled chicken shreds with the add...",
    price: 441.00,
    desc: "185g/521kcal",
    id: "food"
  },
  {
    name: "Basil Tomato Mozzarella Cheese Sandwich",
    imgUrl: "https://starbucksstatic.cognizantorderserv.com/Items/Small/100096_1.png",
    p: "Fresh basil, ripe tomatoes, and mozzarella cheese in a delici...",
    price: 304.50,
    desc: "180g/484kcal",
    id: "food"
  },
  {
    name: "Mickey Mouse Ceramic Mug – 355ml",
    imgUrl: "https://starbucksstatic.cognizantorderserv.com/Items/Small/114247.jpg",
    p: "Mickey Mouse mug with the character's silhouette, dipped in ...",
    price: 2550.00,
    desc: "",
    id: "mugs",
  },
  {
    name: "Minnie Mouse Ceramic Mug – 355 ml",
    imgUrl: "https://starbucksstatic.cognizantorderserv.com/Items/Small/114248.jpg",
    p: "Minnie Mouse mug with a character's silhouette, dipped in gl...",
    price: 2550.00,
    desc: "",
    id: "mugs",
  },
  {
    name: "Starbucks Diwali Mug",
    imgUrl: "https://starbucksstatic.cognizantorderserv.com/Items/Small/113977_1.jpg",
    p: "The Starbucks siren in an all-new avatar, to honor India's m...",
    price: 1100.00,
    desc: "",
    id: "mugs",
  },
  {
    name: "Black wave sipper – 427 ml",
    imgUrl: "https://www.starbucks.in/assets/icon/placeholder.svg",
    p: "Sophisticated double wall stainless steel mug with a stylish...",
    price: 2300.00,
    desc: "",
    id: "mugs",
  },
  {
    name: "Rabbit Holiday Mug – 89 ml",
    imgUrl: "https://starbucksstatic.cognizantorderserv.com/Items/Small/114469.jpg",
    p: "Get into the holiday spirit with our Rabbit-themed mug, perf...",
    price: 2250.00,
    desc: "",
    id: "mugs",
  },
  {
    name: "Fox & Cupcake Mug –295 ml",
    imgUrl: "https://starbucksstatic.cognizantorderserv.com/Items/Small/114470.jpg",
    p: "Sip your favorite beverages in style with our Fox & Cupcake ...",
    price: 2650.00,
    desc: "",
    id: "mugs",
  },
  {
    name: "Embossed Tree Mug–414 ml",
    imgUrl: "https://starbucksstatic.cognizantorderserv.com/Items/Small/114471.jpg",
    p: "Embrace the holiday spirit with our Embossed Tree Mug, perfe...",
    price: 1450.00,
    desc: "",
    id: "mugs",
  },
  {
    name: "MUGGIFT: Little Holiday Present –89 ml",
    imgUrl: "https://starbucksstatic.cognizantorderserv.com/Items/Small/114402.jpg",
    p: "Discover the joy of a little holiday surprise with our MUGGI...",
    price: 950.00,
    desc: "",
    id: "mugs",
  },
  {
    name: "Pink Facet Cat Ceramic Mug 295 ml",
    imgUrl: "https://starbucksstatic.cognizantorderserv.com/Items/Small/114611.jpg",
    p: "Fall in love this Valentine's Day with this limited edition ...",
    price: 1650.00,
    desc: "",
    id: "mugs",
  },
  {
    name: "Red and Cat Spoon Mug Ceramic 355 ml",
    imgUrl: "https://starbucksstatic.cognizantorderserv.com/Items/Small/114612.jpg",
    p: "This adorable mug features a matte finish that adds a touch ...",
    price: 2200.00,
    desc: "",
    id: "mugs",
  },
  {
    name: "Valentine Heart Mug – 355 ml",
    imgUrl: "https://starbucksstatic.cognizantorderserv.com/Items/Small/114612.jpg",
    p: "Express your love with every sip using the Valentine Heart M...",
    price: 1300.00,
    desc: "",
    id: "mugs",
  },
  {
    name: "MUG 355 ml GARDEN SPRING",
    imgUrl: "https://starbucksstatic.cognizantorderserv.com/Items/Small/114612.jpg",
    p: "Colour changing ceramic mug with hot beverages.",
    price: 2250.00,
    desc: "",
    id: "mugs",
  },
  {
    name: "MUG SUMMER SAND 414 ml",
    imgUrl: "https://starbucksstatic.cognizantorderserv.com/Items/Small/115214.jpg",
    p: "Inspired by the scenery of the beachside, Hand paint glossy ...",
    price: 2300.00,
    desc: "",
    id: "mugs",
  },
  {
    name: "MUG DRAGON 414ml",
    imgUrl: "https://starbucksstatic.cognizantorderserv.com/Items/Small/114609_1.png",
    p: "3D flower figure decoration in a pink ceramic mug",
    price: 2300.00,
    desc: "",
    id: "mugs",
  },
  {
    name: "MUG SS DUSTY ROSE 414ml",
    imgUrl: "https://starbucksstatic.cognizantorderserv.com/Items/Small/114610_1.png",
    p: "Double walled with debossed siren logo in an elegant dusty r...",
    price: 2250.00,
    desc: "",
    id: "mugs",
  },
  {
    name: "Christmas Via",
    imgUrl: "https://starbucksstatic.cognizantorderserv.com/Items/Small/103049.jpg",
    p: "Sweet and velvety, with notes of spiced chocolate and spruce...",
    price: 1000.00,
    desc: "",
    id: "coffee-at-home",
  },
  {
    name: "Diwali Blend",
    imgUrl: "https://starbucksstatic.cognizantorderserv.com/Items/Small/109616_1.jpg",
    p: "Celebrate this Diwali in the best way we know how – with cof...",
    price: 1100.00,
    desc: "",
    id: "coffee-at-home",
  },
  {
    name:"Almond Biscotti",
    imgUrl: "https://starbucksstatic.cognizantorderserv.com/Items/Small/103599_1.jpg",
    p: "Delicious on its own or a perfect pairing with your favorite...",
    price: 160.00,
    desc: "",
    id: "ready-to-eat",
  },    

]

SearchItems.forEach((input)=>{
function performSearch(){
  let searchInputText =  input.value.trim().toLowerCase();
  const pattern = new RegExp([searchInputText],"i")
  const filteredItem = allItem.filter((item)=>{
     return pattern.test(item.name) || pattern.test(item.id)
  })
 const displaySearchedItem = filteredItem.map((item)=>{
    return `
    <div class="items" >
      <div class="starbuck-item">
        <img src="${item.imgUrl}" alt="">
        <div>
          <h3>${item.name}</h3>
          <p>${item.desc}</p>
          <p>${item.p}</p>
           <div class="flex">
                <p class="bold">${item.price}</p>
               <button class="btn add-item-btn" >Add Item</button>
            </div>
        </div>
      </div>`
  })
  if(filteredItem.length === 0){
    homeSection.forEach((section)=>{
      section.innerHTML = `<div class="no-item">
                              <img src="https://www.starbucks.in/assets/images/noSearchFound.svg"/>
                              <h1>This One's Not Found</h1>
                           </div>`
    })
  }
  else{
    homeSection.forEach((section)=>{
      section.innerHTML = `<div class="recent-search">
      <h2 class=padding>Home > Recent Search</h2>
      <div class="right-link search-bar flex padding">
          <li class="width"><ion-icon name="search-outline" id="search-logo"></ion-icon><input value="${searchInputText}" placeholder='Looking for something specific?' type="text" name="search-items" id="search-items" ></li>
      </div>
       <div id="items">
           ${displaySearchedItem}
       </div>
      </div>`
    })
  }
}

input.addEventListener("keydown",(event)=>{   
if(event.key==="Enter"){
  performSearch()
}
})
})

const sortItem=(array,targetId)=>{
  items.innerHTML = ``
  document.querySelector(".order-appearance").style.display = "none"
  document.getElementsByTagName("main")[0].style.overflow = "visible"
   array.filter((item)=>item.id === targetId).map((item)=>{
       items.innerHTML += `<div class="starbuck-item">
            <img src="${item.imgUrl}" alt="">
            <div>
              <h3>${item.name}</h3>
              <p>${item.desc}</p>
              <p>${item.p}</p>
              <div class="flex">
                <p class="bold">₹ ${item.price.toFixed(2)}</p>
                <button class="green add-item-btn" id="${item.name.replace(/[\s]/g,"-")}">Add Item</button>
             </div>
          </div>
          </div>`
    })
}
const getFilter=(e)=>{
  items.innerHTML = ""
  targetId= e.target.id   
  if(targetId){
    sortItem(allItem,targetId)
    addItems(allItem.filter((el)=>el.id === targetId))
  }
}

filterNav.forEach((item)=>
    item.addEventListener("click",(e)=>{
        getFilter(e)
    })
)
const homeNavLinks = document.querySelectorAll(".home-nav-links")
homeNavLinks.forEach((el)=>el.addEventListener("click",(event)=>{
homeNavLinks.forEach((link)=>{link.classList.remove("active")
link.classList.add("home-nav-links")})
event.currentTarget.classList.remove("home-nav-links")
event.currentTarget.classList.add("active")
}))
const orderLinks = document.querySelectorAll(".order-links")
homeNavLinks.forEach((el)=>el.addEventListener("click",(event)=>{
homeNavLinks.forEach((link)=>{link.classList.remove("active")
link.classList.add("home-nav-links")})
event.currentTarget.classList.remove("home-nav-links")
event.currentTarget.classList.add("active")
}))
