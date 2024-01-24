import { useEffect } from "react";
import "./App.css";

import { record } from "aws-amplify/analytics";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

function App({ signOut, user }) {
  useEffect(() => {
    record({ name: "Home page visited" });
    record({
      name: "UserSignIn",
      attributes: {
        username: "gauravdeb",
      },
    });
  }, []);

  return (
    <>
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
    </>
  );
}

export default withAuthenticator(App);
