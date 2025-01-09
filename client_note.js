// Example: Fetch and populate goals
fetch('/api/getGoals?clientId=123')
    .then(response => response.json())
    .then(goals => {
        const container = document.getElementById('goals-container');
        container.innerHTML = '';
        goals.forEach((goal, index) => {
            const goalElement = `
                <div class="goal">
                    <h3>Goal ${index + 1}: ${goal.title}</h3>
                    <p>Description: ${goal.description}</p>
                    <label for="progress-goal-${index + 1}">Progress:</label>
                    <textarea id="progress-goal-${index + 1}" name="progress-goal-${index + 1}" rows="3" placeholder="Describe progress towards this goal..."></textarea>
                </div>
            `;
            container.innerHTML += goalElement;
        });
    });
