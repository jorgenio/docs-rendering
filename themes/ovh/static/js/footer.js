(function($){var foot={initialize:function(){foot.analytics.piwik.initialize();foot.analytics.piwik.push()},analytics:{piwik:{track:function(elem){function SendPk(elem){var ValueOfTrack=$(elem).attr("name");window._paq.push(["trackPageView",ValueOfTrack])}if(Browser.firefox||Browser.safari){setTimeout(SendPk,50,elem)}else{SendPk(elem)}},initialize:function(){window._paq=window._paq||[];var pageName=$("pik_foot").hasClass("toHide")?true:false;var getUrlPathname=window.location.pathname.replace(/\//g,"::")+"-video";jQuery(".videoGuide").on("click",function(){window._paq.push(["trackPageView",getUrlPathname])});var piwikUrl=$("#piwikAnalytics-piwik-url").val();var pageNotUrl=$("#piwikAnalytics-page-not-url").val();var xmlPageName=$("#piwikAnalytics-page-name").val();var customVar=$("#piwikAnalytics-customVar").val();var siteId=$("#piwikAnalytics-site-id").val();var goal=$("#piwikAnalytics-goal").val();var linkTracking=$("#piwikAnalytics-link-tracking").val();var family=$("#piwikAnalytics-family").val();var domain=$("#piwikAnalytics-domain").val();var u=(("https:"==document.location.protocol)?"https":"http")+"://webanalytics2.ovh.net/";window._paq.push(["setTrackerUrl",u+"piwik.php"]);window._paq.push(["setSiteId",siteId]);window._paq.push(["setCookieDomain","*"+domain+"/"]);var customVarInit=["setCustomVariable"];var customVarArray=[];$.each(customVar.split(","),function(i,slice){customVarArray.push(slice.replace(/[']+/g,""))});var customVars=customVarInit.concat(customVarArray);if(family=="dedicated"){if(customVar){window._paq.push(customVars)}window._paq.push(["trackPageView"])}else{if(xmlPageName){if(customVar){window._paq.push(customVars)}window._paq.push(["setDocumentTitle",xmlPageName]);pageName=true;window._paq.push(["trackPageView"])}else{if(customVar){window._paq.push(customVars);window._paq.push(["trackPageView"]);pageName=false}else{if(!pageName){$("#Piwik_foot").addClass("toHide");$("#Piwik_foot").removeClass("toDisplay");window._paq.push(["trackPageView"])}else{pageName=false;window._paq.push(["trackPageView"])}}}}if(goal){window._paq.push(["trackGoal",goal])}window._paq.push(["enableLinkTracking"]);if(pageName){$("#pik_foot").addClass("toHide");$("#pik_foot").removeClass("toDisplay")}},push:function(){var _paq=window._paq;var u=(("https:"==document.location.protocol)?"https":"http")+"://webanalytics2.ovh.net/";var d=document,g=d.createElement("script"),s=d.getElementsByTagName("script")[0];g.type="text/javascript";g.defer=true;g.async=true;g.src=u+"piwik.js";s.parentNode.insertBefore(g,s)}},at:{initialize:function(){var getUrlToTransform=window.location.pathname.substr(7,window.location.pathname.length);var urlTransformed=getUrlToTransform.replace(/\//g,"::");if(urlTransformed.lastIndexOf("::")==urlTransformed.length-2){urlTransformed=urlTransformed.substr(0,urlTransformed.length-2)}if(urlTransformed==""){urlTransformed="Homepage"}window.ATInternet={onTrackerLoad:function(){window.tag=new window.ATInternet.Tracker.Tag();if(sessionStorage.getItem("user")!=null){var getNIC=sessionStorage.getItem("user");tag.identifiedVisitor.unset();tag.identifiedVisitor.set({id:getNIC})}tag.page.set({name:urlTransformed});tag.customVars.set({site:{1:"[FR]",2:"[France]"}});tag.dispatch()}};(function(){var at=document.createElement("script");at.type="text/javascript";at.async=true;at.src="https://www.jorgenio.com/fr/js/analytics/smarttag-docs.js";(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]||document.getElementsByTagName("script")[0].parentNode).insertBefore(at,null)})()}}}};window.globalComponentFooter=foot;$(document).ready(function(){foot.initialize()})})(jQuery);
