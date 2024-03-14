const months = {
	0: "January",
	1: "February",
	2: "March",
	3: "April",
	4: "May",
	5: "June",
	6: "July",
	7: "August",
	8: "September",
	9: "October",
	10: "November",
	11: "December"
};

const color_unselected = "white";
const color_today = "#D4F0F8";
const color_invalid = "#E4E4E4";
const color_selected = "#9F9F9F";

let current_selection = {
	"year": -1,
	"month": -1
};

let dates_selected = [ ];

function cardinalDate(num) {
	if (num > 10 && num < 14)
		return num + "th";
	else
		return num + (num % 10 == 1 ? "st" : num % 10 == 2 ? "nd" : num % 10 == 3 ? "rd" : "th");
}

function daysInMonth(month, year) { return new Date(year, month + 1, 0).getDate(); }

// Returns which day of the week the first of the month falls on
function firstDayOfWeek(month, year) { return new Date(year, month, 1).getDay(); }

function previousMonth() {
	if (current_selection.month == 0) {
		current_selection.month = 11;
		current_selection.year--;
	}
	else {
		current_selection.month--;
	}
	setMonth(new Date(current_selection.year, current_selection.month));
}

function nextMonth() {
	if (current_selection.month == 11) {
		current_selection.month = 0;
		current_selection.year++;
	}
	else {
		current_selection.month++;
	}
	setMonth(new Date(current_selection.year, current_selection.month));
}

function setMonth(set_date) {
	const today = new Date();
	let this_month = null;
	if (today.getMonth() == set_date.getMonth() && today.getFullYear() == set_date.getFullYear()) {
		this_month = true;
	}
	else {
		this_month = false;
	}
	const month_length = daysInMonth(set_date.getMonth(), set_date.getYear());
	const week_day_1 = firstDayOfWeek(set_date.getMonth(), set_date.getFullYear());
	const calendar = document.querySelector("#calendar");

	let start_day = null;
	let end_day = null;
	if (selection_complete) {
		start_day = dates_selected[0] < dates_selected[1] ? dates_selected[0] : dates_selected[1];
		end_day = dates_selected[0] > dates_selected[1] ? dates_selected[0] : dates_selected[1];
	}

	document.querySelector("#month").innerHTML = months[set_date.getMonth()] + ", " + set_date.getFullYear();
	let i = 0;
	let day_count = 1;
	for (const week of calendar.children) {
		for (const day of week.children) {
			if (i >= week_day_1 && day_count <= month_length) {
				day.innerHTML = day_count;
				day.removeAttribute("invalid");
				day.removeAttribute("selected");
				
				// TODO: Restore selection when you get back to the month
				if (selection_in_progress 
					&& day_count == dates_selected[0].getDate()
					&& set_date.getMonth() == dates_selected[0].getMonth()
					&& set_date.getFullYear() == dates_selected[0].getFullYear()) {
					day.setAttribute("selected", "");
					day.style.backgroundColor = color_selected;
				} else if (selection_complete
					&& new Date(current_selection.year, current_selection.month, day_count) > start_day
					&& new Date(current_selection.year, current_selection.month, day_count) <= end_day) {
					day.style.backgroundColor = color_selected;
				} else if (this_month && day_count == today.getDate()) {
					day.style.backgroundColor = color_today;
					day.setAttribute("istoday", "");
				}
				else {
					day.style.backgroundColor = color_unselected;
					day.removeAttribute("istoday");
				}
				day_count++;
			}
			else if (day_count > month_length || i < week_day_1) {
				day.innerHTML = "";
				day.style.backgroundColor = color_invalid;
				day.setAttribute("invalid", "");
			}
			i++;
		}
	}

	if (document.querySelector("#day35").innerHTML == "") {
		document.querySelector("#last_week").style.display = "none";
	}
	else {
		document.querySelector("#last_week").style.display = "flex";
	}
}

