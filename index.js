const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
var mysql = require('mysql2')

var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Jibimax123',
    database:'bingo'
})



const app = express()
app.use(bodyParser.json())
app.use(cors({origin:"*"}))

app.post('/signup',(req,res)=>{
    const id = req.body.id;
    const name = req.body.name;
    const email = req.body.email;
    const pass = req.body.password;

    var sql = 'INSERT INTO users values ?'

    var values = [[id,name,email,pass,0.0]]

    con.query(sql,[values],(err,result)=>{
        if(err)
        {
            res.json(err)
        }
        else
        {
            commitfunc()
            const reply = {message:'Player Added'}
            res.json(reply)
        }
    })

    function commitfunc()
    {
        sql = 'COMMIT'
        con.query(sql,(err,result)=>{
            if(err)
            {
                throw err;
            }
        })
    }

  
})

app.get('/allusers',(req,res)=>{
    var sql = 'SELECT * FROM users;'

    con.query(sql,(err,result)=>{
        if(err)
        {
            res.json(err)
        }
        else
        {
            res.json(result)
        }
    })
})

app.post('/login',(req,res)=>{
    const id = req.body.id;
    const pass = req.body.password;

    var sql = 'SELECT * FROM users WHERE id = ? AND userpassword = ?'

    con.query(sql,[id,pass],(err,result)=>{
        if(err)
        {
            res.json(err)
        }
        else
        {
            if(result.length == 0)
            {
                const reply = {message:'USERID or Password Incorrect'}
                res.status(404).json(reply)
            }
            else
            {
                res.status(200).json(result)
            }
        }
    })
})

app.post('/getbalance',(req,res)=>{
    const id = req.body.id;

    var sql = 'SELECT balance FROM users WHERE id = ?'

    con.query(sql,[id],(err,result)=>{
        if(err){
            res.json(err);
        }
        else
        {
            res.json(result)
        }
    })
})

app.post('/betsPlaced',(req,res)=>{
    const id = req.body.id;
    const target_bets = req.body.target_bet;
    const bets = JSON.parse(target_bets)
    const pos1 = req.body.pos;
    const pos = parseInt(pos1)

    var sql = 'SELECT * FROM users WHERE id = ?'

    con.query(sql,[id],(err,result)=>{
        if(err){
            res.json(err);
        }
        else
        {
            if(result.length == 0)
            {
                const reply = {message : "User Not Found"}
                res.status(404).json(reply)
            }
            else
            {
                if(pos == 0)
                {
                    const reply = {message : "Bets Have Been Placed",
                                   data:{win_amount : 0}}
                    res.status(200).json(reply)

                }
                else
                {
                    const reply = {message : "Bets Have Been Placed",
                                   data:{win_amount : bets[pos-1]}}
                    res.status(200).json(reply)
                }
            }
        }
    })
})

app.post('/takeAmount',(req,res)=>{
    const id = req.body.id;
    const currbal = req.body.current_balance;
    const curr = parseFloat(currbal)

    var sql = "SELECT * FROM users WHERE id = ?"

    con.query(sql,[id],(err,result)=>{
        if(err)
        {
            res.json(err)
        }
        else
        {
            if(result.length == 0)
            {
                const reply = {message:'USER NOT FOUND'}
                res.status(404).json(reply)
            }
            else
            {
                sql = "UPDATE users SET balance = ? WHERE id = ?"

                con.query(sql,[curr,id],(err,result)=>{
                    if(err)
                    {
                        res.json(err)
                    }
                    else
                    {
                        commitfunc()
                        const reply = {message:'BALANCE HAS BEEN UPDATED'}
                        res.status(200).json(reply)
                    }
                })

                function commitfunc()
                {
                    sql = 'COMMIT'
                    con.query(sql,(err,result)=>{
                        if(err)
                        {
                            throw err;
                        }
                    })
                }
            }
        }
    })
})


app.listen(3000,()=>{
    console.log("Server Started")
})