import React from 'react'
import './Loginpage.css'
import axios from 'axios';
  
class Loginpage extends React.Component {
    constructor()
    {
        super();

        this.state=
        {
posts:[],
    mail:'',
pass:''
        }
    
    }//construction closed

 /* componentDidMount()
  {
axios.get("https://jsonplaceholder.typicode.com/users")
.then(Response=>
    {
console.log(Response);
    })

    .catch(error=>
        {
            console.log(error);
        })
  }
*/
    changemail=(event) =>
    {
        this.setState({

            mail:event.target.value
        });
    }

    changepass=(event)=>
    {
this.setState({
    pass:event.target.value
});

    }

    handlesubmit =(e)=>
    {
        e.preventDefault();
 alert(`${this.state.mail} ${this.state.pass}`)
       axios.post("https://jsonplaceholder.typicode.com/users",this.state)
       
       
   
        .then(Response=>
         {
             console.log(Response);
         })
     
         .catch(error=>
             {
                 console.log(error);
             })
         }//closed handlesumit

   

  render()
{
    return (
        <div>
            <div className="boarder">
                <h1>LOGIN PAGE</h1>
                </div>
     
    <form className="form" onSubmit={this.handlesubmit}>
<div>
<input className="mail" type="email"  required value={this.state.mail} onChange={this.changemail}  placeholder="E-MAIL"/>
</div>
<br/>

    <div>
    <input className="pass" type="password" required placeholder="password" value={this.state.pass} onChange={this.changepass}/>
        </div>
    <div>
       <button className="but">Submit </button>
      </div>
  </form>

        </div>
    )
}}

export default Loginpage;

