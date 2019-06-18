//select the button and input I need 
const input = document.querySelector('#input')
const save = document.querySelector('#save')
const display = document.querySelector('#display')
save.addEventListener("click", (e)=>{

const li = document.createElement('p')
li.className = 'thelist'
const li2 = document.createElement('h7')
li2.className = 'botton'
li2.innerHTML = '+'
const number= document.createElement('p')
li.appendChild(document.createTextNode(input.value))
li.appendChild(li2)
display.appendChild(li)
input.value = " "
e.preventDefault()
})


display.addEventListener('click' , (e)=>{
      e.target.parentElement.remove();
    
})
// const logout = document.querySelector('.logout')
// logout.addEventListener('click', (e)=>{
//     location.replace('form.html')

//     console.log(logout)
//     e.preventDefault()
// })






