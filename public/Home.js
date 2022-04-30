function Home() {
    return (
      <Card
        bgcolor="light"
        txtcolor="black"
        header="Bad Bank"
        title="Welcome to savings!"
        text="Here to help with savings!"
        body={<img src="bank.png" className="img-fluid" alt="Responsive image" />}
      />
    );
  }
