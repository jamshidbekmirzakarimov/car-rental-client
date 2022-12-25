// HTML dagi li larni barchasini olib kelish
var elTabItems = document.querySelectorAll(".tab__item");
// HTML dagi a larni barchasini olib kelish
var elTabLinks = document.querySelectorAll(".tab__link");
// HTML dagi panel__item larni barchasini olib kelish
var elPanelItems = document.querySelectorAll(".panel__item");

// HTML dan olib kelingan li va a larni consolega chiqarib ko'rish
// console.log(elTabItems, elTabLinks);

// elTabLinks ya'ni HTML dan olib kelingan barcha a larni birma-bir aylanib chiqish
elTabLinks.forEach(function(link){
  // HTML dan olib kelingan barcha a larni item larni ya'ni a ni consolega chiqarish
  // console.log(link);
  
  // HTML dan olib kelingan barcha a larni bitta elementiga hodisa qo'shish
  link.addEventListener("click", function(event){
    // a yoki linkni ustiga bosilganda saytni yangilanib ketishini oldini oladi
    event.preventDefault();
    
    // elTabItems ya'ni HTML dan olib kelingan barcha li larni birma-bir aylanib chiqish
    elTabItems.forEach(function(item){
      // HTML dan olib kelingan barcha li larni item larni ya'ni li ni consolega chiqarish
      // console.log(item);
      
      // HTML dan olib kelingan li ni classlar ro'yhatidan .tab__item--active degan classni o'chirish
      item.classList.remove("tab__item--active");
    })
    // HTML dan olib kelingan a bir marta click bo'lganda uni ota element bo'lgan li ni classlar ro'yhatiga .tab__item--active degan classni o'chirish classini qo'shish
    link.parentElement.classList.add("tab__item--active");
    
    // elPanelItems ya'ni HTML dan olib kelingan barcha panel__item larni birma-bir aylanib chiqish
    elPanelItems.forEach(function(panel){
      // HTML dan olib kelingan panel__item ni classlar ro'yhatidan .panel__item--active degan classni o'chirish
      panel.classList.remove("panel__item--active");
    })
    
    // HTML dan olib kelingan a ni href degan atributini classlar ro'yhatiga .panel__item--active degan classni qo'shish, biz href degan atributga class qo'shganimizda .panel__item ni id orqali bog'lab qo'yganimiz uchun .panel__item ga .panel__item--active degan class qo'shiladi 
    document.querySelector(link.getAttribute("href")).classList.add("panel__item--active");
  });
});


var elBg = document.querySelector(".bg");

elBg.addEventListener("mouseover", function(){
  elBg.style.backgroundImage = 'url("https://picsum.photos/300")'
})