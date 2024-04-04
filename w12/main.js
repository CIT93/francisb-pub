workoutForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const exercise = document.getElementById('exercise').value
    const reps = parseInt(document.getElementById('reps').value);
    const duration = parseFloat(document.getElementById('duration').value);

    output.innerHTML = "Starting exercise...";
    workout.innerHTML = `Perform ${exercise} for ${reps} rep(s) for ${duration} minute(s)`;
    simulateWorkout(duration, function () {
        output.innerHTML = "Workout completed!";
    });
});

function simulateWorkout(duration, callback) {
    const totalTime = duration * 60000;
    setTimeout(function () {
        callback();
    }, totalTime);
}
