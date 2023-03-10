import { auth, googleAuthProvider } from '../lib/firebase'
import { useContext } from 'react';
import { UserContext } from '../lib/context';

export default function EnterPage({}) {
    const { user, username } = useContext(UserContext);

    return (
        <main>
            {user ?
             !username ? <UsernameForm /> : <SignOutButton /> 
            :
            <SignInButton />
            }
        </main>
    )
}

// Sign in with Google button
function SignInButton() {
    const signInWithGoogle = async () => {
      await auth.signInWithPopup(googleAuthProvider);
    };
  
    return (
      <button className="btn-google" onClick={signInWithGoogle}>
        <img src={'/google.png'} /> Sign in with Google
      </button>
    );
  }

// sign out buttons
function SignOutButton() {
    return (
        <button onClick={() => auth.signOut()}>Sign Out</button>
    );
}

// username form
function UsernameForm() {

}