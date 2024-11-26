function getSquare(temp){
    return temp*temp;
}

function area(radius){
    let sq = getSquare(radius);
    let ans = Math.PI * sq;
    return ans;
}

module.exports.area = area;