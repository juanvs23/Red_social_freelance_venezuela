function onSignIn(googleUser) {
	var profile = googleUser.getBasicProfile();
	send_get(profile);
}


function signOut() {
	var auth2 = gapi.auth2.getAuthInstance();
	auth2.disconnect();
	/*auth2.signOut().then(function () {
		console.log('User signed out.');
	});*/
}


function send_get(profile) {
	var full_name = profile.getName();
	var given_name = profile.getGivenName();
	var family_name = profile.getFamilyName();
	var image_url = profile.getImageUrl();
	var email = profile.getEmail();
	var url = "visual/entrada.php?";
	url = url + "full_name=" + full_name + "&";
	url = url + "given_name=" + given_name + "&";
	url = url + "family_name=" + family_name + "&";
	url = url + "image_url=" + encodeURIComponent(image_url) + "&";
	url = url + "email=" + email;
	url = encodeURI(url);
	console.log('out ' + out);
	if (!out) {
		window.location.assign(url);
	} else {
		signOut();
		out = false;
	}
}


/*function send_ajax(profile) {
	var data = new FormData();
	data.append('full_name', profile.getName());
	data.append('given_name', profile.getGivenName());
	data.append('family_name', profile.getFamilyName());
	data.append('image_url', profile.getImageUrl());
	data.append('email', profile.getEmail());
	var url = "visual/tables.php";
	var request = new XMLHttpRequest();
	request.addEventListener('load', show, false);
	request.open("POST", url, true);
	request.send(data);
}*/
			
			
/*function show(e) {
	console.log(e);
	document.body.innerHTML = e.target.response;
}*/
