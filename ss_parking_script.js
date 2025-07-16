function onVehicleSelect(executionContext) {
    var formContext = executionContext.getFormContext();

    // Get selected vehicle (lookup)
    var selectedVehicle = formContext.getAttribute("ss_vehicle").getValue();

    if (selectedVehicle !== null) {
        var vehicleName = selectedVehicle[0].name;

        // Show an alert (test trigger)
        alert("You selected: " + vehicleName);

        // Optionally fill the parking request name
        formContext.getAttribute("ss_parkingrequestname").setValue("Request for " + vehicleName);
    }
}
