//https://practiceapi.devmountain.com/api

//1. Check if the POST request accept params, queries, and/or a body. 
//Which one(s) and what information is it expecting to be sent?

//-Parameters
//-Body
//-------------------------------------------------------------------------------------

//2. What data type does the GET request return?

//application/json 
//returns an array full of posts
//-----------------------------------------------------------------------------------------

//3. What would the URL look like for deleting the post with the id 555? (This post does not exist anymore, but the syntax is the same for existing posts,)

//https://practiceapi.devmountain.com/api/posts?id=555

//---------------------------------------------------------------------------------------------

//4. List the possible response codes from the GET request at ‘/posts/filter’
//https://practiceapi.devmountain.com/api/posts?filter

// [
//     {
//         "id": 1267,
//         "text": "Go Cougs!",
//         "date": "13 Oct 2022"
//     },
//     {
//         "id": 1266,
//         "text": "Blue",
//         "date": "10 Oct 2022"
//     },
//     {
//         "id": 1265,
//         "text": "Lewis Hawthorn",
//         "date": "05 Oct 2022"
//     },
//     {
//         "id": 1264,
//         "text": "Blue",
//         "date": "05 Oct 2022"
//     },
//     {
//         "id": 1263,
//         "text": "Blue",
//         "date": "05 Oct 2022"
//     },
//     {
//         "id": 1260,
//         "text": "Sebastian Ceolin",
//         "date": "05 Oct 2022"
//     },
//     {
//         "id": 1259,
//         "text": "Holly Ceolin",
//         "date": "05 Oct 2022"
//     },
//     {
//         "id": 1255,
//         "text": "I come back to you now, at the turn of the tide.",
//         "date": "05 Oct 2022"
//     },
//     {
//         "id": 1253,
//         "text": "Kvng Eko",
//         "date": "05 Oct 2022"
//     },
//     {
//         "id": 1249,
//         "text": "Reddish Egret Red",
//         "date": "05 Oct 2022"
//     },
//     {
//         "id": 1248,
//         "text": "Holly Ceolin",
//         "date": "05 Oct 2022"
//     },
//     {
//         "id": 1246,
//         "text": "Seafoam Green",
//         "date": "05 Oct 2022"
//     },
//     {
//         "id": 1245,
//         "text": "purple",
//         "date": "05 Oct 2022"
//     },
//     {
//         "id": 1243,
//         "text": "indigo",
//         "date": "05 Oct 2022"
//     },
//     {
//         "id": 1240,
//         "text": "black",
//         "date": "05 Oct 2022"
//     },
//     {
//         "id": 1239,
//         "text": "Maroon",
//         "date": "05 Oct 2022"
//     },
//     {
//         "id": 1236,
//         "text": "ooga booga",
//         "date": "05 Oct 2022"
//     },
//     {
//         "id": 1235,
//         "text": "amadoit 4ever and ever",
//         "date": "05 Oct 2022"
//     },
//     {
//         "id": 1234,
//         "text": "UWU, RawrXD",
//         "date": "05 Oct 2022"
//     },
//     {
//         "id": 1233,
//         "text": "Green, Best color",
//         "date": "05 Oct 2022"
//     },
//     {
//         "id": 1231,
//         "text": "My favorite color is blue or green",
//         "date": "05 Oct 2022"
//     },
//     {
//         "id": 1230,
//         "text": "blue",
//         "date": "05 Oct 2022"
//     },
//     {
//         "id": 1229,
//         "text": "purple",
//         "date": "05 Oct 2022"
//     },
//     {
//         "id": 1228,
//         "text": "The text used here will appear in the new post object",
//         "date": "05 Oct 2022"
//     },
//     {
//         "id": 1227,
//         "text": "Karston Burdge",
//         "date": "05 Oct 2022"
//     },
//     {
//         "id": 1226,
//         "text": "The text used here will appear in the new post object",
//         "date": "05 Oct 2022"
//     },
//     {
//         "id": 1225,
//         "text": "blue",
//         "date": "05 Oct 2022"
//     },
//     {
//         "id": 1224,
//         "text": "The text used here will appear in the new post object",
//         "date": "05 Oct 2022"
//     },
//     {
//         "id": 1223,
//         "text": "blue",
//         "date": "05 Oct 2022"
//     },
//     {
//         "id": 1222,
//         "text": "The text used here will appear in the new post object",
//         "date": "05 Oct 2022"
//     },
//     {
//         "id": 1221,
//         "text": "Blue",
//         "date": "04 Oct 2022"
//     },
//     {
//         "id": 1215,
//         "text": "390 hours of lectures and I retained something! Woohoo!",
//         "date": "15 Sep 2022"
//     },
//     {
//         "id": 1214,
//         "text": "ready",
//         "date": "10 Sep 2022"
//     },
//     {
//         "id": 1213,
//         "text": "Purple",
//         "date": "08 Sep 2022"
//     },
//     {
//         "id": 1212,
//         "text": "orange",
//         "date": "08 Sep 2022"
//     },
//     {
//         "id": 1211,
//         "text": "Lost",
//         "date": "08 Sep 2022"
//     },
//     {
//         "id": 1209,
//         "text": "Bryton Hadley",
//         "date": "08 Sep 2022"
//     },
//     {
//         "id": 1207,
//         "text": "The text used here will appear in the new post object",
//         "date": "08 Sep 2022"
//     },
//     {
//         "id": 1206,
//         "text": "Blue",
//         "date": "08 Sep 2022"
//     },
//     {
//         "id": 1205,
//         "text": "Danny Ramirez",
//         "date": "08 Sep 2022"
//     },
//     {
//         "id": 1204,
//         "text": "Ty Stucki",
//         "date": "08 Sep 2022"
//     },
//     {
//         "id": 1203,
//         "text": "green",
//         "date": "08 Sep 2022"
//     },
//     {
//         "id": 1202,
//         "text": "purple",
//         "date": "08 Sep 2022"
//     },
//     {
//         "id": 1201,
//         "text": "Josh",
//         "date": "08 Sep 2022"
//     },
//     {
//         "id": 1200,
//         "text": "Green",
//         "date": "08 Sep 2022"
//     },
//     {
//         "id": 1199,
//         "text": "Favorite color is blue",
//         "date": "08 Sep 2022"
//     },
//     {
//         "id": 1198,
//         "text": "The text used here will appear in the new post object",
//         "date": "08 Sep 2022"
//     },
//     {
//         "id": 1197,
//         "text": "Green",
//         "date": "08 Sep 2022"
//     },
//     {
//         "id": 1196,
//         "text": "Juan",
//         "date": "08 Sep 2022"
//     },
//     {
//         "id": 1195,
//         "text": "orange",
//         "date": "08 Sep 2022"
//     },
//     {
//         "id": 1194,
//         "text": "Sky Blue",
//         "date": "08 Sep 2022"
//     },
//     {
//         "id": 1192,
//         "text": "orange",
//         "date": "08 Sep 2022"
//     },
//     {
//         "id": 1191,
//         "text": "Juan",
//         "date": "08 Sep 2022"
//     },
//     {
//         "id": 1190,
//         "text": "Juan",
//         "date": "08 Sep 2022"
//     },
//     {
//         "id": 1189,
//         "text": "my favorite color is purple!",
//         "date": "08 Sep 2022"
//     },
//     {
//         "id": 1188,
//         "text": "greennnnn",
//         "date": "08 Sep 2022"
//     },
//     {
//         "id": 1187,
//         "text": "Coulsen",
//         "date": "08 Sep 2022"
//     },
//     {
//         "id": 1186,
//         "text": "The text used here will appear in the new post object",
//         "date": "08 Sep 2022"
//     },
//     {
//         "id": 1185,
//         "text": "Josh",
//         "date": "08 Sep 2022"
//     },
//     {
//         "id": 1184,
//         "text": "Kelsey Taylor",
//         "date": "08 Sep 2022"
//     },
//     {
//         "id": 1183,
//         "text": "My fav color is teal-green.",
//         "date": "08 Sep 2022"
//     },
//     {
//         "id": 1182,
//         "text": "Bruh Moment",
//         "date": "08 Sep 2022"
//     },
//     {
//         "id": 1181,
//         "text": "Coulsen",
//         "date": "08 Sep 2022"
//     },
//     {
//         "id": 1180,
//         "text": "Teal and Sky BLue",
//         "date": "08 Sep 2022"
//     },
//     {
//         "id": 1179,
//         "text": "Wandering meadow",
//         "date": "08 Sep 2022"
//     },
//     {
//         "id": 1178,
//         "text": "Wandering meadow",
//         "date": "08 Sep 2022"
//     },
//     {
//         "id": 1177,
//         "text": "Bruh Moment",
//         "date": "08 Sep 2022"
//     },
//     {
//         "id": 1176,
//         "text": "Wandering meadow",
//         "date": "08 Sep 2022"
//     },
//     {
//         "id": 1175,
//         "text": "Coulsen",
//         "date": "08 Sep 2022"
//     },
//     {
//         "id": 1174,
//         "text": "blue",
//         "date": "08 Sep 2022"
//     },
//     {
//         "id": 1173,
//         "text": "cherry red",
//         "date": "08 Sep 2022"
//     },
//     {
//         "id": 1172,
//         "text": "chase Hilton",
//         "date": "08 Sep 2022"
//     },
//     {
//         "id": 1171,
//         "text": "chase Hilton",
//         "date": "08 Sep 2022"
//     },
//     {
//         "id": 1170,
//         "text": "Listen to these words",
//         "date": "08 Sep 2022"
//     },
//     {
//         "id": 1169,
//         "text": "my favorite color is red",
//         "date": "08 Sep 2022"
//     },
//     {
//         "id": 1167,
//         "text": "blue",
//         "date": "08 Sep 2022"
//     },
//     {
//         "id": 1166,
//         "text": "This makes no sense",
//         "date": "08 Sep 2022"
//     },
//     {
//         "id": 1165,
//         "text": "green",
//         "date": "08 Sep 2022"
//     },
//     {
//         "id": 1164,
//         "text": "Danny Ramirez",
//         "date": "08 Sep 2022"
//     },
//     {
//         "id": 1163,
//         "text": "Ty Stucki",
//         "date": "08 Sep 2022"
//     },
//     {
//         "id": 1162,
//         "text": "Amber Harris",
//         "date": "08 Sep 2022"
//     },
//     {
//         "id": 1161,
//         "text": "Ty Stucki",
//         "date": "08 Sep 2022"
//     },
//     {
//         "id": 1160,
//         "text": "Toky Chanthavong",
//         "date": "08 Sep 2022"
//     },
//     {
//         "id": 1159,
//         "text": "Green",
//         "date": "08 Sep 2022"
//     },
//     {
//         "id": 1158,
//         "text": "Cody *DEMON EMOJI*",
//         "date": "08 Sep 2022"
//     },
//     {
//         "id": 1157,
//         "text": "Ty Stucki",
//         "date": "08 Sep 2022"
//     },
//     {
//         "id": 1155,
//         "text": "Toky Chanthavong",
//         "date": "08 Sep 2022"
//     },
//     {
//         "id": 1154,
//         "text": "The text used here will appear in the new post object",
//         "date": "08 Sep 2022"
//     },
//     {
//         "id": 1153,
//         "text": "Danny Ramirez",
//         "date": "08 Sep 2022"
//     },
//     {
//         "id": 1152,
//         "text": "My favorite color is white",
//         "date": "08 Sep 2022"
//     },
//     {
//         "id": 1151,
//         "text": "Lost",
//         "date": "08 Sep 2022"
//     },
//     {
//         "id": 1150,
//         "text": "Blue",
//         "date": "08 Sep 2022"
//     },
//     {
//         "id": 1149,
//         "text": "My favorite color is green",
//         "date": "08 Sep 2022"
//     },
//     {
//         "id": 1147,
//         "text": "Red",
//         "date": "08 Sep 2022"
//     },
//     {
//         "id": 1146,
//         "text": "My favorite color is blue.",
//         "date": "08 Sep 2022"
//     },
//     {
//         "id": 1145,
//         "text": "this is so confusing",
//         "date": "08 Sep 2022"
//     },
//     {
//         "id": 1140,
//         "text": "Bye guys\n\nhaha this is cool",
//         "date": "08 Sep 2022"
//     },
//     {
//         "id": 1139,
//         "text": "HI MOM",
//         "date": "08 Sep 2022"
//     },
//     {
//         "id": 1138,
//         "text": "Blue",
//         "date": "08 Sep 2022"
//     },
//     {
//         "id": 1137,
//         "text": "Hey guys",
//         "date": "08 Sep 2022"
//     }
// ]

