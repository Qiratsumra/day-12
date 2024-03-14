function make_shirt(size:string=`large`,
message:string=`I love Typescript`) {
    console.log(`Making a ${size} t-shirt with a message "${message}" printed on it`);
}
make_shirt();
make_shirt("Medium");

// different Messages
make_shirt("Small", "I love black t-shirt");
make_shirt("XL","I love white t-shirt");