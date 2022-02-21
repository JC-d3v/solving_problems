function segmentos(x, seg) {
    var temp = [];
    var max = 0;
    var i = 0;
    for (i = 0; i < x; i++) {
        temp.push(seg[i]);
    }
    max = (Math.min.apply(Math, temp));
    for (var j = i; j < seg.length; j++) {
        temp.shift();
        temp.push(seg[j]);
        if (max < Math.min.apply(Math, temp)) {
            max = Math.min.apply(Math, temp);
        }
    }
    console.log(max); //c1,c2,c3,c4
}
segmentos(2, [8, 2, 4, 6]);
segmentos(1, [1, 2, 3, 1, 2]);
segmentos(3, [2, 5, 4, 6, 8]);
segmentos(3, [62, 64, 77, 75, 71, 60, 79, 75]);
