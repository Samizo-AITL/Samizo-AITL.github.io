function updateWorldClocks() {
  const now = new Date();

  const clocks = {
    "time-tokyo":   "Asia/Tokyo",
    "time-ny":      "America/New_York",
    "time-la":      "America/Los_Angeles",
    "time-london":  "Europe/London",
    "time-paris":   "Europe/Paris",
    "time-beijing": "Asia/Shanghai"
  };

  for (const id in clocks) {
    const el = document.getElementById(id);
    if (!el) continue; // 他ページでのエラー防止

    el.textContent = new Intl.DateTimeFormat("en-GB", {
      timeZone: clocks[id],
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }).format(now);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  updateWorldClocks();
  setInterval(updateWorldClocks, 1000);
});
