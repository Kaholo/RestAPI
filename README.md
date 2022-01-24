# Kaholo RestAPI

The main goal of this plugin is to realize the Rest API requests. 
You may ask why for ?  
Nova days we have a lot of tools which are digng the same e.g. Postman, Insomnia etc but  
now one of them in easly visual way halp to make flows for each requests. 

# Needs
Create plugin for RestAPI
Create plugin for Assertions

# Links
- [Postman Collection Examples](https://www.postman.com/postman/workspace/test-examples-in-postman/overview)
- [Chuck Norris Jokes](https://api.chucknorris.io/)

# How to test the plugin

Firt mane sure that exported collection is working properly.  
You may want to install on local e..g using nawman  
## How to install nawman 
```
    npm install -g newman
```
[Hpow to install Newman](https://support.postman.com/hc/en-us/articles/115003703325-How-to-install-Newman)
### How to execute collection from CLI
```
    newman run assets/getJoke-From-ChuckNorris-Postman-collection.json
```
![newmanExecution](/docs/newmanExecution.png)