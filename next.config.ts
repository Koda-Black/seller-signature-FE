module.exports = {
  async rewrites() {
    return [
      {
        source: "/agreements",
        destination: "http://localhost:5050/agreements", // Replace with your API URL
      },
    ];
  },
};
