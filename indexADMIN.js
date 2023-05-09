    let dataUser = JSON.parse(localStorage.getItem("accounts"));

renderUser(dataUser);
function renderUser(dataUser) {
    // console.log(111111,dataUser);
    const elementUsers = document.querySelector('tbody')
    let contentUser = ""
    dataUser.forEach((user, index) => {


        contentUser += `<tr>
            <td>${index + 1}</td>
            <td>${user.userName}</td>
            <td>${user.email}</td>`
            if(user.status === true)
            {
                contentUser += `<td><button id = "btn-active" onclick="handleAtiveUsers('${user.email}')">Block</button></td>`  
            }
            else
            {
                contentUser += `<td><button id = "btn-block" onclick="handleAtiveUsers('${user.email}')">Active</button></td>`  
            }

            contentUser += `<td>${user.isadmin}</td>
        </tr>`
    });
    elementUsers.innerHTML = contentUser;
}

function handleSearch(value) {
    const search = dataUser.filter((index) =>

        index.userName.toLowerCase().includes(value.toLowerCase())
    );

    renderUser(search);
}
// 
function handleAtiveUsers(email) {
    const userDB = JSON.parse(localStorage.getItem("accounts"));
    console.log(11111,userDB);
    userDB.forEach((user) => {
        
        if (email === user.email) {
            if (user.status === true) {
                user.status = false;
            }else {
                user.status = true;
            }
        }
    });
    localStorage.setItem("accounts",JSON.stringify(userDB))
    renderUser(userDB);
}



