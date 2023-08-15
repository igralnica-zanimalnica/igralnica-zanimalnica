let auth0Client = null;
const fetchAuthConfig = () => fetch("/auth_config.json");
const configureClient = async () => {
    const response = await fetchAuthConfig();
    const config = await response.json();
  
    auth0Client = await auth0.createAuth0Client({
      domain: config.domain,
      clientId: config.clientId
    });
};
const query = window.location.search;
const shouldParseResult = query.includes("code=") && query.includes("state=");
const requireAuth = async (fn, targetUrl) => {
    const isAuthenticated = await auth0Client.isAuthenticated();
  
    if (isAuthenticated) {
      return fn();
    }
  
    return login(targetUrl);
  };

document.addEventListener('DOMContentLoaded', async function() {
  await configureClient();
  const isAuthenticated = await auth0Client.isAuthenticated();

  if (isAuthenticated) {
      window.history.replaceState({}, document.title, window.location.pathname);
      updateUI();
      return;
    }

  // check for the code and state parameters
  if (shouldParseResult) {
      const result = await auth0Client.handleRedirectCallback();
      if (result.appState && result.appState.targetUrl) {
          updateUI();
      }
      window.history.replaceState({}, document.title, "/");
    }
  });
  
const updateUI = async () => {
    if (!auth0Client) {
        // Wait until auth0Client is initialized
        setTimeout(() => updateUI(), 1000); // Retry after a short delay
        return;
    }
    const isAuthenticated = await auth0Client.isAuthenticated();
    const logoutButton = document.getElementById("btn-logout");
    const loginButton = document.getElementById("btn-login");

    if (logoutButton && loginButton) {
        logoutButton.disabled = !isAuthenticated;
        loginButton.disabled = isAuthenticated;
        loginButton.onclick = function(){login()};
        logoutButton.onclick = function(){logout()};
    }

    const gatedContent = document.getElementById("gated-content");
    const iptAccessToken = document.getElementById("ipt-access-token");
    const iptUserProfile = document.getElementById("ipt-user-profile");
    // add logic to show/hide gated content after authentication
    if (gatedContent && iptAccessToken && iptUserProfile) {
        if (isAuthenticated) {
            gatedContent.classList.remove("hidden");
            iptAccessToken.innerHTML = await auth0Client.getTokenSilently();
            iptUserProfile.textContent = JSON.stringify(await auth0Client.getUser());
        } else {
            gatedContent.classList.add("hidden");
         };
        };
};

const login = async (targetUrl) => {
  try {
    const options = {
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    };

    if (targetUrl) {
      options.appState = { targetUrl };
    }

    await auth0Client.loginWithRedirect(options);
  } catch (err) {
    console.log("Log in failed", err);
  }
};

const logout = async () => {
    try {
      await auth0Client.logout({
        logoutParams: {
          returnTo: window.location.origin
        }
      });
    } catch (err) {
      console.log("Log out failed", err);
    }
  };