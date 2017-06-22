var express = require("express");
var mongojs = require("mongojs");
var mongoose = require('mongoose');
var Player = require('./../models/Player.js');
// var async = require('async')


const NBA = require("nba");

module.exports = function(app) {

//Step 1 required for all step 2 processes
////////////////////////////////////////////////////////////////////////////////////
const searchName = "Ivica Zubac"
const curry = NBA.findPlayer(searchName);

//Step 2 for getting generic player info
////////////////////////////////////////////////////////////////////////////////////
console.log(curry);
NBA.stats.playerInfo({ PlayerID: curry.playerId }).then(info => { 
                    
                    // console.log(info.commonPlayerInfo[0].displayFirstLast)
                    
                    var result = {};
                    // Add the text and href of every link, and save them as properties of the result object
                    result.PlayerID = info.playerHeadlineStats[0].playerId;
                    result.name = info.commonPlayerInfo[0].displayFirstLast;
                    result.school= info.commonPlayerInfo[0].school
                    result.height= info.commonPlayerInfo[0].height
                    result.weight= info.commonPlayerInfo[0].weight
                    result.seasonExp= info.commonPlayerInfo[0].seasonExp
                    result.jersey= info.commonPlayerInfo[0].jersey
                    result.position= info.commonPlayerInfo[0].position
                    result.teamCity= info.commonPlayerInfo[0].teamCity                    
                    result.teamName= info.commonPlayerInfo[0].teamName
                    result.teamId= info.commonPlayerInfo[0].teamId
                    result.draftYear= info.commonPlayerInfo[0].draftYear
                    result.draftRound= info.commonPlayerInfo[0].draftRound
                    result.draftNumber= info.commonPlayerInfo[0].draftNumber
                    result.currentPPG= info.playerHeadlineStats[0].pts
                    result.currentAPG= info.playerHeadlineStats[0].ast
                    result.currentRPG= info.playerHeadlineStats[0].reb
                    var newPlayer = new Player (result);
                    newPlayer.save(function(err, doc) {
                        // console.log(doc);
                        // Log any errors
                        if (err) {
                        console.log(err);
                        }
                        // Or log the doc
                        else {
                        console.log("success 1");
                        }                        
                    });                    
                    

})



//Step 2 for getting detailed stats from last season
//////////////////////////////////////////////////////////////////////////////////////////
setTimeout(function(){

NBA.stats.playerSplits({ PlayerID: curry.playerId }).then(info => { 
                    
                        console.log("success 2")
                    // console.log(info.commonPlayerInfo[0].displayFirstLast)
                    
                    var result = {};


            Player.findOneAndUpdate({name: searchName }, {$set: {
                currentSPG: info.overallPlayerDashboard[0].stl, 
                currentBPG : info.overallPlayerDashboard[0].blk,
                current3pP : info.overallPlayerDashboard[0].fg3Pct,
                current3pM : info.overallPlayerDashboard[0].fG3M,
                current3pA : info.overallPlayerDashboard[0].fG3A,
                currentfgP : info.overallPlayerDashboard[0].fgPct,
                currentfgM : info.overallPlayerDashboard[0].fgm,
                currentfgA : info.overallPlayerDashboard[0].fga,
                currentftP : info.overallPlayerDashboard[0].ftPct,
                currentftM : info.overallPlayerDashboard[0].ftm,
                currentftA : info.overallPlayerDashboard[0].fta,
                currentORPG : info.overallPlayerDashboard[0].oreb,
                currentDRPG : info.overallPlayerDashboard[0].dreb,
                currentMPG : info.overallPlayerDashboard[0].min,
                currentSeason : info.overallPlayerDashboard[0].groupValue, 
                currentGP: info.overallPlayerDashboard[0].gp,
                currentPlusMinus: info.overallPlayerDashboard[0].plusMinus                                              
                 }})
                .exec( function(err, doc)  {
                    if (err) {
                        console.log(err);
                    } 
                });





});

}, 1500)

//Step 2 for getting image link
//////////////////////////////////////////////////////////////////////////////////////////

    NBA.stats.playerInfo({ PlayerID: curry.playerId }).then(info => {
        var result = {};
        result.PlayerID = info.playerHeadlineStats[0].playerId;
        Player.findOneAndUpdate({name: searchName }, {$set: {
                    image: "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/" + result.PlayerID + ".png",                                              
                 }})
                .exec( function(err, doc)  {
                    if (err) {
                        console.log(err);
                    } 
                });







    });

};
// broken responses = "DeAndre Bembry", "Patricio Garino", "Marcus Georges-Hunt", "Dahntay Jones", "Tyus Jones",  "Derrick Jones Jr.",
//"Elijah Millsap", "Gary Payton II", "Alex Poythress", "Chris Bosh", "Nikola Pekovic",  "Quincy Pondexter", "Ben Simmons"


    



