---
layout: '@/templates/BasePost.astro'
title: Dự án thứ 1 
description: #Flappy bird
Flappy Bird là một trò chơi di động cuộn bên có đồ họa 2D theo phong cách cổ điển. Mục tiêu là hướng một con chim đang bay, tên là "Faby", di chuyển liên tục sang phải, giữa các bộ ống giống như Mario. Nếu người chơi chạm vào các đường ống, họ sẽ thua. Faby nhanh chóng bay lên trên mỗi khi người chơi chạm vào màn hình; nếu màn hình không được gõ, Faby sẽ ngã vì trọng lực; mỗi cặp ống mà anh ta điều hướng giữa sẽ kiếm được cho người chơi một điểm. - Từ Wikipedia
########
Trong dự án này, chúng tôi thiết kế và triển khai trò chơi điện tử giống Flappy Bird trên nền tảng trực tuyến.
Trò chơi này, người chơi có khả năng thao tác chuyển động thẳng đứng của một con chim. Bằng cách nhấn phím, người chơi có thể khiến con chim nhảy lên một khoảng nhất định, sau đó con chim sẽ rơi tự do mà không thể được kiểm soát nếu không tiếp tục nhấn phím.

Ngay khi trò chơi khởi đầu, các ống (chướng ngại vật) sẽ không ngừng xuất hiện từ phía bên phải màn hình và di chuyển sang phía trái. Mục đích của việc này là để tạo cảm giác như con chim đang bay tiến về phía trước.

Mục tiêu chính trong trò chơi là người chơi phải tận dụng khả năng điều khiển con chim để né tránh và vượt qua các ống. Điều này đòi hỏi người chơi phải có ước tính thời gian và khoảng cách chính xác để tránh va chạm với các ống. Điểm số của người chơi sẽ tăng lên mỗi khi con chim vượt qua một ống.

Trò chơi sẽ tiếp tục diễn ra mà không giới hạn thời gian cho đến khi con chim va vào một trong các ống hoặc chạm vào mặt đất. Khi điều này xảy ra, trò chơi sẽ kết thúc và người chơi có thể xem điểm số của mình để thách thức bản thân và cải thiện thành tích trong lần chơi tiếp theo.

Hình 1 là màn hình bắt đầu của Flappy Bird. Tiêu đề "Flappy Bird" được hiển thị ở giữa
phía trên của màn hình. Con chim cũng được hiển thị trên nền.
######
Dự án này được thực hiện trên nền tảng trực tuyến. Các yếu tố chính tạo nên trò chơi bao gồm:
1. **Trình điều khiển - Chuột (Click):**
   Người chơi sử dụng chuột để tương tác với trò chơi, nhấp chuột để thực hiện các hành động.
2. **Logic trò chơi: When run - When click - When hit the ground - When hit an obstacle - When pass obstacle:**
   Các tình huống logic trong trò chơi được quản lý thông qua các mô-đun như "When run" (khi bắt đầu), "When click" (khi nhấp chuột), "When hit the ground" (khi va chạm với mặt đất), "When hit an obstacle" (khi va chạm với vật cản), và "When pass obstacle" (khi vượt qua vật cản). Đây là những trạng thái quan trọng để xác định cách trò chơi phản ứng và diễn biến.
3. **Flap a 'value' amount:**
   Hành động "flap" (vỗ cánh) sẽ được thực hiện với một giá trị cụ thể. Điều này có thể ảnh hưởng đến chuyển động của nhân vật.
4. **Bộ điều khiển âm thanh (Play 'value' sound):**
   Âm thanh trong trò chơi sẽ được điều khiển thông qua việc phát phát lại âm thanh có giá trị cụ thể. Điều này giúp tạo ra hiệu ứng âm thanh phù hợp với các sự kiện trong trò chơi.
5. **Bộ điều khiển Sprite: Set speed 'value', set scene 'value', set player 'value', set obstacle 'value', set ground, set a 'value' grap, set gravity 'value', set score 'value':**
   Bộ điều khiển Sprite sẽ điều chỉnh các tham số quan trọng trong trò chơi như tốc độ, cảnh, người chơi, vật cản, mặt đất, lực kéo, điểm số và các giá trị khác. Điều này giúp điều chỉnh các yếu tố trong trò chơi để tạo ra trải nghiệm chơi tùy chỉnh.
