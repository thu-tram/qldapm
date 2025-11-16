# Chọn mô hình SDLC

Không có dự án phần mềm nào giống nhau. Có dự án giống như nấu một món ăn có công thức chuẩn, chỉ cần làm đúng là được. Có dự án lại giống như mở quán cà phê mới: thử – sai – chỉnh – thử tiếp. Vì thế, không có một mô hình phát triển nào là “chân lý tuyệt đối”. Chỉ có mô hình _phù hợp_ với bối cảnh.

Chương này giúp bạn nhìn những mô hình SDLC phổ biến như những công cụ — không phải như những điều luật — và quan sát cách quy mô, rủi ro, và sự thay đổi ảnh hưởng đến quyết định chọn mô hình.

## Xàm xàm về SDLC

SDLC (Software Development Life Cycle) là một quá trình đi theo suốt trong một dự án phần mềm, trong một tổ chức phần mềm. Nó bao gồm một kế hoạch chi tiết mô tả cách phát triển, duy trì, thay thế và thay đổi hoặc nâng cao phần mềm cụ thể. Vòng đời xác định một phương pháp để cải thiện chất lượng phần mềm và quy trình phát triển tổng thể.

Mỗi mô hình sẽ có sự khác nhau, tuy nhiên, mỗi mô hình bao gồm tất cả hoặc một số giai đoạn / hoạt động / nhiệm vụ sau.

### Planning - Lập kế hoạch

- Phân tích yêu cầu được thực hiện bởi các senior member của nhóm với đầu vào từ khách hàng, bộ phận bán hàng, khảo sát thị trường và các chuyên gia trong ngành.
- Lập kế hoạch cho các yêu cầu đảm bảo chất lượng và xác định các rủi ro liên quan đến dự án.

### Defining - Xác định yêu cầu

- Xác định rõ ràng và ghi lại các yêu cầu.
- Thực hiện xác định yêu cầu thông qua một tài liệu SRS (Software Requirement Specification) bao gồm tất cả các yêu cầu sản phẩm được thiết kế và phát triển trong suốt vòng đời của dự án.

### Designing - Phân tích thiết kế kiến trúc hệ thống

- Trong giai đoạn này, thiết kế hệ thống và phần mềm được chuẩn bị từ các đặc tả yêu cầu đã được nghiên cứu trong giai đoạn đầu tiên.
- Thiết kế hệ thống giúp xác định các yêu cầu phần cứng và kiến trúc hệ thống tổng thể.

### Building - Phát triển

- Khi nhận được tài liệu thiết kế hệ thống, công việc được chia thành các module nhỏ và coding được bắt đầu.
- Đây là giai đoạn trọng tâm và dài nhất của vòng đời phát triển phần mềm.

### Testing - Kiếm thử

- Sau khi coding được phát triển, nó được kiểm tra dựa trên các yêu cầu để đảm bảo rằng sản phẩm thực sự hoạt động đúng trong giai đoạn phân tích yêu cầu.
- Trong giai đoạn này tất cả các loại kiểm thử chức năng như kiểm thử đơn vị, kiểm thử tích hợp, kiểm thử hệ thống, kiểm thử chấp nhận được thực hiện cũng như test phi chức năng cũng được thực hiện.

### Deployment - Phát hành/triển khai

- Sau khi thử nghiệm thành công, sản phẩm được phân phối / triển khai cho khách hàng để họ sử dụng.
- Khách hàng sẽ thực hiện test beta. Nếu có bất kỳ vấn đề nào xảy ra, thì họ sẽ báo cáo cho nhóm kỹ thuật để được hỗ trợ.

### Maintenance - Bảo trì

- Trong quá trình bảo trì của SDLC, hệ thống được đánh giá để đảm bảo nó không trở nên lỗi thời.
- Một khi khách hàng bắt đầu sử dụng hệ thống đã phát triển thì những vấn đề thực sự xuất hiện và cần được giải quyết theo thời gian.  

## **1. Những mô hình SDLC bạn cần biết**

### **Waterfall – Dòng thác một chiều**

Đây là mô hình cổ điển: yêu cầu → thiết kế → lập trình → kiểm thử → triển khai → bảo trì.
Mỗi giai đoạn kết thúc rồi mới chuyển sang giai đoạn tiếp theo. Không quay lại, trừ khi cực kỳ cần thiết.

**Điểm phù hợp:**

- yêu cầu rõ ngay từ đầu,
- quy trình nghiêm ngặt,
- tài liệu là ưu tiên.

**Hạn chế:**

- thay đổi khó khăn,
- sản phẩm chỉ xuất hiện ở cuối chu kỳ.

### **Incremental – Làm từng phần, bàn giao từng phần**

Thay vì làm cả hệ thống một lần, bạn chia dự án thành nhiều “mảnh”: mỗi mảnh được phân tích, thiết kế, lập trình, kiểm thử riêng, rồi ghép lại.

**Điểm phù hợp:**

- muốn có sản phẩm sớm,
- dự án lớn cần chia nhỏ để giảm rủi ro.

