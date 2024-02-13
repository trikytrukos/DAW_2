document.addEventListener("DOMContentLoaded", function () {
  let currentDate = new Date();
  let currentMonth = currentDate.getMonth();
  let currentYear = currentDate.getFullYear();

  function updateCalendarHeader() {
    const monthYearSpan = document.querySelector("#month-year");
    monthYearSpan.textContent = `${getMonthName(currentMonth)} ${currentYear}`;
}

  function generateWeekView() {
  }

  document.querySelector(".prev").addEventListener("click", () => {
    generateWeekView();
  });

  document.querySelector(".next").addEventListener("click", () => {
    generateWeekView();
  });

  function getMonthName(month) {
    const monthNames = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];
    return monthNames[month];
  }

  updateCalendarHeader();
  generateWeekView();
});