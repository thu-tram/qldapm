# Estimating Cost and Managing Risk
## **Estimating Cost: Học cách đoán điều chưa từng tồn tại**

Ước lượng trong phần mềm là một trò chơi kỳ lạ: bạn phải dự đoán công sức cần bỏ ra để xây dựng một thứ chưa tồn tại, với một đội ngũ chưa chắc đã làm việc cùng nhau, bằng một quy trình có thể thay đổi giữa chừng. Không lạ gì khi hầu hết ước lượng đều sai — nhưng sai theo cách có hệ thống thì lại là một kỹ năng.

Dưới đây là ba kỹ thuật cơ bản mà mọi project manager đều dùng. Chúng không ma thuật, nhưng chúng giúp bạn sai _thông minh_ hơn.

### **1. Expert Judgment – Hỏi người hiểu việc hơn mình**

Cách này giống như hỏi một người thợ lành nghề: “Anh nghĩ sửa cái này mất bao lâu?”
Expert judgment dựa vào kinh nghiệm của những người từng làm việc tương tự trong quá khứ.

**Khi nào dùng?**

- Khi dự án nhỏ hoặc chưa rõ ràng.
- Khi có chuyên gia nội bộ nắm rõ hệ thống.
- Khi bạn cần ước lượng nhanh để lập kế hoạch thô ban đầu.

**Ưu điểm:** nhanh, linh hoạt, phù hợp khi thông tin còn mù mờ.
**Nhược điểm:** phụ thuộc chủ quan, dễ bị “lạc quan” quá mức.

**Ví dụ:**
Bạn hỏi lập trình viên backend:

> “Xây API đăng nhập mất khoảng bao lâu?”
> Họ trả lời:
> “Khoảng một buổi sáng, nếu không có yêu cầu bảo mật phức tạp.”

Đó chính là expert judgment — đơn giản nhưng hữu ích.

### **2. Analogy – So sánh với dự án đã làm**

Analogy estimation dựa trên nguyên tắc:

> "Nếu hai thứ tương tự nhau, thời gian/công sức để xây dựng chúng cũng tương tự."

Bạn tìm một dự án cũ có đặc điểm gần giống để làm thước đo.

**Khi nào dùng?**

- Có dữ liệu lịch sử.
- Làm phiên bản nâng cấp, mở rộng hoặc tái triển khai.
- Tính năng/sản phẩm giống nhau về độ phức tạp.

**Ưu điểm:** thực tế, dựa trên minh chứng quá khứ.
**Nhược điểm:** yêu cầu dữ liệu; dễ bị sai nếu “tưởng giống nhưng không giống”.

**Ví dụ:**
Bạn từng phát triển app ghi chú cá nhân trong 3 tuần.
Giờ bạn làm app to-do list, cấu trúc tương tự.
Bạn có thể ước lượng:

> “Có thể mất khoảng 3–4 tuần, vì mức độ phức tạp tương đồng.”

### **3. Parametric – Tính toán bằng công thức**

Parametric estimation giống như lập trình:
Bạn tìm một đơn vị đo (ví dụ: số dòng code, số chức năng, số điểm story), xác định chi phí cho một đơn vị, rồi nhân lên.

Công thức đơn giản:
**Tổng chi phí = (Kích thước công việc) × (Năng suất/chi phí mỗi đơn vị)**

**Khi nào dùng?**

- Dự án lớn hơn, dữ liệu đo đạc rõ ràng.
- Tổ chức có sẵn thống kê: “1 story point ≈ 6 giờ”, “1 module trung bình mất 3 ngày”…

**Ưu điểm:** khách quan, dễ mở rộng.
**Nhược điểm:** yêu cầu dữ liệu và giả định ổn định.

**Ví dụ:**
Bạn biết nhóm bạn trung bình hoàn thành **10 story points / tuần**.
Backlog giai đoạn đầu có **50 story points**.
Vậy bạn ước lượng:

> “Khoảng 5 tuần.”

## **Earned Value Management: Đo xem dự án đang đi đúng hướng**

EVM là cách theo dõi dự án bằng số liệu, thay vì cảm giác.
Nó trả lời ba câu hỏi quan trọng:

1. **Bạn đã làm được bao nhiêu?**
2. **Bạn đã tốn bao nhiêu tiền/nguồn lực?**
3. **Bạn đang đi nhanh hơn hay chậm hơn kế hoạch?**

Năm chỉ số bạn cần biết:

