var api_key = "&apiKey=9c17a4c5c0124442ad6ccd90f5e48176";
var article_url = "https://newsapi.org/v1/articles?source=";
var sources_url = "https://newsapi.org/v1/sources?language=en&category=";

//--------------------- SOURCES API SELECTION ----------------------
var sourcesIndex = [];
var categories = ["business", "entertainment", "gaming", "general", "music", "science-and-nature", "sport", "technology"];
var language = ["en", "de", "fr"];
var country = ["au", "de", "gb", "in", "it", "us"];

var schedule = later.parse.recur().on(0).minute();
var hourlyCache = new ScheduledTask(schedule, apicaching);

import {Meteor} from 'meteor/meteor';
import {Cache} from '../imports/api/cache.js';
import {Sources} from '../imports/api/sources.js';
import {HTTP} from 'meteor/http';	

function apicaching(){
	for(var i = 0 ; i < categories.length; i++){
		try {
		    var response = HTTP.get(sources_url + categories[i] + api_key).data;
		    response.category = categories[i];

		    //Log down the sources data called from the API'
		    var dbSource = Sources.findOne({category: categories[i]});
		   
		    if(dbSource === undefined){
		    	Sources.insert(response.sources);
		    }
		    

		    for(var j = 0; j < response.sources.length; j++){
		     	try{
		      		var articles = HTTP.get(article_url + response.sources[j].id + api_key).data;
			        articles.category = response.sources[j].category;
			        
			        var dbCache = Cache.findOne({source: articles.source});
			        if(dbCache === undefined){
			       		console.log("INSERT: " + j + " " + articles.category + " " + articles.source);
			          	Cache.insert(articles);
			        }else{
			            console.log("UPDATE: " + j + " " + articles.category + " " + articles.source);
			          	Cache.update(dbCache, articles);
			        }
		        }catch(error){
		        		console.log(error);
		        	}
		        }

		} catch (error) {
		    console.log(error);
		}		
	}
}

hourlyCache.start();

