const weeklySchedule = [
  {
    day: 'Monday',
    label: 'Upper body + abs',
    description: 'A strong full-body start with pressing, pulling, squatting, and core work.',
    exercises: [
      { name: 'Dumbbell Floor Press', reps: '3 x 10–12 reps', durationSec: 45, instructions: 'Lie on the floor, press the dumbbell up, and lower it slowly until your elbows touch the ground.' },
      { name: 'One-Arm Row', reps: '3 x 10 reps each side', durationSec: 45, instructions: 'Hinge at the hips, keep your back flat, and pull the dumbbell toward your ribcage.' },
      { name: 'Bodyweight Squat', reps: '3 x 15 reps', durationSec: 40, instructions: 'Sit back into your hips, keep your chest tall, and stand up with control.' },
      { name: 'Plank', reps: '3 x 30–45 sec', durationSec: 40, instructions: 'Brace your core and keep your body in a straight line from head to heels.' }
    ]
  },
  {
    day: 'Tuesday',
    label: 'Lower body + cardio',
    description: 'Build leg strength and raise your heart rate with brisk intervals.',
    exercises: [
      { name: 'Goblet Squat', reps: '3 x 12 reps', durationSec: 45, instructions: 'Hold the dumbbell at your chest and squat down until your thighs are at least parallel.' },
      { name: 'Reverse Lunge', reps: '3 x 10 each side', durationSec: 45, instructions: 'Step back, lower until both knees bend, then push through the front foot.' },
      { name: 'Glute Bridge', reps: '3 x 15 reps', durationSec: 40, instructions: 'Drive through your feet and squeeze your glutes at the top.' },
      { name: 'Quick March', reps: '8 min total', durationSec: 45, instructions: 'March in place briskly and keep your torso upright.' }
    ]
  },
  {
    day: 'Wednesday',
    label: 'Full body circuit',
    description: 'A compact, intense circuit that hits everything at once.',
    exercises: [
      { name: 'Squat to Press', reps: '3 x 10 reps', durationSec: 45, instructions: 'Stand tall, squat down, and press the dumbbell overhead as you stand.' },
      { name: 'Bent-Over Row', reps: '3 x 10 reps', durationSec: 45, instructions: 'Hinge at the hips, pull the weight toward your waist, and keep your chest proud.' },
      { name: 'Mountain Climber', reps: '3 x 20 total', durationSec: 40, instructions: 'Drive one knee toward your chest at a time while keeping your hips steady.' },
      { name: 'Bicycle Crunch', reps: '3 x 20 total', durationSec: 40, instructions: 'Bring opposite elbow and knee together while keeping your core braced.' }
    ]
  },
  {
    day: 'Thursday',
    label: 'Upper body + arms',
    description: 'Focus on strength, posture, and arm growth.',
    exercises: [
      { name: 'Dumbbell Shoulder Press', reps: '3 x 10 reps', durationSec: 45, instructions: 'Press the dumbbell overhead without arching your back too much.' },
      { name: 'Bent-Over Row', reps: '3 x 10 reps', durationSec: 45, instructions: 'Keep your spine neutral and pull the dumbbell to your lower ribs.' },
      { name: 'Push-Up', reps: '3 x 8–12 reps', durationSec: 40, instructions: 'Lower your chest toward the floor and press back up with control.' },
      { name: 'Hammer Curl', reps: '3 x 12 reps', durationSec: 40, instructions: 'Curl the dumbbell with your palms facing each other and squeeze at the top.' }
    ]
  },
  {
    day: 'Friday',
    label: 'Lower body + glutes',
    description: 'A leg day that prioritizes strength and shape.',
    exercises: [
      { name: 'Split Squat', reps: '3 x 10 each side', durationSec: 45, instructions: 'Lower straight down, keeping your front knee stacked over your ankle.' },
      { name: 'Glute Bridge', reps: '3 x 15 reps', durationSec: 40, instructions: 'Squeeze your glutes hard at the top and slow the lowering phase.' },
      { name: 'Step-Up', reps: '3 x 10 each side', durationSec: 45, instructions: 'Use a sturdy step or stair and drive through the lead foot.' },
      { name: 'Calf Raise', reps: '3 x 20 reps', durationSec: 40, instructions: 'Rise high on your toes, pause, and lower slowly.' }
    ]
  },
  {
    day: 'Saturday',
    label: 'Full body HIIT + core',
    description: 'Short, intense, and very effective for conditioning and fat burning.',
    exercises: [
      { name: 'Bodyweight Squat', reps: '45 sec', durationSec: 45, instructions: 'Move quickly but keep your form clean.' },
      { name: 'Dumbbell Press', reps: '45 sec', durationSec: 45, instructions: 'Use controlled reps and keep your core tight.' },
      { name: 'Reverse Lunge', reps: '45 sec', durationSec: 45, instructions: 'Alternate sides and stay balanced.' },
      { name: 'Plank', reps: '45 sec', durationSec: 45, instructions: 'Brace hard and think about long, straight posture.' }
    ]
  },
  {
    day: 'Sunday',
    label: 'Recovery / walk',
    description: 'Light movement and recovery to keep you feeling fresh.',
    exercises: [
      { name: 'Walk', reps: '30–45 min', durationSec: 45, instructions: 'Take a relaxed walk and focus on your breathing.' },
      { name: 'Mobility Flow', reps: '10–15 min', durationSec: 45, instructions: 'Do easy hip, hamstring, and shoulder mobility work.' }
    ]
  }
];

