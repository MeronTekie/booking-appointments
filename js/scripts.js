//  USER INTERFACE LOGIC
$(document).ready(function () {
  $("form#appInfo").submit(function (event) {
    event.preventDefault();
    const name = $("input#name").val();
    const appointDes = $("input#appDescription").val();
    const appointDate = $("input#appDate").val();
    const startTime = $("input#appStart").val();
    const endTime = $("input#appEnd").val();
    $("#confirm").text("Congrats your  booking is successful!!!");
  });
});
