// Runs on every page. It uses the components form the components.js
// Now we ask what page are we on?
const page = document.body.dataset.page;
// Now that we have our what page ... now we can add our metadata
const pageMeta = {
    home: {
        title: "Home",
        description: "This is a home description"
    },
    about: {
        title: "About",
        description: "This is a about description"
    },
    contact: {
        title: "Contact",
        description: "This is a contact description"
    }
};
// the CTA content
const ctaContent = {
    home: {
        heading: "dddskdkd",
        text: "svmkkdvdvkm",
        buttonText: "dskkvdklsvdk",
        link: "index.html"
    },
    about: {
        heading: "dddskdrreggkd",
        text: "svmkkdvdvwwrkm",
        buttonText: "drwrgskkvdklsvdk",
        link: "about.html"
    },
    contact: {
        heading: "dddskgggdkd",
        text: "svmkkdvghntjthgedvkm",
        buttonText: "dskkbdgguk6uryvdklsvdk",
        link: "contact.html"
    }
}
const favourites = [
    {title: "Espresso", text: "blah"},
    {title: "Cold", text: "blah blah"},
    {title: "Croisant", text: "blah blah blah"}
];

//
// Now build the damn thing
//
// metadata goes in the <head>
const meta = pageMeta[page];
renderHead(createMetadata(meta.title, meta.description, meta.robots));
// now fill in our pages
render("#site-header", createHeader(page));
render("#site-footer", createFooter(siteName));
render("#cta", createCallToAction(ctaContent[page]));
// turn every object in the array into a card
const cardHtml = favourites
.map((item) => createCard(item.title, item.text))
.join("");

render("#cards", cardsHtml);