let selection_in_progress = false;
let selection_complete = false;
function calendarEvent(event) {
	if (selection_complete || event.currentTarget.hasAttribute("invalid")) return;
	const target = event.currentTarget;
	if (event.type == "click") {
		if (!target.hasAttribute("selected") && !selection_in_progress) {
			target.style.backgroundColor = color_selected;
			target.setAttribute("selected", "");
			dates_selected.push(new Date(current_selection.year, current_selection.month, target.innerHTML));
			document.querySelector("#selections_p").innerHTML = "Date selected: " 
				+ months[dates_selected[0].getMonth()] + " " + cardinalDate(dates_selected[0].getDate()) + ", "
				+ dates_selected[0].getFullYear();
			selection_in_progress = true;
		} else if (target.hasAttribute("selected")) {
			if (target.hasAttribute("istoday"))
				target.style.backgroundColor = color_today;
			else
				target.style.backgroundColor = color_unselected;
			target.removeAttribute("selected");
			dates_selected.pop();
			document.querySelector("#selections_p").innerHTML = "Date selected: none";
			selection_in_progress = false;
		} else {
			selection_complete = true;
			target.style.backgroundColor = color_selected;
			dates_selected.push(new Date(current_selection.year, current_selection.month, target.innerHTML));
			const date1_f = months[dates_selected[0].getMonth()] + " " + cardinalDate(dates_selected[0].getDate()) + ", "
				+ dates_selected[0].getFullYear();
			const date2_f = months[dates_selected[1].getMonth()] + " " + cardinalDate(dates_selected[1].getDate()) + ", "
				+ dates_selected[1].getFullYear();
			const output = dates_selected[0] < dates_selected[1] ? date1_f + " - " + date2_f : date2_f + " - " + date1_f;
			document.querySelector("#selections_p").innerHTML = "Date selected: " + output;
		}
	}
	else if (selection_in_progress) {
		if (dates_selected[0].getMonth() == current_selection.month && dates_selected[0].getFullYear() == current_selection.year) {
			const low_selected = dates_selected[0].getDate() <= target.innerHTML ? dates_selected[0].getDate() : Number(target.innerHTML);
			const high_selected = dates_selected[0].getDate() > target.innerHTML ? dates_selected[0].getDate() : Number(target.innerHTML);
			
			for (let i = 0; i <= 41; i++) {
				const temp = document.querySelector(`#day${i}`);
				if (temp.innerHTML >= low_selected && temp.innerHTML <= high_selected) {
					temp.style.backgroundColor = color_selected;
				} else if (temp.hasAttribute("istoday")) {
					temp.style.backgroundColor = color_today;
				} else if (temp.hasAttribute("invalid")) {
					temp.style.backgroundColor = color_invalid;
				} else {
					temp.style.backgroundColor = color_unselected;
				}
			}
		}
	}
	else if (target.hasAttribute("selected")) {
		return;
	}
	else if (event.type == "mouseover") {
		target.style.backgroundColor = "#8BDFF7";
	}
	else if (event.type == "mouseout") {
		if (target.hasAttribute("istoday") && !target.hasAttribute("selected"))
			target.style.backgroundColor = color_today;
		else
			target.style.backgroundColor = color_unselected;
	}
}

function resetSelection() {
	selection_in_progress = false;
	selection_complete = false;
	dates_selected = [ ];
	document.querySelector("#selections_p").innerHTML = "Dates selected: none";
	for (let i = 0; i <= 41; i++) {
		const temp = document.querySelector(`#day${i}`);
		if (temp.hasAttribute("invalid")) continue;

		if (temp.hasAttribute("istoday"))
			temp.style.backgroundColor = color_today
		else
			temp.style.backgroundColor = color_unselected;
		temp.removeAttribute("selected");
	}
}

export function initializePage() {
	document.addEventListener("DOMContentLoaded", function() {
		const today = new Date();
		current_selection.year = today.getFullYear();
		current_selection.month = today.getMonth();
		setMonth(today);

		document.querySelector("#prev_month").addEventListener("click", previousMonth);
		document.querySelector("#next_month").addEventListener("click", nextMonth);
		document.querySelector("#reset_selection").addEventListener("click", resetSelection);

		for (let i = 0; i <= 41; i++) {
			document.querySelector(`#day${i}`).addEventListener("mouseover", calendarEvent);
			document.querySelector(`#day${i}`).addEventListener("mouseout", calendarEvent);
			document.querySelector(`#day${i}`).addEventListener("click", calendarEvent);
		}
	});
}