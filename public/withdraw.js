function Withdraw(props) {
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState("");
    const [amount, setAmount] = React.useState("");
  
    return (
      <Card
        bgcolor="warning"
        txtcolor="black"
        header="WITHDRAW"
        status={status}
        body={
          show ? (
            <>
              <WithdrawForm
                user={props.user}
                setShow={setShow}
                setStatus={setStatus}
                setAmount={setAmount}
              />{" "}
              :
            </>
          ) : (
            <>
              {" "}
              <WithdrawMsg setShow={setShow} setStatus={setStatus} />
            </>
          )
        }
      />
    );
  }
  
  function WithdrawMsg(props) {
    return (
      <>
        <h5>Success! Check your new balance.</h5>
        <button
          type="submit"
          className="btn btn-dark border-light"
          onClick={() => {
            props.setShow(true);
            props.setStatus("");
          }}
        >
          Withdraw again
        </button>
      </>
    );
  }
  
  function WithdrawForm(props) {
    // const [email, setEmail]   = React.useState('');
    const [amount, setAmount] = React.useState("");
  
    function handle() {
      fetch(`/account/update/${props.user.email}/-${amount}`)
        .then((response) => response.text())
        .then((text) => {
          try {
            const data = JSON.parse(text);
            props.setStatus(JSON.stringify(data.amount));
            props.setShow(false);
            props.setAmount(data.amount);
            console.log("JSON:", data);
          } catch (err) {
            props.setStatus("Deposit failed");
            console.log("err:", text);
          }
        });
    }
  
    return (
      <>
        User
        <br />
        <p>{props.user.email}</p>
        Amount
        <br />
        <input
          type="number"
          className="form-control"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.currentTarget.value)}
        />
        <br />
        <button
          type="submit"
          className="btn btn-dark border-light"
          onClick={handle}
        >
          Withdraw
        </button>
      </>
    );
  }