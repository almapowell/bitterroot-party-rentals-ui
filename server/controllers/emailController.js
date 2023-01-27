const aws = require("aws-sdk");

const ses = new aws.SES({ region: "us-east-1" });

exports.contactForm = async (req, res) => {
  const { email, message, name } = req.body;

  sesContact(
    ["almapowell28@gmail.com", "jordanopowell@gmail.com"],
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
  console.log(2222, { emailTo, emailFrom, message, name });
  const params = {
    Destination: {
      ToAddresses: ["almapowell28@gmail.com"],
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
    Source: "jordanopowell@gmail.com",
  };
  return ses.sendEmail(params).promise();
};

exports.requestForm = async (req, res) => {
  const { email, body, name } = req.body;

  console.log({ email, body, name });

  sesRequest(
    ["almapowell28@gmail.com", "jordanopowell@gmail.com"],
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

  const params = {
    Destination: {
      ToAddresses: ["almapowell28@gmail.com"],
    },
    Message: {
      Body: {
        Text: {
          Data: `
Cart Items: \n
  Name: ${cartItems.map((item) => item.title)}
  Quantity: ${cartItems.map((item) => item.quantity)}
\n

Customer Information: \n
  Name: ${name} \n
  Phone Number: ${phone}\n
  Address: ${address}\n
  Deliver: ${delivery ? "yes" : "no"}\n
  Notes: ${notes}\n
  Date: ${date}\n
\n

From: \n${emailFrom}`,
        },
      },
      Subject: {
        Data: `REQUEST HAS BEEN MADE`,
      },
    },
    Source: "jordanopowell@gmail.com",
  };
  return ses.sendEmail(params).promise();
};
