import '../Calculator.css'
import '../App.css'
import {Outlet, Link} from 'react-router-dom'


const digNumber = (n) =>{    
  const visor = document.getElementById('visor').textContent
  document.getElementById("visor").innerHTML = visor.concat(n)
}

const count = () =>{    
  const visor = document.getElementById('visor').textContent
  const visorArr = visor.split(' ')

  if(visorArr[1] == '+'){
    const op = parseFloat(visorArr[0]) + parseFloat(visorArr[2])
    document.getElementById("visor").innerHTML = op
  }else if(visorArr[1] == '-'){
    const op = parseFloat(visorArr[0]) - parseFloat(visorArr[2])
    document.getElementById("visor").innerHTML = op
  }else if(visorArr[1] == '*'){
    const op = parseFloat(visorArr[0]) * parseFloat(visorArr[2])
    document.getElementById("visor").innerHTML = op
  }else if(visorArr[1] == '/'){
    const op = parseFloat(visorArr[0]) / parseFloat(visorArr[2])
    document.getElementById("visor").innerHTML = op
  }else{
    alert('Insira o operador para prosseguir!')
  }

  
}

const clearVisor = ()=>{
  document.getElementById('visor').innerHTML = ''
}


const Calculator=()=>{
    return (
        <>
            <div className='calculadora'>
                <div className='content-calcu'>
                  <div id='visor'></div>
                  <div className='digitos'>
                    <div className='dig-a'> 
                      <div className='tecla' onClick={()=>clearVisor()}>C</div> 
                      <div className='tecla' onClick={()=>digNumber('7')}>7</div>
                      <div className='tecla' onClick={()=>digNumber('4')}>4</div>
                      <div className='tecla' onClick={()=>digNumber('1')}>1</div>              
                    </div>
                    <div className='dig-b'> 
                      <div className='tecla' onClick={()=>count()}>=</div> 
                      <div className='tecla' onClick={()=>digNumber('8')}>8</div>
                      <div className='tecla' onClick={()=>digNumber('5')}>5</div>
                      <div className='tecla' onClick={()=>digNumber('2')}>2</div>               
                    </div>
                    <div className='dig-c'> 
                      <div className='tecla' onClick={()=>digNumber(' / ')}>/</div> 
                      <div className='tecla' onClick={()=>digNumber('9')}>9</div>
                      <div className='tecla' onClick={()=>digNumber('6')}>6</div>
                      <div className='tecla' onClick={()=>digNumber('3')}>3</div>               
                    </div>
                    <div className='dig-d'> 
                      <div className='tecla' onClick={()=>digNumber(' - ')}>-</div> 
                      <div className='tecla' onClick={()=>digNumber(' + ')}>+</div>
                      <div className='tecla' onClick={()=>digNumber(' * ')}>*</div>
                      <div className='tecla' onClick={()=>digNumber('.')}>,</div>                                  
                    </div>
                    <div className='tecla0' onClick={()=>digNumber('0')}>0</div>    
                  </div>    
                </div>                
            </div> 

            <p><Link to='/' className="App-link link-routes">Voltar</Link></p>

        </>     
      );
}

export default Calculator;