const Route = ReactRouterDOM.Route;
const Link = ReactRouterDOM.Link;
const HashRouter = ReactRouterDOM.HashRouter;
const BrowserRouter = ReactRouterDOM.BrowserRouter;
const UserContext = React.createContext(null);

const firebaseConfig = {
    apiKey: "AIzaSyBOVGhxtWhacxXYKKtRVaZBl802Wq2p1wk",
    authDomain: "bankingapp-6d291.firebaseapp.com",
    projectId: "bankingapp-6d291",
    storageBucket: "bankingapp-6d291.appspot.com",
    messagingSenderId: "569899849691",
    appId: "1:569899849691:web:821b4d005dfbd5143639fe",
    
  };

firebase.initializeApp(firebaseConfig);

function Card(props) {
  function classes() {
    const bg = props.bgcolor ? " bg-" + props.bgcolor : " ";
    const txt = props.txtcolor ? " text-" + props.txtcolor : " text-white";
    return "card mb-3 " + bg + txt;
  }

  return (
    <div className={classes()} style={{ maxWidth: "20rem" }}>
      <div className="card-header">{props.header}</div>
      <div className="card-body">
        {props.title && <h5 className="card-title">{props.title}</h5>}
        {props.text && <p className="card-text">{props.text}</p>}
        {props.body}
        {/*} {props.status && (<div id='createStatus'>{props.status}</div>)}*/}
      </div>
    </div>
  );
}