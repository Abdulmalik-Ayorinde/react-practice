import React,{Component} from "react"

import Card from './components/Card';
import Nav from './components/Nav';
import Nav2 from './components/Nav2';
import Button from './components/Button';

import User from './User';


class App extends Component{
    constructor() {
        super()
        this.state ={
            isLoggedIn: false
        }
        this.logClick = this.logClick.bind(this)
    }

        logClick() {
            this.setState((prevState) =>{
                return {
                    isLoggedIn: !prevState
                }
            })
        }
        

    render () {
        const UserData = User.map(Users => {
            return <Card UserData={Users} key={Users.id}/>
        })

        console.log(this.state.isLoggedIn)

        return (
            <div>
             {
             this.state.isLoggedIn === true ? 
             <Nav />: 
             <Nav2 />
             }

             <Button logClick={this.logClick} onClick={this.logClick}logIn={'login'}/>

             <Button logClick={this.logClick} logIn={'Logout'}/>
             <div className="container">
                {UserData}
            </div>
            </div>
        )
    }

}

export default App