import React, { useState } from "react";

function SignIn() {
  const [nm, SetNm] = useState("");
  const [Em, SetEm] = useState("");
  const [pass, SetPass] = useState("");

  function onNmChange(e) {
    SetNm(e.target.value);
  }

  function onEmChange(e) {
    SetEm(e.target.value);
  }

  function onPassChange(e) {
    SetPass(e.target.value);
  }

  function Submit() {}

  return (
    <div>
      <div className="name">
        <name>Username: </name>
        <input type="text" value={nm} required onChange={onNmChange} />
      </div>
      <div className="email">
        <name>Email: </name>
        <input type="email" value={Em} required onChange={onEmChange} />
      </div>
      <div className="password">
        <name>Password: </name>
        <input type="password" value={pass} required onChange={onPassChange} />
      </div>
      <button onClick={Submit}>Sign In</button>
      <p>Writes data to the database</p>
    </div>
  );
}

export default SignIn;
