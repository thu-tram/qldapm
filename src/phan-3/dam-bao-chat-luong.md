# **CHAPTER 7 – Ensuring Quality**

Phần mềm tốt không chỉ là phần mềm “chạy được”. Nó là thứ khiến người dùng muốn quay lại, khiến đội ngũ phát triển muốn bảo trì, và khiến khách hàng cảm thấy an tâm. Chất lượng là những gì còn lại khi hào quang tính năng đã lùi xuống.

Chương này giúp bạn nhìn chất lượng dưới ba góc:

1. định nghĩa và các thuộc tính,
2. sự khác biệt giữa QA và QC,
3. cách chất lượng gắn liền với toàn bộ quy trình phát triển.

## **1. What Is Software Quality? – Chất lượng là đáp ứng kỳ vọng một cách nhất quán**

Một định nghĩa đơn giản và đáng tin cậy:

**“Chất lượng phần mềm là mức độ mà sản phẩm đáp ứng yêu cầu đã đặt ra — cả yêu cầu chức năng lẫn yêu cầu phi chức năng — một cách đáng tin cậy, dễ sử dụng và dễ phát triển tiếp.”**

Không phải chỉ chạy đúng.
Không phải chỉ giao đúng hạn.
Chất lượng là trải nghiệm tổng thể.

Để hiểu chất lượng, bạn cần làm quen với hệ các thuộc tính phổ biến trong phần mềm.

## **2. Quality Attributes – Những thuộc tính làm nên chất lượng**

Mỗi thuộc tính dưới đây giống như một khía cạnh của con người: không ai hoàn hảo ở tất cả, nhưng một sản phẩm tốt phải cân bằng hợp lý.

### **Reliability – Độ tin cậy**

Phần mềm có thể hoạt động ổn định không?
Có crash mỗi khi nhập ký tự lạ hay không?
Người dùng càng ít bất ngờ xấu, phần mềm càng đáng tin.

Ví dụ: ứng dụng ngân hàng _không được phép_ sập vào giờ cao điểm.

### **Usability – Tính dễ sử dụng**

Người dùng có cần đọc hướng dẫn 20 phút để hiểu cách bấm nút không?
Giao diện có rõ ràng không?
Tác vụ phổ biến có dễ tìm không?

Một phần mềm chất lượng là phần mềm _không khiến người dùng suy nghĩ quá nhiều_.

### **Maintainability – Khả năng bảo trì**

Code có dễ đọc, dễ sửa, dễ mở rộng không?
Một nhóm mới có thể tiếp quản dự án mà không phải “đập đi làm lại” không?

Maintainability là thứ quyết định tuổi thọ của dự án.

### **Efficiency – Hiệu năng**

Phần mềm có dùng CPU/RAM hợp lý không?
Thời gian phản hồi có nhanh không?

Một app chậm là một app người dùng sớm rời bỏ.

### **Security – Bảo mật**

Có dễ bị tấn công không?
Dữ liệu người dùng có an toàn không?

Đặc biệt quan trọng trong các lĩnh vực y tế, tài chính, giáo dục.

### **Testability, Portability, Robustness…**

- **Testability**: dễ kiểm thử không?
- **Portability**: chạy được trên nhiều môi trường không?
- **Robustness**: chịu lỗi tốt không?

Không phải dự án nào cũng cần đầy đủ tất cả, nhưng mỗi dự án đều cần chọn một số yếu tố cốt lõi rồi tối ưu chúng.

## **3. QA vs QC – Hai khái niệm giống nhau ở tên, nhưng khác nhau ở bản chất**

Đây là điểm dễ gây nhầm lẫn.

### **Quality Assurance (QA) – Đảm bảo chất lượng**

QA tập trung vào **quy trình**.
Nó hỏi: _Chúng ta có làm đúng cách hay không?_

QA là chủ động:

- xây dựng quy trình,
- đặt chuẩn code,
- quy định review,
- thiết lập checklist.

QA giúp phòng ngừa lỗi trước khi chúng xuất hiện.

### **Quality Control (QC) – Kiểm soát chất lượng**

QC tập trung vào **sản phẩm**.
Nó hỏi: _Thứ chúng ta làm ra có lỗi hay không?_

QC là phản ứng:

- kiểm thử,
- tìm bug,
- so sánh với yêu cầu.

QC xuất hiện _sau_ khi code đã được viết.

Nếu hình dung bằng ẩn dụ:

- **QA** là cách bạn dạy đầu bếp rửa tay và kiểm tra nguyên liệu.
- **QC** là cách bạn nếm món ăn trước khi mang ra cho khách.

QA hướng vào phòng ngừa.
QC hướng vào phát hiện.

Một dự án chất lượng cần **cả hai**.

## **4. The Link Between Development and Quality – Quy trình tốt tạo ra sản phẩm tốt**

Chất lượng không đến ở cuối dự án; nó được gieo từ ngay lúc bắt đầu.
Quy trình phát triển và quy trình đảm bảo chất lượng không phải hai đường song song — chúng giao nhau ở mọi điểm.

### **(1) Trong giai đoạn phân tích yêu cầu**

- QA đảm bảo yêu cầu rõ ràng, không mơ hồ.
- Nếu yêu cầu sai → mọi thứ phía sau cũng sai.
  Chất lượng bắt đầu từ việc… nghe khách hàng.

### **(2) Trong giai đoạn thiết kế**

- QA đề xuất tiêu chuẩn giao diện, cấu trúc module.
- Các quyết định thiết kế ảnh hưởng trực tiếp đến hiệu năng, bảo trì và độ tin cậy.

Thiết kế tốt → sản phẩm ổn định hơn → ít bug hơn.

### **(3) Trong giai đoạn lập trình**

- QA quy định coding conventions.
- QC kiểm thử đơn vị, kiểm thử tích hợp.
- Review code làm tăng maintainability và giảm lỗi từ sớm.

### **(4) Trong giai đoạn kiểm thử**

- QC phát hiện lỗi.
- QA đảm bảo quy trình kiểm thử đủ mạnh để không bỏ sót lỗi quan trọng.

### **(5) Trong triển khai và vận hành**

- QA đảm bảo có hướng dẫn, checklist triển khai, logging, monitoring.
- QC kiểm tra build cuối cùng.

Chất lượng không kết thúc khi sản phẩm ra mắt. Nó sống cùng sản phẩm.

## **5. Tóm lại: Chất lượng không phải giai đoạn — nó là một thái độ**

Một project manager giỏi không chỉ hỏi:

- “Chúng ta làm được chưa?”
  mà còn hỏi:
- “Chúng ta đã làm _đúng_ chưa?”
- “Người dùng có cảm thấy thoải mái không?”
- “Chúng ta có thể phát triển nhanh hơn ở phiên bản sau không?”

Chất lượng là chuyện của cả nhóm, không chỉ của tester.
Nó là cách bạn thiết kế quy trình, cách bạn viết code, cách bạn giao tiếp, và cách bạn nhìn về sản phẩm dài hạn.