6. Mô-đun logic của trò chơi sẽ tương tác với các mô-đun khác thông qua các khối lệnh. Cách các khối lệnh này tương tác với nhau sẽ được hướng dẫn chi tiết để tạo nên cấu trúc logic tổng thể của trò chơi.
#######

**Thực hiện logic trò chơi bằng ngôn ngữ lập trình trực quan Blockly (kéo thả). Các khối lệnh được kéo thả vào workspace sẽ thực thi các chức năng logic trò chơi:**

Trong quá trình xây dựng trò chơi, bạn sẽ sử dụng ngôn ngữ lập trình trực quan Blockly để tạo nên cấu trúc logic của trò chơi. Bằng cách kéo và thả các khối lệnh vào không gian làm việc (workspace), bạn sẽ tạo ra các phần logic thực thi chức năng chính của trò chơi.

**Các mô-đun chức năng trong trò chơi:**

1. **When run (Khi bắt đầu):**
   Mô-đun này có nhiệm vụ thiết lập trạng thái ban đầu của trò chơi và sẽ được thực hiện khi người chơi nhấn nút "Run" để bắt đầu trò chơi. Các khối lệnh trong mô-đun này sẽ xác định các yếu tố như vị trí ban đầu của con chim và các giá trị khởi đầu khác.

2. **When click (Khi nhấp chuột):**
   Mô-đun này sẽ điều khiển sprite (nhân vật trong trò chơi) và sẽ được kích hoạt khi người chơi nhấp chuột. Các khối lệnh trong mô-đun này sẽ quản lý hành vi của sprite khi người chơi thực hiện thao tác nhấp chuột, chẳng hạn như di chuyển sprite lên trên khi người chơi nhấp.

3. **When hit the ground (Khi va chạm với mặt đất) và When hit an obstacle (Khi va chạm với vật cản):**
   Những mô-đun này sẽ xử lý tình huống khi con chim va chạm với mặt đất hoặc vật cản. Các khối lệnh trong mô-đun này sẽ xác định hành động sau va chạm, chẳng hạn như kết thúc trò chơi hoặc tính toán điểm số dựa trên số cột đã vượt qua.(When pass obstacle)

4. **When pass obstacle (Khi vượt qua vật cản):**
   Mô-đun này sẽ thực hiện khi con chim vượt qua một vật cản. Các khối lệnh trong mô-đun này sẽ quản lý việc tính điểm, cung cấp phần thưởng và điều chỉnh kịch bản trò chơi dựa trên việc vượt qua vật cản.

**Các chức năng và nhiệm vụ của trò chơi:**

Dựa trên các mô-đun và chức năng được đề cập ở trên, trò chơi sẽ cung cấp một loạt các chức năng và nhiệm vụ:

- **Cập nhật vị trí của con chim từ click (chuột):** Người chơi có khả năng điều khiển vị trí của con chim bằng cách click chuột.

- **Thực hiện luật chơi:** Logic chơi sẽ quyết định liệu trò chơi có kết thúc hay không dựa trên các điều kiện như va chạm hoặc điểm số. Cách tính điểm và xử lý các kịch bản sẽ được xác định trong các mô-đun tương ứng.

- **Tạo ra âm thanh phù hợp theo luật chơi:** Âm thanh sẽ được kích hoạt theo các tình huống như việc nhấn chuột, va chạm, hoặc vượt qua vật cản, tạo ra một trải nghiệm âm thanh đa dạng và phù hợp.

- **Kiểm soát việc tạo ra các sprite:** Các khối lệnh sẽ điều chỉnh việc hiển thị các sprite, như tạo ra và di chuyển cột hoặc vật cản, tạo ra hiệu ứng chuyển động trong trò chơi.

**Các mô-đun con cho bộ điều khiển logic trò chơi:**

Dựa trên các chức năng đã được đặc tả, cần có ba mô-đun con riêng biệt cho bộ điều khiển logic trò chơi. Những mô-đun này sẽ tương tác với nhau và thực hiện các nhiệm vụ cụ thể trong trò chơi:

