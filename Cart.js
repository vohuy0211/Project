renderHistoryCart();
function renderHistoryCart() {
    const userDB = JSON.parse(localStorage.getItem("accounts")) ?? [];
    const userLogin =JSON.parse(localStorage.getItem("userLogin")) ?? [];

    let userHistory = "";
    userDB.forEach((user) => {
        if (user.email == userLogin.email) {
          userHistory = user;
          return;
        }
      });
      const cartHistory = userHistory.cartHistory;
        // console.log(22, cartChoosen);
        const contentHistory = document.querySelector(
          "#content-cart-history"
        );
}