// Retrieve tokens from localStorage
var accessToken = localStorage.getItem("access_token");
var idToken = localStorage.getItem("id_token");

if (!accessToken || !idToken) {
    console.error("Access Token or ID Token missing. Redirecting to login.");
    window.location.href = 'http://127.0.0.1:5500/index.html';
}

var UserName, UserEmail;

// AWS Cognito Configuration
const aws_region = 'us-east-1';
AWS.config.region = aws_region; 

AWS.config.apiVersions = {
    cognitoidentityserviceprovider: '2016-04-18'
}; 

var cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider(); 

var params = {
    AccessToken: accessToken
};

cognitoidentityserviceprovider.getUser(params, function(err, data) {
    if (err) {
        console.error("Error fetching user details:", err);
        window.location.href = 'http://127.0.0.1:5500/index.html';
    } else {
        console.log("User Data:", data);

        // Extract user attributes
        data.UserAttributes.forEach(attr => {
            if (attr.Name === 'name') UserName = attr.Value;
            if (attr.Name === 'email') UserEmail = attr.Value;
        });

        // Display user details
        document.getElementById('userName').innerText = UserName;
        document.getElementById('userEmail').innerText = UserEmail;
    }
});
