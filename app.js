const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/aboutContent', (req, res, next) => {
  res.json({
    pageTitle: "About",
    pageContent: "About page stuff ipsum dolor amet jowl pork chop biltong, capicola sausage short loin tenderloin kielbasa. Swine pastrami picanha jowl brisket shank. Tongue pork landjaeger corned beef venison sausage. Alcatra frankfurter meatloaf cow, tongue pancetta beef ribs. Porchetta boudin chislic beef jowl prosciutto ground round chuck capicola brisket ham beef ribs.",
  });
});

app.get('/homeContent', (req, res, next) => {
  res.json({
    pageTitle: "Home",
    pageContent: "Home page stuff ipsum dolor amet jowl pork chop biltong, capicola sausage short loin tenderloin kielbasa. Swine pastrami picanha jowl brisket shank. Tongue pork landjaeger corned beef venison sausage. Alcatra frankfurter meatloaf cow, tongue pancetta beef ribs. Porchetta boudin chislic beef jowl prosciutto ground round chuck capicola brisket ham beef ribs.",
  });
});

app.get('/about', (req, res, next) => {
  res.render('about');
});

app.use(['/', '/home'], (req, res, next) => {
  res.render('index');
});

app.listen(PORT, () => {
  console.log('History api demo up at ', PORT);
});