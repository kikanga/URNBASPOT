///This file doesn't work.


var express = require("express");
var mongojs = require("mongojs");
var mongoose = require('mongoose');
var Player = require('./../models/Player.js');
var async = require('async')

const NBA = require("nba");


function nbaBulkGetter(app) {
    const playerIDArray = [];
    app.get('/allPlayers', function(req, res) {
            const playerArray= ["Alex Abrines", "Quincy Acy", "Steven Adams", "Arron Afflalo", "Alexis Ajinca", "Cole Aldrich", "Steven Adams", "LaMarcus Aldridge", "Lavoy Allen", "Tony Allen", "Steven Adams", "Al-Farouq Aminu", "Alan Anderson", "Justin Anderson", "Kyle Anderson", "Ryan Anderson", "Giannis Antetokounmpo", "Carmelo Anthony", "Joel Anthony", "Trevor Ariza", "Darrell Arthur", "Omer Asik", "D.J. Augustin", "Luke Babbitt", "Ron Baker", "Wade Baldwin IV", "Leandro Barbosa", "J.J. Barea", "Harrison Barnes", "Matt Barnes", "Will Barton", "Brandon Bass", "Nicolas Batum", "Jerryd Bayless", "Aron Baynes", "Kent Bazemore", "Bradley Beal", "Malik Beasley", "Michael Beasley", "Marco Belinelli", 
            "Dragan Bender", "Davis Bertans", "Patrick Beverley", "Bismack Biyombo", "Nemanja Bjelica", "Tarik Black", "Eric Bledsoe", "Bojan Bogdanovic", "Joel Bolomboy", "Devin Booker", "Trevor Booker", "Chris Bosh", "Avery Bradley", "Corey Brewer", "Malcolm Brogdon", "Aaron Brooks", "Bobby Brown", "Jaylen Brown", "Nicolas Brussino", "Reggie Bullock", "Trey Burke", "Alec Burks", "Jimmy Butler", "Bruno Caboclo", "Jose Calderon", "Kentavious Caldwell-Pope", "Isaiah Canaan", "Clint Capela", "DeMarre Carroll", "Vince Carter", "Michael Carter-Williams", "Omri Casspi", "Willie Cauley-Stein", "Tyson Chandler", "Wilson Chandler", "Marquese Chriss", "Rakeem Christmas", "Semaj Christon", "Ian Clark", "Jordan Clarkson", "Norris Cole", "Darren Collison", "Nick Collison", "Mike Conley", "Pat Connaughton", "Quinn Cook", "DeMarcus Cousins", "Robert Covington", "Allen Crabbe", "Jamal Crawford", "Jordan Crawford", "Jae Crowder", "Dante Cunningham", "Seth Curry", "Stephen Curry", "Troy Daniels", "Anthony Davis", "Deyonta Davis", "Ed Davis", "DeMar DeRozan", "Dewayne Dedmon", "Sam Dekker", "Malcolm Delaney", "Matthew Dellavedova", "Luol Deng", "Cheick Diallo", "Boris Diaw", "Gorgui Dieng", "Spencer Dinwiddie", "Goran Dragic", "Andre Drummond", "Jared Dudley", "Mike Dunleavy", "Kris Dunn", "Kevin Durant", "Henry Ellenson", "Wayne Ellington", "Monta Ellis", "Joel Embiid", "Tyler Ennis", "James Ennis III", "Tyreke Evans", "Dante Exum", "Festus Ezeli", "Kenneth Faried", "Derrick Favors", "Kay Felder", "Cristiano Felicio", "Raymond Felton", "Yogi Ferrell", "Dorian Finney-Smith", "Bryn Forbes", "Evan Fournier", "Randy Foye", "Tim Frazier", "Channing Frye", "Danilo Gallinari", "Langston Galloway",  "Marc Gasol", "Pau Gasol", "Rudy Gay", "Michael Gbinije", "Paul George", "Taj Gibson", "Manu Ginobili", "Rudy Gobert", "Archie Goodwin", "Aaron Gordon", "Eric Gordon", "Marcin Gortat", "Treveon Graham", "Jerami Grant", "Jerian Grant", "Danny Green", "Draymond Green", "Gerald Green", "JaMychal Green", "Jeff Green", "Blake Griffin", "Justin Hamilton", "AJ Hammons", "Tim Hardaway Jr.", "James Harden", "Maurice Harkless", "Montrezl Harrell", "Devin Harris", "Gary Harris", "Joe Harris", "Manny Harris", "Tobias Harris", "Andrew Harrison", "Udonis Haslem", "Spencer Hawes", "Gordon Hayward", "Gerald Henderson", "John Henson", "Juan Hernangomez", "Willy Hernangomez", "Mario Hezonja", "Roy Hibbert", "Buddy Hield", "George Hill", "Jordan Hill", "Solomon Hill", "Darrun Hilliard", "Jrue Holiday", "Justin Holiday", "Rondae Hollis-Jefferson", "Richaun Holmes", "Rodney Hood", "Al Horford", "Dwight Howard", "Josh Huestis", "Kris Humphries", "Serge Ibaka", "Andre Iguodala", "Ersan Ilyasova", "Joe Ingles", "Brandon Ingram", "Kyrie Irving", "Demetrius Jackson", "Reggie Jackson", "LeBron James", "Al Jefferson", "Richard Jefferson", "Brandon Jennings", "Jonas Jerebko", "Amir Johnson", "Brice Johnson", "James Johnson", "Joe Johnson", "Stanley Johnson", "Tyler Johnson", "Wesley Johnson", "Nikola Jokic",  "Damian Jones", "James Jones", "DeAndre Jordan", "Cory Joseph", "Frank Kaminsky", "Enes Kanter", "Ryan Kelly", "Michael Kidd-Gilchrist", "Sean Kilpatrick", "Brandon Knight", "Kyle Korver", "Kosta Koufos", "Mindaugas Kuzminskas", "Zach LaVine", "Skal Labissiere", "Jeremy Lamb", "Joffrey Lauvergne", "Ty Lawson", "Jake Layman", "Caris LeVert", "Courtney Lee", "David Lee", "Alex Len", "Kawhi Leonard", "Meyers Leonard", "Jon Leuer", "DeAndre Liggins", "Damian Lillard", "Jeremy Lin", "Shaun Livingston", "Shawn Long", "Kevon Looney", "Brook Lopez", "Robin Lopez", "Kevin Love", "Kyle Lowry", "Timothe Luwawu-Cabarrot", "Trey Lyles", "Shelvin Mack", "Ian Mahinmi", "Thon Maker", "Boban Marjanovic", "Jarell Martin", "Wesley Matthews", "Luc Mbah a Moute", "James Michael McAdoo", "Patrick McCaw", "Sheldon McClellan", "CJ McCollum", "T.J. McConnell", "Chris McCullough", "KJ McDaniels", "Doug McDermott", "JaVale McGee", "Rodney McGruder", "Ben McLemore", "Josh McRoberts", "Jodie Meeks", "Salah Mejri", "Jordan Mickey", "Khris Middleton", "CJ Miles", "Mike Miller", "Patty Mills", "Paul Millsap", "Nikola Mirotic", "Greg Monroe", "E'Twaun Moore", "Marcus Morris", "Markieff Morris", "Anthony Morrow", "Donatas Motiejunas", "Timofey Mozgov", "Emmanuel Mudiay", "Shabazz Muhammad", "Dejounte Murray", "Jamal Murray", "Mike Muscala", "Nene", "Larry Nance Jr.", "Shabazz Napier", "Maurice Ndour", "Jameer Nelson", "Raul Neto", "Georges Niang", "Andrew Nicholson", "Joakim Noah", "Nerlens Noel", "Lucas Nogueira", "Dirk Nowitzki", "Jusuf Nurkic", "David Nwaba", "Johnny O'Bryant III", "Kyle O'Quinn", "Daniel Ochefu", "Jahlil Okafor", "Victor Oladipo", "Kelly Olynyk", "Chinanu Onuaku", "Kelly Oubre Jr.", "Zaza Pachulia", "Georgios Papagiannis", "Jabari Parker", "Tony Parker", "Chandler Parsons", "Patrick Patterson", "Chris Paul", "Adreian Payne", "Cameron Payne", "Elfrid Payton", "Nikola Pekovic", "Paul Pierce", "Marshall Plumlee", "Mason Plumlee", "Miles Plumlee", "Jakob Poeltl", "Quincy Pondexter", "Otto Porter Jr.", "Bobby Portis", "Kristaps Porzingis", "Dwight Powell", "Norman Powell", "Ronnie Price", "Taurean Prince", "Tim Quarterman", "Chasson Randle", "Julius Randle", "Zach Randolph", "JJ Redick", "Willie Reed", "Josh Richardson", "Malachi Richardson", "Austin Rivers", "Andre Roberson", "Brian Roberts", "Thomas Robinson", "Glenn Robinson III", "Sergio Rodriguez", "Rajon Rondo", "Derrick Rose", "Terrence Ross", "Terry Rozier", "Ricky Rubio", "Damjan Rudez", "Brandon Rush", "D'Angelo Russell", "Domantas Sabonis", "Dario Saric", "Tomas Satoransky", "Dennis Schroder", "Thabo Sefolosha", "Wayne Selden", "Kevin Seraphin", "Ramon Sessions", "Iman Shumpert", "Pascal Siakam", "Ben Simmons", "Jonathon Simmons", "Kyle Singler", "Marcus Smart", "Ish Smith", "JR Smith", "Jason Smith", "Tony Snell", "Marreese Speights", "Tiago Splitter", "Nik Stauskas", "Lance Stephenson", "Diamond Stone", "Edy Tavares", "Isaiah Taylor", "Jeff Teague", "Mirza Teletovic", "Garrett Temple", "Jason Terry", "Isaiah Thomas", "Lance Thomas", "Klay Thompson", "Tristan Thompson", "Axel Toupane", "Karl-Anthony Towns", "PJ Tucker", "Evan Turner", "Myles Turner", "Beno Udrih", "Tyler Ulis", "Jarrod Uthoff", "Jonas Valanciunas", "Denzel Valentine", "Fred VanVleet", "Rashad Vaughn", "Noah Vonleh", "Nikola Vucevic", "Sasha Vujacic", "Dwyane Wade", "Dion Waiters", "Kemba Walker", "John Wall", "TJ Warren", "C.J. Watson", "Briante Weber", "David West", "Russell Westbrook", "Okaro White", "Isaiah Whitehead", "Hassan Whiteside", "Andrew Wiggins", "Alan Williams", "Deron Williams", "Derrick Williams", "Lou Williams", "Marvin Williams", "Troy Williams", "Kyle Wiltjer", "Justise Winslow", "Jeff Withey", "Christian Wood", "Metta World Peace", "Brandan Wright", "Delon Wright", "James Young", "Joe Young", "Nick Young", "Thaddeus Young", "Cody Zeller", "Tyler Zeller", "Stephen Zimmerman", "Paul Zipser", "Ivica Zubac"];
            var idArr = playerArray.map(a=>NBA.findPlayer(a).playerId)
            // var idArr = [NBA.findPlayer("Giannis Antetokounmpo").playerId]
        // function recurse(arr, callback) {
        //     // console.log(arr, !!arr.length)
        //     if (!arr.length) {
        //         console.log('hix')
        //         return callback(playerIDArray)
        //     }

        //     // console.log('24' + arr[0])
        //     const response = NBA.findPlayer(arr[0]);
        //     playerIDArray.push(response.playerId);
        //     // console.log(playerIDArray)
        //     arr.shift();
        //     return recurse(arr, callback);
        // }
        const SecondAPICall = (arr) => {
            console.log(arr[0]);
            if (!arr.length) {
                return res.send();
            }            
            return NBA.stats.playerSplits({PlayerID: arr[0]}).then(info => { 

                    ///Testing if it worked
                    console.log(info.overallPlayerDashboard[0])
                arr.shift();
                SecondAPICall(arr);
            }).catch(err => {
                if (err) {
                    console.log(err, arr[0]);
                    arr.shift();
                    SecondAPICall(arr) 

                }
            });
        }
                SecondAPICall(idArr);

        // recurse(playerArray, SecondAPICall)
    });


    // async.series([
    //     function(callback) {

            // playerArray= ["Alex Abrines", "Quincy Acy", "Steven Adams", "Arron Afflalo", "Alexis Ajinca", "Cole Aldrich", "Steven Adams", "LaMarcus Aldridge", "Lavoy Allen", "Tony Allen", "Steven Adams", "Al-Farouq Aminu", "Alan Anderson", "Justin Anderson", "Kyle Anderson", "Ryan Anderson", "Giannis Antetokounmpo", "Carmelo Anthony", "Joel Anthony", "Trevor Ariza", "Darrell Arthur", "Omer Asik", "D.J. Augustin", "Luke Babbitt", "Ron Baker", "Wade Baldwin IV", "Leandro Barbosa", "J.J. Barea", "Harrison Barnes", "Matt Barnes", "Will Barton", "Brandon Bass", "Nicolas Batum", "Jerryd Bayless", "Aron Baynes", "Kent Bazemore", "Bradley Beal", "Malik Beasley", "Michael Beasley", "Marco Belinelli", 
            // "Dragan Bender", "Davis Bertans", "Patrick Beverley", "Bismack Biyombo", "Nemanja Bjelica", "Tarik Black", "Eric Bledsoe", "Bojan Bogdanovic", "Joel Bolomboy", "Devin Booker", "Trevor Booker", "Chris Bosh", "Avery Bradley", "Corey Brewer", "Malcolm Brogdon", "Aaron Brooks", "Bobby Brown", "Jaylen Brown", "Nicolas Brussino", "Reggie Bullock", "Trey Burke", "Alec Burks", "Jimmy Butler", "Bruno Caboclo", "Jose Calderon", "Kentavious Caldwell-Pope", "Isaiah Canaan", "Clint Capela", "DeMarre Carroll", "Vince Carter", "Michael Carter-Williams", "Omri Casspi", "Willie Cauley-Stein", "Tyson Chandler", "Wilson Chandler", "Marquese Chriss", "Rakeem Christmas", "Semaj Christon", "Ian Clark", "Jordan Clarkson", "Norris Cole", "Darren Collison", "Nick Collison", "Mike Conley", "Pat Connaughton", "Quinn Cook", "DeMarcus Cousins", "Robert Covington", "Allen Crabbe", "Jamal Crawford", "Jordan Crawford", "Jae Crowder", "Dante Cunningham", "Seth Curry", "Stephen Curry", "Troy Daniels", "Anthony Davis", "Deyonta Davis", "Ed Davis", "DeMar DeRozan", "Dewayne Dedmon", "Sam Dekker", "Malcolm Delaney", "Matthew Dellavedova", "Luol Deng", "Cheick Diallo", "Boris Diaw", "Gorgui Dieng", "Spencer Dinwiddie", "Goran Dragic", "Andre Drummond", "Jared Dudley", "Mike Dunleavy", "Kris Dunn", "Kevin Durant", "Henry Ellenson", "Wayne Ellington", "Monta Ellis", "Joel Embiid", "Tyler Ennis", "James Ennis III", "Tyreke Evans", "Dante Exum", "Festus Ezeli", "Kenneth Faried", "Derrick Favors", "Kay Felder", "Cristiano Felicio", "Raymond Felton", "Yogi Ferrell", "Dorian Finney-Smith", "Bryn Forbes", "Evan Fournier", "Randy Foye", "Tim Frazier", "Channing Frye", "Danilo Gallinari", "Langston Galloway",  "Marc Gasol", "Pau Gasol", "Rudy Gay", "Michael Gbinije", "Paul George", "Taj Gibson", "Manu Ginobili", "Rudy Gobert", "Archie Goodwin", "Aaron Gordon", "Eric Gordon", "Marcin Gortat", "Treveon Graham", "Jerami Grant", "Jerian Grant", "Danny Green", "Draymond Green", "Gerald Green", "JaMychal Green", "Jeff Green", "Blake Griffin", "Justin Hamilton", "AJ Hammons", "Tim Hardaway Jr.", "James Harden", "Maurice Harkless", "Montrezl Harrell", "Devin Harris", "Gary Harris", "Joe Harris", "Manny Harris", "Tobias Harris", "Andrew Harrison", "Udonis Haslem", "Spencer Hawes", "Gordon Hayward", "Gerald Henderson", "John Henson", "Juan Hernangomez", "Willy Hernangomez", "Mario Hezonja", "Roy Hibbert", "Buddy Hield", "George Hill", "Jordan Hill", "Solomon Hill", "Darrun Hilliard", "Jrue Holiday", "Justin Holiday", "Rondae Hollis-Jefferson", "Richaun Holmes", "Rodney Hood", "Al Horford", "Dwight Howard", "Josh Huestis", "Kris Humphries", "Serge Ibaka", "Andre Iguodala", "Ersan Ilyasova", "Joe Ingles", "Brandon Ingram", "Kyrie Irving", "Demetrius Jackson", "Reggie Jackson", "LeBron James", "Al Jefferson", "Richard Jefferson", "Brandon Jennings", "Jonas Jerebko", "Amir Johnson", "Brice Johnson", "James Johnson", "Joe Johnson", "Stanley Johnson", "Tyler Johnson", "Wesley Johnson", "Nikola Jokic",  "Damian Jones", "James Jones", "DeAndre Jordan", "Cory Joseph", "Frank Kaminsky", "Enes Kanter", "Ryan Kelly", "Michael Kidd-Gilchrist", "Sean Kilpatrick", "Brandon Knight", "Kyle Korver", "Kosta Koufos", "Mindaugas Kuzminskas", "Zach LaVine", "Skal Labissiere", "Jeremy Lamb", "Joffrey Lauvergne", "Ty Lawson", "Jake Layman", "Caris LeVert", "Courtney Lee", "David Lee", "Alex Len", "Kawhi Leonard", "Meyers Leonard", "Jon Leuer", "DeAndre Liggins", "Damian Lillard", "Jeremy Lin", "Shaun Livingston", "Shawn Long", "Kevon Looney", "Brook Lopez", "Robin Lopez", "Kevin Love", "Kyle Lowry", "Timothe Luwawu-Cabarrot", "Trey Lyles", "Shelvin Mack", "Ian Mahinmi", "Thon Maker", "Boban Marjanovic", "Jarell Martin", "Wesley Matthews", "Luc Mbah a Moute", "James Michael McAdoo", "Patrick McCaw", "Sheldon McClellan", "CJ McCollum", "T.J. McConnell", "Chris McCullough", "KJ McDaniels", "Doug McDermott", "JaVale McGee", "Rodney McGruder", "Ben McLemore", "Josh McRoberts", "Jodie Meeks", "Salah Mejri", "Jordan Mickey", "Khris Middleton", "CJ Miles", "Mike Miller", "Patty Mills", "Paul Millsap", "Nikola Mirotic", "Greg Monroe", "E'Twaun Moore", "Marcus Morris", "Markieff Morris", "Anthony Morrow", "Donatas Motiejunas", "Timofey Mozgov", "Emmanuel Mudiay", "Shabazz Muhammad", "Dejounte Murray", "Jamal Murray", "Mike Muscala", "Nene", "Larry Nance Jr.", "Shabazz Napier", "Maurice Ndour", "Jameer Nelson", "Raul Neto", "Georges Niang", "Andrew Nicholson", "Joakim Noah", "Nerlens Noel", "Lucas Nogueira", "Dirk Nowitzki", "Jusuf Nurkic", "David Nwaba", "Johnny O'Bryant III", "Kyle O'Quinn", "Daniel Ochefu", "Jahlil Okafor", "Victor Oladipo", "Kelly Olynyk", "Chinanu Onuaku", "Kelly Oubre Jr.", "Zaza Pachulia", "Georgios Papagiannis", "Jabari Parker", "Tony Parker", "Chandler Parsons", "Patrick Patterson", "Chris Paul", "Adreian Payne", "Cameron Payne", "Elfrid Payton", "Nikola Pekovic", "Paul Pierce", "Marshall Plumlee", "Mason Plumlee", "Miles Plumlee", "Jakob Poeltl", "Quincy Pondexter", "Otto Porter Jr.", "Bobby Portis", "Kristaps Porzingis", "Dwight Powell", "Norman Powell", "Ronnie Price", "Taurean Prince", "Tim Quarterman", "Chasson Randle", "Julius Randle", "Zach Randolph", "JJ Redick", "Willie Reed", "Josh Richardson", "Malachi Richardson", "Austin Rivers", "Andre Roberson", "Brian Roberts", "Thomas Robinson", "Glenn Robinson III", "Sergio Rodriguez", "Rajon Rondo", "Derrick Rose", "Terrence Ross", "Terry Rozier", "Ricky Rubio", "Damjan Rudez", "Brandon Rush", "D'Angelo Russell", "Domantas Sabonis", "Dario Saric", "Tomas Satoransky", "Dennis Schroder", "Thabo Sefolosha", "Wayne Selden", "Kevin Seraphin", "Ramon Sessions", "Iman Shumpert", "Pascal Siakam", "Ben Simmons", "Jonathon Simmons", "Kyle Singler", "Marcus Smart", "Ish Smith", "JR Smith", "Jason Smith", "Tony Snell", "Marreese Speights", "Tiago Splitter", "Nik Stauskas", "Lance Stephenson", "Diamond Stone", "Edy Tavares", "Isaiah Taylor", "Jeff Teague", "Mirza Teletovic", "Garrett Temple", "Jason Terry", "Isaiah Thomas", "Lance Thomas", "Klay Thompson", "Tristan Thompson", "Axel Toupane", "Karl-Anthony Towns", "PJ Tucker", "Evan Turner", "Myles Turner", "Beno Udrih", "Tyler Ulis", "Jarrod Uthoff", "Jonas Valanciunas", "Denzel Valentine", "Fred VanVleet", "Rashad Vaughn", "Noah Vonleh", "Nikola Vucevic", "Sasha Vujacic", "Dwyane Wade", "Dion Waiters", "Kemba Walker", "John Wall", "TJ Warren", "C.J. Watson", "Briante Weber", "David West", "Russell Westbrook", "Okaro White", "Isaiah Whitehead", "Hassan Whiteside", "Andrew Wiggins", "Alan Williams", "Deron Williams", "Derrick Williams", "Lou Williams", "Marvin Williams", "Troy Williams", "Kyle Wiltjer", "Justise Winslow", "Jeff Withey", "Christian Wood", "Metta World Peace", "Brandan Wright", "Delon Wright", "James Young", "Joe Young", "Nick Young", "Thaddeus Young", "Cody Zeller", "Tyler Zeller", "Stephen Zimmerman", "Paul Zipser", "Ivica Zubac"];

        
    //             for (i = 0; i < playerArray.length; i++) { 

    //                 //First API call
    //                 const response = NBA.findPlayer(playerArray[i]);
    //                  console.log(response)

                    
    //                 var playerID = response.playerId
    //                 playerIDArray.push(playerID);
    //             }

    //     function(callback) {

    //         for (i = 0; i < playerIDArray.length; i++) { 

    //             //Second API Call
    //             NBA.stats.playerInfo({PlayerID: playerIDArray[i]}).then(info => { 

    //                 ///Testing if it worked
    //                 console.log(info)

    //                 });                    
                    

    //             })
    //         };

};
module.exports = nbaBulkGetter;



// broken responses = "DeAndre Bembry", "Patricio Garino", "Marcus Georges-Hunt", "Dahntay Jones", "Tyus Jones",  "Derrick Jones Jr.",
//"Elijah Millsap", "Gary Payton II", "Alex Poythress", 
