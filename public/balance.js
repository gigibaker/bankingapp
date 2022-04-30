function Balance(props) {
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState("");
    const [balance, setBalance] = React.useState("");
  
    return (
      <Card
        bgcolor="warning"
        txtcolor="black"
        header="Balance"
        status={status}
        body={
          show ? (
            <>
              <BalanceForm
                user={props.user}
                setShow={setShow}
                setStatus={setStatus}
                setBalance={setBalance}
              />
            </>
          ) : (
            <>
              {" "}
              <BalanceMsg setShow={setShow} setStatus={setStatus} />
              <h5>Your Current Balance is ${balance}</h5>
            </>
          )
        }
      />
    );
  }
  
  function BalanceMsg(props) {
    return (
      <>
        <h5>Success!</h5>
        <button
          type="submit"
          className="btn btn-dark border-light"
          onClick={() => {
            props.setShow(true);
            props.setStatus("");
          }}
        >
          Check balance
        </button>
      </>
    );
  }
  
  function BalanceForm(props) {
    // const [email, setEmail]   = React.useState('');
  
    function handle() {
      fetch(`/account/findOne/${props.user.email}`)
        .then((response) => response.text())
        .then((text) => {
          try {
            const data = JSON.parse(text);
            props.setStatus(data.balance);
            props.setShow(false);
            props.setBalance(data.balance);
            console.log("JSON:", data);
          } catch (err) {
            props.setStatus(text);
            console.log("err:", text);
          }
        });
    }
  
    
  
    return (
      <>
        User
        <br />
        <p>{props.user.email}</p>
        <button
          type="submit"
          className="btn btn-dark border-light"
          onClick={handle}
        >
          Check Balance
        </button>
      </>
    );
  }