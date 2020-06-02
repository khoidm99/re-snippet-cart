import { observable, computed, action, decorate } from 'mobx';

class NewsStore {
	newsList = [
		{
			id: 1,
			title: 'Halfmoon Betta',
			description:
				'The Halfmoon betta is arguably one of the prettiest betta species. It is recognized by its large tail that can flare up to 180 degrees.',
			image: '/halfmoon.jpg',
			content: `Cách đây chỉ khoảng 4-5 năm, cá betta Halfmoon là một dòng cá rất hiếm và quý, 
      ngày nay với sự miết mài lai tạo của các nhà lai tạo cá 
      betta Halfmoon đã có gần như đầy đủ các màu và giống cá, 
      và là dòng cá tiêu chuẩn nhất trong tất cả các giống Betta đuôi dài hiện nay. 
      Như tên gọi của nó đuôi Halfmoon có hình nửa vòng tròn đạt đến 180 độ hoặc hơn.
      Đuôi của một con cá betta HM (Halfmoon) có hai đặc điểm quan trọng:
      1. Các cạnh đuôi thẳng và dài.
      2. Góc xoè 180 độ.
      Với betta halfmoon, bạn phải có khả năng kẻ một đường thẳng XY dọc theo các cạnh đuôi.
      Điều này chỉ có thể làm được nếu các cạnh thẳng tắp và xòe 180 độ.`,
		},
		{
			id: 2,
			title: 'Dragon Scale Betta',
			description:
				'The dragon scale betta is a rarer and higher maintenance fish. It is named by its thick white scales covering his sides that looks like dragon scale armor.',
			image: '/dragonscale.jpg',
			content: `Cách đây chỉ khoảng 4-5 năm, cá betta Halfmoon là một dòng cá rất hiếm và quý, 
      ngày nay với sự miết mài lai tạo của các nhà lai tạo cá 
      betta Halfmoon đã có gần như đầy đủ các màu và giống cá, 
      và là dòng cá tiêu chuẩn nhất trong tất cả các giống Betta đuôi dài hiện nay. 
      Như tên gọi của nó đuôi Halfmoon có hình nửa vòng tròn đạt đến 180 độ hoặc hơn.
      Đuôi của một con cá betta HM (Halfmoon) có hai đặc điểm quan trọng:
      1. Các cạnh đuôi thẳng và dài.
      2. Góc xoè 180 độ.
      Với betta halfmoon, bạn phải có khả năng kẻ một đường thẳng XY dọc theo các cạnh đuôi.
      Điều này chỉ có thể làm được nếu các cạnh thẳng tắp và xòe 180 độ.`,
		},
		{
			id: 3,
			title: 'Crowntail Betta',
			description:
				"The crowntail is pretty common, but interesting none the less. It's recognized by the shape of its tail that has an appearance of a comb.",
			image: '/crowntail.jpg',
			content: `Nhiều người nuôi cá thường hay thắc mắc về nguồn gốc của một loại đuôi nào đó nhưng không loại nào gây ra nhiều hứng thú như loại cá đuôi tưa (crowntail). Thật khó để tin rằng cá đuôi tưa đã được tạo ra (và vẫn đang được tạo ra) qua quá trình lai tuyển chọn đặc điểm tia vây kéo dài. Trong một bầy cá bình thường, bạn thường thấy một số cá thể có tia vây kéo dài, nhất là cá mái, thậm chí nhiều con như vậy rất khó phân biệt với cá đuôi tưa mái nếu chỉ căn cứ vào những tia vây răng cưa. Đặc điểm khác thường này được nắm bắt và khai thác bởi các nhà lai tạo, những người tích cực phát triển cá betta đuôi răng cưa thành loại cá siêu đặc biệt: cá đuôi tưa.

      Để minh hoạ cho quá trình phát triển từ cá betta đuôi răng cưa thành cá đuôi tưa chất lượng, những nhà lai tạo cá đuôi tưa như Phil Ngo đã trình bày hàng loạt hình ảnh về dòng cá đuôi tưa Mustard Gas của ông trên diễn đàn Betta Club Singapore.
      
      Hình đầu tiên là một con cá đực Mustard Gas đuôi đơn với những tia vây kéo dài. Hết sức lưu ý rằng con cá này mặc dù vây rất đẹp nhưng là cá đuôi quạt - tia nhị cấp hơn là cá halfmoon - tia đa cấp. Con cá với đuôi răng cưa đều và gọn ghẽ này được dùng để lai tạo ra những thế hệ kế tiếp, tiến tới cá đuôi tưa - tia đôi.
      
      betta27
      
      Một con cá mái cùng bầy được đem lai với nó (con này cũng có đuôi răng cưa) để tạo ra vô số cá con có răng cưa dài hơn.`,
		},
		{
			id: 4,
			title: 'Veiltail Betta',
			description: 'By far the most common betta fish. You can recognize it by its long tail aiming downwards.',
			image: '/veiltail.jpg',
			content: `vào năm 1960, nhà lai tạo người Mỹ Warren Young thành công trong việc tạo ra những con cá betta có vây cực dài .
      Young gọi cá betta của ông là “Libby” theo tên của vợ ông. 
      Những con cá này được bán cho người yêu thích cá cảnh ở khắp nơi trên thế giới và cho cả các trang trại cá cảnh ở châu Á.
      Bước phát triển này dẫn đến việc hình thành dạng cá đuôi voan rất phổ biến sau đó.
      Ngoài ra, trong quá khứ từng có một số dòng cá cũng xuất phát từ cá đuôi dài như 
      cá đuôi quạt (roundtail) và cá đuôi át bích (spadetail) nhưng ngày nay cùng với cá đuôi dài và đuôi voan, 
      chúng hầu như biến mất khỏi thị trường vì cạnh tranh không lại với những dòng betta cảnh hiện đại khác.
      Cá đuôi kép (doubletail): cũng xuất phát từ bầy cá của Warren Young vào những năm 1960 
      (có người cho rằng cá đuôi kép xuất hiện trong bầy cá nhập từ Đông Nam Á). Cá đuôi kép có hai thùy đuôi và vây lưng to tương đương với vây hậu môn.
      Cá đuôi kép đóng vai trò quan trọng trong việc cải thiện vây lưng cho các dòng betta cảnh hiện đại.`,
		},
	];

	get getNews() {
		return this.newsList;
	}
}

decorate(NewsStore, {
	newsList: observable,
	getNews: computed,
});

const store = new NewsStore();

export default store;
