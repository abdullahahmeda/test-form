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
  { poor: 0, notBad: 0, ok: 0, soGood: 0, excellent: 0 },
  { poor: 0, notBad: 0, ok: 0, soGood: 0, excellent: 0 },
  { poor: 0, notBad: 0, ok: 0, soGood: 0, excellent: 0 },
  { poor: 0, notBad: 0, ok: 0, soGood: 0, excellent: 0 },
  { poor: 0, notBad: 0, ok: 0, soGood: 0, excellent: 0 }
]

rating_data.forEach((element, i) => {
  const current_num = (i + 1).toString()
  const level = parseInt(i / 4)

  if (element['q' + current_num] === 'Poor') {
    poor_rate_count += 1
    if (levelsRatings[level].poor)
      levelsRatings[level].poor = levelsRatings[level].poor + 1
    else levelsRatings[level].poor = 1
  }

  if (element['q' + current_num] === 'Not bad') {
    notBad_rate_count += 1
    if (levelsRatings[level].notBad)
      levelsRatings[level].notBad = levelsRatings[level].notBad + 1
    else levelsRatings[level].notBad = 1
  }

  if (element['q' + current_num] === 'Ok') {
    ok_rate_count += 1
    if (levelsRatings[level].ok)
      levelsRatings[level].ok = levelsRatings[level].ok + 1
    else levelsRatings[level].ok = 1
  }

  if (element['q' + current_num] === 'So good') {
    soGood_rate_count += 1
    if (levelsRatings[level].soGood)
      levelsRatings[level].soGood = levelsRatings[level].soGood + 1
    else levelsRatings[level].soGood = 1
  }

  if (element['q' + current_num] === 'Excellent') {
    excellent_rate_count += 1
    if (levelsRatings[level].excellent)
      levelsRatings[level].excellent = levelsRatings[level].excellent + 1
    else levelsRatings[level].excellent = 1
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
    ((levelRating.poor * 0.2 +
      levelRating.notBad * 0.4 +
      levelRating.ok * 0.6 +
      levelRating.soGood * 0.8 +
      levelRating.excellent * 1) *
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
          "Student's Overall Performance of Reading Skills & Feedback Evaluation",
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
            'Poor: ' + levelsRatings[context.dataIndex].poor,
            'Not bad: ' + levelsRatings[context.dataIndex].notBad,
            'Ok: ' + levelsRatings[context.dataIndex].ok,
            'So good: ' + levelsRatings[context.dataIndex].soGood,
            'Excellent: ' + levelsRatings[context.dataIndex].excellent
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

document.write(JSON.stringify(levelsRatings) + '<br>')
document.write(levelsRatings[0].poor)
