import React from 'react';
import 'firebaseui/dist/firebaseui.css'; /*para usar las fuentes de firebaseui*/
import Firebase from '../servidor/firebase';

class Login extends React.Component{

    state={
        autenticado: false,
        usuario: '',
        firebase: null
    }
    componentDidMount(){
        const firebase = new Firebase();

        firebase.auth.onAuthStateChanged(authUser => {

            authUser /*Si el usuario está logueado*/
            ? this.setState({
                autenticado: true,
                usuario: firebase.auth.currentUser.email,
                firebase:firebase
            })
            /*Si el usuario no está logueado*/
            :firebase.firebaseui.start("#firebaseui-auth-container",{
                signInSuccessUrl: "/",
                credentialHelper:"none",
                callbacks:{
                    signInSuccessWithAuthResult : (authResult, redirectUrl) =>{
                        this.setState({
                            autenticado: true,
                            usuario: firebase.auth.currentUser.email,
                            firebase:firebase
                        })
                        return false;
                    }
                },
                signInOptions:[
                    {
                        provider: firebase.autorization.EmailAuthProvider.PROVIDER_ID
                    }
                ]
            })
        })
    }

    render(){
        return this.state.autenticado
        ?(/*Si es true, va a pintarse el usuario*/
            <React.Fragment>
                <div>Estas logueado loquete, {this.state.usuario}</div>
                <button onClick={() => {this.state.firebase.auth.signOut().then(success=> 
                                                    {this.setState({autenticado:false})}
                                                )
                                           }
                                    }>Cerrar sesión</button>
            </React.Fragment>
        )
        /*Si es false, saldrá el formulario de loguearse*/
        :<div id="firebaseui-auth-container"></div>
    }
}

export default Login;