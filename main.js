

const width = 800
const height = 550
const margin = {
    top: 60,
    bottom: 40,
    left: 51, 
    right: 10
}

const svg = d3.select("#chart").append("svg").attr("width", width).attr("height", height)
const elementGroup = svg.append("g").attr("transform", `translate(${margin.left}, ${margin.top})`)
const axisGroup = svg.append("g")
const xAxisGroup = axisGroup.append("g").attr("transform", `translate(${margin.left}, ${height - margin.bottom})`)
const yAxisGroup = axisGroup.append("g").attr("transform", `translate(${margin.left}, ${margin.top})`)

// escalas:
const y = d3.scaleBand().range([height - margin.top - margin.bottom, 0]).padding(0.1)
const x = d3.scaleLinear().range([0, width - margin.left - margin.right])

const xAxis = d3.axisBottom().scale(x)
const yAxis = d3.axisLeft().scale(y)

let data2




d3.csv("data.csv").then(data => {
    console.log(data)
     data.map(d => {
       
        d.year = +d.year

       
     })
     data2 = d3.nest()
     .key(d => d.winner)
        .entries(data)
        
    




   

   

    x.domain([0, d3.max(data2.map(d => d.values.length))])
    y.domain(data2.map(d => d.key))

    xAxisGroup.call(xAxis)
    yAxisGroup.call(yAxis)
    
    
    let elements = elementGroup.selectAll("rect").data(data2)
             elements.enter()
                
            .append("rect")
            .attr("x", 0)
            .attr("y", (d, i, a) => y(d.key))
            .attr("width", d => x(d.values.length))
            .attr("height", y.bandwidth())
            .attr("class", d => d.key)
    
           
    
    
                
    
             
    
    
    
        
    
    
    

    
     
            
    
})

   

    









// CHART END