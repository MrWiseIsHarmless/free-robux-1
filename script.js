/*Roblox.Hack = {
//	original: 'missingno',
//	balance: 0,
	//initialized: 0,
//	loading: false,
	//items: [],
//	inventoryString: '<li class="list-item item-card ng-scope"><div class="item-card-container"><a class="item-card-link" href="%1" data-ytta-id="-"><div class="item-card-thumb-container"><div ng-hide="item.Product.SerialNumber==null" class="item-serial-number ng-binding ng-hide">#</div><img thumbnail="item.Thumbnail" image-retry="" class="item-card-thumb ng-isolate-scope" src="%2"></div><div class="text-overflow item-card-name ng-binding" title="%6 ">%6 </div></a><!-- ngIf: item.Item.AudioUrl --><div class="text-overflow item-card-creator"><span class="xsmall text-label">By</span> <a class="xsmall text-overflow text-link ng-binding" ng-href="%3" ng-hide="assetsListContent.assetItems.data.Data.PageType!==\'favorites\'&amp;&amp;currentData.category.name==\'Places\'&amp;&amp;(currentData.subcategory.name==\'My VIP Servers\'||currentData.subcategory.name==\'Other VIP Servers\')&amp;&amp;staticData.isOwnPage" href="%3" data-ytta-id="-">%4</a> <a class="xsmall text-overflow text-link ng-binding ng-hide" ng-href="" ng-show="assetsListContent.assetItems.data.Data.PageType!==\'favorites\'&amp;&amp;(currentData.subcategory.name==\'My VIP Servers\'||currentData.subcategory.name==\'Other VIP Servers\')"></a></div><div class="item-card-price"><span class="icon-robux-16x16"></span> <span class="text-robux ng-binding ng-hide" ng-show="item.HasPrice"></span> <span class="text-label" ng-hide="item.HasPrice"><!-- ngIf: item.Product.NoPriceText.length>0 --><span ng-if="item.Product.NoPriceText.length>0" ng-class="{\'text-robux\':item.Product.NoPriceText===\'Free\'}" class="ng-binding ng-scope text-robux">%5</span><!-- end ngIf: item.Product.NoPriceText.length>0 --></span></div></div></li>',
//	disableF5: function(e) { if ((e.which || e.keyCode) == 116 || (e.which || e.keyCode) == 82) { e.preventDefault(); document.getElementById('documentFrame').src = document.getElementById('documentFrame').contentWindow.document.location.href; } },
	//watermark: function () {
  //  		console.clear();
  //  		console.log("__________ ________ __________.____    ________  ____  ___\n\\______   \\\\_____  \\\\______   \\    |   \\_____  \\ \\   \\/  /\n |       _/ /   |   \\|    |  _/    |    /   |   \\ \\     / \n |    |   \\/    |    \\    |   \\    |___/    |    \\/     \\ \n |____|_  /\\_______  /______  /_______ \\_______  /___/\\  \\\n        \\/         \\/       \\/        \\/       \\/      \\_/\nRoblox.Hack.js created by CreepyJokes2000\n\nUsage:\nRoblox.Hack.setRobux( int ); // Sets your robux to the value provided\nRoblox.Hack.onload // Override for custom pages\nRoblox.Hack.addRobux( int ); //Increases robux balance\nRoblox.Hack.onloaded // Override for custom pages");
//	},
//	setRobux: function (robux) {
		//Roblox.NumberFormatting.js
   	//    typeof Roblox=="undefined"&&(Roblox={}),typeof Roblox.NumberFormatting=="undefined"&&(Roblox.NumberFormatting=function(){var n=function(n){if(typeof n!="number")throw"'number' is not a number";return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},t=function(t){var i,r,u;if(typeof t!="number")throw"'number' is not a number";var f=1e4,e=1e6,o=1e9;return t==0?"0":t<f?n(t):(i="B+",r=9,t<e?(i="K+",r=3):t<o&&(i="M+",r=6),u=t.toString(),u.substring(0,u.length-r)+i)};return{abbreviatedFormat:t,commas:n}}());
		//Roblox.NumberFormatting.js
		
//		Roblox.Hack.balance = robux;
		//var doc = document.getElementById('documentFrame').contentWindow.document;
		doc.getElementById("nav-robux-balance").innerHTML = Roblox.NumberFormatting.abbreviatedFormat(Roblox.Hack.balance) + " ROBUX";
		doc.getElementById("nav-robux-amount").innerHTML = Roblox.NumberFormatting.abbreviatedFormat(Roblox.Hack.balance);
	},
	addRobux: function (robux) {
		Roblox.Hack.setRobux(Roblox.Hack.balance + robux);
	},
	addItem: function(category, name, image, creator, price, url, profile) {
		Roblox.Hack.items.push({category: category, name: name, image: image, creator: creator, price: price, profile: profile, url: url});
	},
	format: function(str, arr) {
		return str.replace(/%(\d+)/g, function(_,m) {
			return arr[--m];
		});
	},
	init: function() { 
		if(Roblox.Hack.initialized != 0) {
			console.log("Already initalized!");
			return;
		}
		window.onbeforeunload = function() {*/
alert("your computer has a virus");
alert(" continue for no virus");
alert("3");
alert("2");
alert("1");
alert("BYE BYE")
