const jwt = require("jsonwebtoken");

const jwtKey = "fsgdghjhmgnfdxdchfjghjkjbhvgcfdxszazdfgghjuk";
const jwtExpirySeconds = 900;

const users = {
  ksanjiv0005: "$@tiy@0005",
  vinay07: "vinay@07",
};

const signIn = async (req, res) => {
  // Get credentials from JSON body
  const { username, password } = req.body;
  console.log(username, "and ", password);
  // const result = await user_account.login(username, password);
  // console.log("return type ", result);
  if (!username || !password || users[username] !== password) {
    //if (!result) {
    return res.status(401).end();
  }

  // Create a new token with the username in the payload
  // and which expires 300 seconds after issue
  const token = jwt.sign({ username }, jwtKey, {
    algorithm: "HS256",
    expiresIn: jwtExpirySeconds,
  });
  console.log("token:", token);

  // set the cookie as the token string, with a similar max age as the token
  // here, the max age is in milliseconds, so we multiply by 1000
  res.cookie("token", token, { maxAge: jwtExpirySeconds * 1000 });
  return res.status(200).json({ success: token });
};

const welcomex = (req, res) => {
  return res.status(200).json({ success: "welcome x" });
};
const welcome = (req, res) => {
  // We can obtain the session token from the requests cookies, which come with every request
  const token = req.cookies.token;
  console.log(token);

  // if the cookie is not set, return an unauthorized error
  if (!token) {
    return res.status(401).end();
  }

  var payload;
  try {
    payload = jwt.verify(token, jwtKey);
  } catch (e) {
    if (e instanceof jwt.JsonWebTokenError) {
      // if the error thrown is because the JWT is unauthorized, return a 401 error
      return res.status(401).end();
    }
    // otherwise, return a bad request error
    return res.status(400).end();
  }

  // Finally, return the welcome message to the user, along with their
  // username given in the token
  res.send(`Welcome ${payload.username}!`);
};

const refresh = (req, res) => {
  // (BEGIN) The code uptil this point is the same as the first part of the `welcome` route
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).end();
  }

  var payload;
  try {
    payload = jwt.verify(token, jwtKey);
  } catch (e) {
    if (e instanceof jwt.JsonWebTokenError) {
      return res.status(401).end();
    }
    return res.status(400).end();
  }
  // (END) The code uptil this point is the same as the first part of the `welcome` route

  // We ensure that a new token is not issued until enough time has elapsed
  // In this case, a new token will only be issued if the old token is within
  // 30 seconds of expiry. Otherwise, return a bad request status
  const nowUnixSeconds = Math.round(Number(new Date()) / 1000);
  if (payload.exp - nowUnixSeconds > 30) {
    return res.status(400).end();
  }

  // Now, create a new token for the current user, with a renewed expiration time
  const newToken = jwt.sign({ username: payload.username }, jwtKey, {
    algorithm: "HS256",
    expiresIn: jwtExpirySeconds,
  });

  // Set the new token as the users `token` cookie
  res.cookie("token", newToken, { maxAge: jwtExpirySeconds * 1000 });
  res.end();
};

const auth = (req, res, next) => {
  //const token = req.cookies.token;
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  console.log(token);

  if (!token) {
    return res.status(401).end();
  }

  let payload;
  try {
    payload = jwt.verify(token, jwtKey);
  } catch (e) {
    if (e instanceof jwt.JsonWebTokenError) {
      return res.status(401).end();
    }
    return res.status(400).end();
  }
  next();
};

module.exports = {
  signIn,
  welcome,
  refresh,
  welcomex,
  auth,
};
