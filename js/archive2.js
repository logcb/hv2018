$(document).ready(function() 
{ $("#archive").tablesorter(); 
}); 

new Pjax({
    selectors: [".project-container", ".slides-container"]
});