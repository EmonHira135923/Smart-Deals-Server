import admin from "../config/firebaseAdmin.js";

export const verifyFirebaseAdmin = async (req, res, next) => {
  const authoraization = req.headers.authorization;
  if (!authoraization) {
    return res.status(401).send({
      message: "Unauthoraized Person",
      success: false,
    });
  }

  const token = authoraization.split(" ")[1];
  //   console.log(token);

  if (!token) {
    return res.status(401).send({
      message: "Unauthoraized Person",
      success: false,
    });
  }

  try {
    const userinfo = await admin.auth().verifyIdToken(token);
    req.token_email = userinfo.email;
    // console.log("from middleware", userinfo);
    next();
  } catch {
    return res.status(401).send({
      message: "Unauthoraized Person",
      success: false,
    });
  }

  //   next();
};
