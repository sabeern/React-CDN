const heading = React.createElement(
  "h1",
  { title: "React heading", style: { color: "red", fontFamily: "Arial" } },
  "Hello React"
);
const heading2 = React.createElement("h2", {}, "Second heading");
const paragraph = React.createElement("p", null, "Sample paragraph");
const container = React.createElement("div", { className: "container" }, [
  heading,
  paragraph,
  heading2,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
