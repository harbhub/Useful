<html>
<body>

blah blah blah


<div id="fart">

</div>






<script id="template-fart" "text/x-handlebars-template">
    {{#each boogers}}
        {{this}}<br>
    {{/each}}
</script>



<script src="/js/jquery.shit"></script>
<script src=/js/handlebars.js"></script>



<script>

    var data = [ "foo", "fi", "fo", "fum" ];


    var source = $("#template-fart").html();
    var template = Handlebars.compile(source);
    var html = template({ boogers: data });
    $("#fart").html(html);
 </script>
 
 
 
 /*******************************************************/
 
 
 /*   fart.handlebars  */

{{#each boogers}}
    {{this}}
{{/each}}

/* end  template */



Compile on server:

$ handlebars fart.handlebars -f /path/to/js/fart.js






Then in HTML:




<html>
<body>

blah blah blah


<div id="fart">

</div>





<script src="/js/jquery.shit"></script>
<script src=/js/handlebars.js"></script>
<script src="/js/fart.js"></script>       <------------- NOTICE!!!!



<script>

    var data = [ "foo", "fi", "fo", "fum" ];

    var template = Handlebars.templates['fart'];
    var html = template({ boogers: data });
    $("#fart").html(html);
 </script>
