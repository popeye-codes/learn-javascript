// Syntax:

// switch (key) {
//     case value:

//         break;

//     default:

//         break;
// }

const month = "march";

// shift + option + downArraow -> to make duplicate of selected text

switch (month) {

    // if we don't use break, then if any one case execute below that all case will be execute EXCEPT "default"
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("February");
        break;
    case "march":
        console.log("March");
        break;
    case "april":
        console.log("April");
        break;

    default:

        break;
}