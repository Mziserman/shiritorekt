class Game {

	constructor() {
		this.alpha = 'abcdefghijklmnopqrstuvwxyz'
		this.players = [$('#player1'), $('#player2')]
		$('.score').html('150')
		this.defineTurn()
	}

	defineTurn(actualPlayer = null) {

		if( actualPlayer === null ) {
			this.playing(0)
		} 
		else if( actualPlayer == 1 ) {
			this.playing(1)
		}
		else {
			this.playing(0)
		}

	}

	playing(playerNumber) {

		var player = this.players[playerNumber]
		this.countdown(player)

	}

	countdown(player) {
		var count =	player.find('.countdown')
		count.html('10')
		var countdown = setInterval(() => {
			var actualCount = count.html() - 1
			count.html(actualCount)

			if( actualCount == -1 ) {
				$('.countdown').html('')
				this.changePlayer(actualCount+1, player.attr('data-player'))
				clearInterval(countdown)
			}
			$(window).keyup((e) => {
				console.log(e.keyCode)
				if(e.keyCode == 13){
					$('.countdown').html('')
					this.changePlayer(actualCount+1, player.attr('data-player'))
					clearInterval(countdown)
				}
			})
		}, 1000)

	}

	changePlayer(time, player, word = null) {

		this.changeScore(time, player)
		this.defineTurn(player)

	}

	changeScore(score, player) {
		let currentScore = $('section[data-player='+player+'] .score').html()
		$('section[data-player='+player+'] .score').html(currentScore - (10 - score))
	}

}

