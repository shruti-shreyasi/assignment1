/**
 * previewImage: image link
 * title: title of the image
 */
class Item {
    constructor(previewImage, title) {
        this.previewImage = previewImage;
        this.title = title;
    }
}

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

export default itemObjectArray;
