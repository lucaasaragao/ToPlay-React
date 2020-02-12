const express = require ('express');
const cors = require('cors');
const TrackingCorreios = require('tracking-correios');
const app = express();

app.use(cors()); //Posso passar os dominios que eu quero que ela aceite


const PORT = 3001; //estou usando o front na 3000

app.get('/', (req, res) =>{
  const { tracking } = req.query;

  TrackingCorreios.track(tracking)
    .then((result) => {
      res.json({ message: 'Chegou no back', tracking, result });
    })
    
    .catch((error) => {
        res.json({message: 'error', error });
    });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));


