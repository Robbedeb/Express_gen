var express = require('express');
var router = express.Router();

let accounts = [
  {
    "id": 1,
    "username": "paulhal",
    "role": "admin"
  },
  {
    "id": 2,
    "username": "johndoe",
    "role": "guest"
  },
  {
    "id": 3,
    "username": "sarahjane",
    "role": "guest"
  }
];

/* GET home page. */
router.get('/accounts', (request, response) => {
  response.json(accounts);
});

router.post('/accounts', (request, response) => {
  const incomingAccount = request.body;

  accounts.push(incomingAccount);

  response.json(accounts);
})

router.get('/accounts/:id', (request, response) => {
  const accountId = Number(request.params.id);
  const getAccount = accounts.find((account) => account.id === accountId);

  if (!getAccount) {
    response.status(500).send('Account not found.')
  } else {
    response.json(getAccount);
  }
});

router.delete('/accounts/:id', (request, response) => {
  const accountId = Number(request.params.id);
  const newAccounts = accounts.filter((account) => account.id != accountId);

  if (!newAccounts) {
    response.status(500).send('Account not found.');
  } else {
    accounts = newAccounts;
    response.send(accounts);
  }
});


module.exports = router;
