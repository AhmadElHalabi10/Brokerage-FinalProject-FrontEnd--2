import { Bar } from "react-chartjs-2";

function LineCharts() {
  return (
    <div className="card_charts">
      <h2>Number Of Customer By Month </h2>
      <div style={{ maxWidth: "750px" }}>
        <Bar
          data={{
            labels: ["1st bar", "2nd bar", "3rd bar", "4th bar"],
            datasets: [
              {
                label: "total count/value",
                data: [1552, 1319, 613, 1400],
                backgroundColor: ["aqua", "green", "red", "yellow"],
                borderColor: ["aqua", "green", "red", "yellow"],
                borderWidth: 0.5,
              },
            ],
          }}
          height={400}
          style={{ marginLeft: "4pc" }}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
            legend: {
              labels: {
                fontSize: 15,
              },
            },
          }}
        />
      </div>
    </div>
  );
}

export default LineCharts;
