const analyzeBtn = document.getElementById("analyze-btn");
const resetBtn = document.getElementById("reset-btn");

const resultsDiv = document.getElementById("results");
const historyList = document.getElementById("history-list");

function getAppDetails() {
    const appName = document.getElementById("app-name").value;
    const platform = document.getElementById("platform").value;
    const category = document.getElementById("category").value;

    return {
        appName: appName,
        platform: platform,
        category: category
    };
}
function getSelectedPermissions() {
    const checkboxes = document.querySelectorAll(
        '#permissions input[type="checkbox"]:checked'
    );

    const selectedPermissions = [];

    checkboxes.forEach(checkbox => {
        selectedPermissions.push(checkbox.value);
    });

    return selectedPermissions;
}

analyzeBtn.addEventListener("click", function() {
    const appDetails = getAppDetails();
    const selectedPermissions = getSelectedPermissions();

    const results = analyze(selectedPermissions, appDetails.category);

    resultsDiv.innerHTML = "";

results.forEach(result => {
    resultsDiv.innerHTML += `
        <div class="result-card">
            <div class="result-header">
                <h3>${result.permission}</h3>
                <span class="risk-label">${result.risk} Risk</span>
            </div>

            <span class="status-label">${result.status}</span>

            <p class="description">${result.description}</p>

            <div class="purpose-section">
                <strong>Purpose</strong>
                <p>${result.purpose}</p>
            </div>

            ${result.message ? `
                <div class="result-message">
                    ${result.message}
                </div>
            ` : ""}
        </div>
    `;
    });
});

