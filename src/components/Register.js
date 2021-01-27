import React,{useState} from 'react'

function Register() {

const[name,setname]= useState({
    name:'',
    mail:'',
    numb:'',
});


    return (
        <div> 
            <h1 className="boarder">Registration</h1>
    <form>
        <input className="name" required type="text" placeholder="Enter Your Full Name" value={name.name}  onChange={e => { setname({name:e.target.value})}} />
<br/>
        <input  className="mail" required type="mail"  placeholder="E-Mail" value={name.mail}  onChange={e => { setname({mail:e.target.value})}}/>
<br/>
    <input className="numb"  required  type="number"placeholder="Enter your number" value={name.numb}  onChange={e => { setname({numb:e.target.value})}}/>
<br/>
<button className="but">submit</button>
        </form>
        </div>
    )
}

export default Register;


