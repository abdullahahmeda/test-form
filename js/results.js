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

const levelsCorrectAnswers = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
]

answers_data.forEach((element, i) => {
  const current_num = (i + 1).toString()
  const level = parseInt(i / 4)

  if (element['q' + current_num] === 'right') {
    levelsCorrectAnswers[level][i % 4] = 1
    right_ans_count += 1
  }
})

let poor_rate_count = 0
let notBad_rate_count = 0
let ok_rate_count = 0
let soGood_rate_count = 0
let excellent_rate_count = 0

const levelsRatings = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
]

rating_data.forEach((element, i) => {
  const current_num = (i + 1).toString()
  const level = parseInt(i / 4)

  if (element['q' + current_num].indexOf('Poor') > -1) {
    poor_rate_count += 1
    if (levelsRatings[level][0]) levelsRatings[level][0] += 1
    else levelsRatings[level][0] = 1
  }

  if (element['q' + current_num].indexOf('Not bad') > -1) {
    notBad_rate_count += 1
    if (levelsRatings[level][1]) levelsRatings[level][1] += 1
    else levelsRatings[level][1] = 1
  }

  if (element['q' + current_num].indexOf('Ok') > -1) {
    ok_rate_count += 1
    if (levelsRatings[level][2]) levelsRatings[level][2] += 1
    else levelsRatings[level][2] = 1
  }

  if (element['q' + current_num].indexOf('So good') > -1) {
    soGood_rate_count += 1
    if (levelsRatings[level][3]) levelsRatings[level][3] += 1
    else levelsRatings[level][3] = 1
  }

  if (element['q' + current_num].indexOf('Excellent') > -1) {
    excellent_rate_count += 1
    if (levelsRatings[level][4]) levelsRatings[level][4] += 1
    else levelsRatings[level][4] = 1
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

function calculateFeedbackForLevel (level) {
  const levelRating = levelsRatings[level - 1]
  return parseInt(
    ((levelRating[0] * 0.2 +
      levelRating[1] * 0.4 +
      levelRating[2] * 0.6 +
      levelRating[3] * 0.8 +
      levelRating[4] * 1) *
      100) /
      4
  )
}

function calculateFeedbackPerLevelPercentage () {
  return levelsRatings.map(levelRating => {
    return parseInt(
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
Chart.defaults.plugins.title.font.size = 17

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
        text:
          "Student's Overall Performance of Reading Comprehension Skills & Feedback Evaluation",
        display: true
      },
      tooltip: {
        callbacks: {
          label: context => context.formattedValue + '%'
        },
        enabled: false
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
        text: "Student's Performance of Reading Comprehension Skills per Level",
        display: true
      },
      tooltip: {
        callbacks: {
          label: context => [
            // `Percentage: ${context.formattedValue}%`,
            'First question: ' +
              levelsCorrectAnswers[context.dataIndex][0] * 25 +
              '%',
            'Second question: ' +
              levelsCorrectAnswers[context.dataIndex][1] * 25 +
              '%',
            'Third question: ' +
              levelsCorrectAnswers[context.dataIndex][2] * 25 +
              '%',
            'Fourth question: ' +
              levelsCorrectAnswers[context.dataIndex][3] * 25 +
              '%'
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

const rating_chart = new Chart(one_rate_ctx, {
  type: 'bar',
  data: {
    labels: LEVELS,
    datasets: [
      {
        // label: 'Rating',
        data: [
          calculateFeedbackForLevel(1),
          calculateFeedbackForLevel(2),
          calculateFeedbackForLevel(3),
          calculateFeedbackForLevel(4),
          calculateFeedbackForLevel(5)
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
        text: "Student's Feedback Evaluation per Level",
        display: true
      },
      tooltip: {
        callbacks: {
          label: context => [
            // `Percentage: ${context.formattedValue}%`,
            'Poor: ' + levelsRatings[context.dataIndex][0] * 20 + '%',
            'Not bad: ' + levelsRatings[context.dataIndex][1] * 20 + '%',
            'Ok: ' + levelsRatings[context.dataIndex][2] * 20 + '%',
            'So good: ' + levelsRatings[context.dataIndex][3] * 20 + '%',
            'Excellent: ' + levelsRatings[context.dataIndex][4] * 20 + '%'
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
