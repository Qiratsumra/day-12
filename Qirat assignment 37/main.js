function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love Typescript"; }
    console.log("Making a ".concat(size, " t-shirt with a message \"").concat(message, "\" printed on it"));
}
make_shirt();
make_shirt("Medium");
// different Messages
make_shirt("Small", "I love black t-shirt");
make_shirt("XL", "I love white t-shirt");