### **PV – Planned Value (Giá trị theo kế hoạch)**

Là lượng công việc _đáng lẽ_ phải hoàn thành tại thời điểm này.
Nó giống như nói: “Theo kế hoạch, hôm nay ta phải chạy được 10km.”

### **EV – Earned Value (Giá trị thực tế hoàn thành)**

Là _giá trị_ của phần công việc bạn đã _thực sự_ hoàn thành.
Nếu bạn lên kế hoạch hoàn thành 10 chức năng trong 2 tuần, nhưng mới xong 6 chức năng, EV phản ánh giá trị 6 chức năng đó.

### **AC – Actual Cost (Chi phí thực tế)**

Là lượng chi phí/nguồn lực _thực sự_ đã tiêu tốn tới thời điểm này.

### **CPI – Cost Performance Index (Chỉ số hiệu quả chi phí)**

Công thức:
**CPI = EV / AC**

- CPI = 1 → đang tiêu đúng mức dự kiến
- CPI < 1 → đang _vượt chi phí_
- CPI > 1 → đang _tiết kiệm chi phí_

### **SPI – Schedule Performance Index (Chỉ số tiến độ)**

Công thức:
**SPI = EV / PV**

- SPI = 1 → đúng tiến độ
- SPI < 1 → chậm tiến độ
- SPI > 1 → nhanh hơn kế hoạch

## **Ví dụ nhỏ nhưng đủ để bạn hiểu rõ:**

Giả sử một dự án có kế hoạch:

- Hoàn thành 100 đơn vị công việc trong 10 ngày.
- Mỗi ngày hoàn thành 10 đơn vị (PV mỗi ngày).

Đến ngày thứ 5:

- Kế hoạch: 50 đơn vị → PV = 50
- Thực tế: chỉ làm được 40 đơn vị → EV = 40
- Chi phí đã tiêu: tương đương 55 đơn vị → AC = 55

Khi đó:

**CPI = 40 / 55 ≈ 0.73**
→ Tốn kém hơn dự kiến.

**SPI = 40 / 50 = 0.8**
→ Chậm tiến độ.

Chỉ hai con số CPI và SPI đủ để người quản lý biết:

- dự án đang “đốt tiền nhanh hơn chạy việc”,
- nếu không điều chỉnh, dự án sẽ trễ.

## **Bạn cần nhớ điều gì?**

Ước lượng và theo dõi chi phí trong phần mềm không phải để “đúng tuyệt đối”, mà để bạn điều khiển dự án như điều khiển một chiếc xe: nhìn đồng hồ, chỉnh tốc độ, tránh tai nạn.

Ba kỹ thuật ước lượng giúp bạn **lên đường đúng cách**.
EVM giúp bạn **đi đúng hướng**.

Sự kết hợp của chúng tạo ra một nền tảng quản lý vững chắc, ngay cả cho những dự án nhỏ nhất.

## **Managing Risk: Nhìn trước những điều có thể hỏng và chuẩn bị cho chúng**

Rủi ro là những thứ _có thể_ xảy ra, nhưng chưa chắc sẽ xảy ra.
Chúng giống như thời tiết xấu trong một chuyến đi xa: ta không thể điều khiển mưa, nhưng ta có thể mang áo khoác.

Quản lý rủi ro không phải là đoán tương lai; nó là cách giảm bớt sự ngỡ ngàng.

Có hai công cụ giúp bạn nhìn rủi ro một cách hệ thống: **risk register** và **risk matrix**.

## **1. Risk Register – Sổ theo dõi rủi ro**

Risk register là một bảng ghi những rủi ro mà bạn biết, cùng với cách đối phó.
Nó giống như một danh sách: “Nếu X xảy ra, ta làm Y.”

Một risk register thường có các cột sau:

- **Risk ID** – đánh số.
- **Description** – mô tả rủi ro.
- **Likelihood** – xác suất xảy ra (Low/Medium/High).
- **Impact** – mức độ ảnh hưởng nếu xảy ra.
- **Owner** – ai chịu trách nhiệm theo dõi.
- **Mitigation** – hành động để _giảm xác suất_.
- **Contingency Plan** – hành động nếu rủi ro _đã xảy ra_.

Hãy xem một ví dụ cho dự án “Xây dựng website thương mại điện tử nhỏ”:

