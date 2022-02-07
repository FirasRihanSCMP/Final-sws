/* import bodyParser from "body-parser"; */
const express = require('express')
const path = require('path')

const bodyParser = require('body-parser')
const bcrypt = require('bcryptjs')
const cors = require('cors')
const mysql = require('mysql')
const cookieParser = require('cookie-parser')
const multer = require('multer')
/* import express from "express";
import mysql from "mysql";
import bcrypt from "bcryptjs";
import cors from "cors"; */
/* import { multipleUpload } from "./FileUpload.js"; */
/* import fs from 'fs'
import path from "path"; */
/* import Events from "../client/src/components/Events/Events"; */
/* import jwt from "jsonwebtoken"; */
/* import e from "express"; */
/* import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server"; */
/* import cookieParser from 'cookie-parser' */
/* import index from '../client/public/index' */
/* import multer from "multer"; */
const upload = multer({ dest: '../build/imgs/events' })
const app = express();
const db = mysql.createPool({
  host: "localhost",
  user: "adminSCMP",
  password: "db@SqlSCMP2021",
  database: "sc34mpr_SCMP",
  dateStrings: true,
});
const storage = multer.diskStorage({
  destination: (req, files, cb) => {
    cb(null, '../build/imgs/events')
  },
  filename: (req, files, cb) => {

    cb(null, files.originalname)

  }
})
app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000'
}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

/* app.get("/api", (req, res)=>{
    res.send('hello')
})
 */


/* app.get("/hi",(req,res,next)=>{
const returning=ReactDOMServer.renderToString(App);
res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="roots">${returning} </div>
</body>
</html>`)

}) */

/* app.use('^$',(req,res,next)=>{
  fs.readFile(path.resolve('../client/build/index.html'),'utf-8',(err,data)=>{
  const returnedData=data.replace('<div id="root"></div>',`<div id="root">${renderToString(<App/>)}</div>`)
    if(err){
      console.log(err)
      return res.status(500).send("some error happened")
    }
    return res.send(returnedData)
  })
}) */

app.use(express.static(path.resolve(__dirname, '../client', 'build')))

app.get("/api/Events", async (req, res) => {
  try {
    const sqlFetch = "SELECT * FROM EVENTS ORDER BY 'EID'";
    await db.query(sqlFetch, async (err, result) => {
      /*  console.log(result); */
      return res.send(result);
    });
  } catch (error) {
    console.log(error);
  }
});

app.post("/api/AddU_SCMP", async (req, res) => {
  try {
    const { U_Name, U_Pass, admin } = req.body;
    const U_NameModified = U_Name.toLowerCase();
    const hash = await bcrypt.hash(U_Pass, 10);
    console.log(hash);
    const UserInsert = "INSERT INTO `users` (`U_Name`, `U_Hash`,`admin`) VALUES (?,?,?)";
    await db.query(UserInsert, [U_NameModified, hash, admin], (err, result) => {
      console.log(err);
    });

    res.json('worked')
  } catch (error) {
    res.send("didn't work");
    // console.log(error);
  }

});


app.post("/api/SeperateEvent", async (req, res, err) => {
  const { EID } = req.body

  try {
    const sqlFetch = "SELECT * FROM `EVENTS` WHERE `EID`=(?)";
    await db.query(sqlFetch, [EID], async (err, result) => {
      console.log(result);
      if (err) {
        res.sendStatus(500);
      }
      else if (result.length === 0) {
        res.send("not found")
      }
      else {
        res.send(result);
      }
    });
  } catch (error) {
    console.log(error);
  }
})



var fileUpload = multer({ storage })
const multipleUpload = fileUpload.fields([{ name: 'file', maxCount: 1 }, { name: 'file2', maxCount: 15 }])

app.post("/api/EventUpload", multipleUpload, async (req, res, err) => {
  if (!!req.files) {

    try {
      const { title, brief, paragraph, date } = req.body;
      const photoArray = []
      for (let i = 0; i < req.files.file2.length; i++) {
        photoArray.push(req.files.file2[i].originalname)
      }

      const coverphoto = req.files.file[0].originalname.toString()
      const UserInsert = "INSERT INTO `events` ( `ETitle`, `EBrief`, `EParagraph`, `EPhotos`, `ECover`, `EDate`) VALUES (?,?,?,?,?,?)";
      await db.query(UserInsert, [title, brief, paragraph, JSON.stringify(photoArray), coverphoto, date], (err, result) => {
        if (err) { console.log(err); }
        else { res.sendStatus(201); }
      });

    } catch (err) {
      res.send("Error adding");
      // console.log(error);
    }

  }

}
)

app.post("/api/Login", async (req, res) => {
  try {

    const { username, password } = req.body;


    const U_NameModified = username.toLowerCase().replace(/[&\/\\#,+()$~%'":*?<>{}]/g, "");
    const sqlFetch = "SELECT * FROM `users` WHERE `U_Name`=(?)";
    await db.query(sqlFetch, [U_NameModified], async (err, result) => {
      if (err) {
        res.send({ result: "Network Error" }).status(501)
      }
      else if (result.length > 0) {

        if (result[0]) {
          const validPass = await bcrypt.compare(password, result[0].U_Hash);

          if (validPass) {
            /* const token = jwt.sign({ id:result[0].id,admin:result[0].admin,loggedIn:true }, "scmp112021",{expiresIn:60*60}, (err,token)=> {
   */    console.log(result[0].admin)
            if (!!result[0].admin) {
              console.log("hello there")
              res.send({ webmail: false, result: true }).status(201)

            } else {

              res.send({ webmail: true, result: "http://scmp-lb.com/webmail" });
            }


          }
          else { res.send({ webmail: false, result: false }).status(401) }
          ;
        }
      }
      else if (result.length == 0) {
        res.send({ webmail: false, result: false }).status(401)
      }
    })
  }
  catch (err) {
    console.log(err)
  }
})

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'))
})

app.listen(3001, () => {
  console.log("running on port 3001");
});