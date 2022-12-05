const btnContainer = document.querySelector(".container-btn");
const imgContainer = document.querySelector(".img")

const refs = {
  btnSquare: document.querySelector('#square'),
  btnCircle: document.querySelector('#circle'),
  btnNonStandart: document.querySelector('#non-standard')
}

console.log(btnContainer.children)


btnContainer.addEventListener('click', onClick)


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