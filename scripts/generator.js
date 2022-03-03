

export function generateData(nbRows, nbColums) {
    let dataset = []
    for (let i = 0; i < nbRows; i++){
        for (let j = 0; j < nbColums; j++){
            dataset.push(j)
        }
    }
    return JSON.parse(JSON.stringify(dataset))
}