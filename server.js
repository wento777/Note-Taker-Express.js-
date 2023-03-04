
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');


app.use(express.json());
app.use(express.urlencoded({extended: true }));
    
app.use(express.static('public'));


// added /api before  apiRoutes 
app.use('/api', apiRoutes);

//added  htmlRoutes

app.use(htmlRoutes);


app.listen(PORT, () => 

console.log(`APP listening on PORT: ${PORT}`));
