const express = require ('express');
const cors = require('cors');
const TrackingCorreios = require('tracking-correios');
const app = express();

app.use(cors()); //Posso passar os dominios que eu quero que ela aceite


const PORT = 3001; //estou usando o front na 3000


const get = (obj, path, fallback = null) => {
  const pathKeys = (typeof path === 'string') ? path.split('.') : [];
  const result = pathKeys.reduce((value, key)=> value && value[key], obj);
  return result || fallback;
}

app.get('/', (req, res) =>{
  const tracking = get(req, 'query.tracking');

  TrackingCorreios.track(tracking)
    .then((result) => {
      const events = get(result, '0.evento');
      //console.log('evento', get(result, '0.evento'));

      res.json({ message: 'Chegou no back', tracking, events });
    })
    
    .catch((error) => {
        res.json({message: 'error', error });
    });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));


