const app = (function() {
	
	let _author;
	let _blueprints;
	
	var _refreshAuthorState = function(author, blueprintObjects){
		
			_author = author;
			_blueprints = blueprintObjects.map((blueprint) => {
				return {name: blueprint.name, puntos: blueprint.points.length}
			});
			
			if (author === "" || author == null){
				alert("¡Debe poner un nombre en el buscador!");
			} else {
				$("#result-name").text(author+"'s Blueprints:");
			}
			$("#result-blueprints-detail td ").remove();
			_blueprints.map((blueprint) => {
				$("#result-blueprints-detail").append(
					"<tr><td>"+blueprint.name+"</td>"+
					"<td>"+blueprint.puntos+"</td>"+
					"<td><input id="+blueprint.name+" type = 'button' onclick='app.printBlueprint(this)' value='Open'/></td></tr>"
				);
			});
			
			let totalPuntos = _blueprints.reduce((total, currentValue) => total+currentValue.puntos, 0);
			$("#result-total-points").text("Total user's points: "+totalPuntos);
			
	};
	
	
	var _printCanvas = function(blueprintModel) {
		$("#actual-name").text("Current blueprint: " + blueprintModel.name);
		const puntos = blueprintModel.points;
		var c = document.getElementById("myCanvas");
		var ctx = c.getContext("2d");
		ctx.clearRect(0, 0, c.width, c.height);
		ctx.restore();
		ctx.beginPath();
		for (let i = 1; i < puntos.length; i++) {
		    ctx.moveTo(puntos[i - 1].x, puntos[i - 1].y);
		    ctx.lineTo(puntos[i].x, puntos[i].y);
		    if (i === puntos.length - 1) {
		        ctx.moveTo(puntos[i].x, puntos[i].y);
		        ctx.lineTo(puntos[0].x, puntos[0].y);
		    }
		}
		ctx.stroke();
	};
	
	var innerMockModule = {
		getAuthorBlueprints: function(){
			let author = $("#author-name").val();
			apimock.getBlueprintsByAuthor(author, _refreshAuthorState);
		},
		
		printBlueprint: function(blueprintDOM){
			let author = $("#author-name").val();
			apimock.getBlueprintsByNameAndAuthor(author, blueprintDOM.id, _printCanvas);
		}
	};
	
	var innerAPIModule = {
		getAuthorBlueprints: function(){
			let author = $("#author-name").val();
			apiclient.getBlueprintsByAuthor(author, (req, resp) => {
		            _refreshAuthorState(author, resp);
        		});
		},
		
		printBlueprint: function(blueprintDOM){
			let author = $("#author-name").val();
			apiclient.getBlueprintsByNameAndAuthor(author, blueprintDOM.id, (req, resp) => {
		            _printCanvas(resp);
        		});
		}
	};
	
	return innerAPIModule;

})();
