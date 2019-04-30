import React, { Component } from 'react';
import { FirebaseContext } from '../../components/Firebase';
import Firebase from 'firebase/app'


const SignUpPage = () => (
  <div>
    <h1>Ajouter un utilisateur</h1>
    <FirebaseContext.Consumer>
        {firebase => <SignUpForm firebase={firebase} />}
    </FirebaseContext.Consumer>
  </div>
);

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { username, email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });

      let firestore = Firebase.firestore()
      let docRef

      let role = document.querySelector('#role')
      let result = role.options[role.selectedIndex].value

      if(result === "jeune") docRef = firestore.collection('Jeunes')
      else if(result === "coach") docRef = firestore.collection("Coaches")
      else docRef = firestore.collection("Parrains")   
      
           Firebase.auth().onAuthStateChanged((user) => {
            if (user) {
              docRef.add({
                Id : user.uid,
                Nom : username,
                Email : email,
                Password : passwordOne,
               })
            } else {
              // User not logged in or has just logged out.
            }
          });

      
                
              
    event.preventDefault();
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };


  render() {
    const {
        username,
        email,
        passwordOne,
        passwordTwo,     
        error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="username"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="Prénom "
        />
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email"
        />
        <input
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Mot de passe"
        />
        <input
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirmer mot de passe"
        />

        <select  id="role" onChange={this.onChange}>
          <option value="jeune">Jeune</option>
          <option value="coach">Coach</option>
          <option value="parrain">Parrain</option>
        </select>

        <button disabled={isInvalid} type="submit">
            Création
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}


export default SignUpPage;

export { SignUpForm };