1. Mô-đun xử lý "Khởi đầu trò chơi": Thiết lập trạng thái ban đầu của trò chơi khi người chơi bắt đầu.

2. Mô-đun xử lý "Nhấp chuột": Quản lý hành vi của sprite khi người chơi nhấp chuột, chẳng hạn như thực hiện hành động nhảy.

3. Mô-đun xử lý "Va chạm và vượt qua vật cản": Xử lý tình huống khi con chim va chạm với mặt đất hoặc vật cản, và khi vượt qua vật cản.

###
Bài học kinh nghiệm và vấn đề

Đây là phiên bản học tập nên chúng ta sẽ tập trung vào hiểu các vấn đề của trò chơi như là nhân vật, kịch bản, thiết lập,..
Phiên bản học tập trên web còn hạn chế 1 số thiết lập cần thiết nữa cho 1 trò chơi hoàn chỉnh.

Lời khuyên và phát triển trong tương lai. 
Mã hóa có thể là khó hiểu nhưng chúng chính là những gì máy hiểu. Nó sẽ giúp chúng ta làm việc với máy tính chuyên sâu hơn.
Có nhiều ngôn ngữ lập trình hay các cách phát triển game bằng những công cụ khác nhau, hãy thực hành nó trên những ngôn ngữ lập trình hoặc công cụ phát triển trò chơi mà bạn hiểu rõ.
Chọn ảnh sprite có độ phân giải cao và loại bỏ nền sprite rõ ràng hơn
có thể làm cho hình ảnh trò chơi của chúng tôi trông đẹp hơn.
Thiết kế logic trò chơi phức tạp hơn có thể tăng tính toàn vẹn trò chơi của chúng tôi. Từ ví dụ,
nền thay đổi theo thời gian, khoảng cách giữa các cột trở nên ngẫu nhiên.

###
Trò chơi Flappy Bird có thể mang đến nhiều lợi ích liên quan đến phát triển trò chơi và ngành lập trình cho trẻ em:

1. **Hiểu về Logic và Luật Chơi:**
   Trò chơi Flappy Bird đòi hỏi người chơi phải hiểu và thực hiện các luật chơi đúng cách. Trẻ em sẽ học cách xác định hành động và kết quả dựa trên các sự kiện trong trò chơi, ví dụ như khi con chim va chạm với ống hoặc khi vượt qua vật cản.

2. **Logic Lập Trình:**
   Bằng việc tạo và điều chỉnh các khối lệnh trong trình lập trình trực quan như Blockly, trẻ em sẽ hiểu cách sắp xếp các hành động, điều kiện và sự kiện để tạo nên một hệ thống logic hoạt động cho trò chơi. Điều này phát triển tư duy logic và khả năng phân tích vấn đề.

3. **Tương Tác và Trải Nghiệm Người Dùng:**
   Trò chơi Flappy Bird tập trung vào tương tác người dùng thông qua việc nhấn chuột để nhảy. Trẻ em sẽ học cách tạo ra các hành động và phản ứng người chơi bằng cách gắn kết các sự kiện với các hành động trong trò chơi.

4. **Xử lý Sự Kiện và Trạng Thái:**
   Trò chơi này giúp trẻ em hiểu về cách quản lý và phản ứng với các sự kiện trong thế giới ảo. Việc xử lý sự kiện như khi con chim va chạm với ống hay khi vượt qua vật cản sẽ giúp họ nắm vững khái niệm về xử lý trạng thái và các biến đổi trong trò chơi.

5. **Thực Hiện Thử Nghiệm và Điều Chỉnh:**
   Trò chơi Flappy Bird thúc đẩy trẻ em thử nghiệm và điều chỉnh các yếu tố như tốc độ di chuyển, khoảng cách giữa các ống và khả năng nhảy của con chim để tạo ra trải nghiệm chơi tốt hơn.
6. **Sự Kiên Nhẫn và Quản Lý Khó Khăn:**
   Trò chơi này không dễ dàng và đòi hỏi sự kiên nhẫn và sự tập trung. Trẻ em sẽ học cách đối mặt với thách thức và cách ứng phó khi gặp khó khăn