//-----------------------------------------------------------------------------------------------------------

//5 Create a post whose text is your name, record the URL and body here:

//https://practiceapi.devmountain.com/api/posts
// {
//     "text": "Haley Akin"
//   }

//{
//     "id": 1269,
//     "text": "Haley Akin",
//     "date": "19 Oct 2022"
// }

//-----------------------------------------------------------------------------------------

//6 What would the URL and body object be to update the post you just made 
//to contain your faovrite color instead of your name?

//https://practiceapi.devmountain.com/api/posts?id=1269
//"text": "yellow",

//-------------------------------------------------------------------------------------------

//7 What is the URL to get posts that contain the text “blue”?

//https://practiceapi.devmountain.com/api/posts?text=blue

//------------------------------------------------------------------------------------

//8 Make a request to GET all the posts. 
//What are the content type and charset of the response? (Hint: look on the Headers)

//https://practiceapi.devmountain.com/api/posts
//response content type = application/JSON
//charset=utf-8

//-------------------------------------------------------------------------------------------

//9 What would cause a PUT request to return a 409 status?
//if there were a conflict with the request/code

//---------------------------------------------------------------------------------------------

//10 What happens if you try to send a query in the GET request URL? Why do you get that response?

//You get all of the ids but nothing specifically
//You get this response because it doesn't take in params. 















