const ctx = document.getElementById('myChart').getContext('2d')
const one_result_ctx = document
  .getElementById('one_result_chart')
  .getContext('2d')
const one_rate_ctx = document.getElementById('one_rate_chart').getContext('2d')

const rating_data = JSON.parse(localStorage.getItem('rating'))
const answers_data = JSON.parse(localStorage.getItem('answers_data'))

let right_ans_count = 0

const LEVELS = [
  'Literal Level',
  'Comprehension Level',
  'Critical Level',
  'Aesthetic Level',
  'Creative Level'
]

function Percentage (part_num, total_num) {
  return (100 * part_num) / total_num
}

answers_data.forEach((element, i) => {
  const current_num = (i + 1).toString()

  if (element['q' + current_num] === 'right') {
    right_ans_count += 1
  }
})

let poor_rate_count = 0
let notBad_rate_count = 0
let ok_rate_count = 0
let soGood_rate_count = 0
let excellent_rate_count = 0

const levelsRatings = [
  { poor: 0, notBad: 0, ok: 0, soGood: 0, excellent: 0 },
  { poor: 0, notBad: 0, ok: 0, soGood: 0, excellent: 0 },
  { poor: 0, notBad: 0, ok: 0, soGood: 0, excellent: 0 },
  { poor: 0, notBad: 0, ok: 0, soGood: 0, excellent: 0 },
  { poor: 0, notBad: 0, ok: 0, soGood: 0, excellent: 0 }
]

rating_data.forEach((element, i) => {
  const current_num = (i + 1).toString()
  let level = parseInt(i / 4)

  if (element['q' + current_num] === 'Poor') {
    poor_rate_count += 1
    levelsRatings[level].poor++
  }

  if (element['q' + current_num] === 'Not bad') {
    notBad_rate_count += 1
    levelsRatings[level].notBad++
  }

  if (element['q' + current_num] === 'Ok') {
    ok_rate_count += 1
    levelsRatings[level].ok++
  }

  if (element['q' + current_num] === 'So good') {
    soGood_rate_count += 1
    levelsRatings[level].soGood++
  }

  if (element['q' + current_num] === 'Excellent') {
    excellent_rate_count += 1
    console.log(level)
    levelsRatings[level].excellent++
  }
})

function calculateTotalFeedbackPercentage () {
  return (
    ((poor_rate_count * 0.2 +
      notBad_rate_count * 0.4 +
      ok_rate_count * 0.6 +
      soGood_rate_count * 0.8 +
      excellent_rate_count * 1) *
      100) /
    20
  )
}

function calculateFeedbackPerLevelPercentage () {
  return levelsRatings.map(levelRating => {
    return (
      ((levelRating.poor * 0.2 +
        levelRating.notBad * 0.4 +
        levelRating.ok * 0.6 +
        levelRating.soGood * 0.8 +
        levelRating.excellent * 1) *
        100) /
      4
    )
  })
}

console.log(calculateFeedbackPerLevelPercentage())

let level1_ans_count = 0
let level2_ans_count = 0
let level3_ans_count = 0
let level4_ans_count = 0
let level5_ans_count = 0

answers_data.forEach((element, i) => {
  const current_num = (i + 1).toString()

  if (current_num <= 4) {
    if (element['q' + current_num] === 'right') {
      level1_ans_count += 1
    }
  }

  if (current_num > 4 && current_num <= 8) {
    if (element['q' + current_num] === 'right') {
      level2_ans_count += 1
    }
  }

  if (current_num > 8 && current_num <= 12) {
    if (element['q' + current_num] === 'right') {
      level3_ans_count += 1
    }
  }

  if (current_num > 12 && current_num <= 16) {
    if (element['q' + current_num] === 'right') {
      level4_ans_count += 1
    }
  }

  if (current_num > 16 && current_num <= 20) {
    if (element['q' + current_num] === 'right') {
      level5_ans_count += 1
    }
  }
})

Chart.defaults.font.family = "'Source Sans Pro'"
Chart.defaults.plugins.title.font.size = 18

const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Correct answers', 'Feedback'], //['Right Answers', 'Feedback'],
    datasets: [
      {
        label: '',
        data: [
          Percentage(right_ans_count, 20),
          calculateTotalFeedbackPercentage()
        ],
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
        borderWidth: 1,
        barPercentage: 0.6
      }
    ]
  },
  options: {
    plugins: {
      legend: {
        display: false
      },
      title: {
        text: 'Test result & Feedback',
        display: true
      },
      tooltip: {
        callbacks: {
          label: context => context.formattedValue + '%'
        }
      }
    },
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false
        },
        min: 0,
        max: 100,
        ticks: {
          stepSize: 10,
          callback: value => value + '%'
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    }
  }
})

new Chart(one_result_ctx, {
  type: 'bar',
  data: {
    labels: LEVELS,
    datasets: [
      {
        // label: 'Answers',
        data: [
          Percentage(level1_ans_count, 4),
          Percentage(level2_ans_count, 4),
          Percentage(level3_ans_count, 4),
          Percentage(level4_ans_count, 4),
          Percentage(level5_ans_count, 4)
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
      }
    ]
  },
  options: {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      title: {
        text: 'Correct answers per level',
        display: true
      },
      tooltip: {
        callbacks: {
          label: context => `Percentage: ${context.formattedValue}%`
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false
        },
        min: 0,
        max: 100,
        ticks: {
          stepSize: 10,
          callback: value => value + '%'
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    }
  }
})

const rating_chart = new Chart(one_rate_ctx, {
  type: 'bar',
  data: {
    labels: LEVELS,
    datasets: [
      {
        label: 'Rating',
        data: calculateFeedbackPerLevelPercentage(),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
      }
    ]
  },
  options: {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      title: {
        text: 'Feedback evaluation per level',
        display: true
      },
      tooltip: {
        callbacks: {
          label: context => [
            `Percentage: ${context.formattedValue}%`,
            `Poor: ${levelsRatings[context.dataIndex].poor}`,
            `Not bad: ${levelsRatings[context.dataIndex].notBad}`,
            `Ok: ${levelsRatings[context.dataIndex].ok}`,
            `So good: ${levelsRatings[context.dataIndex].soGood}`,
            `Excellent: ${levelsRatings[context.dataIndex].excellent}`
          ]
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false
        },
        min: 0,
        max: 100,
        ticks: {
          stepSize: 10,
          callback: value => value + '%'
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    }
  }
})
