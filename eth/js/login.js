
// EC SessionInformation
username = null;
password = null;
account = null;
currentChildAccount = null;

restUrl = "https://api-sandbox.everyware-cloud.com/v2"

function ajaxRequest(obj) {
	obj.beforeSend = function(req) {
		req.setRequestHeader('Authorization', "Basic " + btoa(username + '@' + currentChildAccount + ":" + password))
	}

	return $.ajax(obj);
}


function setChildAccount(name) {
	currentChildAccount = name;
	localStorage.setItem("EC_CHILD", currentChildAccount);
}




function interactiveLogin(completedFn) {

	username = localStorage.getItem("EC_USER");
	password = localStorage.getItem("EC_PASS");
	account = localStorage.getItem("EC_ACCOUNT");
	currentChildAccount = localStorage.getItem("EC_CHILD");

	function testLogin() {
		box.hide();
		ajaxRequest({
			url: restUrl + "/accounts.json",
			method: "GET",
			dataType: "json"
		}).done(function(resp) {
			box.show();
			boxContainer.remove();
			completedFn();
			localStorage.setItem("EC_USER", username);
			localStorage.setItem("EC_PASS", password);
			localStorage.setItem("EC_ACCOUNT", account);
			localStorage.setItem("EC_CHILD", currentChildAccount);
		}).error(function() {
			box.show();
			if(username && username != null) {
				alert("Bad credentials");
			}
		});
	}

	var box = $("<section></section>")
	box.addClass("loginBox");

	box.append('<header>Everyware Cloud Login</header><hr>');

	var accountBox = $('<input type="text"></input>');
	box.append('Account ')
	box.append(accountBox)
	box.append('<br>')

	var usernameBox = $('<input type="text"></input>');
	box.append('Username ')
	box.append(usernameBox)
	box.append('<br>')

	var passwordBox = $('<input type="password"></input>');
	box.append('Password ')
	box.append(passwordBox)
	box.append('<br>')

	var button = $('<input type="button" value="Login"></input>');
	box.append(button)

	var boxContainer = $('<div class="loginBoxContainer"></div>')
	boxContainer.append('<span class="dummy"></span>');
	boxContainer.append(box);
	$("body").append(boxContainer);

	testLogin();

	accountBox.on('keydown', function() {
		setTimeout(function() {
			usernameBox.val(accountBox.val())
		}, 0);
	});

	button.on('click', function() {
		account = accountBox.val();
		username = usernameBox.val();
		password = passwordBox.val();
		currentChildAccount = account;
		testLogin();
	});

}

function logout() {
	localStorage.removeItem("EC_USER");
	localStorage.removeItem("EC_PASS");
	localStorage.removeItem("EC_ACCOUNT");
	localStorage.removeItem("EC_CHILD");
	location.reload();
}
