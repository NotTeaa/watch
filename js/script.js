const links = document.querySelectorAll('.slider__img'),
    content = document.querySelectorAll('.slider__bigImg');

    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function(e){
             e.preventDefault();
            
             this.classList.add('active');
             content[i].classList.add('active');
        });
     }



    //  let price = document.querySelector('.slider__text-title'),
    //  zero = document.querySelector('.plusMinus__text-title');
    //  const plus = document.querySelector('.plus');
    //  const minus = document.querySelector('.minus');
    //  let count = 1;
    //  let b = 1024000;

// function plusMinus(){
//     if(zero.textContent < 0){
//             zero.textContent++;
//         }
// }
// plusMinus()
//      plus.addEventListener('click', function(){
        

//      })

// 


const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
let zero = document.querySelector('.plusMinus__text-title');
let price = document.querySelector('.slider__text-title span');
let count = 1;
let b = 1024000;
let a = 

plus.addEventListener("click",function () {
    

    
    
    if(count < 100){
        count++;
        b = 1024000 * count
        updateDisplay();
        
    }
     
    
}) ;
  

minus.addEventListener("click",function () {
    

    if(count > 1){
        b = (1024000 * count) - 1024000
        count--;
        
        updateDisplay();
    };
  
});

function updateDisplay(){
    zero.innerHTML = count;
    price.innerHTML = b;
};




const sliderButton = document.querySelector('.slider__text-button');
const receipt = document.querySelector('.receipt')
const receiptWindow = document.querySelector('.receipt__window');
const receiptBtn =document.querySelector('.receipt__window-btn')


sliderButton.addEventListener('click',function(){
    receipt.classList.add('active');
    receiptWindow.classList.add('active');

})
receiptBtn.addEventListener('click',function(){
    receipt.classList.remove('active');
    receiptWindow.classList.remove('active');

})


const plus1 = document.querySelector('.plus1');
const minus1 = document.querySelector('.minus1');
const zero1 = document.querySelector('.price__text-title');

let price1 = document.querySelector('.chech__price span')
let countt = 1; 
let bb = 1024000;

plus1.addEventListener("click", function () {
    
    
    if(countt < 100){
        countt++;
        bb = 1024000 * countt
        updateDisplayy();
        
        
    }
     
    
}) ;
  

minus1.addEventListener("click",function () {
    

    if(countt > 1){
        bb = (1024000 * countt) - 1024000
        countt--;
        
        updateDisplayy();
        
    };
  
});

function updateDisplayy(){
    zero1.innerHTML = countt;
    price1.innerHTML = bb;
};


const plus2 = document.querySelector('.plus2');
const minus2 = document.querySelector('.minus2');
const zero2 = document.querySelector('.price__text-title2');

let price2 = document.querySelector('.chech__price2 span')
let counttt = 1; 
let bbb = 1280000;

plus2.addEventListener('click', function () {
    if(counttt < 100){
        counttt++;
        bbb = 1280000 * counttt
        updateDisplayyy();
        
    }
})

minus2.addEventListener("click",function () {
    

    if(counttt > 1){
        bbb = (1280000 * counttt) - 1280000
        counttt--;
        
        updateDisplayyy();
    };
  
});

function updateDisplayyy(){
    zero2.innerHTML = counttt;
    price2.innerHTML = bbb;
};


$('.slider__img').click(function(test){
    test.preventDefault();
    

    let link = $(this);
    $('.big-img img').fadeOut(100, function(){
        $(this).attr('src', link.attr('href')).fadeIn(500);
    });
})













