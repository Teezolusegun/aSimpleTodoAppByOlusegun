//select the registration inputs
const registerName = document.querySelector('#registerName')
const registerUsername = document.querySelector('#registerUsername')
const registerPassword = document.querySelector('#registerPassword')
const registerEmail  = document.querySelector('#registerEmail')
const signUpButton = document.querySelector('#signUp')



 const change = document.querySelector('#login')
 const change2 = document.querySelector('#register')

//select the login inputs
const loginName = document.querySelector('#loginUsername')
const loginPassword = document.querySelector('#loginPassword')
const signInButton = document.querySelector('#signIn')

//the arry that saves the registration details 
const users = []

//adding event listener on registration to save registration details in array users
signUpButton.addEventListener('click', (e)=>{

  if(registerName.value =="" || registerUsername.value =="" || registerPassword.value =="" || registerEmail.value==""){
    alert('you cant leave any feild empty')
    change2.style.display = 'grid'
  }else{
const user = {
    name : registerName.value, 
    username : registerUsername.value,
    password : registerPassword.value,
    email : registerEmail.value
}
  users.push(user)
  localStorage.setItem('users' , JSON.stringify(users))
 

    
    e.preventDefault()}
})

//adding event listener to login to check 
signInButton.addEventListener('click' , (e)=>{
  
if(localStorage.getItem('users') == null){
newUsers = []
}else{
newUsers = JSON.parse(localStorage.getItem('users'))
newUsers.forEach(user => {
if(user.username == loginName.value && user.password == loginPassword.value){
 alert('welcome')
  location.replace('Index.html')
}  else{
  alert('username and password not found')
}
})}

e.preventDefault()
})


const gotoregister = document.querySelector('#get')
gotoregister.addEventListener('click', ()=>{
  if(registerName.value =='' ){
    change2.style.display = 'grid'
 change.style.display = 'none'
    // alert('you cannot leave a feild empty')
  } else {
    
}
})