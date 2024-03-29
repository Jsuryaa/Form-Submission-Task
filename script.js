document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var formData = new FormData(this);
  var foodChecked = formData.getAll("food");
  if (foodChecked.length < 2) {
      alert("Please select at least 2 food options.");
      return;
  }
  var newRow = document.createElement("tr");
  newRow.innerHTML = `
      <td>${formData.get("firstName")}</td>
      <td>${formData.get("lastName")}</td>
      <td>${formData.get("address")}</td>
      <td>${formData.get("pincode")}</td>
      <td>${formData.get("gender")}</td>
      <td>${foodChecked.join(", ")}</td>
      <td>${formData.get("state")}</td>
      <td>${formData.get("country")}</td>
  `;
  document.getElementById("dataTable").getElementsByTagName("tbody")[0].appendChild(newRow);
  document.getElementById("myForm").reset();
});
