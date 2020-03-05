const Discord = require("discord.js");
const bean  = new Discord.Client();
const chuck = new Discord.Client();
const pig  = new Discord.Client();
const jazz = new Discord.Client();

var pigHealth = 100;
var beanHealth=100;
var chuckHealth=1000;
var jazzHealth=100;

const token = 'Njg1MTkyNTI5NDY1MDQ5MDky.XmFMaw.MOr2UfGXCWw5RYw_5n8AWmloatA';

bean.on('ready', ()=> {

    console.log("Online");

})






chuck.on('message', msg=>{
   
   
    let args= msg.content.split(" ");
   console.log(args);

   if(args[0] === "Chuck" && args.length>2 && args[1]== "say"){
    let fullMessage="";
        for(i=2;i<args.length;i++){
            fullMessage +=" "+ args[i];
        }
        msg.channel.send(fullMessage);
        msg.delete();
        
    
}

else{



    if(args[0] === "Chuck" && args.length==2){
        msg.channel.send("*"+"The Great Chucko "+args[1]+"s"+"*");
        
    }

    if(args[0] === "Heal" && args.length==2 && args[1]=="Chuck"){
        chuckHealth+=Math.random()*5;
        msg.channel.send("The Great Chucko's Health : "+Math.trunc(chuckHealth));
        
    }

    if(args[0] === "Chuck" && args.length>2){
        let fullMessage="*"+"The Great Chucko "+args[1]+"s";
        for(i=2;i<args.length;i++){
            fullMessage +=" "+ args[i];
        }
        fullMessage+="*";
        msg.channel.send(fullMessage);
    }
    if(args.length>2 && args[1]=="attack" && args[2]=="Chuck"){
        chuckHealth-=Math.random()*20;
        if(chuckHealth<0){
            msg.channel.send("*The Great Chucko Died*");
            
        }
        else{
            msg.channel.send("The Great Chucko Health : "+ Math.trunc(chuckHealth));
            msg.delete();
        }


    }

}
})

jazz.on('message', msg=>{
  
    let args= msg.content.split(" ");

    if(args[0] === "Jazz" && args.length>2 && args[1]== "say"){
        let fullMessage="";
            for(i=2;i<args.length;i++){
                fullMessage +=" "+ args[i];
            }
            msg.channel.send(fullMessage);
            msg.delete();
            
        
    }
    
    else{
    
    if(args[0] === "Heal" && args.length==2 && args[1]=="Jazz"){
        jazzHealth+=Math.random()*5;
        msg.channel.send("The Ancient One's Health : "+ Math.trunc(jazzHealth));
    }
    if(args[0] === "Jazz" && args.length==2){
        msg.channel.send("*"+"The Ancient One "+args[1]+"s"+"*");
    }
    if(args[0] === "Jazz" && args.length>2){
        let fullMessage="*"+"The Ancient One "+args[1]+"s";
        for(i=2;i<args.length;i++){
            fullMessage += " "+args[i];
        }
        fullMessage+="*";
        msg.channel.send(fullMessage);
    }
    if(args.length>2 && args[1]=="attack" && args[2]=="Jazz"){
        jazzHealth-=Math.random()*20;
        if(jazzHealth<0){
            msg.channel.send("*The Ancient One Died*");
          
        }
        else{
            msg.channel.send("The Ancient One's Health : "+ Math.trunc(jazzHealth));
            msg.delete();
        }


    }
}
})

pig.on('message', msg=>{
 

    let args= msg.content.split(" ");

    if(args[0] === "Pig" && args.length>2 && args[1]== "say"){
        let fullMessage="";
            for(i=2;i<args.length;i++){
                fullMessage +=" "+ args[i];
            }
            msg.channel.send(fullMessage);
            msg.delete();
            
        
    }
    
    else{

    if(args[0] === "Heal" && args.length==2 && args[1]=="Pig"){
        pigHealth+=Math.random()*5;
        msg.channel.send("The Pig's Health : "+Math.trunc(pigHealth));
    }

    if(args[0] === "Pig"&& args.length==2){
        msg.channel.send("*"+"The Pig "+args[1]+"s"+"*")
    }
    if(args[0] === "Pig" && args.length>2){
        let fullMessage="*"+"The Pig "+args[1]+"s";
        for(i=2;i<args.length;i++){
            fullMessage +=" "+ args[i];
        }
        fullMessage+="*";
        msg.channel.send(fullMessage);
    }
    if(args.length>2 && args[1]=="attack" && args[2]=="Pig"){
        pigHealth-=Math.random()*20;
        if(pigHealth<0){
            msg.channel.send("*The Pig Died*");
          
        }
        else{
            msg.channel.send("The Pigs Health : "+ Math.trunc(pigHealth));
            msg.delete();

        }


    }
}
})

bean.on('message', msg=>{
  
    let args= msg.content.split(" ");

    if(args[0] === "Bean" && args.length>2 && args[1]== "say"){
        let fullMessage="";
            for(i=2;i<args.length;i++){
                fullMessage +=" "+ args[i];
            }
            msg.channel.send(fullMessage);
            msg.delete();
            
        
    }
    
    else{

    if(args[0] === "Heal" && args.length==2 && args[1]=="Bean"){
        beanHealth+=Math.random()*5;
        msg.channel.send("The Bean's Health : "+Math.trunc(beanHealth));
    }

    if(args[0] === "Bean" && args.length==2){
        msg.channel.send("*"+"The bean "+args[1]+"s"+"*");
    }
    if(args[0] === "Bean" && args.length>2){
        let fullMessage="*"+"The Bean "+args[1]+"s";
        for(i=2;i<args.length;i++){
            fullMessage += " "+args[i];
        }
        fullMessage+="*";
        msg.channel.send(fullMessage);
    }

    if(args.length>2 && args[1]=="attack" && args[2]=="Bean"){
        beanHealth-=Math.random()*20;
        if(beanHealth<0){
            msg.channel.send("*The Bean Died*");
         
        }
        else{
            msg.channel.send("The Beans Health : "+ Math.trunc(beanHealth));
            msg.delete();
        }


    }
    }
})


bean.login(token);
chuck.login('Njg1MTk0NTk1MzM2MDYwOTQ3.XmFP9A.V98eny9qMo1QQCZJ6o8pyuuG8Ho');
jazz.login('Njg1MTk0NzY4MTI4NDA5NjAw.XmFQsQ.spF1hh93gA23kYTfkrEgsDdR8a8');
pig.login("Njg1MTk1MDU5NTQwMzk0MTEw.XmFQyg.qc-HuRGOCeVSUfxvjIZlF71O-Lc");