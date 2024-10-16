const authorBtn = document.querySelector(".author");
const githubBtn = document.querySelector(".github");
const linkedinBtn = document.querySelector(".linkedin");
const xBtn = document.querySelector(".x");

authorBtn.addEventListener("click", () => {
    window.open("https://github.com/fargox-dev", "_blank");
});
githubBtn.addEventListener("click", () => {
    window.open("https://github.com/fargox-dev", "_blank");
});
linkedinBtn.addEventListener("click", () => {
    window.open("https://github.com/fargox-dev", "_blank");
});
xBtn.addEventListener("click", () => {
    window.open("https://github.com/fargox-dev", "_blank");
});


function calculateCost() {
    const weight = parseFloat(document.getElementById("weight").value);
    if (isNaN(weight) || weight <= 0) {
        alert("Please enter a valid weight.");
        return;
    }

    let totalCost = 0;
    let requiredMaterials = [];

    // Core ingredients
    const coreIngredients = [
        { name: "Harina", price: 25, amount: 1000, unit: "g"},
        { name: "Azucar", price: 12, amount: 300, unit: "g"},
        { name: "Manteca", price: 11, amount: 175, unit: "g"},
        { name: "Levadura", price: 5, amount: 40, unit: "g"},
        { name: "Huevo", price: 20, amount: 5, unit: "pzas"}
    ];

    // Type of mantequilla
    let mantequilla;
    const mantequillaNormal = document.getElementById("mantequillaNormal");
    const mantequillaGloria = document.getElementById("mantequillaGloria");

    if (mantequillaNormal.checked) {
        mantequilla = { name: "Mantequilla", price: 7, amount: 100, unit: "g"};
    } else if (mantequillaGloria.checked) {
        mantequilla = { name: "Mantequilla Gloria", price: 20, amount: 100, unit: "g"};
    } else {
        alert("Please select a type of mantequilla.");
        return;
    }

    coreIngredients.push(mantequilla);

    // Calculate cost for core ingredients
    coreIngredients.forEach(ingredient => {
        const totalAmount = ingredient.amount * weight;
        const totalIngredientCost = ingredient.price * weight;
        totalCost += totalIngredientCost;

        requiredMaterials.push({
            name: ingredient.name,
            amount: totalAmount,
            cost: totalIngredientCost.toFixed(1),
            unit: ingredient.unit // Include the unit here
        });
    });

    // Optional ingredients
    const optionalIngredients = [
        { id: "canela", name: "Canela", price: 8, amount: 15, unit: "g"},
        { id: "nuez", name: "Nuez", price: 25, amount: 80, unit: "g"},
        { id: "pasas", name: "Pasas", price: 8, amount: 80, unit: "g"},
        { id: "rompope", name: "Rompope", price: 15, amount: 100, unit: "mL"}
    ];

    // Calculate cost for optional ingredients
    optionalIngredients.forEach(ingredient => {
        const checkbox = document.getElementById(ingredient.id);
        if (checkbox.checked) {
            const totalAmount = ingredient.amount * weight;
            const totalIngredientCost = ingredient.price * weight;
            totalCost += totalIngredientCost;

            requiredMaterials.push({
                name: ingredient.name,
                amount: totalAmount,
                cost: totalIngredientCost.toFixed(1),
                unit: ingredient.unit // Include the unit here
            });
        }
    });

    // Display the total cost
    document.getElementById("totalCost").innerText = totalCost.toFixed(2);

    // Update the required materials table
    const requiredMaterialsTable = document.getElementById("requiredMaterialsTableBody");
    requiredMaterialsTable.innerHTML = ""; // Clear previous content
    requiredMaterials.forEach(material => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${material.name}</td>
            <td>${material.amount} ${material.unit}</td>
            <td>$${material.cost}</td>
        `;
        requiredMaterialsTable.appendChild(row);
    });
}






