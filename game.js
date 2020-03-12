//<!--Van Joseph P. Cabuga-->
			var ai = {
				hp:100,
			};

			var human = {
				hp:100,
			};

			var coin = {
				ctr : 0,
			}

			function attack(){
				return Math.floor(Math.random()*5)+1;
			}

			function coin_toss(){
				return Math.floor(Math.random()*2)+1;
			}

			function start(){//attack
				if(coin.ctr == 0){//first turn
					first_turn();
				}

				else if(coin.ctr != 0){//next turns
					coin.ctr = coin_toss();
					if(coin.ctr == 1){//ai attacks
						var hum_attack = attack(), ai_attack = attack();
						human.hp -= hum_attack;
						ai.hp -= ai_attack;
						document.getElementById("box1").innerHTML = "Attack";
						document.getElementById("for_me").innerHTML ="Both sides attack! Challenger got "+ ai_attack+ " damage and Champion got "+ hum_attack + " damage! <br>" +document.getElementById("for_me").innerHTML;
					}						
					else{//ai defends!
						var def_atk = attack()-3;
						if(def_atk <= 3){
							ai.hp = ai.hp;
							document.getElementById("box1").innerHTML = "Defend";
							document.getElementById("for_me").innerHTML ="The Champion attacks but the Challenger's defense is too strong! <br>" +document.getElementById("for_me").innerHTML;
						}
						else{
							ai.hp -= def_atk ;
							document.getElementById("for_me").innerHTML ="Champion breaks through Challenger's defense! Ai got " + def_attack + "damage! <br>" +document.getElementById("for_me").innerHTML;						
						}

					}	

			health_update();
			finale();
			}}

			function health_update(){
				if(human.hp <= 0) human.hp = 0;
				if(ai.hp <= 0) ai.hp = 0;
				document.getElementById("demop").innerHTML = "Champion's Health: " + human.hp;
				document.getElementById("trial").innerHTML = "Challenger's Health: "  + ai.hp;
				document.getElementById("champh").value = human.hp;
				document.getElementById("aih").value = ai.hp;

			}
			function first_turn(){
					ai.hp = 100;
					human.hp=100;
					document.getElementById("start_text").innerHTML =" Attack";
					document.getElementById("start_text2").innerHTML ="Defend";
					coin.ctr = coin_toss();
					if(coin.ctr == 1){//ai attacks
						var ai_attack = attack();
						human.hp -= ai_attack;
						document.getElementById("box1").innerHTML = "Attack";
						document.getElementById("for_me").innerHTML = "Challenger got the first attack for " + ai_attack +" damage";
						
					}else{//human attacks
						var hum_attack = attack();
						ai.hp -= hum_attack;
						document.getElementById("for_me").innerHTML = "Champion got the first attack for " + hum_attack +" damage";
					
					}
					health_update();
				}

			function defend(){//another button
				if(coin.ctr == 0){//first turn
					first_turn();}
				else{//next turns
					coin.ctr = coin_toss();
					if(coin.ctr == 1){//ai attacks
						var def_atk = attack();
						if(def_atk <= 3){
							document.getElementById("box1").innerHTML = "Attack";
							document.getElementById("for_me").innerHTML ="Champion defended the attack and luckily got away undamaged!" + "<br>" +document.getElementById("for_me").innerHTML;
							human.hp = human.hp;//in case human guard is higher than ai attack, human hp - 0
						}else{
							def_atk = def_atk -3;
							human.hp -= def_atk;
							document.getElementById("box1").innerHTML = "Attack";
							document.getElementById("for_me").innerHTML ="Champion defended the attack and but still took " + def_atk + " damage"  + "<br>" +document.getElementById("for_me").innerHTML;
							}
					}
					else{//ai defends
							human.hp = human.hp;
							document.getElementById("box1").innerHTML = "Defend";
							document.getElementById("for_me").innerHTML ="Both sides chose to defend themselves!" + "<br>" + document.getElementById("for_me").innerHTML;
							}
				}
				health_update();
				finale();
				}

				function finale(){
				if(ai.hp <= 0 || human.hp <= 0){
					var choice;
						if(ai.hp <= 0 && human.hp <= 0){
							choice = prompt("What's this?! Folks we're looking at a TIE!!\n Do you want to play again? [Yes: 1])");
							}
						else if(ai.hp >= 0){
							choice = prompt("HA! The Champion still holds the title! \nDo you want to play again? [Yes: 1]");
						}
						else if(human.hp >= 0){
							choice = prompt("ALAS!! The Champion has been defeated at last by a new challenger! \nDo you want to reclaim your title?[Yes: 1]");
						}
						document.getElementById("for_me").innerHTML ="FATALITY!!" + "<br>" + document.getElementById("for_me").innerHTML;
						document.getElementById("start_text").innerHTML = "Play!";
						document.getElementById("start_text2").innerHTML = "Play!";
						document.getElementById("box1").innerHTML = "Rest";
						if(choice == 1){
							document.getElementById("for_me").innerHTML = "";
							human.hp = 100;
							ai.hp = 100;
							health_update();
							coin.ctr =0;
						}
				}}
