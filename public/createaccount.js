function CreateAccount() {
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState("");
  
    return (
      <Card
        bgcolor="warning"
        txtcolor="black"
        header="Create Account"
        status={status}
        body={
          show ? (
            <CreateForm setShow={setShow} />
          ) : (
            <CreateMsg setShow={setShow} />
          )
        }
      />
    );
  }
  
  function CreateMsg(props) {
    return (
      <>
        <h5>Success! Now log in to your account.</h5>
        <button
          type="submit"
          className="btn btn-dark border-light"
          onClick={() => props.setShow(true)}
        >
          Add another account
        </button>
      </>
    );
  }
  
  function CreateForm(props) {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
  
    function handle() {
      console.log(name, email, password);
      /* const url = `/account/create/${name}/${email}/${password}`;
      (async () => {
          var res  = await fetch(url);
          var data = await res.json();    
          console.log(data);        
      })();*/
      const auth = firebase.auth();
      const promise = auth.createUserWithEmailAndPassword(email, password);
      promise.then(() => {
        const url = `/account/create/${name}/${email}/${password}`;
        (async () => {
          var res = await fetch(url);
          var data = await res.json();
          console.log(data);
        })();
      });
      promise.catch((e) => console.log(e.message));
      props.setShow(false);
    }
  
    return (
      <>
        Name
        <br />
        <input
          type="input"
          className="form-control"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
        />
        <br />
        Email address
        <br />
        <input
          type="input"
          className="form-control"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <br />
        Password
        <br />
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        <br />
        <button
          type="submit"
          className="btn btn-dark border-light"
          onClick={handle}
        >
          Create Account
        </button>
      </>
    );
  }