function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    }
}

function numPointsScored(playerName) {
    const game = gameObject();
    const players = {...game.home.players, ...game.away.players};
    return players[playerName].points;
}

function shoeSize(playerName) {
    const game = gameObject();
    const players = {...game.home.players, ...game.away.players};
    return players[playerName].shoe;
}

function teamColors(teamName) {
    const game = gameObject();
    if (game.home.teamName === teamName) {
        return game.home.colors;
    } else if (game.away.teamName === teamName) {
        return game.away.colors;
    }
}

function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
}

function playerNumbers(teamName) {
    const game = gameObject();
    const team = game.home.teamName === teamName ? game.home : game.away;
    const players = team.players;
    return Object.values(players).map(player => player.number);
}

function playerStats(playerName) {
    const game = gameObject();
    const players = {...game.home.players, ...game.away.players};
    return players[playerName];
}

function bigShoeRebounds() {
    const game = gameObject();
    const players = {...game.home.players, ...game.away.players};
    let largestShoeSize = 0;
    let rebounds = 0;
    
    for (const player in players) {
        if (players[player].shoe > largestShoeSize) {
            largestShoeSize = players[player].shoe;
            rebounds = players[player].rebounds;
        }
    }
    
    return rebounds;
}

function mostPointsScored() {
    const game = gameObject();
    const players = {...game.home.players, ...game.away.players};
    let maxPoints = 0;
    let topScorer = "";

    for (const player in players) {
        if (players[player].points > maxPoints) {
            maxPoints = players[player].points;
            topScorer = player;
        }
    }
    
    return topScorer;
}

function winningTeam() {
    const game = gameObject();
    const homeTeamPlayers = game.home.players;
    const awayTeamPlayers = game.away.players;

    const homePoints = Object.values(homeTeamPlayers).reduce((total, player) => total + player.points, 0);
    const awayPoints = Object.values(awayTeamPlayers).reduce((total, player) => total + player.points, 0);

    return homePoints > awayPoints ? game.home.teamName : game.away.teamName;
}

function playerWithLongestName() {
    const game = gameObject();
    const players = {...game.home.players, ...game.away.players};
    let longestName = "";

    for (const player in players) {
        if (player.length > longestName.length) {
            longestName = player;
        }
    }

    return longestName;
}

function doesLongNameStealATon() {
    const game = gameObject();
    const players = {...game.home.players, ...game.away.players};

    // Get the player with the longest name
    let longestName = playerWithLongestName();
    
    // Get the number of steals for the player with the longest name
    const longNamePlayerSteals = players[longestName].steals;

    // Find the maximum number of steals by any player
    const maxSteals = Math.max(...Object.values(players).map(player => player.steals));
    
    return longNamePlayerSteals === maxSteals;
}

