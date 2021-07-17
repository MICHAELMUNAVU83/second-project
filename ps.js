



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
        

    
            let boy = document.getElementById('male').value
        
        
            let girl = document.getElementById('female').value
        


        
        let maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
        let femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
         weekdays = ['Sunday','Monday','Tuesday', 'Wednesday','Thursday', 'Friday', 'Saturday'];
  

          if ( sum == 0 && boy == 'male'){

            alert(maleNames[0])
            }else if(sum == 1 && boy == 'male' ){

                alert(maleNames[1])
             }
             else if(sum == 2 && boy == 'male' ){

                alert(maleNames[2])
             } 
             else if(sum == 3 && boy == 'male' ){

                alert(maleNames[3])
             }
             else if(sum == 4 && boy == 'male' ){

                alert(maleNames[4])
             }
             else if(sum == 5 && boy == 'male' ){

                alert(maleNames[5])
             } 
             else if(sum == 6 && boy == 'male' ){

                alert(maleNames[6])
             }





          if(sum == 0 && girl == 'female' ){

                alert(femaleNames[0])
             } 
             else if(sum == 1 && girl == 'female' ){

                alert(femaleNames[1])
             }  
             else if(sum == 2 && girl == 'female' ){

                alert(femaleNames[2])
             }  
             else if(sum == 3 && girl == 'female' ){

                alert(femaleNames[3])
             }  
             else if(sum == 4 && girl == 'female' ){

                alert(femaleNames[4])
             }  
             else if(sum == 5 && girl == 'female' ){

                alert(femaleNames[5])
             }  
             else if(sum == 6 && girl == 'female' ){

                alert(femaleNames[6])
             }   

        

       
    }

    
 




