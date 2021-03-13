var apimock = (function () {

    const mockdata = [];

    mockdata["JhonConnor"] = [
        {
            author: "JhonConnor",
            name: "house",
            points: [
                {
                    x: 10,
                    y: 20
                },
                {
                    x: 15,
                    y: 25
                },
                {
                    x: 45,
                    y: 25
                }
            ]
        },
        {
            author: "JhonConnor",
            name: "bike",
            points: [
                {
                    x: 30,
                    y: 35
                },
                {
                    x: 40,
                    y: 45
                }
            ]
        }
    ]
    mockdata['LexLuthor'] = [
        {
            author: 'LexLuthor',
            name: 'kryptonite',
            points: [
                {
                    x: 60,
                    y: 65
                },
                {
                    x: 70,
                    y: 75
                }
            ]
        }
    ]
    mockdata['author1'] = [
        {
            author: 'author1',
            name: 'prueba2',
            points: [
                {
                    x: 50,
                    y: 65
                },
                {
                    x: 50,
                    y: 55
                },
                {
                    x: 80,
                    y: 85
                },
            ]
        }
    ]
    mockdata['author2'] = [
        {
            author: 'author1',
            name: 'valorant',
            points: [
                {
                    x: 10,
                    y: 95
                },
                {
                    x: 70,
                    y: 45
                },
                {
                    x: 30,
                    y: 5
                },
            ]
        }
    ]
    mockdata['author3'] = [
        {
            author: 'author1',
            name: 'lolcito',
            points: [
                {
                    x: 84,
                    y: 96
                },
                {
                    x: 10,
                    y: 20
                },
                {
                    x: 93,
                    y: 48
                },
                {
                    x: 80,
                    y: 80
                },
                {
                    x: 39,
                    y: 84
                },
            ]
        }
    ]
    mockdata['Alfa'] = [
    	{
    		author: 'Alfa',
    		name: 'casa',
    		points: [
    			{x:45, y:35},
    			{x:30, y:20},
    			{x:45, y:20},
    			{x:45, y:35},
    			{x:30, y:35},
    			{x:30, y:20},
    			{x:40, y:12},
    			{x:45, y:20},
    		] 
    	}
    ]

    return {
        getBlueprintsByAuthor: function (author, callback) {
            callback(author, mockdata[author]);
        },

        getBlueprintsByNameAndAuthor: function (author, blueprintName, callback) {
            let blueprintModel = mockdata[author].find((blueprint) => blueprintName===blueprint.name);
            callback(blueprintModel);
        }
    }

})();
