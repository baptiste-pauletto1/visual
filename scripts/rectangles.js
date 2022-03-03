
export function createRectangles(data) {
    const rectangles = d3.select("#playground")
        .selectAll('rect')
        .data(data)
        .enter()
}