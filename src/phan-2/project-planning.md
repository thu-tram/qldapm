# **Work Breakdown Structure (WBS), Milestones và Critical Path**

Khi bạn bắt đầu lập kế hoạch cho một dự án phần mềm, cảm giác đầu tiên thường là hỗn độn: quá nhiều thứ phải làm, quá nhiều câu hỏi chưa rõ. WBS, milestones và critical path sinh ra để biến mớ hỗn độn đó thành một bản đồ có thể đi theo.

## **Work Breakdown Structure (WBS): cách biến thứ phức tạp thành từng miếng nhỏ**

WBS là nghệ thuật chia nhỏ một dự án lớn thành các phần đủ nhỏ để quản lý.
Bạn cứ tưởng tượng bạn đang tháo một chiếc máy tính thành từng linh kiện: từ cái tổng thể → module → chức năng → nhiệm vụ cụ thể.

Một WBS tốt có ba đặc điểm:

* mô tả *công việc*, không mô tả con người hay công cụ,
* chia nhỏ đến mức “có thể ước lượng được thời gian và công sức”,
* tạo ra một bức tranh tổng thể: biết mình cần làm *gì*, trước khi nghĩ đến “làm *khi nào*”.

**Ví dụ (ứng dụng quản lý chi tiêu cá nhân):**

```markdown
1. **Phân tích yêu cầu**
    1.1 Thu thập yêu cầu người dùng
    1.2 Xác định phạm vi tính năng
2. **Thiết kế hệ thống**
    2.1 Thiết kế UI màn hình chính
    2.2 Thiết kế cấu trúc database
3. **Phát triển**
    3.1 Chức năng thêm giao dịch
    3.2 Chức năng thống kê tháng
4. **Kiểm thử**
    4.1 Kiểm thử đơn vị
    4.2 Kiểm thử tích hợp
5. **Triển khai**
    5.1 Đóng gói ứng dụng
    5.2 Đăng tải lên store
```

Từ đây, mọi thứ trở nên “hữu hình” hơn. Bạn không còn phải ghi “Làm app”, mà ghi “Viết chức năng thêm giao dịch”, và điều này mới thật sự lập kế hoạch được.



## **Milestones: những cột mốc đánh dấu hành trình**

Milestone là điểm mà tại đó bạn hoàn thành một phần quan trọng của dự án. Nó không phải nhiệm vụ, mà là dấu hiệu: “Ta đã tới được đây rồi.”

Bạn có thể nghĩ milestone giống như checkpoint trong trò chơi — đạt được nó nghĩa là bạn không phải chơi lại từ đầu nếu có lỗi xảy ra.

**Tiếp tục ví dụ ứng dụng quản lý chi tiêu:**

* Milestone 1: Hoàn thành phân tích yêu cầu
* Milestone 2: Hoàn thành thiết kế giao diện và database
* Milestone 3: Bản chạy thử với 2 chức năng chính
* Milestone 4: Hoàn thành kiểm thử toàn bộ
* Milestone 5: Ứng dụng sẵn sàng triển khai

Milestones giúp nhóm theo dõi tiến độ theo *chặng*, không phải theo *việc lặt vặt*.
Chúng cũng là thứ mà lãnh đạo hay khách hàng quan tâm: điểm đến, không phải từng bước chân.



## **Critical Path: con đường mà nếu trễ một bước, cả dự án trễ theo**

Critical path (đường găng) là chuỗi công việc *không được phép trễ*, vì trễ một việc kéo theo toàn bộ dự án trễ. Đó là “xương sống thời gian” của dự án.

Để tìm critical path, bạn cần hai thứ:

1. **Danh sách công việc** (từ WBS)
2. **Phụ thuộc giữa các công việc**

Bạn vẽ chúng thành một mạng lưới: công việc A xong mới làm B, B xong mới làm C…
Đường có tổng thời gian dài nhất chính là critical path.

**Ví dụ thu nhỏ:**
Giả sử bạn có 5 nhiệm vụ với thời gian dự kiến:

* A: Thiết kế UI — 4 ngày
* B: Thiết kế database — 3 ngày
* C: Lập trình chức năng 1 — 5 ngày (phụ thuộc A)
* D: Lập trình chức năng 2 — 4 ngày (phụ thuộc B)
* E: Tích hợp & kiểm thử — 3 ngày (phụ thuộc C và D)

Hai chuỗi công việc:

* A → C → E = 4 + 5 + 3 = **12 ngày**
* B → D → E = 3 + 4 + 3 = **10 ngày**

Vậy **critical path = A → C → E**.
Nếu A trễ 1 ngày, cả dự án trễ 1 ngày.
Nếu D trễ 1 ngày, bạn vẫn còn “đệm” vì nó không nằm trên critical path.

Critical path dạy ta một bài học nhỏ nhưng sắc:
*Bạn không cần kiểm soát mọi thứ, chỉ cần kiểm soát đúng thứ.*



## **Khi kết hợp cả ba**

* **WBS** giúp bạn biết *phải làm gì*.
* **Milestones** giúp bạn biết *đã đi đến đâu*.
* **Critical path** giúp bạn biết *cần ưu tiên điều gì để không trễ*.

Ba thứ này tạo nên bộ công cụ cốt lõi mà bất kỳ project manager nào cũng dùng, dù là quản lý dự án phần mềm, truyền thông hay xây dựng.
