var hotel_images = ["hotel1.png", "hotel2.jpg", "hotel3.jpg", "hotel4.jpg", "hotel5.jpg", "hotel6.jpg"];
var hotel_names = ["Ritz-Carlton Hotel", "Marriot", "The Luxury Collection", "St Regis Hotels", "Hyatt", "Rosewoods"];
var hotel_prices = [50, 60, 50, 40, 90, 60];
var hotel_locations = ["Amby Valley City, Lonavala",
                        "Kune Village, Lonavala",
                        "Khandala, Lonavala",
                        "Gold Valley, Lonavala",
                        "Varasoli, Alibaug",
                        "Nagaon, Alibaug"]
var hotel_num = 0;
var current_location = document.getElementById("location");
var current_name = document.getElementById("name");
var current_price = document.getElementById("price");
var current_image = document.getElementById("image");
var next_button = document.getElementById("next");
var prev_button = document.getElementById("prev");

function next_hotel (){
    hotel_num++;
    if (hotel_num > 5){
        hotel_num--;
    }
    current_name.innerHTML = hotel_names[hotel_num];
    current_price.innerHTML = "price: " + hotel_prices[hotel_num] + "$ per night";
    current_location.innerHTML = "location: " + hotel_locations[hotel_num];
    current_image.style.backgroundImage = "url(" + hotel_images[hotel_num] + ")";
}
function prev_hotel (){
    hotel_num--;
    if (hotel_num < 0){
        hotel_num++;
    }
    current_name.innerHTML = hotel_names[hotel_num];
    current_price.innerHTML = "price: " + hotel_prices[hotel_num] + "$ per night";
    current_location.innerHTML = "location: " + hotel_locations[hotel_num];
    current_image.style.backgroundImage = 'url(' + hotel_images[hotel_num] + ')'
}