| ID | Description | Likelihood | Impact | Owner | Mitigation | Contingency |
| --- | --- | --- | --- | --- | --- | --- |
| R1 | Khách hàng đổi yêu cầu thiết kế | High | Medium | PM | Chốt nguyên tắc thay đổi (change request) | Điều chỉnh timeline, lùi tính năng |
| R2 | Lập trình viên front-end nghỉ đột xuất | Medium | High | PM | Phân chia kiến thức trong nhóm | Thuê freelancer tạm thời |
| R3 | Server thử nghiệm quá tải | Low | High | DevOps | Thiết lập load test sớm | Nâng cấp tài nguyên tạm thời |

Risk register giúp dự án luôn “tỉnh táo”. Bạn không bị động chạy theo sự cố; bạn biết trước chúng có thể ghé thăm.

## **2. Risk Matrix – Bản đồ rủi ro**

Risk matrix là cách biểu diễn rủi ro trực quan bằng hai yếu tố:

- **Likelihood** – khả năng xảy ra
- **Impact** – mức độ ảnh hưởng

Khi bạn đặt chúng lên một bảng 3x3 hoặc 5x5, bạn sẽ thấy ngay rủi ro nào cần quan tâm nhất.

Một ma trận đơn giản:

```
               Impact
            Low   Med   High
Likelihood
High        M     H     H
Medium      L     M     H
Low         L     L     M
```

Trong đó:

- **H (High)** = rủi ro phải xử lý ngay
- **M (Medium)** = theo dõi + giảm nhẹ
- **L (Low)** = chỉ ghi nhận

**Ví dụ:**
Quay lại rủi ro **R1: Khách hàng đổi yêu cầu thiết kế**

- Likelihood: High
- Impact: Medium
  → Ma trận xếp nó vào vùng **H (High priority)**.

**Ý nghĩa:**
Bạn nên chủ động quản lý việc thay đổi yêu cầu ngay từ đầu (ví dụ: viết quy trình change request, xác định phạm vi rõ ràng).

## **3. Chiến lược phản ứng với rủi ro**

Sau khi xác định rủi ro, bạn cần chọn một trong bốn chiến lược phản ứng:

### **1. Avoid (Tránh) – Loại bỏ rủi ro hoàn toàn**

Ví dụ:
Nếu bạn sợ khách hàng đổi yêu cầu liên tục, bạn _đóng băng_ thiết kế sau một mốc cụ thể.

### **2. Mitigate (Giảm nhẹ) – Giảm xác suất hoặc tác động**

Ví dụ:
Để giảm rủi ro đồng đội nghỉ bệnh, bạn chia sẻ kiến thức và phân công backup.

### **3. Transfer (Chuyển giao) – Đưa rủi ro cho bên khác**

Ví dụ:
Thuê dịch vụ cloud để giảm rủi ro server crash.

### **4. Accept (Chấp nhận) – Chấp nhận rủi ro**

Ví dụ:
Chấp nhận rủi ro deadline có thể trễ 1–2 ngày trong dự án nhỏ.

Điều quan trọng là: bạn không thể quản lý rủi ro bằng hi vọng. Bạn quản lý bằng hành động.

## **4. Một ví dụ trọn vẹn: Risk Register + Risk Matrix**

Giả sử trong dự án “Hệ thống quản lý bệnh viện”, bạn có rủi ro:

**R5 – Sai sót trong xử lý dữ liệu bệnh nhân do yêu cầu không rõ ràng**

- Likelihood: Medium
- Impact: High
- Trong ma trận → xếp vào **High priority**
- Mitigation:
  - Tổ chức thêm buổi thu thập yêu cầu với bác sĩ và y tá.
  - Làm prototype giao diện để xác nhận quy trình.

- Contingency:

  - Lập bản ghi chỉnh sửa dữ liệu và quy trình xác minh lại.

Rủi ro này thuộc loại “đáng lo” vì nó chạm tới dữ liệu nhạy cảm. Không thứ gì trong dự án bệnh viện được phép “ước chừng”.

## **5. Điều quan trọng nhất khi học quản lý rủi ro**

Rủi ro không biến mất chỉ vì bạn không nhìn vào chúng.
Risk register và risk matrix giúp bạn đưa chúng ra ánh sáng — để bạn:

- không hoảng loạn khi chuyện xấu xảy ra,
- ra quyết định dựa trên lý trí,
- giữ cho dự án đi đúng hướng ngay cả khi gió đổi chiều.

Quản lý rủi ro không phải là trò chơi bi quan.
Nó là sự chuẩn bị: giống như mang ô khi bạn nhìn thấy mây đen.