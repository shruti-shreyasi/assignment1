import itemObjectArray from "./data.js";

var PRESENTITEM = 1; //present item id
var LASTITEM = 0; //id of last item

/**
 * limitToround specifies max length
 * @param {title of the image} title
 * @returns description of the image
 */
const findDescription = function (title) {
    let desc = "";
    const limitToround = 33;
    if (title.length > limitToround) {
        desc = title.substring(0, 14) + "...";
        let numEnd = limitToround - 17;
        desc = desc + title.substring(title.length - numEnd);
    } else {
        desc = title;
    }
    return desc;
};

/**
 * modify HTML of left nav bar
 */
const grid1 = document.querySelector(".grid1");
let count = 1;
for (const item of itemObjectArray) {
    let nav = document.createElement("ul");
    let id = count;
    count++;
    nav.setAttribute("id", id);
    nav.innerHTML = `
        <img src=${item.previewImage} alt=${
        item.title
    } width="30px" height="30px"/>
        <span>${findDescription(item.title)}</span>
    `;
    grid1.append(nav);
}

/**
 * populate grid on right
 * @param {present id} presentItem
 */
const functionRight = function (presentItem) {
    let grid2a = document.querySelector(".grid2 article");
    grid2a.innerHTML = `
        <img src=${presentItem.previewImage} alt=${findDescription(
        presentItem.title
    )}/>
        <div class="myForm">
            <div class="textDisplayed" contenteditable="true">
                <p>${presentItem.title}</p>
            </div>
        </div>
    `;
    const formFeature = document.querySelector(".myForm");
    formFeature.addEventListener("input", () => {
        let val1 = document.querySelector(".textDisplayed p").innerHTML;
        const idToBeChanged = document.getElementById(PRESENTITEM);
        idToBeChanged.innerHTML = `
            <img src=${
                itemObjectArray[PRESENTITEM - 1].previewImage
            } alt=${val1} width="30px" height="30px"/>
            <span>${findDescription(val1)}</span>
        `;
        itemObjectArray[PRESENTITEM - 1].title = val1;
    });
};

functionRight(itemObjectArray[0]);

/**
 * event listener for click on left nav bar
 */
grid1.addEventListener(
    "click",
    (event) => {
        LASTITEM = PRESENTITEM;
        if (
            event.path[0].hasAttribute("id") ||
            event.path[1].hasAttribute("id")
        ) {
            if (event.path[0].hasAttribute("id")) {
                PRESENTITEM = event.path[0].getAttribute("id");
            } else {
                PRESENTITEM = event.path[1].getAttribute("id");
            }
            functionRight(itemObjectArray[PRESENTITEM - 1]);
            changeHighlight();
        }
    },
    false
);

/**
 * event listener for arrow keys on left nav bar
 */
document.addEventListener("keydown", (event) => {
    if (event.key == "ArrowDown" || event.key == "ArrowUp") {
        LASTITEM = PRESENTITEM;
        if (event.key == "ArrowDown") {
            PRESENTITEM = PRESENTITEM - 1 + 2;
            if (PRESENTITEM == itemObjectArray.length + 1) {
                PRESENTITEM = 1;
            }
        } else {
            if (PRESENTITEM == 1) {
                PRESENTITEM = itemObjectArray.length;
            } else {
                PRESENTITEM = PRESENTITEM - 1;
            }
        }
        functionRight(itemObjectArray[PRESENTITEM - 1]);
        changeHighlight();
    }
});

//helper function
const changeHighlight = function () {
    if (LASTITEM) {
        document.getElementById(LASTITEM).style.background = "white";
    }
    document.getElementById(PRESENTITEM).style.background =
        "rgba(181, 229, 231, 50%)";
};
