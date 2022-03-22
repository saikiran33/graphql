const express = require('express');
const { ApolloServer, gql} = require('apollo-server-express');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const mongoose = require('mongoose')

async function startServer(){
const app = express();
const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
 });
 await apolloServer.start();
 apolloServer.applyMiddleware({app:app ,path:'/truly'})
 app.use((req,res)=>{
res.send('Graphql is working...')
 });
 await mongoose.connect('mongodb://localhost:27017/post_db',{
    // useUnifiedTopology:true,
      useNewUrlParser:true,
 });
 app.listen(4000,() => console.log('server is running on port'));
}
startServer();
