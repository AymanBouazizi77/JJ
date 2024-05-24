const get =()=>{
    let red= Number (document.getElementById('red').value)
    let green= Number (document.getElementById('green').value)
    let blue= Number (document.getElementById('blue').value)
    if(red>255 || green>255 || blue>255 || red<0 || green<0 || blue<0){
        // document.getElementById('alertt').style.display="block"
        // document.getElementById("body").style.background = "#fff"
       const message = document.getElementById('error');
       message.textContent = 'la saisie est fausse !!'
       message.style.color = 'red'
           
    }
    else{
        // document.getElementById('alertt').style.display="none"
        let res = "#"+ convert(red)+ convert(green)+convert(blue)
        // console.log(res)
        document.getElementById("rgb").value = res
        document.getElementById("body").style.background = res    
    }
}

const convert=(rest)=>{
    hexa=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
    let rest1 = rest%16
    let rest2=((rest-rest1)/16)%16
    //  let rest2= Math.floor ((rest/16))%16
    let resultat = String(hexa[rest2])+String(hexa[rest1])
    return resultat
}