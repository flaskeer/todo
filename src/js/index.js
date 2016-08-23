require('dotenv').config();
var md5 = require('md5');
var url = `https://gist.githubusercontent.com/ChrisChinchilla/29486e8ce367f426dfe6b15dbcc3fa54/raw/3ea92af51ce3749bb5983c1cb0359883592daef6/Marvel%2520Electron%2520Data`;

var characterHTML = (character) => `
	<div class="character">
		<h2>${character.name}</h2>
		<img src="${character.thumbnail.path}.${character.thumbnail.extension}" />
	</div>
`;

fetch(url)
	.then(resp => resp.json())
	.then(json => json.data.results)
	.then(characters => {
		var html = characters.map(characterHTML).join('');
		var characterList = document.getElementById('character_list');
		characterList.innerHTML = html;
		new Notification(document.title,{
			body : 'super heros loaded'
		});
	}).catch((error) => {
		console.error(error);
	});

