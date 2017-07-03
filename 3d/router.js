app.get('/load', function(req, res) {
	// var index = req.query.index;
	// var length = req.query.length;
	// var data = [];
	// for (var i = 0; i < length; i++)
	// {
	// 	data.push('新闻' + (parseInt(index) + i))
	// }

  var img = [
    'http://omph2coqc.bkt.clouddn.com/49445956_p3_master1200.jpg',
    'http://omph2coqc.bkt.clouddn.com/48768163_p1_master1200.jpg',
    'http://omph2coqc.bkt.clouddn.com/47664146_p0.jpg',
    'http://omph2coqc.bkt.clouddn.com/175548qjhhicxqzhfxijhf.jpg',
    'http://omph2coqc.bkt.clouddn.com/175605t8fybsuguhuuscfw.jpg',
    'http://omph2coqc.bkt.clouddn.com/00357D.png',
    'http://omph2coqc.bkt.clouddn.com/00310D.png',
    'http://omph2coqc.bkt.clouddn.com/00310C.png',
    'http://omph2coqc.bkt.clouddn.com/00129C.png',
    'http://omph2coqc.bkt.clouddn.com/00188D.png',
    'http://omph2coqc.bkt.clouddn.com/9000310101.png',
    'http://omph2coqc.bkt.clouddn.com/61990654_p0%20%281%29.jpg',
    'http://omph2coqc.bkt.clouddn.com/thumb-1920-746568.png',
    'http://omph2coqc.bkt.clouddn.com/9000310100.png',
    'http://omph2coqc.bkt.clouddn.com/00402C.png',
    'http://omph2coqc.bkt.clouddn.com/00310D.png',
    'http://omph2coqc.bkt.clouddn.com/00213C.png',
    'http://omph2coqc.bkt.clouddn.com/00267C.png',
    'http://omph2coqc.bkt.clouddn.com/00357D.png',
    'http://omph2coqc.bkt.clouddn.com/00267D.png'
  ]

  var data = []

  for (var i = 0; i < 10; i++) {
    data.push(img[Math.floor(Math.random() * 19)])
  }
	res.send(data);
});
