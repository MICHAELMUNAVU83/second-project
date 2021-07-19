function man(){

   let boy = document.getElementById('male').value
   
   document.getElementById('resu').innerHTML= boy;




}

function woman(){
   let girl = document.getElementById('female').value
   
   document.getElementById('resu').innerHTML= girl;


}





    function mwaka(){
        
        let year = document.getElementById('year').value
        let full = String(year)
        let CC = parseInt(full.substring(0, 2));
        let YY = parseInt(  full.substring(2)) ;
        let MM =parseInt( document.getElementById('month').value ) ;
        let DD =parseInt( document.getElementById('day').value ) ;
        let olive =  ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
        let sum = Math.floor(olive) ;
        let dddd = document.getElementById('day').value
        if( MM == 00|| MM > 12){
           alert(' refresh the page and enter correct birth month')
        }else if (DD == 00 || DD > 31) {
           alert(' refresh the page and  enter correct birth date')
        
              
           

           
      
        
        
        

        
        let maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
        let femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
        let weekdays = ['Sunday','Monday','Tuesday', 'Wednesday','Thursday', 'Friday', 'Saturday'];
  
        
      


        let gen = document.getElementById('resu').innerHTML;
        
        if(sum ==  0 && gen== "female"){
         document.getElementById('mama').innerHTML= ( 'Your name is ' + (femaleNames[6]))
   
        }
        else if (sum == 1 && gen == "female") {
         document.getElementById('mama').innerHTML= ( 'Your name is ' + (femaleNames[0]))
          
           
        }
        else if (sum ==  2 && gen == "female") {
           document.getElementById('mama').innerHTML= ('Your name is ' + (femaleNames[1]))
         
      }
      else if (sum == 3 && gen == "female") {
         document.getElementById('mama').innerHTML= ( 'Your name is ' + (femaleNames[2]))

        
         
      }
     
      else if (sum == 4 && gen == "female") {
         document.getElementById('mama').innerHTML= ( 'Your name is ' + (femaleNames[3]))
         
         
      }
     
      else if (sum == 5 && gen == "female") {
         document.getElementById('mama').innerHTML= ( 'Your name is ' + (femaleNames[4]))
         
         
      }
     
      else if (sum == 6 && gen == "female") {
         document.getElementById('mama').innerHTML= ( 'Your name is ' + (femaleNames[5]))
       
         
      }

      if(sum == 0 && gen == "male"){
         document.getElementById('mama').innerHTML= ( 'Your name is ' + (maleNames[6]))
         
      }
      else if (sum == 1 && gen == "male") {
         document.getElementById('mama').innerHTML= ( 'Your name is ' + (maleNames[0]))
         
         
      } 
      else if (sum == 2 && gen == "male") {
         document.getElementById('mama').innerHTML= ( 'Your name is ' + (maleNames[1]))
      
         
      } 
      else if (sum == 3 && gen == "male") {
         document.getElementById('mama').innerHTML= ( 'Your name is ' + (maleNames[2]))

         
      } 
      else if (sum == 4 && gen == "male") {
         document.getElementById('mama').innerHTML= ( 'Your name is ' + (maleNames[3]))
         
         
      } 
      else if (sum == 5  && gen == "male") {
         document.getElementById('mama').innerHTML= ( 'Your name is ' + (maleNames[4]))
         
         
      } 
      else if (sum == 6 && gen == "male") {
         document.getElementById('mama').innerHTML= ( 'Your name is ' + (maleNames[5]))
      
         
      } 
   }
     
     
       

         


      
      
      

      

            
            
        
        
           
            
        


         
            
        
            