7. **Giới Thiệu Vào Ngành Lập Trình:**
   Bằng việc tham gia vào việc xây dựng một trò chơi nhỏ như Flappy Bird, trẻ em có thể hiểu và khám phá cơ bản của việc phát triển trò chơi và lập trình. Điều này có thể tạo ra sự quan tâm và khao khát tìm hiểu thêm về ngành lập trình trong tương lai.

####
1. **Giới Thiệu Cơ Bản về Trò Chơi Flappy Bird:**
   Bắt đầu bằng cách giới thiệu trò chơi Flappy Bird cho người học. 
Trình bày cách chơi, mục tiêu và luật chơi của trò chơi. 

2. **Giới Thiệu Môi Trường Lập Trình:**
   Hướng dẫn người học về công cụ lập trình mà bạn sẽ sử dụng để tạo trò chơi Flappy Bird. 
Có thể sử dụng các công cụ trực quan như Scratch, Blockly, hoặc môi trường lập trình game như Unity hoặc Godot tùy thuộc vào mức độ và khả năng của người học.

3. **Tạo Giao Diện Đầu Tiên:**
   Hướng dẫn người học tạo giao diện ban đầu của trò chơi bằng cách thêm sprite cho con chim và các ống. Giới thiệu cách kéo thả và điều chỉnh các hình ảnh trên môi trường lập trình.

4. **Xử Lý Sự Kiện Nhấn Chuột:**
   Hướng dẫn cách thêm sự kiện nhấp chuột vào sprite của con chim để điều khiển nhảy. Giới thiệu khối lệnh xử lý sự kiện và cách kết nối các hành động với sự kiện nhấp chuột.

5. **Thiết Lập Hệ Thống Vật Cản:**
   Hướng dẫn cách tạo ra và di chuyển các ống để tạo thành vật cản trong trò chơi. Giới thiệu cách tạo ra các khối lệnh cho việc tạo và di chuyển các vật cản.

6. **Xử Lý Va Chạm và Điểm Số:**
   Dạy cách xác định khi con chim va chạm với các vật cản hoặc mặt đất và cách xử lý tình huống này. Cách tính điểm và hiển thị điểm số khi con chim vượt qua vật cản.

7. **Thêm Âm Thanh và Hiệu Ứng Vizual:**
   Giới thiệu cách thêm âm thanh cho các sự kiện như nhảy, va chạm và vượt qua vật cản. Hướng dẫn cách tạo hiệu ứng hình ảnh khi con chim nhảy và va chạm.

8. **Tạo Kịch Bản Trò Chơi:**
   Hướng dẫn cách tạo kịch bản trò chơi với các mô-đun logic như khi bắt đầu, khi nhấp chuột, khi va chạm và khi vượt qua vật cản. Kết nối các khối lệnh để tạo ra luồng logic cho trò chơi.

9. **Tùy Chỉnh và Tối Ưu Hóa:**
   Dạy cách điều chỉnh các tham số như tốc độ, khoảng cách vật cản và độ khó của trò chơi. Hướng dẫn cách kiểm tra và tối ưu hóa trò chơi để đảm bảo trải nghiệm chơi tốt nhất.

10. **Khuyến Khích Sáng Tạo và Thử Nghiệm:**
   Khích lệ người học thử nghiệm và tùy chỉnh trò chơi theo ý muốn. Họ có thể thêm tính năng mới, thay đổi giao diện, hoặc tạo ra các biến thể khác của trò chơi.

Thông qua việc dạy lập trình game bằng trò chơi Flappy Bird, người học sẽ có cơ hội áp dụng các nguyên tắc lập trình cơ bản và tạo ra trải nghiệm chơi thú vị. Điều này cũng có thể khuyến khích sự sáng tạo và đam mê với lập trình và phát triển trò chơi.

###


Với Blockly, bạn không cần phải biết lập trình từ đầu hay sử dụng ngôn ngữ mã lệnh phức tạp. Thay vào đó, bạn sẽ sử dụng khối lệnh có hình ảnh và mối quan hệ logic trực quan để xây dựng các chức năng và hành vi cho trò chơi Flappy Bird. Điều này giúp bạn tập trung vào việc hiểu cơ bản về lập trình và tạo ra trải nghiệm chơi thú vị mà không cần đầu tư quá nhiều thời gian vào việc học cú pháp mã lệnh.

