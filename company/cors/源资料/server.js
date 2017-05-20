const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());


// app.use(function (req, res, next) {
//   if (req.method === 'options') {
//     let requestHeaders = req.get('Access-Control-Request-Headers');

//     res.set('Access-Control-Allow-Methods', 'DELETE,GET,HEAD');
//     res.set('Access-Control-Allow-Headers', requestHeaders);
//     // 缓存一天
//     res.set('Access-Control-Max-Age', 60 * 60 * 24);
//     res.end();
//   } else {
//     next();
//   }
// });

app.get('/', function (req, res) {
  res.send('Hello World!');
});



app.use(function (req, res, next) {
  log(req);
  next();
});

app.route('/bug')
  .get(function (req, res) {
    res.send('done');
  })
  .delete(function (req, res) {
    res.send('done');
  })
  .head(function (req, res) {
    allowCorsHeaders(req, res);
    res.send('done');
  });




app.route('/api')
  .all(function (req, res, next) {
    allowCorsHeaders(req, res);
    next();
  })
  .options(function (req, res) {
    preflightHeaders(req, res);
    res.end();
  })
  .get(function (req, res) {
    res.send('done');
  })
  .delete(function (req, res) {
    res.send('done');
  })
  .head(function (req, res) {
    allowCorsHeaders(req, res, true);
    res.set('Access-Control-Allow-Credentials', 'true');
    res.set('Set-Cookie', `time=${Date.now()}`);
    res.send('done');
  })
  .post(function (req, res) {
    let resBody = req.body;
    res.send(resBody);
  });


// 404
app.use(function (req, res, next) {
  res.status(404);
  res.end();
});

// error
app.use(function (err, req, res, next) {
  console.error(err);
  res.status(500);
  res.end();
});




function log(req) {
  console.log(`${req.method} ${req.url}`);
}

function allowCorsHeaders(req, res, cookies = false) {
  let origin = cookies ? req.get('Origin') : '*';
  res.set('Access-Control-Allow-Origin', origin);
}

function preflightHeaders(req, res) {
  let requestHeaders = req.get('Access-Control-Request-Headers');

  res.set('Access-Control-Allow-Methods', 'DELETE,GET,HEAD');
  res.set('Access-Control-Allow-Headers', requestHeaders);
  // 缓存一天
  // res.set('Access-Control-Max-Age', 60 * 60 * 24);
}



app.listen(3000);
