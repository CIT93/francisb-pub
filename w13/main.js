workoutForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const exercise = document.getElementById('exercise').value;
    const reps = parseInt(document.getElementById('reps').value);
    const duration = parseFloat(document.getElementById('duration').value);

    output.innerHTML = "Starting exercise...";
    workout.innerHTML = `Perform ${exercise} for ${reps} rep(s) for ${duration} minute(s)`;

    simulateWorkout(duration, exercise)
        .then(() => {
            output.innerHTML = "Workout completed!";
            workout.innerHTML = 'Take a rest';
        })
        .catch(() => {
            output.innerHTML = "What exercise did you want to do?";
            workout.innerHTML = '';
        });
});

function simulateWorkout(duration ,exercise) {
    return new Promise((resolve, reject) => {
        const totalTime = duration * 60000;
        setTimeout(() => {
            resolve();
        }, totalTime);
        if (!exercise) {
            reject();
        }
    });
}