const roadmap = [
  {
    week: 'Week 1',
    focus: 'Learn the movements and keep intensity moderate.',
    details: 'Do 3 rounds of each workout. Rest 45–60 sec between exercises. Aim for 10–12 reps with good form.'
  },
  {
    week: 'Week 2',
    focus: 'Add one extra round to each main block.',
    details: 'Keep the same structure, but push a little harder. Add a backpack for resistance if the movement feels too easy.'
  },
  {
    week: 'Week 3',
    focus: 'Reduce rest and add a little pace.',
    details: 'Move through the circuit with 30 sec rest or less. Try 12–15 reps where it still feels controlled.'
  },
  {
    week: 'Week 4',
    focus: 'Emphasize quality over speed.',
    details: 'Use slower lowering phases and pause briefly at the bottom of each rep. Keep the workouts hard, not sloppy.'
  },
  {
    week: 'Week 5',
    focus: 'Make the lower body and core more challenging.',
    details: 'Add split squats, single-leg balance work, or a longer plank. Keep the cardio brisk and consistent.'
  },
  {
    week: 'Week 6',
    focus: 'Stay sharp and recover well.',
    details: 'Repeat the hardest version of your plan, but keep one day lighter if you feel worn down.'
  }
];

const dietTips = [
  'Protein: aim for 100–125g per day. Good options are chicken, eggs, Greek yogurt, tuna, tofu, cottage cheese, lean beef, beans, and lentils.',
  'Eat vegetables at lunch and dinner. Aim for a big handful or more each time.',
  'Choose carbs around workouts: oats, rice, potatoes, fruit, wraps, and wholegrain bread.',
  'Include healthy fats: olive oil, avocado, nuts, seeds, and peanut butter in small amounts.',
  'Keep your calories slightly below maintenance if fat loss is your main goal. Cut liquid calories, late-night snacks, and takeaways first.',
  'Drink water through the day. A simple target is 2–3 liters.'
];

const trackerItems = [
  'Completed 5–6 workouts this week',
  'Hit 8k–10k steps on most days',
  'Ate protein at each meal',
  'Drank enough water',
  'Got 7–8 hours of sleep'
];

const state = {
  activeDay: null,
  activeIndex: 0,
  remainingSeconds: 0,
  timerRunning: false,
  intervalId: null
};

function getTodaySession() {
  const today = new Date().getDay();
  return weeklySchedule[today === 0 ? 6 : today - 1];
}

function formatTime(seconds) {
  const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');
  return `${mins}:${secs}`;
}

function clearTimer() {
  if (state.intervalId) {
    clearInterval(state.intervalId);
    state.intervalId = null;
  }
}

function renderToday() {
  const session = getTodaySession();
  document.getElementById('today-label').textContent = session.day;

  const container = document.getElementById('today-session');
  container.innerHTML = `
    <div class="session-block">
      <h3>${session.label}</h3>
      <p>${session.description}</p>
      <p><strong>Tap below to open the guided workout flow.</strong></p>
      <div class="workout-actions">
        <button class="primary-btn" id="start-workout">Start today’s workout</button>
      </div>
      <div id="exercise-player"></div>
    </div>
  `;

  document.getElementById('start-workout').addEventListener('click', startWorkout);
}

function startWorkout() {
  state.activeDay = getTodaySession();
  state.activeIndex = 0;
  state.remainingSeconds = state.activeDay.exercises[0].durationSec;
  state.timerRunning = false;
  clearTimer();
  renderExercisePlayer();
}

function renderExercisePlayer() {
  const player = document.getElementById('exercise-player');
  if (!state.activeDay) {
    player.innerHTML = '';
    return;
  }

  const exercise = state.activeDay.exercises[state.activeIndex];
  const total = state.activeDay.exercises.length;
  const progress = `${state.activeIndex + 1}/${total}`;

  player.innerHTML = `
    <div class="exercise-card">
      <h3>${exercise.name}</h3>
      <p class="exercise-meta">${exercise.reps}</p>
      <p>${exercise.instructions}</p>
      <div class="timer-display">${formatTime(state.remainingSeconds)}</div>
      <p><strong>Progress:</strong> ${progress}</p>
      <div class="workout-actions">
        <button class="primary-btn" id="toggle-timer">${state.timerRunning ? 'Pause timer' : 'Start timer'}</button>
        <button class="secondary-btn" id="next-exercise">Next exercise</button>
        <button class="secondary-btn" id="restart-workout">Restart</button>
      </div>
    </div>
  `;

  document.getElementById('toggle-timer').addEventListener('click', toggleTimer);
  document.getElementById('next-exercise').addEventListener('click', goToNextExercise);
  document.getElementById('restart-workout').addEventListener('click', startWorkout);
}

