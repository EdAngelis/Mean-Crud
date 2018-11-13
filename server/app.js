'use strict'

const http = require('http');
const mongoose = require('mongoose')
const path = require('path');
const cors = require('cors');
const express = require('express');
const app = express();
    
    //Routes
const controllers = require('./routes/controllersRoutes');
const routes = require('./routes/routes');

http.createServer(app)
mongoose.connect('mongodb://DeAngelis84:first821068@ds157383.mlab.com:57383/first_node',{ useNewUrlParser: true });
    // Seleciona a porta do Servidor
app.set('port', process.env.PORT || 3000);
    
    // Para o servidor poder renderizar html
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
    
    // Mostra onde está o diretorio das views
app.set('views', path.join(__dirname, '../cliente/views'));
    
    // middleawres
app.use(cors({origin:'http://localhost:4200/'}));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

    //Routes
app.use('/', routes);
app.use('/employees', controllers);


app.listen(app.get('port'),() =>{
    console.log('Servidor na Porta',+ app.get('port'));
});