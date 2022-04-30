function Home() {
    return (
      <Card
        bgcolor="light"
        txtcolor="black"
        header="Bad Bank"
        title="Welcome to savings!"
        text="For all your banking needs!"
        body={<img src="bank.png" className="img-fluid" alt="Responsive image" />}
      />
    );
  }
