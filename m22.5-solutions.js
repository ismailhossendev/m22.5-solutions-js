// ১. তোমাকে যদি বলি একটা স্ট্রিং টাইপের ভেরিয়েবল লিখো। একটা বুলিয়ান টাইপের ভেরিয়েবল লিখো বা একটা নাম্বার টাইপের ভেরিয়েবল লিখো। সেটা কি তুমি লিখতে পারবে? যদি পারো তাহলে ভিজুয়াল ষ্টুডিও কোড খুলে লিখে ফেলো।

/*
    // string type 
    let stringType = 'amar sonar bangla';
    console.log(typeof (stringType));

    // boolean type 
    let booleanType = true;
    console.log(typeof (booleanType));

    // number type 
    let numberType = 2022;
    console.log(typeof(numberType)); 
*/


// ২. তুমি কি জানো কখন let দিয়ে ভেরিয়েবল লিখতে হয়ে আর কখন const দিয়ে ভেরিয়েবল লিখতে হয়। যদি লিখতে পারো তাহলে লিখে ফেলো। এবং যেই যেটা দিয়ে ভেরিয়েবল লিখলে আবার সেটা চেইঞ্জ করা যায়। তাহলে যেটা দিয়ে ভেরিয়েবল ডিক্লেয়ার করলে চেইঞ্জ করা যায়। সেটার মান চেইঞ্জ করে নাও । অর্থাৎ জাস্ট দুইটা ভেরিয়েবল ডিক্লেয়ার করবে let এবং const দিয়ে। তারপর যেকোন একটার ভ্যালু চেইঞ্জ করবে। এই let এবং const মাথা গরম করে দিলে টেনশন নিয়ে না। সামনের মাইলস্টোন এর পরের মাইলস্টোন এ এইটা নিয়ে আরো ডিসকাস করা হবে।

/*
    let fristVar = 'ismail hossen';
    fristVar = 'Ismail Hossen Dev'
    const secendVar = 'Hossen Ismail'
    console.log(fristVar , secendVar)
*/
// ৩. দুইটা ভেরিয়েবল এর মধ্যে যোগ, বিয়োগ, গুণ, ভাগ কিভাবে করতে হয় সেটা কি জানো। অর্থাৎ তুমি কি +, -, *, /, %এইগুলার ব্যবহার জানো। তাহলে নাম্বার টাইপের দুইটা ভেরিয়েবল লিখো তারপর তাদের যোগ করে সেটার মান আরেকটা ভেরিয়েবল এ রাখো। একইভাবে ওই দুইটা ভেরিয়েবল এর মধ্যে বিয়োগ, গুন, ভাগ এবং ভাগশেষ বের করো।

/*
    let num1 = 500;
    let num2 = 800;
    let summation = num1 + num2;
    let substraction = num1 - num2;
    let maltiplication = num1 * num2;
    let divition = num1 / num2;
    let modulas = num1 % num2;

    console.log(summation, substraction, maltiplication, divition, modulas); 
*/


// ৪. তুমি কি দুইটা ভেরিয়েবল এরমধ্যে তুলনা করতে পারো। কম্পারিজন করতে পারো। যে দুইটা ভেরিয়েবল এর মধ্যে প্রথমটা সেকেন্ডটা এর চাইতে ছোট, বড়, অসমান, সমান , ছোট বা সমান, বড় বা সমান। এইগুলা চেক করতে পারো। অর্থাৎ <, >, ==, !=, <=, >= চিহ্নগুলা ব্যবহার করতে পারো। তাহলে দুইটা সংখ্যা টাইপের ভেরিয়েবল ডিক্লেয়ার করে তাদেরকে এই ছয়ভাবে তুলনা করে কোড লিখে ফেলো।
/*
    const a = 10;
    const b = 10;
    if (a < b) {
        console.log('ami jani na ki hoise')
    }
    else if (a < b) {
        console.log('ami jani ki hoise')    
    }
    else if (a != b) {
        console.log('ami jani ata soman nah')    
    }
    else if (a == b) {
        console.log('ami jani a - b soman soman')    
    }
    else if (a <= b) {
        console.log('ami jani b a er theke soto ba soman ')
    }
    else if (a >= b) {
        console.log('ami jani a b er theke boro othoba soman ')
    }
*/
// ৫. তোমার যদি দুইটা শর্ত পূরণ করতে বলে। এবং দুইটা শর্তের মধ্যে দুইটাই পূরণ করতে হবে। তাহলে তুমি কি সেটা চেক করতে পারবে? একইভাবে যদি বলে তুমি দুইটা শর্তের যেকোন একটা পূরণ করতে পারবে। অর্থাৎ তুমি && এবং || এর ব্যবহার করতে পারো কিনা। যদি পারো তাহলে নিজে নিজে এই রকমের কোড লিখে ফেলো।

