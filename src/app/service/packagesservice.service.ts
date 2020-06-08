import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
//import { Observable } from "rxjs/Observable"

@Injectable()


export class PackagesService {
  packageArray = [
    {
    _id:'0',
    title:"Bali",
    agency:"sid@gmail.com",
    description:`Bali  is a province of Indonesia and the westernmost of the Lesser Sunda Islands. Located east of Java and west of Lombok, the province includes the island of Bali and a few smaller neighbouring islands, notably Nusa Penida, Nusa Lembongan, and Nusa Ceningan. The provincial capital, Denpasar, is the most populous city in the Lesser Sunda Islands and the second largest, after Makassar, in Eastern Indonesia. Bali is the only Hindu-majority province in Indonesia, with 83.5% of the population adhering to Balinese Hinduism`,
    price:50000,
    img:"https://image.shutterstock.com/image-photo/gates-one-hindu-temples-bali-260nw-599071352.jpg",
    inclusions:'5 Nights’ Accommodation at  Specified  Hotel  \nReturn airport transfer \n5 Breakfast  &  5 Dinner  \nGround Arrangement Only as per the Itinerary \nEnglish Speaking Tour Guide \nAll Taxes [Inclusive of 4.50% Service Tax] ',
    exclusions:'Travel Insurance\nHigh Season Surcharges if applicable \nAny item of Personal Nature \nAny Services not mentioned in the Inclusion List',
    terms:'Confirmation will be received within 48 hours of booking, subject to availability. \n Adult pricing applies to all travelers 4 years old and up. \n Tickets cannot be modified, exchanged, or refunded. \n Please arrive at the meeting point 15 minutes early latecomers will not be reimbursed. \n Any extra cost not mentioned in itinerary will be borned by cutomer . \n In case of bad weather, maintenance, or for safety reasons, the tour may be modified.',
    itinerary:'Day 1: Arrive in Ubud. Beginning of your 7-day Bali trip. \n Day 2: Tegalalang rice terraces and Ubud surroundings. \n Day 3: Sunset hike at Mt. Batur. The highlight of my one-week Bali tour.\n Day 4: Eastern Temples of Bali – Besakih, Lempuyang and Tirta Gangga.\n Day 5: Ulun Danu Beratan. Essential temple to visit in Bali in 7 days. \n Day 6: Taman Ayun Temple, Tanah Lot and Canggu. \n Day 7: Jimbaran and Uluwatu. End of your one-week trip to Bali.',
    validityInDays:"30",
    sold:5,
  },{
    _id:'1',
    title:"Maldives",
    agency:"Travel Agency 2",
    description:`The Maldives , officially the Republic of Maldives, is a small island nation in South Asia, located in the Arabian Sea of the Indian Ocean. It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian continent. The chain of 26 atolls stretches from Ihavandhippolhu Atoll in the north to Addu Atoll in the south to the equator. Comprising a territory spanning roughly 298 square kilometres (115 sq mi), the Maldives is one of the world's most geographically dispersed sovereign states as well as the smallest Asian country by land area and population, with around 515,696 inhabitants. Malé is the capital and the most populated city, traditionally called the "King's Island" where the ancient royal dynasties ruled for its central location`,
    price:80000,
    img:"https://qtxasset.com/Hotel%20Management-1508949476/mercuremaldiveskoodooresortmaldivesexterior.jpg?zbxIScOeOJEvMU8kcH1pm8g7UG9zZegb",
    inclusions:'5 Nights’ Accommodation at  Specified  Hotel  \nReturn airport transfer \n5 Breakfast  &  5 Dinner  \nGround Arrangement Only as per the Itinerary \nEnglish Speaking Tour Guide \nAll Taxes [Inclusive of 4.50% Service Tax] ',
    exclusions:'Travel Insurance\nHigh Season Surcharges if applicable \nAny item of Personal Nature \nAny Services not mentioned in the Inclusion List',
    terms:'Confirmation will be received within 48 hours of booking, subject to availability. \n Adult pricing applies to all travelers 4 years old and up. \n Tickets cannot be modified, exchanged, or refunded. \n Please arrive at the meeting point 15 minutes early latecomers will not be reimbursed. \n Any extra cost not mentioned in itinerary will be borned by cutomer . \n In case of bad weather, maintenance, or for safety reasons, the tour may be modified.',
    itinerary:'Day 1: Hulhumale \n Day 2: Hulhumale – Male – Maafushi \n Day 3: Exploring Maafushi \n Day 4: Maafushi – Fihalhohi \n Day 5: Back to Maafushi \n Day 6: Maafushi – Fulidhoo Day \n 7: Fulidhoo – Male',
    validityInDays:"30",
    sold:5,
  },{
    _id:'2',
    title:"Bangkok",
    agency:"sid@gmail.com",
    description:`Bangkok[ is the capital and most populous city of Thailand. It is known in Thai as Krung Thep Maha Nakhon or simply Krung Thep. The city occupies 1,568.7 square kilometres (605.7 sq mi) in the Chao Phraya River delta in central Thailand and has a population of over eight million, 12.6 percent of the country's population. Over fourteen million people (22.2 percent) lived within the surrounding Bangkok Metropolitan Region at the 2010 census, making Bangkok the nation's primate city, dwarfing Thailand's other urban centres in both size and importance to the national economy.
    Bangkok traces its roots to a small trading post during the Ayutthaya Kingdom in the 15th century, which eventually grew and became the site of two capital cities: Thonburi in 1768 and Rattanakosin in 1782. Bangkok was at the heart of the modernization of Siam, later renamed Thailand, during the late-19th century, as the country faced pressures from the West. `,
    price:40000,
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQBYfpMHxIUKUZF3-sj44VE4BuSN6g6Y9C_XOa3Y8zPL58qIc48&usqp=CAU",
    inclusions:'5 Nights’ Accommodation at  Specified  Hotel  \nReturn airport transfer \n5 Breakfast  &  5 Dinner  \nGround Arrangement Only as per the Itinerary \nEnglish Speaking Tour Guide \nAll Taxes [Inclusive of 4.50% Service Tax] ',
    exclusions:'Travel Insurance\nHigh Season Surcharges if applicable \nAny item of Personal Nature \nAny Services not mentioned in the Inclusion List',
    terms:'Confirmation will be received within 48 hours of booking, subject to availability. \n Adult pricing applies to all travelers 4 years old and up. \n Tickets cannot be modified, exchanged, or refunded. \n Please arrive at the meeting point 15 minutes early latecomers will not be reimbursed. \n Any extra cost not mentioned in itinerary will be borned by cutomer . \n In case of bad weather, maintenance, or for safety reasons, the tour may be modified.',
    itinerary:'Day One: Check In and Relax \n Day Two: See the Essential Monuments \nDay Three: Essential Monuments Part 2 \nDay Four: Food, Food, and More Food \nDay Five: Hit ALL the Markets \nDay Six: Tour Off-the-Beaten-Path Bangkok \nDay Seven: One Last Adventure',
    validityInDays:"30",
    sold:5,
  },
  {
    _id:'3',
    title:"Sri Lanka",
    agency:"Travel Agency 4",
    description:`Sri Lanka officially the Democratic Socialist Republic of Sri Lanka, is an island country in South Asia, located in the Indian Ocean southwest of the Bay of Bengal and southeast of the Arabian Sea. It is geographically separated from the Indian subcontinent by the Gulf of Mannar and the Palk Strait. Sri Jayawardenepura Kotte is its legislative capital, and Colombo is its largest city and centre of commerce.`,
    price:40000,
    img:"https://www.telegraph.co.uk/content/dam/Travel/Destinations/Asia/sri-lanka/sri-lanka-beach.jpg",
    inclusions:'5 Nights’ Accommodation at  Specified  Hotel  \nReturn airport transfer \n5 Breakfast  &  5 Dinner  \nGround Arrangement Only as per the Itinerary \nEnglish Speaking Tour Guide \nAll Taxes [Inclusive of 4.50% Service Tax] ',
    exclusions:'Travel Insurance\nHigh Season Surcharges if applicable \nAny item of Personal Nature \nAny Services not mentioned in the Inclusion List',
    terms:'Confirmation will be received within 48 hours of booking, subject to availability. \n Adult pricing applies to all travelers 4 years old and up. \n Tickets cannot be modified, exchanged, or refunded. \n Please arrive at the meeting point 15 minutes early latecomers will not be reimbursed. \n Any extra cost not mentioned in itinerary will be borned by cutomer . \n In case of bad weather, maintenance, or for safety reasons, the tour may be modified.',
    itinerary:'Day 1: Land in Colombo and explore it\nDay 2: Dambulla and safari in Habarana\nDay 3: Climb the legendary Sigiriya rock\nDay 4: Discover Sacred City of Kandy\nDay 5: Train trip from Kandy to Nuwara Eliya\nDay 6: Hills of Neuwara Elliya\nDay 7: Answer the call of Negombo beach',
    validityInDays:"30",
    sold:5,
  },{
    _id:'4',
    title:"Tulum",
    agency:"sid@gmail.com",
    description:`Tulum  is the site of a pre-Columbian Mayan walled city which served as a major port for Coba, in the Mexican state of Quintana Roo.[1] The ruins are situated on 12-meter (39 ft) tall cliffs along the east coast of the Yucatán Peninsula on the Caribbean Sea in the state of Quintana Roo, Mexico.[1] Tulum was one of the last cities built and inhabited by the Maya; it was at its height between the 13th and 15th centuries and managed to survive about 70 years after the Spanish began occupying Mexico. Old World diseases brought by the Spanish settlers appear to have resulted in very high fatalities, disrupting the society, and eventually causing the city to be abandoned.[citation needed] One of the best-preserved coastal Maya sites, Tulum is today a popular site for tourists`,
    price:90000,
    img:"https://www.senatorrivieracancunsparesort.com/wp-content/uploads/2019/11/tulum2.jpg",
    inclusions:'5 Nights’ Accommodation at  Specified  Hotel  \nReturn airport transfer \n5 Breakfast  &  5 Dinner  \nGround Arrangement Only as per the Itinerary \nEnglish Speaking Tour Guide \nAll Taxes [Inclusive of 4.50% Service Tax] ',
    exclusions:'Travel Insurance\nHigh Season Surcharges if applicable \nAny item of Personal Nature \nAny Services not mentioned in the Inclusion List',
    terms:'Confirmation will be received within 48 hours of booking, subject to availability. \n Adult pricing applies to all travelers 4 years old and up. \n Tickets cannot be modified, exchanged, or refunded. \n Please arrive at the meeting point 15 minutes early latecomers will not be reimbursed. \n Any extra cost not mentioned in itinerary will be borned by cutomer . \n In case of bad weather, maintenance, or for safety reasons, the tour may be modified.',
    itinerary:'Day 1- Saturday: Flight and travel \n Day 2- Sunday: Tulum, beach, beach club and city center\n Day 3- Monday: Chichén Itzá and Ik’Kil Cenote \n Day 4- Tuesday: Tulum Archaeological Site, beach, and city center \n Day 5- Wednesday: Cozumel and Playa del Carmen \n Day 6- Thursday: Cancún \n Day 7- Friday: Cancún \n Day 8- Saturday: Last breaths in Cancún and flight back',
    validityInDays:"30",
    sold:5,
  },{
    _id:'5',
    title:"India",
    agency:"Travel Agency 6",
    description:`India (Hindi: Bhārat), officially the Republic of India (Hindi: Bhārat Gaṇarājya),[20] is a country in South Asia. It is the second-most populous country, the seventh-largest country by area, and the most populous democracy in the world. Bounded by the Indian Ocean on the south, the Arabian Sea on the southwest, and the Bay of Bengal on the southeast, it shares land borders with Pakistan to the west;[e] China, Nepal, and Bhutan to the north; and Bangladesh and Myanmar to the east. In the Indian Ocean, India is in the vicinity of Sri Lanka and the Maldives; its Andaman and Nicobar Islands share a maritime border with Thailand and Indonesia.`,
    price:70000,
    img:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEBUSEhIVFRUVFRUXFRYVFRUVFRUVFhUXFhUXFxcYHSggGBomHRUWITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGi0lHiUtLS0tLS0vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAADBAUGAAIHAf/EAEIQAAIBAgQDBgMEBwcEAwEAAAECEQADBBIhMQVBUQYTImFxkTKBoUKxwdEUI1JicuHwBxUkM4KSsjRDwvGTotIW/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDAAQF/8QAJxEAAgIBAwQBBAMAAAAAAAAAAAECEQMSITEEEzJBUWFxkfAigaH/2gAMAwEAAhEDEQA/AIxUoirRFWiKlNZIGq0VUrdVrdVoWE1C1uqVuq0VUpWzAglbhKMErcW6FhAhaIqUUW63FulbMBCVuEo6263FuhYaFxbrcW6LcIVSzGANSTyolqGUMpBBEgjUEHYg8xS2EX7uve7pru687uhZhbu68Num8leFK1mEjbrU26dNuvDbo2YRNutTbp4260NujZqEilaMlOtboTJRTMJlaGy06UobW6ZMAmVobLTbJQL4IUkbwY9Y0pgC7JQ2SjYNma2rOhRiBKmDB5jStmWmswmVobLTTLQ2WmQBVlrQrTLLQytEAvkrKNlrK1hJRUoirWyrQ8V3oE21V9vCxKnffNr7RyqdmDKlEVK9w6tHiAB6KxYe5A+6jhKWwg1SgYjvlYG2qup+JScrLpurbHpB670+qUVUpbMCtLIBII8jEj2JFGW3RESjKlK2GgK263FujqlbhKVsKQAW62CUfLQsRfS2Jdgs7Tz9BzpbCkZkrdUFRd7tDaAOXM0eUDy1/lUVieLXXJhsg5BfCffekc0UWNstYShXryL8TBdJ1Mf+6prYi6Z/WMNI1Zjy3Ota2l5HcDUiQCfT3pdY/a+pdrjKolmAHUkAfWo7FcYspPizHooJ+u1VtjGnlPyob2jzraw9pF0wdwXLauBGYAx0PMfIyKIUpbs+n6ojoxH0FSWSmUrRKUaYoUrzu6b7utTbprBQm1uhNbp9rdCa3TJitCJt0J0p9rdBZKZMAgyUMpTr26EyU6YBNlobJTbJQ2SmTMQ+CwtxM+d84Lll3lQdcvmByozJTjJQ2SnsUTZaGUptkobJRALZK8o+Wso2Yl1SiKlEVKKqVCxhB1vB/D3bJGxzK4MjQGSDInkIgdZD6pRVSt1SlbCDVKKqVuqUVUoWY0VKKqVuq0QLSthNAtA4hie6tl4mCNJiZIG9OhaqPaATiG8so/8AqPzqcpUVhG2Gv9oHiQEQeck+5gfSkb+Je4RnfNG0gRrzAGlBCka6eh3+lEsWTJJubmdAPLaZ08qi5F1FLgE1s7AT9Om1eSBuQPIkT/X50wuHXUsCenjY+42HprWKbafCFT9o5QoPz5mhYQNoToFY8pIKjnzaJ+U0NrLhiSQNIAEkbnXWNaaOMWSQwIHTWdfKgfpeZjAMgTyHXoaO5j0W4k7k9d+UeQGteEyNh70vibrhRAAJ35x89vpQ7Ntz8TmdOg69Io0YklxVyIFwgH9kxPtVo7N3s9kLMlPCfTcfl8qpqG2pOZlB13Impns/xW3aYnxMpkHKjfIyYG4jfnWTpgkrRbclIcaF8Ws2HUNcVlbKSAHUGXSTsSJAPWJ0mpLDXBcRXXZgCJ3HkfMbUQpVUyAnGg0960ZKbZKGUrGE2SgslPMlCZaZMVoRZKE1unmShvbp0xaI90oLJT7pQHSnTAJslAvEKJYgAcyYA+Zp11pe/YVhDAEAgwddVMg/IiadMUWK0MrTbJQ2SmsFC2Wso2Sso2AmUSjKleqtGVa5rKGipW4SiBaIFoWGhXDrck5wkfZykzvsZGvLXz20ktKtbqtEVaFmo1Va3C1uBQ8WYtuw5IxHqAYpWxkiB45xa5buFEIAABmATqJ56fSoB8QzEtcbUneZ5dBtQ+IXUP8AmXAzGJlpbQDfWeVLXuKWlGgMT0y7zGr5albZ0pUFXFr+yT7Dnrrv99Ft3Dm0A58yeXy+6oY8cGYKqKG3hm+fQAb/ALVKHtA5mDlI0AChZ1OgID/eN62lhLGqXDBZ4kn4emvT0oDm0s53WZ5kTuOUk1XTfv3VPgYn97Mwjzlo68q2s8MxDADVDzYErOoEQogbitS9sxLtxW0g8IJn92BOnNoA2pW52gCnQLJiMzSTM6woI59aG/ZcsAbjjTTwrr8yBr8+tHbgViVz3C7toAXDMTyEanetcDUyOxnaElss+uVVjX94lj9KE2Ous0BWdOsudx9lfCPcVYk4Mi/DaUaazyPM6xNPLhjsojSIAP5AfWt3F6QdJVLFrEFgVXKvIEBTB6skH60xjeF3Apu3GESAQGLhQf4td+fnVvTBg6tvzGg++f6Nb38B3iOCcwynmT0ieWmnKkeQKSJfsBjxcw5SZ7s6HaVO35/6qslm6GLABhkbKcwInQGR1Gu/ka5p2BxptYoW3LeIm2xIgA8gvzEn0rquWqx4IzW4BkobJTRWtClMJQm6UFkp9koLpWAJFKEyU4y0JlogE2Sl3SnyKE606YrREYy8qZZmXbKoVSSTvy20BOvQ1jJUgyUF7dOpCNCJShlada3QilNYBXJWUfLWUbMSli2QNdaYUV6q0RVrnspRirRFWsVaIooBo8C0RVr1VoqrWDQG9alSASpIIBG4JGhFc87RcPxqPlcd4hHhcMSJ6HPmCnyj0NdNVahO1lpu5EOYZwCsLGgJEGJGo60suLKQe5yocKxLgqzgcyQSDA0gBTH0514Ozy6ZnJjaIHtzPrVtt4YAzufefWZottVJjUenT02qPcZekVkcItJlLKzSRyZjO5G3rUhZsBHlLBAE6tkQbRzJP0qVxOHXOgAj4iSCVOgA1I9aYYJbE5BPkBmPz/GlcrCRtuxcI1e0NCPAHu6eeWPuo9vhxEoblxpAJy92ggzGvxcqS4hxoKSskn9lTlUerbmo9uMuTmZbZO2qnYdDNKFRZYRwlNjbUxt3jvd19GgV5cwuUQGRRI0VVUHXbn99R2A4yGOUeFj9kmVb0PI1Ktelf63rbgaCGBrt930FDQSJEV5fxarAO55DU0mUn4Rcg/vMo9gy1jDakNmQiV2IOx67ec+1P8OYZ8ug8JAA+VRFoMBCooAHWfupvg94llOgYqT5A5SfaszEDxuwbWKFwGAY3JAzLGgA5kfjXWuGYoXrKXQQcyg6bTsw9wap3FuFfpJRUIVmIgnSG9Rz3Hzq4dmeEXMPY7u4wYhiRlkgAxpJE9athdk8tUN5a0YUyyVoUq1ERVhQmWm2ShMlAwoyUrfuKpVWMF2yr5sFZo9lPtTtjDLbQIghVEKJJgDYSdaHfwiMVZlBKEshIBKkqVJHQwxHzogFmShMlOvboLLWBQmyUF0p5koLJRTFaEmSgulPOlBZadMWhPJWUwbdZRsFEoqURUoiJRlSoWWoEtutlt0dRW4SiYEq0RRRBboi26IQSrUF2ubw216lj7AD8asypVR7bt+tRJIhJMebH/8ANLPxGhyV645BmJ9DQrF9cxe44kwIGsDYD3j+WwDbyE5YJPmPxafvry+6KsQurLppOhH5Vz0XHr7A3RMkKpI01mR+VJcTxemnMfMDpFaXeIILmpEZAPqZoZvJdJjqT7D60rVDxW5EXlG/9Hyil41maYxfxnTYwPXmT7/SllttdbKvXWNz+Q60EUYO5ihtBkdOXz5VZsBjM9tLh+1Ib+JTH4Gg4DgRYqipnY7CJk+Q5f1tT3Fezj2HCu0MMrZQQQJM7jnTRafAk9uRh7oDzptz8z/Khti1AgMJ9/XalEwg7wySdt/RuvoKYGFURp0o0hDR8YoPxMfT+dD4RxIIQSHbKxB0ExJEcuRpl7QgmBseQJrXBqA2o2uT9a21GLZgCpvWuatctsP9y/yPvV8a3XNsIDbcIdlZXQ6g5Q0kCOf4E11Iir9MrTIZdmhNkoJt0660Jh5fyq7RIUe3QWSmhbOZiWlTGUQBliZ15zpWrJSUESKUvZtuM2cg+I5IEQkCAfOc2vSKcTD5S2rHM2bxMTGgELOw0mPM1hWgEUZKE1unWWhMtA1CTWqC1un2WtGWhZqI1rdCe3UkyUF7dbUBxI426ynDbrKOoXSSKpRQlFS3RQlBFKF1t0ZbdHS3W4WiYEtuiLaogWiKtMkKDFuuZdq2uNjLgL6KcogEQBsPXf5ztXVkSuR8UbPiLr9brn3ZopM2yRTHyRV3DidXknqYoV3Ap4Rv4hPsx+e1POxnXT2H40viMQoZZYbncjofzqFljxMMvezl2A6868vYIE5l0PlRMNiFZ2ysDtznlTUaTU5tlYFYS6r5l+FtYzfC3TX7J9al+B8MKoxIhtBr7mPUnl0qJUh7UgQRodddSSDPz+lW/szgWFkMZJkwDqI/CknwOjofY/gq2bIuMP1lwAkndVOoUfQnz9BVU/tAP+LP8KV0bCZ8i94FDRqFnKPSa5p/aOGOLhTHhTXToetejlgo4kkcMJOWRtlcKnMYjluJ6/nXhxGoE8t9Br6EUkiNJBdjB8gdjzg1ucN0DH1b8orlLjTMOZHuT9BQExqLcImNjz29PUGgtg9Yyj1Jb8Sa8s4SHMgbDWAPpRpGJzF8UD3bOQyGzhSNIMHcHXYR8zXW8BjO9AdQO7KKQfEDmOpEEQQBGoO8iuL43A5DauD9pG+cSfTSf6Fdk4I5OGskR8Cg+gEe+lW6XlpEc62Q+RQWtazJ2iJ09Y60ehtb8QbMYAIy6ZTJBk6TIgxB+0d9I63E50wLLQ2WmytaG3U3EaxIrQnSpA2a1NikcWGyItZiJZQpk6A5tJMawOUHy868YVJPh6Uu2YpGMKkUNhR2WhstAwAihsKYK1oy0rMLZayilaylMSiCjqleolHVKdBZ5bt0YJWKtEWqxQjZoLVbC3RAK9q0YISyK7SAjCXSrshVGYFInQbeLkedcY7pp+JjvOw/Cux9sLuXBXT1Cr/udV/GuSGubqPJI6MPAv8Aoe0AmfM/nQLuBXvEBC8zr8ufOmwdYkn3/OhFouDb4fxqBU8w1gC48DoPapF38J8gfupPCvqx/eNOFJVidBlb7qlPkrAhuCYUQSdo0HWDNXzha/qx6/jVVwCD5D0q28KPhX1/8qTIE6PXNO34/wAZ/pSul1zbt/8A9V/pT8a9PqvD+zhw+RR7Nkhnk8x08+lMz0/GstvLNMDbb/0K27tfWuSzpNRl1PPr+VaK0sYPIfea3by/nWhIzTtpzHnWMiS42s4O0f2WU7x9l1j7q6N2FuucMUYeG22VGmSVjNB9J3865zjjOAkciOX78fjXRewdycL/AKgfe2lP03n+SebxLJWVlZXonIZWVlZWMZXhFe1lBowNloL26YahNXPMeIlcs0vct1INQXFQbKojWShstO3EoDJSthoWy1lGy1lLZqITg/bu0xC3lKMRowEq0b6bjnUlxHtlYsuq/F8Bc5gMguQUmdyVJOnLWuQ3r9g921okuGOcaqhVdtc2YkjU+sVMKi4m6DaHd5u7UoFZyF+AlmdSYIgLqJnnvU9ckuQ0mdiwXFLN1sqXFZozZZ1yzEx0qQAqkcJ7NXbOR7dwHRFK5oRACpZgRMmV1QaHTXQRdlrswyb8kRmkuDespG9xayr92XAb0JE9JiJ5xNVjGdpD3hC3rhZZ8CWkyuVPiALIToAdmnTrvWeeEAKDY5/aLey4MD9q4o9gzf8AjXNGq19v+MrdWyiyN2YH4laAACI6GfnVPa/5GubLJSlaOjGqiFOp3ilwv6084A3ombTY+4oVhTmfTmOfkKmObYO1OvmZ96krw/Vt/CfupTBGFApnFtFptOX9Cpy5KRAYY/11q3cETRP4h/yqoYAGrpwXa3/EP+VJNbjWX+ubf2hf9T/pT7zXSa5p/aEf8V/pT8a9LqvBfc4cHkVItq09B+NDa4Ov4Vvl8R+XXzrxlg/zNciOmzU3h5+1eXd1PUHf5VuY6D6UK8wEGBMxy5iiYlZzYG4JnLO3kQ1Xr+za7Ngjotv7mX/xqi8PTNh7ojXK237yECfY1YP7NeJC3YuM/wAK2i2n7jnT18dHC6yX+8CZFcWdKrKiezvHExVssBlZTDLIMdCD0P4GpavRjJSVo5GmnTMrKysogMoN7EophnUE7AkSfl/W9KYnjVlCyl5Zd1G/yJ059a5d2yxTd93wcjvEUqQ0gSCHiCSFAkGNJ6xNc2bqFHaO7KQx3yWztN20Ni93SKsCMz6NE6zEjlyNTHAuP2sSi5XXvIlrcjMCN9OmtcV/vJVdYWCq6liWYmDJOwg5tjyAFE4Pju5uo6tBDKVYSOeqsAdQRMj61ydyV2yulUd5NDYUlwbia4iytxSDOjQQQGG4EE6V5b4irX3sANmREeYOVlcsvhbYkFCCOUii3ZkhhxQHr3E31VSzEADcmoTHdobakKg7wwSdcoAG/iIifL0qblQ6QjxXttg8Peazdch0IDAIxGoBGoHQivK1OPtv4nwtwtsSGtx4fDAnXSI+Ve0bXx+/gFo4vh8Ud/uHyqd4bxy5bj9YWVc2VTJGZkiSCpBy+fTTrVawysSMsyTA8zyjzqwYPCmIdpJBMTE8oBP2pk676U2XSuRY2Xzsb2ua3bCPrmMjMFRQWMSW0gTHLYE1JcJ7a3b+KNnwwwKoohULANOZ21g8vloN65bicesBF2WQN5Ou/sI1/wDTnDeJpBW6pZACVCwGD+GTmO2gPXXlSRU1H2NSOk8QOHuXQt/wOmVVBuHu2LkhVZchFvMNJOsxAqJ4XxVsNKWkS6AMpaSrQx07srEN4gNNTlJiBVKucWuZ8+cyVKgkyQsEATyjlROE4tkfMoUnnmUMNwdj6UulrcJP9ocWj3x3a5Qogg5Ac2Ys3wabsfao98Qo3YfSlL+LtFma465jq0xuddY0FLXeJ4cQMy/IT+FXjHY1okHxCnUMpHr+VDsYsDP4hudflQcPjrHJ11gDadT0+Yolh0ytESZ++jQbJDBXZQUzfSbZAP8AUilcINB0onEr6rblgSJXbeZ0qbW5SL2MwTEfSNKt/BLn+UP3l/5CqWbwEQIJVfqKsvCLmlnf4kmN/iFTyfIUdSRwdiDBgwZg9K5h/aO5GL0E+BNPfrVswHFcrsgIY5QxQsMykkwebQRpr0qidvcbmxmY6Qq6Tpzrol1MMsUlzyc8MbhK/RXe+aT+qPL7Q/Cthcc6ZQPnUZi+0KW2KxmOmxEe/vSbdqFDCEMRzOskT+NZRfwNqRPfrI+wPmaXvNdiYTcc2jlz+dQr9qAR/lmY66Tyon/9IreErC9ZGkQaOlg1ot/Arl3MfgIMSJYbT/P3o3ZR0AvWXByw+68gi3NxsZTfzqtWu06WlLLDaQIZTBmBI+dbcM7V5TcZllrhK6CBDoUaQDpowqcotW6DqR3XDcPs2sWO7tIhaw3wqBojrO38Y9YHQVMVzPBduDcuWrsBYW5bJZl1nKRoPNd/Pyqcw3aZl+NgwIJzeEEDTWBoQJ+tXj1eOO1Mk8UnuXChYq6ERnMwqsTlEtAEmANz5VX7/aYBXyqWaNIIMSBBiNtz8jUVc7Rtetd2wjQZiDqSI3jT1HnRn1uNJ1uKsMvZDcVwuHN0lr7MQ1whLbAOcwkE9AMuvzNIDh+HF0viUFq1kdUAfvGByqwdmUyfjPKdd9NAY/BK6+FwC0E+bfDE+RiovFK9tbpa4HICuNwSM0kabj4uu/nXmRm2zpaITEXrfdHLIuBgAwjKyFTOv7UqOWsnbSkv0gecjz19NfyobNIgb8tT1BO4HIH3rT+6L8svdsWEcxoTtOvOu5RS5JNl17F9rUwujW2MyTFxgCWK6lCCNIjSJ+Qp/HdtWZ89tFUFShKzn1OZQDoYHi+ftXPUwd5cpZCAfTXn11oi2byk/Y0J1IBGUZz4ZnYfWleNP2FMuVjtDiDhyGdipYrJkxMN4pHi3P8AUVD/AKb8TM2mg0JA6gROUTHnpNInFsyhAcyiSACAQZ16dKALco4cgSMyjMJBQyef7JepxhvbGbHU7QXlELfdQJgK9wLvyEivKhlwk/8AcA/0sfqBFZVtMRLJfhvCb6PmNhzl2GUjQCAJ2mG9Pvohwd8lrfcHMCHYlgCuYuq765SVJ1k7Va7nAkum410hDdAzrev5PDoQAqwY8I20NAwfZlf1lkNZbDXCvhU3jGVRrnJWTmE6TyGg2hd/yfP79R9JT34Td7xLJAzXM5U501CyBz8Mzzp3+5mCSGtaAEg3U3gzz9dB0FZx7EYbD8Ryu9xls20Ud2FD5z4oALQAFIHPloauVzs/aNj4blouc7Nb7lbpLDVXUqVkyASpkkVWbewFRURwJ/tOgi2jt4x4Q4OWSJH2TpVcxuNuMALedVVsw8O5jLJ1iYO3nXQeL8MF213J71MuTMy9yWIURDEkaxqYHTlpUQewCCScS/yIJ94HtHzplS8mhN5cFGNtnVySZHiOkGJA2nzoYtH97/br9+lTOLwtqxeuWiLt1YAkRJkAtJAjnFSuG7LWWRXVW8QBysxBEjYkH8KvYNJVUT+LfcQPMU9ZvPI8d2PNx66jYVYl7NWRvaP/AMkj/kKbs8AsD/tD5uPxeg2jKDInA49wYLnbTUE/TencTdd1ygFiSIHoZP0mpjDcHsqcwFtY2IOZvlOx96lf7sVbT3vCCEfLnPiZspgKNyTUpSSLLiilvdcHUnUKfKMoI+/anMJxm5b8WadBGYnSNiINWPs06uy22wphLaZrnigtlWQABMySN+Rq02cNa2AAH71hiw8gVAPzJNQyZknTiUS2s5rY7QXVLYg3lDMWGQSHeAPtAaLJGpPI1VeNcRbEXTcuMpYtPxsR6CToNK7jjuzeDvGblgE/ti3dUwOoZCPrVF4jwXCq82VYDXxKmRiI0BzHb5U2GULslO2jnn6OJyjJMxAZzv05VriLYn7PIa5pMQOXKrBjez4AU2EGYEEm45HLlBOs1mG7OgibygvP2WaI5DlXWvuRorhsCGkoI8zrMbe9BTKNiuvWW3EmZ9quK8AtiIUCPOfvo9vgtrmiE+aj8Io2CkVK+U7tchnVS2aIzEHMNOUjnTSYcP8A5eggdSSY1yhVOm+lWP8AuGzmzajbwqcq6eUVKYXB2EJItoJEGF3A2BjekbGVEf2Ns3FIzg6vbaQFBQSc43kyG2MDSrza4BYMf4i59rQ+EjNGhYNJAjaSNelRFjF21EACByAOlEPE16H6CuWcG3aRRS2JI9l7Rn9e7eEKIJEQAM0A+I6fakTW1js7h1ILm45BX4mIEqImEIGvU1EHiDH4U9zQ2xl3k4XyzGl7UvkOtfBO4XgWFQZT3jmZzM5DaTEFSoESdvwoeL7P4dy8tcUOuUruo8WaQDseW/P51D28a43uT8p+6KaHGyNAAf69a3bkuGHXEO3ZWyQ4S7lLWhaHhgqBlEyDJMLz6nrReG9me5XKhRhBkFJzeIsPibQjM3Xf5VHniU6lP9p1/CaYwvFCDJles6z7UJQnVWFSiSD8NcKyvbt6hoHdwBIMczpP0qM/QWA8dqyHBibTQcpBGheCp15HkKlE4tP2/cn7jTFnGz4TEHkQGT5ryHpHXWp1JMp/FlWXAKLVtblhS4RgxySM6jMHlSR4iDpO7da2GAw7MQ1lRASPE4hbiEZSSdgSg8xPnVnt2A4ORQlxSQ1vSDH7M7HyM+VIvfI/Z+4/dTd6S9GWJP2V6zetKoCYS5lgEZLjhfEM2gJB59Kyp/8ATPP6t+VZUbf1/Iez9f8ACtLiZ3k+utF7+srK9No4zVAszlE+lFN7Tl7VlZQMaqwG0e1DuXvP6VlZWRgLvXgesrKcAVHqSwWCZoJIA+te1lSySaWxSEU3uPYRDJNqAoMZ2EtI3yipKwoBkklv2jq3udvlFZWVzZHvRaK2CtihsSY89aNYxq8mPtXlZXNJFUacf4uqYZomX8I+e/0mqJcvzWVldnTRWmyGbkCXrKysrqIHpivAfKsrKIDcMelbAn+prKygYyT/AEBW8n+oFZWUrCeKGNehaysrGNlXyrdQByrKygE2msmvKysYzNWpY+npWVlYITG8SuW7zMrkRl89lH5UHiGMcMYYid4JrKyl0oqmxL+87v7Z+n5VlZWUdEfgbU/k/9k=",
    inclusions:'5 Nights’ Accommodation at  Specified  Hotel  \nReturn airport transfer \n5 Breakfast  &  5 Dinner  \nGround Arrangement Only as per the Itinerary \nEnglish Speaking Tour Guide \nAll Taxes [Inclusive of 4.50% Service Tax] ',
    exclusions:'Travel Insurance\nHigh Season Surcharges if applicable \nAny item of Personal Nature \nAny Services not mentioned in the Inclusion List',
    terms:'Confirmation will be received within 48 hours of booking, subject to availability. \n Adult pricing applies to all travelers 4 years old and up. \n Tickets cannot be modified, exchanged, or refunded. \n Please arrive at the meeting point 15 minutes early latecomers will not be reimbursed. \n Any extra cost not mentioned in itinerary will be borned by cutomer . \n In case of bad weather, maintenance, or for safety reasons, the tour may be modified.',
    itinerary:'Day 1	Arrive in Mumbai, free time to explore or rest, as you choose \nDay 2	Day tour of Mumbai, including Elephanta Caves, Prince of Wales Museum and more \nDay 3	Transfer to Goa by plane, free time in the afternoon to explore \nDay 4	Free day to explore or relax, as you prefer \nDay 5	More free time in Goa for beaches or cultural visits \nDay 6	Transfer to the airport for flight home ',
    validityInDays:"30",
    sold:5,
  },
]
  constructor(private auth:AuthenticationService) { }


