
d3.select("body")
    .append ("p")
        .text ("Click on Standing Cat to begin!")
d3.select("body")
    .append ("img")
    .attr("src","cat.jpg")
    .on("click",function()
        {d3.select("body")
        .append ("h2")
         .text ("Standing Cat once met another cat, who soon became his arch nemesis.") .on("mouseover",function()
                               
       {
    d3.select("body")
    .append("img")
    .attr("src","evilcat.jpg")
        
        })
         .on("mouseleave",function()
        {
            d3.select("img")
            .attr("src","evilcat.jpg")
            d3.select("p")
            .text("Standing Cat was his own worst enemy.")
            .fontsize(25px)
            .bold()
        })
        })
 
   
        
      
    
