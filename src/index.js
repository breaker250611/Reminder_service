const express = require("express");
const bodyParser = require("body-parser");
const { port } = require("./config/serverConfig");
const { sendEmail } = require("./services/email-service");
const setupAndStartServer = () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(port, () => {
    console.log("server started on port:", port);

    //testing out with sample email
    // sendEmail(
    //   "your_email_id_here",
    //   "recipient_email_here",
    //   "Test Subject",
    //   "This is a test email body."
    // );
  });
};

setupAndStartServer();
