import app from 'firebase/app';
import 'firebase/auth';
import * as firebaseui from 'firebaseui';

const firebaseConfig = {
    apiKey: "AIzaSyCQ76xwi5Nxoe3l3dLBuu9BMA-uWiHKHt0",
    authDomain: "proyectomusica-melen.firebaseapp.com",
    projectId: "proyectomusica-melen",
    storageBucket: "proyectomusica-melen.appspot.com",
    messagingSenderId: "176222804518",
    appId: "1:176222804518:web:9b859c9bd9a8e5ff3064e7",
    measurementId: "G-Y1SE3T274G"
  };

class Firebase{
    constructor(){
        app.initializeApp(firebaseConfig);
        this.auth = app.auth();
        this.autorization = app.auth;
        this.firebaseui = new firebaseui.auth.AuthUI(app.auth());
    }
}

export default Firebase;