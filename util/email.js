// 复制完成以后记得去well-know   的json文件里面配置一下发送的地址
const nodemailer = require("nodemailer");


  let transporter = nodemailer.createTransport({
    host: "smtp.qq.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: '944406390@qq.com', // generated ethereal user
      pass: 'ohuvjgfvounwbdcj'// generated ethereal password
    }
  });



module.exports={
  sendMail(emailuse,code){
// 发送内容
let info = {
  from: '"Fred Foo 👻" <944406390@qq.com>', // sender address
  to: emailuse, // list of receivers
  subject: "验证码：", // Subject line
  // text: "Hello world?", // plain text body
  html: `<h2>${code}</h2>` // html body
};
//
transporter.sendMail(info,(err,result)=>{
  if(err){
    cb(-1)
  }else{
    cb(1)
  }
  console.log(err,result)
})
  }
}