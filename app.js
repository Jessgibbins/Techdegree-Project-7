// Close alert message on click

const closeAlert = document.querySelector('.close-alert');

closeAlert.addEventListener('click', () => {
  const alert = document.querySelector('.alert');
  alert.parentNode.removeChild(alert);
});

// Traffic chart click event handler

const trafficOptions = document.querySelector('.traffic-options');

trafficOptions.addEventListener('click', (event) => {
  if (event.target.tagName == 'P') {
  for(i=0; i<trafficOptions.children.length; i++) {
      trafficOptions.children[i].className = '';
    }
    event.target.classList.add('traffic-options-active');
  }
});

// Chart.js 

Chart.defaults.global.responsive = true;
Chart.defaults.global.maintainAspectRatio = false;

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-7", "18-24", "25-31"],
        datasets: [{
            dislay: [false],
            labelString: [false],
            data: [500, 1000, 500, 1250, 1750, 1250, 1500, 1000, 2000, 1500, 2000],
            backgroundColor: [
                'rgb(216, 218, 255)',
            ],
            borderColor: [
                'rgb(115, 119, 191)',
            ],
            borderWidth: 1
        }]
    },
    options: {
      legend: {
      display: false
    },
      elements: {
        line: {
          tension: 0
      }
    }
  }
});


var ctx = document.getElementById("myChart2");
var myChart2 = new Chart(ctx, {
  type: 'bar',
  data: {
      labels: ["S", "M", "T", "W", "T", "F", "S"],
      datasets: [{
          dislay: [false],
          labelString: [false],
          data: [50, 75, 150, 100, 200, 175, 75],
          backgroundColor: [
              'rgb(115, 119, 191)',
              'rgb(115, 119, 191)',
              'rgb(115, 119, 191)',
              'rgb(115, 119, 191)',
              'rgb(115, 119, 191)',
              'rgb(115, 119, 191)',
              'rgb(115, 119, 191)',
          ],
          borderColor: [
              'rgb(115, 119, 191)',
              'rgb(115, 119, 191)',
              'rgb(115, 119, 191)',
              'rgb(115, 119, 191)',
              'rgb(115, 119, 191)',
              'rgb(115, 119, 191)',
              'rgb(115, 119, 191)',
          ],
          borderWidth: 1
      }]
  },
        options: {
          legend: {
         display: false
      },
      scales: {
          yAxes: [{
              ticks: {
                  labelOffset: 20,
                  max: 250,
                  min: 0,
                  stepSize: 50
              }
          }]
      }
  }
});

var ctx = document.getElementById("myChart3");
var myChart2 = new Chart(ctx, {
  type: 'doughnut',
  data: {
      labels: ["Phones", "Tablets", "Desktop"],
      datasets: [{
          label: '# of users',
          data: [50, 75, 150],
          backgroundColor: [
              'rgb(116, 177, 191)',
              'rgb(129, 201, 143)',
              'rgb(115, 119, 191)',
          ],
          borderColor: [
            'rgb(116, 177, 191)',
            'rgb(129, 201, 143)',
            'rgb(115, 119, 191)',
          ],
      }]
  },
  options: {
    legend: {
      position: 'right',
      labels: {
        boxWidth: 13,
      }
    }
  }
});

window.addEventListener('resize', function () { myChart.resize() })

// On Off Buttons 

const privacyCheckbox = document.querySelector('#privacyCheckbox');
const privacySettings = document.querySelector('.privacySettings');
  privacyCheckbox.addEventListener("click", function(){
  if (privacySettingsInput.checked) {
    privacySettings.classList.add('off');
    privacySettings.classList.remove('on');
} else {
  privacySettings.classList.add('on');
  privacySettings.classList.remove('off');
}
});

const emailCheckbox = document.querySelector('#emailCheckbox');
const emailSettings = document.querySelector('.emailSettings');
  emailCheckbox.addEventListener("click", function(){
  if (emailSettingsInput.checked) {
  emailSettings.classList.add('off');
  emailSettings.classList.remove('on');
} else {
  emailSettings.classList.add('on');
  emailSettings.classList.remove('off');
}
});

const saveButton = document.querySelector('.save');
saveButton.addEventListener('click', () => {
  alert('Your settings have been saved!')
});

// Message form event handlers

const sendMessage = document.getElementById('sendMessage');
const messageField = document.getElementById('messageField');
const userName = document.getElementById('userName');

sendMessage.addEventListener('click', (e) => {
  if (userName.value === '' && messageField.value === '') {
    alert('Please fill out user name and message field before sending');
  } else if (userName.value === '') {
    alert('Please fill out user name before sending');
  } else if (messageField.value === '') {
    alert('Please fill out message field before sending');
  } else {
    alert('Your messsage has been sent!');
  }
});