**Hạn chế:**

- thiết kế tổng thể phải chắc chắn ngay từ đầu,
- nguy cơ các mảnh rời rạc nếu quản lý kém.

### **Prototyping – Làm thử một bản mẫu để hiểu rõ vấn đề**

Khi yêu cầu mơ hồ, bạn làm một bản demo nhanh (prototype) nhằm để khách hàng nhìn – sờ – phản hồi. Không phải bản hoàn chỉnh, chỉ là mô phỏng.

**Điểm phù hợp:**

- khách hàng không diễn đạt yêu cầu tốt,
- giao diện là yếu tố chính,
- cần xác nhận ý tưởng trước.

**Hạn chế:**

- khách hàng dễ “yêu” bản prototype và tưởng nó là sản phẩm thật,
- có nguy cơ “quá gắn bó” với bản mẫu và làm sai hướng.

### **Agile – Linh hoạt, lặp lại, ưu tiên giá trị người dùng**

Agile chia dự án thành các vòng lặp ngắn (sprint). Mỗi vòng lặp tạo ra một phiên bản nhỏ có thể dùng được. Khách hàng tham gia liên tục, phản hồi liên tục.

**Điểm phù hợp:**

- yêu cầu thay đổi thường xuyên,
- ưu tiên tốc độ và thử nghiệm,
- sản phẩm hướng người dùng nhiều hơn là tài liệu.

**Hạn chế:**

- yêu cầu nhóm làm việc kỷ luật, liên tục trao đổi,
- khó dự đoán chính xác tổng chi phí khi dự án mở rộng.

## **2. Khi nào chọn mô hình nào?**

Thay vì học thuộc lý thuyết, hãy nhìn các mô hình như những “phong cách làm việc”.

### **Chọn Waterfall khi:**

- Bạn biết gần như chính xác mình phải xây thứ gì.
- Quy trình liên quan đến pháp lý, an toàn, hoặc dữ liệu quan trọng.
- Cần tài liệu đầy đủ để kiểm tra, audit.

**Ví dụ:** Hệ thống quản lý bệnh viện, phần mềm cho ngân hàng.

### **Chọn Incremental khi:**

- Bạn có thiết kế tổng thể nhưng muốn chia nhỏ rủi ro.
- Bạn cần kiểm chứng từng module trước khi ghép lại.
- Sản phẩm có thể tách thành nhiều phần độc lập tương đối.

**Ví dụ:** Hệ thống học trực tuyến gồm module video, giao bài, chấm điểm.

### **Chọn Prototyping khi:**

- Khách hàng mơ hồ: “Anh làm cho tôi một cái app… kiểu như… mạng xã hội nhưng để học tiếng Anh.”
- Bạn cần phản hồi nhanh trước khi cam kết phát triển chính thức.
- Giao diện hoặc trải nghiệm người dùng là yếu tố quan trọng nhất.

**Ví dụ:** Ứng dụng startup mới chưa rõ thị trường.

### **Chọn Agile khi:**

- Bạn kỳ vọng thay đổi nhiều trong suốt dự án.
- Bạn muốn “ra sản phẩm sớm – học – sửa – lặp lại.”
- Khách hàng tham gia tích cực vào quá trình.
- Dự án hướng tới người dùng cuối, cần cải tiến liên tục.

**Ví dụ:** Website thương mại điện tử, ứng dụng mobile nhỏ.

## **3. Ảnh hưởng của quy mô, rủi ro và yêu cầu thay đổi**

Khi quyết định mô hình, bạn không chọn theo cảm tính. Ba yếu tố khiến quyết định trở nên hợp lý:

### **1. Quy mô dự án (Project Size)**

**Dự án nhỏ → linh hoạt tốt → Agile/Prototyping thường phù hợp.**
Ví dụ: website giới thiệu công ty, app nhắc uống nước.

**Dự án lớn → cần cấu trúc → Incremental/Waterfall dễ quản lý hơn.**
Ví dụ: hệ thống ERP cho doanh nghiệp, hệ thống y tế quốc gia.

Quy mô lớn thường kéo theo:

- nhiều người liên quan,
- nhiều module cần phối hợp,
- nhiều rủi ro tích lũy.

Bạn không muốn một dự án 100 người chạy theo phong cách “tự do một chút cũng không sao”.

### **2. Rủi ro (Risk Level)**

**Rủi ro kỹ thuật cao → dùng Prototyping hoặc Incremental.**
Bạn thử từng module, từng ý tưởng trước khi tiến xa.

**Rủi ro thay đổi yêu cầu → Agile phát huy sức mạnh.**
Khách hàng đổi ý ư? Cứ để sprint mới xử lý.

**Rủi ro pháp lý → Waterfall ổn định hơn.**
Bạn không muốn “thử nghiệm” trong môi trường phải tuân thủ luật.

### **3. Mức độ thay đổi yêu cầu (Requirement Volatility)**

Đây là yếu tố then chốt.

