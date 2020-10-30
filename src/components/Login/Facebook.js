import React, {Component} from 'react';
import FacebookLoginBtn from 'react-facebook-login';

export default class LoginFacebook extends Component {
    state = {
        auth: false,
        name: '',
        picture: ''
    }
    componentClicked = () => {
        console.log('Facebook btn click')
    }

    responseFacebook = (res) => {
        console.log(res);
        this.setState({
            auth: true,
            name: res.name,
            picture: res.picture.data.url
        })
    }

    render(){
        let facebookData;
        this.state.auth ?  
            facebookData = (<div>
                {`hola ${this.state.name}`}
                <img src={this.state.picture} alt="Meme"/>
            </div>) : facebookData = (
                <FacebookLoginBtn
                    appId="412227666450687"
                    autoLoad={true}
                    fields="name,picture"
                    onClick={this.componentClicked}
                    callback={this.responseFacebook} />
            );

        return(
            <>
                {facebookData}
            </>
        );
    }
}