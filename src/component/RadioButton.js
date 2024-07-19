import React,{useState} from 'react'

const RadioButton = () => {
    const[question,setQuestion] = useState(false)
    const showQuestion = () =>{
setQuestion(true)
    }
    const hideQuestion = () =>{
        setQuestion(false);
    }
  return (
    <div>
        <h3>Radio Button</h3>
      <div>
        <input type="radio" value="YES" name='radio' onChange={showQuestion}/>Yes
     
        <input type="radio" value="NO" name='radio' onChange={hideQuestion}/>No
        <div>
        {question && 
        <label>What are side effects?<br></br><input type='text'/>
        <br></br>
            what are recommended dosages ?<br/><input type='text'/>  
            <br/> comments? <br/><textarea placeholder='Enter feedback' /></label>
    
        
        
        
        
        

        
        
        }
        </div>
        
        <button>Submit</button>
      </div>
    </div>
  )
}

export default RadioButton;