function toggleTimer() {
  if (!state.activeDay) return;

  if (state.timerRunning) {
    clearTimer();
    state.timerRunning = false;
    renderExercisePlayer();
    return;
  }

  state.timerRunning = true;
  clearTimer();
  state.intervalId = setInterval(() => {
    state.remainingSeconds -= 1;
    if (state.remainingSeconds <= 0) {
      clearTimer();
      state.timerRunning = false;
      state.remainingSeconds = 0;
    }
    renderExercisePlayer();
  }, 1000);

  renderExercisePlayer();
}

function goToNextExercise() {
  if (!state.activeDay) return;
  state.activeIndex += 1;
  if (state.activeIndex >= state.activeDay.exercises.length) {
    state.activeIndex = state.activeDay.exercises.length - 1;
    clearTimer();
    state.timerRunning = false;
    state.remainingSeconds = 0;
    renderExercisePlayer();
    return;
  }
  clearTimer();
  state.timerRunning = false;
  state.remainingSeconds = state.activeDay.exercises[state.activeIndex].durationSec;
  renderExercisePlayer();
}

function renderWeeklySchedule() {
  const container = document.getElementById('weekly-schedule');
  container.innerHTML = weeklySchedule
    .map((item) => `
      <div class="day-card">
        <h3>${item.day}</h3>
        <p><strong>${item.label}</strong></p>
        <p>${item.description}</p>
      </div>
    `)
    .join('');
}

function renderRoadmap() {
  const container = document.getElementById('roadmap');
  const startDate = new Date('2026-07-07');
  const today = new Date();
  const diffDays = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
  const currentWeekIndex = Math.min(roadmap.length - 1, Math.floor(diffDays / 7));

  container.innerHTML = roadmap
    .map((item, index) => {
      const isCurrent = index === currentWeekIndex;
      const label = isCurrent ? 'Current week' : index < currentWeekIndex ? 'Completed' : 'Upcoming';
      return `
        <div class="week-card ${isCurrent ? 'active-week' : ''}">
          <h3>${item.week}</h3>
          <p class="exercise-meta">${label}</p>
          <p><strong>${item.focus}</strong></p>
          <p>${item.details}</p>
        </div>
      `;
    })
    .join('');
}

function renderDiet() {
  const container = document.getElementById('diet');
  container.innerHTML = `
    <div class="tip-card">
      <h3>Simple structure</h3>
      <ul>
        ${dietTips.map((tip) => `<li>${tip}</li>`).join('')}
      </ul>
    </div>
  `;
}

function renderHydration() {
  const container = document.getElementById('hydration');
  const goal = 2.5;
  const saved = Number(localStorage.getItem('hydration-liters') || '0');
  const percent = Math.min(100, Math.round((saved / goal) * 100));

  container.innerHTML = `
    <div class="hydration-card">
      <p><strong>${saved.toFixed(2)}L drunk today</strong></p>
      <p>Goal: ${goal.toFixed(2)}L</p>
      <div class="hydration-meter"><div style="width:${percent}%"></div></div>
      <div class="hydration-controls">
        <input id="hydration-input" type="number" step="0.25" min="0" value="${saved.toFixed(2)}" />
        <button class="primary-btn" id="save-hydration">Save</button>
      </div>
      <div class="hydration-actions">
        <button class="secondary-btn" data-add="0.25">+250ml</button>
        <button class="secondary-btn" data-add="0.5">+500ml</button>
        <button class="secondary-btn" id="reset-hydration">Reset</button>
      </div>
    </div>
  `;

  document.getElementById('save-hydration').addEventListener('click', () => {
    const value = Number(document.getElementById('hydration-input').value || 0);
    localStorage.setItem('hydration-liters', String(value));
    renderHydration();
  });

  document.querySelectorAll('[data-add]').forEach((button) => {
    button.addEventListener('click', () => {
      const added = Number(button.getAttribute('data-add'));
      const nextValue = Math.max(0, Number(localStorage.getItem('hydration-liters') || '0') + added);
      localStorage.setItem('hydration-liters', String(nextValue));
      renderHydration();
    });
  });

  document.getElementById('reset-hydration').addEventListener('click', () => {
    localStorage.removeItem('hydration-liters');
    renderHydration();
  });
}

function renderTracker() {
  const container = document.getElementById('tracker');
  const saved = JSON.parse(localStorage.getItem('tracker-state') || '[]');

  container.innerHTML = trackerItems
    .map((item, index) => `
      <li>
        <input type="checkbox" id="item-${index}" ${saved.includes(index) ? 'checked' : ''}>
        <label for="item-${index}">${item}</label>
      </li>
    `)
    .join('');

  container.querySelectorAll('input').forEach((input) => {
    input.addEventListener('change', () => {
      const checked = [...container.querySelectorAll('input:checked')].map((box) => Number(box.id.split('-')[1]));
      localStorage.setItem('tracker-state', JSON.stringify(checked));
    });
  });
}

renderToday();
renderWeeklySchedule();
renderRoadmap();
renderDiet();
renderHydration();
renderTracker();
