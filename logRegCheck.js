let userLogin = null;
const allUsers = [];
allUsers.push({username: "p", email: "test@gmail.com", password: "testuser", firstname: "Tester", lastname: "Tester", birthDate: "04/23/2023"})




function addUser(uName, eMail, pass, fName, lName, bd ) {
    newUser = {username: uName,  email: eMail, password: pass, firstname: fName, lastname: lName, birthDate: bd}
    allUsers.push(newUser);
}


function isValidUser(user, pass) {
    for (let i = 0; i < allUsers.length; i++) {
        if (allUsers[i].username === user && allUsers[i].password === pass) {
            return true;
        }
    }
    return false;
}


function loginSubmit(){
    let $inputs = $('#LForm :input');
    let info = {};
    $inputs.each(function() {
        info[this.name] = $(this).val();
    });

    console.log(values);
    if(isValidUser(values["username"], values["password"])){        
        LoginToSettingDisplay();
    }

    else {
        alert("Invalid username or password");
        clearLogPage();
        loginPage();
    }
}

// TODO - check this
function clearLogPage(){
    document.getElementById('usernameLogin').value='';
    document.getElementById('passwordLogin').value='';
}

// TODO - check this
function clearRegPage(){
	document.getElementById('username').value = '';
	document.getElementById('email').value = '';
	document.getElementById('password').value = '';
	document.getElementById('passwordAuth').value = '';
    document.getElementById('firstname').value = '';
	document.getElementById('lastname').value = '';
    document.getElementById('birthDate').value = '';
}

