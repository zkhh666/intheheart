//搭建两个服务器的时候有两个思想，一个是平行的关系，
//兄弟之间嫁接了一个服务器，这样容易混乱，但我竖着来，主机做boss，服务器负责中间商，其他人都是下一级

const WebSocketServer = require('ws').Server
const wss = new WebSocketServer({port:8181})
//记录自己的ip地址
let myid = {}
//记录别人的ip地址
let every= {}

wss.on('connection',ws=>{
//获取IP地址
    var ip = ws._socket.remoteAddress;
//如果ip地址为这个电脑店址则执行
if(ip=='::ffff:10.9.23.246'){
             myid[ip]=ws
            console.log('主机已经连入')
               //广播（客服人员已经上线）
               for(var i in every){
                 every[i].send('客服人员已经上线') 
               }
}else{
               every[ip]=ws
               console.log(ip,'有人链接服务器')
              // console.log(every)
}
   
    //获取前端传过来的数据
    ws.on('message',(data)=>{
    //对方发过来消息   
        let datas = JSON.parse(data)
        console.log(ip)//拿到对方的IP,看看是不是本机发送的消息

        //是主机发过来的，要判断对方的IP地址，然后汇过去
        if(ip=='::ffff:10.9.23.246'){
          //本机发过来的，判断一下他回复，带过来的ip地址
            console.log('这是主机发过来的消息')
     
           for(var c in every){
            //  console.log(datas)
            //  console.log(every[c])
             //循环存储的IP，然后看看带过来的ip地址能不能对的上，对的上的话就发送给对方
             if(c==datas.hisid){
                every[c].send(JSON.stringify(datas))
             }
           }
        }

        //如果是别的机器发过来的，那就拿到把信息发送给主机（把对方IP地址拿着发给主机）
        else{
          //对方IP带着
             datas.hisid=ip
               console.log('准备发送给主机了')
               myid['::ffff:10.9.23.246'].send(JSON.stringify(datas));  // 只能发送字符串
           }
    })
})