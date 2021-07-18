function man(){

   let boy = document.getElementById('male').value
   
   document.getElementById('resu').innerHTML= boy;




}

function woman(){
   let girl = document.getElementById('female').value
   
   document.getElementById('resu').innerHTML= girl;


}



    function mwaka(){
        let main = document.getElementById('result').value
        let year = document.getElementById('year').value
        let full = String(year)
        let CC = parseInt(full.substring(0, 2));
        let YY = parseInt(  full.substring(2)) ;
        let MM =parseInt( document.getElementById('month').value ) ;
        let DD =parseInt( document.getElementById('day').value ) ;
        let kim =  ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
        let sum = Math.floor(kim);
        alert(sum);}    
            
            
        
        
           
            
        


        
        let maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
        let femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
        let weekdays = ['Sunday','Monday','Tuesday', 'Wednesday','Thursday', 'Friday', 'Saturday'];
  


       
    

    
 