Trong suốt khóa học, chúng ta sẽ bắt đầu từ những khái niệm cơ bản về trò chơi Flappy Bird và cách nó hoạt động. Sau đó, bạn sẽ được hướng dẫn cách sử dụng các khối lệnh trong Blockly để tạo ra các phần khác nhau của trò chơi, từ việc điều khiển con chim, xử lý va chạm, tính điểm đến việc tạo hiệu ứng âm thanh và hình ảnh.

Chúng ta sẽ không chỉ tập trung vào việc tạo ra trò chơi hoàn chỉnh mà còn cung cấp cho bạn cái nhìn sâu hơn về quá trình phát triển trò chơi và cách chia nhỏ nhiệm vụ thành các khối lệnh hợp lý. Sau khi hoàn thành khóa học, bạn sẽ có một trò chơi Flappy Bird tự tạo của riêng bạn và kiến thức cơ bản về lập trình game sử dụng công cụ trực quan Blockly.

###
**Vì sao sử dụng Blockly?**

Blockly là một công cụ lập trình trực quan giúp bạn tạo mã bằng cách kéo và thả các khối lệnh. Điều này giúp loại bỏ gánh nặng của việc phải nhớ cú pháp lập trình và tập trung vào ý tưởng và logic. Chúng tôi chọn sử dụng Blockly vì nó là cách tuyệt vời để giúp người học mới tiếp cận lập trình một cách dễ dàng và thú vị.

**Hành trình của bạn trong khóa học:**

1. **Hiểu về Trò Chơi Flappy Bird:** Chúng tôi sẽ bắt đầu bằng việc giới thiệu về trò chơi Flappy Bird, cách nó hoạt động và mục tiêu chơi. Điều này giúp bạn xác định các yếu tố quan trọng trong trò chơi mà bạn sẽ tạo.

2. **Thử Nghiệm Các Khối Lệnh Cơ Bản:** Trước khi bắt đầu, bạn sẽ được làm quen với các khối lệnh cơ bản trong Blockly. Chúng tôi sẽ hướng dẫn bạn cách sử dụng chúng để thực hiện các hành động như di chuyển, nhảy, và kiểm tra điều kiện.

3. **Xây Dựng Giao Diện:** Bạn sẽ bắt đầu tạo giao diện trò chơi bằng cách thêm các sprite, định vị chúng và tạo hình ảnh ban đầu cho con chim và ống.

4. **Điều Khiển Con Chim:** Bạn sẽ học cách sử dụng các khối lệnh để điều khiển chuyển động của con chim khi người chơi nhấn chuột hoặc nhấn phím.

5. **Xử Lý Va Chạm:** Chúng tôi sẽ dạy bạn cách xác định khi con chim va chạm với ống hoặc mặt đất, và cách xử lý tình huống này để kết thúc trò chơi.

6. **Tính Điểm và Phần Thưởng:** Bạn sẽ học cách tính điểm khi con chim vượt qua ống và cách thêm phần thưởng hoặc kịch bản đặc biệt khi người chơi đạt được điểm cao.

7. **Hiệu Ứng Âm Thanh và Hình Ảnh:** Bạn sẽ tạo ra hiệu ứng âm thanh và hình ảnh để làm cho trò chơi thêm sinh động và thú vị.

8. **Kết Hợp Logic Và Thử Nghiệm:** Cuối cùng, bạn sẽ kết hợp tất cả những gì bạn đã học để xây dựng trò chơi Flappy Bird hoàn chỉnh. Sau đó, bạn có thể thử nghiệm và tinh chỉnh trò chơi để đảm bảo nó hoạt động tốt.

**Mục tiêu của bạn:** Tại cuối khóa học, bạn sẽ không chỉ có một trò chơi Flappy Bird hoàn chỉnh mà còn hiểu rõ về cách sử dụng công cụ trực quan Blockly để dạy lập trình một cách hiệu quả và thú vị.


pubDate: 2023-07-19T00:00:00Z
imgSrc: '/assets/images/image-post7.jpeg'
imgAlt: 'Image post 7'
---

Full typography example at [this page](../sixth-post/).
