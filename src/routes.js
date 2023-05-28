export const routes = [
  {
    method: "GET",
    path: "/tasks",
    handler: (req, res) => {
      console.log("index");
      return res.writeHead(200).end();
    },
  },
  {
    method: "POST",
    path: "/tasks",
    handler: (req, res) => {
      console.log("create");
      return res.writeHead(200).end();
    },
  },
  {
    method: "PUT",
    path: "/users/:id",
    handler: (req, res) => {
      console.log("update");
      return res.writeHead(200).end();
    },
  },
  {
    method: "PATCH",
    path: "/users/:id/complete",
    handler: (req, res) => {
      console.log("complete");
      return res.writeHead(200).end();
    },
  },
  {
    method: "DELETE",
    path: "/users/:id",
    handler: (req, res) => {
      console.log("destroy");
      return res.writeHead(200).end();
    },
  },
];
