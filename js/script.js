//line chart//
var context = $("#line-chart");
var linechart = new Chart(context, {
    type: 'line',
    data: {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        datasets: [
          {
              label: "Traffic",
              data: [0, 750, 1750, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2000],
              backgroundColor: 'lightgrey',
              borderColor: 'rgb(126, 126, 126)',
          }
        ]
    },
});

//bar chart//
var ctx = $("#bar-chart");


    var data = {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [
            {
                label: 'traffic',
                data: [100, 85, 170, 235, 150, 100, 75, 0],
                backgroundColor: 'lightgrey',
                borderColor: 'rgb(126, 126, 126)',
                borderWidth: 1
            },
        
        ]
    };

    var options = {
        responsive: true,
        title: {
            display: true,
            position: "top",
            text: "Daily Traffic",
            fontSize: 18,
            fontColor: "#111"
        },
        legend: {
            display: true,
            position: "bottom",
            labels: {
                fontColor: "#333",
                fontSize: 16
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    min: 0
                }
            }]
        }
    };

    var chart = new Chart(ctx, {
        type: "bar",
        data: data,
        options: options
    });
    
//pie chart//
var pie = $("#pie-chart");
var piechart = new Chart(pie, {
    type: 'pie',
    data: {
        labels: ["Phones", "Tablets", "Desktops"],
        datasets: [{
              label: "Mobile Users",
              data: [70, 20, 10],
              backgroundColor: 'lightgrey',
              borderColor: 'rgb(126, 126, 126)',
          }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            title: {
                display: true,
                position: "top",
                text: "Mobile Users",
                fontSize: 18,
                fontColor: "#111"
            },
            legend: {
                display: true,
                position: "bottom",
                labels: {
                    fontColor: "#333",
                    fontSize: 20,
                    boxWidth: 15,
                    padding: 40,
                }
            }
    
        }
});


messageSubmit = document.querySelector("#message-submit");
