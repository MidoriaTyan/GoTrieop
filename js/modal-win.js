const btn = document.getElementById('burger')
const modal = document.getElementById('modal-win')


// открывает модальное окно
btn.onclick = function(event) {
    modal.classList.toggle('none')
    if(!modal.classList.contains('none')){
        window.addEventListener('click', handleEmtyWindow)
    } else {
        window.removeEventListener('click', handleEmtyWindow)
    }
    
}

// // закрывает модальное окно
function handleEmtyWindow(event){
         if(!event.target.closest('.modal__window') && !event.target.closest('#burger')){
            modal.classList.add('none')
            window.removeEventListener('click', handleEmtyWindow)
         }
       
    }    
