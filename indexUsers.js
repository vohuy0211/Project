const userLogin = JSON.parse(localStorage.getItem("userLogin"));

const navElement = document.querySelector("nav");

renderUser(userLogin)
function renderUser(user) {
    if (userLogin) {
        const contentNav = `
      <div class="logo">
        <img src="./images/logo-huawei.jpg" alt="" width="100" />
      </div>
      <div class="navbar-feature">
        <div class="user-info">${userLogin.userName}</div>
        <div class="navbar-btn">
         
          <button class="btn-log out" onclick = "handleLogout()">Đăng xuất</button>
        </div>
      </div>
    `;
        navElement.innerHTML = contentNav;

        navElement;
    }

}

function handleLogout() {
    localStorage.removeItem("userLogin");
    window.location = "indexUsers.html"
}
// 
let amountElement = document.querySelector('#amount')
let amount = amountElement.value;
// console.log(amountElement);
// handlePlus
let render = (amount) => {
  amountElement.value = amount
}
let handlePlus = () => {
  // console.log(amount);
  amount++
  render(amount);
}
// handleMinus
let handleMinus = () => {
  if (amount >1) {
    amount--
    render(amount)
    
  }
}
amountElement.addEventListener('input' , () => {
  amount =  amountElement.value;
  amount = parseInt(amount);
  amount = isNaN(amount || amount == 0)?1:amount;
  render(amount)
});

// 