/* 
const a = 10;
const b = 10;
const c = 12;
if (a < b || a === b && b < c) {
    console.log('ami jani na ki hoise')
}

*/
// ৬. তুমি কি একটা শর্ত পালন করলে একটা কিছু করবে। শর্ত পূরণ না করলে অন্য কিছু একটা করবে এমন কোড লিখতে পারবে। অর্থাৎ তুমি কি if-else এর কোড লিখতে পারবে। পারলে একটা কোড লিখে ফেলো
/*
const a = 10;
const b = 10;
if (a < b) {
    console.log('a er theke b boro ')
}
else {
    console.log('jani nah ke boro ')
} 
*/

// ৭. তোমাকে যদি বলে একটা while লুপ দিয়ে ৭ থেকে ১৯ পর্যন্ত যতগুলা বিজোড় সংখ্যা আছে সেগুলা দেখাতে। তুমি কি সেটা দেখাতে পারবে? পারলে সেই কোড লিখে ফেলো।

/* 
    let i = 7;
    while (i <= 19) {
        console.log(i, 'odd');
        i += 2;
    } 
*/
// ৮. তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে।
/*
    let arr = [10, 12, 10, 15, 14, 145, 44, 465, 58]
    arr[3] = 99;
    arr.pop();
    arr.push('ami eka');
    arr.push('ami eka aro ekjon');
    console.log(arr.length);
    console.log(arr);
*/

// ৯. তুমি কি একটা ফর লুপ দিয়ে কোন একটা array এর সবগুলা উপাদানকে দেখাতে পারবে। সেটা রেগুলার for লুপ হোক বা for of হোক। হলে সেই স্টাইলে একটা কোড লিখে ফেলো।
/*
    let arr = [10, 12, 10, 15, 14, 145, 44, 465, 58,85,95,100]
    for (i = 0; i < arr.length; i++){
        let sum = arr[i];
        console.log(sum)
    } 
*/

// ১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো
/*
    let arr = [10, 12, 10, 15, 14, 145, 44, 465, 58,58,85,95,100]
    for (let i = 0; i < arr.length; i++){
        let index = arr[i];
        if (index > 80) {
            console.log(index);
        }
    } 
*/

// ১১. তিনটা সংখ্যার গুনফল বের করে ফাইনাল রেজাল্ট আউটপুট হিসেবে রিটার্ন করতে হবে। তুমি কি সেই কোড লিখতে পারবে। যদি পারো তাহলে সেই কোড লিখে ফেলো।
/*
    function threeMaltiplication(num1, num2, num3) {
        let sum = num1 * num2 * num3;
        return sum;
    }
    const output = threeMaltiplication(10, 12, 16);
    console.log(output); 
*/

// ১২. একটা অবজেক্ট ডিক্লেয়ার করবে। সেটাতে তিনটা প্রপার্টি থাকবে। এবং কোন একটা প্রোপার্টি এর মান চেইঞ্জ করবা। 
/*
    let shopingCart = {
        hosting: 500,
        domain: 999,
        vps: 1200
    }
    shopingCart.vps = 100;
    console.log(shopingCart); 
*/
