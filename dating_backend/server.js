const express =require('express')
const app = express()
const bodyParser = require('body-parser')
const knex = require('./knex')
const path = require('path');
const port = process.env.PORT || 3000

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Headers Cors
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PATCH,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

///////////////////////////////////////
// ****** Users Table Routes ****** //

// Get All Route
app.get('/users', (req, res, next) => {
    knex('users')
    .then(data=>{
        res.status(200).send(data)
    })
})

// Get One user
app.get('/users/:id',(req,res,next) => {
    let id = req.params.id;
    knex('users')
    .where('id',id)
    .select('id','spotify_id','name','age','gender','photo','age_range',
    'radius','desired_gender')
    .then(data => {
        res.send(data[0])
    })
    .catch(err => {
        res.status(404).send(err)
    })
})

// Post New User **WORKING**
app.post('/users', function(req, res, next){
    knex('users').insert({
        name: req.body.name, // From Spotify
        spotify_id: req.body.spotify_id,
        age: req.body.age, 
        gender: req.body.gender, 
        photo: req.body.photo, 
        age_range: req.body.age_range,
        radius: req.body.radius,
        desired_gender: req.body.desired_gender,
        top_tracks: req.body.top_tracks,
        top_artists: req.body.top_tracks,
        // thumbs_down: id+':'+req.body.thumbs_down,
    },'*') 
    .then(user=>{
        res.status(204).send({id:user[0].id})
    })
    .catch(err => {
        res.status(404).send(err)
    })
})

// Patch User info **WORKING**
app.patch('/users/:id',(req,res,next) => {
    let id = req.params.id; 
    knex('users')
    .where('id',id)
    .update({
        spotify_id: req.body.spotify_id,
        age: req.body.age, 
        gender: req.body.gender, 
        photo: req.body.photo, 
        age_range: req.body.age_range,
        radius: req.body.radius,
        desired_gender: req.body.desired_gender,
        thumbs_down: req.body.thumbs_down,
    })
    .then(data =>{
        res.send(data[0])
    })
    .catch(err => {
        res.status(404).send(err)
    })
})

// Delete User **WORKING**
app.delete('/users/:id',(req,res,next) => {
    let id = req.params.id;
    let body = req.body;
    knex('users')
    .where('id',id)
    .returning(['id','name','spotify_id','age','gender', 'gender', 'photo',
    'age_range','radius','desired_gender','thumbs_up','thumbs_down'])
    .del()
    .then(data => {
        res.send(data[0])
    })
    .catch(err => {
        res.status(404).send(err)
    })
})


///////////////////////////////////////
// ****** Likes Table Routes ****** //

// Get All Match **WORKING**
app.get('/likes', (req, res, next) => {
    knex('likes')
    .then(data=>{
        res.status(200).send(data)
    })
})

// Get One likes **WORKING**
app.get('/likes/:id',(req,res,next) => {
    let id = req.params.id;
    console.log('logging',req.params.id)
    knex('likes')
    .where('id',id)
    .select('id','user_id_one','user_id_two')
    .then(data => {
        res.send(data[0])
    })
    .catch(err => {
        res.status(404).send(err)
    })
})

// Post All Match **WORKING**
app.post('/likes', function(req, res, next){
    const { user_id_one, user_id_two } = req.body
    knex('likes').insert({
        user_id_one: user_id_one,
        user_id_two: user_id_two,
    },'*') 
    .then(()=>{
        return knex('likes').where({'user_id_two': user_id_one, 'user_id_one': user_id_two})
    })
    .then(match=>{
        const object = {
            match: false
        }
        if(match[0]){
            object.match = true
            object.matchInfo = match[0]
        }
        res.send(object) // Ask Teddi about status not returning true
    })
    .catch(err => {
        res.status(404).send(err)
    })
})

// Delete likes **WORKING**
app.delete('/likes/:id',(req,res,next) => {
    let id = req.params.id;
    let body = req.body;
    knex('likes')
    .where('id',id)
    .returning(['id','user_id_one','user_id_two'])
    .del()
    .then(data => {
        res.send(data[0])
    })
    .catch(err => {
        res.status(404).send(err)
    })
})

///////////////////////////////////////
// ****** dislikes Table Routes ****** //

app.get('/dislikes', (req, res, next) => {
    knex('dislikes')
    .then(data=>{
        res.status(200).send(data)
    })
})

app.get('/dislikes/:id',(req,res,next) => {
    let id = req.params.id;
    knex('dislikes')
    .where('user_id_one',id)
    .select('dislikesUser')
    .then(data => {
        let newData =data.map(item => {
            return item.dislikesUser
        })
        //console.log(newData)
        res.send(newData)
    })
    .catch(err => {
        res.status(404).send(err)
    })
})

app.post('/dislikes', function(req, res, next){
    const { user_id_one, dislikesUser } = req.body
    knex('dislikes').insert({
        user_id_one: user_id_one,
        dislikesUser: dislikesUser,
    },'*') 
    .then(()=>{
        return knex('dislikes').where({'user_id_one': user_id_one})
        .returning('dislikesUser')
    })
    .then(match=>{
        const object = {
            match: false
        }
        if(match[0]){
            object.match = true
            object.matchInfo = match[0]
        }
        res.send(object) // Ask Teddi about status not returning true
    })
    .catch(err => {
        res.status(404).send(err)
    })
})

// Error Routes
app.use((err, req, res, next) => {
    const status = err.status || 404
    res.status(status).json({ error: err })
})
app.use((req, res, next) => {
    res.status(404).json({ error: { status: 404, message: 'Not found' }})
})

const listener = () => `Listening on port ${port}!`
app.listen(port, listener)
 