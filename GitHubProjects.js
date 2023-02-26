
const { useState, useEffect } = React;

const GitHubProjects = ({ repo }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch(
        `https://api.github.com/users/${repo}/repos`
      );
      const data = await response.json();

      //setTimeout(() => {
      //  //Simulate 3 second loading
      // console.log(data);
      //  setProjects(data);
      //  setLoading(false);
      //}, "3000")
      
      console.log(data);
      setProjects(data);
      setLoading(false);
    };
    fetchProjects();
  }, [repo]);

  if (loading) {
    return React.createElement("h2", null, "Loading...");
  }

  return (
    React.createElement("div", {className: "row justify-content-center"},
      projects.map((project) => (
        React.createElement("div", { key: project.id, className: "card col-md-4" },
          React.createElement("div", { className: "card-body" },
            React.createElement("h5", { className: "card-title" }, project.name),
            React.createElement("p", { className: "card-text" }, project.description),
            React.createElement("a", { href: project.html_url, className: "btn btn-primary", target: "_blank" },
              "Go project"
            )
          )
        )
      ))
    )
  );
};

const root = ReactDOM.createRoot(document.getElementById("gitHubProjects"));
root.render(React.createElement(GitHubProjects, { repo: "ellvon" }));
