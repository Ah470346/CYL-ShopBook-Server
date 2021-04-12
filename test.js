// const b = [9,5,8];

// function sortedSum(a) {
//     // Write your code here
//     let s=[];
//     for(let i=0 ; i< a.length ; i++){
//         let subS =[];
//         for(let j = 0 ; j < i+1 ; j++ ){
//             subS.push(a[j]);
//         }
//         s.push(subS.sort((a,b)=> a-b));
//     }
//     let sum = 0;
//     // for(let i =0; i<s.length ; i++){
//     //     for(let j = 0 ; j < s[i].length ; j++){
//     //         sum += ((j+1) * s[i][j]);
//     //         console.log(j+1,s[i][j],((j+1 )* s[i][j]),sum);
//     //     }
//     // }
//     // return sum%1000000007;
//     for(let i =0; i<s.length ; i++){
//         for(let j = 0 ; j < s[i].length ; j++){
//             sum = sum + ((j+1) * s[i][j]);
//         }
//     }
//     return sum%1000000007;
// }



// function isPowerOfTwo(n) { 
//     return (Math.ceil((Math.log(n) / Math.log(2))))  
//     == (Math.floor(((Math.log(n) / Math.log(2))))); 
// }

// function countPairs(arr) {
//     // Write your code here
//     let dem =0;
//     let array = []
//     for(let i = 0 ; i< arr.length ; i++){
//         for(let j =i+1; j<arr.length ; j++){
//             let and = arr[i] & arr[j];
//             if(array.indexOf(and) !== -1){
//                 console.log(and);
//                 dem++;
//             } else if(isPowerOfTwo(and) === true && and !==0){
//                 array.push(and);
//                 dem++;
//             }
//         }
//     }
//     return dem;
// }
    
// console.log(countPairs([10,7,2,8,3]));


// function longestSubarray(arr) {
//     // Write your code here
//     let result = 0;
//     // let dem = 0;
//     // let i = 0;
//     // let ngung = false;
//     // let root = 0;
//     // while(i < arr.length){
//     //     console.log(arr[i]);
//     //     if(ngung == false){
//     //         root=arr[i];
//     //         ngung = true;
//     //     }
//     //     if(Math.abs(arr[i]-root) <= 1){
//     //         dem++;
//     //         console.log(dem);
//     //     } else {
//     //         root = arr[i];
//     //         if(dem > result){
//     //             result = dem;
//     //         }
//     //         dem = 2;
//     //     }
//     //     i++;
//     // }
//     for(let i =0; i < arr.length ; i++){
//         let dem1 = 0;
//         let dem2 = 0;
//         for(let j = i ; j < arr.length ; j++){
//             if(arr[i]-arr[j] == 1 || arr[i]-arr[j] == 0){
//                dem1++;
//             } else {
//                 break;
//             }
//         }
//         for(let j = i ; j < arr.length ; j++){
//             if(arr[i]-arr[j] == -1 || arr[i]-arr[j] == 0){
//                dem2++;
//             } else {
//                 break;
//             }
//         }
//         if(result < dem1){
//             result = dem1;
//         }
//         if(result < dem2){
//             result = dem2;
//         }
//     }
//     return result;
// }
// const s =`195593459
// 195593459
// 195593458
// 195593457
// 195593459
// 195593459
// 195593458
// 195593459
// 195593458
// 195593459
// 195593457
// 195593458
// 195593458
// 195593457
// 195593457
// 195593457
// 195593457
// 195593458
// 195593457
// 195593459
// 195593457
// 195593457
// 195593458
// 195593457
// 195593457
// 195593458
// 195593458
// 195593457
// 195593458
// 195593457
// 195593457
// 195593457
// 195593459
// 195593459
// 195593459
// 195593458
// 195593458
// 195593458
// 195593458
// 195593458
// 195593457
// 195593459
// 195593459
// 195593458
// 195593457
// 195593459
// 195593459
// 195593457
// 195593459
// 195593459
// 195593457
// 195593457
// 195593459
// 195593459
// 195593457
// 195593459
// 195593458
// 195593458
// 195593458
// 195593457
// 195593458
// 195593458
// 195593458
// 195593458
// 195593457
// 195593458
// 195593459
// 195593458
// 195593459
// 195593458
// 195593459
// 195593458
// 195593458
// 195593459
// 195593459
// 195593458
// 195593457
// 195593459
// 195593459
// 195593459
// 195593459
// 195593457
// 195593459
// 195593459
// 195593459
// 195593459
// 195593459
// 195593457
// 195593459
// 195593457
// 195593458
// 195593457
// 195593458
// 195593458
// 195593457
// 195593459
// 195593457
// 195593457
// 195593459
// 195593457
// 195593459
// 195593459
// 195593458
// 195593457
// 195593459
// 195593458
// 195593459
// 195593459
// 195593458
// 195593458
// 195593459
// 195593458
// 195593459
// 195593458
// 195593457
// 195593459
// 195593458
// 195593457
// 195593457
// 195593457
// 195593458
// 195593457
// 195593459
// 195593457
// 195593458
// 195593459
// 195593458
// 195593458
// 195593459
// 195593457
// 195593459
// 195593459
// 195593459
// 195593458
// 195593459
// 195593458
// 195593458
// 195593459
// 195593458
// 195593459
// 195593458
// 195593457
// 195593457
// 195593457
// 195593459
// 195593458
// 195593459
// 195593458
// 195593457`;
// const b = s.split('\n');
// console.log(b.length);
// console.log(longestSubarray(b));




