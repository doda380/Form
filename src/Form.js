import React from 'react';




export default class Form extends React.Component{

state = {

firstName: '',
lastName:'',
Email:'',
Phone:'',
Password:'',
Gender:'',
file:''

}

onSubmit = ()=>{

    console.log(this.state);

}


fileSelect= event=>{
  console.log(event.target.file[0]);
}


render(){


return(
    
    <div class="container">

    <header>

      <h1>Welcome !</h1>

    </header>

    <main>
      
       <form>

       <div class="info1">
         <div class="fname">
        <label>First Name:</label>
        <input 
            type = "text"
            placeholder='Fisrt Name'
            value={this.state.firstName} 
            onChange={e => this.setState({firstName: e.target.value})}>
        </input>
        </div>
        <div class="lname">
        <label>Last Name:</label>
          <input 
            type = "text"
            placeholder='Last Name:'
            value={this.state.lastName} 
            onChange={e => this.setState({lastName: e.target.value})}>
        </input>
       </div>
      </div>








    <div class="info2">
        <div class="email">
        <label>Email:</label>

          <input 
            type = "text"
            placeholder='Email'
            value={this.state.Email} 
            onChange={e => this.setState({Email: e.target.value})}>
        </input>
        </div>

     <div class="phone">
        <label>Phone:</label>
         <input 
            type = "text"
            placeholder='Phone'
            value={this.state.Phone} 
            onChange={e => this.setState({Phone: e.target.value})}>
        </input>
      </div>
    </div>
        


      <div class="info3">
        <div class="pass">
        <label>Password:</label>
          <input 
            type = "text" 
            placeholder='Password'
            value={this.state.Password} 
            onChange={e => this.setState({Password: e.target.value})}>
        </input>
        </div>
      <div class="gender">
           <label>Gender:  </label>
           <select value={this.state.value} onChange={e => this.setState({Gender: e.target.value})}>
           <option value="male">Male</option>
           <option value="female">Female</option>
           </select>
        </div>
      </div>

        <button class="button" onClick={()=> this.onSubmit()} >
            Submit !
        </button>

    <div class="upload">
    <label> Upload Your ID or Passport:</label>
    <br></br>
    
      <input type="file" onChange={this.fileSelect}/>
    </div>




    </form>
    </main>


  </div>
  

);

}
}