/**
 * Low-chance jackpot function for Senator Casino
 * (edit WIN_PROB for live, default: extremely rare)
 */
const WIN_PROB = 0.00001; // 0.001% chance (1 in 100,000), adjust as needed

function tryJackpot() {
  if (Math.random() < WIN_PROB) {
    document.body.style.background = "radial-gradient(circle at 60% 70%, #0ff 0%, #ff00cc 100%)";
    alert("🎉 JACKPOT! Please contact support to claim your payout.");
  } else if (Math.random() < 0.001) {
    // Simulate near-miss (euphoria!)
    alert("❗ So close! You almost hit the jackpot!");
  } else {
    alert("No jackpot this time. Try again!");
  }
}
