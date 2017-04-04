function $ (id) {
	return document.querySelector(id);
}

function $$ (cls) {
	return document.querySelectorAll(cls);
}

var tabHeader = $('.tab-header');
var tabLis = $$('.tab-header > li');
var tabPannels = $$('.tab-container > li');

tabHeader.addEventListener('click', function(e){
	var clickNode = e.target;
	if (clickNode.tagName.toLowerCase() === 'li') 
	{
		for(var i = 0; i < tabLis.length; i++)
		{
			tabLis[i].classList.remove('active');
		}
		clickNode.classList.add('active');

		var index = [].indexOf.call(tabLis, clickNode);
		for(var i = 0; i < tabPannels.length; i++)
		{
			tabPannels[i].classList.remove('active');
		}
		tabPannels[index].classList.add('active');
	}
})