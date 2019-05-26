const express=require('express')
const bodyParser=require('body-parser')
const{ObjectID,MongoClient}=require('mongodb')
const assert=require('assert')

const app=express()
app.use(bodyParser.json())
const MongoUrl='mongodb://localhost:27017'
const database='Sante'

MongoClient.connect(MongoUrl,{useNewUrlParser:true},(err,client)=>{
    assert.equal(null,err,'can not connect to database')
    const db=client.db(database) 
    if(db) console.log('connexion a la base de donnee est etablie') 

//gestion de la collection medicament
//add medicament
app.post('/addmedicament',(req,res)=>{
    let newmedicament=req.body
    db.collection('medicament').insertOne(newmedicament,(err,data)=>{
        if(err) res.send('cant not add contact')
        else res.send(data)
    })
})
//get medicament
app.get('/getmedicament',(req,res)=>{
db.collection('medicament').find().toArray((err,data)=>{
     if(err) res.send('can not get medicaments')
    else res.send(data)
})   
}) 
//get medicamentbyname
app.get('/getmedicament/:name',(req,res)=>{
  
    let nameuser=req.params.name    
    db.collection('medicament').find({name:nameuser}).toArray((err,data)=>{     
      if(err) res.send('il y a pas du medicament a afficher ')
      else res.send(data)    
    })
    }) 
//get medicamentbysousclasse
app.get('/getmedicamentbysousclasse/:classe',(req,res)=>{
  
    let classeuser=req.params.classe    
    db.collection('medicament').find({sousclasse:classeuser}).toArray((err,data)=>{     
      if(err) res.send('il y a pas du medicament a afficher ')
      else res.send(data)    
    })
    }) 

//delete medicament
app.delete('/deletemedicament/:id',(req,res)=>{
    let id=ObjectID(req.params.id)
    db.collection('medicament').findOneAndDelete({_id:id},(err,data)=>{
        if (err) res.send('can not delete medicament')
        else res.send(data)
    })
})
//edit medicament
app.put('/editmedicament/:id',(req,res)=>{
    let id=ObjectID(req.params.id)
    let updated=req.body
db.collection('medicament').findOneAndUpdate({_id:id},{$set:{...updated}},(err,data)=>{
    if(err) res.send('can not edit the contacts')
    else res.send (data)
})
})

//gestion de la collection Question
//add Question
app.post('/poserquestion',(req,res)=>{
    let newquestion=req.body
    db.collection('question').insertOne(newquestion,(err,data)=>{
        if(err) res.send('la question nest pas envoyée' )
        else res.send(data)
    })
})
//get question
app.get('/getquestion',(req,res)=>{
db.collection('question').find().toArray((err,data)=>{
     if(err) res.send('can not get questions')
    else res.send(data)
})   
}) 

//get question by categorie
app.get('/getquestionbycategorie/:categorie',(req,res)=>{
   
    let categorieuser=req.params.categorie   
    db.collection('question').find({categorie:categorieuser}).toArray((err,data)=>{     
      if(err) res.send('il y a pas du question a afficher ')
      else res.send(data)    
    })
    })     


//delete question
app.delete('/deletequestion/:id',(req,res)=>{
    let id=ObjectID(req.params.id)
    db.collection('question').findOneAndDelete({_id:id},(err,data)=>{
        if (err) res.send('can not delete contact')
        else res.send(data)
    })
})
//edit question
app.put('/editquestion/:id',(req,res)=>{
    let id=ObjectID(req.params.id)
    let updated=req.body
db.collection('question').findOneAndUpdate({_id:id},{$set:{...updated}},(err,data)=>{
    if(err) res.send('can not edit the contacts')
    else res.send (data)
})
})

//gestion de la collection doctor
//add doctor
app.post('/adddoctor',(req,res)=>{
    let newdoctor=req.body
    db.collection('doctor').insertOne(newdoctor,(err,data)=>{
        if(err) res.send('cant not add doctor')
        else res.send(data)
    })
})
//get medecin
app.get('/getdoctor',(req,res)=>{
db.collection('doctor').find().toArray((err,data)=>{
     if(err) res.send('can not get doctors')
    else res.send(data)
})   
})
//get doctor by email and password

app.get('/getdoctor/:email/:password',(req,res)=>{
    let useremail=req.params.email
    let userpassword=req.params.password
    db.collection('doctor').find({ $and:[{email:useremail},{password:userpassword}]}).toArray((err,data)=>{     
      if(err) res.send('il y a pas du doctor a afficher ')
      else res.send(data)    
    })
    }) 

    //get doctor by email 
    app.get('/getdoctor/:email/:password',(req,res)=>{
        let useremail=req.params.email
        db.collection('doctor').find({ email:useremail}).toArray((err,data)=>{     
          if(err) res.send('il y a pas du doctor a afficher ')
          else res.send(data)    
        })
        })

//get doctor by _id

app.get('/getdoctor/:id',(req,res)=>{
    let userid=ObjectID(req.params.id)
    db.collection('doctor').find({ _id: userid}).toArray((err,data)=>{     
      if(err) res.send('il y a pas du doctor a afficher ')
      else res.send(data)    
    })
    }) 


//delete medicament
app.delete('/deletedoctor/:id',(req,res)=>{
    let id=ObjectID(req.params.id)
    db.collection('doctor').findOneAndDelete({_id:id},(err,data)=>{
        if (err) res.send('can not delete doctor')
        else res.send(data)
    })
})
//edit doctor
app.put('/editdoctor/:id',(req,res)=>{
    let id=ObjectID(req.params.id)
    let updated=req.body
db.collection('doctor').findOneAndUpdate({_id:id},{$set:{...updated}},(err,data)=>{
    if(err) res.send('can not edit the doctor')
    else res.send (data)
})
})

//gestion de la collection Reponse
//add reponse
app.post('/repondquestion/:id',(req,res)=>{
    let newreponse=req.body
    let id=ObjectID(req.params.id)
    db.collection('reponse').insertOne(newreponse,(err,data)=>{
        if(err) res.send('cant not add reponse')
        else res.send(data)
    })
}) 
//ajouter reponse
app.post('/repondquestion',(req,res)=>{
    let newreponse=req.body
    db.collection('reponse').insertOne(newreponse,(err,data)=>{
        if(err) res.send('cant not add reponse')
        else res.send(data)
    })
})

//getReponse by idquestion 

app.get('/getreponse/:_id',(req,res)=>{
    
    let id=ObjectID(req.params._id)
    db.collection('reponse').find().toArray((err,data)=>{     
      if(err) res.send('il y a pas du reponse a afficher ')
      else res.send(data)    
    })
    })  
//getReponse

app.get('/getreponse',(req,res)=>{
    
    db.collection('reponse').find().toArray((err,data)=>{     
      if(err) res.send('il y a pas du reponse a afficher ')
      else res.send(data)    
    })
    })  


//delete reponse
app.delete('/deletereponse/:id',(req,res)=>{
    let id=ObjectID(req.params.id)
    db.collection('reponse').findOneAndDelete({_id:id},(err,data)=>{
        if (err) res.send('can not delete reponse')
        else res.send(data)
    })
})
//edit reponse
app.put('/editreponse/:id',(req,res)=>{
    let id=ObjectID(req.params.id)
    let updated=req.body
db.collection('reponse').findOneAndUpdate({_id:id},{$set:{...updated}},(err,data)=>{
    if(err) res.send('can not edit the reponse')
    else res.send (data)
})
})

















})
app.listen(3010,(err)=>{
assert.equal(null,err,'server not running')
console.log('the server is running on port 3010')
})



