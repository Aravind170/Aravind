function start_game() {
    var tab_position = new Array();
    while(tab_position.length < 25) {
        var numero = Math.round(Math.random() * 100 );
        if( (numero==11) || (numero==12) || (numero==13) || (numero==14) || (numero==15) || (numero==21) || (numero==22) || (numero==23) || (numero==24) || (numero==25) || (numero==31) || (numero==32) || (numero==33) || (numero==34) || (numero==35) || (numero==41) || (numero==42) || (numero==43) || (numero==44) || (numero==45) || (numero==51) || (numero==52) || (numero==53) || (numero==54) || (numero==55) ){
            if(!tab_position.includes(numero)){

                tab_position[tab_position.length] = numero ;
            }   
        }
    }

    document.getElementById('p11').textContent = tab_position[0];
    document.getElementById('p11').style.background= 'url(./p'+tab_position[0]+'.jpeg)';
   
    document.getElementById('p12').textContent = tab_position[1];
    document.getElementById('p12').style.background ='url(./p'+tab_position[1]+'.jpeg)';
   
    document.getElementById('p13').textContent = tab_position[2];
    document.getElementById('p13').style.background ='url(./p'+tab_position[2]+'.jpeg)';
   
    document.getElementById('p14').textContent = tab_position[3];
    document.getElementById('p14').style.background = 'url(./p'+tab_position[3]+'.jpeg)';
   
    document.getElementById('p15').textContent = tab_position[4];
    document.getElementById('p15').style.background = 'url(./p'+tab_position[4]+'.jpeg)';
   
    document.getElementById('p21').textContent = tab_position[5];
    document.getElementById('p21').style.background = 'url(./p'+tab_position[5]+'.jpeg)';
   
    document.getElementById('p22').textContent = tab_position[6];
    document.getElementById('p22').style.background = 'url(./p'+tab_position[6]+'.jpeg)';
   
    document.getElementById('p23').textContent = tab_position[7];
    document.getElementById('p23').style.background = 'url(./p'+tab_position[7]+'.jpeg)';
   
    document.getElementById('p24').textContent = tab_position[8];
    document.getElementById('p24').style.background = 'url(./p'+tab_position[8]+'.jpeg)';
   
   
   
    document.getElementById('p25').textContent = tab_position[9];
    document.getElementById('p25').style.background = 'url(./p'+tab_position[9]+'.jpeg)';
   
    document.getElementById('p31').textContent = tab_position[10];
    document.getElementById('p31').style.background = 'url(./p'+tab_position[10]+'.jpeg)';
   
    document.getElementById('p32').textContent = tab_position[11];
    document.getElementById('p32').style.background = 'url(./p'+tab_position[11]+'.jpeg)';
   
    document.getElementById('p33').textContent = tab_position[12];
    document.getElementById('p33').style.background = 'url(./p'+tab_position[12]+'.jpeg)';
   
    document.getElementById('p34').textContent = tab_position[13]; 
    document.getElementById('p34').style.background = 'url(./p'+tab_position[13]+'.jpeg)';
   
    document.getElementById('p35').textContent = tab_position[14];
    document.getElementById('p35').style.background = 'url(./p'+tab_position[14]+'.jpeg)';
   
    document.getElementById('p41').textContent = tab_position[15];
    document.getElementById('p41').style.background = 'url(./p'+tab_position[15]+'.jpeg)';
   
    document.getElementById('p42').textContent = tab_position[16];
    document.getElementById('p42').style.background = 'url(./p'+tab_position[16]+'.jpeg)';
   
    document.getElementById('p43').textContent = tab_position[17];
    document.getElementById('p43').style.background = 'url(./p'+tab_position[17]+'.jpeg)';
   
    document.getElementById('p44').textContent = tab_position[18];
    document.getElementById('p44').style.background = 'url(./p'+tab_position[18]+'.jpeg)';
   
    document.getElementById('p45').textContent = tab_position[19];
    document.getElementById('p45').style.background = 'url(./p'+tab_position[19]+'.jpeg)';
   
    document.getElementById('p51').textContent = tab_position[20];
    document.getElementById('p51').style.background = 'url(./p'+tab_position[20]+'.jpeg)';
  
    document.getElementById('p52').textContent = tab_position[21];
    document.getElementById('p52').style.background = 'url(./p'+tab_position[21]+'.jpeg)';
   
    document.getElementById('p53').textContent = tab_position[22];
    document.getElementById('p53').style.background = 'url(./p'+tab_position[22]+'.jpeg)';
   
    document.getElementById('p54').textContent = tab_position[23];
    document.getElementById('p54').style.background = 'url(./p'+tab_position[23]+'.jpeg)';
   
    document.getElementById('p55').textContent = tab_position[24];
    document.getElementById('p55').style.background = 'url(./p'+tab_position[24]+'.jpeg)';
}