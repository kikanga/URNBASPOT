var mongoose = require('mongoose');

var playerSchema = new mongoose.Schema({
    PlayerID: {
        type: Number,
        required: true,
        unique: true
    },
    image: {
        type: String,
    },    
    name: {
        type: String,
        required: true,
        unique: true
    },
    school: {
        type: String        
    },
    height: {
        type: String,
        required: true        
    },
    weight: {
        type: String,
        required: true        
    },  
    seasonExp: {
        type: String,
        required: true        
    },  
    jersey: {
        type: String,
        required: true        
    },
    position: {
        type: String,
        required: true        
    },
    teamCity: {
        type: String,
        required: true        
    },     
    teamName: {
        type: String,
        required: true        
    },
    teamId: {
        type: Number,
        required: true        
    },    
    draftYear: {
        type: String,
        required: true         
    },    
    draftRound: {
        type: String,
        required: true        
    },
    draftNumber: {
        type: String,
        required: true        
    }
    ,
    currentPPG: {
        type: Number,
        required: true        
    },            
    currentAPG: {
        type: Number,
        required: true        
    },
    currentRPG: {
        type: Number,
        required: true        
    },
    currentSPG: {
        type: Number
    },
    currentBPG: {
        type: Number
    },
    current3pP: {
        type: Number
    },
    current3pM: {
        type: Number
    },        
    current3pA: {
        type: Number
    },
    currentfgP: {
        type: Number
    },
    currentfgM: {
        type: Number
    },        
    currentfgA: {
        type: Number
    },    
    currentORPG: {
        type: Number,       
    },
    currentDRPG: {
        type: Number
    },
    currentMPG: {
        type: Number,       
    },
    currentSeason: {
        type: String,               
    },
    currentGP: {
        type: Number,               
    },
    currentPlusMinus: {
        type: Number
    }             
});

var Player =  mongoose.model('Player', playerSchema);

module.exports = Player;