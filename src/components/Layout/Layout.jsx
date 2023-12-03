import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <main>
      <div className={classes.container}>{props.children}</div>
    </main>
  );
}

export default Layout;
