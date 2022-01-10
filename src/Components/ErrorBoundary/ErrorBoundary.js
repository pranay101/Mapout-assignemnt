import classes from "./ErrorBoundary.module.css";

const ErrorBoundary = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onclick}>
        <div className={classes.ErrorBoundary}>
          <header>
            <h2>{props.title}</h2>
          </header>
          <main>
            <p>{props.description}</p>
          </main>
          <footer>
            <button onClick={props.onclick}>CLOSE</button>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ErrorBoundary;
