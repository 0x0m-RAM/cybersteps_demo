const note = 2;

if (
    typeof note !== "number" ||
    !Number.isInteger(note) ||
    note < 1 ||
    note > 6
) {
    console.log("Ungültige Note");
} else if (note === 1 || note === 2) {
    console.log("Gut");
} else if (note === 3 || note === 4) {
    console.log("Bestanden");
} else {
    console.log("Schlecht");
}
