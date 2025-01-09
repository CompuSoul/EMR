// script.js

// Tab switching logic
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-button');
    const panels = document.querySelectorAll('.tab-panel');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from tabs and panels
            tabs.forEach(t => t.classList.remove('active'));
            panels.forEach(p => p.classList.remove('active'));

            // Add active class to selected tab and corresponding panel
            tab.classList.add('active');
            const target = tab.getAttribute('data-tab');
            document.getElementById(target).classList.add('active');
        });
    });

    // Handle client search (demo only; replace with real data fetching logic)
    const searchForm = document.getElementById('search-form');
    searchForm.addEventListener('submit', event => {
        event.preventDefault();
        const clientId = document.getElementById('client-id').value;

        // Fetch data (mock data for demo purposes)
        const clientData = {
            intake: `<p><strong>Client Name:</strong> John Doe</p>
                    <p><strong>Date of Birth:</strong> 01/01/1990</p>
                    <p><strong>Reason for Visit:</strong> Anxiety management</p>`,
            assessment: `<p><strong>Symptoms:</strong> Anxiety, stress</p>
                         <p><strong>Goals:</strong> Reduce anxiety, improve coping skills</p>`,
            pcp: `<p><strong>PCP Goals:</strong> Maintain employment, attend weekly therapy</p>
                  <p><strong>Supports:</strong> Family, therapist</p>`
        };

        // Display data in panels
        document.getElementById('intake').innerHTML = clientData.intake;
        document.getElementById('assessment').innerHTML = clientData.assessment;
        document.getElementById('pcp').innerHTML = clientData.pcp;

        // Make all panels visible
        panels.forEach(p => p.classList.remove('active'));
        tabs[0].classList.add('active');
        document.getElementById('intake').classList.add('active');
    });
});
