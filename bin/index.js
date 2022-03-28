#!/usr/bin/env node

const Koa = require('koa')
const Mock = require('mockjs')
const bodyParser = require('koa-bodyparser')
const os = require('os')

const app = new Koa()

const sleep = (ms=0)=> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

const getIpAddress = () => {
  var ifaces = os.networkInterfaces()
  for (var dev in ifaces) {
    let iface = ifaces[dev]
    for (let i = 0; i < iface.length; i++) {
      let {family, address, internal} = iface[i]
      if (family === 'IPv4' && address !== '127.0.0.1' && !internal) {
        return address
      }
    }
  }
}


app.use(bodyParser({
  enableTypes:['json', 'form', 'text']
}))     


app.use(async (ctx,next) => {
  ctx.set("Access-Control-Allow-Origin", "*")
  ctx.set('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
  ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  

  await next();
})
                               
app.use(async ctx => {
  let result = null;
  try{
    let { mock, ms } = ctx.request.body
    if(!mock){
      mock = {
        "name":'hello MackAPI'
      }
    }
    await sleep(ms)
    result = Mock.mock(mock)
  }catch(e){
    result = {
      error: e,
      msg: 'MockAPI出错'
    }
  }
  ctx.body = result;
});


app.listen(3000,getIpAddress(),()=>{
  console.log(`GetMock server on http://${getIpAddress()}:3000`)
});