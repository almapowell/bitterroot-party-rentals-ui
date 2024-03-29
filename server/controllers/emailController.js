const aws = require("aws-sdk");
const moment = require("moment");
const ses = new aws.SES({ region: "us-east-1" });

exports.contactForm = async (req, res) => {
  const { email, message, name } = req.body;

  sesContact(
    ["almapowell28@gmail.com", "bitterrootpartyrentals@gmail.com"],
    email,
    message,
    name
  )
    .then((val) => {
      res.send("success");
    })
    .catch((e) => {
      res.send("error " + e);
    });
};

const sesContact = (emailTo, emailFrom, message, name) => {
  const params = {
    Destination: {
      ToAddresses: emailTo,
    },
    Message: {
      Body: {
        Text: {
          Data: `Name: \n${name} \n\n${message} \n\nFrom: \n${emailFrom}`,
        },
      },
      Subject: {
        Data: `Contact Form`,
      },
    },
    Source: "bitterrootpartyrentals@gmail.com",
  };
  return ses.sendEmail(params).promise();
};

exports.requestForm = async (req, res) => {
  const { email, body, name } = req.body;

  console.log({ email, body, name });
  sesRequest(
    ["almapowell28@gmail.com", "bitterrootpartyrentals@gmail.com"],
    email,
    body,
    name
  )
    .then((val) => {
      res.send("success");
    })
    .catch((error) => {
      res.send("error " + error);
    });
};

const sesRequest = (emailTo, emailFrom, body, name) => {
  const { cartItems, customerInformation } = body;
  const { phone, address, delivery, notes, referal, date } =
    customerInformation;

  const getReferal = () => {
    switch (referal) {
      case 1:
        return "Word of Mouth";
      case 2:
        return "Google";
      case 3:
        return "Social Media";
      case 4:
        return "Repeat Cusomer";
      case 5:
        return "Other";
      default:
        return "Didn't answer";
    }
  };

  const params = {
    Destination: {
      ToAddresses: emailTo,
    },
    Message: {
      Body: {
        Text: {
          Data: `
Cart Items: \n
  ${cartItems.map((item) => item.title + " - " + item.quantity + "\n")}
\n

Customer Information: \n
  Name: ${name} \n
  Phone Number: ${phone}\n
  Address: ${address}\n
  Deliver: ${delivery ? "Yes" : "No"}\n
  Referal: ${getReferal()}\n
  ${notes ?? `Notes: ${notes}\n`}
  Date: ${moment(date).format("MMMM Do YYYY")}\n
\n

From: \n${emailFrom}`,
        },
      },
      Subject: {
        Data: `A Request Has Been Made!!`,
      },
    },
    Source: "bitterrootpartyrentals@gmail.com",
  };
  return ses.sendEmail(params).promise();
};
