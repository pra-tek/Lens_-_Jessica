
const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Points', 'Matchs Joués', 'Différence de Buts'],
      datasets: [
        {
            label: 'Afrique du Sud (G = K)',
            data: [7, 4, 1],
            borderWidth: 1
        },
        {
            label: 'Algérie (G = F)',        
            data: [15, 5, 7],
            borderWidth: 1
        },
        {
            label: 'Burkina Faso (G = B)',       
            data: [10, 5, 3],
            borderWidth: 1
        },
        {
          label: 'Egypte (G = D)',        
          data: [12, 5, 2],
          borderWidth: 1
      },
        {
          label: 'Ghana (G = E)',      
          data: [9, 5, 4],
          borderWidth: 1
        },
        {
          label: 'Guinée Equatoriale (G = J)',      
          data: [12, 5, 2],
          borderWidth: 1
        },
        {
          label: 'Mali (G = G)',        
          data: [12, 5, 9],
          borderWidth: 1
        },
        {
          label: 'Mauritanie (G = I)',     
          data: [8, 4, 4],
          borderWidth: 1
        },
        {
          label: 'Namibie (G = C)',       
          data: [5, 3, 0],
          borderWidth: 1
        },
        {
          label: 'Nigéria (G = A)',       
          data: [12, 5, 12],
          borderWidth: 1
        },
        {
          label: 'Sénégal (G = L)',      
          data: [13, 5, 8],
          borderWidth: 1
        },
        {
          label: 'Zambie (G = H)',       
          data: [12, 5, 6],
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });


  const ctx1 = document.getElementById('myChart1');
  new Chart(ctx1, {
    type: 'line',
    data: {
      labels: ['Nombre de Points', 'Match joués', 'Différences de buts'],
      datasets: [
        {
        axis: 'y',
        label: 'Sénégale',
        data: [13, 5, 8],
        fill: false,
        borderWidth: 2
      },
      {
        axis: 'y',
        label: 'Cote d’Ivoire',
        data: [10, 5, 3],
        fill: false,
        borderWidth: 2
      },
      {
        axis: 'y',
        label: 'Algérie',
        data: [15, 5, 7],
        fill: false,
        borderWidth: 2
      },
      {
        axis: 'y',
        label: 'Afrique du Sud',
        data: [7, 4, 1],
        fill: false,
        borderWidth: 2
      },
      {
        axis: 'y',
        label: 'Burkina Faso',
        data: [10, 5, 3],
        fill: false,
        borderWidth: 2
      },
      {
        axis: 'y',
        label: 'Egypte',
        data: [12, 5, 6],
        fill: false,
        borderWidth: 2
      },
      {
        axis: 'y',
        label: 'Tunisie',
        data: [10, 5, 7],
        fill: false,
        borderWidth: 2
      },
      {
        axis: 'y',
        label: 'Maroc',
        data: [5, 3, 2],
        fill: false,
        borderWidth: 2
      },
      {
        axis: 'y',
        label: 'Nigéria',
        data: [12, 5, 5],
        fill: false,
        borderWidth: 2
      },
      {
        axis: 'y',
        label: 'Cap Vert',
        data: [10, 5, 3],
        fill: false,
        borderWidth: 2
      },
      {
        axis: 'y',
        label: 'Guinée-Equatoriale',
        data: [12, 5, 2],
        fill: false,
        borderWidth: 2
      },
      {
        axis: 'y',
        label: 'Guinée-Bissau',
        data: [10, 5, 5],
        fill: false,
        borderWidth: 2
      },
      {
        axis: 'y',
        label: 'Mali',
        data: [12, 5, 9],
        fill: false,
        borderWidth: 2
      },
      {
        axis: 'y',
        label: 'Zambie',
        data: [12, 5, 6],
        fill: false,
        borderWidth: 2
      }
    ]
    },
    options: {
      indexAxis: 'y',
      scales: {
        x: {
          beginAtZero: true
        }
      }
    }
  });