// function sortedSum(a) {
//     // Write your code here
//     let s=[];
//     for(let i=1 ; i< a.length ; i++){
//         let subS =[];
//         for(let j = 0 ; j < i+1 ; j++ ){
//             subS.push(a[j]);
//         }
//         s.push(subS.sort((a,b)=> a-b));
//     }
//     let sum = 0;
//     for(let i =0; i<s.length ; i++){
//         for(let j = 0 ; j < s[i].length ; j++){
//             sum = sum + ((j+1) * s[i][j]);
//             console.log(j+1,s[i][j],((j+1 )* s[i][j]),sum);
//         }
//     }
//     return sum%1000000007;
// }


// console.log(0x000F & 0x2222);



// function getMaxArea(w, h, isVertical, distance) {
//     // Write your code here
//     let area = w*h; 
//     let arr =[];
//     let a =0 ,b =0 ,c =0 , d =0;
//     if(isVertical[0] == 0 && distance[0] > h){
//         distance[0] = h;
//     } else if(isVertical[0] == 1 && distance[0] > w){
//         distance[0] = w;
//     }
//     if(isVertical[1] == 0 && distance[1] > h){
//         distance[1] = h;
//     } else if(isVertical[1] == 1 && distance[1] > w){
//         distance[1] = w;
//     }
//     if(isVertical[0] == 0 && isVertical[1]==0){
//         if((distance[0]*w) > (area - distance[0]*w)){
//             arr.push(distance[0]*w);
//         } else {
//             arr.push(area - distance[0]*w);
//         }
//         a = Math.abs(distance[0] - distance[1]);
//         if( distance[0] <= distance[1]){
//             b =  distance[0];
//         } else {
//             b =  distance[1];
//         }
//         c = h - (a+b);
//         console.log(a,b,c,distance[0],distance[1]);
//         if(a*w > b*w && a*w > c*w){
//             arr.push(a*w)
//         } else if(b*w > a*w && b*w > c*w){
//             arr.push(b*w);
//         } else {
//             arr.push(c*w);
//         }
//     } else if(isVertical[0] == 1 && isVertical[1]== 1){
//          if((distance[0]*h) > (area - distance[0]*h)){
//             arr.push(distance[0]*h);
//         } else {
//             arr.push(area - distance[0]*h);
//         }
//         a = Math.abs(distance[0] - distance[1]);
//         if( distance[0] <= distance[1]){
//             b =  distance[0];
//         } else {
//             b =  distance[1];
//         }
//         c = w - (a+b);
//         console.log(a,b,c,distance[0],distance[1]);
//         if(a*h > b*h && a*h > c*h){
//             arr.push(a*h)
//         } else if(b*h > a*h && b*h > c*h){
//             arr.push(b*h);
//         } else {
//             arr.push(c*h);
//         }
//     } else {
//         if(isVertical[0] == 0 && isVertical[1] ==1){
//             if((distance[0]*w) > (area - distance[0]*w)){
//                 arr.push(distance[0]*w);
//             } else {
//                 arr.push(area - distance[0]*w);
//             }
//             a = (w-distance[1])*(h-distance[0]);
//             b = (distance[1])*(h-distance[0]);
//             c = (distance[0]) * (w-distance[1]);
//             d = (distance[0]) * (distance[1]);
//             let arrr = [];
//             arrr.push(a);
//             arrr.push(b);
//             arrr.push(c);
//             arrr.push(d);
//             arrr.sort((a,b) => b-a);
//             arr.push(arrr[0]);
//         } else {
//             if((distance[0]*h) > (area - distance[0]*h)){
//                 arr.push(distance[0]*h);
//             } else {
//                 arr.push(area - distance[0]*h);
//             }
//             a = (h-distance[1])*(w-distance[0]);
//             b = (distance[1])*(w-distance[0]);
//             c = (distance[0]) * (h-distance[1]);
//             d = (distance[0]) * (distance[1]);
//             let arrr = [];
//             arrr.push(a);
//             arrr.push(b);
//             arrr.push(c);
//             arrr.push(d);
//             arrr.sort((a,b) => b-a);
//             arr.push(arrr[0]);
//         }
//     }
//     return arr;

// }

// console.log(getMaxArea(7,4,[1,1],[3,3]));



