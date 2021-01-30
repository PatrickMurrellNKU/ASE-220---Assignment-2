const jsonBlobURL='https://jsonblob.com/api/jsonBlob/4931b258-62ad-11eb-9a1b-2738f89fbd14';

function findGetParameter(parameterName){
	var result = null,
	tmp = [];
	location.search
	.substr(1)
	.split("&")
	.forEach(function (item) {
	tmp = item.split("=");
	if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
	});
	return result;
}