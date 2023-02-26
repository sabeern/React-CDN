const heading = React.createElement(
  "h1",
  { title: "React heading", style: { color: "red", fontFamily: "Arial" } },
  "Hello React"
);
const heading2 = React.createElement("h2", {}, "Second heading");
const container = React.createElement("div", { className: "container" }, [
  heading,
  heading2,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