| Mức độ thay đổi | Mô hình phù hợp          |
| --------------- | ------------------------ |
| Thấp            | Waterfall, Incremental   |
| Trung bình      | Incremental, Prototyping |
| Cao             | Agile                    |

Nếu bạn biết yêu cầu sẽ thay đổi liên tục, Waterfall sẽ trở thành chiếc áo giáp cứng nhưng… quá cứng. Agile trong trường hợp này giống như áo khoác mềm – dễ xoay chuyển hơn nhiều.

## **Tổng kết nhỏ cho chương này**

- Waterfall là sự chắc chắn.
- Agile là sự linh hoạt.
- Incremental là cách chia nhỏ rủi ro.
- Prototyping là cách hiểu rõ vấn đề trước khi cam kết.

Bạn chọn mô hình không phải để “đúng sách”, mà để phù hợp với:

- quy mô dự án,
- mức độ rủi ro,
- tốc độ và tần suất thay đổi yêu cầu.

Nghệ thuật của project manager nằm ở chỗ nhìn thấy hoàn cảnh, rồi chọn công cụ phù hợp — giống như đầu bếp nhìn nguyên liệu rồi quyết định dùng nồi hay chảo.

## Ví dụ

Bây giờ ta hãy thử xét hai trường hợp: So sánh hai mô hình (Waterfall vs Agile) dựa trên một ví dụ: “Xây dựng website thương mại điện tử nhỏ” vs “Hệ thống quản lý bệnh viện

### **1. Trường hợp 1: Xây dựng một website thương mại điện tử nhỏ**

Hãy hình dung bạn đang phát triển một trang bán áo thun đơn giản. Yêu cầu không quá bí ẩn:
đăng ký – đăng nhập – giỏ hàng – danh sách sản phẩm – thanh toán.

Ở đây, **thay đổi** là chuyện hiển nhiên: khách hàng thường nghĩ ra tính năng mới mỗi tuần, thiết kế thay đổi, khuyến mãi thay đổi, người bán thêm tính năng chat khách hàng rồi lại muốn bỏ. Mọi thứ giống như chơi lego: tháo lắp nhanh, thử nghiệm nhanh, sửa sai nhanh.

Trong môi trường như vậy, **Agile hợp cơ địa hơn**.

Nó cho phép nhóm:

- phát triển từng tính năng nhỏ và gửi bản demo sớm cho khách hàng,
- thay đổi kế hoạch giữa chừng mà không phải đập bỏ cả dự án,
- ưu tiên trải nghiệm người dùng – thứ thường thay đổi liên tục trong thương mại điện tử.

Nếu dùng Waterfall, bạn sẽ bị mắc kẹt trong bản tài liệu yêu cầu “đã đóng băng”, nhưng khách hàng thương mại điện tử thì hiếm khi đóng băng thứ gì.

### **2. Trường hợp 2: Hệ thống quản lý bệnh viện**

Giờ tưởng tượng bạn được giao xây một hệ thống quản lý hồ sơ bệnh nhân, thuốc, lịch khám, quản lý bác sĩ… Toàn những thứ đụng tới **tính mạng**, quy trình pháp lý, và dữ liệu nhạy cảm.

Ở đây, thay đổi lung tung không chỉ gây rắc rối — nó nguy hiểm.
Quy trình bệnh viện thường có cấu trúc rõ ràng: mỗi bước, mỗi biểu mẫu, mỗi thông tin đều có quy tắc.

Đối với dạng dự án này, **Waterfall lại trở nên hợp lý**.

Nó phù hợp vì:

- cần phân tích yêu cầu thật kỹ trước khi viết bất kỳ dòng code nào,
- tài liệu phải rõ ràng để kiểm tra tuân thủ pháp luật,
- quá trình kiểm thử phải diễn ra theo từng pha có kiểm soát chặt chẽ,
- mỗi thay đổi cần đánh giá tác động lớn (không đơn giản như thêm nút “Khuyến mãi”).

Một nhóm Agile vẫn có thể áp dụng trong một số module, nhưng tổng thể dự án thường đòi hỏi cấu trúc vận hành ổn định, tuần tự — và đó toàn là tính cách của Waterfall.

Nếu ví dự án như nấu ăn:

- **Website thương mại điện tử nhỏ** giống như mở một quán đồ ăn nhanh: khách đổi ý liên tục, menu linh hoạt, thử nghiệm món mới liên tục. Agile là phong cách hợp lý: vừa nấu vừa nếm.

- **Hệ thống quản lý bệnh viện** lại giống như làm bếp cho một nhà hàng phục vụ dị ứng nghiêm ngặt: phải đo lường chính xác, công thức chuẩn, quy trình cố định. Waterfall rất tự nhiên trong bối cảnh này.

## Tham khảo

- [Các mô hình phát triển phần mềm](https://viblo.asia/p/cac-mo-hinh-phat-trien-phan-mem-GrLZDwbgKk0)


## Không có mô hình nào là hoàn hảo, chỉ có mô hình phù hợp.

Như trên, bạn đã có thể thấy rằng...
