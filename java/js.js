document.getElementById("load").style.width="100%";var stop=setInterval(function()
{const popup=document.querySelector(".info");popup.remove();clearInterval(stop);},10000);let close=document.getElementById("close-alert");function close_alert()
{const popup=document.querySelector(".info");popup.remove();}
let content_vf=document.querySelector('.content-vodafone')
let span=document.getElementById('span')
let span_2=document.getElementById('span_2')
let span_3=document.getElementById('span_3')
let span_4=document.getElementById('span_4')
let span_5=document.getElementById('span_5')
document.querySelector('.vodafone').addEventListener('click',()=>{if(content_vf.style.maxHeight){content_vf.style.maxHeight=null
span.style.transform='rotate(0)'}else{span_2.style.transform='rotate(0)'
span_3.style.transform='rotate(0)'
span_4.style.transform='rotate(0)'
span_5.style.transform='rotate(0)'
span.style.transform='rotate(90deg)'
content_vf.style.maxHeight="600px";content_or.style.maxHeight=null
content_other.style.maxHeight=null;content_contact.style.maxHeight=null;content_etisalat.style.maxHeight=null}})
let content_or=document.querySelector('.content-orange')
document.querySelector('.orange').addEventListener('click',()=>{if(content_or.style.maxHeight){span_2.style.transform='rotate(0)'
content_or.style.maxHeight=null}else{span.style.transform='rotate(0)'
span_3.style.transform='rotate(0)'
span_4.style.transform='rotate(0)'
span_5.style.transform='rotate(0)'
span_2.style.transform='rotate(90deg)'
content_or.style.maxHeight="600px";content_vf.style.maxHeight=null;content_other.style.maxHeight=null;content_contact.style.maxHeight=null;content_etisalat.style.maxHeight=null}})
let content_other=document.querySelector('.content-other')
document.querySelector('.other').addEventListener('click',()=>{if(content_other.style.maxHeight){span_3.style.transform='rotate(0)'
content_other.style.maxHeight=null}else{span.style.transform='rotate(0)'
span_2.style.transform='rotate(0)'
span_4.style.transform='rotate(0)'
span_5.style.transform='rotate(0)'
span_3.style.transform='rotate(90deg)'
content_other.style.maxHeight="600px";content_vf.style.maxHeight=null;content_or.style.maxHeight=null;content_contact.style.maxHeight=null;content_etisalat.style.maxHeight=null}})
let content_contact=document.querySelector('.content-contact')
document.querySelector('.contact').addEventListener('click',()=>{if(content_contact.style.maxHeight){span_4.style.transform='rotate(0)'
content_contact.style.maxHeight=null}else{span_2.style.transform='rotate(0)'
span.style.transform='rotate(0)'
span_3.style.transform='rotate(0)'
span_5.style.transform='rotate(0)'
span_4.style.transform='rotate(90deg)'
content_contact.style.maxHeight="600px";content_vf.style.maxHeight=null;content_or.style.maxHeight=null;content_other.style.maxHeight=null;content_etisalat.style.maxHeight=null}})
let content_etisalat=document.querySelector('.content-etisalat')
document.querySelector('.etisalat').addEventListener('click',()=>{if(content_etisalat.style.maxHeight){span_5.style.transform='rotate(0)'
content_etisalat.style.maxHeight=null}else{span_2.style.transform='rotate(0)'
span.style.transform='rotate(0)'
span_3.style.transform='rotate(0)'
span_4.style.transform='rotate(0)'
span_5.style.transform='rotate(90deg)'
content_etisalat.style.maxHeight="600px";content_contact.style.maxHeight=null;content_vf.style.maxHeight=null;content_or.style.maxHeight=null;content_other.style.maxHeight=null;}})

cookieChoices = {};