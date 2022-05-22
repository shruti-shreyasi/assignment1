class Item {
    constructor(previewImage, title) {
        this.previewImage = previewImage;
        this.title = title;
    }
    findDescription() {
        let title = this.title;
        let desc = "";
        const limitToround = 25;
        if (title.length > limitToround) {
            const myArray = title.split(".");
            let dum = myArray[1];
            let numEnd = dum.length;
            numEnd = limitToround - 15 - numEnd;
            numEnd = title.length - numEnd;
            desc = title.substring(0, 14) + "...";
            desc = desc + myArray[0].substring(numEnd);
            desc = desc + "." + dum;
        } else {
            desc = title;
        }
        return desc;
    }
}

const findDescription = function (title) {
    let desc = "";
    const limitToround = 25;
    if (title.length > limitToround) {
        const myArray = title.split(".");
        let dum = myArray[1];
        let numEnd = dum.length;
        numEnd = limitToround - 15 - numEnd;
        numEnd = title.length - numEnd;
        desc = title.substring(0, 14) + "...";
        desc = desc + myArray[0].substring(numEnd);
        desc = desc + "." + dum;
    } else {
        desc = title;
    }
    return desc;
};

var PRESENTITEM = 1;
var LASTITEM = 0;

const item1 = new Item(
    "https://images.unsplash.com/photo-1561948955-570b270e7c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    "cat.jpeg"
);

const item2 = new Item(
    "https://images.unsplash.com/photo-1606787620819-8bdf0c44c293?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    "a man and a woman trying to cook a meal together in a modern kitchen.jpg"
);

const item3 = new Item(
    "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    "bali-kelingking-beach-plastic-removal-drive.key"
);

const item4 = new Item(
    "https://images.unsplash.com/photo-1623206837956-07dab21608f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    "NextByk Investor Pitch 2022.ppt"
);

const item5 = new Item(
    "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    "interns-performance-report-may-2022.key"
);

const itemObjectArray = [item1, item2, item3, item4, item5];

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
        <span>${item.findDescription()}</span>
    `;
    grid1.append(nav);
}

const functionForRight = function (presentItem) {
    const grid2 = document.querySelector(".grid2");
    let grid2Article = document.createElement("article");
    grid2Article.innerHTML = `
        <img src=${
            presentItem.previewImage
        } alt=${presentItem.findDescription()} width="200px"/>
        <div class="myForm">
            <div class="textDisplayed" contenteditable="true">
                <p>${presentItem.title}</p>
            </div>
        </div>
    `;
    grid2.append(grid2Article);
    const formFeature = document.querySelector(".myForm");
    formFeature.addEventListener("input", () => {
        let val1 = document.querySelector(".textDisplayed p").innerHTML;
        console.log(val1);
        const idToBeChanged = document.getElementById(PRESENTITEM);
        console.log(idToBeChanged);
        idToBeChanged.innerHTML = `
            <img src=${itemObjectArray[PRESENTITEM-1].previewImage} alt=${val1} width="30px" height="30px"/>
            <span>${findDescription(val1)}</span>
        `;
        itemObjectArray[PRESENTITEM - 1].title = val1;
    });
};

functionForRight(item1);

const functionRight = function (presentItem) {
    let grid2a = document.querySelector(".grid2 article");
    grid2a.innerHTML = `
        <img src=${presentItem.previewImage} alt=${presentItem.findDescription()} width="200px"/>
        <div class="myForm">
            <div class="textDisplayed" contenteditable="true">
                <p>${presentItem.title}</p>
            </div>
        </div>
    `;
    const formFeature = document.querySelector(".myForm");
    formFeature.addEventListener("input", () => {
        let val1 = document.querySelector(".textDisplayed p").innerHTML;
        console.log(val1);
        const idToBeChanged = document.getElementById(PRESENTITEM);
        console.log(idToBeChanged);
        idToBeChanged.innerHTML = `
            <img src=${itemObjectArray[PRESENTITEM-1].previewImage} alt=${val1} width="30px" height="30px"/>
            <span>${findDescription(val1)}</span>
        `;
        itemObjectArray[PRESENTITEM - 1].title = val1;
    });
};

grid1.addEventListener("click", (event) => {
    console.log(event);
    LASTITEM = PRESENTITEM;
    if (event.path[0].hasAttribute("id")) {
        PRESENTITEM = event.path[0].getAttribute("id");
        console.log(PRESENTITEM);
        functionRight(itemObjectArray[PRESENTITEM - 1]);
        changeHighlight();
    }
    if (event.path[1].hasAttribute("id")) {
        PRESENTITEM = event.path[1].getAttribute("id");
        console.log(PRESENTITEM);
        functionRight(itemObjectArray[PRESENTITEM - 1]);
        changeHighlight();
    }
}, false);

document.addEventListener("keydown", (event) => {
    if (event.key == "ArrowDown") {
        LASTITEM = PRESENTITEM;
        PRESENTITEM = PRESENTITEM - 1 + 2;
        if (PRESENTITEM == (itemObjectArray.length + 1)) {
            PRESENTITEM = 1;
        }
        console.log(PRESENTITEM);
        functionRight(itemObjectArray[PRESENTITEM - 1]);
    }
    if (event.key == "ArrowUp") {
        LASTITEM = PRESENTITEM;
        if (PRESENTITEM == 1) {
            PRESENTITEM = itemObjectArray.length;
        } else {
            PRESENTITEM = PRESENTITEM - 1;
        }
        console.log(PRESENTITEM);
        functionRight(itemObjectArray[PRESENTITEM - 1]);
    }
    changeHighlight();
});

const changeHighlight = function () {
    if (LASTITEM) {
        document.getElementById(LASTITEM).style.background = "white";
    }
    document.getElementById(PRESENTITEM).style.background = "rgba(181, 229, 231, 50%)";
}

for (const item of itemObjectArray) {
    console.log(item.title.length);
    console.log((findDescription(item.title)).length);
}
