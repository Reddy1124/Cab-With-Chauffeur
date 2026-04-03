const prices = { mini: [80, 150], sedan: [150, 250], suv: [250, 400] };

document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const pickup  = document.getElementById("pickup").value.trim();
  const drop    = document.getElementById("drop").value.trim();
  const cabType = document.getElementById("cab-type").value;

  if (!pickup || !drop || !cabType) {
    alert("Please fill in all fields before booking.");
    return;
  }

  const [min, max] = prices[cabType];
  const price = Math.floor(Math.random() * (max - min + 1)) + min;
  const label = cabType.charAt(0).toUpperCase() + cabType.slice(1);

  const message =
    "🚘 *Cab with Chauffeur – Booking Request*\n\n" +
    "📍 Pickup   : " + pickup + "\n" +
    "🏁 Drop     : " + drop + "\n" +
    "🚗 Cab Type : " + label + "\n" +
    "💰 Fare     : ₹" + price + "\n\n" +
    "Please confirm my booking. Thank you!";

  window.open("https://wa.me/?text=" + encodeURIComponent(message), "_blank");
});