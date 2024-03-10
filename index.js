let button = document.getElementById('btn');
button.addEventListener('click',() =>{
      const m1 = parseInt(document.getElementById('math').value);
      const m2 = parseInt(document.getElementById('phy').value);
      const m3 = parseInt(document.getElementById('chem').value);
      const m4 = parseInt(document.getElementById('hindi').value);
      const m5 = parseInt(document.getElementById('eng').value);
      const result = document.getElementById('output');
      let m1_status = false,m2_status = false,m3_status = false,m4_status = false,m5_status = false;
      if(m1 === '' || isNaN(m1) || (m1<0) || (m1>100)){
        document.getElementById('math_error').innerHTML = 'Please provide a valid marks!'
      }
      else{
        m1_status = true;
      }
      if(m2 === '' || isNaN(m2) || (m2<0) || (m2>100)){
        document.getElementById('phy_error').innerHTML = 'Please provide a valid marks!'
      }
      else{
        m2_status = true;
      }
      if(m3 === '' || isNaN(m3) || (m3<0) ||(m3>100)){
        document.getElementById('chem_error').innerHTML = 'Please provide a valid marks!'
      }
      else{
        m3_status = true;
      }
      if(m4 === '' || isNaN(m4) || (m4<0) || (m4>100)){
        document.getElementById('hindi_error').innerHTML = 'Please provide a valid marks!'
      }
      else{
        m4_status = true;
      }
      if(m5 === '' || isNaN(m5) || (m5<0) ||(m5>100)){
        document.getElementById('eng_error').innerHTML = 'Please provide a valid marks!'
      }
      else{
        m5_status = true;
      }
      if(m1_status && m2_status && m3_status && m4_status && m5_status){
        const sum = m1 + m2 + m3 + m4 + m5
        const per = ((sum/500)*100).toFixed(2);
        if(per >= 90){
             result.innerHTML = 'Topper : ' + per + '%' + ' '+','+' '+'Grade : ' + 'A+';
        }
        else if(per>=80 && per <90){
            result.innerHTML = 'Below Topper : '+ per + '%'+' '+','+' '+'Grade : '+'A';
        }
        else if(per>=70 && per <80){
            result.innerHTML = 'Average : '+ per + '%'+' '+','+' '+'Grade : '+'B+';
        }
        else if(per>=60 && per <70){
            result.innerHTML = 'Below Average : '+ per + '%'+' '+','+' '+'Grade : '+'B';
        }
        else if(per>=50 && per <60){
            result.innerHTML = 'Progressive : '+ per + '%'+' '+','+' '+'Grade : '+'C';
        }
        else if(per>=40 && per <50){
            result.innerHTML = 'Padhai par dhyan dele bsdk : '+ per + '%'+' '+','+' '+'Grade : '+'D';
        }
        else{
            result.innerHTML = 'PADHAI TERE BAS KI NHI H : '+ per + '%'+' '+','+' '+'Grade : '+'F(Fail)';
        }
        }
        else{
             alert('The form has Error!');
             result.innerHTML = '';
        }
    });
    function handleClick(){
        location.reload();
    }
