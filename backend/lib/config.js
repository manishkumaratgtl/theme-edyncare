const allConfig = {
    "dev": {
        "BASEURL": "https://www.edyn.care",
        "HELLOSIGN_KEY": "309dc20ae719d06124eea96fac9fdf681a3c3144ad24d16350b58da6ef0b24d3",
        "EMAIL_SENDER": "oliver@edyn.care",
        "STRIPE_SECRET": "sk_test_fcg7HwmD6XFb7N8QacI4H41f",
        "STRIPE_API_DOMAIN": "https://connect.stripe.com/",
        "AUTH0_CLIENTID": "XH9j5S5uVE9nhADfb5vXByDfRy6t4PV6",
        "AUTH0_CLIENT_SECRET": "OtB3YtKLbxuTH58iAi-y8kOo9By2Zx33zlvFB_fSGl6wvJdig6dPhCLxLwJ2Ujmf",
        "AUTH0_API_DOMAIN": "https://edyn-care.eu.auth0.com/",
        "ONFIDO_TOKEN": "test_K5XGNngnBWhVZEHxxF3SgC4LHIWfWN7I",
        "GOOGLE_API_KEY": "AIzaSyBKVf4RyVAi691NxScRdAi2eXA3YHuKp2Y",
        "CALENDLY_API_KEY": "HFBBOIOLMFFRPVM47LO423MXYIFHO4DF"
    },
    "local": {
        "BASEURL": "http://localhost:3000",
        "HELLOSIGN_KEY": "309dc20ae719d06124eea96fac9fdf681a3c3144ad24d16350b58da6ef0b24d3",
        "EMAIL_SENDER": "oliver@edyn.care",
        "STRIPE_SECRET": "sk_test_fcg7HwmD6XFb7N8QacI4H41f",
        "STRIPE_API_DOMAIN": "https://connect.stripe.com/",
        "AUTH0_CLIENTID": "XyPYZLpN0TdyV6wX37htkRqP2Rm9Ig6d",
        "AUTH0_CLIENT_SECRET": "-n3aUNFcMp2SuvAb5vrXvSU1z4hceGe6odHDfXM2dDvwvIm-b7bVZQGptLNOz0X8",
        "AUTH0_API_DOMAIN": "https://edyn-care.eu.auth0.com/",
        "ONFIDO_TOKEN": "test_K5XGNngnBWhVZEHxxF3SgC4LHIWfWN7I",
        "GOOGLE_API_KEY": "AIzaSyBKVf4RyVAi691NxScRdAi2eXA3YHuKp2Y",
        "CALENDLY_API_KEY": "HFBBOIOLMFFRPVM47LO423MXYIFHO4DF"
    }
};
let config = allConfig[process.env.STAGE_NAME];
module.exports = config;