//     function hello(w,h,isVertical,distance) {
//         let result1 = 0;
//         let hMax = 0;
//         let wMax = 0;
//         if (isVertical[0] == 0){
//             wMax = w;
//             if (distance[0] > h/2){
//                 hMax = distance[0];
//             }else {
//                 hMax = h - distance[0];
//             }
//         }else {
//             hMax = h;
//             if (distance[0] > w/2){
//                 wMax = distance[0];
//             }else {
//                 wMax = w - distance[0];
//             }
//         }

//         result1 = hMax * wMax;
//         console.log(result1);

//         let result2 = 0;
//         let hMax2 = 0;
//         let wMax2 = 0;
//         if (isVertical[1] == 0){
//             wMax2 = wMax;
//             if (distance[1] > h/2){
//                 hMax2 = distance[0];
//             }else {
//                 hMax2 = h - (h - distance[1]) - distance[0];
//             }
//         }else {
//             hMax2 = hMax;
//             if (w - (w - distance[1]) - distance[0] > wMax/2){
//                 wMax2 = w - (w - distance[1]) - distance[0];
//             }else {
//                 wMax2 = w - distance[1];
//             }
//         }
//         result2 = hMax2 * wMax2;
//         console.log(result2);
//     }

// hello(7,4,[1,1],[3,3]);

// 7,4
// isVertical = [0,0];
// distance =[3,3];


// let a = 'sdkfkdf';

// function setPassword(s){
//     let sum = 0;
//     for(let i = 0 ; i < s.length ; i++){
//         sum += s[i].charCodeAt(0)*Math.pow(131,s.length-(i+1)); 
//     }
//     return sum%1000000007;
// }


// function setPassword2(s){
//     let sum = 0;
//     for(let i = 0 ; i < s.length ; i++){
//         sum += s[i].charCodeAt(0)*Math.pow(131,s.length-(i)); 
//     }
//     return (sum%1000000007)*s.charCodeAt(s.length-1)+127;
// }

// function authEvents(events) {
//     // Write your code here
//     let arr = [];
//     let s1 = 0;
//     let s2 = 0;
//     for(let i = 0 ; i < events.length ; i++){
        
//         if(events[i][0] == 'setPassword'){
//             s1 = setPassword(events[i][1]);
//             s2 = setPassword2(events[i][1]);
//         } else if(events[i][0] == 'authorize'){
//         	console.log(s1,s2);
//         	console.log(events[i][1] >= s1);
//         	console.log(events[i][1] <= s2);
//             if(events[i][1] >= s1 && events[i][1] <= s2 ){
//                 arr.push(1);
//             } else {
//                 arr.push(0);
//             }
//         }
        
//     }
//     return arr;

// }

// let aa= [['setPassword','000A'],['authorize',108738450],['authorize',108738449],['authorize',244736787]]

// console.log(authEvents(aa));


// const https = require('https');

// const makeHTTPRequest = (url) => {
//     return new Promise((resolve, reject) => {
//         https
//           .get(url, res => {
//             let aaa ;
//             res.on('data', function (data) {
//                 aaa = data;
//             })
//             .on('end', function () {
//                 var a = JSON.parse(aaa.toString());
//                 resolve(a.data);
//             })
//             .on('error', err => {
//                 console.error(`Error in response: ${err}`)
//             })
//         });
//     });
// }

// async function getCountryName(code) {
//     // write your code here
//     // API endpoint: https://jsonmock.hackerrank.com/api/countries?page=<PAGE_NUMBER>
//     // let a
//     let url = 'https://jsonmock.hackerrank.com/api/countries?page=';
//     let i = 1;
//     while(i){
//        const a = await makeHTTPRequest(url+i);
//        for(let j = 0 ; j<a.length ; j++) {
//             if(a[j].alpha2Code === code){
//                 return a[j].name;
//             }
//        }
//        i++;
//     }
// }
// async function hello(){
//     const cc = await getCountryName('AF');

//     console.log(cc);

// }

// hello();

// class NotesStore {
//     //add your code here
//     constructor(){
//         this.arr = [];
//         this.error = [];
//     }
//     addNote(state , name){
//         if(name === undefined && name === ''){
//             this.error.push('Error: Name cannot be empty.');
//         } else{
//             if(state !== 'completed' && state !=='active'){
//                 this.error.push('Error: Invalid state ' + state);
//             } else {
//                 this.arr.push({state,name});
//             }
//         }
//     }
//     getNotes(state){
//         let arrr = [];
//         if(state !== 'completed' && state !=='active'){
//             this.error.push('Error: Invalid state ' + state);
//             return this.error;
//         } else {
//             for(let i = 0 ; i < this.arr.length ; i++){
//                 if(this.arr[i].state === state){
//                     arrr.push(this.arr[i].name);
//                 }
//             }
//         }
//         return arrr;
//     }
// }


// const note = new NotesStore();
// note.addNote('active','DrinkTea');
// note.addNote('active','DrinkCoffee');
// note.addNote('completed','DrinkTea');

// console.log(note.getNotes('active'));

