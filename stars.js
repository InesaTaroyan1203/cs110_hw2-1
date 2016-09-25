function createSpaces(x,str){
	if(x==0){
		return str;
	}
	str+=" ";
	return createSpaces(--x,str)
}

function createStars(x,str){
	if(x==0){
		return str;
	}
	str+="*";
	return createStars(--x,str)
}

function draw(spaces,stars){
	if(spaces < 0){
		return 0;
	}
	console.log(createSpaces(spaces,"")+createStars(stars,""));
	draw(spaces-1,stars+2);
}

function triangleStars(x){
	draw(x-1,1);
}

triangleStars(5);