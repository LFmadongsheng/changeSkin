/*
 * @Description: 
 * @Author: 815708052@qq.com
 * @LastEditors: maDongsheng
 * @Date: 2019-02-27 14:26:49
 * @LastEditTime: 2019-02-27 15:40:42
 */
var btn = document.getElementById("btn")

var  ellinks = document.querySelectorAll('link[title]')
var n=0
btn.addEventListener('click',function(){
    n++;
   /*  ellinks.forEach(function(link){
        link.disabled = true;
        if(link.getAttribute('href')=== "green.css"){
            link.disabled = false
        } */
        ellinks.forEach(function(link){
            link.disabled = true;
        })
        if( n %2 === 0){
            document.querySelector('link[href="red.css"]').disabled = false
            
        }else {
            document.querySelector('link[href="green.css"]').disabled = false
        }
    // })
   
    
})
