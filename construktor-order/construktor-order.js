const btnContainer = document.querySelector(".container-btn");
const imgContainer = document.querySelector(".img")


let paramsClientsObj = {};

localStorage.clear()


const refs = {
  btnSquare: document.querySelector('#square'),
  btnCircle: document.querySelector('#circle'),
  btnNonStandart: document.querySelector('#non-standard'),
  btnNextPage: document.querySelector('.next-page'),
}

console.log(btnContainer.children)


btnContainer.addEventListener('click', onClick)
refs.btnNextPage.addEventListener('click', onNextPage)

function onNextPage(evt) {
  evt.preventDefault();
  // paramsClientsObj.form = document.querySelector('.active').textContent;


  const arrBtnPageForm = btnContainer.children
  for (let i = 0; i < arrBtnPageForm.length; i += 1) {
    const element = arrBtnPageForm[i];
    if(element.classList.value.includes('active')){
      // console.log(element.textContent)
      paramsClientsObj.form = element.textContent
      localStorage.setItem('newItem:', JSON.stringify(paramsClientsObj))
      // console.log(paramsClientsObj)
    } 
  }

}



function createPageStyle() {

}




function onClick(event) {
    if (event.target.nodeName !== "BUTTON") {
        return;
      }
      const activeBtn = document.querySelector('.active')
      event.target.classList.add('active')
      activeBtn.classList.remove('active')
    changeImg()
}



function changeImg() {
  if(refs.btnSquare.className.includes('active')) {
      imgContainer.src = "../image/square.png"
  }

  if(refs.btnCircle.className.includes('active')) {
    imgContainer.src = "../image/circle.png"
  }

  if(refs.btnNonStandart.className.includes('active')) {
    imgContainer.src = "../image/non-standard.png"
  }
}