new Vue({
   el: '#app',
   data: {
      title: 'DELICIOUS SUSHI',
      lorem15: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde est voluptate ad tenetur! Magni, eligendi?',
      lorem8: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      orderLink: '#contact',
      secondTitle: 'Best seller',
      title3: 'Best Tasty',
      gridDblImg: 'grid__dbl_img grid__dbl_item flexCenter wow zoomIn',
      gridDblTetx: 'grid__dbl_text grid__dbl_item flexCenterColumn',
      comment: 'If you are a culinary fan, if you like to spend time in your kitchen, you likely find yourself looking for reliable resources through which you can'
   }
})

// ANIMATION
let b_1=document.querySelector('.delicious__icon:nth-child(1)');
let b_2=document.querySelector('.delicious__icon:nth-child(2)');
let b_3=document.querySelector('.delicious__icon:nth-child(3)');
let b_4=document.querySelector('.delicious__icon:nth-child(4)');

let images=[
   riceSushi_I= {src:'src/rice-sushi.png'},
   redFishSushi_I={src:'src/redFishUp.png'},
   redSushi_I={ src: 'src/red-sushi.png'},
   fishUpSushi_I={src: 'src/fishUp.png'}
]

async function changeMe1(){
   let state=1
   const waitMe= ms=>{
      return new Promise(resolve=>{
         setTimeout(() => resolve(), ms)
      })
   }
   if (state==1){
      await waitMe(0).then(() => b_1.classList.add('changed'))
      await waitMe(900).then(() => b_1.classList.remove('changed'))
      await waitMe(0).then(() => b_1.setAttribute('src', images[0].src))
      await waitMe(0).then(() => state=2)
      if (state==2){
         await waitMe(3000).then(() => b_1.classList.add('changed'))
         await waitMe(900).then(() => b_1.classList.remove('changed'))
         await waitMe(0).then(() => b_1.setAttribute('src', images[1].src))
         await waitMe(0).then(() => state=3)
         if (state==3){
            await waitMe(3000).then(() => b_1.classList.add('changed'))
            await waitMe(900).then(() => b_1.classList.remove('changed'))
            await waitMe(0).then(() => b_1.setAttribute('src', images[2].src))
            await waitMe(0).then(() => state=4)
            if (state==4){
               await waitMe(3000).then(() => b_1.classList.add('changed'))
               await waitMe(900).then(() => b_1.classList.remove('changed'))
               await waitMe(0).then(() => b_1.setAttribute('src', images[3].src))
               await waitMe(0).then(() => state=5)
               if (state==5){
                  await waitMe(3000).then(() => changeMe1())
               }
            }
         }
      }
   }
}
changeMe1()
async function changeMe2(){
   let state=1
   const waitMe= ms=>{
      return new Promise(resolve=>{
         setTimeout(() => resolve(), ms)
      })
   }
   if (state==1){
      await waitMe(0).then(() => b_2.classList.add('changed'))
      await waitMe(900).then(() => b_2.classList.remove('changed'))
      await waitMe(0).then(() => b_2.setAttribute('src', images[3].src))
      await waitMe(0).then(() => state=2)
      if (state==2){
         await waitMe(4000).then(() => b_2.classList.add('changed'))
         await waitMe(900).then(() => b_2.classList.remove('changed'))
         await waitMe(0).then(() => b_2.setAttribute('src', images[1].src))
         await waitMe(0).then(() => state=3)
         if (state==3){
            await waitMe(4000).then(() => b_2.classList.add('changed'))
            await waitMe(900).then(() => b_2.classList.remove('changed'))
            await waitMe(0).then(() => b_2.setAttribute('src', images[2].src))
            await waitMe(0).then(() => state=4)
            if (state==4){
               await waitMe(4000).then(() => b_2.classList.add('changed'))
               await waitMe(900).then(() => b_2.classList.remove('changed'))
               await waitMe(0).then(() => b_2.setAttribute('src', images[0].src))
               await waitMe(0).then(() => state=5)
               if (state==5){
                  await waitMe(4000).then(() => changeMe2())
               }
            }
         }
      }
   }
}
changeMe2()
async function changeMe3(){
   let state=1
   const waitMe= ms=>{
      return new Promise(resolve=>{
         setTimeout(() => resolve(), ms)
      })
   }
   if (state==1){
      await waitMe(0).then(() => b_3.classList.add('changed'))
      await waitMe(900).then(() => b_3.classList.remove('changed'))
      await waitMe(0).then(() => b_3.setAttribute('src', images[2].src))
      await waitMe(0).then(() => state=2)
      if (state==2){
         await waitMe(5000).then(() => b_3.classList.add('changed'))
         await waitMe(900).then(() => b_3.classList.remove('changed'))
         await waitMe(0).then(() => b_3.setAttribute('src', images[0].src))
         await waitMe(0).then(() => state=3)
         if (state==3){
            await waitMe(5000).then(() => b_3.classList.add('changed'))
            await waitMe(900).then(() => b_3.classList.remove('changed'))
            await waitMe(0).then(() => b_3.setAttribute('src', images[1].src))
            await waitMe(0).then(() => state=4)
            if (state==4){
               await waitMe(5000).then(() => b_3.classList.add('changed'))
               await waitMe(900).then(() => b_3.classList.remove('changed'))
               await waitMe(0).then(() => b_3.setAttribute('src', images[3].src))
               await waitMe(0).then(() => state=5)
               if (state==5){
                  await waitMe(5000).then(() => changeMe3())
               }
            }
         }
      }
   }
}
changeMe3()
async function changeMe4(){
   let state=1
   const waitMe= ms=>{
      return new Promise(resolve=>{
         setTimeout(() => resolve(), ms)
      })
   }
   if (state==1){
      await waitMe(0).then(() => b_4.classList.add('changed'))
      await waitMe(900).then(() => b_4.classList.remove('changed'))
      await waitMe(0).then(() => b_4.setAttribute('src', images[1].src))
      await waitMe(0).then(() => state=2)
      if (state==2){
         await waitMe(2000).then(() => b_4.classList.add('changed'))
         await waitMe(900).then(() => b_4.classList.remove('changed'))
         await waitMe(0).then(() => b_4.setAttribute('src', images[3].src))
         await waitMe(0).then(() => state=3)
         if (state==3){
            await waitMe(2000).then(() => b_4.classList.add('changed'))
            await waitMe(900).then(() => b_4.classList.remove('changed'))
            await waitMe(0).then(() => b_4.setAttribute('src', images[0].src))
            await waitMe(0).then(() => state=4)
            if (state==4){
               await waitMe(2000).then(() => b_4.classList.add('changed'))
               await waitMe(900).then(() => b_4.classList.remove('changed'))
               await waitMe(0).then(() => b_4.setAttribute('src', images[2].src))
               await waitMe(0).then(() => state=5)
               if (state==5){
                  await waitMe(2000).then(() => changeMe4())
               }
            }
         }
      }
   }
}
changeMe4()



let navContainer=document.querySelector('.nav__container')
let body = document.querySelector('body')
let navIcon_1 = document.querySelector('.sushi__navIcon:nth-child(1)')
let navIcon_2 = document.querySelector('.sushi__navIcon:nth-child(2)')
let nav__ul = document.querySelector('.nav__ul')

function openMenu(){
   navContainer.classList.add('active')
   body.classList.add('active')

   setTimeout(() => {
      navIcon_1.classList.add("active")
      navIcon_2.classList.add("active")

      setTimeout(() => {
         nav__ul.classList.add("active")
         navIcon_1.classList.add("anim")
         navIcon_2.classList.add("anim")
      }, 500);
   }, 500);
}


function closeMenu(){
   nav__ul.classList.remove("active")
   navIcon_1.classList.remove("anim")
   navIcon_2.classList.remove("anim")

   setTimeout(() => {
      navIcon_1.classList.remove("active")
      navIcon_2.classList.remove("active")

      setTimeout(() => {
         navContainer.classList.remove('active')
      body.classList.remove('active')
      }, 300);
   }, 400);
}