  getHomePagePackages () {
    return this.packageArray.slice(0,3);
  }

  getAllPackages(){
    return this.packageArray;
  }

  searchPackages(params) {
    let allTours = this.getAllPackages();
    let keyword = params.key;
    if(keyword) {
      allTours = allTours.filter(item => {
        return item && item.title.toLowerCase().includes(keyword.toLowerCase());
      }); 
    }
    allTours = this.sortByPrice(allTours,params.max,params.min);
    if(params.sortBy)
    allTours = this.sortBy(allTours,params.sortBy);
    return allTours;
  }

  getPackageById(id) {
    if(id<6){
      return this.packageArray.find((item)=>{
        return item && item._id == id;
      })
    }
    return null;
  }

  private sortByPrice(data, max = 99999999, min=0){
    data = data.filter(item => {
      return item && (min <= item.price) && (max >= item.price);
    })
    return data;
  }

  private sortBy(data , sortBy) {
    if(sortBy == 'Price lowest to highest') {
      data = data.sort(function(a,b){
        return a.price - b.price;
      });
  }

  else if(sortBy == 'Price highest to lowest') {
    console.log('descending')
    data = data.sort(function(a,b){
      return (b.price - a.price);
    });
  }

  else {
      data.sort(function(a, b){
        if(a.title < b.title) { return -1; }
        if(a.title > b.title) { return 1; }
        return 0;
    })
  }

    return data;
  }

  getSellerPackages(){
    if(this.auth.sellerLoggedIn()){
      let seller = this.auth.getLoggedInSeller();
      return this.packageArray.filter((item)=>{
        return item && item.agency == seller.email;
      })
    } else {
      return null;
    }
  }

  deletePackage(id) {
    if(this.auth.sellerLoggedIn()){
      let seller = this.auth.getLoggedInSeller();
      this.packageArray = this.packageArray.filter((item)=>{
        return item && item._id!=id ;
      }) 
    }
  }


}
