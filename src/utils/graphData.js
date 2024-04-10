export function graphData() {
    const createGradient = (color) => {
        const ctx = document.createElement("canvas").getContext("2d");
        const gradient = ctx.createLinearGradient(0, 0, 0, 50);
        gradient.addColorStop(0, color);
        gradient.addColorStop(1, "rgba(1000,800,800,0)"); // Adjust transparency for shadow
        return gradient;
      };
    const labels = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
      ];
  const dt = {
    labels,
    datasets: [
      {
        fill: true,
        label: "",
        data: [1, 2, 3, 4, 1, 2, 1],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: createGradient("rgb(53, 162, 235,0.5)"),
      },
    ],
  };
  return dt;
}
